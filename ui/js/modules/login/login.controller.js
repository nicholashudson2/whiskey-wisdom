const loginController = ['loginService', '$state', '$rootScope', function (loginService, $state, $rootScope) {

    this.loginService = loginService
    this.$state = $state
    this.rememberMe = false

    this.login = () => {
        loginService.user().authenticate($.param({
            username: this.username,
            password: this.password
        }), function (authenticationResult) {
            delete this.password
            if (authenticationResult.token) {
                $rootScope.accessToken = authenticationResult.token
                $rootScope.user = authenticationResult.user
                $rootScope.role = authenticationResult.user.role

                if (this.rememberMe) {
                    $cookieStore.put('accessToken', accessToken)
                }

                $state.go('session.list')
                // loginService.user().retrieve($.param({
                //     username: this.username
                // }), function (user) {
                //     $rootScope.user = user
                //     loginService.role = user.role
                // })
            }
        });
    };

}]

export default loginController