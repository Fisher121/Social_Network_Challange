const config = require("../config")

const supertest = require("supertest")
const request = supertest(config.app.host + `:` + config.app.port +`/api/`)
const {expect} = require("chai")

describe(`person`,() => {
    it(`GET getAll should not be empty`, (done) => {
        request
        .get(`person/getAll`).end((err,res) => {
            expect(res.body.data).to.not.be.empty
            done()
        })
    })
    it(`GET shortestPath should not be empty`, (done) => {
        request
        .get(`person/shorthestPath?idA=2&idB=15`).end((err,res) => {
            expect(res.body.data).to.not.be.empty
            done()
        })
    })
    it(`GET shortestPath statusCode should be 404`, (done) => {
        request
        .get(`person/shorthestPath?idA=2&idB=200`).end((err,res) => {
            expect(res.statusCode).to.equal(404)
            done()
        })
    })
    it(`GET personByID should not be empty`, (done) => {
        request
        .get(`person/getByID?id=11`).end((err,res) => {
            expect(res.body.data).to.not.be.empty
            done()
        })
    })
    it(`GET personByID statuscode should be 404`, (done) => {
        request
        .get(`person/getByID?id=200`).end((err,res) => {
            expect(res.statusCode).to.equal(404)
            done()
        })
    })
})