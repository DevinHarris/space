angular.module('Space')
	.factory('getPlaces', ['$http', '$q', function($http, $q) {
		var placesFactory = {};

		placesFactory.getPlaces = function() {


			if (navigator.geolocation) {
				var geoLoc = navigator.geolocation, 
					geoOptions = {
						enableHighAccuracy: true
					};

				function geoError()	 {
					alert('Opps. Looks like you have your location turned off. Space uses your location to find places near you.');
				}

				return $q(function(resolve){
					geoLoc.getCurrentPosition(function(position, geoOptions, geoError) {
					var lat = position.coords.latitude,
						lng = position.coords.longitude;

				 	resolve(getFSinfo(lat, lng));
				});
			});

			} else {
				alert('Opps. Looks like you have your location turned off. Space uses your location to find places near you.');
			}

		function getFSinfo (lat, lng) {
				var clientID = 'J2HCJIGLTSFFJMKMLAEBT30QNLINBSDQBBDZNRRH1MUSDZ4V',
					clientSercet = 'RJBO0O01D2OSPR5R2KF4S214CFNXAOAD03DJM3L15ERLUCXF',
					coords = lat + ',' + lng,
					searchIds = '';

					var categoryIds = {
						movie: '4bf58dd8d48988d17f941735',
						museum: '4bf58dd8d48988d181941735',
						stadium: '4bf58dd8d48988d184941735',
						themePark: '4bf58dd8d48988d182941735',
						waterPark: '4bf58dd8d48988d193941735',
						eventVenue: '4d4b7105d754a06373d81259',
						food: '4d4b7105d754a06374d81259',
						mall: '4bf58dd8d48988d1fd941735',
						musicStore: '4bf58dd8d48988d1fe941735',
						foodDrink: '4bf58dd8d48988d1f9941735',
						clothesStore: '4bf58dd8d48988d103951735'

					};

					
					for (var key in categoryIds) {
						searchIds += categoryIds[key] + ',';
					}

					var FSUrl = 'https://api.foursquare.com/v2/venues/search?ll=' + coords + '&client_id=' + clientID + '&client_secret=' + 
					clientSercet +'&intent=browse&radius=20000' + '&categoryId=' + searchIds + '&v=20130815' + '&limit=50';

					
					return $http.get(FSUrl)
						.then(function(response) {

							var data = response.data.response;
							return data;

						}, function(error) {
							console.log(error);
						}); 
			}



};



		return placesFactory;
}]);