'use strict';
var crypto = require('crypto');


var freebox = require('./config/freebox');
var app = require('./config/app');

var client = require('../freebox-os-client')(freebox);
client.getChallenge(null, null, null, function(response) {
    if (response.success) {
        var sessionStart = {
            app_id: app.app_id,
            app_version: app.app_version,
            password: crypto.createHmac('sha1', app.app_token).update(response.result.challenge).digest('hex')
        };
        client.openSession(null, sessionStart);
    }
});
