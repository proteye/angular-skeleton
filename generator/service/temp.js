import angular from 'angular';
import <%= name %>Factory from './<%= name %>.factory';

const <%= name %>Module = angular.module('<%= name %>Service', [])

  .factory('<%= upCaseName %>Service', <%= name %>Factory)

  .name;

export default <%= name %>Module;
