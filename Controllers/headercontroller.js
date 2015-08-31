/**
	
	Header controller
	
	Manages projects loading, nav bar.
	
	Copyright (C) - Infostretch
*/
psrApp.controller('HeaderController', ['$scope','$location','networkService','$rootScope',  function($scope, $location, networkService, $rootScope) {

	$scope.projects = [];
	$scope.currentProjectName;
	
	/**
		Loads projects from JSON file(will be replaced by webservice call to getProjects service)
	*/
	networkService.getJSON('JSONFiles/projects.json', function success(data) {
			
			$scope.projects =  data.projects;
			
			// Select first project as default project.
			$scope.currentProjectName = $scope.projects[0];
			$rootScope.currentProjectIndex = 0;

			$rootScope.currentProjectName = $scope.currentProjectName;
		
		}, function failure(data){
			
			console.log("failure "+data);
		
			$scope.projects = [];
		});
	
	/**
		Convinent method to highlight selected navbar menus
	*/
	$scope.isActive = function (viewLocation) { 
		
        return viewLocation === $location.path();
    };
	
	/**
		Method to select the project 
	*/
	$scope.selectProject = function (project) {
		
		$scope.currentProjectName = project;
		$rootScope.currentProjectName = $scope.currentProjectName;
		
		// Itereate and check get the selected project.
		var searchTerm = project,
			index = -1;
			for(var i = 0, len = $scope.projects.length; i < len; i++) {
					if ($scope.projects[i] === searchTerm) {
							index = i;
							break;
    			}
			}
		
		$rootScope.currentProjectIndex = index;						 
	};
	
	
	/**
		Logout the user and show login screen
	*/
	$scope.logout = function() {
		
		console.log("user logged out ");
		
		 $rootScope.loggedIn = false;
		 $location.path( "/" );
		
	};
	
	
	
	
    
}]);
