var getHTML = require('../http-functions.js');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6.html'
};

function printLowercase(html){
  console.log(html.toLowerCase());
}

getHTML(requestOptions, printLowercase);