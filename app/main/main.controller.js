'use strict';

(function() {

  class MainController {

    constructor(getData) {
	  this.getData = getData;
      this.serverData = [];
	  
    }

    $onInit() {
		// get data for all continents and put them into an array that reflects the structure of the app. 
		// this will be easy to process

		var locations = ['africa','americas','asia','europe','oceania'];
		
			this.getData.getJson(locations[0],data => {
				 this.serverData[0] = data;
			});	
			
			this.getData.getJson(locations[1],data => {
				 this.serverData[1] = data;
			});			
			
			this.getData.getJson(locations[2],data => {
				 this.serverData[2] = data;
			});		
			
			this.getData.getJson(locations[3],data => {
				 this.serverData[3] = data;
			});	
			
			this.getData.getJson(locations[4],data => {
				 this.serverData[4] = data;
			});				
				
		}
     
	
  }

  angular.module('counApp')
    .component('main', {
      templateUrl: 'app/main/main.html',
      controller: MainController
    });
})();
