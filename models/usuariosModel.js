var pool = require('./db');
var md5 = require('md5');

async function getUserAndPassword(user, password) {
    try {
        var query = 'select * from usuarios where usuario = ? and password = ? limit 1';
        //limit 1 me trae un solo registro
        var rows = await pool.query(query, [user, md5(password)]);
        return rows[0]; //al[0] solo trae 1 registro

    } catch (error) {
        throw error
    }
}
// try - catch > estructura que controla el manejo de errores

module.exports = { getUserAndPassword } //exprota la función