const sqlite3 = require('sqlite3').verbose();
const sql = new sqlite3.Database('./database.db')

module.exports = {
    allQuery: async function(query, args) {
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
    },
    getQuery: async function(query, args) {
        if(!query) return console.error('No has ingresado una consulta')
        try {
            var result =
                new Promise((resolve, reject) => {
                    sql.get(query, args, function(err, row) {
                        if (err) reject(err);
                        resolve(row)
                    })
                })


        } catch (e) {
            console.error(e)
        }
        return result;
    },
    runQuery: async function(query, args) {
        if(!query) return console.error('No has ingresado una consulta')
        try {
            await sql.run(query, args)
        } catch (e) {
            console.error(e)
        }
    },
}