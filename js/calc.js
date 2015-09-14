'use-strict';
//validate numbers
//validate operators
//perform the calculation

// $(function(){

function Calculator() {

  var that = this

  $('#equals').click(function(){
    number1 = $('#number1').val();
    number2 = $('#number2').val();
    operator = $('#operation').val();
      if (that.numbersValidate() && that.operatorValidate() ){
        var calculatorResult = that.performCalculation()
        $('#result').text(calculatorResult);
      }
    });

  // .bind(this)

  //grab your values using JQ
  // Calculator.prototype.number1 = function(){ return $('#number1').val();}
  // Calculator.prototype.number2 = function(){ return $('#number2').val();}
  // Calculator.prototype.operator = function(){ return $('#operation').val();}
  // debugger;
  //remember to return the value

  //validate numbers
  Calculator.prototype.numbersValidate = function(){
    // number1 = $('#number1').val();
    // number2 = $('#number2').val();
    if ( isNaN(number1) || isNaN(number2))  {
      $('#result').text('Sorry, one of those is not a valid number!');
      return false;
    }
    else
    {
      return true;
    };
  }

  //validate operators
  Calculator.prototype.operatorValidate = function(){
    if (operator == '+' || operator == '/' || operator == '-' || operator == '*') {
      return true;
    }
    else {  $('#result').text('Sorry, not a valid operation!');
      return false;
    }
  }

  //perform the calculation
  Calculator.prototype.performCalculation = function(){
    if (operator == '+') { $('#result').text(Number(number1) + Number(number2)) }
    else if (operator == '-')  { $('#result').text(number1 - number2)}
    else if (operator == '*') { $('#result').text(number1 * number2)}
    else if (operator == '/') { $('#result').text(number1 / number2) }
    else { $('#result').text('Cannot calculate - CRAZY ERRORRRRR!!!') }
}
}
