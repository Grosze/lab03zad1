const supertest = require("supertest");

const server = supertest.agent("http://localhost:8080");

const assert = (a, b) => {
    if (a === b) {
        return true;
    }; 

    return false;
};

describe("GET test", () => {
    it("should return hello", done => {
        server
            .get("/")
            .expect("Content-type", /text/)
            .expect(200)
            .end((err, res) => {
                done();
            });
    });
});

describe("POST test", () => {
    it("should return 0", done => {
        server
            .post('/')
            .send({input: "john"})
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err, res) => {
                done();
            });
    });
});

describe("PUT test", () => {
    it("should return 0", done => {
        server
            .put('/')
            .send({input: 1})
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err, res) => {
                done();
            });
    });
});

describe("DELETE test", () => {
    it("should return 0", done => {
        server
            .delete('/')
            .send({input: 7})
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err, res) => {
                done();
            });
    });
});