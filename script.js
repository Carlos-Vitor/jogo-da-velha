
let quadrados = document.querySelectorAll("div");
let resultado = document.querySelector("#resultado");
let jogarNovamente = document.querySelector("button");
let i = 0;

function fazerJogada(){
    if(this.innerHTML== ""){
        if(i%2==0){
            this.innerHTML=`<p>X</p>`;
            this.style.color= "blue";
            i++
            setTimeout(() => {
                verificarVitoria();
            }, 1400);
        }
        else{
            this.innerHTML=`<p  >O</p>`;
            this.style.color= "red";
            i++
            setTimeout(() => {
                verificarVitoria();
            }, 1400);
        }
    }
}


for(let quadrado of quadrados){
    quadrado.onclick = fazerJogada;
}

function verificarVitoria() {
    if(quadrados[0].innerHTML !== "" && quadrados[0].innerHTML === quadrados[4].innerHTML && quadrados[4].innerHTML === quadrados[8].innerHTML){
        encerrarJogo();
    }else if(quadrados[2].innerHTML !== "" && quadrados[2].innerHTML === quadrados[4].innerHTML && quadrados[4].innerHTML === quadrados[6].innerHTML){
        encerrarJogo();
    }else if(quadrados[0].innerHTML !== "" && quadrados[0].innerHTML === quadrados[1].innerHTML && quadrados[1].innerHTML === quadrados[2].innerHTML){
        encerrarJogo();
    }else if(quadrados[3].innerHTML !== "" && quadrados[3].innerHTML === quadrados[4].innerHTML && quadrados[4].innerHTML === quadrados[5].innerHTML){
        encerrarJogo();
    }else if(quadrados[6].innerHTML !== "" && quadrados[6].innerHTML === quadrados[7].innerHTML && quadrados[7].innerHTML === quadrados[8].innerHTML){
        encerrarJogo();
    }else if(quadrados[0].innerHTML !== "" && quadrados[0].innerHTML === quadrados[3].innerHTML && quadrados[3].innerHTML === quadrados[6].innerHTML){
        encerrarJogo();
    }else if(quadrados[1].innerHTML !== "" && quadrados[1].innerHTML === quadrados[4].innerHTML && quadrados[4].innerHTML === quadrados[7].innerHTML){
        encerrarJogo();
    }else if(quadrados[2].innerHTML !== "" && quadrados[2].innerHTML === quadrados[5].innerHTML && quadrados[5].innerHTML === quadrados[8].innerHTML){
        encerrarJogo();
    }else if(i==9){
        resultado.innerHTML = `<h1>Deu velha!!</h1>`;
    }
    
}

function encerrarJogo(){
    for(let quadrado of quadrados){
      quadrado.onclick = null;
      if(i%2 != 0){
      resultado.innerHTML = `<h1>Acabou! Quem venceu foi o 'X'!</h1>`;
    }else{
        resultado.innerHTML = `<h1>Acabou! Quem venceu foi o 'O'!</h1>`;
    }
}
}

function reiniciar() {
    location.reload(false);
}

jogarNovamente.onclick = reiniciar;