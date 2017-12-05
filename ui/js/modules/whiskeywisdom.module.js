/**
 * Imports modules containing state information
 */
import interceptors from './interceptors/interceptors.module'
import login from './login/login.module'

import session from './session/session.module'
import sessionList from './session/list/list.module'
import sessionArticle from './session/article/article.module'
import sessionNewPost from './session/new-post/newPost.module'
import '../script.js'
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
      'ngSanitize',
      'ui.router',
      'ngQuill',

      interceptors,
      login,
      session,
      sessionList,
      sessionArticle,
      sessionNewPost
    ])
    .config(['$stateProvider', '$urlRouterProvider', '$httpProvider', 'ngQuillConfigProvider',
      function ($stateProvider, $urlRouterProvider, $httpProvider, ngQuillConfigProvider) {
        const sessionState = {
          abstract: true,
          name: 'session',
          url: '/session',
          component: 'sessionComponent'
        }

        ngQuillConfigProvider.set(null, null, 'custom placeholder')

        const listState = {
          name: 'session.list',
          url: '/list',
          component: 'listComponent'
        }

        const articleState = {
          name: 'session.article',
          url: '/article',
          component: 'articleComponent'
        }

        const newPostState = {
          name: 'session.new-post',
          url: '/new-post',
          component: 'newPostComponent'
        }

        const loginState = {
          name: 'session.login',
          url: '/login',
          component: 'loginComponent'
        }

        $stateProvider.state(sessionState)
          .state(listState)
          .state(articleState)
          .state(newPostState)
          .state(loginState)

        $urlRouterProvider.otherwise('/session/new-post')

        $httpProvider.interceptors.push('interceptorFactory')

        // ngQuillConfigProvider.set(null, null, 'new post editor')
        ngQuillConfigProvider.set(null, 'snow', 'new post editor', null, document.body, false)
      }
    ])
    .run(['$rootScope', '$state', '$cookieStore', 'loginService', '$window',
      function ($rootScope, $state, $cookieStore, loginService, newPostService, $window) {

      $rootScope.$on('$stateChangeStart', function (event, toState) {
        // If a user tries to navigate to a post creation state they are validated
        if (toState.name === 'session.post' && $rootScope.role !== 'admin') {
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
        $rootScope.roles = []
        $rootScope.roles.push('ROLE_GUEST')
        $state.reload()
      }

      // Try getting valid user from cookie
      var accessToken = $cookieStore.get('accessToken')
      if (accessToken !== undefined) {
        $rootScope.accessToken = accessToken

        loginService.user().retrieve(function (user) {
          $rootScope.user = user
          $rootScope.roles = user.roles
        })
      } else {
        $rootScope.roles = []
        $rootScope.roles.push('ROLE_GUEST')
      }

      $rootScope.initialized = true
    }])
    .constant('apiUrl', apiUrl)
    .name