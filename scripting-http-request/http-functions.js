var https = require('https');

module.exports = function getHTML (options){
var bufferedData = "";

function printHTML (html) {
  console.log(html);
}

https.get(options, function (response) {

  response.setEncoding('utf8');

  response.on('data', function (data) {
    bufferedData += data;
  });

  response.on('end', function() {
    printHTML(bufferedData);
  });

});


}

