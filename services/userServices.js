const userModel = require('../models/userModel');

async function getAllUsers() {
  const result = await userModel.getAllUsers();
  if (!result) {
    return {
      error: {
        code: 'internalError',
        message: 'Alguma coisa deu ruim aqui',
      }
    }
  }
  if (result.length === 0) {
    // 404 In an API, this can also mean that the endpoint is valid but the resource itself does not exist.
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#client_error_responses
    return {
      error: {
        code: 'notFound',
        message: 'Nenhum usuário encontrado',
      }
    }
  }
  return result;
}

module.exports = {
  getAllUsers,
}