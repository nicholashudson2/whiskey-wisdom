import episodeComponent from './episode.component.js'
import episodeController from './episode.controller.js'
import episodeService from './episode.service.js'

export default
  angular
    .module('episode', [])
    .component('episodeComponent', episodeComponent)
    .controller('episodeController', episodeController)
    .service('episodeService', episodeService)
    .name
