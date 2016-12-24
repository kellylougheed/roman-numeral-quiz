(function () {
'use strict';

angular.module('RomanNumeralQuiz')
.controller('RomanNumeralController', RomanNumeralController)

RomanNumeralController.$inject = ['RomanNumeralConverterService'];

  function RomanNumeralController(RomanNumeralConverterService) {
    var controller = this;

    controller.arabicNumber = RomanNumeralConverterService.getArabicNumber();
    controller.answer = RomanNumeralConverterService.getAnswer();
    controller.verdict = RomanNumeralConverterService.getVerdict();
    controller.correctAnswer = RomanNumeralConverterService.getCorrectAnswer();

    controller.reset = function() {
      RomanNumeralConverterService.reset();
      controller.update();
      controller.arabicNumber = RomanNumeralConverterService.getArabicNumber();
      controller.answer = "";
    }

    controller.checkAnswer = function(arabicNumber, answer) {
        RomanNumeralConverterService.checkAnswer(arabicNumber, answer);
        controller.update();
    }

    controller.update = function() {
      controller.verdict = RomanNumeralConverterService.getVerdict();
      controller.correctAnswer = RomanNumeralConverterService.getCorrectAnswer();
    }

  }

})();
