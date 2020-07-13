const validators = require("./validators");

/**
 * Checks whether given email, name, and password are valid.
 * @function checkRegister
 * @param {string} email - email to be validated
 * @param {string} name - name to be validated
 * @param {string} password - password to be validated
 * @returns {object} whether given parameters are valid, and errors
 */
exports.checkRegister = (email, name, password) => {
  const errors = {};
  if (!email) {
    errors.email = `Email is required`;
  } else if (!validators.checkEmail(email)) {
    errors.email = `${email} is not a valid email address`;
  }

  if (!name) {
    errors.name = `Name is required`;
  } else if (!validators.checkFullName(name)) {
    errors.name = `${name} is not a valid fullname`;
  }

  if (!password) {
    errors.password = "Password is required";
  } else if (!validators.checkPassword(password)) {
    errors.password = `Password must be at least 6 characters long`;
  }

  return { errors, isValid: !Object.keys(errors).length };
};

/**
 * Checks whether given email, and password are valid.
 * @function checkRegister
 * @param {string} email - email to be validated
 * @param {string} password - password to be validated
 * @returns {object} whether given parameters are valid, and errors
 */
exports.checkLogin = (email, password) => {
  const errors = {};
  if (!email) {
    errors.email = `Email is required`;
  } else if (!validators.checkEmail(email)) {
    errors.email = `${email} is not a valid email address`;
  }

  if (!password) {
    errors.password = "Password is required";
  } else if (!validators.checkPassword(password)) {
    errors.password = `Password must be at least 6 characters long`;
  }

  return { errors, isValid: !Object.keys(errors).length };
};

/**
 * Checks whether given phone, email, and password are valid.
 * @function checkRegister
 * @param {string} phone - phone number to be validated
 * @param {string} email - email to be validated
 * @param {string} name - name to be validated
 * @returns {object} whether given parameters are valid, and errors
 */
exports.checkProfile = (phone, email, name) => {
  const errors = {};

  if (phone && !validators.checkPhone(phone)) {
    errors.phone = `${phone} is not a valid phone number`;
  }

  if (email && !validators.checkEmail(email)) {
    errors.email = `${email} is not a valid email address`;
  }

  if (name && !validators.checkFullName(name)) {
    errors.name = `${name} is not a valid full name`;
  }

  return { errors, isValid: !Object.keys(errors).length };
};
