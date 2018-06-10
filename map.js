function myMap() {
	var mapOptions = {
		center: new google.maps.LatLng(53.4726073,-2.2268703),
		mapTypeID: google.maps.MapTypeId.ROADMAP,
		zoom: 15,
		zoomControl: true, 
		zoomControlOptions: {
			position: google.maps.ControlPosition.RIGHT_TOP
		},
		disbaleDefaultUI: true,
		fullscreenControl: false,
		streetViewControl: false,
		mapTypeControl: false
	};
	var geoMap = new google.maps.Map(document.getElementById('googleMap'), mapOptions);
	var marker = new google.maps.Marker({
		position: new google.maps.LatLng(53.4726073,-2.2268703),
		map: geoMap,
		title: 'Frank Design'
	})
	google.maps.event.addDomListener(window, 'resize', function() {
    	var center = map.getCenter();
    	map.setCenter(center);
	});
	google.maps.event.trigger(map, "resize");
}