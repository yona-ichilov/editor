const express = require('express');
const vhost = require('vhost');

var app = express();

app.use(vhost('localhost',express.static('client/localhost')))

app.listen( 5200, function() {
    console.log( 'Express server listening on port %d in %s mode', 5200, app.settings.env );
});