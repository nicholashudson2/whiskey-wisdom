import interceptorFactory from './interceptors.factory.js'

export default
    angular
        .module('interceptors', [])
        .factory('interceptorFactory', interceptorFactory)
        .name
