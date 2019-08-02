'use strict'
window.addEventListener('load', () => {

    var entrada = document.querySelector('#entrada');
    var salida = document.querySelector('#salida');
    var adultos = document.querySelector('#adultos');
    var niños = document.querySelector('#niños');
    var habitacion = document.querySelector('#habitacion');
    var nombre = document.querySelector('#nombre');
    var apellido = document.querySelector('#apellido');
    var email = document.querySelector('#email');
    //listener

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