// DECLARING/ASSIGNING BUTTONS

const numValues = document.querySelectorAll(".butt");
const operatorsVar = document.querySelectorAll(".buttOp");
const actVar = document.querySelectorAll(".buttAct");

const screen = document.querySelector(".screen");

// const ac = document.querySelector(".ac");
// const c = document.querySelector(".c");
// const sev = document.querySelector(".sev");
// const eig = document.querySelector(".eig");
// const nin = document.querySelector(".nin");
// const fou = document.querySelector(".fou");
// const fiv = document.querySelector(".fiv");
// const six = document.querySelector(".six");
// const one = document.querySelector(".one");
// const two = document.querySelector(".two");
// const thr = document.querySelector(".thr");
// const zer = document.querySelector(".zer");
// const dot = document.querySelector(".dot");
// const equalVar = document.querySelector(".equal");
// const divideVar = document.querySelector(".divide");
// const multiplyVar = document.querySelector(".multiply");
// const substractVar = document.querySelector(".substract");
// const sumVar = document.querySelector(".sum");



console.log(numValues);

// ACTIONS FUNCTIONS

const numScreen = function(a){   
    currentVal += a;
    screen.textContent = currentVal;
    // console.log(currentVal)

}

const actions = function(a){
    switch(a){
        case "AC":
            currentVal = "";
            screen.textContent = currentVal;
            break;
        case "C":
            currentVal = currentVal.substring(0, currentVal.length-1);
            // console.log(currentVal)
            screen.textContent = currentVal;
            break;
        case "=":  
            let sendVal = currentVal.split(" ");
            // console.log(...sendVal);
            currentVal = operate(...sendVal);
            screen.textContent = currentVal;
            // console.log(currentVal);
            break;
    }
}

const operatives = function(a){
      
    let array = Array.from(currentVal);  //checks the array without including the initial " - " in case of neg. number
    array.shift(); //remove possible initial space separator
    array.shift(); //remove ' - ' from negative numbers
    // console.log(array)
    // console.log("." +currentVal+".");
    if (array.includes("+") || array.includes('-') || array.includes('*') || array.includes('/')){
        // console.log("WORKING")
        let sendVal = currentVal.split(" ");
        currentVal = operate(...sendVal);
        currentVal += (" " +a+ " ");
        screen.textContent = currentVal;
    } else{
    // console.log("NOT WORKING")
    currentVal += (" " +a+ " ");
    array.push(a);
    screen.textContent = currentVal;
    }

}

// // EVENT LISTENERS

numValues.forEach (button => button.addEventListener('click', () => {
    numScreen(button.textContent);
}))

actVar.forEach (button => button.addEventListener('click', () => {
    actions(button.textContent);
}))

operatorsVar.forEach (button => button.addEventListener('click', () => {
    operatives(button.textContent);
}))


// STORE VALUES

let currentVal = "";
// let screenVal = "";


// SUM
const sum = function(inputs) {
    let total = inputs[0];
     for (let i = 1; i < inputs.length; i++){
        total +=inputs[i];
    } let checking = total.toFixed(2);              
    let checkers = checking.toString().slice(-1);
    if (total % 1 == 0){                                     //add decimal points, only if number has decimals
        return total.toString();                            
    } else if (total % 1 != 0 && checkers == 0){             //adds 1 decimal point only if the 2nd decimal point is 0
        total = total.toFixed(1);
        return total.toString();
    } else{                                                  //add decimal points, only if number has decimals    
    total = total.toFixed(2);                                
    return total.toString();                                 
    }
};

//SUBSTRACT
const substract = function(inputs) {
	let total = inputs[0];
    for (let i = 1; i < inputs.length; i++){
        total -=inputs[i];
    } let checking = total.toFixed(2);              
    let checkers = checking.toString().slice(-1);
    if (total % 1 == 0){                                     //add decimal points, only if number has decimals
        return total.toString();                            
    } else if (total % 1 != 0 && checkers == 0){             //adds 1 decimal point only if the 2nd decimal point is 0
        total = total.toFixed(1);
        return total.toString();
    } else{                                                  //add decimal points, only if number has decimals    
    total = total.toFixed(2);                                
    return total.toString();                                 
    }
};

//MULTIPLY
const multiply = function(inputs) {
    let total = inputs[0];
    for (let i = 1; i < inputs.length; i++){
        total *= inputs[i];
    } let checking = total.toFixed(2);              
    let checkers = checking.toString().slice(-1);
    if (total % 1 == 0){                                     //add decimal points, only if number has decimals
        return total.toString();                            
    } else if (total % 1 != 0 && checkers == 0){             //adds 1 decimal point only if the 2nd decimal point is 0
        total = total.toFixed(1);
        return total.toString();
    } else{                                                  //add decimal points, only if number has decimals    
    total = total.toFixed(2);                                
    return total.toString();                                 
    }
};

//DIVIDE
const divide = function(inputs) {
    let total = inputs[0]
    if (inputs[1] == 0){
        total = "can't divide by 0 goof"; //snarky message if user tries to divide by 0
        return total;
    }else{

    for (let i = 1; i < inputs.length; i++){
        total /= inputs[i];
    } 
    let checking = total.toFixed(2);              
    let checkers = checking.toString().slice(-1);
    if (total % 1 == 0){                                     //add decimal points, only if number has decimals
        return total.toString();                            
    } else if (total % 1 != 0 && checkers == 0){             //adds 1 decimal point only if the 2nd decimal point is 0
        total = total.toFixed(1);
        return total.toString();
    } else{                                                  //add decimal points, only if number has decimals    
    total = total.toFixed(2);                                
    return total.toString();                                 
    }
} 

};

//OPERATE
const operate = function(num1, operator, num2){
    let nums = [parseFloat(num1), parseFloat(num2)];
    let result = undefined;
    switch(operator){
        case "+":
            result = sum(nums);
            return result;
        case "-":
            result = substract(nums);
            return result;
        case "/":
            result = divide(nums);
            return result;
        case "*":
            result = multiply(nums);
            return result;
    }
}

  //TESTING
  let teston = [5.3, "+", 5];
  let test = operate(...teston);

  console.log(test);