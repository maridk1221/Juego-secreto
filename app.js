let NumerSecreto=0 ;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo =10;
console.log (NumerSecreto);

function asignarTextoElemento (elemento, texto){
    let elementoHTML = document.querySelector (elemento)
    elementoHTML.innerHTML = texto;
    return;
}

function VerificarIntento () {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if(numeroDeUsuario===NumerSecreto){
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos===1) ? 'vez': 'veces'} `);
        document.getElementById('reiniciar').removeAttribute ('disabled'); 

    }else{
        //El usuario no acerto
        if(numeroDeUsuario > NumerSecreto) {
         asignarTextoElemento('p', 'El numero secreto es menor');

        }else
        asignarTextoElemento('p', 'El numero secreto es mayor');
    }
    intentos++;
    limpiarCaja ();
    
    return;
}

function limpiarCaja(){
   document.querySelector('#valorUsuario').value= '';
}

function GenerarNumeroSecreto(){
    let numeroGenerdo= Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerdo);
    console.log (listaNumerosSorteados);
    
     if (listaNumerosSorteados.length==numeroMaximo){
        asignarTextoElemento('p', 'Ya se asignaron todos los numeros posibles')
     }else{
        
        if(listaNumerosSorteados.includes(numeroGenerdo)){
            return GenerarNumeroSecreto();

        }else {
            listaNumerosSorteados.push(numeroGenerdo);
            return numeroGenerdo;
        }
    }
}

function condicionesIniciales(){
    asignarTextoElemento("h1","Juego del número secreto");
    asignarTextoElemento("p",`Indica un numero del 1 al ${numeroMaximo}`);
    NumerSecreto= GenerarNumeroSecreto();
    intentos=1;
}
function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
    
}
condicionesIniciales();






