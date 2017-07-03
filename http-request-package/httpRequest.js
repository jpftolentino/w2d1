// require `request` and the Node `fs` (filesystem) module
var request = require('request');
var fs = require('fs');

function downloadComplete(){
  console.log('Download complete.');
}

request.get('https://sytantris.github.io/http-examples/future.jpg')               // Note 1
       .on('error', function (err) {                                   // Note 2
         throw err;
       })
       .on('response', function (response) {                           // Note 3
         console.log('Downloading image...');
         console.log('Response Status Code: ', response.statusCode);
         console.log('Response Status Message: ', response.statusMessage);
         console.log('Response Content Type: ', response.headers['content-type']);
       })
       .pipe(fs.createWriteStream('./future.jpg')
        .on('finish', downloadComplete));               // Note 4

// Notes:
// 1. `request.get` is equivalent to `request()`
// 2. `request.on('error', callback)` handles any error
// 3. `request.on('response, callback)` handles the response
// 4. What is happening here?