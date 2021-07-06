var titulo = document.querySelector("h1");  
titulo.textContent = "Aparecida Nutricionista";

// pegar o valor das classes 'paciente' nop html
var pacientes = document.querySelectorAll(".paciente")
//console.log(pacientes)

for (var i = 0; i < pacientes.length; i++) {
  var paciente = pacientes[i]

  // pega o valor em cada paciente e seleciona seu peso especifico
  var tdPeso = paciente.querySelector(".info-peso")
  var peso = tdPeso.textContent

  var tdAltura = paciente.querySelector(".info-altura")
  var altura = tdAltura.textContent


  var IMC = peso/(altura*altura)

  var tdImc = paciente.querySelector(".info-imc")

  var alturaEhValida = validaAltura(altura) 
  var pesoEhValido = validaPeso(peso)

  if(!pesoEhValido){
      //console.log("Peso inválido");
      // coloca um novo valor na tag tdImc, sendo selecionada de um paciente, pegando a do IMC
      tdImc.textContent = "Peso inválido!";
      pesoEhValido = false;
      paciente.classList.add("paciente-invalido")
  }

  if(!alturaEhValida){
      //console.log("Altura inválida");
      tdImc.textContent = "Altura inválida!";
      alturaEhValida = false;
      //coloca uma class na tag
      paciente.classList.add("paciente-invalido")
  }
  if(alturaEhValida && pesoEhValido){
    tdImc.textContent = IMC.toFixed(2)
  }  
}

function validaPeso(peso){
  if (peso > 0 && peso <1000) {
    return true
  }else {return false}
}

function validaAltura(altura){
  if (altura > 0 && altura <=3) {
    return true
  }else {return false}
}

function calculaImc (peso,altura){
  var imc = 0

  imc = peso /(altura*altura)

  return imc.toFixed(2)
}







/*
console.log(paciente) // tr 
console.log(tdPeso) //tdPeso
console.log(peso)
console.log(altura)
console.log(IMC);*/