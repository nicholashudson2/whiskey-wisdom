const articleController = ['articleService', '$state', function (articleService, $state) {

    this.articleService = articleService
    this.$state = $state

}]

export default articleController