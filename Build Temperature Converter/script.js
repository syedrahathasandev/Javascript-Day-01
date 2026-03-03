let celsius= document.getElementById("celsius");
let fahrenheit= document.getElementById("fahrenheit");
let kelvin= document.getElementById("kelvin");
let  onte= document.querySelector(".note");

function roundNumber(number){
    return Math.floor(number*100)/100;
}

function updateMessage(c,f,k){
    onte.textContent= `${roundNumber(c)} °C is = ${roundNumber(f)} °F is = ${roundNumber(k)} K`
}