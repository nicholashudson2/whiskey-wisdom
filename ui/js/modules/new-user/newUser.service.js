const newUserService = ['$http', 'apiUrl', '$resource', function ($http, apiUrl, $resource) {

    this.$http = $http
    this.apiUrl = apiUrl
    this.$resource = $resource

	this.registerNewUser = () => {
		if(!this.user || !this.user.credentials || !this.user.credentials.userLogin || !this.user.credentials.password || !this.user.profile || !this.user.profile.email){
			alert('One or more required fields is missing or invalid. Please try again.');
			return
		}
		sessionStorage.setItem('userLogin',this.user.credentials.userLogin);
		sessionStorage.setItem('password',this.user.credentials.password);
		return $http.post('http://localhost:8090/users', this.user);


		// {
		// 	"id": 0,
		// 	"name": "string",
		// 	"password": "string",
		// 	"roles": [
		// 	"string"
		// ],
		// 	"username": "string"
		// }


	}

	this.user = (user, pass) => {
		return $resource(`${this.apiUrl}/home/:action`, {}, {
			authenticate: {
				method: 'POST',
				params: {
					'action': 'register',
					'name': name,
					'username': user,
					'password': pass
				},
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
			}
		})
	}

}]

export default newUserService