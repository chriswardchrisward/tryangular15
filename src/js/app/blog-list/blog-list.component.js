'use strict';

angular.module('blogList').
	component('blogList', {
		templateUrl: '/templates/blog-list.html',
		controller: function($routeParams, $scope){
			console.log($routeParams.id)
			var blogItems = [
				{title: "Title Number 1", id: 1, description: "This is the first description"},
				{title: "Title Number 2", id: 2, description: "This is the seccond description"},
				{title: "Title Number 3", id: 3, description: "This is the third description"},
				{title: "Title Number 4", id: 4, description: "This is the fourth description"},
				{title: "Title Number 5", id: 5, description: "This is the fif description"},
			]

			$scope.items = blogItems;

			console.log("hello")
			$scope.title = 'Hi there'
			$scope.clicks = 0
			$scope.someClickTest = function(){
				console.log("It clicked!")
				$scope.title = 'Clicked' + ' ' + $scope.clicks + ' ' + 'times'
				$scope.clicks += 1
		}
		}
	});
	// // controller('BlogListController', function($scope){
	// // 	console.log("hello")
	// // 	$scope.title = 'Hi there'
	// // 	$scope.clicks = 0
	// // 	$scope.someClickTest = function(){
	// // 		console.log("It clicked!")
	// // 		$scope.title = 'Clicked' + ' ' + $scope.clicks + ' ' + 'times'
	// // 		$scope.clicks += 1
	// // 	}
	// });