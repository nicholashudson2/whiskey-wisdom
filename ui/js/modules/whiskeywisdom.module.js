/**
 * Imports modules containing state information
 */
import session from './session/session.module'
  import sessionList from './session/list/list.module'
  import sessionEpisode from './session/episode/episode.module'

import apiUrl from './api.url'  

/**
 * Exports the primary module which defines all states
 */
export default
angular
  .module('whiskeywisdom', [
    'ui.router',

    session,
    sessionList,
    sessionEpisode
  ])
  .config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {

      const sessionState = {
        abstract: true,
        name: 'session',
        url: '/session',
        component: 'sessionComponent'
      }

      const listState = {
        name: 'session.list',
        url: '/list',
        component: 'listComponent'
      }

      const episodeState = {
        name: 'session.episode',
        url: '/episode',
        component: 'episodeComponent'
      }

      $stateProvider.state(sessionState)
                    .state(listState)
                    .state(episodeState)

      $urlRouterProvider.otherwise('/session/list')
    }
  ])
  .constant('apiUrl', apiUrl)
  .name