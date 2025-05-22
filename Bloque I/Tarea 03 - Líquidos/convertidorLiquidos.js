function convertMed() {
    const inputMed = parseFloat(document.getElementById('inputMed').value);
    const inputUnit = document.getElementById('inputUnit').value;

// Variables para almacenar las medidas de líquido convertidas
let galones, litros, botellas;

// Convierte la temperatura según la unidad seleccionada
if (inputUnit === 'G') {
    galones = inputMed;
    litros = galones * 3.78541;
    botellas = litros / 0.75; 
} else if (inputUnit === 'L') {
    litros = inputMed;
    galones = litros / 3.78541;
    botellas = litros / 0.75;
} else if (inputUnit === 'B') {
    botellas = inputMed;
    litros = botellas * 0.75;
    galones = litros / 3.78541;
}

document.getElementById('galonesValue').textContent = galones.toFixed(2) + ' Galones';
document.getElementById('litrosValue').textContent = litros.toFixed(2) + ' Litros';
document.getElementById('botellasValue').textContent = botellas.toFixed(2) + ' Botellas';

// Ajustar la altura del líquido en las botellas
const maxHeight = 150; // Altura máxima en píxeles para el líquido
document.getElementById('galonesLiquid').style.height = (galones / 10) * maxHeight + 'px';
document.getElementById('litrosLiquid').style.height = (litros / 10) * maxHeight + 'px';
document.getElementById('botellasLiquid').style.height = (botellas / 10) * maxHeight + 'px';
}