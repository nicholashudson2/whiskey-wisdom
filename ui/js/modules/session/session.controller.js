const sessionController = ['sessionService', '$state', function (sessionService, $state) {

    this.sessionService = sessionService
    this.$state = $state

}]

export default sessionController