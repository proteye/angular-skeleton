import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import footerComponent from './footer.component';

const footerModule = angular.module('footer', [
  uiRouter,
])

  .component('footer', footerComponent)

  .name;

export default footerModule;
