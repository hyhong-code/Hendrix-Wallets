exports.checkEmail = (email) =>
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
    email
  );

exports.checkFullName = (fullName) =>
  /^[a-z]([-']?[a-z]+)*( [a-z]([-']?[a-z]+)*)+$/.test(fullName);

exports.checkPassword = (password) => password.length >= 6;
