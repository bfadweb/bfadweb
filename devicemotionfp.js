function handleOrientation(event) {
    var absolute = event.absolute;
    var alpha = event.alpha;
    var beta = event.beta;
    var gamma = event.gamma;
    console.log("QWE")
    console.log(alpha)
    // Do stuff with the new orientation data
 }

function fingerprint_device(){
    var dev_arr = new Array();
    
    window.addEventListener("deviceorientation", handleOrientation, true);

    // window.addEventListener('deviceorientation', function(event) {
    //     dev_arr.push(
    //         event.absolute,
    //         event.alpha,
    //         event.beta,
    //         event.gamma,
    //         )});

    
    window.addEventListener('devicemotion', function(motionevent) {
        dev_arr.push(motionevent.acceleration,
            motionevent.accelerationIncludingGravity,
            motionevent.interval,
            motionevent.rotationRate,
            motionevent.acceleration.x,
            motionevent.acceleration.y,
            motionevent.acceleration.z,
            motionevent.acceleration.alpha,
            motionevent.acceleration.beta,
            motionevent.acceleration.gamma,
            )});
    console.log(dev_arr)
    return dev_arr;
}