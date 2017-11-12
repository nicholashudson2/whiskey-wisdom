const listController = ['listService', '$state', function (listService, $state) {

    this.listService = listService
    this.$state = $state

    this.listOfEpisodes = [
        {
            title: 'Episode 1: Talking about stuff',
            synopsis: 'We are talking about lots and lots of stuff. Blah blah blah blah. Talking talking talking, blah blah blah blah blah.'
        },
        {
            title: 'Episode 2: Talking about other stuff',
            synopsis: 'We are talking about lots and lots of stuff. Blah blah blah blah. Talking talking talking, blah blah blah blah blah.'
        },
        {
            title: 'Episode 3: Talking about other stuff',
            synopsis: 'We are talking about lots and lots of stuff. Blah blah blah blah. Talking talking talking, blah blah blah blah blah.'
        },
        {
            title: 'Episode 4: Talking about other stuff',
            synopsis: 'We are talking about lots and lots of stuff. Blah blah blah blah. Talking talking talking, blah blah blah blah blah.'
        }
    ]

}]

export default listController