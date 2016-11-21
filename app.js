(function() {
  'use strict';

  angular.module('RomanNumeralQuiz', [])

  .controller('RomanNumeralController', RomanNumeralController)
  .service('RomanNumeralConverterService', RomanNumeralConverterService);

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

  function RomanNumeralConverterService() {
    var service = this;

    service.arabicNumber = getNewNumber();
    service.answer = "";
    service.verdict = "";
    service.correctAnswer = "";

    service.reset = function() {
      service.arabicNumber = getNewNumber();
      service.answer = "";
      service.verdict = "";
      service.correctAnswer = "";
    }

    function getNewNumber() {
      var newNum = Math.floor((Math.random() * 1000) + 1);
      return newNum;
    }

    service.getArabicNumber = function() {
      return service.arabicNumber;
    }

    service.getAnswer = function() {
      return service.answer;
    }

    service.getVerdict = function() {
      return service.verdict;
    }

    service.getCorrectAnswer = function() {
      return service.correctAnswer;
    }

    service.checkAnswer = function(arabicNumber, answer) {
      var correctAnswer = convertToRoman(arabicNumber);
        if (correctAnswer == answer) {
          service.verdict = "Correct!";
        } else if (correctAnswer != answer) {
          service.verdict = "Incorrect!";
          service.correctAnswer = "The correct answer was "+correctAnswer+".";
        }
        console.log(service.verdict);
        console.log(service.correctAnswer);
    }

    function convertToRoman(num) {
      var romanNumeral = "";
      num = Math.floor(num);
      var number = num.toString();
      // To convert the thousand's place
      if (number.length == 4) {
        for (var i = number.charAt(0); i > 0; i--) {
          romanNumeral += "M";
        }
      }
      // To convert the hundred's place
      if (number.length >= 3) {
        var x = number.charAt(number.length - 3);
        if (x >= 5) {
          if (x == 9) {
            romanNumeral += "CM";
          } else {
            romanNumeral += "D"; 
            if (x > 5) {
              for (x; x > 5; x--) {
                romanNumeral += "C";
              }
            }
          } 
        } else if (x == 4) {
          romanNumeral += "CD";
        } else if (x < 4) {
          for (x; x > 0; x--) {
            romanNumeral += "C";
          }
        }
      }
      // To convert the ten's place
      if (number.length >= 2) {
        var y = number.charAt(number.length - 2);
        if (y >= 5) {
          if (y == 9) {
            romanNumeral += "XC";
          } else {
            romanNumeral += "L";
            if (y > 5) {
              for (y; y > 5; y--) {
                romanNumeral += "X";
              }
            }
          }
        } else if (y == 4) {
          romanNumeral += "XL";
        } else if (y < 4) {
          for (y; y > 0; y--) {
            romanNumeral += "X";
          }
        }
      }
      // To convert the one's place
      var z = number.charAt(number.length - 1);
      if (z >= 5) {
        if (z == 9) {
          romanNumeral += "IX";
        } else {
          romanNumeral += "V"; 
          if (z > 5) {
            for (z; z > 5; z--) {
              romanNumeral += "I";
            }
          }
        } 
      } else if (z == 4) {
        romanNumeral += "IV";
      } else if (z < 4) {
        for (z; z > 0; z--) {
          romanNumeral += "I";
        }
      }
     return romanNumeral;
    }

  }

})();
