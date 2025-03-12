function convertLongitud() {
    const inputLiq = parseFloat(document.getElementById('inputLiq').value);
    const inputUnit = document.getElementById('inputUnit').value;

    // Variables para almacenar las temperaturas convertidas
    let metros, centimetros, milimetros;

    if (inputUnit === 'M') {
        metros = inputLiq;
        centimetros = inputLiq * 100;
        milimetros = inputLiq * 1000;
    } else if (inputUnit === 'cm') {
        metros = inputLiq / 100;
        centimetros = inputLiq;
        milimetros = inputLiq * 10;
    } else if (inputUnit === 'ml') {
        metros = inputLiq / 1000;
        centimetros = inputLiq / 10;
        milimetros = inputLiq;
    }

    
document.getElementById('metrosValue').innerText = `${metros.toFixed(2)} M`;
document.getElementById('centimetrosValue').innerText = `${centimetros.toFixed(2)} cm`;
document.getElementById('milimetrosValue').innerText = `${milimetros.toFixed(2)} ml`;


    updateRule('metrosMedida', metros, -30, 50);
    updateRule('centimetrosMedida', centimetros, -22, 122);
    updateRule('milimetrosMedida', milimetros, 243.15, 323.15);
}

function updateRule(id, value, min, max) {
    const rule = document.getElementById(id);
    const percentage = ((value - min) / (max - min)) * 100;
    rule.style.height = `${percentage}%`;
}