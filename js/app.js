
angular.module('underscore', []).factory('_', function() {
    return window._;
});

angular.module('keyley', [
	'ui.router', 
	// 'ngSails',
	'ui.bootstrap',

	'ProduitsControllers',

	'ProduitsServices',
	'TagsServices',

	'commonFilters'
])	

.config(['$stateProvider', '$urlRouterProvider',
  	function($stateProvider,$urlRouterProvider) {
	    
	    $stateProvider
	    	.state('produit', {
			    url: '/produit/:id',
			    templateUrl: 'templates/produits.html',
			    controller: 'ProduitsCtrl',
			})
	  		.state('list', {
			    url: '/',
			    templateUrl: 'templates/list.html',
			    controller: 'ProduitsCtrl',
			});

  		$urlRouterProvider.otherwise('/');


}])

.run(['$rootScope','$state',
	function($rootScope,$state) {	

		$rootScope.$on('$stateChangeStart', 
		function(event, toState, toParams, fromState, fromParams, options){ 
		
		});

}]);