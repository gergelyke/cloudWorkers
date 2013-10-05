(function(){
  // import some external scripts
  // PAY ATTENTION: NO SCRIPT WITH DOM MANIPULATION (NO JQERY!!!)
  importScripts('http://localhost:3000/js/ExternalFunction.js');
  // catch messages
  onmessage = function (oEvent) {
    // do some heavy computing, then return them

  setTimeout(function() {
    postMessage({
      type: 'finished',
      results: ExternalFunction.process(oEvent.data)
    });
  }, 1000);
    

  };
}());