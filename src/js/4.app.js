var slideIndex = 0;

var templateResults = '<div class="col-md-6 col-sm-6 col-xs-12 carousel">'+
							'<div id="carousel-result-1" class="owl-carousel owl-theme">'+
								'<div class="item"><img src="**img1**" alt="Room"></div>'+
								'<div class="item"><img src="**img2**" alt="Room"></div>'+
								'<div class="item"><img src="**img3**" alt="Room"></div>'+
							'</div>'+
							'<span class="hearth glyphicon glyphicon-heart-empty"></span>'+
							'<span class="hearth-2 glyphicon glyphicon-heart"></span>'+
							'<div class="cost"><strong>**cost**</strong><span class="ray glyphicon glyphicon-flash"></span></div>'+
							'<div class="owner"><img src="**imgp**" alt="Owner"></div>'+
							'<h4>**title**</h4>'+
							'<p>**detail**</p>'+
						'</div>';

var loadPag = function(){
	carouselExperiences();
	carouselSlider()
	showMap();
	filterView();
	ajaxAirbnb();
	searchHome();
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

var filterView = function(){
	$("#buttonFilter").click(function(){
    $(".option-advancedFilter").fadeToggle();
    $(".container-results").toggleClass("ocultar");
	});
}

var ajaxAirbnb = function(){
	console.log("entro a la funcion");
	$.getJSON("airbnb.json",
		function(response){
			var newTemplate= "";
			$.each(response, function(i, airbnb){
				console.log("entro al template");
				newTemplate += templateResults
								.replace("**img1**", airbnb.img1)
								.replace("**img2**", airbnb.img2)
								.replace("**img3**", airbnb.img3)
								.replace("**cost**", airbnb.price)
								.replace("**imgp**", airbnb.owner)
								.replace("**title**", airbnb.title)
								.replace("**detail**", airbnb.details);
	        });
	     	console.log("exito");
		$("#eachresult").html(newTemplate);
		console.log("error");
		}
	);
}

$(function () {
		$("#datepicker").datepicker({
		  dateFormat: "dd-mm-yy",
		  firstDay: 1,
		  dayNamesMin: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"],
		  dayNamesShort: ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"],
		  monthNames: 
		      ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
		      "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
		  monthNamesShort: 
		      ["Ene", "Feb", "Mar", "Abr", "May", "Jun",
		      "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"]
		});
		$("#datepicker2").datepicker({
		  dateFormat: "dd-mm-yy",
		  firstDay: 1,
		  dayNamesMin: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"],
		  dayNamesShort: ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"],
		  monthNames: 
		      ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
		      "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
		  monthNamesShort: 
		      ["Ene", "Feb", "Mar", "Abr", "May", "Jun",
		      "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"]
		});
		$("#datepicker3").datepicker({
		  dateFormat: "dd-mm-yy",
		  firstDay: 1,
		  dayNamesMin: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"],
		  dayNamesShort: ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"],
		  monthNames: 
		      ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
		      "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
		  monthNamesShort: 
		      ["Ene", "Feb", "Mar", "Abr", "May", "Jun",
		      "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"]
		});
		$("#datepicker4").datepicker({
		  dateFormat: "dd-mm-yy",
		  firstDay: 1,
		  dayNamesMin: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"],
		  dayNamesShort: ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"],
		  monthNames: 
		      ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
		      "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
		  monthNamesShort: 
		      ["Ene", "Feb", "Mar", "Abr", "May", "Jun",
		      "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"]
		});
});

$( function() {
  $( "#slider-range" ).slider({
    range: true,
    min: 0,
    max: 500,
    values: [ 75, 300 ],
    slide: function( event, ui ) {
      $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
    }
  });
  $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
    " - $" + $( "#slider-range" ).slider( "values", 1 ) );
});