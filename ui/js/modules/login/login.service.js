const loginService = ['$http', 'apiUrl', '$resource', function ($http, apiUrl, $resource) {

    this.$http = $http
    this.apiUrl = apiUrl
    this.$resource = $resource

    this.user = (user, pass) => {
        return $resource(`${this.apiUrl}/home/:action`, {}, {
                authenticate: {
                    method: 'POST',
                    params: {
                        'action': 'authenticate',
                        'username': user,
                        'password': pass
                    },
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
                }
            })
    }

}]

export default loginService