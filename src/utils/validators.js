export const validateMail = (mail) => {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(mail);
};

export const validatePassword = (password) => {
  return password.length >= 8;
};

export const validateUsername = (username) => {
  return username.length >= 3 && username.length <= 12;
};

export const validateLoginForm = ({ mail, password }) => {
  return validateMail(mail) && validatePassword(password);
};

export const validateSignupForm = ({ mail, username, password }) => {
  return (
    validateMail(mail) &&
    validateUsername(username) &&
    validatePassword(password)
  );
};
