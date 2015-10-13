angular.module('Space')
	.controller('MainCtrl', ['getPlaces', '$http', function(getPlaces, $http) {
		var vm = this;
		vm.message = 'Hello world!';
		vm.loading = true;

		getPlaces.getPlaces().then(function(data) {
			vm.place = data.venues;
			console.log(vm.place);
			vm.cityName = vm.place[0].location.city;
			vm.spaceId = vm.place[0].id;


			$http.get('https://api.foursquare.com/v2/venues/' + vm.spaceId + '/photos?client_id=J2HCJIGLTSFFJMKMLAEBT30QNLINBSDQBBDZNRRH1MUSDZ4V&client_secret=RJBO0O01D2OSPR5R2KF4S214CFNXAOAD03DJM3L15ERLUCXF&v=20151001')
				.then(function(data) {
					vm.photo = data.data.response.photos;
					console.log(vm.photo);
				});

			vm.loading = false;
		});

	}]);