const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize

if(process.env.JAWSDB_URL){

    sequelize = new Sequelize(process.env.JAWSDB_URL)


}else{
sequelize = new Sequelize(

process.env.DB_Name,
process.env.DB_User,
process.env.Password,

{

host:'localhost',
dialect:'mysql',
port: 3030


}

)
}

module.exports = sequelize;