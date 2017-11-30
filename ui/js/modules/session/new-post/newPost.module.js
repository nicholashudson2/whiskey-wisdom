import newPostComponent from './newPost.component.js'
import newPostController from './newPost.controller.js'
import newPostService from './newPost.service.js'

export default
  angular
    .module('newPost', ['ngQuill'])
    .component('newPostComponent', newPostComponent)
    .controller('newPostController', newPostController, [
        '$scope',
        '$timeout',
        function ($scope, $timeout) {
          $scope.title = 'Quill works'
          $scope.model = ''
          $scope.readOnly = false
          $scope.test = ''
          $scope.customOptions = [{
            import: 'attributors/style/size',
            whitelist: ['14', '16', '18', 'small', 'large', 'huge']
          }]
          $scope.customModules = {
            toolbar: [
              [{'size': [false, '14', '16', '18']}]
            ]
          }
          $scope.editorCreated = function (editor) {
            console.log(editor)
          }
          $scope.contentChanged = function (editor, html, text, delta, oldDelta, source) {
            console.log('editor: ', editor, 'html: ', html, 'text:', text, 'delta: ', delta, 'oldDelta:', oldDelta, 'source:', source)
          }
          $scope.selectionChanged = function (editor, range, oldRange, source) {
            console.log('editor: ', editor, 'range: ', range, 'oldRange:', oldRange, 'source:', source)
          }
        }
      ])
    .service('newPostService', newPostService)
    .config(['ngQuillConfigProvider', function (ngQuillConfigProvider) {
      ngQuillConfigProvider.set(null, null, 'custom placeholder')
    }])
    .name
