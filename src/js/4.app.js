var slideIndex = 0;

var loadPag = function(){
	carouselExperiences();
	carouselSlider()
	showMap();

}

$(document).ready(loadPag);

var carouselExperiences = function(){
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
	$("#carousel-resultado-1").owlCarousel({
		navigation : true,
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem:true
	});
	$("#carousel-resultado-2").owlCarousel({
		navigation : true,
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem:true
	});
}

var carouselSlider = function(){
	var i;
	var x = document.querySelectorAll(".slider-carrusel");
	for (i = 0; i < x.length; i++) {
	  x[i].style.display = "none";
	}
	slideIndex++;
	if (slideIndex > x.length) {slideIndex = 1}
	  $(x[slideIndex-1]).fadeIn(20);
	setTimeout(carouselSlider, 10000);
}

var showMap = function(){
	$("#map").addClass("sizeMap");

	var myOptions = {
		center:{lat: 37.4419, lng: -122.1430},
		zoom: 12,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		mapTypeControl: false,
		navigationControlOptions: {
			style: google.maps.NavigationControlStyle.SMALL
		}
	};

	var mapa = new google.maps.Map(document.getElementById("map"), myOptions);
}
