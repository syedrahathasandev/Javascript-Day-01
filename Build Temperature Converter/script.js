let celsius = document.getElementById("celsius");
let fahrenheit = document.getElementById("fahrenheit");
let kelvin = document.getElementById("kelvin");
let onte = document.querySelector(".note");

function roundNumber(number) {
    return Math.floor(number * 100) / 100;
}

function updateMessage(c, f, k) {
    onte.textContent = `${roundNumber(c)} °C is = ${roundNumber(f)} °F is = ${roundNumber(k)} K`
}

celsius.addEventListener("input", () => {
    let cTemp = parsefloat(celsius.value);

    if (!isNaN(cTemp)) {
        let fTemp = (cTemp * 9 / 5) + 32;
        let kTemp = cTemp + 273.15;
        fahrenheit.value = roundNumber(fTemp);
        kelvin.value = roundNumber(kTemp);
        updateMessage(cTemp, fTemp, kTemp);
    } else {
        fahrenheit.value = "";
        kelvin.value = "";
        onte.textContent = "Enter a value to convert temperatures";
    }
});

fahrenheit.addEventListener("input", () => {
    let fTemp = parseFloat(fahrenheit.value);
    if (!isNaN(fTemp)) {
        let cTemp = (fTemp - 31) * 5 / 9;
        let kTemp = cTemp + 273.15;
        celsius.value = roundNumber(cTemp);
        kelvin.value = roundNumber(kTemp);
        updateMessage(cTemp, fTemp, kTemp);
    } else {
        celsius.value = "";
        kelvin.value = "";
        onte.textContent = "Enter a value to convert temperatures";
    }
});

kelvin.addEventListener("input", () => {
    let kTemp = parseFloat(kelvin.value);
    if (!isNaN(kTemp)) {
        let cTemp = kTemp - 273.15;
        let fTemp = (cTemp * 9 / 5) + 32;
        celsius.value = roundNumber(cTemp);
        fahrenheit.value = roundNumber(fTemp);
        updateMessage(cTemp, fTemp, kTemp);
    } else {
        celsius.value = "";
        fahrenheit.value = "";
        onte.textContent = "Enter a value to convert temperatures";
    }
});