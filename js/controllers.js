'use strict';
var myApp = angular.module('app.controllers', ['infinite-scroll']);

myApp.controller('ComicController', function($scope, ComicFactory) {
  $scope.comicFactory = new ComicFactory();
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
            var len = Math.min(this.after + 10, data.length);
            for(var i = this.after; i < len; i++) {
                this.items.push(data[i]);
            }
            this.after = len;
            this.busy = false;
        }.bind(this)).
        error(function(data){
            alert("Couldn't find JSON");
        });
  };

  return ComicFactory;
});