/**
	
	Project status report controller
	
	Copyright (C) - Infostretch
*/
psrApp.controller('psrController', ['$scope','$rootScope',  function($scope, $rootScope) {
    

	$scope.project = new Project();
	
	
	$scope.project.projectName = "BMW DDA";

	$scope.projectRiskData = [['Risk Description', 'priority', 'Mitigation Action', 'Owner',  'Status'],
		[]];
	$scope.projectIssueData = [['Issue Description',  'Priority', 'Work Around/Resolution', 'Owner',  'Status'],
		[]];
	$scope.projectRCAData = [['Root Cause',  'Health', 'Mitigation', 'Owner', 'Status'],
		[]];

	$scope.currentProjectStatus = "Amber";

	$scope.handsontableContainer = document.getElementById('psrHandsonTable');
	$scope.processChecklistTableContainer = document.getElementById('processCheckListTable');


	$scope.processCheckListData = [["Date", "Status", "Action"],
									["9/11","Issues with project planning","PM is looking into the issue"],
									["9/4","",""],
									["8/30","",""],
									["8/22","",""],
									["8/17","",""],
									["7/11","",""],
									["7/1","",""],];


	loadProjectStatusData($scope.projectRiskData, $scope.handsontableContainer);

	loadProjectStatusData($scope.processCheckListData, $scope.processChecklistTableContainer);


	// Initally risk is by default selected
	$scope.styleRisk = "grey";
	$scope.styleIssue = "white";
	$scope.styleRCA = "white";

	$scope.styleFirstChecklist;
	$scope.styleSecondChecklist;
	$scope.styleThirdChecklist;
	$scope.styleFourthChecklist;
	$scope.styleFifthChecklist;
	$scope.styleSixthChecklist;
	$scope.styleSeventhChecklist;
	$scope.styleEighthChecklist;
	$scope.styleNinethChecklist

	
	
	$scope.saveProjectScope = function () {

		console.log($scope.project.description());
		
	}


	/**
	 *
	 * Update table tile background color based on selection
	 *
	 */
	$scope.showRisks = function () {

		loadProjectStatusData($scope.projectRiskData, $scope.handsontableContainer);

		$scope.styleRisk = "grey";
		$scope.styleIssue = "white";
		$scope.styleRCA = "white";
	}

	$scope.showIssues = function () {

		console.log("show Issues");
		loadProjectStatusData($scope.projectIssueData, $scope.handsontableContainer);
		$scope.styleRisk = "white";
		$scope.styleIssue = "grey";
		$scope.styleRCA = "white";
	}

	$scope.showRCA = function () {
	loadProjectStatusData($scope.projectRCAData, $scope.handsontableContainer);
		$scope.styleRisk = "white";
		$scope.styleIssue = "white";
		$scope.styleRCA = "grey";

	}


	$scope.selectProjectCheckList = function (checklistType) {


		console.log(checklistType);

		$scope.styleFirstChecklist = "unSelectedChecklistStyle";
		$scope.styleSecondChecklist = "unSelectedChecklistStyle";
		$scope.styleThirdChecklist = "unSelectedChecklistStyle";
		$scope.styleFourthChecklist = "unSelectedChecklistStyle";
		$scope.styleFifthChecklist = "unSelectedChecklistStyle";
		$scope.styleSixthChecklist = "unSelectedChecklistStyle";
		$scope.styleSeventhChecklist = "unSelectedChecklistStyle";
		$scope.styleEighthChecklist = "unSelectedChecklistStyle";
		$scope.styleNinethChecklist = "unSelectedChecklistStyle";

		switch ( checklistType )
		{

			case 0:
				$scope.styleFirstChecklist = "selectedCheckListStyle";
				break;
			case 1:
				$scope.styleSecondChecklist = "selectedCheckListStyle";
				break;
			case 2:
				$scope.styleThirdChecklist = "selectedCheckListStyle";
				break;
			case 3:
				$scope.styleFourthChecklist = "selectedCheckListStyle";
				break;
			case 4:
				$scope.styleFifthChecklist = "selectedCheckListStyle";
				break;
			case 5:
				$scope.styleSixthChecklist = "selectedCheckListStyle";
				break;
			case 6:
				$scope.styleSeventhChecklist = "selectedCheckListStyle";
				break;
			case 7:
				$scope.styleEighthChecklist = "selectedCheckListStyle";
				break;
			case 8:
				$scope.styleNinethChecklist = "selectedCheckListStyle";
				break;

		}







	}



	/**
	 *
	 * Load handson table with risk, Issues or RCA data
	 *
	 * @param projectData
	 */
	function loadProjectStatusData (projectData, table) {

		//var handsontableContainer = document.getElementById('psrHandsonTable');

		table.innerHTML = "";



	// Register cell renterers
		Handsontable.renderers.registerRenderer('subTitleValueRenderer', subTitleValueRenderer);
		Handsontable.renderers.registerRenderer('titleValueRenderer', titleValueRenderer);
		Handsontable.renderers.registerRenderer('centerValueRenderer', centerValueRenderer);


				// Bind data set with view
				$scope.projectStatusTable = new Handsontable(table, {

					data:projectData,
					rowHeaders: false,
					colHeaders: false,
					stretchH: 'all',
					cells: function (row, col, prop)
					{
						var cellProperties = {};

						if (row == 0) {

							cellProperties.renderer = "titleValueRenderer";
						} else if (col == 0) {

							cellProperties.renderer = "centerValueRenderer";
						} else {

							cellProperties.renderer = "subTitleValueRenderer";

						}

						return cellProperties;
					}

				});


	}

    
}]);
