freebox-os-client
=====================

A NodeJS client for the FreeboxOS API.

Documentation : http://dev.freebox.fr/sdk/os/

---------------------

## ~~Installation~~ - Not actually

~~This module is installed via npm:~~

``` bash
$ npm install freebox-os-client
```

## Usage

### Query a endpoint
All the methods have the same parameters :

1. **routeParam :** The parameters in the route of the endpoint
2. **bodyParam :** The data to send to the endpoint
3. **sessiontoken :** The session token needed if the endpoint require authentication
4. **callback :** The callback function


#### Example
``` js
var routeParam = {
    track_id: 42
};
var bodyParam = {
    app_id: "fr.freebox.testapp",
    password: "d4da8517c2c25b1b145f2e5ba91bd0589fc0053d"
};
var sessionToken = "35JYdQSvkcBYK84IFMU7H86clfhS75OzwlQrKlQN1gBch\/Dd62RGzDpgC7YB9jB2";
function callback(response) {
    // ...
}

client.endpointMethod(routeParam,bodyParam,sessiontoken,callback);
```

### The callback function
#### The default callback function
The default callback function is :
``` js
function defaultCallback(response) {
    console.log(JSON.stringify(response));
}
```

#### Define a callback function
The callback function has only one parameter : **response**

The response convention is : 

1. *On communication success :* The same as the freebox, see the [documentation](http://dev.freebox.fr/sdk/os/#APIResponse)
2. *On communication error :* The response returned looks :

``` js
    response = {
        success: false, // Always set to false
        msg: Forbidden // The error
        error_code: 403// The status code of the response
    }
```

## Example Usage

#### Register the application
``` js
var freebox = {
    url: 'mafreebox.freebox.fr',
    port: 80
};
var tokenRequest = {
    app_id: 'fr.freebox.clientapp',
    app_name: 'Client App',
    app_version: '0.0.7',
    device_name: 'Pc de Xavier'
};

var client = require('freebox-os-client')(freebox);
client.requestAuthorization(null,tokenRequest,null,function(response) {
    console.log(JSON.stringify(response));
});
```

In this case, the callback function is the default so there is the same result with :
``` js
var freebox = {
    url: 'mafreebox.freebox.fr',
    port: 80
};
var tokenRequest = {
    app_id: 'fr.freebox.clientapp',
    app_name: 'Client App',
    app_version: '0.0.7',
    device_name: 'Pc de Xavier'
};

var client = require('freebox-os-client')(freebox);
client.requestAuthorization(null,tokenRequest);
```


#### Track authorization progress
``` js
var freebox = {
    url: 'mafreebox.freebox.fr',
    port: 80
};
var app = {
    app_id: 'fr.freebox.clientapp',
    app_token: '35JYdQSvkcBYK84IFMU7H86clfhS75OzwlQrKlQN1gBch\/Dd62RGzDpgC7YB9jB2'
};
var routeParam = {
    track_id: app.track_id
};

var client = require('freebox-os-client')(freebox);
client.trackAuthorizationProgress(routeParam);
```


#### Login
``` js
var crypto = require('crypto');

var freebox = {
    url: 'mafreebox.freebox.fr',
    port: 80
};
var app = {
    app_id: 'fr.freebox.clientapp',
    app_token: '35JYdQSvkcBYK84IFMU7H86clfhS75OzwlQrKlQN1gBch\/Dd62RGzDpgC7YB9jB2'
};

var client = require('freebox-os-client')(freebox);
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
```


## API

#### Authentication

Name                                                                      |    Method
:------------------------------------------------------------------------:|:----------------------------------------:
[Request authorization](http://dev.freebox.fr/sdk/os/login/#request-authorization)|requestAuthorization
[Track authorization progress](http://dev.freebox.fr/sdk/os/login/#track-authorization-progress)|trackAuthorizationProgress
[Getting the challenge value](http://dev.freebox.fr/sdk/os/login/#getting-the-challenge-value)|getChallenge
[Opening a session](http://dev.freebox.fr/sdk/os/login/#opening-a-session)|openSession
[Closing the current session](http://dev.freebox.fr/sdk/os/login/#closing-the-current-session)|closeSession
    
#### Download

Name                                                                      |    Method
:------------------------------------------------------------------------:|:----------------------------------------:
[Retrieve all Download tasks](http://dev.freebox.fr/sdk/os/download/#get--api-v3-downloads-)|getAllDownloads
[Retrieve a Download task](http://dev.freebox.fr/sdk/os/download/#get--api-v3-downloads-{id})|getDownload
[Delete a Download task](http://dev.freebox.fr/sdk/os/download/#delete--api-v3-downloads-{id})|deleteDownload
[Erase a Download task](http://dev.freebox.fr/sdk/os/download/#delete--api-v3-downloads-{id}-erase)|eraseDownload
[Update a Download task](http://dev.freebox.fr/sdk/os/download/#update-a-download-task)|updateDownload
[Get download log](http://dev.freebox.fr/sdk/os/download/#get-download-log)|getDownloadLog
[Adding a new Download task by url](http://dev.freebox.fr/sdk/os/download/#adding-by-url)|addDownloadByUrl
[Get the Download Stats](http://dev.freebox.fr/sdk/os/download/#get-the-download-stats)|getDownloadStats
[Get the list of files for a given Download](http://dev.freebox.fr/sdk/os/download/#get-the-list-of-files-for-a-given-download)|getFilesOfDownload
[Change the priority of a Download File](http://dev.freebox.fr/sdk/os/download/#change-the-priority-of-a-download-file)|changePriorityOfDownloadFile
    

## TODO

####Download
+ Adding a new Download task by file upload
+ UNSTABLES

## License

The MIT License (MIT)

Copyright (c) 2014 trusta

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
