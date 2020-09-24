const sqlite3 = require('sqlite3').verbose();
const sql = new sqlite3.Database('../database.db')

module.exports = {
    async function(query, args) {
        if(!query) return console.error('No has ingresado una consulta')
        try {
            await sql.run(query, args)
        } catch (e) {
            console.error(e)
        }
    },
}