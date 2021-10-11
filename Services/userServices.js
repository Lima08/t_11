const userModel = require('../Models/userModel');

async function getAllUsers() {
  const result = await userModel.getAllUsers();
  return result;
}

module.exports = {
  getAllUsers,
}