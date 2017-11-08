/* @ngInject */
class SessionController {

    constructor(sessionService, $state) {
        this.sessionService = sessionService
        this.$state = $state
    }

}

export default SessionController