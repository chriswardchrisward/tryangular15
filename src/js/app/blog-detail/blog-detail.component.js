'use strict';

angular.module('blogDetail').
	component('blogDetail', {
		templateUrl: '/templates/blog-detail.html',
		controller: function(Post ,$http, $location, $routeParams, $scope){
			Post.query(function(data){
				$scope.notFound = true
				angular.forEach(data, function(post){
					if (post.id == $routeParams.id){
						$scope.notFound = false
						$scope.post = post
						resetReply()
					}
				})
			})

			$scope.addReply = function(){
				console.log($scope.reply)
				$scope.post.comments.push($scope.reply)

				resetReply()
			}

			function resetReply(){
				$scope.reply = {
					"id": $scope.post.comments.length + 1,
					"test": "",
				}
			}

			if ($scope.notFound) {
				console.log("Not Found")
				//change locaiton
				$location.path("/404")
			}

	}
});