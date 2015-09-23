angular.module('Space', ['ngRoute'])
	.config(function($routeProvider, $locationProvider) {
		$routeProvider
			.when('/', {
				templateUrl: '/js/views/welcome.html'
			})
			.when('/spaces', {
				templateUrl: '/js/views/spaces.html',
				controllerAs: 'MainCtrl as main'
			}); 

		$locationProvider.html5Mode(true);
	});
