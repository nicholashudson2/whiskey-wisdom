/* @ngInject */
class LoginController {
    
    rememberMe = false;

    constructor(loginService, $state) {
        this.loginService = loginService
        this.$state = $state
    }

    login = () => {
        LoginService.user.authenticate($.param({
            username: this.username,
            password: this.password
        }), function (authenticationResult) {
            const accessToken = authenticationResult.token
            $rootScope.accessToken = accessToken
            if (this.rememberMe) {
                $cookieStore.put('accessToken', accessToken)
            }
            this.getUser()
        });
    };

    getUser = () => {
        loginService.user.get(function (user) {
            $rootScope.user = user
        })
    }

}

export default LoginController