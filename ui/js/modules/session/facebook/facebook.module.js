import facebookComponent from './facebook.component.js'
import facebookController from './facebook.controller.js'
import facebookService from './facebook.service.js'

export default
  angular
    .module('facebook', [])
    .component('facebookComponent', facebookComponent)
    .controller('facebookController', facebookController)
    .service('facebookService', facebookService)
    .name
