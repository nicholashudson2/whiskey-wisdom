const loginController = ['loginService', '$state', function (loginService, $state) {

    this.loginService = loginService
    this.$state = $state
    this.rememberMe = false

    this.login = () => {
        LoginService.user().authenticate($.param({
            username: this.username,
            password: this.password
        }), function (authenticationResult) {
            const accessToken = authenticationResult.token
            $rootScope.accessToken = accessToken
            if (this.rememberMe) {
                $cookieStore.put('accessToken', accessToken)
            }
            // Add user id arg
            this.getUser()
        });
    };

    this.getUser = () => {
        loginService.user().retrieve($.param({
            username: this.username
        }), function (user) {
            $rootScope.user = user
        })
    }

}]

export default loginController