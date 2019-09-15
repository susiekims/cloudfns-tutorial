const isEmpty = string => {
  if (string.trim() === "") {
    return true;
  } else {
    return false;
  }
};

const isEmail = email => {
  const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (email.match(emailRegEx)) return true;
};

exports.validateSignupData = data => {
  console.log(JSON.stringify(data));
  let errors = {};

  if (isEmpty(data.email)) {
    errors.email = "email can't be empty";
  } else if (!isEmail(data.email)) {
    errors.email = "email must be valid";
  }

  if (isEmpty(data.password)) errors.password = "password can't be empty";
  if (data.password !== data.confirmPassword) errors.confirmPassword = "passwords must match";
  if (isEmpty(data.handle)) errors.handle = "handle can't be empty";

  // if (Object.keys(errors).length > 0) return res.status(400).json(errors);

  return { errors, valid: Object.keys(errors).length === 0 ? true : false };
};

exports.validateLoginData = data => {
  let errors = {};

  if (isEmpty(data.email)) errors.email = "Email can't be empty";
  if (isEmpty(data.password)) errors.password = "Password can't be empty";

  if (Object.keys(errors).length > 0) res.status(400).json({ errors });
  return { errors, valid: Object.keys(errors).length === 0 ? true : false };
};
