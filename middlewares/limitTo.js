const sendError = require("../utils/sendError");

/**
 * Limits route acces to given user roles
 * @param  {...any} rolesWithAccess - user roles that can access this route
 */
module.exports = (...rolesWithAccess) => (req, res, next) => {
  if (!rolesWithAccess.includes(req.user.role)) {
    return sendError(res, 403, { message: "Access denied" });
  }
  next();
};
