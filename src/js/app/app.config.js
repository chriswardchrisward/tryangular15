'use strict';

angular.module('tryang').
	config(
		function(
			$locationProvider,
			$resourceProvider,
			$routeProvider
			){

			$locationProvider.html5Mode({
				enabled:true
			})

			$resourceProvider.defaults.stripTrailingSlashes = true;


			$routeProvider.
				when("/", {
					template: "<blog-list></blog-list>"
				}).
				when("/about/", {
					templateUrl: "/templates/about.html"
				}).
				when("/blog", {
					template: "<blog-list></blog-list>"
					// redirectTo: '/'
				}).
				when("/blog/:id/", {
					template: "<blog-detail></blog-detail>"
				}).
				otherwise({
					template: "Not Found"
				})

	});