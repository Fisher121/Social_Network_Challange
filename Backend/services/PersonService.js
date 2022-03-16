const PersonDAO  = require("../DAO/PersonDAO")
const RelationDAO  = require("../DAO/RelationDAO")
const Backtracking = require("../strategies/Backtracking")
class PersonService{
    constructor(){
        this.personDAO = new PersonDAO()
        this.relationDAO = new RelationDAO()
    }
    async InsertPerson(connection,name){
        return await this.personDAO.InsertPerson(connection,name)
    }
    async GetAll(connection){
        return await this.personDAO.GetAall(connection)
    }
    async DeleteById(connection,id){
        return await this.personDAO.DeleteById(connection,id)
    }
    async GetByID(connection,id){
        return await this.personDAO.GetByID(connection,id)
    }
    async UpdateNameByID(connection,id,new_name){
        return await this.personDAO.UpdateNameById(connection,id,new_name)
    }
    async UpdateAllNamesByName(connection,old_name,new_name){
        return await this.personDAO.UpdateAllNamesByName(connection,old_name,new_name)
    }
    async ShortestPath(connection,idA,idB){
        return await new Backtracking(connection,this.relationDAO,idA,idB).run()
    }
}
module.exports = PersonService