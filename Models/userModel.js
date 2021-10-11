const connection = require('../Connections/connectionMongoDB');

// async function createUser(student) {

// }
//  PAssar para dotEnv
const COLLECTION = 'students';

async function getAllUsers() {
  const db = await connection();
  const query = await db.collection(COLLECTION).find().toArray();

  return query;
}

module.exports = {
  getAllUsers,
}
