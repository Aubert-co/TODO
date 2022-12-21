const { insertTasks } =require( "../../controller/actionsDB")
const connection = require('../../model/db')
const task_name = "study"
describe('function insertTasks',()=>{
    beforeAll(async()=>{
       
    })  
    afterAll(async()=>{
        const sql = `DELETE FROM fake_tasks where task_name="${task_name}"`
        const connectToDb = await connection()
        const deleteValue = await connectToDb.query(sql).catch((err)=>{throw err})
        const endConnection = await connectToDb.end()
    })
    it('should insert correct values in DB',async()=>{
        const insert = await insertTasks(task_name).catch((err)=>{throw err})
        const sql = `SELECT *FROM fake_tasks where task_name ="${task_name}"`
        const connectToDb = await connection()
        const [row] = await connectToDb.query(sql)
        const results = row[0]
      
        expect(row.length).toBe(1)
        expect(results.task_name).toBe(task_name)
        expect(results.task_complete).toBe(0)
        expect(results.task_time).toBe(null)
        const endConnection = await connectToDb.end()
    })
})
