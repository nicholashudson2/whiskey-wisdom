/* @ngInject */
class ListController {

    constructor(listService, $state) {
        this.listService = listService
        this.$state = $state
    }

}

export default ListController