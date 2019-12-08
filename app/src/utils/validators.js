function isEmailValid(email) {
  if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return (true);
  }
  return (false);
}
async function isRegisterFormValid({
  name, email, password, terms
}) {
  if (!name || !email || !password) {
    return {
      isValid: false,
      errorMessage: 'Por favor, preencha todos os campos!',
    };
  }
  if (!terms) {
    return {
      isValid: false,
      errorMessage: 'É Necessário aceitar os termos de uso para continuar!',
    };
  }
  if (!isEmailValid(email)) {
    return {
      isValid: false,
      errorMessage: 'O e-mail inserido é inválido!',
    };
  }
  return {
    isValid: true,
    errorMessage: '',
  };
}

export {
  isRegisterFormValid,
};
