var motoAppAnimations = angular.module('AppMotoAnimation', ['ngAnimate']);

motoAppAnimations.animation('.detalle-moto', function() {
	var animateUp = function(element, className, done) {
		if(className != 'activator') {
			return;
		}
		element.css({
			position: 'absolute',
			top: 500,
			left: 0,
			display: 'block'
		});

		jQuery(element).animate({
			top: 0
		}, done);
		return function(cancel) {
			if(cancel) {
				element.stop();
			}
		};
	}

	var animateDown = function(element, className, done) {
		if(className != 'activator') {
			return;
		}
		element.css({
			position: 'absolute',
			left: 0,
			top: 0,
			display: 'none'
		});
		jQuery(element).animate({
			top: -500
		}, done);

		return function(cancel) {
			if(cancel) {
				element.stop();
			}
		};
	}

	return {
		addClass: animateUp,
		removeClass: animateDown
	};
});