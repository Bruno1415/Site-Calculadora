var visor = document.getElementById("visor");
var visornumbers = "";

function sete(){
    visor.textContent += "7"
    visornumbers += "7";
}

function oito(){
    visor.textContent += "8"
    visornumbers += "8";
}

function nove(){
    visor.textContent += "9"
    visornumbers += "9";
}

function X(){
    visor.textContent += "X"
    visornumbers += "*";
}

function quatro(){
    visor.textContent += "4"
    visornumbers += "4";
}

function cinco(){
    visor.textContent += "5"
    visornumbers += "5";
}

function seis(){
    visor.textContent += "6"
    visornumbers += "6";
}

function menos(){
    visor.textContent += "-"
    visornumbers += "-";
}

function um(){
    visor.textContent += "1"
    visornumbers += "1";
}

function dois(){
    visor.textContent += "2"
    visornumbers += "2";
}

function tres(){
    visor.textContent += "3"
    visornumbers += "3";
}

function mais(){
    visor.textContent += "+"
    visornumbers += "+";
}

function zero(){
    visor.textContent += "0"
    visornumbers += "0";
}

function virgula(){
    visor.textContent += ","
    visornumbers += ".";
}

function somar(){
    var resultado = eval(visornumbers)
    visor.textContent = resultado;
}
function limpar(){
    visor.textContent = "";
    visornumbers = "";
}