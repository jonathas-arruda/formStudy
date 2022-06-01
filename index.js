const Pessoa = {
  Nome: "",
  Sobrenome: "",
  Email: "",
};

let submit = document.getElementById("submit");

let verPessoa =()=> console.log(Pessoa);

submit.addEventListener("click", (e) => {
  e.preventDefault();

  Pessoa.Nome = document.getElementById("GET-Nome").value;
  Pessoa.Sobrenome = document.getElementById("GET-Sobrenome").value;
  Pessoa.Email = document.getElementById("GET-Email").value;

  verPessoa()
});
