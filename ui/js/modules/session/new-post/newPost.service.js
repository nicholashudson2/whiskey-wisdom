const newPostService = ['$http', 'apiUrl', '$resource', function ($http, apiUrl, $resource) {

    this.$http = $http
    this.apiUrl = apiUrl
    this.$resource = $resource

    this.postNewArticle = (article, active, deleted) => {
        return this.$http.post(`${this.apiUrl}/article/new`, { 'content' : article, 'active' : active, 'deleted' : deleted, 'id' : 0 })
        // return $resource(`${this.apiUrl}/home/:action`, {}, {
        //     authenticate: {
        //         method: 'POST',
        //         params: {
        //             'action': 'authenticate',
        //             'username': user,
        //             'password': pass
        //         },
        //         headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        //     }
        // })
    }

}]

export default newPostService