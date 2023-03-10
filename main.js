function tocarSom(idTag){
    document.querySelector(idTag).play();
}

const listaTeclas = document.querySelectorAll('.tecla');

let contador = 0;

while(contador < listaTeclas.length) {

    const tecla = listaTeclas[contador];
    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function(){
        tocarSom(idAudio);
    }; //função anonima

    contador++;
}

/** 
 * Ex
 */
// function pom(){
//     document.querySelector('#som_tecla_pom').play();
// }

// function clap(){
//     document.querySelector('#som_tecla_clap').play();
// }

// function tim(){
//     document.querySelector('#som_tecla_tim').play();
// }

// function puff(){
//     document.querySelector('#som_tecla_puff').play();
// }

// function splash(){
//     document.querySelector('#som_tecla_splash').play();
// }

// function toim(){
//     document.querySelector('#som_tecla_toim').play();
// }

// function psh(){
//     document.querySelector('#som_tecla_psh').play();
// }

// function tic(){
//     document.querySelector('#som_tecla_tic').play();
// }

// function tom(){
//     document.querySelector('#som_tecla_tom').play();
// }

// document.querySelector('#pom').onclick = pom;
// document.querySelector('#clap').onclick = clap;
// document.querySelector('#tim').onclick = tim;
// document.querySelector('#puff').onclick = puff;
// document.querySelector('#splash').onclick = splash;
// document.querySelector('#toim').onclick = toim;
// document.querySelector('#psh').onclick = psh;
// document.querySelector('#tic').onclick = tic;
// document.querySelector('#tom').onclick = tom;