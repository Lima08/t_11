const userServices = require('../services/userServices');

const getAllUsers = async (_req, res, next) => {
  const result = await userServices.getAllUsers()
  if (result.error) {
    return next(result.error);
  }
  return res.status(200).json(result);
};

module.exports = {
  getAllUsers,
}