(function () {
'use strict';

angular.module('RomanNumeralQuiz')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider

  // Quiz
  .state('quiz', {
    url: '/',
    templateUrl: 'src/templates/quiz.template.html',
    controller: 'QuizController as quiz'
  })

  // History
  .state('history', {
    url: '/history',
    templateUrl: 'src/templates/history.template.html',
    controller: 'HistoryController as history'
  })

  .state('use', {
    url: '/use',
    templateUrl: 'src/templates/use.template.html'
  });
}

})();
