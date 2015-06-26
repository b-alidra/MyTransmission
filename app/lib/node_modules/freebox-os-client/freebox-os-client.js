'use strict';

/**
 * Define modules
 */
var request = require('request');
var util = require('util');

/**
 * Load the endpoint declarations
 */
var endpoints = [].concat(
    require('./endpoints/authentication'),
    require('./endpoints/download')
);

/**
 * The client
 */
var client = {};


/**
 * Create the standard callback method of the API
 *
 *
 * @param  {Function} next        The function call with the response as parameter
 *
 * @return {Function}             The callback function
 */
function createCallback(next) {

    /**
     * Try to parse the body from JSON to Object
     *
     *
     * @param  {String} body The body to parse
     *
     * @return {Object}      The object parsed or the body
     */
    function parse(body) {
        try {
            body = JSON.parse(body);
        } catch (e) {}
        return body;
    }

    /**
     * If the next function is undefined, it defines the standard function
     */
    if (!next) {
        next = function(response) {
            console.log(JSON.stringify(response));
        };
    }


    /**
     * Return the callback function
     */
    return function(error, response, body) {
        if (!response) {
            response = {
                statusCode: 999
            };
            error = 'Freebox unreachable';
        }
        if (!error && response.statusCode === 200) {
            body = parse(body);
            next(body);
        } else {
            next({
                success: false,
                msg: error || response.request.httpModule.STATUS_CODES[response.statusCode],
                error_code: response.statusCode
            });
        }
    };
}


/**
 *  Create a function for the endpoint parameter
 *
 *
 * @param  {Object}     endpoint    The description of the endpoint
 * @return {Function}               The action to do for this endpoint
 */
function createEndPoint(endpoint) {
    return function(routeParams, bodyParam, sessionToken, next) {

        /**
         * Define the options
         */
        var options = util._extend(endpoint.options, {
            url: client.baseUrl + endpoint.options.url,
            json: bodyParam,
            headers: {
                'X-Fbx-App-Auth': sessionToken
            },
            encode: 'utf-8'
        });

        /**
         * Replace the route parameters
         */
        for (var i in routeParams) {
            options.url = options.url.replace(':' + i, routeParams[i]);
        }

        /**
         *  Call the API
         */
        request(options, createCallback(next));
    };
}


/**
 * Adds the endpoints to the client
 */
function buildClient() {
    for (var i in endpoints) {
        var endpoint = endpoints[i];
        client[endpoint.name] = createEndPoint(endpoint);
    }
}


/**
 *  The Freebox OS Client
 *
 *
 * @param   freebox     The freebox information
 *
 * @return              The client
 */
function createClient(freebox) {
    client.baseUrl = 'http://' + (freebox.url || 'mafreebox.freebox.fr') + ':' + (freebox.port || '80') + '/api/v3';

    buildClient();

    return client;
}

module.exports = createClient;
