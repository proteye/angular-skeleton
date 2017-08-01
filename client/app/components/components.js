import angular from 'angular';
import home from './home/home';

const componentModule = angular.module('app.components', [
  home,
])

  .name;

export default componentModule;
