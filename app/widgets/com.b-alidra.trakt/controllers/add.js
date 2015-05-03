var tr_api = new (require('transmission/api'))();

tr_api.getDefaultDownloadDir(
	function(response) {
		$.destination.value = response.arguments['download-dir'];
	}
);

$.cancel_button.addEventListener('click', function() {
	$.add.animate({ duration: 500, opacity: 0 }, function() { $.add.close(); });
});
$.add_button.addEventListener('click', function() {
	if (_.isEmpty($.url.value) || 'http://' == $.url.value) {
		Alloy.createWidget("com.mcongrove.toast", null, {
	    	text: L('add_empty_url'),
		    duration: 2000,
		    view: $.add
		});
		return false;
	}
		
	Alloy.Globals.loading.show(L('adding'), false);
	
	tr_api.addTorrent($.url.value, $.destination.value, $.auto_start.value == false, 
		function(err, response) {
			if (err) {
				Alloy.Globals.loading.hide();
			
				Alloy.createWidget("com.mcongrove.toast", null, {
			    	text: L('added_error'),
				    duration: 5000,
				    view: $.add
				});
				return false;
			}
			
			Alloy.Globals.loading.hide();
			
			if ("torrent-duplicate" in response.arguments) {
				Alloy.createWidget("com.mcongrove.toast", null, {
			    	text: L('added_duplicate'),
				    duration: 5000,
				    view: $.add
				});
			}
			else {
				Alloy.createWidget("com.mcongrove.toast", null, {
			    	text: L('added_success'),
				    duration: 2000,
				    view: $.add
				});
				setTimeout(function() { $.add.close(); }, 2200);	
			}
		}	
	);
});
