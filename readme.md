# MasterDB 

MasterDB es una npm muy simple de usar perfecta para aquellas personas que desean crear una base de datos usando sqlite devido que agiliza las consultas realizadas.

> ⚠ Se requiere conocimiento sql devido a que se usaran consultas.

# Instalación

```bash
npm i masterdb
```

# Funciones

- runQuery  :  Ejecuta la consulta para lograr agregar/actualizar/borrar datos.
- getQuery  :  Ejecuta la consulta para lograr obtener los datos solicitados.
- allQuery  :  Ejecuta la consulta para lograr obtener todos datos solicitados.

# Limitaciones

> ⚠ No podras cambiar el nombre de la base de datos.

# Ejemplos

> Puedes ver un ejemplo mas completo usando MasterDB con un bot de niveles: [aqui](https://github.com/WearGlitz/NivelBot)

```js
/* llamamos el modulo */
const masterdb = require('masterdb')

/* Crear una tabla */

let query = 'CREATE TABLE IF NOT EXISTS niveles (userid TEXT, xp INTEGER, nivel INTEGER)'
await masterdb.runQuery(query)
/* Agregar un dato */

let query = 'INSERT INTO niveles (userid, xp, nivel) VALUES(?, ?, ?)'
await masterdb.runQuery(query, [userid, xp, nivel])

/* Actualizar un dato */

let query = 'UPDATE nivels SET xp = ?, nivel = ? WHERE userid = ?'
await masterdb.runQuery(query, [xp, nivel, userid])}

/* Borrar dato */

let query = 'DELETE FROM niveles WHERE userid = ?'
await masterdb.runQuery(query, userid)

/* Obtener datos */

let query = 'SELECT * FROM niveles WHERE userid = ?'
let result = await masterdb.getQuery(query, userid)

/* Obtener todos los datos */

let query = 'SELECT * FROM niveles'
let result = await masterdb.allQuery(query)
```

# Información

Creador: WearGlitz
Soporte: [discord](https://discord.gg/h22uhd5)