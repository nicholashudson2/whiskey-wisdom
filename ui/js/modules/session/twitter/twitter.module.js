import twitterComponent from './twitter.component.js'
import twitterController from './twitter.controller.js'
import twitterService from './twitter.service.js'

export default
  angular
    .module('twitter', [])
    .component('twitterComponent', twitterComponent)
    .controller('twitterController', twitterController)
    .service('twitterService', twitterService)
    .name
