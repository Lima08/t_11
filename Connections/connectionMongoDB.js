const { MongoClient } = require('mongodb');
//  Necessario configurar o env para o desenvolvimento
const { HOST, DB_NAME } = process.env;

const OPTIONS = {
useNewUrlParser: true,
useUnifiedTopology: true,
}

let db = null;

const connection = () => {
return db
? Promise.resolve(db)
: MongoClient.connect(HOST, OPTIONS)
.then((conn) => {
db = conn.db(DB_NAME);

return db;
})
}; 

module.exports = connection;