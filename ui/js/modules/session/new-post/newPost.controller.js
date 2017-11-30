const newPostController = ['newPostService', '$state', '$scope', function (newPostService, $state, $scope) {

    this.newPostService = newPostService
    this.$state = $state
    this.$scope = $scope

    $scope.title = 'Whiskey Wisdom: New Post'
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
}]

export default newPostController