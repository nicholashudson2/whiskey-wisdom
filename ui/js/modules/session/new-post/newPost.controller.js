const playerController = ['playerService', '$state', '$scope', function (playerService, $state, $scope) {

    this.playerService = playerService
    this.$state = $state
}]

export default playerController