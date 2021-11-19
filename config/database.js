const mysql2 = require('mysql2')

const databaseConnection = mysql2.createConnection(
    {
        host:'localhost',
        user: 'root'
        datebase: 'weblunmie'

    }
)