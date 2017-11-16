const interceptorFactory = ['$q', '$rootScope', function ($q, $rootScope) {
    return {
        'request': function (config) {
            if (angular.isDefined($rootScope.accessToken)) {
                config.headers['Whiskey-Token'] = $rootScope.accessToken
            }
            return config || $q.when(config)
        },
        'responseError': function (rejection) {

            if (rejection.status == 401) {
                $rootScope.logout()
            } else {
                $rootScope.error = rejection.config.method + " on " + 
                                        rejection.config.url + "failed with status " + rejection.status
            }

            return $q.reject(rejection)
        }
    }
}]

export default interceptorFactory