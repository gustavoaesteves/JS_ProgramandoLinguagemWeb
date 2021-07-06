var botaoAdicionar = document.querySelector("#adicionar-paciente")
botaoAdicionar.addEventListener("click", function(){
  //limpa a conf padrões de limpar os campos e recarregar a pag quando pressiona o botão
  event.preventDefault()
  
  //pega todo os valores colocados dentro da tag form, 
  //depois seleciona cada campo de acordo com o name mo input
  var form = document.querySelector("#form-adiciona")
  var paciente = obtemInformacaoFormulario(form)
  var erro = validaPaciente(paciente)

  if(erro.length > 0){
    //alert("Paciente invalido")
    exibeMensagemErro(erro)
    //form.reset()
    return
  }

  adicionarPacienteTabela(paciente)
  
  var ul = document.querySelector("#mensagens-erro")
  ul.innerHTML = ""
  form.reset()
} )

function adicionarPacienteTabela(paciente){
  var pacienteTr = montaTR(paciente)
  //adicionou paciente na tabela
  var tabela = document.querySelector("#tabela-pacientes")
  tabela.appendChild(pacienteTr)
}


function exibeMensagemErro(erros){
  var ul = document.querySelector("#mensagens-erro")
  ul.innerHTML = ""

  erros.forEach(function(erro){
    var li = document.createElement("li")
    li.textContent = erro
    ul.appendChild(li)
  })
}

//retorna valores de um objeto 
function obtemInformacaoFormulario(form){
  //cria um objeto
  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value)
  }
  return paciente
}
//cria a linha da tabela
function montaTR(paciente){
  //cria uma nova tag no html, colocar entre aspas a tag que deseja
  var pacienteTr = document.createElement("tr")
  pacienteTr.classList.add("paciente")

  // coloca uma tag filha dentro de uma tag pai
  pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"))
  pacienteTr.appendChild(montaTd(paciente.peso,"info-peso"))
  pacienteTr.appendChild(montaTd(paciente.altura,"info-altura"))
  pacienteTr.appendChild(montaTd(paciente.gordura,"info-gordura"))
  pacienteTr.appendChild(montaTd(paciente.imc,"info-imc"))

  return pacienteTr
}
//cria as colunas, com os valores da tabela
function montaTd(dado, classe){
  var td = document.createElement("td")
  td.textContent = dado
  td.classList.add(classe)
  return td
}

function validaPaciente(paciente){
  var erros = []
  if(paciente.nome.length == 0) erros.push("Nome não pode ser em branco")
  
  if (!validaPeso(paciente.peso)) erros.push("O peso é inválido")
  
  if (!validaPeso(paciente.altura)) erros.push("O altura é inválida")
  
  if (paciente.gordura.length == 0) erros.push("A gordura é inválida")

  return erros
}