'use strict';

function continentController() {
//scoped variables
	this.continent;
	this.selectedFromContinent = [];

	this.toggleAll;
//
// UX functions
//select all countries in a continent
	this.selectAllFromContinent = function(continent){
		var direct = this.toggleAll;
		var selected = this.selectedFromContinent;
		
		angular.forEach(continent,function(country){
			
			//check is a country is already selected
				var isAlreadySelected = selected.indexOf(country);
					
			// select all countries in the continent
				if(direct){
						// if the country is not chosen, choose it
						if(isAlreadySelected === -1){selected.push(country);}
				}
				
			// deselect all countries
				if(!direct){
					// if the country is chosen, unchoose it	
						if(isAlreadySelected !== -1){selected.splice(isAlreadySelected,1);}
				}
			
			
		});
			

	};
// select a country
	this.selectCountry = function(country){
		
		var isAlreadySelected = this.selectedFromContinent.indexOf(country);
		// if the country is not chosen, choose it
			if(isAlreadySelected === -1){this.selectedFromContinent.push(country);}
		// if the country is chosen, unchoose it	
			if(isAlreadySelected !== -1){this.selectedFromContinent.splice(isAlreadySelected,1);}
	};
}

angular.module('counApp')
  .component('continent', {
    templateUrl: 'app/components/continent/continent.html',
    bindings: { continent: '<' },
    controller: continentController
});
