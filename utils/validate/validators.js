exports.checkEmail = (email) =>
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
    email
  );

exports.checkFullName = (fullName) =>
  /^[a-z]([-']?[a-z]+)*( [a-z]([-']?[a-z]+)*)+$/i.test(fullName);

exports.checkPassword = (password) => password.length >= 6;

exports.checkPhone = (phone) =>
  /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(phone);

exports.checkPrice = (price) => parseInt(price) && parseInt(price) > 0;

exports.checkDiscount = (discount, price) => discount >= 0 && discount < price;
