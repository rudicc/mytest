const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config({
    path: './.env'
});
const dbconnection = mysql.createConnection(
    {
        host     : process.env.DATABASE_HOST, 
        port     : process.env.DATABASE_PORT,
        user     : process.env.DATABASE_USER, 
        password : process.env.DATABASE_PASSWORD, 
        database : process.env.DATABASE_NAME,
    }
)

dbconnection.connect((err) =>{
    if(err){
        throw err
    }
    else{
        console.log("Connected Mysql");
    }
})

module.exports = dbconnection