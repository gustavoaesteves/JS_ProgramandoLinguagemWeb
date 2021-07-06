var botaoAdicionar = document.querySelector("#buscar-paciente")

botaoAdicionar.addEventListener("click", function(){
  //Abrir uma requisição
  var xhr = new XMLHttpRequest()
  //Abrir conexão com o HTTP
  xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes")
  //Quando carregar a resposta, executa a função
  xhr.addEventListener("load", function(){
    // Verifica se a requisição foi bem feita
    if (xhr.status == 200) {
      //xhr.responseText coloca o que foi lido para manipular
      var resposta = xhr.responseText
      //Vai parciar a resposta em um array, sendo um objeto cada posição
      var pacientes = JSON.parse(resposta)

      pacientes.forEach(function(paciente) {
      adicionarPacienteTabela(paciente)
      })
    } else{
      alert(xhr.status)
      var ajax = document.querySelector("#erro-ajax")
      ajax.classList.remove("invisivel")
    }
    
  });

  
  // Faz a requisição
  xhr.send()
})
