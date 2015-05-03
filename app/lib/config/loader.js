exports.loadLocalConfig		= function(callback) { loadConfig(true, callback); };
exports.loadRemoteConfig	= function(callback) { loadConfig(false, callback); };

var received = false;

var loadConfig = function(localOnly, callback) {
	var config = Alloy.createModel('config');
	var params = {
		localOnly: localOnly,
		sql : { orderBy : "id desc", limit: 1 },
		
		success: function(config) {
				
				received && (old_config = Alloy.Globals.config);
				
				Alloy.Globals.config = (config.length > 0 ? JSON.parse(config.get('config')) : loadDefaultConfig());
				Alloy.Globals.theme	 = Alloy.Globals.config.theme;

				/* If config has changed */
				if (!received || !_.isEqual(old_config, Alloy.Globals.config)) {
					_.isFunction(callback) && callback(config.length > 0 ? 'success' : 'error');					
				} 							
				
				received = true;
		},
		
		error: function(e) {
			Alloy.Globals.config = loadDefaultConfig();
			Alloy.Globals.theme	 = Alloy.Globals.config.theme;
			
			_.isFunction(callback) && callback('error');
		}
	};

	config.fetch(params);
};

var loadDefaultConfig = function() { return require('config/default').config; };