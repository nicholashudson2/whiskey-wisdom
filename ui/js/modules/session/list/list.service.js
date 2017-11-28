const listService = ['$http', 'apiUrl', function ($http, apiUrl) {

    this.$http = $http
    this.apiUrl = apiUrl

    this.getActiveArticles = () => {
        return this.$http.get(`${this.apiUrl}/episode/all`)
    }

}]

export default listService