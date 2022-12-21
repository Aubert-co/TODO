const { updateTasks } =require( "../../controller/actionsDB")
const connection = require('../../model/db')
const task_name = "test_update"
const task_time = 30
var id
describe('function updateTasks',()=>{
    beforeAll(async()=>{
        const sql = `INSERT into fake_tasks (task_name,task_complete) VALUES('${task_name}','${0}')`
        const select = `SELECT *FROM fake_tasks where task_name ="${task_name}"`
        const connectToDb = await connection()
        const insertValues = await connectToDb.query(sql).catch((err)=>{throw err})
        const [rows] = await connectToDb.query(select)
        id = rows[0].id
        const closeConnection = await connectToDb.end()
    })  
   afterAll(async()=>{
        const sql = `DELETE FROM fake_tasks WHERE id="${id}" `
        const connectToDb = await connection()
        const deleteValues =  await connectToDb.query(sql).catch((err)=>{throw err})
        connectToDb.end()
   })
    it('should update the values in DB',async()=>{
        const Dates = new Date()

        const [day,year,month] = Dates.toString().split(' ')
        const [data,hour] =  Dates.toISOString().split('T')
        const deleteValues = await updateTasks(id,data,task_time)
        const sql = `SELECT *FROM fake_tasks where id="${id}"`
        const connectToDb = await connection()
        const [row] = await connectToDb.query(sql)
        const results = row[0]
    
        const dateFromDB = results.task_date.toString().split(' ')
     
        expect(results.task_name).toBe(task_name)
        expect(results.task_complete).toBe(1)
        expect(results.task_time).toBe(task_time)
        expect(dateFromDB[0]).toBe(day)
        expect(dateFromDB[1]).toBe(year)
        expect(dateFromDB[2]).toBe(month)
    })
})
