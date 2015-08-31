/**
		Content renderer for status cells 
		
	*/
	function contentValueRenderer(instance, td, row, col, prop, value, cellProperties) {
    	Handsontable.renderers.TextRenderer.apply(this, arguments);
  
		td.className = 'htCenter';
		
    	if (value === 'G' || value === 'g') { 
			
			td.style.background = '#008000'; // G means project status is green
    	} else if (value === 'R' || value === 'r') {
			
			td.style.background = '#FF0000'; // R means project status is red
		} else if (value === 'A' || value === 'a') {
			
			td.style.background = '#FF8000'; // A means project status is amber
		} else {
		
			td.style.background = '#FFFFFF'; // If there is no status default to white
		}
	
		
    }

	function titleValueRenderer(instance, td, row, col, prop, value, cellProperties) {
		
		Handsontable.renderers.TextRenderer.apply(this, arguments);
		
		td.style.background = '#B0E2FF';
		td.className = 'htCenter';
		
	}
		
	function subTitleValueRenderer(instance, td, row, col, prop, value, cellProperties) {
		
		Handsontable.renderers.TextRenderer.apply(this, arguments);
		
		td.style.background = '#FFF';
		td.className = 'htLeft';
		
		
	}

	function centerValueRenderer(instance, td, row, col, prop, value, cellProperties) {

	Handsontable.renderers.TextRenderer.apply(this, arguments);

	td.style.background = '#FFF';
	td.className = 'htCenter';


	}

/**
		First row and first 3 columns renderer
	*/
	 function firstRowRenderer(instance, td, row, col, prop, value, cellProperties) {
    	Handsontable.renderers.TextRenderer.apply(this, arguments);
    	td.style.fontWeight = 'bold';
    	td.style.background = '#FFF';
  	}