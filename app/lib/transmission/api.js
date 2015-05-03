var _ = require('alloy/underscore');

function api() {
	
	this.status = {
		"TR_STATUS_STOPPED"        : 0, /* Torrent is stopped */
		"TR_STATUS_CHECK_WAIT"     : 1, /* Queued to check files */
		"TR_STATUS_CHECK"          : 2, /* Checking files */
		"TR_STATUS_DOWNLOAD_WAIT"  : 3, /* Queued to download */
		"TR_STATUS_DOWNLOAD"       : 4, /* Downloading */
		"TR_STATUS_SEED_WAIT"      : 5, /* Queued to seed */
		"TR_STATUS_SEED"           : 6  /* Seeding */	
	};

	this.initFromSettings();
}

api.prototype.initFromSettings = function() {
	this.conn_name	= Ti.App.Properties.getString('settings_name');
	this.conn_host	= Ti.App.Properties.getString('settings_host');
	this.conn_port	= Ti.App.Properties.getString('settings_port');
	this.conn_user	= Ti.App.Properties.getString('settings_user');
	this.conn_pass	= Ti.App.Properties.getString('settings_pass');

	this.conn_path	= '/transmission/rpc';	
	this.conn_url	= 'http://' + this.conn_host + ':' + this.conn_port + this.conn_path;
	
	this.session_id	= Ti.App.Properties.getString('session_id');
};

api.prototype.init = function(name, host, port, user, pass) {
	this.conn_name	= name;
	this.conn_host	= host;
	this.conn_port	= port;
	this.conn_user	= user;
	this.conn_pass	= pass;

	this.conn_path	= '/transmission/rpc';	
	this.conn_url	= 'http://' + this.conn_host + ':' + this.conn_port + this.conn_path;
	
	this.session_id	= Ti.App.Properties.getString('session_id');	
};

api.prototype.start = function(ids, callback) {
	var args = {};
	if (ids != null) {
		args.ids = ids;
	}
	this.query("torrent-start", args, null, callback);
};

api.prototype.stop = function(ids, callback) {
	var args = {};
	if (ids != null) {
		args.ids = ids;
	}
	this.query("torrent-stop", args, null, callback);
};
	
api.prototype.addTorrent = function(filename, downloadDir, paused, callback) {
	var args = {
		"filename": filename,
		"paused": paused
	};
	
	if (!_.isEmpty(downloadDir))
		args['download-dir'] = downloadDir;
		
	this.query("torrent-add", args, null, callback);
};

api.prototype.loadTorrents = function(callback) {
	this.query("torrent-get", { "fields": [ "id", "name", "status", "isFinished", "isStalled", "percentDone", "downloadedEver", "sizeWhenDone", "rateDownload", "rateUpload", "eta" ] }, null, callback);
};

api.prototype.loadStats = function(callback) {
	this.query("session-stats", {}, null, callback);	
};

api.prototype.getDefaultDownloadDir = function(callback) {
	this.query("session-get", {}, null, callback);
};

api.prototype.test = function(callback) {
	this.query("torrent-get", { "fields": [ "id" ] }, null, callback);
};

api.prototype.query = function(method, args, tag, callback) {

	var self = this;

	if (!Ti.Network.online) {
		callback && (callback({"error": "No connection"}));
		return;
	}
	
	var xhr = Titanium.Network.createHTTPClient({
		onload: function() {
			Ti.App.Properties.setString('session_id', xhr.getResponseHeader('X-Transmission-Session-Id'));
			callback(false, resultToObject(this.responseText));
		},
		onerror: function(e) {
			/* 409 Error: we must change our X-Transmission-Session-Id */
			if(xhr.getStatus() == 409) {
				var new_session_id = xhr.getResponseHeader('X-Transmission-Session-Id');
				
				if (new_session_id == self.session_id)
					alert('Une erreur bizarre est survenue ...');
				else {
					self.session_id = new_session_id;
					Ti.API.info('Got new X-Transmission-Session-Id' + self.session_id);
					self.query(method, args, tag, callback);
				}
			}
			else {
				Ti.API.error('API call failed');
				Ti.API.error(e.source.responseText);
				Ti.API.error([method, args, tag]);
				callback && (callback(e));
			}
		},
		timeout: 10000
	});
	
	xhr.open("POST",this.conn_url);
	
	xhr.setUsername(this.conn_user);
	xhr.setPassword(this.conn_pass);
	xhr.setRequestHeader('X-Transmission-Session-Id', this.session_id);
	
	var payload = {
		"method": method,
		"arguments": args,
		"tag": null
	};
	
	xhr.send(JSON.stringify(payload));
};

function resultToObject(responseText) { Ti.API.info(responseText); return JSON.parse(responseText); }

module.exports = api;
