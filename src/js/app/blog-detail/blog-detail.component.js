'use strict';

angular.module('blogDetail').
	component('blogDetail', {
		templateUrl: '/templates/blog-detail.html',
		controller: function($routeParams, $scope){
			var blogItems = [
				{title: "Title Number 1", id: 1, description: "This is the first description"},
				{title: "Title Number 2", id: 2, description: "This is the seccond description"},
				{title: "Title Number 3", id: 3, description: "This is the third description"},
				{title: "Title Number 4", id: 4, description: "This is the fourth description"},
				{title: "Title Number 5", id: 5, description: "This is the fif description"},
			]
			
			// console.log($routeParams.id)
			$scope.title = "Blog " + $routeParams.id

	}
});