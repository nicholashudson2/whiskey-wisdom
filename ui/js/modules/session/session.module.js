import sessionComponent from './session.component.js'
import sessionController from './session.controller.js'
import sessionService from './session.service.js'

export default
  angular
    .module('session', [])
    .component('sessionComponent', sessionComponent)
    .controller('sessionController', sessionController)
    .service('sessionService', sessionService)
    .name
