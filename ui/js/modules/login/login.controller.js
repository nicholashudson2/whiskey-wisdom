const loginController = ['loginService', '$state', '$rootScope', function (loginService, $state, $rootScope) {

    this.loginService = loginService
    this.$state = $state
    this.rememberMe = false

    this.login = () => {
        loginService.user(this.username, this.password).authenticate((authenticationResult) => {
            this.password = undefined
            if (authenticationResult.token) {
                $rootScope.accessToken = authenticationResult.token
                $rootScope.user = authenticationResult.user
                $rootScope.roles = authenticationResult.user.roles
                console.dir($rootScope.accessToken)
                console.dir($rootScope.user)
                console.dir($rootScope.roles)
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
        })
    }

	this.newUser = () => {
		$state.go('session.article')
	}

    // angular.element('#myModal').modal('show')
    // angular.element("#myModal").on("show", function () {
    //     angular.element("#myModal").css("z-index", "1000");
    // });
    // angular.element("#myModal").on("hide", function () {
    //     angular.element("#myModal").css("display", "none");
    //     angular.element("#myModal").css("z-index", "-999");
    // });

}]

export default loginController