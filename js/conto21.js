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
    player.src = supportsHEVCAlpha() ? 'vid/conto21/conto_21.mov': 'vid/conto21/conto_21.webm';
}

//retangulo podes sair :)
setTimeout(function(){
   window.onwheel = saidiabo;
}, 13000); //13seg
