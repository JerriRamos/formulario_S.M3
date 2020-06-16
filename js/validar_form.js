function validar() {
  let nome = document.getElementById("nome");
  let apelido = document.getElementById("apelido");
  let password = document.getElementById("password");
  let masc = document.getElementById("masc");
  let fem = document.getElementById("fem");
  let outro = document.getElementById("outro");
  let ilha = document.getElementById("ilha");

  if (
    ((nome.value &&
      apelido.value &&
      password.value &&
      ilha.value &&
      masc.checked) ||
      fem.checked ||
      outro.checked) == ""
  ) {
    alert("Nao pode conter campos vazios");
  } else if (!validateEmail()) {
    alert("Email invalido!");
  } else {
    add_pessoa();
  }
}

function add_pessoa() {
  let array_pessoa = [];

  let pessoa = {
    nome: nome.value,
    apelido: apelido.value,
  };

  array_pessoa.push(pessoa);

  alert(
    "Bem Vindo " +
      (array_pessoa[0].nome + " " + array_pessoa[0].apelido).toUpperCase()
  );
  return array_pessoa;
}

function validateEmail() {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
    return true;
  }
  return false;
}
