import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

/**
 * Routes
 */
const routesModule = angular.module('app.routes', [
  uiRouter,
])

  .config(($urlRouterProvider, $stateProvider) => {
    'ngInject';

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        component: 'home',
      })
    ;
  })

  .name;

export default routesModule;
