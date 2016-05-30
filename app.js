angular.module('adobesdr', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'home.html',
      controller: 'mainCtrl'
    })

  $urlRouterProvider
    .otherwise('/');

});

