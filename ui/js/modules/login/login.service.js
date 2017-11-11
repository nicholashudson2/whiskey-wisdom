/* @ngInject */
class LoginService {
    
    constructor($http, apiUrl, $resource) {
        this.$http = $http
        this.apiUrl = apiUrl
        this.$resource = $resource
    }
    
    user = $resource(`${this.apiUrl}/user/:action`, {},
    {
        authenticate: {
            method: 'POST',
            params: {'action': 'authenticate'},
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }
    })
    
}

export default LoginService