'use strict';

angular.module('blogDetail').
	component('blogDetail', {
		templateUrl: '/templates/blog-detail.html',
		controller: function($http, $location, $routeParams, $scope){

			$http.get("/json/posts.json").then(successCallback, errorCallback);

			function successCallback(response, status, config, statusText){
				$scope.notFound = true
				var blogItems = response.data
				$scope.posts = blogItems
				angular.forEach(blogItems, function(post){
					if (post.id == $routeParams.id){
						$scope.notFound = false
						$scope.post = post
					}
				})

			}

			function errorCallback(response, status, config, statusText){
				$scope.notFound = true
				console.log(response)
			}
			if ($scope.notFound) {
				console.log("Not Found")
				//change locaiton
				$location.path("/404")
			}

			// var blogItems = [
			// 	{title: "Title Number 1", id: 1, description: "This is the first description", publishDate: "2016 09 14"},
			// 	{title: "Title Number 2", id: 2, description: "This is the seccond description"},
			// 	{title: "Title Number 3", id: 3, description: "This is the third description"},
			// 	{title: "Title Number 4", id: 4, description: "This is the fourth description"},
			// 	{title: "Title Number 5", id: 5, description: "This is the fif description"},
			// ]
			
			// // console.log($routeParams.id)
			// $scope.title = "Blog " + $routeParams.id
			// $scope.notFound = true
			// angular.forEach(blogItems, function(post){
			// 	if (post.id == $routeParams.id){
			// 		$scope.notFound = false
			// 		$scope.post = post
			// 	}
			// })

	}
});