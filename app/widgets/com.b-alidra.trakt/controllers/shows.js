var tkt_api	= new (require('trakt/api')),
	__ =		require('alloy/underscore');

refresh();

var page = 1;

function refresh() {
	$.ptr.endRefreshing();
	if (__.isEmpty($.term.value))
		popular_shows();
	else
		search();
}

function next() { tkt_api.next(); }

function popular_shows() {
	Alloy.Globals.loading.show(L('list_loading'), false);
	
	$.toolbar_title.text = L('popular_shows');
	
	tkt_api.popular_shows(function(err, response) {
		
		$.tableList.removeAllChildren();
		
		if (err) {
			Alloy.Globals.loading.hide();
			Alloy.createWidget("com.mcongrove.toast", null, {
		    	text: L('cant_connect'),
			    duration: 5000,
			    view: $.tableList
			});
			
			return false;
		}
		
		buildList(response);
		
		Alloy.Globals.loading.hide();
	});
}

function search() {
	Alloy.Globals.loading.show(L('list_loading'), false);
	
	$.toolbar_title.text = $.term.value;
	
	tkt_api.search($.term.value, 'show', function(err, response) {
		
		$.tableList.removeAllChildren();
		
		if (err) {
			Alloy.Globals.loading.hide();
			Alloy.createWidget("com.mcongrove.toast", null, {
		    	text: L('cant_connect'),
			    duration: 5000,
			    view: $.tableList
			});
			
			return false;
		}
		
		buildList(response);
		
		Alloy.Globals.loading.hide();
	});
};

function buildList(response) {
	if (__.isEmpty(response))
		return false;
		
	var rows = [];
	__.each(response, function(m) {
		rows.push(Widget.createController('row', m).getView());
	});
	
	var row = Ti.UI.createTableViewRow();
	var b   = Ti.UI.createButton({
		text: L('load_more')
	});
	b.addEventListener('click', next);
	row.add(b);
	rows.push(row);
	
	$.tableList.setData(rows);
}