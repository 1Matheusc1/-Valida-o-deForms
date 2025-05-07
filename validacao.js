const emailInput = document.querySelector("#emailInput");
const resultMessage = document.querySelector("#resultMessage");
const emailForm = document.querySelector("#emailForm");

const passwordInput = document.querySelector("#senha");
const resultPassword = document.querySelector("#resultPassword");

const confirmPasswordInput = document.querySelector("#confirmasenha");
const resultConfirmPassword = document.querySelector("#resultConfirmPassword");

const numberInput = document.querySelector("#numberInput");
const resultNumber = document.querySelector("#resultNumber");

const nomeInput = document.querySelector("#nomeInput");
const resultNome = document.querySelector("#resultNome");

const dataInput = document.querySelector("#dataInput");
const resultData = document.querySelector("#resultData");

const cadastrarForm = document.querySelector("#emailForm");

cadastrarForm.addEventListener("submit", function (event) {
  event.preventDefault();

  resultData.textContent = "";
  resultNome.textContent = "";
  resultMessage.textContent = "";
  resultPassword.textContent = "";
  resultConfirmPassword.textContent = "";
  resultNumber.textContent = "";
  resultCadastrar.textContent = "";

  const data = dataInput.value.trim();
  const nome = nomeInput.value.trim();
  const email = emailInput.value.trim().toLowerCase();
  const password = passwordInput.value.trim();
  const confirmPassword = confirmPasswordInput.value.trim();
  const number = numberInput.value.trim();

  const isDataValid = validateData(data);
  const isNomeValid = validateNome(nome);
  const isValid = validateEmail(email);
  const isPasswordValid = validatePassword(password);
  const isNumberValid = validateNumber(number);
  const isConfirmPasswordValid = validateConfirmPassword(
    password,
    confirmPassword
  );

  let formIsValid = true;

  if (isDataValid) {
    resultData.textContent = "Data válida";
    resultData.style.color = "green";
  } else {
    resultData.textContent = "Data inválida";
    resultData.style.color = "red";
    formIsValid = false;
  }

  if (isNomeValid) {
    resultNome.textContent = "Nome válido";
    resultNome.style.color = "green";
  } else {
    resultNome.textContent = "Nome inválido";
    resultNome.style.color = "red";
    formIsValid = false;
  }

  if (isValid) {
    resultMessage.textContent = "E-mail válido!";
    resultMessage.style.color = "green";
  } else {
    resultMessage.textContent = "E-mail inválido!";
    resultMessage.style.color = "red";
    formIsValid = false;
  }

  if (isPasswordValid) {
    resultPassword.textContent = "Senha válida!";
    resultPassword.style.color = "green";
  } else {
    resultPassword.textContent = "Senha inválida!";
    resultPassword.style.color = "red";
    formIsValid = false;
  }

  if (isConfirmPasswordValid) {
    resultConfirmPassword.textContent = "Confirmação correta!";
    resultConfirmPassword.style.color = "green";
  } else {
    resultConfirmPassword.textContent = "As senhas não coincidem!";
    resultConfirmPassword.style.color = "red";
    formIsValid = false;
  }

  if (isNumberValid) {
    resultNumber.textContent = "Número válido!";
    resultNumber.style.color = "green";
  } else {
    resultNumber.textContent = "Número inválido!";
    resultNumber.style.color = "red";
    formIsValid = false;
  }

  if (formIsValid) {
    resultCadastrar.textContent = "Cadastro realizado com sucesso!";
    resultCadastrar.style.color = "green";
    cadastrarForm.submit();
  } else {
    resultCadastrar.textContent = "Por favor, corrija os erros!";
    resultCadastrar.style.color = "red";
  }
});

const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

const validatePassword = (password) => {
  return password.length >= 6;
};

const validateConfirmPassword = (password, confirmPassword) => {
  return password === confirmPassword && confirmPassword.length >= 6;
};

const validateData = (data) => {
  const regex = /^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[012])\/\d{4}$/;
  return regex.test(data);
};

const validateNumber = (number) => {
  const regex = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/;
  return regex.test(number);
};

const validateNome = (nome) => {
  return nome.length >= 5;
};
