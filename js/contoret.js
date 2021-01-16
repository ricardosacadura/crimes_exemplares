//depois por no contovideo.js
function saidiabo(event) {
  event.preventDefault();

  //lê o y (- para ir para o scroll ser para baixo, o num é a velocidade a que acontece,quanto menor mais lento)
  opacidade += event.deltaY * -0.0001;

  // restringir a opacidade máximo 1 e mínimo 0
  opacidade = Math.min(Math.max(0, opacidade), 1);

  // aplica a opacidade
  ret.style.opacity = opacidade;

 //desaparece da página
  if (opacidade == 0){
    ret.style.zIndex = -1;
  }
}
//quando scrolla (onwheel)
let opacidade = 1;
let ret = document.querySelector('.retanguloconto');
window.onwheel = saidiabo;
