var app = angular.module('app', []);

app.controller('appController', ['$scope', '$http', '$window', function($scope, $http, $window) {

	$scope.alert = function() {
		$window.alert(JSON.stringify($scope.data))
	}


	$http.get('http://demo6292426.mockable.io/blickTest')
		.then(function(data) {
			$scope.data = data.data;
		})
}]);
