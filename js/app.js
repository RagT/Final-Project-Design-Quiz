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
	.when('/boho/', {
		templateUrl: 'templates/Results/boho.html',
	})
	.when('/modern/', {
		templateUrl: 'templates/Results/modern.html',
	})
	.when('/cottage/', {
		templateUrl: 'templates/Results/cottage.html',
	})
	.when('/industrial/', {
		templateUrl: 'templates/Results/industrial.html',
	})
	.when('/traditional/', {
		templateUrl: 'templates/Results/traditional.html',
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
    
    $scope.countResults = function(){
    	$scope.boho = 0;
    	$scope.modern = 0;
    	$scope.traditional = 0;
    	$scope.industrial = 0;
    	$scope.cottage = 0;

    	for(var key in $scope.quizData){
    		if($scope.quizData[key] == "boho"){
    			$scope.boho++;
    		} else if($scope.quizData[key] == "industrial"){
    			$scope.industrial++;
    		} else if($scope.quizData[key] == "traditional"){
    			$scope.traditional++;
    		} else if($scope.quizData[key] == "modern"){
    			$scope.modern++;
    		} else if($scope.quizData[key] == "cottage"){
    			$scope.cottage++;
    		}
    	}
    }

  
    $scope.getMax = function(){
    	var max = Math.max($scope.boho, $scope.modern, 
    		$scope.traditional, $scope.industrial, $scope.cottage);
    	if($scope.boho == max){
    		return "boho";
    	} else if($scope.modern == max){
    		return "modern";
    	} else if($scope.traditional == max){
    		return "traditional";
    	} else if($scope.cottage == max){
    		return "cottage";
    	} else {
    		return "industrial";
    	}
    }
})

