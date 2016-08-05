angular.module("InternetIsBrokenApp", ["ngRoute", "ngAnimate"])
	.config(["$routeProvider", function($routeProvider) {
		$routeProvider.when("/", {
			templateUrl: "templates/search.html",
			controller: "SearchController",
			controllerAs: "vm"
		})
		.when("/error", {
			templateUrl: "templates/error.html",
			controller: "ErrorController",
			controllerAs: "vm"
		})
		.otherwise({
			redirectTo: "/error"
		});

	}])

	.controller("SearchController", function() {
		var vm = this;

	})

	.controller("ErrorController", function() {
		var vm = this;
		var activities = ["call a friend", "take a walk", "write a thank you letter"];
		$("p").html(activities[(Math.floor(Math.random() * 3))]);
	});