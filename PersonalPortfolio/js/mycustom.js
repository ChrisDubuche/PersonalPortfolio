//Finding the least, greatest, mean, sum and product of 5 numbers entered by user

// 1. Go get my data - located in specified 'ids'
// 2. function calc() handles all of 5 inputs and all 5 math problems

function calc() {

    var num1 = parseInt(document.getElementById("r1input1").value);
    var num2 = parseInt(document.getElementById("r1input2").value);
    var num3 = parseInt(document.getElementById("r1input3").value);
    var num4 = parseInt(document.getElementById("r1input4").value);
    var num5 = parseInt(document.getElementById("r1input5").value);
    var oper = document.getElementById("operators").value;

    if (oper === "+") {   // $('#r1output1').val() = num1 + num2 + num3 + num4 + num5; ---- this is the jQuery version of the javascript below
        document.getElementById("r1output1").value = num1 + num2 + num3 + num4 + num5;
    }
    if (oper === "*") {
        document.getElementById("r1output1").value = num1 * num2 * num3 * num4 * num5;
    }
    if (oper === "/") {
        document.getElementById("r1output1").value = (num1 + num2 + num3 + num4 + num5) / 5;
    }
    if (oper === "<") {
        document.getElementById("r1output1").value = Math.min(num1, num2, num3, num4, num5);
    }
    if (oper === ">") {
        document.getElementById("r1output1").value = Math.max(num1, num2, num3, num4, num5);
    }
}

function factorialize(num) {

    var answer = 1
    var num = parseInt(document.getElementById("r2input1").value);
    innerFunc(num);
    function innerFunc(input) {
        if (input === 0) {
            return answer;
        }
        answer *= num;
        num--;
        if (num > 1) {
            innerFunc(num);
        }
        return answer;
    }
    document.getElementById("r2output2").value = answer;
}

// User inputs any two numbers that interact with one another by divison 
function fizzBuzz() {

    var num01 = parseInt(document.getElementById("r3input1").value);
    var num02 = parseInt(document.getElementById("r3input2").value);
    var output = '';
    for (var i = 1; i <= 100; i++) {

        if (i % num01 == 0 && i % num02 == 0) {
            output += 'FIZZ-BUZZ, ';
        }
        else if (i % num01 == 0) {
            output += 'FIZZ, ';
        }
        else if (i % num02 == 0) {
            output += 'BUZZ, ';
        }
        else {
            output += i + ", ";
        }
    }
    document.getElementById("r3output1").innerHTML = output;
}


function Palindrome() {
    var word = $('#r4input1').val();

    //Use an array to accomplish the reversal
    var revword = word.split('').reverse().join('');

    var magicWord = ' IS NOT ';
    if (word == revword) {
        magicWord = ' IS ';
    }

    var result = word + ' reversed = ' + revword + '. Therefore it <b>' + magicWord + '</b> a palindrome';
    $('#r4output1').html(result);
}