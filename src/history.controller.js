(function () {
'use strict';

angular.module('RomanNumeralQuiz')
.controller('HistoryController', HistoryController)

HistoryController.$inject = ['RomanNumeralService'];

  function HistoryController(RomanNumeralService) {
    var history = this;

    history.problems = RomanNumeralService.getHistory();
    history.correctCount = RomanNumeralService.getCorrectCount();

  }

})();
