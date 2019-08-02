'use strict'
window.addEventListener('load', () => {

    var fecha = document.querySelector('#fecha');
    var puesto = document.querySelector('#puesto');
    var sueldo = document.querySelector('#sueldo');
    var nombre = document.querySelector('#nombre');
    var apellido = document.querySelector('#apellido');
    var edad = document.querySelector('#edad');
    var telefono = document.querySelector('#telefono');
    var genero = document.querySelector('#genero');
    var dpi = document.querySelector('#dpi');

    //listener
    /*
        localStorage.setItem(ID,dpi.value+" "+nombre.value)
        sessionStorage.setItem(ID,valores)*/

    nombre.addEventListener('input', main, false);
    apellido.addEventListener('input', main, false);
    dpi.addEventListener('input', main, false);


    function main() {
        Valnombre();
        Valapellido();
        valDPI();


    }

    function valDPI() {

        if (MayorData(dpi.value)) {
            dpi.setCustomValidity('Ah ingresado un numero en el nombre ');
            dpi.style.backgroundColor = "red";
        } else {
            dpi.setCustomValidity('');
            dpi.style.background = 'white';
        }



    }


    function MayorData(myString) {

        if (myString.length > 13) {
            return true
        } else {
            return false
        }

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