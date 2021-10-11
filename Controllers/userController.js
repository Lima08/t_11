const userServices = require('../Services/userServices');

const getAllUsers = async (_req, res) => {
  const result = await userServices.getAllUsers()
  return res.status(200).json(result);
};

module.exports = {
  getAllUsers,
}