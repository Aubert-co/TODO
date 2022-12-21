const request = require('supertest')
const server = require('../../serve')

var app

describe('Get /tasks/uncomplete and GET /tasks/complete',()=>{
    beforeAll(()=>{
        app = server.listen(8080)
    })
 
    it("should delete values and return a status 402 when send a valid id",async()=>{
        const id ="i3"
        const resp = await request(app)
        .put(`/tasks/delete/${id}`)
    
        expect(resp.status).toBe(402)
        
    })
    it("should insert values and return a status 402 when send valid taks name",async()=>{
        const name = 30
        const resp = await request(app)
        .post(`/tasks/insert/${name}`)

        expect(resp.status).toBe(402)
        
    })
    it('should return a status 402 when send an invalid id',async()=>{
       
        const resp = await request(app)
        .put(`/tasks/update`)
        .set({'Content-Type':'application/json'})
        .send({id:'i9',task_time:30})
        
        expect(resp.status).toBe(402)
        
    })
})
