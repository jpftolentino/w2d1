var getHTML = require('../http-functions.js');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6.html'
};

function printUppercase(html){
  console.log(html.toUpperCase());
}

getHTML(requestOptions, printUppercase);