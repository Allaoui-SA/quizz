let mysql = require('mysql')

//variables de connexion
let db = mysql.createConnection({
    host: 'localhost',
    port: '8889',
    user: 'root',
    password: 'root',
    database: 'quizz'
})

//lance la connexion
db.connect()

//exporte la connexion
module.exports = db