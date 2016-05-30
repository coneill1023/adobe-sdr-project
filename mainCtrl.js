angular.module('adobesdr').controller('mainCtrl', function ($scope, mainService) {
  
  $scope.userRequestObject = {};

  $scope.userRequest = function (isValid) {
    if (isValid) {
      console.log('FORM VALID');
      console.log($scope.userRequestObject);
      mainService.getAdobeReports($scope.userRequestObject).then(function (response) {
        console.log(response);
      })
      
    } else {
      console.log('FORM NOT VALID - ERROR');
    }
  };




  
});