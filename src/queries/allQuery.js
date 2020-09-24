const sqlite3 = require('sqlite3').verbose();
const sql = new sqlite3.Database('../database.db')

module.exports = {
    async function(query, args) {
        if(!query) return console.error('No has ingresado una consulta')
        try {
            var result =
                new Promise((resolve, reject) => {
                    sql.all(query, args, function(err, row) {
                        if (err) reject(err);
                        resolve(row)
                    })
                })


        } catch (e) {
            console.error(e)
        }
        return result;
    }
}