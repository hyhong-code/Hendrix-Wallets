/**
 * Sends error response with specified status code and error object
 * @function sendError
 * @param {object} res - express response object
 * @param {number} statusCode - status code to send along with response
 * @param {object} errors - object contaning errors
 */
module.exports = (
  res,
  statusCode = 500,
  errors = { server: "Something went wrong" }
) => {
  res.status(statusCode).json({ errors });
};
