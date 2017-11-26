const listService = ['$http', 'apiUrl', function ($http, apiUrl) {

    this.$http = $http
    this.apiUrl = apiUrl

    getActiveArticles = () => {
        return this.$http.get(`${this.apiUrl}/all`)
    }

}]

export default listService