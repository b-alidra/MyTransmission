var args			= arguments[0] || {};
$.fa.add($.icon, args.icon);
$.torrent_title.text		= args.torrent_title || '';
$.torrent_progress.width	= args.torrent_progress + '%';
$.progress_label.text		= args.torrent_progress + '%';
$.torrent_status.text		= args.status_text;
$.icon.color				= Alloy.Globals.theme.list.statusIcons[args.icon_class];

if (args.torrent_progress >= 100)
	$.progress_label.backgroundColor = Alloy.Globals.theme.list.progress.green;
