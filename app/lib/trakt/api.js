var __ = require('alloy/underscore');

function api() {
	this.api_key	= '9d43494c295a09baa7baf9de7df9c9fc0fdf0f1ea1db72716c6aef7d37d632cd';
	this.base_url	= 'https://api-v2launch.trakt.tv';
	//this.api_key	= '1e13cac926c79ab9829d611de93765dda8625b8b24d6ca7b51e4eb1f8c8e0271';
	//this.base_url	= 'https://api.staging.trakt.tv';
}

var last_call = {};

api.prototype.popular_movies = function(callback) {
	this.query('/movies/popular?extended=full,images', {}, callback);
};

api.prototype.popular_shows = function(callback) {
	this.query('/shows/popular?extended=full,images', {}, callback);
};

api.prototype.trending_movies = function(callback) {
	this.query('/movies/trending?extended=full,images', {}, callback);
};

api.prototype.trending_shows = function(callback) {
	this.query('/shows/trending?extended=full,image', {}, callback);
};

api.prototype.search = function(term, type, callback) {
	this.query('/search?query=' + term + '&type=' + type + '&extended=full,images', {}, callback);
};

api.prototype.next = function(callback) {
	if (!__.isEmpty(last_call))
		this.query(last_call.query, last_call.args, callback || last_call.callback, last_call.page + 1);	
};

api.prototype.query = function(query, args, callback, page, limit) {

	var self = this;

	if (!Ti.Network.online) {
		callback && (callback({"error": "No connection"}));
		return;
	}
	
	page  = page  || 1;
	limit = limit || 10;
	
	last_call = {
		query: query,
		args: args,
		callback: callback,
		page: 1,
		limit: 10
	};
	
	Ti.API.info(last_call);
	
	var xhr = Titanium.Network.createHTTPClient({
		onload: function() {
			last_call.last_page	 = xhr.getResponseHeader('X-Pagination-Page');
			last_call.last_limit = xhr.getResponseHeader('X-Pagination-Limit');
			
			callback(false, resultToObject(this.responseText));
		},
		onerror: function(e) {
			Ti.API.error('API call failed');
			Ti.API.error(e.source.responseText);
			callback && (callback(e));
		},
		timeout: 10000
	});
	
	xhr.open("GET",this.base_url + query);
	
	xhr.setRequestHeader('Content-type', 'application/json');
	xhr.setRequestHeader('trakt-api-key', this.api_key);
	xhr.setRequestHeader('trakt-api-version', '2');
	
	xhr.send();
};

function resultToObject(responseText) { Ti.API.info(responseText); return JSON.parse(responseText); }

module.exports = api;