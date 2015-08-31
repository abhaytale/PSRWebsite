/**
	
	Dashboard controller
	
	Manages dashboard of the app
	
	Copyright (C) - Infostretch
*/

psrApp.controller('dashboardController', ['$scope','networkService','$rootScope', function ($scope, networkService,$rootScope) {

		
	$scope.projectDashboardData = [];
	$scope.dashboardTable;				 
	
	/**
		Watch for project changes. Once the project is changed dashboard data is loaded for the project
	*/
	$rootScope.$watch('currentProjectIndex', function() {
		
		/**
		Loads projects from JSON file (will be replaced by webservice call to dashboard service)
		*/
		networkService.getJSON('JSONFiles/dashboard'+ $rootScope.currentProjectIndex +'.json', function success(data) {
		
		$scope.projectDashboardData = formatDataForDashboard(data);
		
		if($scope.dashboardTable === undefined) {
			
			loadDashboardDataInTable();
			
		} else {
			// Reload table data
			$scope.dashboardTable.loadData($scope.projectDashboardData);
		}
			
		
	
		}, function failure(data){
			
			console.log("failure "+data);
	
		});
   });
	
	
	
	/**
	
		Formats JSON fetchd data in Handson table required format
		
	*/
	function formatDataForDashboard(data) {
		
		var dataForTable = [];
		
		dashboardChecklist.forEach(function(check) {
    		dataForTable.push([check]);
		});
		
		for(var i=0; i<data.dashboard.length; i++) {		
				
				dataForTable[0].push(data.dashboard[i].TypeOrDate);
				dataForTable[1].push(data.dashboard[i].ProjectKickoffandInitialization);
				dataForTable[2].push(data.dashboard[i].ProjectPlanning);
				dataForTable[3].push(data.dashboard[i].RequirementGathering);
				dataForTable[4].push(data.dashboard[i].Architecturedesign);
				dataForTable[5].push(data.dashboard[i].SprintPlanningandExecution);
				dataForTable[6].push(data.dashboard[i].Quality);
				dataForTable[7].push(data.dashboard[i].Resourcing);
				dataForTable[8].push(data.dashboard[i].Efficiency);
				dataForTable[9].push(data.dashboard[i].StatusReviewandRegularMonitoring);
				dataForTable[10].push(data.dashboard[i].CustomerRelease);
				dataForTable[11].push(data.dashboard[i].ProjectSignoff);
				dataForTable[12].push(data.dashboard[i].ProjectSupport);
			
			}
		return dataForTable;

	}
	
	/**
		
		Fetches the container, creates and renders Handsontable
		
	*/
	
	function loadDashboardDataInTable () {
		
	// Fetch the container div
	var container = document.getElementById('dashboardTable');
	

	// Register cell renterers 
	Handsontable.renderers.registerRenderer('contentValueRenderer', contentValueRenderer);
	Handsontable.renderers.registerRenderer('firstRowRenderer', firstRowRenderer);
		
			// Bind data set with view
	$scope.dashboardTable = new Handsontable(container, {
    data:$scope.projectDashboardData,
    rowHeaders: false,
    colHeaders: false,
	height: '330',
	fixedColumnsLeft: 1,
	contextMenu: ['commentsAddEdit', 'commentsRemove'],
    comments: true,
	afterSetCellMeta : function (row, col, key, value) {
			console.log("comments added or updated row, col, key, value " + row + " " + col + " " + key + " " + value);
	},
	afterChange : function (changes, source) {
			
//			console.log("changes to cell value " + changes + " " + source);
	},
	cells: function (row, col, prop) 
		{
			var cellProperties = {};
			
			// Header renderer
			if (row === 0 || col == 0 || col == 1 || col == 2){
			
				cellProperties.renderer = "firstRowRenderer"; 
										  
			}
			else {
			
				cellProperties.renderer = "contentValueRenderer"; 
				
			}
			// All cell needs to be readonly
			cellProperties.readOnly = false;
			
			return cellProperties;
		}
  });
	
	}
	
	$scope.saveData = function () {
		
		console.log("Save data "+ $scope.dashboardTable);
	}
	
	
}] );
