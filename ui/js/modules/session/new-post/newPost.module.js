import newPostComponent from './newPost.component.js'
import newPostController from './newPost.controller.js'
import newPostService from './newPost.service.js'

export default
  angular
    .module('newPost', ['ngQuill'])
    .component('newPostComponent', newPostComponent)
    .controller('newPostController', newPostController)
    .service('newPostService', newPostService)
    .name
