// ROUTES 

/**
	Routes are enabled for 
	Login
	PSR
	Dashboard
	Process Checklist &
	Resources schedule controllers
	
	Copyright (C) - Infostretch
*/

psrApp.config(function ($routeProvider) {
   	
	$routeProvider
	.when('/', {
		templateUrl: 'Templates/login.html',
		controller: 'loginController'
	})
	.when('/psr', {
		resolve: {
			"check": function($location, $rootScope) {
				
				checkLoggedInStatus($location, $rootScope);
			}
		},
		templateUrl: 'Templates/psr.html',
		controller: 'psrController'
	})
	.when('/dashboard', {
		resolve: {
			"check": function($location, $rootScope) {
				checkLoggedInStatus($location, $rootScope);
			}
		},
		templateUrl: 'Templates/dashboard.html',
		controller: 'dashboardController'
	})
	.when('/processchecklist', {
		resolve: {
			"check": function($location, $rootScope) {
				checkLoggedInStatus($location, $rootScope);
			}
		},
		templateUrl: 'Templates/processchecklist.html',
		controller: 'processchecklistController2'
	})
	.when('/resource&schedule', {
		resolve: {
			"check": function($location, $rootScope) {
				checkLoggedInStatus($location, $rootScope);
			}
		},
		templateUrl: 'Templates/resource&schedule.html',
		controller: 'resource&scheduleController'
	})
	//.when('/projectstatus', {
	//	resolve: {
	//		"check": function($location, $rootScope) {
	//			checkLoggedInStatus($location, $rootScope);
	//		}
	//	},
	//	templateUrl: 'Templates/projectstatus.html',
	//	controller: 'projectstatuscontroller'
	//})
	//.when('/RIR', {
	//	resolve: {
	//		"check": function($location, $rootScope) {
	//			checkLoggedInStatus($location, $rootScope);
	//		}
	//	},
	//	templateUrl: 'Templates/rir.html',
	//	controller: 'RIRcontroller'
	//})
});

/**
	
	This function checks if user is logged in to allow or block secure routes.
	
*/
function checkLoggedInStatus (location, rootScope) {
	
		if (!rootScope.loggedIn) {
			location.path('/');
		}
}