import angular from 'angular';
import header from './header/header';
import footer from './footer/footer';

const commonModule = angular.module('app.common', [
  header,
  footer,
])

  .name;

export default commonModule;
