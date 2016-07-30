angular.module('servScn', ['ngCordova', 'controller'])

.factory('Scan', function($cordovaBarcodeScanner){

	
	var link = null;
	var scop = null;

	function getLink(){
		return link;
	}


	function send(scop, that){
		scop.change(link, that);
		//link = null; // adicionar a um array e mostrar historico
	}

	function sChange(scop, that){		
		var aux = 1;
		while(aux){
			if(link!==null) {
				aux = 0;
				send(scop, that);
			}
		}
	}



	function scanner($scope, that){
		scop = $scope;
		
		cordova.plugins.barcodeScanner.scan(
	      function (result) {
	      		link = result;
	      		//sChange(scop, that);
	      		var conf = confirm('Abrir a página: ' + link.text);
	      		if(conf == true){
	      			var ref = cordova.InAppBrowser.open(link.text, '_system', 'location=yes');
	      		}
	      }, 
	      function (error) {
	          alert("Scanning failed: " + error);
	      },
	      {
	          "preferFrontCamera" : false, // iOS and Android
	          "showFlipCameraButton" : false, // iOS and Android
	          "prompt" : "Coloque o código no retangulo", // supported on Android only
	          "formats" : "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
	          "orientation" : "portrait"  // Android only (portrait|landscape), default unset so it rotates with the device
	      });
		
	
		
		
	}

	return {
		scanner: scanner,
		schange: sChange,
		send: send,
		getLink: getLink
		}
	});

