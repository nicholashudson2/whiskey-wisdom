const newPostService = ['$http', 'apiUrl', function ($http, apiUrl) {

    this.$http = $http
    this.apiUrl = apiUrl

    this.postNewArticle = (article, active, deleted) => {
        this.$http.put(`${this.apiUrl}/article/new`, { 'content' : article, 'active' : active, 'deleted' : deleted, 'id' : 0 })
    }

}]

export default newPostService