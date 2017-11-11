const sessionService = ['$http', 'apiUrl', function ($http, apiUrl) {

    this.$http = $http
    this.apiUrl = apiUrl

}]

export default sessionService