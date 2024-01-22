let numeroSecreto = 0;
let intentos = 0;
let numeroMaximo = 10;
let listaNumerosSorteados = [];

//console.log(numeroSecreto);

function asignarTextoElemento(elemento , texto){ //Creación de una función para optimizar el código
    let titulo = document.querySelector(elemento);
    titulo.innerHTML = texto; //Recuerda que en este caso, la variable 'texto' es de tipo string.
}

function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value); //obtienes el valor indicado en el input por el usuario para finalmente cambiarlo a Integer

    if(numeroSecreto === numeroUsuario){
        asignarTextoElemento('p', `Felicidades! Acertaste el número en ${intentos} ${(intentos === 1) ? 'Vez' : 'Veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroUsuario > numeroSecreto){
            asignarTextoElemento('p', 'UPS... El número es menor');
        }else {
            asignarTextoElemento('p', 'UPS... El número es mayor');
        }
    }

    intentos++;
    limpiarCaja();

}

function condicionesIniciales (){
    asignarTextoElemento('h1', 'Juego del número secreto!');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;

}

function reiniciarJuego(){
    //Limpiar la caja
    limpiarCaja();
    //Indicar el mensaje de intervalo de números
    //Generar el número aleatorio
    //Inicializar el número de intentos
    condicionesIniciales();
    //Deshabilitar el botón de reinicio
    document.querySelector('#reiniciar').setAttribute('disabled' , 'true');

}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = ''; //Al usar # dentro del argumento, estoy haciendo referencia a que estoy invocando el id del elemento seleccionado
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo) + 1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    if (listaNumerosSorteados.length == numeroMaximo){

        asignarTextoElemento('p', 'Se han asignado todos los elementos posibles');

    } else{

        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto(); //En este caso se está activando la recursividad de la función, el cual es llamar la función mientras se cumpla la condición
        } else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

condicionesIniciales();


