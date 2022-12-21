const { selectCompleteTasks, selectUncompleteTasks } =require( "../../controller/actionsDB")
const connection = require('../../model/db')

const task_uncomplete={name:'study',uncomplete:0}
const task_complete ={name:'sleeping',complete:1}

describe('function selectCompleteTasks and seleceUncompleTasks',()=>{
    beforeAll(async()=>{
        const connectToDb = await connection()
        const sql =  `INSERT into fake_tasks (task_name,task_complete) VALUES('${task_uncomplete.name}','${task_uncomplete.uncomplete}'),('${task_complete.name}','${task_complete.complete}') `
        const insertValues = await connectToDb.query(sql).catch((err)=>{throw err})
    
        const closeConnection = await connectToDb.end()
    })  
   afterAll(async()=>{
        const sql = `DELETE FROM fake_tasks WHERE id > 2 `
        const connectToDb = await connection()
        const deleteValues =  await connectToDb.query(sql).catch((err)=>{throw err})
   })
    it('should select the complete tasks from DB',async()=>{
        const [rows] = await selectCompleteTasks()
        const results = rows[0]
      
        expect(results.task_complete).toBe(task_complete.complete)
        expect(results.task_name).toBe(task_complete.name)
    })
    it('should select the uncomplete tasks from DB',async()=>{
        const [rows] = await selectUncompleteTask()
        const results = rows[0]
        expect(results.task_complete).toBe(task_uncomplete.uncomplete)
        expect(results.task_name).toBe(task_uncomplete.name)
    })
})



