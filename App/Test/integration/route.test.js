const request = require('supertest')
const server = require('../../serve')

const connection = require('../../model/db')

var task_time,id,app
const TRUE = 1
const FALSE = 0
const task_1 ={name:'study',complete:0}
const task_2 ={name:'games',complete:0}
const task_3 = {name:'sleeping',complete:1}
const task_4 = {name:'working',complete:1}
describe('Get /tasks/uncomplete and GET /tasks/complete',()=>{
    beforeAll(()=>{
        app = server.listen(8080)
    })
    beforeEach(async()=>{
  
        const sql = `INSERT into fake_tasks (task_name,task_complete) VALUES('${task_1.name}','${task_1.complete}'),('${task_2.name}','${task_2.complete}'),('${task_3.name}','${task_3.complete}'),('${task_4.name}','${task_4.complete}')`
        const selectValues = `SELECT * FROM fake_tasks WHERE task_name='study'`
        const connectToDb = await connection()
        const insertValues = await connectToDb.query(sql).catch((err)=>{throw err})
        const [rows] = await connectToDb.query(selectValues)
        id = rows[0].id
   
        const closeConnection = await connectToDb.end()
    })
    afterEach(async()=>{
        const sql = "DELETE FROM fake_tasks WHERE id >2"
        const connectToDb = await connection()
        const deleteValues = await connectToDb.query(sql).catch((err)=>{throw err})
        const closeConnection =  await connectToDb.end()
    })
    it("should return an arrray with uncomplete tasks and return a status 200",async()=>{
        const resp = await request(app)
        .get('/tasks/uncomplete')
    
        const data = resp.body.results
        const filterUncompleteValues = data.filter(({task_complete})=>task_complete===0)
        const completeValues = data.filter(({task_complete})=>task_complete===1)
        expect(resp.body).toHaveProperty('results')
        
        expect(data).toHaveLength(2)
        expect(resp.status).toBe(200)
        expect( filterUncompleteValues ).toHaveLength(2)
        expect(completeValues).not.toHaveLength(2)
        
    })
    it("should return an arrray with complete tasks and return a status 200",async()=>{
        const resp = await request(app)
        .get('/tasks/complete')
        
        const data = resp.body.results
        const filtercompleteValues = data.filter(({task_complete})=>task_complete===1)
        const UncompleteValues = data.filter(({task_complete})=>task_complete===0)
        expect(resp.body).toHaveProperty('results')
        expect(data).toHaveLength(2)
        expect(resp.status).toBe(200)
        expect( filtercompleteValues ).toHaveLength(2)
        expect(UncompleteValues).not.toHaveLength(2)
   
    })
    it("should delete values and return a status 200 when send a valid id",async()=>{
        const resp = await request(app)
        .put(`/tasks/delete/${id}`)
        
        const connectToDb= await connection()
        const sql =`SELECT * FROM fake_tasks WHERE id='${id}'`
        const checkIfDatasIsDeleted   = await connectToDb.query(sql)
        const [results] = checkIfDatasIsDeleted
        const endConnection =await connectToDb.end()
        expect(resp.status).toBe(200)
        expect(results).toStrictEqual([])

    })
    it("should insert values and return a status 200 when send valid taks name",async()=>{
        const name = "testInsert"
        const falsy = 0
        const resp = await request(app)
        .post(`/tasks/insert/${name}`)

        const sql =`SELECT * FROM fake_tasks WHERE task_name='${name}'`
        const connectToDb = await connection()
        const checkIfDatasIsDeleted   = await connectToDb.query(sql)
        const [results] = checkIfDatasIsDeleted
        const rows = results[0]
        const endConnection =await connectToDb.end()
        expect(resp.status).toBe(200)
        expect(rows.task_name).toBe(name)
        expect(rows.task_complete).toBe(falsy)
    })
    it('should update values and return a status 200 when send valid values',async()=>{
        const truly = 1
        const task_timeTest = 30
        const resp = await request(app)
        .put(`/tasks/update`)
        .set({'Content-Type':'application/json'})
        .send({id,task_time:task_timeTest})
        .catch((err)=>{throw err})

        const selectToCheck =`SELECT * FROM fake_tasks WHERE id='${id}'`
        const connectToDb = await connection()
     
        const getValuesFromQuery   = await connectToDb.query(selectToCheck)
        const [datas] = getValuesFromQuery
        const {task_name,task_complete,task_time} =datas[0]
        const endConnection =await connectToDb.end()
       
        expect(resp.status).toBe(200)
        expect(task_name).toBe(task_1.name)
        expect(task_complete).toBe(truly)
        expect(task_time).toBe(task_timeTest)
    })
})