var __ = require('alloy/underscore');

//$.row.visible = false;

var args = arguments[0] || {};
args = args.movie || args.show || args;
$.title.text = args.title || '';
$.overview.text = args.overview || args.TAGLINE || '';
$.banner.image = "";

$.banner.addEventListener('load', function() {
	/*this.width = Ti.Platform.displayCaps.platformWidth;
	 this.visible = true;
	 $.row.visible = true;*/
	this.animate({
		opacity : 1,
		duration : 200
	});
});

__.each(['poster', 'banner', 'clearart', 'thumb', 'logo', 'fanart', 'screenshot', 'headshot'], function(s) {
	__.isEmpty($.banner.image) && args.images[s] && ($.banner.image = (args.images[s]['thumb'] ? args.images[s]['thumb'] : args.images[s]['full']));
});

__.isEmpty($.banner.image) && ($.banner.image = 'poster.png');

/*$.banner.width = Ti.Platform.displayCaps.platformWidth;
 $.banner.visible = true;
 $.row.visible = true;
 $.banner.animate({ opacity: 1, duration: 200 });*/
/*
var m = [{
	"title" : "The Shawshank Redemption",
	"year" : 1994,
	"ids" : {
		"trakt" : 234,
		"slug" : "the-shawshank-redemption-1994",
		"imdb" : "tt0111161",
		"tmdb" : 278
	},
	"tagline" : "Fear can hold you prisoner. Hope can set you free.",
	"overview" : "Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.",
	"released" : "1994-09-14",
	"runtime" : 142,
	"trailer" : "http://youtube.com/watch?v=WawU4ouldxU",
	"homepage" : null,
	"rating" : 9.318669999999999,
	"votes" : 9684,
	"updated_at" : "2015-03-24T17:21:32.000Z",
	"language" : "en",
	"available_translations" : ["en", "de", "cs", "da", "hu", "it", "fr", "pt", "nl", "ru", "zh", "nb", "tr", "es", "fi", "ar", "pl", "sv", "he", "no", "sr", "ja", "th", "el", "bg", "ko", "uk"],
	"genres" : ["crime", "drama"],
	"certification" : "R",
	"images" : {
		"fanart" : {
			"full" : "https://walter.trakt.us/images/movies/000/000/234/fanarts/original/609240b889.jpg",
			"medium" : "https://walter.trakt.us/images/movies/000/000/234/fanarts/medium/609240b889.jpg",
			"thumb" : "https://walter.trakt.us/images/movies/000/000/234/fanarts/thumb/609240b889.jpg"
		},
		"poster" : {
			"full" : "https://walter.trakt.us/images/movies/000/000/234/posters/original/09c5e5bb62.jpg",
			"medium" : "https://walter.trakt.us/images/movies/000/000/234/posters/medium/09c5e5bb62.jpg",
			"thumb" : "https://walter.trakt.us/images/movies/000/000/234/posters/thumb/09c5e5bb62.jpg"
		},
		"logo" : {
			"full" : "https://walter.trakt.us/images/movies/000/000/234/logos/original/bcb85fc40e.png"
		},
		"clearart" : {
			"full" : "https://walter.trakt.us/images/movies/000/000/234/cleararts/original/5de00f65ce.png"
		},
		"banner" : {
			"full" : "https://walter.trakt.us/images/movies/000/000/234/banners/original/fce1409e26.jpg"
		},
		"thumb" : {
			"full" : "https://walter.trakt.us/images/movies/000/000/234/thumbs/original/5a8af4e42b.jpg"
		}
	}
}, {
	"title" : "Goodfellas",
	"year" : 1990,
	"ids" : {
		"trakt" : 612,
		"slug" : "goodfellas-1990",
		"imdb" : "tt0099685",
		"tmdb" : 769
	},
	"tagline" : "Three Decades of Life in the Mafia.",
	"overview" : "Henry Hill is a small time gangster, who takes part in a robbery with Jimmy Conway and Tommy De Vito, two other gangsters who have set their sights a bit higher. His two partners kill off everyone else involved in the robbery, and slowly start to climb up through the hierarchy of the Mob. Henry, however, is badly affected by his partners success, but will he stoop low enough to bring about the downfall of Jimmy and Tommy?",
	"released" : "1990-09-18",
	"runtime" : 146,
	"trailer" : "http://youtube.com/watch?v=YH-7he92XfI",
	"homepage" : null,
	"rating" : 8.782590000000001,
	"votes" : 4112,
	"updated_at" : "2015-04-25T08:37:12.000Z",
	"language" : "en",
	"available_translations" : ["en", "de", "fr", "it", "nl", "fi", "es", "tr", "ru", "hu", "pt", "zh", "sv", "pl", "th", "cs", "sr", "el", "da", "he", "uk", "ro"],
	"genres" : ["crime", "drama"],
	"certification" : "R",
	"images" : {
		"fanart" : {
			"full" : "https://walter.trakt.us/images/movies/000/000/612/fanarts/original/f4fe709963.jpg",
			"medium" : "https://walter.trakt.us/images/movies/000/000/612/fanarts/medium/f4fe709963.jpg",
			"thumb" : "https://walter.trakt.us/images/movies/000/000/612/fanarts/thumb/f4fe709963.jpg"
		},
		"poster" : {
			"full" : "https://walter.trakt.us/images/movies/000/000/612/posters/original/b40d11afd2.jpg",
			"medium" : "https://walter.trakt.us/images/movies/000/000/612/posters/medium/b40d11afd2.jpg",
			"thumb" : "https://walter.trakt.us/images/movies/000/000/612/posters/thumb/b40d11afd2.jpg"
		},
		"logo" : {
			"full" : "https://walter.trakt.us/images/movies/000/000/612/logos/original/24b4c90a02.png"
		},
		"clearart" : {
			"full" : "https://walter.trakt.us/images/movies/000/000/612/cleararts/original/5e9b53b57e.png"
		},
		"banner" : {
			"full" : "https://walter.trakt.us/images/movies/000/000/612/banners/original/5b958b1255.jpg"
		},
		"thumb" : {
			"full" : "https://walter.trakt.us/images/movies/000/000/612/thumbs/original/2d28fc8d44.jpg"
		}
	}
}, {
	"title" : "The Green Mile",
	"year" : 1999,
	"ids" : {
		"trakt" : 390,
		"slug" : "the-green-mile-1999",
		"imdb" : "tt0120689",
		"tmdb" : 497
	},
	"tagline" : "Miracles do happen.",
	"overview" : "A supernatural tale set on death row in a Southern prison, where gentle giant John Coffey possesses the mysterious power to heal people's ailments. When the cellblock's head guard, Paul Edgecomb, recognizes Coffey's miraculous gift, he tries desperately to help stave off the condemned man's execution.",
	"released" : "1999-12-10",
	"runtime" : 189,
	"trailer" : "http://youtube.com/watch?v=ctRK-4Vt7dA",
	"homepage" : "http://thegreenmile.warnerbros.com/",
	"rating" : 8.71454,
	"votes" : 6796,
	"updated_at" : "2015-03-28T08:40:53.000Z",
	"language" : "en",
	"available_translations" : ["en", "de", "it", "fr", "ru", "hu", "nb", "tr", "nl", "es", "sv", "pt", "pl", "zh", "cs", "no", "da", "he", "sr", "el", "bg", "sk", "uk", "ja", "ro"],
	"genres" : ["crime", "drama", "fantasy"],
	"certification" : "R",
	"images" : {
		"fanart" : {
			"full" : "https://walter.trakt.us/images/movies/000/000/390/fanarts/original/41110d9f59.jpg",
			"medium" : "https://walter.trakt.us/images/movies/000/000/390/fanarts/medium/41110d9f59.jpg",
			"thumb" : "https://walter.trakt.us/images/movies/000/000/390/fanarts/thumb/41110d9f59.jpg"
		},
		"poster" : {
			"full" : "https://walter.trakt.us/images/movies/000/000/390/posters/original/a247907720.jpg",
			"medium" : "https://walter.trakt.us/images/movies/000/000/390/posters/medium/a247907720.jpg",
			"thumb" : "https://walter.trakt.us/images/movies/000/000/390/posters/thumb/a247907720.jpg"
		},
		"logo" : {
			"full" : "https://walter.trakt.us/images/movies/000/000/390/logos/original/75c039d18c.png"
		},
		"clearart" : {
			"full" : "https://walter.trakt.us/images/movies/000/000/390/cleararts/original/0d13935ca4.png"
		},
		"banner" : {
			"full" : "https://walter.trakt.us/images/movies/000/000/390/banners/original/ac1259d7cd.jpg"
		},
		"thumb" : {
			"full" : "https://walter.trakt.us/images/movies/000/000/390/thumbs/original/270063571f.jpg"
		}
	}
}, {
	"title" : "The Prestige",
	"year" : 2006,
	"ids" : {
		"trakt" : 851,
		"slug" : "the-prestige-2006",
		"imdb" : "tt0482571",
		"tmdb" : 1124
	},
	"tagline" : "Are You Watching Closely?",
	"overview" : "A mysterious story of two magicians whose intense rivalry leads them on a life-long battle for supremacy -- full of obsession, deceit and jealousy with dangerous and deadly consequences.",
	"released" : "2006-10-19",
	"runtime" : 130,
	"trailer" : "http://youtube.com/watch?v=a1AqrIkD7vU",
	"homepage" : "http://wwws.warnerbros.de/theprestige/",
	"rating" : 8.59867,
	"votes" : 7206,
	"updated_at" : "2015-04-23T08:33:09.000Z",
	"language" : "en",
	"available_translations" : ["en", "de", "it", "hu", "fi", "zh", "tr", "fr", "pt", "es", "ru", "cs", "pl", "sv", "nl", "da", "el", "ko", "he", "fa", "ja", "ro"],
	"genres" : ["drama", "mystery", "thriller"],
	"certification" : "PG-13",
	"images" : {
		"fanart" : {
			"full" : "https://walter.trakt.us/images/movies/000/000/851/fanarts/original/c448b3703c.jpg",
			"medium" : "https://walter.trakt.us/images/movies/000/000/851/fanarts/medium/c448b3703c.jpg",
			"thumb" : "https://walter.trakt.us/images/movies/000/000/851/fanarts/thumb/c448b3703c.jpg"
		},
		"poster" : {
			"full" : "https://walter.trakt.us/images/movies/000/000/851/posters/original/15617edab2.jpg",
			"medium" : "https://walter.trakt.us/images/movies/000/000/851/posters/medium/15617edab2.jpg",
			"thumb" : "https://walter.trakt.us/images/movies/000/000/851/posters/thumb/15617edab2.jpg"
		},
		"logo" : {
			"full" : "https://walter.trakt.us/images/movies/000/000/851/logos/original/3973126fa5.png"
		},
		"clearart" : {
			"full" : "https://walter.trakt.us/images/movies/000/000/851/cleararts/original/b67da3d82e.png"
		},
		"banner" : {
			"full" : "https://walter.trakt.us/images/movies/000/000/851/banners/original/d0eaeee728.jpg"
		},
		"thumb" : {
			"full" : "https://walter.trakt.us/images/movies/000/000/851/thumbs/original/150dd17175.jpg"
		}
	}
}, {
	"title" : "The Usual Suspects",
	"year" : 1995,
	"ids" : {
		"trakt" : 505,
		"slug" : "the-usual-suspects-1995",
		"imdb" : "tt0114814",
		"tmdb" : 629
	},
	"tagline" : "Five Criminals . One Line Up . No Coincidence.",
	"overview" : "Following a truck hijack in New York, five conmen are arrested and brought together for questioning. As none of them is guilty, they plan a revenge operation against the police. The operation goes well, but then the influence of a legendary mastermind criminal called Keyser Söze is felt. It becomes clear that each one of them has wronged Söze at some point and must pay back now. The payback job leaves 27 men dead in a boat explosion, but the real question arises now: Who actually is Keyser Söze?",
	"released" : "1995-08-16",
	"runtime" : 106,
	"trailer" : "http://youtube.com/watch?v=oiXdPolca5w",
	"homepage" : null,
	"rating" : 8.8622,
	"votes" : 5588,
	"updated_at" : "2015-02-05T08:40:07.000Z",
	"language" : "es",
	"available_translations" : ["en", "de", "cs", "it", "fr", "pt", "es", "zh", "sv", "tr", "nl", "ru", "hu", "pl", "da", "th", "el", "ko", "hr", "he"],
	"genres" : ["crime", "drama", "thriller"],
	"certification" : "R",
	"images" : {
		"fanart" : {
			"full" : "https://walter.trakt.us/images/movies/000/000/505/fanarts/original/3937599fed.jpg",
			"medium" : "https://walter.trakt.us/images/movies/000/000/505/fanarts/medium/3937599fed.jpg",
			"thumb" : "https://walter.trakt.us/images/movies/000/000/505/fanarts/thumb/3937599fed.jpg"
		},
		"poster" : {
			"full" : "https://walter.trakt.us/images/movies/000/000/505/posters/original/6646ad2de1.jpg",
			"medium" : "https://walter.trakt.us/images/movies/000/000/505/posters/medium/6646ad2de1.jpg",
			"thumb" : "https://walter.trakt.us/images/movies/000/000/505/posters/thumb/6646ad2de1.jpg"
		},
		"logo" : {
			"full" : "https://walter.trakt.us/images/movies/000/000/505/logos/original/f0cf882b67.png"
		},
		"clearart" : {
			"full" : "https://walter.trakt.us/images/movies/000/000/505/cleararts/original/042398f103.png"
		},
		"banner" : {
			"full" : "https://walter.trakt.us/images/movies/000/000/505/banners/original/ab4ccb0d6b.jpg"
		},
		"thumb" : {
			"full" : "https://walter.trakt.us/images/movies/000/000/505/thumbs/original/932acda294.jpg"
		}
	}
}, {
	"title" : "Good Will Hunting",
	"year" : 1997,
	"ids" : {
		"trakt" : 383,
		"slug" : "good-will-hunting-1997",
		"imdb" : "tt0119217",
		"tmdb" : 489
	},
	"tagline" : "Some people can never believe in themselves, until someone believes in them.",
	"overview" : "Will Hunting, a janitor at MIT, has a gift for mathematics but needs help from a psychologist to find direction in his life.",
	"released" : "1997-12-05",
	"runtime" : 126,
	"trailer" : "http://youtube.com/watch?v=tIxAAbMB-2M",
	"homepage" : "http://www.miramax.com/movie/good-will-hunting",
	"rating" : 8.539820000000001,
	"votes" : 5224,
	"updated_at" : "2015-04-06T08:41:42.000Z",
	"language" : "en",
	"available_translations" : ["en", "it", "hu", "es", "de", "fr", "pt", "ru", "el", "zh", "nl", "sv", "da", "tr", "hr", "sr", "cs", "fi", "ko", "he", "pl"],
	"genres" : ["drama"],
	"certification" : "R",
	"images" : {
		"fanart" : {
			"full" : "https://walter.trakt.us/images/movies/000/000/383/fanarts/original/c547f52150.jpg",
			"medium" : "https://walter.trakt.us/images/movies/000/000/383/fanarts/medium/c547f52150.jpg",
			"thumb" : "https://walter.trakt.us/images/movies/000/000/383/fanarts/thumb/c547f52150.jpg"
		},
		"poster" : {
			"full" : "https://walter.trakt.us/images/movies/000/000/383/posters/original/6e4e3f6373.jpg",
			"medium" : "https://walter.trakt.us/images/movies/000/000/383/posters/medium/6e4e3f6373.jpg",
			"thumb" : "https://walter.trakt.us/images/movies/000/000/383/posters/thumb/6e4e3f6373.jpg"
		},
		"logo" : {
			"full" : "https://walter.trakt.us/images/movies/000/000/383/logos/original/f1f36f8bed.png"
		},
		"clearart" : {
			"full" : "https://walter.trakt.us/images/movies/000/000/383/cleararts/original/c88d1a2498.png"
		},
		"banner" : {
			"full" : "https://walter.trakt.us/images/movies/000/000/383/banners/original/56c284a20b.jpg"
		},
		"thumb" : {
			"full" : "https://walter.trakt.us/images/movies/000/000/383/thumbs/original/bf1d3d0116.jpg"
		}
	}
}, {
	"title" : "Back to the Future",
	"year" : 1985,
	"ids" : {
		"trakt" : 74,
		"slug" : "back-to-the-future-1985",
		"imdb" : "tt0088763",
		"tmdb" : 105
	},
	"tagline" : "He's the only kid ever to get into trouble before he was born.",
	"overview" : "Eighties teenager Marty McFly is accidentally sent back in time to 1955, inadvertently disrupting his parents' first meeting and attracting his mother's romantic interest. Marty must repair the damage to history by rekindling his parents' romance and - with the help of his eccentric inventor friend Doc Brown - return to 1985.",
	"released" : "1985-07-03",
	"runtime" : 116,
	"trailer" : null,
	"homepage" : "http://www.bttfmovie.com/",
	"rating" : 8.79692,
	"votes" : 10080,
	"updated_at" : "2015-04-28T08:53:21.000Z",
	"language" : "en",
	"available_translations" : ["en", "de", "it", "ru", "fr", "cs", "hu", "pt", "es", "sk", "nb", "tr", "zh", "el", "sv", "fi", "nl", "pl", "da", "bg", "no", "sr", "he", "ja", "et", "hr", "ro"],
	"genres" : ["adventure", "comedy", "family", "science-fiction"],
	"certification" : "PG",
	"images" : {
		"fanart" : {
			"full" : "https://walter.trakt.us/images/movies/000/000/074/fanarts/original/8f0e2f8a82.jpg",
			"medium" : "https://walter.trakt.us/images/movies/000/000/074/fanarts/medium/8f0e2f8a82.jpg",
			"thumb" : "https://walter.trakt.us/images/movies/000/000/074/fanarts/thumb/8f0e2f8a82.jpg"
		},
		"poster" : {
			"full" : "https://walter.trakt.us/images/movies/000/000/074/posters/original/307ca57ebc.jpg",
			"medium" : "https://walter.trakt.us/images/movies/000/000/074/posters/medium/307ca57ebc.jpg",
			"thumb" : "https://walter.trakt.us/images/movies/000/000/074/posters/thumb/307ca57ebc.jpg"
		},
		"logo" : {
			"full" : "https://walter.trakt.us/images/movies/000/000/074/logos/original/95ba78ccf5.png"
		},
		"clearart" : {
			"full" : "https://walter.trakt.us/images/movies/000/000/074/cleararts/original/253164bb86.png"
		},
		"banner" : {
			"full" : "https://walter.trakt.us/images/movies/000/000/074/banners/original/6d5c740f5c.jpg"
		},
		"thumb" : {
			"full" : "https://walter.trakt.us/images/movies/000/000/074/thumbs/original/828fc42f70.jpg"
		}
	}
}, {
	"title" : "Big Hero 6",
	"year" : 2014,
	"ids" : {
		"trakt" : 112404,
		"slug" : "big-hero-6-2014",
		"imdb" : "tt2245084",
		"tmdb" : 177572
	},
	"tagline" : "Balalalala",
	"overview" : "The special bond that develops between plus-sized inflatable robot Baymax, and prodigy Hiro Hamada, who team up with a group of friends to form a band of high-tech heroes.",
	"released" : "2014-11-07",
	"runtime" : 102,
	"trailer" : "http://youtube.com/watch?v=z3biFxZIJOQ",
	"homepage" : "http://movies.disney.com/big-hero-6",
	"rating" : 8.317769999999999,
	"votes" : 5268,
	"updated_at" : "2015-05-01T08:42:05.000Z",
	"language" : "en",
	"available_translations" : ["en", "ru", "fr", "it", "es", "de", "pt", "he", "fi", "zh", "el", "cn", "hu", "nl", "cs", "bg", "sv", "sk", "tr", "pl", "th", "ko", "da", "ja", "sl", "uk", "fa"],
	"genres" : ["action", "adventure", "animation", "comedy", "family"],
	"certification" : "PG",
	"images" : {
		"fanart" : {
			"full" : "https://walter.trakt.us/images/movies/000/112/404/fanarts/original/bf3eed7e93.jpg",
			"medium" : "https://walter.trakt.us/images/movies/000/112/404/fanarts/medium/bf3eed7e93.jpg",
			"thumb" : "https://walter.trakt.us/images/movies/000/112/404/fanarts/thumb/bf3eed7e93.jpg"
		},
		"poster" : {
			"full" : "https://walter.trakt.us/images/movies/000/112/404/posters/original/5c9e3c0629.jpg",
			"medium" : "https://walter.trakt.us/images/movies/000/112/404/posters/medium/5c9e3c0629.jpg",
			"thumb" : "https://walter.trakt.us/images/movies/000/112/404/posters/thumb/5c9e3c0629.jpg"
		},
		"logo" : {
			"full" : "https://walter.trakt.us/images/movies/000/112/404/logos/original/d9cc213dc6.png"
		},
		"clearart" : {
			"full" : "https://walter.trakt.us/images/movies/000/112/404/cleararts/original/9145019b49.png"
		},
		"banner" : {
			"full" : "https://walter.trakt.us/images/movies/000/112/404/banners/original/f452438cd4.jpg"
		},
		"thumb" : {
			"full" : null
		}
	}
}, {
	"title" : "Se7en",
	"year" : 1995,
	"ids" : {
		"trakt" : 650,
		"slug" : "se7en-1995",
		"imdb" : "tt0114369",
		"tmdb" : 807
	},
	"tagline" : "Seven deadly sins. Seven ways to die.",
	"overview" : "Two homicide detectives are on a desperate hunt for a serial killer whose crimes are based on the \"seven deadly sins\" in this dark and haunting film that takes viewers from the tortured remains of one victim to the next. The seasoned Det. Sommerset researches each sin in an effort to get inside the killer's mind, while his novice partner, Mills, scoffs at his efforts to unravel the case.",
	"released" : "1995-09-22",
	"runtime" : 127,
	"trailer" : "http://youtube.com/watch?v=znmZoVkCjpI",
	"homepage" : "http://www.sevenmovie.com/",
	"rating" : 8.771649999999999,
	"votes" : 8382,
	"updated_at" : "2015-03-19T08:47:59.000Z",
	"language" : "en",
	"available_translations" : ["en", "de", "ru", "it", "fr", "es", "hu", "zh", "tr", "nl", "pt", "fi", "pl", "sv", "cs", "da", "sr", "ja", "el", "he", "fa"],
	"genres" : ["crime", "mystery", "thriller"],
	"certification" : "R",
	"images" : {
		"fanart" : {
			"full" : "https://walter.trakt.us/images/movies/000/000/650/fanarts/original/a1dcd97b07.jpg",
			"medium" : "https://walter.trakt.us/images/movies/000/000/650/fanarts/medium/a1dcd97b07.jpg",
			"thumb" : "https://walter.trakt.us/images/movies/000/000/650/fanarts/thumb/a1dcd97b07.jpg"
		},
		"poster" : {
			"full" : "https://walter.trakt.us/images/movies/000/000/650/posters/original/b0e28495c2.jpg",
			"medium" : "https://walter.trakt.us/images/movies/000/000/650/posters/medium/b0e28495c2.jpg",
			"thumb" : "https://walter.trakt.us/images/movies/000/000/650/posters/thumb/b0e28495c2.jpg"
		},
		"logo" : {
			"full" : "https://walter.trakt.us/images/movies/000/000/650/logos/original/53ca7362e8.png"
		},
		"clearart" : {
			"full" : "https://walter.trakt.us/images/movies/000/000/650/cleararts/original/f855af4b0a.png"
		},
		"banner" : {
			"full" : "https://walter.trakt.us/images/movies/000/000/650/banners/original/fc0b20db5f.jpg"
		},
		"thumb" : {
			"full" : "https://walter.trakt.us/images/movies/000/000/650/thumbs/original/3b3f3ac5d4.jpg"
		}
	}
}, {
	"title" : "Rush",
	"year" : 2013,
	"ids" : {
		"trakt" : 70421,
		"slug" : "rush-2013",
		"imdb" : "tt1979320",
		"tmdb" : 96721
	},
	"tagline" : "Everyone's driven by something.",
	"overview" : "A biography of Formula 1 champion driver Niki Lauda and the 1976 crash that almost claimed his life. Mere weeks after the accident, he got behind the wheel to challenge his rival, James Hunt.",
	"released" : "2013-09-27",
	"runtime" : 123,
	"trailer" : null,
	"homepage" : null,
	"rating" : 8.33362,
	"votes" : 4673,
	"updated_at" : "2015-04-11T08:38:09.000Z",
	"language" : "en",
	"available_translations" : ["en", "de", "it", "hu", "zh", "ru", "fr", "nl", "es", "bg", "sk", "pt", "da", "tr", "cs", "pl", "el", "fr", "nl", "es", "bg", "sv", "sk", "pt", "da", "tr", "cs", "th", "pl", "el", "sv", "fi", "th", "ko", "uk", "he", "fi", "no", "ko", "uk", "he", "no", "ro"],
	"genres" : ["action", "drama"],
	"certification" : "R",
	"images" : {
		"fanart" : {
			"full" : "https://walter.trakt.us/images/movies/000/070/421/fanarts/original/fa813103a3.jpg",
			"medium" : "https://walter.trakt.us/images/movies/000/070/421/fanarts/medium/fa813103a3.jpg",
			"thumb" : "https://walter.trakt.us/images/movies/000/070/421/fanarts/thumb/fa813103a3.jpg"
		},
		"poster" : {
			"full" : "https://walter.trakt.us/images/movies/000/070/421/posters/original/62d093a14a.jpg",
			"medium" : "https://walter.trakt.us/images/movies/000/070/421/posters/medium/62d093a14a.jpg",
			"thumb" : "https://walter.trakt.us/images/movies/000/070/421/posters/thumb/62d093a14a.jpg"
		},
		"logo" : {
			"full" : "https://walter.trakt.us/images/movies/000/070/421/logos/original/082946329b.png"
		},
		"clearart" : {
			"full" : "https://walter.trakt.us/images/movies/000/070/421/cleararts/original/8f6233bc60.png"
		},
		"banner" : {
			"full" : "https://walter.trakt.us/images/movies/000/070/421/banners/original/aeeae70aee.jpg"
		},
		"thumb" : {
			"full" : "https://walter.trakt.us/images/movies/000/070/421/thumbs/original/d00579be79.jpg"
		}
	}
}];

var s = [{
	"title" : "Band of Brothers",
	"year" : 2001,
	"ids" : {
		"trakt" : 4589,
		"slug" : "band-of-brothers",
		"tvdb" : 74205,
		"imdb" : "tt0185906",
		"tmdb" : 4613,
		"tvrage" : null
	},
	"overview" : "The miniseries follows Easy Company, an army unit during World War II, from their initial training at Camp Toccoa to the conclusion of the war. The series is based on the book written by the late Stephen E. Ambrose. \n\nBand of Brothers is executive produced by Steven Spielberg and Tom Hanks, the series won 6 Emmy Awards. ",
	"first_aired" : "2001-09-09T00:00:00.000Z",
	"airs" : {
		"day" : null,
		"time" : null,
		"timezone" : "Europe/London"
	},
	"runtime" : 60,
	"certification" : "TV-MA",
	"network" : "HBO",
	"country" : "gb",
	"trailer" : null,
	"homepage" : null,
	"status" : "ended",
	"rating" : 9.43351,
	"votes" : 6189,
	"updated_at" : "2015-05-01T08:47:30.000Z",
	"language" : "en",
	"available_translations" : ["en", "nl", "fr", "de", "cs", "da", "tr", "zh", "es", "hu", "pl", "ro", "hr", "pt"],
	"genres" : ["drama"],
	"aired_episodes" : 10,
	"images" : {
		"fanart" : {
			"full" : "https://walter.trakt.us/images/shows/000/004/589/fanarts/original/3e24c4deec.jpg",
			"medium" : "https://walter.trakt.us/images/shows/000/004/589/fanarts/medium/3e24c4deec.jpg",
			"thumb" : "https://walter.trakt.us/images/shows/000/004/589/fanarts/thumb/3e24c4deec.jpg"
		},
		"poster" : {
			"full" : "https://walter.trakt.us/images/shows/000/004/589/posters/original/9f4cde5d16.jpg",
			"medium" : "https://walter.trakt.us/images/shows/000/004/589/posters/medium/9f4cde5d16.jpg",
			"thumb" : "https://walter.trakt.us/images/shows/000/004/589/posters/thumb/9f4cde5d16.jpg"
		},
		"logo" : {
			"full" : "https://walter.trakt.us/images/shows/000/004/589/logos/original/e6b1205882.png"
		},
		"clearart" : {
			"full" : "https://walter.trakt.us/images/shows/000/004/589/cleararts/original/868fb6f529.png"
		},
		"banner" : {
			"full" : "https://walter.trakt.us/images/shows/000/004/589/banners/original/7ef8161199.jpg"
		},
		"thumb" : {
			"full" : "https://walter.trakt.us/images/shows/000/004/589/thumbs/original/093f703f67.jpg"
		}
	}
}, {
	"title" : "Planet Earth",
	"year" : 2006,
	"ids" : {
		"trakt" : 1039,
		"slug" : "planet-earth",
		"tvdb" : 79257,
		"imdb" : "tt0795176",
		"tmdb" : 1044,
		"tvrage" : null
	},
	"overview" : "Planet Earth is a 2006 television series produced by the BBC Natural History Unit. Five years in the making, it was the most expensive nature documentary series ever commissioned by the BBC and was described by its makers as \"the definitive look at the diversity of our planet\". \n\nEach 50 minute episode features a global overview of a different biome or habitat on Earth, followed by a ten-minute featurette which takes a behind-the-scenes look.",
	"first_aired" : "2006-03-05T00:00:00.000Z",
	"airs" : {
		"day" : null,
		"time" : null,
		"timezone" : "Europe/London"
	},
	"runtime" : 60,
	"certification" : "TV-G",
	"network" : "BBC One",
	"country" : "gb",
	"trailer" : null,
	"homepage" : null,
	"status" : "ended",
	"rating" : 9.434369999999999,
	"votes" : 1775,
	"updated_at" : "2015-04-09T08:48:28.000Z",
	"language" : "en",
	"available_translations" : ["en", "it", "ru", "de", "fr", "nl", "cs", "ro", "ko"],
	"genres" : ["documentary"],
	"aired_episodes" : 11,
	"images" : {
		"fanart" : {
			"full" : "https://walter.trakt.us/images/shows/000/001/039/fanarts/original/29cc38ac56.jpg",
			"medium" : "https://walter.trakt.us/images/shows/000/001/039/fanarts/medium/29cc38ac56.jpg",
			"thumb" : "https://walter.trakt.us/images/shows/000/001/039/fanarts/thumb/29cc38ac56.jpg"
		},
		"poster" : {
			"full" : "https://walter.trakt.us/images/shows/000/001/039/posters/original/3a0b020e41.jpg",
			"medium" : "https://walter.trakt.us/images/shows/000/001/039/posters/medium/3a0b020e41.jpg",
			"thumb" : "https://walter.trakt.us/images/shows/000/001/039/posters/thumb/3a0b020e41.jpg"
		},
		"logo" : {
			"full" : "https://walter.trakt.us/images/shows/000/001/039/logos/original/d720e1494e.png"
		},
		"clearart" : {
			"full" : "https://walter.trakt.us/images/shows/000/001/039/cleararts/original/d2c2e14f67.png"
		},
		"banner" : {
			"full" : "https://walter.trakt.us/images/shows/000/001/039/banners/original/cb6c506688.jpg"
		},
		"thumb" : {
			"full" : "https://walter.trakt.us/images/shows/000/001/039/thumbs/original/729acefdf8.jpg"
		}
	}
}, {
	"title" : "Sherlock",
	"year" : 2010,
	"ids" : {
		"trakt" : 19792,
		"slug" : "sherlock",
		"tvdb" : 176941,
		"imdb" : "tt1475582",
		"tmdb" : 19885,
		"tvrage" : 23433
	},
	"overview" : "Sherlock is a British television crime drama that presents a contemporary adaptation of Sir Arthur Conan Doyle's Sherlock Holmes detective stories. Created by Steven Moffat and Mark Gatiss, it stars Benedict Cumberbatch as Sherlock Holmes and Martin Freeman as Doctor John Watson.",
	"first_aired" : "2010-07-25T19:30:00.000Z",
	"airs" : {
		"day" : "Sunday",
		"time" : "20:30",
		"timezone" : "Europe/London"
	},
	"runtime" : 90,
	"certification" : "TV-14",
	"network" : "BBC One",
	"country" : "gb",
	"trailer" : null,
	"homepage" : null,
	"status" : "returning series",
	"rating" : 9.2821,
	"votes" : 18653,
	"updated_at" : "2015-04-27T10:38:41.000Z",
	"language" : "en",
	"available_translations" : ["en", "ru", "zh", "hu", "pt", "es", "bg", "tr", "sk", "nl", "fr", "he", "ja", "de", "el", "it", "sv", "ko", "pl"],
	"genres" : ["drama"],
	"aired_episodes" : 9,
	"images" : {
		"fanart" : {
			"full" : "https://walter.trakt.us/images/shows/000/019/792/fanarts/original/ede801038d.jpg",
			"medium" : "https://walter.trakt.us/images/shows/000/019/792/fanarts/medium/ede801038d.jpg",
			"thumb" : "https://walter.trakt.us/images/shows/000/019/792/fanarts/thumb/ede801038d.jpg"
		},
		"poster" : {
			"full" : "https://walter.trakt.us/images/shows/000/019/792/posters/original/6311e0343c.jpg",
			"medium" : "https://walter.trakt.us/images/shows/000/019/792/posters/medium/6311e0343c.jpg",
			"thumb" : "https://walter.trakt.us/images/shows/000/019/792/posters/thumb/6311e0343c.jpg"
		},
		"logo" : {
			"full" : "https://walter.trakt.us/images/shows/000/019/792/logos/original/cf63398f03.png"
		},
		"clearart" : {
			"full" : "https://walter.trakt.us/images/shows/000/019/792/cleararts/original/0339c5f877.png"
		},
		"banner" : {
			"full" : "https://walter.trakt.us/images/shows/000/019/792/banners/original/ca665b6d1d.jpg"
		},
		"thumb" : {
			"full" : "https://walter.trakt.us/images/shows/000/019/792/thumbs/original/79e863da08.jpg"
		}
	}
}, {
	"title" : "House of Cards",
	"year" : 2013,
	"ids" : {
		"trakt" : 1416,
		"slug" : "house-of-cards",
		"tvdb" : 262980,
		"imdb" : "tt1856010",
		"tmdb" : 1425,
		"tvrage" : 27822
	},
	"overview" : "Ruthless and cunning, Congressman Francis Underwood and his wife Claire stop at nothing to conquer everything. This wicked political drama penetrates the shadowy world of greed, sex and corruption in modern D.C.",
	"first_aired" : "2013-01-31T08:01:00.000Z",
	"airs" : {
		"day" : "Friday",
		"time" : "03:01",
		"timezone" : "America/New_York"
	},
	"runtime" : 50,
	"certification" : "TV-MA",
	"network" : "Netflix",
	"country" : "us",
	"trailer" : null,
	"homepage" : null,
	"status" : "returning series",
	"rating" : 9.03298,
	"votes" : 10764,
	"updated_at" : "2015-05-01T11:02:27.000Z",
	"language" : "en",
	"available_translations" : ["en", "fr", "de", "el", "pt", "it", "hu", "he", "pl", "da", "es", "ru", "nl", "zh", "fi"],
	"genres" : ["drama", "thriller"],
	"aired_episodes" : 39,
	"images" : {
		"fanart" : {
			"full" : "https://walter.trakt.us/images/shows/000/001/416/fanarts/original/28b9159c81.jpg",
			"medium" : "https://walter.trakt.us/images/shows/000/001/416/fanarts/medium/28b9159c81.jpg",
			"thumb" : "https://walter.trakt.us/images/shows/000/001/416/fanarts/thumb/28b9159c81.jpg"
		},
		"poster" : {
			"full" : "https://walter.trakt.us/images/shows/000/001/416/posters/original/a4f9e25836.jpg",
			"medium" : "https://walter.trakt.us/images/shows/000/001/416/posters/medium/a4f9e25836.jpg",
			"thumb" : "https://walter.trakt.us/images/shows/000/001/416/posters/thumb/a4f9e25836.jpg"
		},
		"logo" : {
			"full" : "https://walter.trakt.us/images/shows/000/001/416/logos/original/c37ec13140.png"
		},
		"clearart" : {
			"full" : "https://walter.trakt.us/images/shows/000/001/416/cleararts/original/0fa8e384b0.png"
		},
		"banner" : {
			"full" : "https://walter.trakt.us/images/shows/000/001/416/banners/original/503ff82fca.jpg"
		},
		"thumb" : {
			"full" : "https://walter.trakt.us/images/shows/000/001/416/thumbs/original/47eec40c39.jpg"
		}
	}
}, {
	"title" : "Breaking Bad",
	"year" : 2008,
	"ids" : {
		"trakt" : 1388,
		"slug" : "breaking-bad",
		"tvdb" : 81189,
		"imdb" : "tt0903747",
		"tmdb" : 1396,
		"tvrage" : 18164
	},
	"overview" : "Walter White, a struggling high school chemistry teacher, is diagnosed with advanced lung cancer. He turns to a life of crime, producing and selling methamphetamine accompanied by a former student, Jesse Pinkman, with the aim of securing his family's financial future before he dies.",
	"first_aired" : "2008-01-20T02:00:00.000Z",
	"airs" : {
		"day" : "Sunday",
		"time" : "21:00",
		"timezone" : "America/New_York"
	},
	"runtime" : 45,
	"certification" : "TV-MA",
	"network" : "AMC",
	"country" : "us",
	"trailer" : null,
	"homepage" : null,
	"status" : "ended",
	"rating" : 9.45462,
	"votes" : 32236,
	"updated_at" : "2015-04-30T10:48:59.000Z",
	"language" : "en",
	"available_translations" : ["en", "tr", "sk", "de", "ru", "fr", "hu", "zh", "el", "es", "bg", "ro", "it", "ko", "he", "nl", "pl", "da", "pt", "cs", "ja", "uk", "sv"],
	"genres" : ["drama"],
	"aired_episodes" : 62,
	"images" : {
		"fanart" : {
			"full" : "https://walter.trakt.us/images/shows/000/001/388/fanarts/original/fdbc0cb02d.jpg",
			"medium" : "https://walter.trakt.us/images/shows/000/001/388/fanarts/medium/fdbc0cb02d.jpg",
			"thumb" : "https://walter.trakt.us/images/shows/000/001/388/fanarts/thumb/fdbc0cb02d.jpg"
		},
		"poster" : {
			"full" : "https://walter.trakt.us/images/shows/000/001/388/posters/original/fa39b59954.jpg",
			"medium" : "https://walter.trakt.us/images/shows/000/001/388/posters/medium/fa39b59954.jpg",
			"thumb" : "https://walter.trakt.us/images/shows/000/001/388/posters/thumb/fa39b59954.jpg"
		},
		"logo" : {
			"full" : "https://walter.trakt.us/images/shows/000/001/388/logos/original/d8abdb2dee.png"
		},
		"clearart" : {
			"full" : "https://walter.trakt.us/images/shows/000/001/388/cleararts/original/1f00520834.png"
		},
		"banner" : {
			"full" : "https://walter.trakt.us/images/shows/000/001/388/banners/original/c53872a7e2.jpg"
		},
		"thumb" : {
			"full" : "https://walter.trakt.us/images/shows/000/001/388/thumbs/original/2fd220ab54.jpg"
		}
	}
}, {
	"title" : "Game of Thrones",
	"year" : 2011,
	"ids" : {
		"trakt" : 1390,
		"slug" : "game-of-thrones",
		"tvdb" : 121361,
		"imdb" : "tt0944947",
		"tmdb" : 1399,
		"tvrage" : 24493
	},
	"overview" : "Seven noble families fight for control of the mythical land of Westeros. Friction between the houses leads to full-scale war. All while a very ancient evil awakens in the farthest north. Amidst the war, a neglected military order of misfits, the Night's Watch, is all that stands between the realms of men and icy horrors beyond.",
	"first_aired" : "2011-04-18T01:00:00.000Z",
	"airs" : {
		"day" : "Sunday",
		"time" : "21:00",
		"timezone" : "America/New_York"
	},
	"runtime" : 60,
	"certification" : "TV-MA",
	"network" : "HBO",
	"country" : "us",
	"trailer" : "http://youtube.com/watch?v=F9Bo89m2f6g",
	"homepage" : null,
	"status" : "returning series",
	"rating" : 9.40207,
	"votes" : 36800,
	"updated_at" : "2015-05-01T11:22:35.000Z",
	"language" : "en",
	"available_translations" : ["en", "fr", "it", "de", "es", "ru", "hu", "el", "cs", "pt", "sk", "nl", "bg", "sv", "zh", "pl", "fa", "da", "tr", "he", "ro", "fi", "th", "ko", "uk", "is", "lt"],
	"genres" : ["drama"],
	"aired_episodes" : 43,
	"images" : {
		"fanart" : {
			"full" : "https://walter.trakt.us/images/shows/000/001/390/fanarts/original/39f9936d62.jpg",
			"medium" : "https://walter.trakt.us/images/shows/000/001/390/fanarts/medium/39f9936d62.jpg",
			"thumb" : "https://walter.trakt.us/images/shows/000/001/390/fanarts/thumb/39f9936d62.jpg"
		},
		"poster" : {
			"full" : "https://walter.trakt.us/images/shows/000/001/390/posters/original/e2e8d04f11.jpg",
			"medium" : "https://walter.trakt.us/images/shows/000/001/390/posters/medium/e2e8d04f11.jpg",
			"thumb" : "https://walter.trakt.us/images/shows/000/001/390/posters/thumb/e2e8d04f11.jpg"
		},
		"logo" : {
			"full" : "https://walter.trakt.us/images/shows/000/001/390/logos/original/13b614ad43.png"
		},
		"clearart" : {
			"full" : "https://walter.trakt.us/images/shows/000/001/390/cleararts/original/5cbde9e647.png"
		},
		"banner" : {
			"full" : "https://walter.trakt.us/images/shows/000/001/390/banners/original/9fefff703d.jpg"
		},
		"thumb" : {
			"full" : "https://walter.trakt.us/images/shows/000/001/390/thumbs/original/800809a48d.jpg"
		}
	}
}, {
	"title" : "Firefly",
	"year" : 2002,
	"ids" : {
		"trakt" : 1428,
		"slug" : "firefly",
		"tvdb" : 78874,
		"imdb" : "tt0303461",
		"tmdb" : 1437,
		"tvrage" : 3548
	},
	"overview" : "In the far-distant future, Captain Malcolm \"Mal\" Reynolds is a renegade former brown-coat sergeant, now turned smuggler & rogue, who is the commander of a small spacecraft, with a loyal hand-picked crew made up of the first mate, Zoe Warren; the pilot Hoban \"Wash\" Washburn; the gung-ho grunt Jayne Cobb; the engineer Kaylee Frye; the fugitives Dr. Simon Tam and his psychic sister River. Together, they travel the far reaches of space in search of food, money, and anything to live on.",
	"first_aired" : "2002-12-20T00:00:00.000Z",
	"airs" : {
		"day" : null,
		"time" : null,
		"timezone" : "America/New_York"
	},
	"runtime" : 42,
	"certification" : "TV-14",
	"network" : "FOX (US)",
	"country" : "us",
	"trailer" : null,
	"homepage" : null,
	"status" : "ended",
	"rating" : 9.31315,
	"votes" : 8555,
	"updated_at" : "2015-04-30T10:48:34.000Z",
	"language" : "en",
	"available_translations" : ["en", "cs", "pt", "es", "ru", "it", "he", "fr", "pl", "de", "zh", "el", "hu"],
	"genres" : ["drama"],
	"aired_episodes" : 14,
	"images" : {
		"fanart" : {
			"full" : "https://walter.trakt.us/images/shows/000/001/428/fanarts/original/f07e226271.jpg",
			"medium" : "https://walter.trakt.us/images/shows/000/001/428/fanarts/medium/f07e226271.jpg",
			"thumb" : "https://walter.trakt.us/images/shows/000/001/428/fanarts/thumb/f07e226271.jpg"
		},
		"poster" : {
			"full" : "https://walter.trakt.us/images/shows/000/001/428/posters/original/fa1278e235.jpg",
			"medium" : "https://walter.trakt.us/images/shows/000/001/428/posters/medium/fa1278e235.jpg",
			"thumb" : "https://walter.trakt.us/images/shows/000/001/428/posters/thumb/fa1278e235.jpg"
		},
		"logo" : {
			"full" : "https://walter.trakt.us/images/shows/000/001/428/logos/original/36203fa7c3.png"
		},
		"clearart" : {
			"full" : "https://walter.trakt.us/images/shows/000/001/428/cleararts/original/b1926f7752.png"
		},
		"banner" : {
			"full" : "https://walter.trakt.us/images/shows/000/001/428/banners/original/c1e153ac03.jpg"
		},
		"thumb" : {
			"full" : "https://walter.trakt.us/images/shows/000/001/428/thumbs/original/a33cdc2a74.jpg"
		}
	}
}, {
	"title" : "The X-Files",
	"year" : 1993,
	"ids" : {
		"trakt" : 4063,
		"slug" : "the-x-files",
		"tvdb" : 77398,
		"imdb" : "tt0106179",
		"tmdb" : 4087,
		"tvrage" : 6312
	},
	"overview" : "The X-Files focused on the exploits of FBI Agents Fox Mulder, Dana Scully, John Doggett and Monica Reyes and their investigations into the paranormal. From genetic mutants and killer insects to a global conspiracy concerning the colonization of Earth by an alien species, this mind-boggling, humorous and occasionally frightening series created by Chris Carter has been one of the world's most popular sci-fi/drama shows since its humble beginnings in 1993.",
	"first_aired" : "1993-09-10T00:00:00.000Z",
	"airs" : {
		"day" : null,
		"time" : null,
		"timezone" : "America/New_York"
	},
	"runtime" : 45,
	"certification" : "TV-14",
	"network" : "FOX (US)",
	"country" : "us",
	"trailer" : null,
	"homepage" : null,
	"status" : "ended",
	"rating" : 8.8902,
	"votes" : 4308,
	"updated_at" : "2015-04-24T10:54:24.000Z",
	"language" : "en",
	"available_translations" : ["en", "hu", "ru", "pt", "es", "bg", "nl", "it", "el", "fr", "he", "de", "ar", "ja", "ro", "uk"],
	"genres" : ["drama", "mystery"],
	"aired_episodes" : 202,
	"images" : {
		"fanart" : {
			"full" : "https://walter.trakt.us/images/shows/000/004/063/fanarts/original/06869cde51.jpg",
			"medium" : "https://walter.trakt.us/images/shows/000/004/063/fanarts/medium/06869cde51.jpg",
			"thumb" : "https://walter.trakt.us/images/shows/000/004/063/fanarts/thumb/06869cde51.jpg"
		},
		"poster" : {
			"full" : "https://walter.trakt.us/images/shows/000/004/063/posters/original/3b35d30773.jpg",
			"medium" : "https://walter.trakt.us/images/shows/000/004/063/posters/medium/3b35d30773.jpg",
			"thumb" : "https://walter.trakt.us/images/shows/000/004/063/posters/thumb/3b35d30773.jpg"
		},
		"logo" : {
			"full" : "https://walter.trakt.us/images/shows/000/004/063/logos/original/5e95ec9973.png"
		},
		"clearart" : {
			"full" : "https://walter.trakt.us/images/shows/000/004/063/cleararts/original/1d07bbfc7e.png"
		},
		"banner" : {
			"full" : "https://walter.trakt.us/images/shows/000/004/063/banners/original/5543213819.jpg"
		},
		"thumb" : {
			"full" : "https://walter.trakt.us/images/shows/000/004/063/thumbs/original/4a1e3bfaa4.jpg"
		}
	}
}, {
	"title" : "Fargo",
	"year" : 2014,
	"ids" : {
		"trakt" : 60203,
		"slug" : "fargo",
		"tvdb" : 269613,
		"imdb" : "tt2802850",
		"tmdb" : 60622,
		"tvrage" : null
	},
	"overview" : "From the Coen brothers is a fresh story spun out of the world of the Oscar-winning film. A drifter named Lorne Malvo arrives in small-town Minnesota and influences the population with his malice and violence, including put-upon insurance salesman Lester Nygaard.",
	"first_aired" : "2014-04-16T02:00:00.000Z",
	"airs" : {
		"day" : "Tuesday",
		"time" : "22:00",
		"timezone" : "America/New_York"
	},
	"runtime" : 60,
	"certification" : "TV-MA",
	"network" : "FX",
	"country" : "us",
	"trailer" : "http://youtube.com/watch?v=gKs8DzjPDMU",
	"homepage" : null,
	"status" : "returning series",
	"rating" : 8.82212,
	"votes" : 4177,
	"updated_at" : "2015-04-29T10:35:22.000Z",
	"language" : "en",
	"available_translations" : ["en", "pl", "fr", "es", "de", "tr", "sv", "da", "it", "pt", "hu", "uk"],
	"genres" : ["drama"],
	"aired_episodes" : 10,
	"images" : {
		"fanart" : {
			"full" : "https://walter.trakt.us/images/shows/000/060/203/fanarts/original/836df8c760.jpg",
			"medium" : "https://walter.trakt.us/images/shows/000/060/203/fanarts/medium/836df8c760.jpg",
			"thumb" : "https://walter.trakt.us/images/shows/000/060/203/fanarts/thumb/836df8c760.jpg"
		},
		"poster" : {
			"full" : "https://walter.trakt.us/images/shows/000/060/203/posters/original/4e68c43f6c.jpg",
			"medium" : "https://walter.trakt.us/images/shows/000/060/203/posters/medium/4e68c43f6c.jpg",
			"thumb" : "https://walter.trakt.us/images/shows/000/060/203/posters/thumb/4e68c43f6c.jpg"
		},
		"logo" : {
			"full" : "https://walter.trakt.us/images/shows/000/060/203/logos/original/20f68f9ee6.png"
		},
		"clearart" : {
			"full" : "https://walter.trakt.us/images/shows/000/060/203/cleararts/original/e715b231ec.png"
		},
		"banner" : {
			"full" : "https://walter.trakt.us/images/shows/000/060/203/banners/original/9e2e585893.jpg"
		},
		"thumb" : {
			"full" : "https://walter.trakt.us/images/shows/000/060/203/thumbs/original/60666b20a8.jpg"
		}
	}
}, {
	"title" : "True Detective",
	"year" : 2014,
	"ids" : {
		"trakt" : 46375,
		"slug" : "true-detective",
		"tvdb" : 270633,
		"imdb" : "tt2356777",
		"tmdb" : 46648,
		"tvrage" : 31369
	},
	"overview" : "True Detective uses multiple timelines to trace two Louisiana State Police Criminal Investigations Division homicide detectives' hunt for a serial killer in Louisiana across seventeen years.",
	"first_aired" : "2014-01-13T02:00:00.000Z",
	"airs" : {
		"day" : "Sunday",
		"time" : "21:00",
		"timezone" : "America/New_York"
	},
	"runtime" : 60,
	"certification" : "TV-MA",
	"network" : "HBO",
	"country" : "us",
	"trailer" : null,
	"homepage" : null,
	"status" : "returning series",
	"rating" : 9.0067,
	"votes" : 8804,
	"updated_at" : "2015-04-30T10:51:10.000Z",
	"language" : "en",
	"available_translations" : ["fr", "en", "bg", "pt", "nl", "pl", "de", "el", "da", "tr", "es", "zh", "cs", "hu", "it", "ru", "sv", "ro"],
	"genres" : ["drama"],
	"aired_episodes" : 8,
	"images" : {
		"fanart" : {
			"full" : "https://walter.trakt.us/images/shows/000/046/375/fanarts/original/477af2f7c2.jpg",
			"medium" : "https://walter.trakt.us/images/shows/000/046/375/fanarts/medium/477af2f7c2.jpg",
			"thumb" : "https://walter.trakt.us/images/shows/000/046/375/fanarts/thumb/477af2f7c2.jpg"
		},
		"poster" : {
			"full" : "https://walter.trakt.us/images/shows/000/046/375/posters/original/6638fc3484.jpg",
			"medium" : "https://walter.trakt.us/images/shows/000/046/375/posters/medium/6638fc3484.jpg",
			"thumb" : "https://walter.trakt.us/images/shows/000/046/375/posters/thumb/6638fc3484.jpg"
		},
		"logo" : {
			"full" : "https://walter.trakt.us/images/shows/000/046/375/logos/original/ef4294f39a.png"
		},
		"clearart" : {
			"full" : "https://walter.trakt.us/images/shows/000/046/375/cleararts/original/5b03f00b28.png"
		},
		"banner" : {
			"full" : "https://walter.trakt.us/images/shows/000/046/375/banners/original/5ece5ac01a.jpg"
		},
		"thumb" : {
			"full" : "https://walter.trakt.us/images/shows/000/046/375/thumbs/original/452a9b5dbe.jpg"
		}
	}
}]; */