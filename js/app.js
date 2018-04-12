'use strict';

var motoApp = angular.module('motoApp', ['ngRoute', 'AppMotoAnimation', 'AppMotoControllers', 'AppMotoServices' ]);

motoApp.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
		when('/catalogo',{
			templateUrl: 'partials/catalogo-motos.html',
			controller: 'MotosListaCtrl'
		}).
		when('/catalogo/:motoId', {
			templateUrl: 'partials/detalle-moto.html',
			controller: 'MotoDetailCtrl'
		}).
		otherwise({
			redirectTo: '/catalogo'
		});
	}]);