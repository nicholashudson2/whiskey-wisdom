const playerController = ['playerService', '$state', '$scope', function (playerService, $state, $scope) {

    this.playerService = playerService
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

    var ckeditorField = function (key) {
		return [{
			className: "col-md-12",
			"type": "ckeditor",
			"key": key
		}];
	};

	$scope.field_name = ckeditorField("my_model_key");

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
        playerService.postNewArticle($scope.content, $scope.display.enabled, false)
            .then($state.go('session.list', {}, { reload: 'session.list' }))
    }
}]

export default playerController