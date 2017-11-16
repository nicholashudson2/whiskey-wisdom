const newPostController = ['newPostService', '$state', function (newPostService, $state) {

    this.newPostService = newPostService
    this.$state = $state

}]

export default newPostController