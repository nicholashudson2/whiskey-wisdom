const newPostController = ['newPostService', '$state', '$scope', function (newPostService, $state, $scope) {

    this.newPostService = newPostService
    this.$state = $state
    this.$scope = $scope

    $scope.content = ''

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
        console.log('editor: ', editor)
    }
    $scope.contentChanged = function (editor, html, text, delta, oldDelta, source) {
        $scope.content = html
        console.log('editor: ', editor, 'html: ', html, 'text:', text, 'delta: ', delta, 'oldDelta:', oldDelta, 'source:', source)
    }
    $scope.selectionChanged = function (editor, range, oldRange, source) {
        console.log('editor: ', editor, 'range: ', range, 'oldRange:', oldRange, 'source:', source)
    }
    $scope.saveClick = () => {
        console.log($scope.content)
        console.log($scope.display.enabled)
        newPostService.postNewArticle($scope.content, $scope.display.enabled, false)
            .then($state.go('session.list'))
    }
}]

export default newPostController