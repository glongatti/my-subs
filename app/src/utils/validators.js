function isEmailValid(email) {
  if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return (true);
  }
  return (false);
}
async function isRegisterFormValid({
  name, email, password, confirmPassword, terms
}) {
  if (!name || !email || !password || !confirmPassword) {
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

  if (password !== confirmPassword) {
    return {
      isValid: false,
      errorMessage: 'As senhas não coincidem',
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
