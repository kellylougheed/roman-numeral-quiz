(function () {
'use strict';

angular.module('RomanNumeralQuiz')
.controller('QuizController', QuizController)

QuizController.$inject = ['RomanNumeralService'];

  function QuizController(RomanNumeralService) {
    var quiz = this;

    quiz.arabicNumber = RomanNumeralService.getArabicNumber();
    quiz.answer = RomanNumeralService.getAnswer();
    quiz.verdict = RomanNumeralService.getVerdict();
    quiz.correctAnswer = RomanNumeralService.getCorrectAnswer();

    quiz.reset = function() {
      RomanNumeralService.reset();
      quiz.update();
      quiz.arabicNumber = RomanNumeralService.getArabicNumber();
      quiz.answer = "";
    }

    quiz.checkAnswer = function(arabicNumber, answer) {
        RomanNumeralService.checkAnswer(arabicNumber, answer);
        quiz.update();
    }

    quiz.update = function() {
      quiz.verdict = RomanNumeralService.getVerdict();
      quiz.correctAnswer = RomanNumeralService.getCorrectAnswer();
    }

  }

})();
