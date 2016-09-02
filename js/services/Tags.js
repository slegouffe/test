angular.module('TagsServices', [])
  .service('TagsSrv', function($q) { //$sails,
    return {
      get: function() {
        var defer = $q.defer();
        defer.resolve([{id:1,tag:'tag 1'},{id:2,tag:'tag 2'},{id:3,tag:'tag 3'}]);
        // $sails.get('/todo').success(function(resp){
        //   defer.resolve(resp);
        // }).error( function(err) {
        //   defer.reject(err);
        // });

        return defer.promise;
      },

}});