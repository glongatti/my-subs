
async function isRegisterFormValid({
  name, email, password, terms
}) {
  if (!name) {
    return {
      isValid: false,
      errorMessage: 'name',
    };
  }
  if (!email) {
    return {
      isValid: false,
      errorMessage: 'email',
    };
  }
  if (!password) {
    return {
      isValid: false,
      errorMessage: 'password',
    };
  }
  if (!terms) {
    return {
      isValid: false,
      errorMessage: 'terms',
    };
  }
  return {
    isValid: true
  };
}

export {
  isRegisterFormValid,
};
