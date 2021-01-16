function supportsHEVCAlpha() {

    const navigator = window.navigator;
    const ua = navigator.userAgent.toLowerCase()
    const hasMediaCapabilities = !!(navigator.mediaCapabilities && navigator.mediaCapabilities.decodingInfo)
    const isSafari = ((ua.indexOf('safari') != -1)&& (!(ua.indexOf('chrome')!= -1) && (ua.indexOf('version/')!= -1)))

    return isSafari && hasMediaCapabilities
        }

function isIE11()
{
    return !!window.navigator.userAgent.match(/Trident\/7\./,[]);
}

if (!isIE11()) {
    const player = document.getElementById('player');
    player.src = supportsHEVCAlpha() ? 'https://doggo.s3.amazonaws.com/output.mov': 'https://doggo.s3.amazonaws.com/output.webm';
}
