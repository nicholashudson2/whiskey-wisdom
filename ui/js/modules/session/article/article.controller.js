const articleController = ['articleService', '$state', '$rootScope', function (articleService, $state, $rootScope) {

    this.currentArticle = {
        title: '',
        synopsis: ''
    }

    this.initializeArticle = () => {
        if($rootScope.selectedArticle === undefined) {
            $state.go('session.list')
        }
        else {
            this.currentArticle = $rootScope.selectedArticle
        }
    }

    this.initializeArticle()

}]

export default articleController