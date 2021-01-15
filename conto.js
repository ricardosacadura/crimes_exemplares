function saidiabo(event) {
  event.preventDefault();


  //lê o y (- para ir para o scroll ser para baixo, o numero é a velocidade a que acontece,quanto menor mais lento)
  opacidade += event.deltaY * -0.0004;

  // Restrict scale
  opacidade = Math.min(Math.max(0, opacidade), 1);

  // Apply scale transform
  ret.style.opacity = opacidade;

  if (opacidade == 0){
    ret.style.zIndex = -1;
  }
}

let opacidade = 1;
let ret = document.querySelector('.retangulo');
ret.onwheel = saidiabo;
