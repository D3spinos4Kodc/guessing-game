let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

/**
 * Asigna texto a un elemento HTML
 * @param {string} elemento - Selector del elemento
 * @param {string} texto - Texto a asignar
 */
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    if (elementoHTML) {
        elementoHTML.innerHTML = texto;
    }
}

/**
 * Verifica el intento del usuario
 */
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    console.log(intentos);
    if (numeroSecreto === numeroDeUsuario) {
        asignarTextoElemento('p', `¡Acertaste el número en ${intentos} ${intentos === 1 ? 'intento' : 'intentos'}!`);
        document.getElementById('valueIs-2').removeAttribute('disabled');
    } else {
        if (numeroSecreto < numeroDeUsuario) {
            asignarTextoElemento('p', 'El número es menor');
        } else {
            asignarTextoElemento('p', 'El número es mayor');
        }
        intentos++;
        limpiarCaja();
    }
}

/**
 * Limpia el valor de la caja de entrada del usuario
 */
function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

/**
 * Genera un número secreto no repetido
 * @returns {number} - Número secreto generado
 */
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    if (listaNumerosSorteados.length === numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
        bloquearIntentos();
    } else {
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

/**
 * Inicializa las condiciones del juego
 */
function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del Número secreto');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

/**
 * Reinicia el juego
 */
function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#valueIs-2').setAttribute('disabled', 'true');
    let verificarBtn = document.querySelector('#verificar');
    if (verificarBtn) {
        verificarBtn.removeAttribute('disabled');
    }
}

/**
 * Bloquea el botón de verificar intentos
 */
function bloquearIntentos() {
    let verificarBtn = document.querySelector('#valueIs-1');
    if (verificarBtn) {
        verificarBtn.setAttribute('disabled', 'true');
    }
}

// Inicializa el juego
condicionesIniciales();






// let numeroSecreto = 0;
// let intentos = 0;
// let listaNumerosSorteados = [];
// let numeroMaximo = 10;

// function asignarTextoElemto(elemento, texto){
//   let elementoHTML = document.querySelector(elemento);
//   elementoHTML.innerHTML = texto;
//   return;
// }

// function verificarIntento() {
//   let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value); 

//   console.log(intentos);
//   if(numeroSecreto === numeroDeUsuario){
//     asignarTextoElemto('p',`Acertaste el número en ${intentos} ${(intentos === 1 ? 'sola vez' : 'veces')}`);

//     document.getElementById('valueIs-2').removeAttribute('disabled');

//   } else {
//     // el usuario no acepto
//       if( numeroSecreto < numeroDeUsuario){
//         asignarTextoElemto ('p','El numero es menor');
//       }else {
//         asignarTextoElemto ('p','El numero es mayor');
//       }
//       intentos++;
//       limpiarCaja();
//   }
//    return;
// }

// function limpiarCaja () {
//   document.querySelector('#valorUsuario').value = '';

// };

// function generarNumeroSecreto(){
//   let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
  
//   console.log(numeroGenerado);
//   console.log(listaNumerosSorteados);
//   // si ya sorteamos todos los numeros
//   if(listaNumerosSorteados.length == numeroMaximo){
//     asignarTextoElemto('p','ya se sortearon todos los números posibles')
//   }else{
//       //si el numero generado esta incluido en la lista, 
//       if (listaNumerosSorteados.includes(numeroGenerado)){
//         return generarNumeroSecreto();
//       }else{
//           listaNumerosSorteados.push(numeroGenerado);
//           return numeroGenerado;
//       }
//     }
// }

// function condicionesIniciales(){
//   asignarTextoElemto('h1', 'Juego del Número secreto');
//   asignarTextoElemto('p', `Indica un número del 1 al ${numeroMaximo}`);
//   numeroSecreto = generarNumeroSecreto();
//   intentos = 1;
// }

// function reiniciarJuego(){
// // limpiar caja
// limpiarCaja();
// // indicar mensaje de intervalos de numeros
// condicionesIniciales();
// // generar numero aleatorio
// //iniciar el numero de intentos
// //deshabilitar el boton de nuevo juego
// document.querySelector('#valueIs-2').setAttribute('disabled', 'true');
// }

// // POSTERIORMENTE SE INICIALIZA LA FUNCION  USANDO LOS PARAMETROS

// condicionesIniciales();








// //  ELIGE UN NUMERO MAYOR
// let primerNumero = parseInt(prompt('Digita el primer número:'));
// let segundoNumero = parseInt(prompt('Digita el segundo número:'));
// let mayor = encontrarMayor(primerNumero, segundoNumero);


// function encontrarMayor(numero1, numero2){
//   if (numero1 >= numero2){
//      return numero1
//   }
//   else {
//    return numero2
//   }; 

// }


// console.log(`El número mayor es: ${mayor}`);








//DE ESTA FORMA FUNCIONA LA MANIPULACION DEL DOM, INDCANDO ENUNA VARIABLE LO QUE QUIERO MODIFICAR USANDO EL METODO QUERYSELECTOR 
//Y LUEGO ESA VARIABLE LE APLICAMOS EL METODO .INNERHTML IGUAL AL VALOR QUE DESEAMOS MODIFICAR

// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'jueGo del numero secreto';

// let parrafo = document.querySelector('p');
// parrafo.innerHTML = `indica el numero del 1 al ${numeroMaximo}`;

// COMO SE REPITE TANTO CODIGO VAMOS A CREAR UNA FUNCION PARA OPTIMIZAR Y USARLA DE IGUAL FORMA

// function asignarTextoElemto(){
//   let titulo = document.querySelector('h1');
//   titulo.innerHTML = 'juego del numero secreto'; 
// }

// FUNCION  A LA QUE SE LE ASIGNAN PARAMETROS PARA QUE PUEDA SER RE -USADA Y COMPRIMIR EL CODIGO  





//IMPORTANTE LAS FUNCIONES SE PUEDEN USAR EN CUALQUIER PARTE DEL JS Y DENTRO DE LAS ETIQUETAS HTML PEROOOOO EN EVENTOS 



// //PRACTICAAAA
// let cambiarTexto = document.querySelector('h1');
// cambiarTexto.innerHTML = 'titulo que quiero cambiar';

// function textoDeCambio (tag, text){
//   let cambiarTextoHTML = document.querySelector(tag);
//   cambiarTextoHTML.innerHTML = text;
// }

// cambiarTexto('h1' , 'texto que quiero que aparezca')