const config = require("../config")

const supertest = require("supertest")
const request = supertest(config.app.host + `:` + config.app.port +`/api/`)
const {expect} = require("chai")

describe(`relation`,() => {
    it(`GET getAll should not be empty`, (done) => {
        request
        .get(`relation/getAll`).end((err,res) => {
            expect(res.body.data).to.not.be.empty
            done()
        })
    })
    it(`GET getAllByPersonID should not be empty`, (done) => {
        request
        .get(`relation/getAllByPersonID?id=3`).end((err,res) => {
            expect(res.body.data).to.not.be.empty
            done()
        })
    })
    it(`GET getAllByPersonID statuscode should be 404`, (done) => {
        request
        .get(`relation/getAllByPersonID?id=1`).end((err,res) => {
            expect(res.statusCode).to.equal(404)
            done()
        })
    })
})