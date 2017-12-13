const listController = ['listService', '$state', '$rootScope', '$sce', function (listService, $state, $rootScope, $sce) {

    this.listOfArticles = [
        {
            date: 'December 12th 2017',
            title: 'Why Goldfish Are People',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec odio mi, aliquam pellentesque porttitor sollicitudin, fringilla et quam. Nullam lobortis, felis ac iaculis ultrices, nisl risus iaculis augue, quis imperdiet lorem diam sed nulla. Curabitur in libero vitae urna viverra accumsan pharetra vel tellus. Nam interdum enim id magna eleifend, id malesuada tortor accumsan. Cras a nulla ligula. Donec hendrerit sagittis nunc, quis faucibus nisi viverra cursus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras vel varius turpis. Praesent ante velit, sollicitudin sit amet suscipit eu, egestas in lectus. Cras vehicula massa ut ex venenatis ullamcorper. Vivamus tortor odio, accumsan non quam sed, vestibulum laoreet augue. Aliquam bibendum malesuada porttitor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc eget odio placerat justo interdum mollis ac ac dolor. Morbi sollicitudin magna dui, ac ornare nulla dignissim sed. Cras vitae sapien porttitor, dictum purus sed, fermentum urna.'
        },
        {
            date: 'December 12th 2017',
            title: 'Why People Are Goldfish',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec odio mi, aliquam pellentesque porttitor sollicitudin, fringilla et quam. Nullam lobortis, felis ac iaculis ultrices, nisl risus iaculis augue, quis imperdiet lorem diam sed nulla. Curabitur in libero vitae urna viverra accumsan pharetra vel tellus. Nam interdum enim id magna eleifend, id malesuada tortor accumsan. Cras a nulla ligula. Donec hendrerit sagittis nunc, quis faucibus nisi viverra cursus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras vel varius turpis. Praesent ante velit, sollicitudin sit amet suscipit eu, egestas in lectus. Cras vehicula massa ut ex venenatis ullamcorper. Vivamus tortor odio, accumsan non quam sed, vestibulum laoreet augue. Aliquam bibendum malesuada porttitor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc eget odio placerat justo interdum mollis ac ac dolor. Morbi sollicitudin magna dui, ac ornare nulla dignissim sed. Cras vitae sapien porttitor, dictum purus sed, fermentum urna.'
        },
        {
            date: 'December 12th 2017',
            title: 'Why Goldfish Are Apples',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec odio mi, aliquam pellentesque porttitor sollicitudin, fringilla et quam. Nullam lobortis, felis ac iaculis ultrices, nisl risus iaculis augue, quis imperdiet lorem diam sed nulla. Curabitur in libero vitae urna viverra accumsan pharetra vel tellus. Nam interdum enim id magna eleifend, id malesuada tortor accumsan. Cras a nulla ligula. Donec hendrerit sagittis nunc, quis faucibus nisi viverra cursus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras vel varius turpis. Praesent ante velit, sollicitudin sit amet suscipit eu, egestas in lectus. Cras vehicula massa ut ex venenatis ullamcorper. Vivamus tortor odio, accumsan non quam sed, vestibulum laoreet augue. Aliquam bibendum malesuada porttitor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc eget odio placerat justo interdum mollis ac ac dolor. Morbi sollicitudin magna dui, ac ornare nulla dignissim sed. Cras vitae sapien porttitor, dictum purus sed, fermentum urna.'
        },
        {
            date: 'December 12th 2017',
            title: 'Why Goldfish Are Cats',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec odio mi, aliquam pellentesque porttitor sollicitudin, fringilla et quam. Nullam lobortis, felis ac iaculis ultrices, nisl risus iaculis augue, quis imperdiet lorem diam sed nulla. Curabitur in libero vitae urna viverra accumsan pharetra vel tellus. Nam interdum enim id magna eleifend, id malesuada tortor accumsan. Cras a nulla ligula. Donec hendrerit sagittis nunc, quis faucibus nisi viverra cursus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras vel varius turpis. Praesent ante velit, sollicitudin sit amet suscipit eu, egestas in lectus. Cras vehicula massa ut ex venenatis ullamcorper. Vivamus tortor odio, accumsan non quam sed, vestibulum laoreet augue. Aliquam bibendum malesuada porttitor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc eget odio placerat justo interdum mollis ac ac dolor. Morbi sollicitudin magna dui, ac ornare nulla dignissim sed. Cras vitae sapien porttitor, dictum purus sed, fermentum urna.'
        },
        {
            date: 'December 12th 2017',
            title: 'Why Goldfish Are Dogs',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec odio mi, aliquam pellentesque porttitor sollicitudin, fringilla et quam. Nullam lobortis, felis ac iaculis ultrices, nisl risus iaculis augue, quis imperdiet lorem diam sed nulla. Curabitur in libero vitae urna viverra accumsan pharetra vel tellus. Nam interdum enim id magna eleifend, id malesuada tortor accumsan. Cras a nulla ligula. Donec hendrerit sagittis nunc, quis faucibus nisi viverra cursus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras vel varius turpis. Praesent ante velit, sollicitudin sit amet suscipit eu, egestas in lectus. Cras vehicula massa ut ex venenatis ullamcorper. Vivamus tortor odio, accumsan non quam sed, vestibulum laoreet augue. Aliquam bibendum malesuada porttitor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc eget odio placerat justo interdum mollis ac ac dolor. Morbi sollicitudin magna dui, ac ornare nulla dignissim sed. Cras vitae sapien porttitor, dictum purus sed, fermentum urna.'
        },
        {
            date: 'December 12th 2017',
            title: 'Whiskey Widom Title',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec odio mi, aliquam pellentesque porttitor sollicitudin, fringilla et quam. Nullam lobortis, felis ac iaculis ultrices, nisl risus iaculis augue, quis imperdiet lorem diam sed nulla. Curabitur in libero vitae urna viverra accumsan pharetra vel tellus. Nam interdum enim id magna eleifend, id malesuada tortor accumsan. Cras a nulla ligula. Donec hendrerit sagittis nunc, quis faucibus nisi viverra cursus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras vel varius turpis. Praesent ante velit, sollicitudin sit amet suscipit eu, egestas in lectus. Cras vehicula massa ut ex venenatis ullamcorper. Vivamus tortor odio, accumsan non quam sed, vestibulum laoreet augue. Aliquam bibendum malesuada porttitor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc eget odio placerat justo interdum mollis ac ac dolor. Morbi sollicitudin magna dui, ac ornare nulla dignissim sed. Cras vitae sapien porttitor, dictum purus sed, fermentum urna.'
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

	this.trustAsHtml = (content) => {
        console.log(content)
		return $sce.trustAsHtml(content)
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