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
            .expect('Content-Type', /json/)
            .expect(200)
            .then(response => {
                return assert(response.res, 0)
            })
            .catch(err => done(err))
    });
});

describe("PUT test", () => {
    it("should return 0", done => {
        server
            .put('/')
            .send({input: 1})
            .expect('Content-Type', /json/)
            .expect(200)
            .then(response => {
                return assert(response.res, 0)
            })
            .catch(err => done(err))
    });
});