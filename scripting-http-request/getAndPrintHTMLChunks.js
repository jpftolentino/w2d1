//utilize the https library to GET a given URL
//function should console.log each
// chunk of daata as it is received, concatenated with
// a new line character ('\n\') so you can visualize each chunk.
// Remember to invoke (call) the function you wrote...

var https = require('https');

function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

https.get(requestOptions, function (response) {

  response.setEncoding('utf8');

  response.on('data', function (data) {
    console.log('\nChunk Received: ', data);
  });

  response.on('end', function() {
    console.log('Response stream complete.');
  });

});

}

getAndPrintHTMLChunks();