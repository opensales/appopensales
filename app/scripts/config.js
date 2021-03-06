'use strict';

// Init the application configuration module for AngularJS application
var ApplicationConfiguration = (function () {

  // Init module configuration options
  var applicationModuleName = 'opensales';

  var applicationModuleVendorDependencies = [
    'ngAnimate',
    'ngMessages',
    'ngSanitize',
    'ncy-angular-breadcrumb',
    'ui.router',
    'ui.bootstrap',
    'ui.utils',
    'ui.utils.masks',
    'ui.select',
    'patternfly',
    'patternfly.charts',
    'restangular',
    'toastr',
    'ngFileUpload',
    'ui.grid',
    'ui.grid.edit',
    'ui.grid.pagination',
    'ui.grid.selection',
    'ui.grid.autoResize',
    'cfp.hotkeys',
    'LocalStorageModule',
    'frapontillo.bootstrap-switch',
    'kubernetesUI',
    'ng-qzTray'
  ];

  // Add a new vertical module
  var registerModule = function (moduleName, dependencies) {
    // Create angular module
    angular.module(moduleName, dependencies || []);

    // Add the module to the AngularJS configuration file
    angular.module(applicationModuleName).requires.push(moduleName);
  };

  return {
    applicationModuleName: applicationModuleName,
    applicationModuleVendorDependencies: applicationModuleVendorDependencies,
    registerModule: registerModule
  };

})();
