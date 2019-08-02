'use strict'


window.addEventListener('load', () => {


    var button_medico = document.querySelector('#medico');
    var button_back = document.querySelector('#principal');
    var button_empelado = document.querySelector('#empleado');
    var button_hotel = document.querySelector('#Hotel');
    var button_curso = document.querySelector('#curso');
    var button_vehiculo = document.querySelector('#vehiculo');


    button_medico.addEventListener('click', () => {

        window.location = "../Formulario_Medico.html";

    });

    button_back.addEventListener('click', () => {

        window.location = "../principal.html";

    });

    button_empelado.addEventListener('click', () => {

        window.location = "../formularioEmpleo.html";

    });

    button_hotel.addEventListener('click', () => {

        window.location = "../formulario_Hotel.html";

    });
    button_curso.addEventListener('click', () => {

        window.location = "../formulario_Curso.html";

    });
    button_vehiculo.addEventListener('click', () => {

        window.location = "../formulario_Vehiculo.html";

    });


});