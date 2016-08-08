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
		.when("/info", {
			templateUrl: "templates/info.html",
			controller: "InfoController",
			contorllerAs: "vm"
		})
		.otherwise({
			redirectTo: "/error"
		});

	}])

	.controller("SearchController", function() {
		var vm = this;
		vm.startDictation = function () {
	 
	    if (window.hasOwnProperty('webkitSpeechRecognition')) {
	 
	      var recognition = new webkitSpeechRecognition();
	 
	      recognition.continuous = false;
	      recognition.interimResults = false;
	 
	      recognition.lang = "en-US";
	      recognition.start();
	 
	      recognition.onresult = function(e) {
	        document.getElementById('transcript').value = e.results[0][0].transcript;
	        recognition.stop();
	        document.getElementById('labnol').submit();
	      };
	 
	      recognition.onerror = function(e) {
	        recognition.stop();
	      };
	 
    }
  };

	})

	.controller("ErrorController", function() {
		var vm = this;

		var transcriptValue = $("#labnol").val();

		$("#searchTerm").html(transcriptValue);

		var activities = [
			"call a friend",
			"take a walk",
			"write a thank you letter",
			"call mom or dad",
			"go to bed early",
			"visit a museum",
			"read a book",
			"write in a journal",
			"draw a picture",
			"paint a picture",
			"start that novel you've been meaning to write",
			"learn a new recipe",
			"make your bed",
			"organize your closet",
			"go to the gym",
			"meditate",
			"practice yoga",
			"volunteer at an animal shelter",
			"say hello to your neighbors",
			"visit a farmer's market",
			"work in your garden",
			"takes a Pilates class",
			"learn how to skateboard",
			"ride a bike",
			"try archery",
			"learn judo",
			"get a manicure or pedicure",
			"take a trapeze class",
			"lie in the grass and do some cloud-watching",
			"go to a flea market",
			"learn some phrases of a foreign language",
			"play a board game",
			"start an arts & crafts project",
			"play the piano",
			"learn a new instrument",
			"sing a song",
			"take a nap",
			"walk your dog",
			"go bird watching",
			"bake cookies"
			];
	
		$("#array").html(activities[(Math.floor(Math.random() * activities.length))]);


	});