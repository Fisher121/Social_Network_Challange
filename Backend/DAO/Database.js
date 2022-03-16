const { Pool } = require('pg');

const config = require("../config")

class Database{
    constructor(){

        this.pool = new Pool({
        connectionString: config.database.url,
        ssl: {
            rejectUnauthorized: false
            }
        });
        this.CreateTables()
    }
    CreateTables(){
        const create_person_table = `CREATE TABLE IF NOT EXISTS
        persons(
          id SERIAL PRIMARY KEY,
          name_name VARCHAR(128) UNIQUE NOT NULL
        )`

        const create_relations_table = `CREATE TABLE IF NOT EXISTS
        relations(
          id SERIAL PRIMARY KEY,
          idA integer,
          idb integer
        )`

        this.Execute(create_person_table,this.pool)
        this.Execute(create_relations_table,this.pool)
        
    }

    Execute = async (query,client) => {
        try {   // gets connection
            await client.query(query);  // sends queries
            return true;
        } catch (error) {
            console.error(error.stack);
            return false;
        }
    };
}

module.exports = Database