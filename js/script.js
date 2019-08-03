var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {

	$scope.dado = '';
	$scope.ceps = [];
	$scope.cond = false;

	$scope.buscar = function() {
		if($scope.dado != '') {
			$scope.cond = true;
			$http.get("https://viacep.com.br/ws/"+$scope.dado+"/json/")
			 .then(function(response) {
			  	$scope.ceps = response.data;
			  });
		} else {
			$scope.cond = false;
		}

	}
		 //https://viacep.com.br/ws/01001000/json/
});