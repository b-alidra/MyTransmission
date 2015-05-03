Alloy.Globals.config = require('config/default').config;
Alloy.Globals.theme	 = require('themes/flat_blue').theme;

var menu = Alloy.createWidget('ds.slideMenu');	
$.container.add(menu.getView());
menu.init();
		
function doClick(e) {
    alert($.label.text);
}

$.index.open();