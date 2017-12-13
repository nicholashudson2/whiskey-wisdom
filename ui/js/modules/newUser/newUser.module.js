import newUserComponent from './newUser.component.js'
import newUserController from './newUser.controller.js'
import newUserService from './newUser.service.js'

export default
  angular
    .module('newUser', [])
    .component('newUserComponent', newUserComponent)
    .controller('newUserController', newUserController)
    .service('newUserService', newUserService)
    .name
