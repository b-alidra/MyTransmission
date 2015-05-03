var opened	= false;

exports.startApp = function(win) {
	
	require('config/loader').loadRemoteConfig(function(config, status) {
		
		if (opened) {
			win.animate({ opacity: 0, duration: 300 }, function() {
				win.removeAllChildren();
				loadMenu();
				win.animate({ opacity: 1, duration: 300 });
			});
		}
		else {
			loadMenu();
			win.open();		
		}
		
		opened = true;
	});
	
	function loadMenu() {
		var menu = Alloy.createWidget('ds.slideMenu');	
		win.add(menu.getView());
		menu.init();
	}
};