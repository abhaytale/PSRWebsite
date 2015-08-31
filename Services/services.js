/**
	
	Services class
	
	Copyright (C) - Infostretch
*/


/**

	Auhtentication service
	
	TO-DO: As of now user name & password is hardcoded to 'admin'.
	Once webservice is available this code needs to be changed to hit login service and authenticate user.
*/
psrApp.service('authentication', ["$resource", function($resource) {
	
	 this.authenticateUser = function (userName, password) {
    
		 // TO-DO need to add authentication code here 
	 if (userName === "admin" && password === "admin")	{ 
	 
     		return true;
	 }
		return false;	 
	};
	
}]);


/**
	
	Network service
	
	All network communication will be routed through this class.
	
	As of now only getJSON is implemented. 
	
	TO-DO: POST, PUT etc methods needs to be implemented when webserices are available.

*/
psrApp.service('networkService', ["$http", function($http) { 

	this.getJSON = function (filePath, success, failure) {
		
	 $http.get(filePath).
  			success(function(data, status, headers, config) {
		 
		 			success(data);
  				}).
  				error(function(data, status, headers, config) {

		 			failure(data);
  				});
	}
}]);



