function fingerprint_window(){
    var win_arr = new Array();

    
    win_arr.push(window.applicationCache,window.atob, window.btoa, window.clearInterval,  window.clearTimeout, window.clientInformation, window.closed, window.crypto,  window.defaultstatus, window.document, window.event, window.external, window.fetch, window.frames, window.getComputedStyle, window.history, window.innerHeight, window.innerWidth,  window.length, window.location,  window.locationbar, window.matchMedia, window.name, window.navigator, window.onerror,  window.ontouchstart, window.open, window.opener, window.orientation, window.outerHeight, window.outerWidth, window.pageXOffset,  window.pageYOffset,window.parent,  window.performance,  window.requestAnimationFrame, window.requestIdleCallback, window.screen, window.screenLeft, window.screenTop, window.screenX, window.screenY, window.self,  window.setInterval, window.setTimeout, window.speechSynthesis, window.top, window.visualViewport,  window.webkitRequestFileSystem,  window.window);
    return win_arr;
}