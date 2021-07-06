var campoFiltro = document.querySelector("#filtrar-tabela")

campoFiltro.addEventListener("input", function(){
  console.log(this.value)
//Faz a filtragem de todas as pessoas.
  var pacientes = document.querySelectorAll(".paciente")
  if(this.value.length > 0) {
    for (var i = 0; i < pacientes.length; i++) {
      var paciente = pacientes[i]
      var tdNome = paciente.querySelector(".info-nome")
      var nome = tdNome.textContent
      // Expressão regular, para fazer uma busca, passa o que deseja buscar 
      // e se é case sensitive
      var expressao = new RegExp(this.value, "i")
      // expressao.test faz um teste se tem uma parte da expressao dentro do parametro
      if(!expressao.test(nome)){
        paciente.classList.add("invisivel")
      }else {
        paciente.classList.remove("invisivel")
      }
    }
  }else {
    for (var i = 0; i < pacientes.length; i++) {
      var paciente = pacientes[i]
      paciente.classList.remove("invisivel")
    }
  }
})