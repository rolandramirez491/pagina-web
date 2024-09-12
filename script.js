// Variables con let
let num1, num2, result;
let sum, difference, product, quotient;
let input1, input2;

// Variables con const
const sumButton = document.getElementById('sumButton');
const subButton = document.getElementById('subButton');
const mulButton = document.getElementById('mulButton');
const divButton = document.getElementById('divButton');
const inputField1 = document.getElementById('input1');
const inputField2 = document.getElementById('input2');

// Función para actualizar variables y realizar operaciones
function updateValues() {
    num1 = parseFloat(inputField1.value) || 0;
    num2 = parseFloat(inputField2.value) || 0;
}

// Funciones para las operaciones matemáticas
function add() {
    updateValues();
    result = num1 + num2;
    alert(`La suma es: ${result}`);
}

function subtract() {
    updateValues();
    result = num1 - num2;
    alert(`La resta es: ${result}`);
}

function multiply() {
    updateValues();
    result = num1 * num2;
    alert(`La multiplicación es: ${result}`);
}

function divide() {
    updateValues();
    result = num2 !== 0 ? num1 / num2 : 'No se puede dividir entre 0';
    alert(`La división es: ${result}`);
}

// Asignar eventos a los botones
sumButton.addEventListener('click', add);
subButton.addEventListener('click', subtract);
mulButton.addEventListener('click', multiply);
divButton.addEventListener('click', divide);

// Función para generar colores aleatorios
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Función para cambiar el color de fondo de los botones aleatoriamente
function changeButtonColors() {
    const buttons = document.querySelectorAll('.floating-btn');
    buttons.forEach(button => {
        button.style.backgroundColor = getRandomColor();
    });
}

// Cambiar los colores cada segundo
setInterval(changeButtonColors, 1000);
