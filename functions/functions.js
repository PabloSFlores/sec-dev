// Variable global para guardar el resultado del IMC
let resultado;

// Eventos que escuchan los inputs para habilitar o deshabilitar el botón
document.getElementById('peso').addEventListener('input', validarBoton);
document.getElementById('estatura').addEventListener('input', validarBoton);

// Función para validar el botón acción
function validarBoton() {
    var pesoInput = document.getElementById('peso').value;
    var estaturaInput = document.getElementById('estatura').value;
    var calcularBoton = document.getElementById("calcular");

    if (pesoInput.trim() !== '' && estaturaInput.trim() !== '') {
        calcularBoton.removeAttribute('disabled');
    } else {
        calcularBoton.setAttribute('disabled', 'disabled');
    }
}

// Función que realiza la operación, válida los datos enviados 
// y llama a la función que pinta los rangos
const calcular = () => {
    const peso = document.getElementById('peso').value;
    const estatura = document.getElementById('estatura').value;
    if (isNaN(peso) || isNaN(estatura)) {
        alert("Ingresa valores válidos.")
    } else if (peso <= 0 || estatura <= 0) {
        alert("Los valores deben ser mayores a 0")
    } else {
        resultado = (peso / Math.pow(estatura, 2)).toFixed(2);
        if (resultado == Infinity || isNaN(resultado)) {
            alert("Ha ocurrido un error")
        } else {
            mostrarResultado()
        }
    }
}

//Función que pinta los rangos
const mostrarResultado = () => {
    document.getElementById("resultado").innerHTML = `IMC = ${resultado}`;
    var trs = document.getElementsByTagName("tr")
    Array.prototype.map.call(trs, tr => tr.removeAttribute("class"))
    if (resultado < 18.5) {
        document.getElementById("r1").classList.add("table-warning");
    } else if (resultado >= 18.5 && resultado < 25) {
        document.getElementById("r2").classList.add("table-success");
    } else if (resultado >= 25 && resultado < 30) {
        document.getElementById("r3").classList.add("table-primary");
    } else {
        document.getElementById("r4").classList.add("table-danger");
    }
}