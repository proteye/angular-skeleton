import angular from 'angular';
import appConfig from './appConfig/appConfig';

const servicesModule = angular.module('app.services', [
  appConfig,
])

  .name;

export default servicesModule;
