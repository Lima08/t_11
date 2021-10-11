const { MongoClient } = require('mongodb');
const { HOST, DB_NAME } = process.env || 'mongodb://127.0.0.1:27017';

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