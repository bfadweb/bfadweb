function fingerprint_network(){
    var net_arr = new Array();

    conn = navigator.connection;
    net_arr.push(conn.downlink,
    conn.downlinkMax,
    conn.effectiveType,
    conn.onchange,
    conn.rtt,
    conn.saveData,
    conn.type);
    return net_arr;
}