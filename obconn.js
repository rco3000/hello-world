<<<<<<< HEAD
/// obejeto de conexao sequelize mariadb m
=======
//objeto de conexao com o mariadb usando o sequelize ----

>>>>>>> e8800a26dc2b6fcbd06d54d7154974b6688df96e

var dbname ="glpi"
var dbuser ="root"
var dbserver="localhost"
var dbpwd = "3tech"

const Sequelize = require('sequelize')
const sequelize = new Sequelize(dbname,dbuser, dbpwd,{
    host: dbserver,
    dialect:'mysql'


})

sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso")
}). catch(function(erro){
   

    console.log("Falha na conexão ao banco  " + dbname + "  no servidor  " + dbserver + " " + erro)
})
