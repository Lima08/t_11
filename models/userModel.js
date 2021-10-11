const connection = require('../connections/connectionMongoDB');

// async function createUser(student) {

// }
//  PAssar para dotEnv
const COLLECTION = 'students';

async function getAllUsers() {
  try {
    const db = await connection();
    const query = await db.collection(COLLECTION).find().toArray();
    return query;
  } catch {
    return null;
  }
}

module.exports = {
  getAllUsers,
}
