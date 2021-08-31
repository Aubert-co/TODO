const {expect} = require('chai')
const request = require('supertest')
const app = require('../serve')
const db = require('../model/db')

var server

describe('Get /tasks/selectUncomplete Tasks',()=>{
    beforeAll((done)=>{
        server = app.listen(8081,()=>{
            server = request(app)
            
            done()
        })
    })
    test("return a 200 status ",async()=>{
        const resp = await server
        .get('/tasks/selectUncomplete')
        expect(resp.status).to.equal(200)
     
    })
    test("return a array ",async()=>{
        const resp = await server
        .get('/tasks/selectUncomplete')
        expect(resp.body.results).to.be.a('array')
    })

    
        test("return a status 404",async()=>{
            const resp = await server
            .post('/tasks/insert')
            .set({'Content-Type':'application/json'})
            .send({task_name:''})
            expect(resp.status).to.equal(404)  
        })
    })


