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
    'ngResource',
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

      // const postState = {
      //   name: 'session.post',
      //   url: '/post',
      //   component: 'postComponent'
      // }

      $stateProvider.state(sessionState)
                    .state(listState)
                    .state(episodeState)
                    // .state(postState)

      $urlRouterProvider.otherwise('/session/list')

      $httpProvider.interceptors.push('responseError')
      $httpProvider.interceptors.push('request')
    }
  ])
  .run(['$rootScope', '$state', '$cookieStore', 'loginService', function ($rootScope, $state, $cookieStore, loginService) {

    $rootScope.$on('$stateChangeStart', function (event, toState) {
      // If a user tries to naviate to a post creation state they are validated
      if(toState.name === 'session.post' && $rootScope.role !== 'admin') {
        event.preventDefault();
        $state.go('session.list')
      }
    })

    $rootScope.$on('$viewContentLoaded', function (event) {
      delete $rootScope.error
    })

    // Sets the logout function in the utilities service
    $rootScope.logout = function () {
      delete $rootScope.user
      delete $rootScope.accessToken
      $cookieStore.remove('accessToken')
      $rootScope.role = 'guest'
      $state.reload()
    }

    // Try getting valid user from cookie
    var accessToken = $cookieStore.get('accessToken')
    if (accessToken !== undefined) {
      $rootScope.accessToken = accessToken

      loginService.user().retrieve(function (user) {
        $rootScope.user = user
        $rootScope.role = user.role
      })
    } else {
      $rootScope.role = 'guest'
    }

    $rootScope.initialized = true
  }])
  .constant('apiUrl', apiUrl)
  .name