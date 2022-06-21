const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb',
    port: 3306
}
const mariadb = require('mysql')
var connection = mariadb.createConnection(config)

const sqlCreateTable = `CREATE TABLE IF NOT EXISTS people (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255) NOT NULL)`
connection.query(sqlCreateTable)
connection.end()

app.get('/', (req,res) => {
    connection = mariadb.createConnection(config)
    const sql = `INSERT INTO people(name) VALUES ('carlos')`
    connection.query(sql)
    connection.query("SELECT * FROM people", function (err, result, fields) {
        if (err) throw err;
        var response = '<h1>Full Cycle Rocks!</h1>'
        for (let i = 0; i < result.length; i++) {
            response = response + '<p>' + result[i].name + '</p>'
        }
        res.send(response)
        console.table(result)
    });
    connection.end()
})

app.listen(port, () => {
    console.log('rodando na porta ' + port)
})