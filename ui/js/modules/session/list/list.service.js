const listService = ['$http', 'apiUrl', function ($http, apiUrl) {

    this.$http = $http
    this.apiUrl = apiUrl

    this.getActiveArticles = () => {
        return this.$http.get(`${this.apiUrl}/article/all`)
    }

}]

export default listService