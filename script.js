const d = new Date();

var minutes = d.getMinutes();

var hours = d.getHours();


var dia = d.getDate();


var semana = d.getDay();


switch (semana) {
    case 0:
        semana = "Domingo";
        break;
    case 1:
        semana = "Segunda-feira";
        break;
    case 2:
        semana = "Terça-feira";
        break;
    case 3:
        semana = "Quarta-feira";
        break;
    case 4:
        semana = "Quinta-feira";
        break;
    case 5:
        semana = "Sexta-feira";
        break;
    case 6:
        semana = "Sabado";
    }
   
var divday = document.getElementById("dia1");
var divsemana = document.getElementById("semana1");
var divhora = document.getElementById("hora1");

divday.innerHTML = `<p>${dia}</p>`;
divsemana.innerHTML = `<p>${semana}</p>`;
divhora.innerHTML = `<p>${hours}:${minutes}<strong>h</strong></p>`;



var c = new Date();
var dia1 = Number(c.getDay() + 1);
switch (dia1) {
    case 0:
        dia1 = "Domingo";
        break;
    case 1:
        dia1 = "Segunda-feira";
        break;
    case 2:
        dia1 = "Terça-feira";
        break;
    case 3:
        dia1 = "Quarta-feira";
        break;
    case 4:
        dia1 = "Quinta-feira";
        break;
    case 5:
        dia1 = "Sexta-feira";
        break;
    case 6:
        dia1 = "Sabado";
    }



var dia2 = Number(d.getDate() + 1);


var divday1 = document.getElementById("dia2");
var divsemana1 = document.getElementById("semana2");
var divhora1 = document.getElementById("hora2");

divday1.innerHTML = `<p>${dia2}</p>`;
divsemana1.innerHTML = `<p>${dia1}</p>`;
divhora1.innerHTML = `<p>00;00<strong>h</strong></p>`;