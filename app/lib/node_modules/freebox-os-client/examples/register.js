var freebox = require('./config/freebox');
var app = require('./config/app');

var client = require('../freebox-os-client')(freebox);
client.requestAuthorization(null, app);
