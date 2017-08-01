import angular from 'angular';
import appConfigFactory from './appConfig.factory';

const appConfigModule = angular.module('appConfigService', [])

  .factory('AppConfig', appConfigFactory)

  .name;

export default appConfigModule;
