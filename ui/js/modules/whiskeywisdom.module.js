/**
 * Imports modules containing state information
 */
import interceptors from './interceptors/interceptors.module'
import login from './login/login.module'

import session from './session/session.module'
import sessionList from './session/list/list.module'
import sessionArticle from './session/article/article.module'
import sessionNewPost from './session/new-post/newPost.module'
import sessionFacebook from './session/facebook/facebook.module'
import sessionTwitter from './session/twitter/twitter.module'
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
      'ui.router',
      'ezfb',

      interceptors,
      login,
      session,
      sessionList,
      sessionArticle,
      sessionNewPost,
      sessionFacebook,
      sessionTwitter
    ])
    .config(['$stateProvider', '$urlRouterProvider', '$httpProvider', 'ezfbProvider',
      function ($stateProvider, $urlRouterProvider, $httpProvider, ezfbProvider) {

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

        const facebookState = {
          name: 'session.facebook',
          url: '/facebook',
          component: 'facebookComponent'
        }

        const twitterState = {
          name: 'session.twitter',
          url: '/twitter',
          component: 'twitterComponent'
        }

        $stateProvider.state(sessionState)
          .state(listState)
          .state(articleState)
          .state(newPostState)
          .state(facebookState)
          .state(twitterState)

        $urlRouterProvider.otherwise('/session/list')

        $httpProvider.interceptors.push('interceptorFactory')

        // ezfb settings
        ezfbProvider.setInitParams({
          appId: 'whiskey-wisdom',
          version: 'v2.4'
        })
      }
    ])
    .run(['$rootScope', '$state', '$cookieStore', 'loginService', '$window',
      function ($rootScope, $state, $cookieStore, loginService, $window) {

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
      
      // const initializeFacebook = function (d, s, id) {
      //   var js, fjs = d.getElementsByTagName(s)[0];
      //   if (d.getElementById(id)) return;
      //   js = d.createElement(s); js.id = id;
      //   js.src = 'https://connect.facebook.net/en_US/sdk.js';
      //   fjs.parentNode.insertBefore(js, fjs);
      // }
      // initializeFacebook(document, 'script', 'facebook-jssdk')
    }])
    .constant('apiUrl', apiUrl)
    .name