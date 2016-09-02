angular.module('ProduitsControllers', [])
  .controller('ProduitsCtrl', ['$scope', '$state', 'ProduitsSrv','TagsSrv' , function($scope, $state, ProduitsSrv, TagsSrv) {
   
    //--Init datas
    var _init = function() {
      TagsSrv.get().then(function(tags){
        $scope.tags = tags;
      });

      ProduitsSrv.get().then(function(produits) {
        $scope.produits = produits;
      });

    };

    $scope.filterList = function() {
    };


    $scope.search = function(keyword) {
    };

   _init();


}]);