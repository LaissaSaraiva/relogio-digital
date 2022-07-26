const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");

const dia = document.getElementById("data");

const relogio = setInterval(function tempo() {
  let dataAtual = new Date();
  let horaAtual = dataAtual.getHours();
  let minutoAtual = dataAtual.getMinutes();
  let segundoAtual = dataAtual.getSeconds();

  let diaAtual = dataAtual.getDate();
  let mesAtual =  (dataAtual.getMonth() 
  + 1);
  let anoAtual = dataAtual.getFullYear();

  if (horaAtual < 10) {
    horaAtual = "0" + horaAtual;
  }

  if (minutoAtual < 10) {
    minutoAtual = "0" + minutoAtual;
  }

  if (segundoAtual < 10) {
    segundoAtual = "0" + segundoAtual;
  }

  if(diaAtual < 10) {
    diaAtual = "0" + diaAtual;
  }

  if(mesAtual < 10) {
    mesAtual = "0" + mesAtual;
  }
  
  horas.textContent = horaAtual;
  minutos.textContent = minutoAtual;
  segundos.textContent = segundoAtual;

  dia.textContent = `${diaAtual} . ${mesAtual} . ${anoAtual}`
});

