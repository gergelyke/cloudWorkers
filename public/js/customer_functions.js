var ExternalFunction = {};

ExternalFunction.process = function (data) {
  var i,
    sum = 0;
  for (i = 0; i < data.data.length; i += 1) {
    sum += data.data[i];
  }
  return sum;
}