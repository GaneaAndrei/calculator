let firstOperator=''
let secondOperator=''
let operator=''
let result=''
const numberButton=document.querySelectorAll('.number');
const operandButton=document.querySelectorAll('.operator');
const display=document.getElementById('display');
const equal=document.querySelector('.equals-key')
const clear=document.querySelector('.clear')



add=(a,b)=>{
    return a+b;
}
subtract=(a,b)=>{
    return a-b;
}
multiply=(a,b)=>{
    return a*b;
}
divide=(a,b)=>{
    return b === 0 ? 'Cannot divide by zero' : a / b;
}


operate =(num1,num2,operand)=>{

switch(operand)
{
    case "+":
        return add(num1,num2);
    case "-":
        return subtract(num1,num2);
    case "*":
        return multiply(num1,num2);
    case "/":
        return divide(num1,num2)        
}
}



numberButton.forEach(number => {
    number.addEventListener("click", e => {
        if (operator === "") { // Read first number if no operator set yet
            firstOperator += e.target.innerText;
            display.textContent=firstOperator
            console.log(firstOperator)
        } else { // Read second number
            secondOperator += e.target.innerText;
            display.textContent=secondOperator
            console.log(secondOperator)
        }
    });
});


operandButton.forEach(op => {
    op.addEventListener("click", e => {
        operator = e.target.innerText;
        display.textContent+=operator
        console.log(operator)
        // If equals operator, perform operation
    });
});

equal.addEventListener('click', function() {
    displayResult();
  });

  function displayResult(){
 
    result=operate(parseFloat(firstOperator),parseFloat(secondOperator),operator)
    console.log(result)
    display.textContent=result
    firstOperator=result
    secondOperator=''
    
  }

  clear.addEventListener('click',function(){
    display.textContent=''
    firstOperator=''
    secondOperator=''
    operator=''
  })