import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import homeComponent from './home.component';

const homeModule = angular.module('home', [
  uiRouter,
])

  .component('home', homeComponent)

  .name;

export default homeModule;
