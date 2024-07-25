var temp=0;
function counter(){
    if(temp== 1){
        var num = document.querySelector("#cal");
        num.innerHTML = "";
        temp=0;
    }
   
}
function my_message_1() {
    counter();
    var num = document.querySelector("#cal");
    num.innerHTML += '1';
   
}
function my_message_2() {
    counter();
    var num = document.querySelector("#cal");
    num.innerHTML += '2';

}
function my_message_3() {
    counter();
    var num = document.querySelector("#cal");
    num.innerHTML += '3';
  
}
function my_message_4() {
    counter();
    var num = document.querySelector("#cal");
    num.innerHTML += '4';
    
}
function my_message_5() {
    counter();
    var num = document.querySelector("#cal");
    num.innerHTML += '5';
   
}
function my_message_6() {
    counter();
    var num = document.querySelector("#cal");
    num.innerHTML += '6';
   
}
function my_message_7() {
    counter();
    var num = document.querySelector("#cal");
    num.innerHTML += '7';
    
}
function my_message_8() {
    counter();
    var num = document.querySelector("#cal");
    num.innerHTML += '8';
   
}
function my_message_9() {
    counter();
    var num = document.querySelector("#cal");
    num.innerHTML += '9';
   
}
function my_message_plus() {
 
    var num = document.querySelector("#cal");
    num.innerHTML += ' + ';
}
function my_message_minus() {
  
    var num = document.querySelector("#cal");
    num.innerHTML += ' - ';
}
function my_message_multiply() {
   
    var num = document.querySelector("#cal");
    num.innerHTML += ' x ';
}
function my_message_0() {
    counter();
    var num = document.querySelector("#cal");
    num.innerHTML += '0';
}
function my_message_divide() {
   
    var num = document.querySelector("#cal");
    num.innerHTML += ' ÷ ';
}
function my_message_dot() {
  
    var num = document.querySelector("#cal");
    num.innerHTML += '.';
}


function my_message_equal() {
    var num = document.querySelector("#cal");
    var total = num.innerHTML.trim();
    var array = new Array();
    array = total.split(' ');
    var calculation;
    var operand1 = parseFloat(array[0]);
    var operator = array[1];
    var operand2 = parseFloat(array[2]);
    if (operator == '+') {
        calculation = operand1 + operand2;
    } else if (operator == '-') {
        calculation = operand1 - operand2;
    } else if (operator == 'x') {
        calculation = operand1 * operand2;
    } else if (operator == '÷') {
        calculation = operand1 / operand2;
    }
    num.innerHTML = calculation;
    temp = 1;
}


function my_message_del() {
    var num = document.querySelector("#cal");
    num.innerHTML = "";

}


function my_message_ac() {
    var num = document.querySelector("#cal");
    var total = num.innerHTML.trim();
    var array = new Array();
    array = total.split('');
    array.pop();
    var m=array.length;
    num.innerHTML ="";
    for(var i=0;i<m;i++){
        num.innerHTML += array[i];
    }
    
}