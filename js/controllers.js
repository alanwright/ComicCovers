'use strict';

var myApp = angular.module('app.controllers', ['infinite-scroll']);

myApp.controller('ComicController', function($scope, ComicFactory) {
  $scope.comicFactory = new ComicFactory();
  $scope.comicFactory.nextPage();
});

// Factory to pull more json
myApp.factory('ComicFactory', function($http) {
  var ComicFactory = function() {
    this.items = [];
    this.busy = false;
    this.after = 0;
  };

  ComicFactory.prototype.nextPage = function() {
    if(this.busy) return;
    this.busy = true;

    var url = '/comics.json';
    $http.get(url).success(function(data){
    	var count = 0, i = this.after;
        for(i = this.after; i < data.length && count < 10; i++) {
        	if(data[i].hasImage) {
            	this.items.push(data[i]);
            	++count;
            }
        }
        this.after = i;
        this.busy = false;
    }.bind(this)).
    error(function(data){
        alert("Couldn't find JSON");
    });
  };

  return ComicFactory;
});