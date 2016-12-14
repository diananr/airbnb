

var loadPag = function(){
	carouselExperiences();
	carouselSlider();
	showMap();
	filterView();
	// ajaxAirbnb();
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

var slideIndex = 0;
	var i = 0;
var carouselSlider = function(){
	var x = document.querySelectorAll(".slider-carrusel");
	for (i = 0; i < x.length; i++) {
	  x[i].style.display = "none";
	}
	slideIndex++;
	if (slideIndex > x.length) {slideIndex = 1}
	  $(x[slideIndex-1]).fadeIn(20);
}

var set = setInterval(carouselSlider, 10000);
$('#next').click(function() {
  clearInterval(carouselSlider);
  i += 1;
  var d = $(".slider-carrusel");
  var itemAmt = d.length;
  if (i < 0) {
    i = itemAmt + 1;
  }
  carouselSlider();
});

$('#preview').click(function() {
  // clearInterval(carouselSlider);
  var d = $(".slider-carrusel");
  var itemAmt = d.length;
  if (i > 1) {
    i = itemAmt - 1;
  }
  carouselSlider();
});

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

var filterView = function(){
	$("#buttonFilter").click(function(){
    $(".option-advancedFilter").fadeToggle();
    $(".container-results").toggleClass("ocultar");
	});
}


//ajax airbnb



var templateResults = '<div class="col-md-6 col-sm-6 col-xs-12 carousel">'+
												'<div id="carousel-result-1" class="owl-carousel owl-theme">'+
													'<div class="item"><img src="{{img1}}" alt="Room" class="img-json"></div>'+
													// '<div class="item"><img src="{{img2}}" alt="Room"></div>'+
													// '<div class="item"><img src="{{img3}}" alt="Room"></div>'+
												'</div>'+
												'<span class="hearth glyphicon glyphicon-heart-empty"></span>'+
												'<span class="hearth-2 glyphicon glyphicon-heart"></span>'+
												'<div class="cost">' + 
													'<strong>{{cost}}</strong>' +
													'<span class="ray glyphicon glyphicon-flash"></span>'+ 
												'</div>'+
												'<div class="owner">' + 
												  '<img src="{{imgp}}" alt="Owner" class="photo-owner">'+
												'</div>'+
												'<h4>{{title}}</h4>'+
												'<p>{{detail}}</p>'+
											'</div>';

// var templateResults = '<div class="col-md-6 col-sm-6 col-xs-12 carousel">{{precio}}</div>';
var valueInputSearch = document.getElementById("search-location");
var mirafloresCity = "Miraflores, Perú";
var sanIsidroCity = "San Isidro, Perú";

$("#search-location").change(function(){
	$.getJSON("http://localhost:3028/airbnb.json", function(response){
		var complete = "";
		if (valueInputSearch.value == mirafloresCity){
			$.each(response.results1, function(i, homes){
				complete += templateResults
												.replace("{{img1}}", homes.img1)
												.replace("{{cost}}", homes.price)
												.replace("{{imgp}}", homes.owner)
												.replace("{{title}}", homes.title)
												.replace("{{detail}}", homes.datails);
			});
			var child = $("#eachresult").children()
			child.remove();
			$("#eachresult").append(complete);

			$.each(response.results1, function(i, filtros){
				var checkboxFilter = $('.checkbox input[type="checkbox"]');
				for (var i = 0; i < checkboxFilter.length; i++){
	        var ch = checkboxFilter[i].checked;
					if(ch == true){
						if($(checkboxFilter[i]).parent().text() == filtros.filtros){
							alert("hola mundo");
						}
					}
				}
			});

		}else if (valueInputSearch.value == sanIsidroCity){
			$.each(response.results2, function(i, homes){
				complete += templateResults
												.replace("{{img1}}", homes.img1)
												.replace("{{cost}}", homes.price)
												.replace("{{imgp}}", homes.owner)
												.replace("{{title}}", homes.title)
												.replace("{{detail}}", homes.datails);
			});
			var child = $("#eachresult").children()
			child.remove();
			$("#eachresult").append(complete);
		}
	});
})
