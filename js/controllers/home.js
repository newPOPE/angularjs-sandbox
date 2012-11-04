define(['app'], function(app) {
  'use strict';

  app.controller('HomeController', ['$scope',
    function($scope) {
      $scope.foo = 'Hello AngularJS sandbox';
    }
  ]);
});
