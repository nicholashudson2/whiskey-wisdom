const articleController = ['articleService', '$state', '$rootScope', '$sce', function (articleService, $state, $rootScope, $sce) {

    this.currentArticle = {
        title: '',
        content: ''
    }

    this.initializeArticle = () => {
        if($rootScope.selectedArticle === undefined) {
            $state.go('session.list')
        }
        else {
            this.currentArticle = $rootScope.selectedArticle
        }
    }

    this.trustAsHtml = (content) => {
        console.log(content)
        return $sce.trustAsHtml(content)
    }

    this.initializeArticle()

}]

export default articleController