'use strict'
window.addEventListener('load', () => {
    var nombre = document.querySelector('#nombre');
    var apellido = document.querySelector('#apellido');
    var email = document.querySelector('#email');
    var tarjeta = document.querySelector('#tarjeta');
    var fecha = document.querySelector('#fecha');
    var codigo = document.querySelector('#codigo');
    var button = document.querySelector('#submit_curso');
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

    button.addEventListener('click', () => {
        nombre.value = "";
        apellido.value = "";
        email.value = "";
        tarjeta.value = "";
        fecha.value = "";
        codigo.value = "";
        button.value = "";
    });



    return main();




})