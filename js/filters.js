'use strict';

angular.module('app.filters', [])
.filter('comicFilter', function() {
	return function(comics, search) {
		if(search == null) return comics;

		var out = [];

		for(var i = 0; i < comics.length; i++) {
			var comic = comics[i];
			if(comic.title.toLowerCase().indexOf(search) > -1 || comic.publisher.toLowerCase().indexOf(search) > -1)
				out.push(comic);
		}

		return out;
	}
});