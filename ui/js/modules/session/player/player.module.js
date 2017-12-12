import playerComponent from './player.component.js'
import playerController from './player.controller.js'
import playerService from './player.service.js'

export default
  angular
    .module('player', [])
    .component('playerComponent', playerComponent)
    .controller('playerController', playerController)
    .service('playerService', playerService)
    .name
