'use strict';

angular.module('blogDetail').
	component('blogDetail', {
		templateUrl: '/templates/blog-detail.html',
		controller: function($location, $routeParams, $scope){
			var blogItems = [
				{title: "Title Number 1", id: 1, description: "This is the first description", publishDate: "2016 09 14"},
				{title: "Title Number 2", id: 2, description: "This is the seccond description"},
				{title: "Title Number 3", id: 3, description: "This is the third description"},
				{title: "Title Number 4", id: 4, description: "This is the fourth description"},
				{title: "Title Number 5", id: 5, description: "This is the fif description"},
			]
			
			// console.log($routeParams.id)
			$scope.title = "Blog " + $routeParams.id
			$scope.notFound = true
			angular.forEach(blogItems, function(post){
				if (post.id == $routeParams.id){
					$scope.notFound = false
					$scope.post = post
				}
			})

			if ($scope.notFound) {
				console.log("Not Found")
				//change locaiton
				$location.path("/404")
			}

	}
});