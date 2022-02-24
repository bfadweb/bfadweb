function fingerprint_navigator(){
    
    var nav_arr = new Array();
    
    nav_arr.push(navigator.appVersion,
            navigator.connection,
            navigator.credentials,
            navigator.geolocation,
            navigator.getGamepads,
            navigator.getUserMedia,
            navigator.keyboard,
            navigator.locks,
            navigator.maxTouchPoints,
            navigator.mediaCapabilities,
            navigator.mediaDevices,
            navigator.onLine,
            navigator.permissions,
            navigator.product,
            navigator.serviceWorker,
            navigator.unregisterProtocolHandler,
            navigator.userAgent,
            navigator.userAgentData,
            navigator.vibrate,
            navigator.webdriver,
            navigator.webkitGetUserMedia,
            navigator.webkitPersistentStorage,
            navigator.webkitTemporaryStorage,
            navigator.xr);
	return nav_arr;
}