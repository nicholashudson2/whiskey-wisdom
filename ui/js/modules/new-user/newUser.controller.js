const newUserController = ['newUserService', '$state', '$rootScope', function (newUserService, $state, $rootScope) {

    this.newUserService = newUserService
    this.$state = $state

}]

export default newUserController