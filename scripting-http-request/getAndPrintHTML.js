/*

  use a buffering technique to append each chunk of data
  to a variable as it is received
  console.log the data once all of the data has been received

*/

var https = require('https');


function getAndPrintHTML () {



  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  }


  var bufferedData = "";
https.get(requestOptions, function (response) {

  response.setEncoding('utf8');

  response.on('data', function (data) {
    bufferedData += data;
  });

  response.on('end', function() {
    console.log(bufferedData);
  });

});



}

getAndPrintHTML();