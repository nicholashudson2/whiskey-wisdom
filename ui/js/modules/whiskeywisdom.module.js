/**
 * Imports modules containing state information
 */
import interceptors from './interceptors/interceptors.module'
import login from './login/login.module'

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
    'ngAria',
    'ngAnimate',
    'ngMaterial',
    'ngMessages',
    'ngCookies',
    'ui.router',

    interceptors,
    login,
    session,
    sessionList,
    sessionEpisode
  ])
  .config(['$stateProvider', '$urlRouterProvider', '$httpProvider',
    function ($stateProvider, $urlRouterProvider, $httpProvider) {

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

      $httpProvider.interceptors.push('responseError')
      $httpProvider.interceptors.push('request')
    }
  ])
  .run(['$rootScope', '$cookieStore', function ($rootScope, $cookieStore) {

    $rootScope.$on('$stateChangeStart', function (event) {
      // Checks here to see if a user is logged in etc
      // Can use event.preventDefault() to prevent a state change from happening
    })

    $rootScope.$on('$viewContentLoaded', function (event) {
      delete $rootScope.error
    })

    // Sets the logout function in the utilities service
    $rootScope.logout = function () {
      delete $rootScope.user
      delete $rootScope.accessToken
      $cookieStore.remove('accessToken')
      $state.reload()
    }

    /* Try getting valid user from cookie or go to login page */
    var accessToken = $cookieStore.get('accessToken')
    if (accessToken !== undefined) {
      $rootScope.accessToken = accessToken
      // loginController.getUser()
    }

    $rootScope.initialized = true
  }])
  .constant('apiUrl', apiUrl)
  .name