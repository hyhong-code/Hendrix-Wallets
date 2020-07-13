module.exports = (
  res,
  statusCode = 500,
  errors = { server: "Something went wrong" }
) => {
  res.status(statusCode).json({ errors });
};
