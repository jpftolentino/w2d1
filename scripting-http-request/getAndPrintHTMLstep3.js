/*

  - Function accepts parameter option

*/

var https = require('https');


function getAndPrintHTML (options) {

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

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step2.html'
};


getAndPrintHTML(requestOptions);