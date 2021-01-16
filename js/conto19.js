function supportsHEVCAlpha() {

    const navigator = window.navigator;
    const ua = navigator.userAgent.toLowerCase()
    const hasMediaCapabilities = !!(navigator.mediaCapabilities && navigator.mediaCapabilities.decodingInfo)
    const isSafari = ((ua.indexOf('safari') != -1)&& (!(ua.indexOf('chrome')!= -1) && (ua.indexOf('version/')!= -1)))

    return isSafari && hasMediaCapabilities
        }

//se for internet explorer11 (não supportsHEVCAlpha)
function isIE11()
{
    return !!window.navigator.userAgent.match(/Trident\/7\./,[]);
}
//caso não seja, execute
if (!isIE11()) {
    const player = document.getElementById('player');
    player.src = supportsHEVCAlpha() ? 'vid/conto19/conto_19.mov': 'vid/conto19/conto_19.webm';
}

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
