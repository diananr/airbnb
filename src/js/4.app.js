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
	$("#carousel-result-1").owlCarousel({
		navigation : true,
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem:true
	});
	$("#carousel-result-2").owlCarousel({
		navigation : true,
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem:true
	});
	$("#carousel-result-3").owlCarousel({
		navigation : true,
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem:true
	});
	$("#carousel-result-4").owlCarousel({
		navigation : true,
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem:true
	});
	var prev = $(".owl-prev");
	prev.html("<span class='glyphicon glyphicon-menu-left'></span>");
	var next = $(".owl-next");
	next.html("<span class='glyphicon glyphicon-menu-right'></span>");


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
	var map = new google.maps.Map(document.getElementById("map"), myOptions);

	//*autocomplete*//
	var input =  document.getElementById("search-location");

	var autocomplete = new google.maps.places.Autocomplete(input);
	  autocomplete.bindTo('bounds', map);

	  var marker = new google.maps.Marker({
		map: map,
		anchorPoint: new google.maps.Point(0, -29)
	});

	  autocomplete.addListener('place_changed', function() {
		marker.setVisible(false);
		var place = autocomplete.getPlace();
		if (!place.geometry) {
		  window.alert("Autocomplete's returned place contains no geometry");
		  return;
		}

		// If the place has a geometry, then present it on a map.
		if (place.geometry.viewport) {
		  map.fitBounds(place.geometry.viewport);
		} else {
		  map.setCenter(place.geometry.location);
		  map.setZoom(17);  // Why 17? Because it looks good.
		}
		marker.setIcon(/** @type {google.maps.Icon} */({
		  url: place.icon,
		  size: new google.maps.Size(71, 71),
		  origin: new google.maps.Point(0, 0),
		  anchor: new google.maps.Point(17, 34),
		  scaledSize: new google.maps.Size(35, 35)
		}));
		marker.setPosition(place.geometry.location);
		marker.setVisible(true);
	});
}
