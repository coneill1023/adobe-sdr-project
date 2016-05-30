angular.module('adobesdr').service('mainService', function ($http, $q) {


  this.getAdobeReports = function (userReqObject) {
    console.log('userReqObject on service: ', userReqObject);
    var deferred = $q.defer();
    $http({
      method: 'GET',
      url: 'https://api.omniture.com/admin/1.4'
    }).then(function (response) {
      console.log('response:', response);
      deferred.resolve(response.data)
    })
    return deferred.promise
  };
  
  
  
  
  
});