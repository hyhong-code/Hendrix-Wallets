const validators = require("./validators");

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
