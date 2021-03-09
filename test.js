const supertest = require("supertest");

const server = supertest.agent("http://localhost:8080");

describe("GET test", () => {
    it("should return hello", () => {
        server
            .get("/")
            .expect("Content-type", /text/)
            .expect(200)
            .end((err, res) => {
                done();
            });
    });
});