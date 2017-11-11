/* @ngInject */
const responseError = function ($q, $rootScope, $state) {
    return {
        'responseError': function (rejection) {

            if (rejection.status == 401) {
                $rootScope.logout()
            } else {
                $rootScope.error = rejection.config.method + " on " + 
                                        rejection.config.url + " failed with status " + rejection.status
            }

            return $q.reject(rejection)
        }
    }
}

export default responseError