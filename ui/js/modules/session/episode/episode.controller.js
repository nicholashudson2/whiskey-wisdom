/* @ngInject */
class EpisodeController {

    constructor(episodeService, $state) {
        this.episodeService = episodeService
        this.$state = $state
    }

}

export default EpisodeController