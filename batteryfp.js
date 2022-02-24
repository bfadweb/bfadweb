function fingerprint_battery(){
    var bat_arr = new Array();

    navigator.getBattery().then(function(battery){
        bat_arr.push(battery.charging);	
        bat_arr.push(battery.chargingTime);	
        bat_arr.push(battery.dischargingTime);	
        bat_arr.push(battery.level);	
    });	
    return bat_arr;
}