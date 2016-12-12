$(document).ready(function() {
	$("#experiencias").owlCarousel({
		autoPlay: 30000000000000000,
		items : 6,
		itemsDesktop : [1400,4],
		itemsTablet: [768,3],
		itemsMobile : [320,2]
	});
	$("#alojamientos").owlCarousel({
		autoPlay: 30000000000000000,
		items : 6,
		itemsDesktop : [1400,3],
		itemsTablet: [768,2],
		itemsMobile : [320,1]
	});
	$("#destinos-destacados").owlCarousel({
		autoPlay: 30000000000000000,
		items : 12,
		itemsDesktop : [1400,6],
		itemsTablet: [768,4],
		itemsMobile : [320,3]
	});
});
