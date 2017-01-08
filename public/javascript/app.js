var app = angular.module('chinaCare',[
	'ngRoute'
	])

app.config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('');
}]);

app.config(['$routeProvider',
	function($routeProvider){
	$routeProvider
	.when('/home', {
		templateUrl:'views/home.html',
		controller:'HomeController'
	})	
	.when('/playgroup',{
		templateUrl:'views/playgroup.html',
		controller:'PGController'
	})
	.when('/about',{
		templateUrl:'views/about.html',
		controller:'HomeController'
	})
	.when('/board',{
		templateUrl:'views/board.html',
		controller:'HomeController'
	})
	.when('/contact',{
		templateUrl:'views/contact.html',
		controller:'ContactController'
	})
	.otherwise({
		redirectTo:'/home'
	});
}])

app.controller('HomeController',function($scope,$http){
	console.log('in controller');
	$scope.data = 'hello ChinaCare';
});


app.controller('ContactController',function($scope,$http){
	console.log('in Contact controller');

	$scope.sendEmail = function sendEmail(){
		console.log('in function');
		console.log($scope.emailAddress);

		var email = [
			emailAddress : $scope.emailAddress,
			emailText	: $scope.emailText
				]

		$http.post('/sendEmail',email)
		.then(function successCallback(response){
			console.log('success calling sendEmail');
		},function errorCallback(response){
			console.log('error calling sendEmail');
		})
	}
});

app.controller('PGController',function($scope,$http){
	console.log('in Playgroup controller');
	$scope.data = 'hello ChinaCare';

	$http.get('/getPicList')
		.then(function successCallback(response){
			console.log('getPicList was a success');
			if(!response.data.length>0)
				console.log('picList is empty');
			$scope.picList = response.data;
		}, function errorCallback(response){
			console.log('error calling getPicList');

		})

});
