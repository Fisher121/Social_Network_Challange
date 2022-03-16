const { database } = require("pg/lib/defaults")

const config = {
    app:{
        port:"5000",
        host:"http://localhost"
    },

    database:{
        url:"postgres://tqceswttisilwb:2a503bb640e44bb2f6e1d944c9ed8ae0c6122c460fb144a2c156b6f23551bdc2@ec2-54-73-68-39.eu-west-1.compute.amazonaws.com:5432/d93nvrkvevmmms"
    }
}

module.exports = config