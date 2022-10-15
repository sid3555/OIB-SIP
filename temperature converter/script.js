let celsius = document.getElementById('Cel');
let fahrenheit= document.getElementById('Fahr');
let Kelvin = document.getElementById('Kel');


celsius.oninput = () => {

    let output = (parseFloat(celsius.value)*9) /5 +32;
    fahrenheit.value = parseFloat(output.toFixed(3));
};

fahrenheit.oninput = () => {

    let output = (parseFloat(fahrenheit.value - 32) * 5/9) + 273.15;
    Kelvin.value = parseFloat(output.toFixed(3));
};

Kelvin.oninput = () => {

    let output =( parseFloat(Kelvin.value)) + 273.15;
    celsius.value = parseFloat(output.toFixed(3));
};
