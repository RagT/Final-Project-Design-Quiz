angular.module('designApp', ['ngRoute'])

.config(function($routeProvider){
	$routeProvider
	.when('/1/', {
		templateUrl: 'templates/part1.html',
		controller: 'page1Ctrl',

	})
	.when('/2/', {
		templateUrl: 'templates/part2.html',
		controller: 'page2Ctrl',
	})
	.when('/3/', {
		templateUrl: 'templates/part3.html',
		controller: 'page3Ctrl',
	})
	.when('/4/', {
		templateUrl: 'templates/part4.html',
		controller: 'page4Ctrl',
	})
	.when('/5/', {
		templateUrl: 'templates/part5.html',
		controller: 'page5Ctrl',
	})
})

.factory("answers",function(){
        return {};
})

.controller( "page1Ctrl",function($scope, answers){
    $scope.quizData = answers;
})

.controller( "page2Ctrl",function($scope, answers){
    $scope.quizData = answers;
})

.controller( "page3Ctrl",function($scope, answers){
    $scope.quizData = answers;
})

.controller( "page4Ctrl",function($scope, answers){
    $scope.quizData = answers;
})

.controller( "page5Ctrl",function($scope, answers){
    $scope.quizData = answers;
   
})
