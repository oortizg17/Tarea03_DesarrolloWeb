'use strict'
window.addEventListener('load', () => {
    var nombre = document.querySelector('#nombre');
    var apellido = document.querySelector('#apellido');
    var dpi = document.querySelector('#dpi');
    var licencia = document.querySelector('#licencia');
    var tipo = document.querySelector('#tipo');
    var marca = document.querySelector('#marca');
    var linea = document.querySelector('#linea');
    var asientos = document.querySelector('#asientos');
    var combustible = document.querySelector('#combustible');
    var puertas = document.querySelector('#puertas');
    var color = document.querySelector('#color');
    var placas = document.querySelector('#placas');

    //Listeners
    nombre.addEventListener('input', main, false);
    apellido.addEventListener('input', main, false);


    function main() {
        Valnombre();
        Valapellido();


    }

    function Valnombre() {

        if (hasNumber(nombre.value)) {
            nombre.setCustomValidity('Ah ingresado un numero en el nombre ');
            nombre.style.backgroundColor = "red";
        } else {
            nombre.setCustomValidity('');
            nombre.style.background = 'white';
        }

    }

    function hasNumber(myString) {
        return /\d/.test(myString);
    }

    function Valapellido() {
        if (hasNumber(apellido.value)) {
            apellido.setCustomValidity('Ah ingresado un numero en el apellido');
            apellido.style.backgroundColor = "red";
        } else {
            apellido.setCustomValidity('');
            apellido.style.background = 'white';
        }
    }

    return main();




})