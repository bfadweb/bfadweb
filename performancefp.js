
//performance
function fingerprint_performance(){
    var per = window.performance;
    var per_arr = new Array();
    per_arr.push(per.now(), per.memory, per.timing, per.measure('finger'), per.timeOrigin, 
        per.timing.connectEnd, per.timing.domainLookupEnd, per.timing.fetchStart, 
        per.timing.loadEventStart, per.timing.navigationStart, per.timing.responseStart);
    return per_arr;
}


// performanceObserverEntryList.GetEntries
function print_perf_entry(pe) {
  console.log("name: "        + pe.name      +
              "; entryType: " + pe.entryType +
              "; startTime: " + pe.startTime +
              "; duration: "  + pe.duration);
}
var observe = new PerformanceObserver(function(list, obs) {
  var perfEntries = list.getEntries();
  for (var i=0; i < perfEntries.length; i++) {
    print_perf_entry(perfEntries[i]);
  }
});
// observe.observe({entryTypes: ['frame']});


//performanceResourceTiming
function print_PerformanceEntries() {
  // Use getEntriesByType() to just get the "resource" events
  var p = performance.getEntriesByType("resource");
  for (var i=0; i < p.length; i++) {
    print_start_and_end_properties(p[i]);
  }
}
function print_start_and_end_properties(perfEntry) {
  // Print timestamps of the PerformanceEntry *start and *end properties
  properties = ["connectStart", "connectEnd",
                "domainLookupStart", "domainLookupEnd",
                "fetchStart",
                "redirectStart", "redirectEnd",
                "requestStart",
                "responseStart", "responseEnd",
                "secureConnectionStart"];

  for (var i=0; i < properties.length; i++) {
    // check each property
    var supported = properties[i] in perfEntry;
    if (supported) {
      var value = perfEntry[properties[i]];
      console.log("... " + properties[i] + " = " + value);
    } else {
      console.log("... " + properties[i] + " = NOT supported");
    }
  }
}
