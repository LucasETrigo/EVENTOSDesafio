// Funcion para generar claves 

function obtenerClave() {
    const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz@#$%^&*( )_+?><:{}[]";

    //longitudClave = 10 a 20
    let longitudClave = parseInt(prompt("Cuantos Caracteres queres que sea tu clave? (10 a 20)"));
    let clave = '';

    for(let i = 0; i < longitudClave; i++) {
        let numeroRandom = Math.floor(Math.random() * chars.length);
        //console.log(numeroRandom);

        clave += chars.substring(numeroRandom, numeroRandom + 1);
        //console.log(clave);

        if (longitudClave < 10) {
            alert(`No se puede usar ${longitudClave} caracteres. Porfavor elige un numero del 10 al 20`);
            return;
        } else if (longitudClave > 20) {
            alert(`No se puede usar ${longitudClave} caracteres. Porfavor elige un numero del 10 al 20`);
            return;
        }
    }

    //Dom
    let claveDom = document.getElementById('claveGenerar');
    claveDom.value = clave;
    claveDom.style.backgroundColor = '#ed7946';
    claveDom.style.textAlign = 'center';
    

}


//Event listener para desafio nuevo
let btnDom = document.getElementById('btn');

btnDom.addEventListener('click', function() {

    btnDom.style.backgroundColor = '#ed7946';
    btnDom.style.color = '#141840';

})



