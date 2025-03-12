function convertirMoneda() {
    const inputMoneda = parseFloat(document.getElementById('inputMoneda').value);
    const inputUnit = document.getElementById('inputUnit').value;

// Variables para almacenar el tipo de monedas convertidas
let rublo, yuan, dollar;

// Convierte la moneda según la unidad seleccionada
if (inputUnit === 'R') {
    rublo = inputMoneda;
    yuan = inputMoneda * 0.088;
    dollar = inputMoneda * 0.013; 
} else if (inputUnit === 'Y') {
    rublo = inputMoneda * 11.36; 
    yuan = inputMoneda;
    dollar = inputMoneda * 0.15; 
} else if (inputUnit === 'D') {
    rublo = inputMoneda * 76.70; 
    yuan = inputMoneda * 6.75; 
    dollar = inputMoneda;
}

// Actualizar resultados
document.getElementById('rubloValue').innerText = `${rublo.toFixed(2)} ₽`;
document.getElementById('yuanValue').innerText = `${yuan.toFixed(2)} ¥`;
document.getElementById('dollarValue').innerText = `${dollar.toFixed(2)} US$`;

// Actualizar barras de progreso (ajusta min/max según necesites)
updateExchange('rubloMoneda', rublo, 0, 10000);
updateExchange('yuanMoneda', yuan, 0, 10000);
updateExchange('dollarMoneda', dollar, 0, 10000); 
}

function updateExchange(id, value, min, max) {
    const exchange = document.getElementById(id);
    const percentage = ((value - min) / (max - min)) * 100;
    exchange.style.height = `${Math.min(percentage, 100)}%`;
}