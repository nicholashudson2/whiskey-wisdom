const sessionController = ['sessionService', '$state', '$window', function (sessionService, $state, $window) {

    this.sessionService = sessionService
    this.$state = $state

    const sessionInitializer = () => {
        angular.element($window).scroll(() => {
            // if (angular.element($window).scrollTop() % 2 == 0) {
                let logoShrink = 0

                if (angular.element($window).scrollTop() > 150) {
                    logoShrink = 150
                } else {
                    logoShrink = angular.element($window).scrollTop()
                }

                angular.element('.header').css('height', 220 - logoShrink + 'px')
                angular.element('.logo').css('width', 200 - logoShrink + 'px')
                angular.element('.logo').css('background-size', 200 - logoShrink + 'px')
                angular.element('.iframe').css('height', 'calc(100vh - ' + (240 - logoShrink) + 'px)')
            // }
        });
    }

    // sessionInitializer()
}]

export default sessionController