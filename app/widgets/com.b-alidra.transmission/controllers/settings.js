var trApi = new (require('transmission/api'))();

$.save_button.addEventListener('click', function() {
	Alloy.Globals.loading.show(L('settings_testing'), false);
	
	trApi.init(
		$.settings_name.value,
		$.settings_host.value,
		$.settings_port.value,
		$.settings_user.value,
		$.settings_pass.value
	);
	
	trApi.test(function(err) {
		if (err) {
			Alloy.Globals.loading.hide();
			
			Alloy.createWidget("com.mcongrove.toast", null, {
		    	text: L('cant_connect'),
			    duration: 5000,
			    view: $.settings
			});
			
			return false;
		}
		
		Ti.App.Properties.setString('settings_name', $.settings_name.value);
		Ti.App.Properties.setString('settings_host', $.settings_host.value);
		Ti.App.Properties.setString('settings_port', $.settings_port.value);
		Ti.App.Properties.setString('settings_user', $.settings_user.value);
		Ti.App.Properties.setString('settings_pass', $.settings_pass.value);
		
		Alloy.Globals.loading.hide();
		
		Alloy.createWidget("com.mcongrove.toast", null, {
	    	text: L('settings_saved'),
		    duration: 3000,
		    view: $.settings
		});
	});
	
});

$.settings_name.value = Ti.App.Properties.getString('settings_name');
$.settings_host.value = Ti.App.Properties.getString('settings_host');
$.settings_port.value = Ti.App.Properties.getString('settings_port');
$.settings_user.value = Ti.App.Properties.getString('settings_user');
$.settings_pass.value = Ti.App.Properties.getString('settings_pass');