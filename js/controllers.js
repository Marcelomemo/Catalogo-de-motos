'use strict';

var AppMotoControllers = angular.module('AppMotoControllers', []);

	AppMotoControllers.controller('MotosListaCtrl', ['$scope', 'Moto',
		function($scope, Moto) {
			$scope.motos = Moto.query();
			$scope.orderProp = 'modelo';

		}]);

	AppMotoControllers.controller('MotoDetailCtrl', ['$scope', '$routeParams', 'Moto',
		function($scope, $routeParams, Moto) {
			$scope.moto = Moto.get({motoId: $routeParams.motoId}, function(moto) {
				$scope.mainImageUrl = moto.images[0];
			});
			$scope.setImage = function(imageUrl) {
				$scope.mainImageUrl = imageUrl;
			}
		}]);
