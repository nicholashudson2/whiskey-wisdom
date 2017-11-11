/* @ngInject */
const request = function ($q, $rootScope) {
    return {
        'request': function (config) {
            const isRestCall = config.url.indexOf('rest') == 0
            if (isRestCall && angular.isDefined($rootScope.accessToken)) {
                config.headers['X-Access-Token'] = $rootScope.accessToken
            }
            return config || $q.when(config)
        }
    }
}

export default request