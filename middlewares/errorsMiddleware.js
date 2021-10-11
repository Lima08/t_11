const ERROR_CODES = {
  badRequest: 400,
  invalidData: 400,
  notFound: 404,
  alreadyExists: 409,
  notDefined: 500,
  internalError: 500,
};

module.exports = function (error, _request, response, _next) {
  if (error.Joi) {
    return response
      .status(ERROR_CODES.invalidData)
      .json({
        error: true,
        message: error.details[0].message.replace(/"/g, "'"),
      });
  }
  const status = ERROR_CODES[error.code] || ERROR_CODES.notDefined;
  return response.status(status).json({ error: true, message: error.message });
};
