import responseError from './responseError.factory.js'
import request from './request.factory.js'

export default
    angular
        .module('interceptors', [])
        .factory('responseError', responseError)
        .factory('request', request)
        .name
