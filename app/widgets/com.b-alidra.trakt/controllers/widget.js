var tr_api		= new (require('transmission/api')),
	filesize	= require('ext/filesize');

$.toolbar_stop.addEventListener('click', function() { stop(); });
$.toolbar_start.addEventListener('click', function() { start(); });
$.add_button.addEventListener('click', function() {
	var win = Widget.createController('add', {}).getView();
	win.opacity = 0;
	win.open();
	win.animate({ duration: 500, opacity: 1 });
});
refresh();

function refresh() {
	Alloy.Globals.loading.show(L('list_loading'), false);
	$.ptr.endRefreshing();
	loadTorrents();
}

function start() { tr_api.start(null, function(response) { setTimeout(refresh, 500); }); }
function stop()  { tr_api.stop(null, function(response)  { setTimeout(refresh, 500); }); }

function loadTorrents() {
	tr_api.loadTorrents(
		function(err, response) {
			if (err) {
				Alloy.Globals.loading.hide();
				$.tableList.removeAllChildren();
				Alloy.createWidget("com.mcongrove.toast", null, {
			    	text: L('cant_connect'),
				    duration: 5000,
				    view: $.tableList
				});
				
				return false;
			}
			loadInfos();
			$.tableList.removeAllChildren();
			var torrents = response.arguments.torrents, 
				rows = [];//Widget.createController('add', {}).getView()];
			for (var i = 0; i < torrents.length; i++) {
				var t = torrents[i];
				Ti.API.info(JSON.stringify(t));
				var args = {
					torrent_title : t.name,
					torrent_progress : t.percentDone * 100,
					rateDownload : filesize(t.rateDownload),
					rateUpload : filesize(t.rateUpload),
					status: t.status,
					status_text: "",
					icon : 'fa-youtube-play'
				};
				switch (t.status) {
					case tr_api.status.TR_STATUS_DOWNLOAD:
						args.icon = 'fa-download';
						args.icon_class  = 'blue';
						args.status_text = L('status_download') + filesize(t.rateDownload) + '/s ';
						args.status_text += L('status_sending') + filesize(t.rateUpload) + '/s';
						break;
					case tr_api.status.TR_STATUS_STOPPED:
						args.icon = 'fa-pause';
						args.icon_class  = 'red';
						args.status_text = L('status_paused');
						break;
					case tr_api.status.TR_STATUS_CHECK_WAIT:
					case tr_api.status.TR_STATUS_CHECK:
					case tr_api.status.TR_STATUS_DOWNLOAD_WAIT:
						args.icon = 'fa-play';
						args.icon_class  = 'red';
						args.status_text = L('status_queued');
						break;
					case tr_api.status.TR_STATUS_SEED_WAIT:
						args.icon = 'fa-upload';
						args.icon_class  = 'green';
						args.status_text = L('status_seed_wait');
						break;
					case tr_api.status.TR_STATUS_SEED:
						args.icon = 'fa-upload';
						args.icon_class  = 'green';
						args.status_text = L('status_seed') + filesize(t.rateUpload) + '/s';
						break;
				}
				rows.push(Widget.createController('row', args).getView());
			}
			$.tableList.setData(rows);
			Alloy.Globals.loading.hide();
		}
	);
};

function loadInfos() {
	tr_api.loadStats(
		function(err, response) {
			if (err)
				return false;
				
			var stats = response.arguments;
			$.nb_torrents.text		= stats.torrentCount + '  ';
			$.nb_active.text		= stats.activeTorrentCount + '  ';
			$.speed_upload.text		= '  ' + filesize(stats.uploadSpeed, {round: 0}) + '/s';
			$.speed_download.text	= '  ' + filesize(stats.downloadSpeed, {round: 0}) + '/s';
			/*$.size_downloaded.text	= '  ' + filesize((stats['current-stats']).downloadedBytes, {round: 0});
			$.size_uploaded.text	= '  ' + filesize((stats['current-stats']).uploadedBytes, {round: 0});*/
		}
	);
}
