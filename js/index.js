(function() {

	document.addEventListener('deviceready', onDeviceReady.bind(this), false);
	var pictureSource;
	var destinationType;

	function onDeviceReady() {
		pictureSource = navigator.camera.PictureSourceType;
		destinationType = navigator.camera.DestinationType;

		//
		$(function() {
			"use strict";
			$("#decode").click(function() {
				//alert("clicked");
				cordova.plugins.barcodeScanner.scan(function(result) {
					alert(result.text);
				}, function(error) {
					alert(error);
				});
				//end
			});
		});
		//

		document.getElementById("getloc").onclick = function() {
			alert('sdf');
			navigator.geolocation.getCurrentPosition(c);
			return false;
		};
	};

	function onPhotoDataSuccess(imageData) {

	}

	function onFail(message) {

	}

	function clearCache() {

	}

})();

