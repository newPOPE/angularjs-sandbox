define(['app'], function(app) {
  'use strict';

  app.controller('PageController', ['$scope', '$routeParams',
    function($scope, $routeParams) {
      $scope.page = $routeParams.page;
    }
  ]);
});
