'use strict';

angular.module('blogList').
	component('blogList', {
		template: "<div class=''><h1 class='new-class'>{{ title }}</h1><button ng-click='someClickTest()'>Click me!</button></div>",
		controller: function($scope){
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