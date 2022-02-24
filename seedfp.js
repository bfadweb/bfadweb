
function fingerprint_seed(){
    var se_arr = new Array();

	se_arr.push(navigator.languages,navigator.appName,navigator.mimeTypes,navigator.doNotTrack,navigator.hardwareConcurrency,navigator.getBattery,navigator.javaEnabled,navigator.platform,navigator.language,navigator.cookieEnabled,navigator.plugins,navigator.productSub,navigator.vendorSub,navigator.appCodeName,navigator.vendor,screen.height,screen.pixelDepth,screen.colorDepth,screen.width,screen.orientation,window.devicePixelRatio);
	
	return se_arr;
}   