/**
	
	Process Checklist controller
	
	Manages Process Checklist of the app
	
	Copyright (C) - Infostretch
*/

psrApp.controller('processchecklistController2', ['$scope', function ($scope) {

	$scope.showActionButtons = false;

	$scope.actionButtonClass="checkListStatusBtn btn btn-default";

	$scope.checklistStatus = "No Status";
	$scope.titleClass = "processChecklistTitle";


	$scope.checklistRefArray;

	$scope.showCompleteLabel = true;




	$scope.completedCheckList = {


	};


	/**
	 *
	 * This method will check the status of each sub checklist item.
	 * If any one value is marked red it will take precedence over amber. If any one value is marked amber any no other value
	 * is marked green amber will be higlited if there are no values with red.
	 *
	 * @param array of selected checklist
	 * @returns {class name to be applied on selected checklist}
	 */
	$scope.getTitleBackgroundClass = function (key) {

		var styleClass = "processChecklistTitle";

		if ($scope.checkListArray != undefined) {

			var log = [];
			var keepGoing = true;
			angular.forEach($scope.checkListArray[key], function(value, key) {

				if (keepGoing ) {
					if (value == 'a') {

						styleClass = "processChecklistTitleAmber";
					} else if (value == 'r') {

						styleClass = "processChecklistTitleRed";
						keepGoing = false;
					} else if (value == 'g' && (styleClass!=  "processChecklistTitleAmber" || styleClass!=  "processChecklistTitleAmber")) {


						styleClass = "processChecklistTitleGreen";
					}

				}


			}, log);
		}



		return styleClass;
	}




	// Todo Array needed to be loaded from JSON file/ webservice
	$scope.checkListArray = {


		"Project kick-Off and Initalization": {"Identify Team":"-", "Identify Training Needs":"-", "Setup Confluence project":"-", "Setup SVN setup completed and provide rights":"-", "Prepare Kick-off":"-"
			, "Do the Kick-off Call":"-", "Environment setup (client)":"-", "Environment setup (offshore)":"-"},

		"Project Planning": {"High level Sprint planning":"-", "Approval of High level plan":"-", "QA Strategy / Test Plan/ Test Cycles preparation for manual projects":"-","Approval of test Plan for manual / Automated projects":"-",
		"Risk Management":"-"},

		"Requirement Gathering":{"Create Sprint backlog / SRS":"-", "Review Stories / SRS ":"-", "Prepare Wireframes":"-","Approval of SRS / Wireframe":"-","Analyse the automation requirements by studying AUT / scope of automation in details /  Testing platforms with different versions should be specified (iOS, Android, Web etc.)":"-"},

		"Architecture design": {"Existing framework used?":"-", "Plan Reusable components":"-","Configure Build process ":"-","Create, review and finalize Architecture document ":"-"},

		"Sprint Planning and Execution": {"Sprint # planning meeting conducted and scope finalized?":"-", "Create Sub tasks / technical tasks isolation ":"-", "Sprint Schedule on track?":"-","Conduct Unit testing ":"-","Conduct Code review ":"-","QA sign-off received from QA Lead?":"-",
		"Do Defect review .Is defect re-open count < 5%? > G. If <15%> A. Else R.":"-","Receive Deliverable acceptance  from customer":"-","Identify and implement Value addition":"-",
		"Sprint retrospective meeting held?":"-"},

		"Customer Release": {"Do UAT release  and send release note  as a part of release":"-","Log UAT defects in Jira":"-"},
		"Project Sign-off": {"Billing to client":"-","CSAT":"-","Identify & share Lessons learnt  with the team":"-","Identify & Upload Reusable components on confluence":"-",
		"Quality Audits":"-"},
		"Project Support": {"Analyze support / warranty phase defects ":"-"}

	};

	/**
	 * A utility method
	 *
	 * @param obj
	 * @returns {Array}
	 */
	$scope.keys = function(obj) {

		return obj? Object.keys(obj) : [];

	}


	/**
	 *
	 * Update the data set for completed checklist items
	 *
	 * @param parentIndex
	 * @param index
	 * @param status
	 */

	$scope.checkListItemComplete = function(parentIndex, index, status) {

		if (status == 'complete') {

			delete $scope.checkListArray[parentIndex][index];

			var completedAction = {};

			completedAction[index] = "c";


			var existingCheckList = $scope.completedCheckList[parentIndex];

			if (existingCheckList == undefined) {

				$scope.completedCheckList[parentIndex] = completedAction;

			} else {

				existingCheckList[index] = "c";

				$scope.completedCheckList[parentIndex] = existingCheckList;

			}


			console.log($scope.completedCheckList);
		}




	}

	$scope.setCheckListStatus = function (parentIndex, index, status) {

		$scope.checkListArray[parentIndex][index] = status;

	}


	/**
	 *
	 * Returns class name based on checklist status
	 *
	 * @param status
	 * @returns {string|string|string|string}
	 */
	$scope.getClassValue = function(status) {

		$scope.checklistStatus = "";

		switch (status) {

			case 'g':
				$scope.actionButtonClass = "checkListStatusBtn btn btn-success";

				break;
			case 'a':
				$scope.actionButtonClass = "checkListStatusBtn btn btn-warning";

				break;
			case 'r':
				$scope.actionButtonClass = "checkListStatusBtn btn btn-danger";

				break;
			case 'c':
				$scope.actionButtonClass = "checkListStatusBtn btn btn-default";
				$scope.checklistStatus = "Complete";
				break;
			default :
				$scope.actionButtonClass = "checkListStatusBtn btn btn-default";
				$scope.checklistStatus = "No Status";
				break;

		}

		return $scope.actionButtonClass;

	}

	/**
	 *
	 * Action handler method for show completed and current checklist links
	 *
	 * @param status
	 */

	$scope.showCompletedCheckLists = function (status) {

		if (status == 0) {

			$scope.showCompleteLabel = false;
			$scope.checklistRefArray = $scope.checkListArray;

			$scope.checkListArray = $scope.completedCheckList;

	} else if (status == 1 &&  $scope.showCompleteLabel == false) {

			$scope.showCompleteLabel = true;
			$scope.checkListArray = $scope.checklistRefArray;

			$scope.checklistRefArray = $scope.completedCheckList;


		}



	}

}]);