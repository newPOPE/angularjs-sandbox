define(['app'], function (app) {
  'use strict';

  app.config(['$routeProvider',
    function ($routeProvider) {
      $routeProvider
        .when('/page/:page', {
          controller: 'PageController',
          templateUrl: 'js/templates/page/default.html'
        })
        .when('/', {
          controller: 'HomeController',
          templateUrl: 'js/templates/home/default.html'
        })
        .otherwise({
          redirectTo: '/'
        });
    }
  ]);
});
