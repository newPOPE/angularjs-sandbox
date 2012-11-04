'use strict';

require.config({
  shim: {
    'libs/angular': {
      exports: 'angular'
    }
  }
});

require([
  'app',
  'routers/router',
  'controllers/home',
  'controllers/page'
], function() {
  angular.bootstrap(document, ['app']);
});
