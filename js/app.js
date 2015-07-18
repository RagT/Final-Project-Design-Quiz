angular.module('designApp', ['ngRoute'])

.config(function($routeProvider){
	$routeProvider
	.when('/1/', {
		templateUrl: 'templates/part1.html',
		controller: 'quizCtrl',

	})
	.when('/2/', {
		templateUrl: 'templates/part2.html',
		controller: 'quizCtrl',
	})
	.when('/3/', {
		templateUrl: 'templates/part3.html',
		controller: 'quizCtrl',
	})
	.when('/4/', {
		templateUrl: 'templates/part4.html',
		controller: 'quizCtrl',
	})
	.when('/5/', {
		templateUrl: 'templates/part5.html',
		controller: 'quizCtrl',
	})
})

.controller('quizCtrl', function($scope){

})