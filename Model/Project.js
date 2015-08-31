/**

	Project model class
	
	Copyright (C) - Infostretch

*/


function Project () {
	
	this.businessUnit;
	this.projectName;
	this.projectType;
	this.customer;
	this.health;
	this.projectStartDate;
	this.sowRevenue;
	this.planMargin;
	this.sowEstimateEffort;
	this.projectEndDate;
	this.budgettedCost;
	this.actualMargin;
	this.psrEstimatedEffort;
	this.projectedEndDate;
	this.actualCost;
	this.effortVariance;
	this.actualEffortToDate;
	this.PMBandwidth;
	this.costOfUnbilledResource;
	this.actualProgress;
	this.additionalEffortsRequired;
	this.projectManger;
	this.clientPM;
	this.accountManger;
	this.deliveryManager;
	this.resourceStatus;
	this.scheduleStatus;
	
	this.description = function () {
			
			return  "businessUnit "+this.businessUnit+
			" projectName "+this.projectName+
			" projectType "+this.projectType+ 
			" customer "+this.customer+
			" health "+this.health+
			" projectStartDate "+this.projectStartDate+
			" sowRevenue "+this.sowRevenue+
			" sowEstimateEffort "+this.sowEstimateEffort+
			" projectEndDate "+this.projectEndDate+
			" budgettedCost "+this.budgettedCost+
			" actualMargin "+this.actualMargin+
			" psrEstimatedEffort "+this.psrEstimatedEffort+
			" projectedEndDate "+this.projectedEndDate+
			" actualCost "+this.actualCost+
			" effortVariance "+this.effortVariance+
			" actualEffortToDate "+this.actualEffortToDate+
			" PMBandwidth "+this.PMBandwidth+
			" clientPM "+this.clientPM+
			" accountManger "+this.accountManger+
			" deliveryManager "+this.deliveryManager+
			" resourceStatus "+this.resourceStatus+
			" scheduleStatus "+this.scheduleStatus;
			
		}

}