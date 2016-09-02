angular.module('ProduitsServices', [])
  .service('ProduitsSrv', function($q) { //$sails, 
    return {
      get: function() {
        var defer = $q.defer();

        defer.resolve(Keyley.config.produits);

        // $sails.get('/produits').success(function(produits){
        //   defer.resolve(produits);
        // }).error( function(err) {
        //   defer.reject(err);
        // });
        return defer.promise;
      },

}});