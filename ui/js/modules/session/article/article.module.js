import articleComponent from './article.component.js'
import articleController from './article.controller.js'
import articleService from './article.service.js'

export default
  angular
    .module('article', [])
    .component('articleComponent', articleComponent)
    .controller('articleController', articleController)
    .service('articleService', articleService)
    .name
