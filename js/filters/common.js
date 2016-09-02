angular.module('commonFilters', [])
  .filter('trustedHtml', ['$sce', function ($sce) {
    return function(html) {
      return $sce.trustAsHtml(html);
    };
  }])
  
  .filter('nl2br', function($sce){
      return function(msg,is_xhtml) {
          var is_xhtml = is_xhtml || true;
          var breakTag = (is_xhtml) ? '<br />' : '<br>';
          var msg = (msg + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1'+ breakTag +'$2');
          return $sce.trustAsHtml(msg);
      }
  })

  .filter('truncate', function(){
      return function(string,size) {
        var truncate;
        if(string && string.length > size) {
            truncate = string.substring(0, size);
            truncate = truncate+'...';
        } else {
            truncate = string;
        }
        //--  
        return truncate;
      }
  })



  .filter('weight',function() {
    return function(number,ref) {
      if(ref === 'kgs') {
        return number+' kgs';  
      } else {
        return number+' lbs';  
      }
    }
  })

 

  .filter('location',function() {
      return function(location) {
        if(!location || location.indexOf('null') > -1) {
          return 'somewhere...';
        } else {
          return location;
        }
      }
  })

  .filter('dateDiff',function() {
    return function(start,end) {
      return moment(end).diff(moment(start),'days');
    }
  })

  .filter('avatar',function() {
    return function(path) {
      if(path) {
        return path;
      } else {
        return 'img/avatar.png';
      }
    }
  })

  .filter('userName',function() {
    return function(name) {
      if(name) {
        return name;
      } else {
        return 'John Doe';
      }
    }
  })