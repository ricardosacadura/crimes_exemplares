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
    player.src = supportsHEVCAlpha() ? 'vid/conto3/conto_3.mov': 'vid/conto3/conto_3.webm';
}