// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};
Alloy.Globals.loading = Alloy.createWidget("nl.fokkezb.loading");
/*Alloy.Globals.IOS_WIN_HEIGHT = (Ti.Platform.DisplayCaps.getDpi() === 320 || Ti.Platform.DisplayCaps.getDpi() === 260) ? Ti.Platform.DisplayCaps.getPlatformHeight() - 40 : Ti.Platform.DisplayCaps.getPlatformHeight() - 20;
Alloy.Globals.IOS_WIN_OFFSET = (Ti.Platform.DisplayCaps.getDpi() === 320 || Ti.Platform.DisplayCaps.getDpi() === 260) ? 40 : 20;*/