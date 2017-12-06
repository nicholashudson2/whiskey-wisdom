const listController = ['listService', '$state', '$rootScope', function (listService, $state, $rootScope) {

    this.listOfArticles = [
        {
            title: 'Article 6: Talking about other stuff',
            content: 'Greetings, we are talking about lots and lots of stuff. Blah blah blah blah. Talking talking talking, blah blah blah blah blah.We are talking about lots and lots of stuff. Blah blah blah blah. Talking talking talking, blah blah blah blah blah.We are talking about lots and lots of stuff. Blah blah blah blah. Talking talking talking, blah blah blah blah blah.We are talking about lots and lots of stuff. Blah blah blah blah. Talking talking talking, blah blah blah blah blah.We are talking about lots and lots of stuff. Blah blah blah blah. Talking talking talking, blah blah blah blah blah.We are talking about lots and lots of stuff. Blah blah blah blah. Talking talking talking, blah blah blah blah blah.We are talking about lots and lots of stuff. Blah blah blah blah. Talking talking talking, blah blah blah blah blah.We are talking about lots and lots of stuff. Blah blah blah blah. Talking talking talking, blah blah blah blah blah.'
        },
        {
            title: 'Article 5: Talking about stuff',
            content: 'We are talking about lots and lots of stuff. Blah blah blah blah. Talking talking talking, blah blah blah blah blah.'
        },
        {
            title: 'Article 4: Talking about other stuff',
            content: 'We are talking about lots and lots of stuff. Blah blah blah blah. Talking talking talking, blah blah blah blah blah.We are talking about lots and lots of stuff. Blah blah blah blah. Talking talking talking, blah blah blah blah blah.We are talking about lots and lots of stuff. Blah blah blah blah. Talking talking talking, blah blah blah blah blah.We are talking about lots and lots of stuff. Blah blah blah blah. Talking talking talking, blah blah blah blah blah.We are talking about lots and lots of stuff. Blah blah blah blah. Talking talking talking, blah blah blah blah blah.We are talking about lots and lots of stuff. Blah blah blah blah. Talking talking talking, blah blah blah blah blah.We are talking about lots and lots of stuff. Blah blah blah blah. Talking talking talking, blah blah blah blah blah.We are talking about lots and lots of stuff. Blah blah blah blah. Talking talking talking, blah blah blah blah blah.'
        },
        {
            title: 'Article 3: Talking about other stuff',
            content: 'We are talking about lots and lots of stuff. Blah blah blah blah. Talking talking talking, blah blah blah blah blah.'
        },
        {
            title: 'Article 2: Talking about other stuff',
            content: 'We are talking about lots and lots of stuff. Blah blah blah blah. Talking talking talking, blah blah blah blah blah.'
        },
        {
            title: 'Article 1: Talking about stuff',
            content: 'We are talking about lots and lots of stuff. Blah blah blah blah. Talking talking talking, blah blah blah blah blah.'
        }
    ]

    this.getAllArticles = () => {
        listService.getActiveArticles().then((result) => {
            this.listOfArticles = result.data;
        })
    }

    this.viewArticle = (article) => {
        $rootScope.selectedArticle = article
        $state.go('session.article')
    }

    this.editArticle = (article) => {
        $rootScope.selectedArticle = article
        $state.go('session.article')
    }

    this.moveArticle = (indexOfArticle, direction) => {
        if(direction === 'up') {
            if(this.listOfArticles.length > indexOfArticle) {
                for(let tracker = indexOfArticle - 1; tracker >= 0; tracker--) {
                    if(this.listOfArticles[tracker] !== undefined) {
                        let primaryArticle = this.listOfArticles[indexOfArticle]
                        let secondaryArticle = this.listOfArticles[tracker]

                        this.listOfArticles[indexOfArticle] = secondaryArticle
                        this.listOfArticles[tracker] = primaryArticle
                        break;
                    }
                }
            }
        } else if(direction ==='down') {
            if(this.listOfArticles.length > indexOfArticle) {
                for(let tracker = indexOfArticle + 1; tracker < this.listOfArticles.length; tracker++) {
                    if(this.listOfArticles[tracker] !== undefined) {
                        let primaryArticle = this.listOfArticles[indexOfArticle]
                        let secondaryArticle = this.listOfArticles[tracker]

                        this.listOfArticles[indexOfArticle] = secondaryArticle
                        this.listOfArticles[tracker] = primaryArticle
                        break;
                    }
                }
            }
        }
    }

    this.deactivateArticle = (indexOfArticle) => {
        this.listOfArticles.splice(indexOfArticle, 1)
    }

    this.deleteArticle = (indexOfArticle) => {
        this.listOfArticles.splice(indexOfArticle, 1)
    }

    this.getAllArticles()



}]

export default listController