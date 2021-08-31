const {expect} = require('chai')
const request = require('supertest')
const app = require('../serve')
const db = require('../model/db')

var task_time,id
const TRUE = 1
const FALSE = 0
describe('Get /tasks/selectUncomplete Tasks',()=>{
    
    test("return a status 200  and a array ",async()=>{
        const resp = await request(app)
        .get('/tasks/selectUncomplete')
        expect(resp.status).to.equal(200)
        expect(resp.body.results).to.be.a('array')
        const data = resp.body.results
        const filter = ((val)=>val.task_complete === FALSE)
        expect(data.length).to.equal(data.filter(filter).length)
    })
   
})
describe('Get /tasks/selectComplete Tasks',()=>{
    
    test("return a status 200  and a array ",async()=>{
        const resp = await request(app)
        .get('/tasks/selectComplete')
        expect(resp.status).to.equal(200)
        expect(resp.body.results).to.be.a('array')
        const data = resp.body.results
        const filter = ((val)=>val.task_complete === TRUE)
        expect(data.length).to.equal(data.filter(filter).length)
    })
   
})
describe("route POST /tasks/insert ",()=>{
    test("return a status 404 when send wrong values",async()=>{
        const resp = await request(app)
        .post('/tasks/insert')
        .set({'Content-Type':'application/json'})
        .send({task_name:''})
    
        expect(resp.status).to.equal(404)
      
    })
    test("return a status 200 when send correct values",async()=>{
        const resp = await request(app)
        .post('/tasks/insert')
        .set({'Content-Type':'application/json'})
        .send({task_name:'test_test'})

        expect(resp.status).to.equal(200)
    })
 
        test("check values in the db after insert value",async()=>{
        const SQL = "SELECT * FROM tasks WHERE task_name='test_test'"
        db.query(SQL,(err,results)=>{
            if(err)throw err
    
            expect(results[0].task_name).to.equal('test_test')
            expect(results.length).to.equal(1)
            expect(results[0].task_complete).to.equal(FALSE)
            id = results[0].id
        })
    })
})
describe("route Update tasks/update",()=>{
    test("should return a status 404 when send wrong task_time",async()=>{
        const resp = await request(app)
        .put('/tasks/update')
        .set({'Content-Type':'application/json'})
        .send({task_time:'',id:1})
        expect(resp.status).to.equal(404)
    })
    test("should return a status 404 when send wrong id",async()=>{
        const resp = await request(app)
        .put('/tasks/update')
        .set({'Content-Type':'application/json'})
        .send({task_time:10,id:''})
        expect(resp.status).to.equal(404) 
    })
    test("should return a status 200 when send correct values",async()=>{
        task_time =10
        const resp = await request(app)
        .put('/tasks/update')
        .set({'Content-Type':'application/json'})
        .send({task_time,id})
        expect(resp.status).to.equal(200)
    })
    test("check the values are corrects in the db",async()=>{
        const SQL = `SELECT * FROM tasks WHERE id ='${id}'`
        db.query(SQL,(err,results)=>{
            if(err)throw err

            expect(results[0].task_time).to.equal(task_time)
            expect(results[0].task_complete).to.equal(TRUE)
        })
    })
})
describe("route Delete tasks/delete",()=>{
    test("should return a status 404 when send wrong values",async()=>{
        const resp = await request(app)
        .delete('/tasks/delete')
        .set({'Content-Type':'application/json'})
        .send({id:''})
        expect(resp.status).to.equal(404)
    })
    test("should return a status 200 when send correct values",async()=>{
        const resp = await request(app)
        .delete('/tasks/delete')
        .set({'Content-Type':'application/json'})
        .send({id})
        expect(resp.status).to.equal(200)
    })
    
    test("check value in db after  value deleted ",async()=>{
        const SQL = `SELECT * FROM tasks WHERE id ='${id}'`
        db.query(SQL,(err,results)=>{
            if(err)throw err

            expect(results.length).to.equal(0)
        })
    })
})