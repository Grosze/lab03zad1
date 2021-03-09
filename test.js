const supertest = require("supertest");

const server = supertest.agent("http://localhost:8080");

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
            .then(response => {
                assert(response.res, 0)
            })
            .catch(err => done(err))
    });
});