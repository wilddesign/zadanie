'use strict';

function getDataService($http) {

  return {
    getJson: function (location,callback) {
		var url = 'https://restcountries.eu/rest/v1/region/' + location;
		// get JSON for the location
		$http.get(url).then(function(response){
			callback(response.data);
		});
		
      return;
    }
  };
}


angular.module('counApp')
  .service('getData',['$http',getDataService]);
