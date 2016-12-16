'use strict';


angular.module("tryangNav").
  directive('tryangNav', function(Post, $location){
    return {    
        restrict: "E",
        templateUrl: "/templates/tryang-nav.html",
        link: function (scope, element, attr) {
        	scope.items = Post.query()
        	scope.selectItem = function($item, $model, $label){
        		$location.path("/blog/" + $item.id)
        		scope.searchQuery = ""
        	}
        	scope.searchItem = function(){
        		$location.path("/blog/").search("q", scope.searchQuery)
        		scope.searchQuery = ""
        	}
        }
    }
});