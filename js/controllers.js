'use strict';

angular.module('app.controllers', []).
    controller('ComicController', ['$http', function($http){
	var comicCtrl = this;
	comicCtrl.comics = gems;

	/*$http.get('comics.json').success(function(data){
      comicCtrl.comics = data;
    }).
    error(function(data){
    	alert("Couldn't find JSON");
    });*/
}]);

var gems = [{
"image": "http://leagueofcomicgeeks.com//comics/covers/large/2771392-the-amazing-spider-man-8.jpg?1413850416", 
"price": " $3.99", 
"publisher": "Marvel Comics", 
"releaseDate": " Oct 22nd, 2014 ", 
"thumbnail": "http://leagueofcomicgeeks.com//comics/covers/medium/2771392-the-amazing-spider-man-8.jpg?1413850416", 
"title": "The Amazing Spider-Man #8"
},{
"image": "http://leagueofcomicgeeks.com//comics/covers/large/1502775-batman-eternal-29.jpg?1413819069", 
"price": " $2.99", 
"publisher": "DC Comics", 
"releaseDate": " Oct 22nd, 2014 ", 
"thumbnail": "http://leagueofcomicgeeks.com//comics/covers/medium/1502775-batman-eternal-29.jpg?1413819069", 
"title": "Batman Eternal #29"
},{
"image": "http://leagueofcomicgeeks.com//comics/covers/large/9654954-avengers-37.jpg?1413850416", 
"price": " $3.99", 
"publisher": "Marvel Comics", 
"releaseDate": " Oct 22nd, 2014 ", 
"thumbnail": "http://leagueofcomicgeeks.com//comics/covers/medium/9654954-avengers-37.jpg?1413850416", 
"title": "Avengers #37"
},{
"image": "http://leagueofcomicgeeks.com//comics/covers/large/9928993-the-walking-dead-133.jpg?1413933741", 
"price": " $2.99", 
"publisher": "Image Comics", 
"releaseDate": " Oct 22nd, 2014 ", 
"thumbnail": "http://leagueofcomicgeeks.com//comics/covers/medium/9928993-the-walking-dead-133.jpg?1413933741", 
"title": "The Walking Dead #133"
},{
"image": "http://leagueofcomicgeeks.com//comics/covers/large/2489507-the-wicked-the-divine-5.jpg?1413929362", 
"price": " $3.50", 
"publisher": "Image Comics", 
"releaseDate": " Oct 22nd, 2014 ", 
"thumbnail": "http://leagueofcomicgeeks.com//comics/covers/medium/2489507-the-wicked-the-divine-5.jpg?1413929362", 
"title": "The Wicked + The Divine #5"
}];