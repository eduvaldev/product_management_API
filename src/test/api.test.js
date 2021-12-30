const request = require('supertest');
const app = require('../app');

describe('GET allProducts', () => {
    it('request should return a state 200', (done) => {
        request(app).get('/api/allProducts')
            .expect(200)
            .end(done);
    });
});

describe('POST createProducts', () => {
    it('request should return a 201 state when creating', (done) => {
        const data = {
            "titulo": "Labadora LG", 
            "descripcion": "Labadora Secadora 13 Libras", 
            "precio": 5000
        }
        request(app).post('/api/createProduct?categoria=Hogar')
            .send(data)
            .expect(201)
            .end(done);
    });

    it('request should return a 400 status when it returns error', (done) => {
        const data = {
            "titulo": "Labadora LG", 
            "descripcion": "Labadora Secadora 13 Libras", 
            "precio": 5000
        }
        request(app).post('/api/createProduct?name=Hoga')
            .send(data)
            .expect(400)
            .end(done);
    });
});
