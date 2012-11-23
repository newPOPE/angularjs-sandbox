define(['app'], function (app) {
  'use strict';

  app.controller('BodyController', function ($scope, $location) {
    $scope.isLinkCurrent = function (path) {
      return path === $location.path();
    }
  });

});
