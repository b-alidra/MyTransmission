Alloy.Globals.config = require('config/default').config;
Alloy.Globals.theme	 = require('themes/clear').theme;

var menu = Alloy.createWidget('ds.slideMenu');	
$.container.add(menu.getView());
menu.init();

$.index.open();