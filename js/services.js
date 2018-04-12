'use strict';

var AppMotoServices = angular.module('AppMotoServices', ['ngResource']);

AppMotoServices.factory('Moto', ['$resource',
	function($resource) {
		return $resource('data/:motoId.json', {}, {
			query: {method: 'GET', params: {motoId: 'listamotos'}, isArray: true}
		});
	}]);