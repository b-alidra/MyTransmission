exports.config = {
	"navigation" : {
		"links" : [{
			"title" : L("movies"),
			"icon" : "fa-film",
			"target" : {
				"widget" : "com.b-alidra.themoviedb",
				"params" : {}
			}
		}, {
			"title" : L("shows"),
			"icon" : "fa-ticket",
			"target" : {
				"widget" : "com.b-alidra.themoviedb",
				"view" : "show/shows",
				"params" : {}
			}
		}, {
			"title" : L("queue"),
			"icon" : "fa-download",
			"target" : {
				"widget" : "com.b-alidra.transmission",
				"params" : {}
			}
		}, /*{
			"title" : L("search"),
			"icon" : "fa-search",
			"target" : {
				"widget" : "com.b-alidra.trakt",
				"view" : "search",
				"params" : {}
			}
		}, */{
			"title" : L("settings"),
			"icon" : "fa-gears",
			"target" : {
				"widget" : "com.b-alidra.transmission",
				"view" : "settings",
				"params" : {}
			}
		}]
	},
	"theme" : {}
};