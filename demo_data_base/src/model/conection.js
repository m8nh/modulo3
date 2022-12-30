const mysql = require('mysql');
class Connection {
    static configToMysql = {
        host: 'localhost',
        user: 'root',
        password: 'minh1729',
        charset: 'utf8_general_ci',
        database: 'manager'
    }
    static getConnection() {
        return mysql.createConnection(Connection.configToMysql);
    }
    static connected() {
        Connection.getConnection().connect(err => {
            if (err) {
                console.log(err);
            } else {
                console.log("Connection established");
            }
        })
    }
}

module.exports = Connection; 