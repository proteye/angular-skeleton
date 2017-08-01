import 'normalize.css';
import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import Services from './services/services';
import Directives from './directives/directives';
import Filters from './filters/filters';
import Routes from './routes';

/**
 * Application
 */
angular.module('app', [
  uiRouter,
  Routes,
  Common,
  Components,
  Services,
  Directives,
  Filters,
])

  .factory('httpInterceptor', () => {
    return {
      request: (config) => {
        return config;
      },
    };
  })

  .config(($provide, $locationProvider, $httpProvider) => {
    'ngInject';

    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');

    // http interceptor - add api url prefix and token to header
    $httpProvider.interceptors.push('httpInterceptor');
  })

  .run(() => {

  })

  .component('app', AppComponent)
;
