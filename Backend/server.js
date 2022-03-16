const config = require("./config")

const http = require("http");

const Database = require("./DAO/Database");

const PersonController = require("./controllers/PersonController")
const RelationController = require("./controllers/RelationController")

const person_controller = new PersonController()
const relation_controller = new RelationController()

const PORT = config.app.port


const server = http.createServer(async (req, res) => {
    const database = new Database()
    if (req.url.match(/\/api\/person\/insert/) && req.method === "POST") {
        await person_controller.InsertPerson(database.pool,req,res)
    }else
    if (req.url.match(/\/api\/person\/delete/) && req.method === "DELETE") {
        await person_controller.DeleteByID(database.pool,req,res)
    }else
    if (req.url.match(/\/api\/person\/update/) && req.method === "PUT") {
        await person_controller.UpdateNameByID(database.pool,req,res)  
    }else
    if (req.url.match(/\/api\/person\/putByName/) && req.method === "PUT") {
        await person_controller.UpdateAllNamesByName(database.pool,req,res)  
    }else
    if (req.url.match(/\/api\/person\/getAll/) && req.method === "GET") {
        await person_controller.GetAll(database.pool,req,res)   
    }else
    if (req.url.match(/\/api\/person\/getByID[?id=^\d+$]/) && req.method === "GET") {
        await person_controller.GetByID(database.pool,req,res)
    }else
    if (req.url.match(/\/api\/person\/shorthestPath[?idA=^\d+$&idB=^\d+$]/) && req.method === "GET") {
        await person_controller.ShortestPath(database.pool,req,res)
    }else
    if (req.url.match(/\/api\/relation\/insert/) && req.method === "POST") {
        await relation_controller.InsertRelation(database.pool,req,res)
    }else
    if (req.url.match(/\/api\/relation\/delete/) && req.method === "DELETE") {
        await relation_controller.DeleteByID(database.pool,req,res)
    }else
    if (req.url.match(/\/api\/relation\/update/) && req.method === "PUT") {
        //not implemented  
    }else
    if (req.url.match(/\/api\/relation\/getAllByPersonID[?id=^\d+$]/) && req.method === "GET") {
        await relation_controller.GetAllByPersonID(database.pool,req,res)
    }else
    if (req.url.match(/\/api\/relation\/getAll/) && req.method === "GET") {
        await relation_controller.GetAll(database.pool,req,res)
    }else
    {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Route not found" }));
    }
    database.pool.end()
});

server.listen(PORT, () => {
    console.log(`server started on port: ${PORT}`);
});