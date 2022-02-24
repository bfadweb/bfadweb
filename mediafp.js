function fingerprint_media(){
    var media = navigator.mediaDevices;
    var med_arr = new Array();
    med_arr.push(media.enumerateDevices(),
        media.getDisplayMedia(),
        media.getSupportedConstraints,
        media.getUserMedia,
        media.ondevicechange);
    return med_arr;
}