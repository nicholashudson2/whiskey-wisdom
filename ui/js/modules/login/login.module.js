import loginController from './login.controller.js'
import loginService from './login.service.js'

export default
  angular
    .module('login', [])
    .controller('loginController', loginController)
    .service('loginService', loginService)
    .name
