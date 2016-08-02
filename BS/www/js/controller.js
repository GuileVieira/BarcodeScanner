

angular.module('controller', ['starter'])

.controller('Control', function($scope, Scan){
	
	
    
    $scope.ler = function(){
    	
    	var that = this;
    	 Scan.scanner($scope, that); 
	}	
    

	$scope.change = function(result, that){
		//console.log(result);
		
		that.url.link =  result.text; 
	}
	/***************************************

				ADICIONAR DIALOGS PLUGIN CORDOVA

  /*	$scope.show = function(result){
  		var link = Scan.getLink().text;  		
  		var ref = cordova.InAppBrowser.open(link, '_system', 'location=yes');

 	 }*/


});