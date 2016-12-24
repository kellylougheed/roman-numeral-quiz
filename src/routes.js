(function () {
'use strict';

angular.module('RomanNumeralQuiz')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider

  // Quiz
  .state('home', {
    url: '/',
    templateUrl: 'src/templates/home.template.html',
    controller: 'RomanNumeralController as controller'
  })

  // History
  .state('history', {
    url: '/history',
    templateUrl: 'src/templates/history.template.html',
    controller: 'HistoryController as history'
  });
}

})();
