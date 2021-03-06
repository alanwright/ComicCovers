'use strict';

angular.module('app.directives', [])
.directive('repeatDirective', function() {
  return function(scope, element, attrs) {
  	//Notify when the last comic is loaded
    if (scope.$last){
      scope.$emit('LastElemLoaded');
    }
  };
})
.directive('initialLoadDirective', function() {
  return function(scope, element, attrs) {
  	//When the last comic is loaded, start setting the visible comics
    scope.$on('LastElemLoaded', function(event){
    	//used to animate here
    });
  };
});