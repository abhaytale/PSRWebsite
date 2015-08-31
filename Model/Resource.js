/**

	Resource model class
	
	Copyright (C) - Infostretch

*/

function Resource () {
	
		this.resourceName;
		this.resourceRole;
		this.resourceBand;
		this.percentageAllocation;
		
		this.description = function () {
			
			return 'ResourceName '+this.resourceName+" ResourceRole "+this.resourceRole+" Resource Band "+this.resourceBand+ " PercentageAllocation "+this.percentageAllocation;
			
		}
}