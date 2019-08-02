'use strict'
window.addEventListener('load', () => {


    var nobmre = document.querySelector('#nombre');
    var apellido = document.querySelector('#apellido');
    var edad = document.querySelector('#edad');
    var genero = document.querySelector('#genero');
    var estatura = document.querySelector('#estatura');
    var peso = document.querySelector('#peso');
    var padecimiento = document.querySelector('#padecimiento');
    //listener

    nombre.addEventListener('input', main, false);
    apellido.addEventListener('input', main, false);
    estatura.addEventListener('input', main, false);
    padecimiento.addEventListener('input', main, false);



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