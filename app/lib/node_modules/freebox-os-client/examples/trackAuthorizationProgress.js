var freebox = require('./config/freebox');
var app = require('./config/app');

var client = require('../freebox-os-client')(freebox);
client.trackAuthorizationProgress({
    track_id: app.track_id
});
