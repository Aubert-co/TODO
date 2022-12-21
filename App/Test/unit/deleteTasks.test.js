const { deleteTasks } =require( "../../controller/actionsDB")
const connection = require('../../model/db')
const task_name = "test_delete"
var id
describe('function insertTask',()=>{
    beforeAll(async()=>{
        const sql = `INSERT into fake_tasks (task_name,task_complete) VALUES('${task_name}','${0}')`
        const select = `SELECT *FROM fake_tasks where task_name ="${task_name}"`
        const connectToDb = await connection()
        const insertValues = await connectToDb.query(sql).catch((err)=>{throw err})
        const [rows] = await connectToDb.query(select)
        id = rows[0].id
        const closeConnection = await connectToDb.end()
    })  
   
    it('should insert correct values in DB',async()=>{
        const deleteValues = await deleteTasks(id)
        const sql = `SELECT *FROM fake_tasks where id="${id}"`
        const connectToDb = await connection()
        const [row] = await connectToDb.query(sql)
        const results = row[0]
      
        expect(row.length).toBe(0)
        expect(results).toBe(undefined)
        
    })
})
