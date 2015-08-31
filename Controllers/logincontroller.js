/**
	
	Login controller
	
	Handles login, authentication & validation.
	
	Copyright (C) - Infostretch

*/
psrApp.controller('loginController', ['$scope', 'authentication', '$location','$rootScope',  function($scope, authentication, $location, $rootScope) {
    
$scope.userName = 'admin';
$scope.password = 'admin';
$scope.userNameAlert;
$scope.passwordAlert;
$scope.navBar;

	
	
	
/**
	Performs login by calling authentication service.
*/
$scope.login = function() {
	
	if ($scope.validate()) {
		
		var authenticationStatus = authentication.authenticateUser($scope.userName, $scope.password);
		
		if (authenticationStatus === true) {
			
			 $rootScope.loggedIn = true;
			 $location.path( "/dashboard" );
		} 
		
	} else {
		
		console.log("Error in validating user");
		
	}
}	

/**
	Performs validation against blank or undifined values.
	
	TO-DO: Once webserivce and login rules are defined this method needs to be modified accordingly.
*/
$scope.validate = function() {
	
	var validationStatus = true;
	$scope.userNameAlert = false;
	$scope.passwordAlert = false;
	
	if ($scope.userName === undefined || $scope.userName === '') {
		
		$scope.userNameAlert = true;
		
		validationStatus = false;
		
	} 
	if ($scope.password === undefined || $scope.password === '') {
		
		$scope.passwordAlert = true;
		
		validationStatus = false;
		
	}

	return validationStatus;

}


    
}]);