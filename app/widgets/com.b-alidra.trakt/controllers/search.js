var tkt_api = new (require('trakt/api'))();

$.save_button.addEventListener('click', function() {
	tkt_api.search($.term.value, function(err, response) {
		if (err) {
			Ti.API.erorr(e);
			return false;
		}
		
		Ti.API.info(JSON.stringify(response));
	});
});

