var pacientes = document.querySelectorAll(".paciente")

var tabela = document.querySelector("table")
// remover da tabela o nome que foi recebeu duplo click
tabela.addEventListener("dblclick", function(event){
  // Pega o filho que foi o alvo do evento(event.target)  >> TD
  var alvoEvento = event.target.parentNode.classList.add("fadeOut")

  // Sobe para o pai do Evento Alvo(parentNode) >> TR, esta colocando para sumir devagar até remover
  setTimeout(function(){
    event.target.parentNode.remove()
  }, 500)
  //Remove o pai.
  
})

/*console.log(pacientes)

pacientes.forEach(function(paciente){
  //Evento para duplo click
  paciente.addEventListener("dblclick", function(){
    //remover o proprio paciente com duplo click
    this.remove()
  })
})*/