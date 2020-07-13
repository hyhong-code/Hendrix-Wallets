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
 * @function checkProfile
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

/**
 * Checks whether given name and description are valid.
 * @function checkCategory
 * @param {string} name - category name to be validated
 * @param {string} description - category description to be validated
 * @returns {object} whether given parameters are valid, and errors
 */
exports.checkCategory = (name, description) => {
  const errors = {};

  if (!name) {
    errors.name = `A category name is required`;
  }

  if (!description) {
    errors.description = `A category description is required`;
  }

  return { errors, isValid: !Object.keys(errors).length };
};

/**
 * Checks whether given name, description, price, and discount are valid.
 * @function checkItem
 * @param {string} name - item name to be validated
 * @param {string} description - item description to be validated
 * @param {integer} price - item price to be validated
 * @param {integer} discount - item discount to be validated
 * @returns {object} whether given parameters are valid, and errors
 */
exports.checkItem = (name, description, price, discount) => {
  const errors = {};

  if (!name) {
    errors.name = `An item name is required`;
  }

  if (!description) {
    errors.description = `An item description is required`;
  }

  if (!price) {
    errors.price = `Price is required`;
  } else if (!validators.checkPrice(price)) {
    errors.price = `Price must be in cents and greater than 0`;
  }

  if (!validators.checkDiscount(discount, price)) {
    errors.discount = `Discount must be a positive number and smaller than price`;
  }

  return { errors, isValid: !Object.keys(errors).length };
};

/**
 * Checks whether given email, name, phone, and address are valid.
 * @function checkOrder
 * @param {string} name - order recipient's name to be validated
 * @param {string} email - order recipient's email to be validated
 * @param {string} phone - order recipient's phone number to be validated
 * @param {string} address - order recipient's address number to be validated
 * @returns {object} whether given parameters are valid, and errors
 */
exports.checkOrder = (email, name, phone, address) => {
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

  if (!phone) {
    errors.phone = `A phone number is required`;
  } else if (!validators.checkPhone(phone)) {
    errors.phone = `${phone} is not a valid phone number`;
  }

  if (!address) {
    errors.address = `An address is required`;
  }

  return { errors, isValid: !Object.keys(errors).length };
};
