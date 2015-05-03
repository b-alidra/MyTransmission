var tkt_api	= new (require('trakt/api')),
	__ =		require('alloy/underscore');

refresh();

function refresh() {
	$.ptr.endRefreshing();
	if (__.isEmpty($.term.value))
		popular_movies();
	else
		search();
}

function next() {
	tkt_api.next(function(err, response) {
		
		if (err) {
			Alloy.Globals.loading.hide();
			Alloy.createWidget("com.mcongrove.toast", null, {
		    	text: L('cant_connect'),
			    duration: 5000,
			    view: $.tableList
			});
			
			return false;
		}
		
		buildList(response, true);
		
		Alloy.Globals.loading.hide();
	});
}

function popular_movies() {
	Alloy.Globals.loading.show(L('list_loading'), false);
	
	$.toolbar_title.text = L('popular_movies');
	
	tkt_api.popular_movies(function(err, response) {
		
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
	
	tkt_api.search($.term.value, 'movie', function(err, response) {
		
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

function buildList(response, append) {
	if (__.isEmpty(response))
		return false;
		
	var rows = [];
	__.each(response, function(m) {
		var row = Widget.createController('row', m).getView();
		if (append)
			$.tableList.appendRow(row);
		else
			rows.push(row);
	});
	
	!append && $.tableList.setData(rows);
	
	var row = Ti.UI.createTableViewRow({
		height: "35dp"
	});
	var b = Ti.UI.createButton({
		text: L('load_more'),
		width: "50%",
		height: "35dp",
		center: "50%",
		color: Alloy.Globals.theme.movies.titleColor,
		font:{
			fontFamily: "OpenSans",
			fontSize: "12dp"
		}
	});
	b.addEventListener('click', function() {
		$.tableList.deleteRow(row);
		setTimeout(next, 500);
	});
	row.add(b);
	$.tableList.appendRow(row);
}