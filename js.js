// DECLARING/ASSIGNING BUTTONS

const numValues = document.querySelectorAll(".butt");
const operatorsVar = document.querySelectorAll(".buttOp");
const actVar = document.querySelectorAll(".buttAct");
const screen = document.querySelector(".screen");


// ACTIONS FUNCTIONS

const numScreen = function(a){   

    //this code section is to limit the amount of '.' a user can input, only one per 'set' of numbers
    if (a == "."){
        let splitVal = currentVal.split(" ");
        let longitud = splitVal.length;
        let secondSet = splitVal[2];
        //longitud == 3 means we have a first set of numbers, an operand, and a second set of numbers
        //in this case we don't want to limit the number of '.'s according to all, only 2nd set  
        //so user can do (5.5 + 6.5), otherwise the '.' on the second set (6.5) would not be allowed
        if (longitud == 3){
            let checking = Array.from(secondSet);
            for (let i = 0; i < checking.length; i++){
                if (checking[i] == "."){
                    return;
                }
            } currentVal += a;
            screen.textContent = currentVal;   
        //if longitud == 1 we are still adding input to the first set, in which case we limit '.'s amount to 1
        
        }else if(longitud == 1){
            let checking = Array.from(currentVal);
            for (let i = 0; i < checking.length; i++){
                if (checking[i] == "."){
                    return;
                }
            } currentVal += a;
            screen.textContent = currentVal;   
        }     
    }//if user is typing '.' after an operand (for example: (5.5 + .5) it simply works once
    else{
    currentVal += a;
    screen.textContent = currentVal;
}


}

const actions = function(a){
    switch(a){
        case "AC":
            currentVal = "";
            screen.textContent = currentVal;
            break;
        case "C":
            currentVal = currentVal.substring(0, currentVal.length-1);
            screen.textContent = currentVal;
            break;
        case "=":  
            let sendVal = currentVal.split(" ");
            currentVal = operate(...sendVal);
            screen.textContent = currentVal;
            break;
    }
}

const operatives = function(a){
      
    let array = Array.from(currentVal);  //checks the array without including the initial " - " in case of neg. number
    array.shift(); //remove possible initial space separator
    array.shift(); //remove ' - ' from negative numbers

    //check to see if we have an operand, except negative number dash (-500 does not have an operand)
    // if we do, we operate and update screen
    if (array.includes("+") || array.includes('-') || array.includes('*') || array.includes('/')){
        let sendVal = currentVal.split(" ");
        currentVal = operate(...sendVal);
        currentVal += (" " +a+ " ");
        screen.textContent = currentVal;
    } 
    //if we don't, we simply add operand with space before and after
    else{
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
    if (total % 1 == 0){                           //add decimal points, only if number has decimals
        return total.toString();                            
    } else if (total % 1 != 0 && checkers == 0){   //adds 1 decimal point only if the 2nd decimal point is 0
        total = total.toFixed(1);
        return total.toString();
    } else{                                        //add decimal points, only if number has decimals    
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
    if (total % 1 == 0){                            //add decimal points, only if number has decimals
        return total.toString();                            
    } else if (total % 1 != 0 && checkers == 0){    //adds 1 decimal point only if the 2nd decimal point is 0
        total = total.toFixed(1);
        return total.toString();
    } else{                                         //add decimal points, only if number has decimals    
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
    if (total % 1 == 0){                             //add decimal points, only if number has decimals
        return total.toString();                            
    } else if (total % 1 != 0 && checkers == 0){     //adds 1 decimal point only if the 2nd decimal point is 0
        total = total.toFixed(1);
        return total.toString();
    } else{                                          //add decimal points, only if number has decimals    
    total = total.toFixed(2);                                
    return total.toString();                                 
    }
};

//DIVIDE
const divide = function(inputs) {
    let total = inputs[0]
    if (inputs[1] == 0){
        total = "can't divide by 0 goof";            //snarky message if user tries to divide by 0
        return total;
    }else{

    for (let i = 1; i < inputs.length; i++){
        total /= inputs[i];
    } 
    let checking = total.toFixed(2);              
    let checkers = checking.toString().slice(-1);
    if (total % 1 == 0){                             //add decimal points, only if number has decimals
        return total.toString();                            
    } else if (total % 1 != 0 && checkers == 0){     //adds 1 decimal point only if the 2nd decimal point is 0
        total = total.toFixed(1);
        return total.toString();
    } else{                                          //add decimal points, only if number has decimals    
    total = total.toFixed(2);                                
    return total.toString();                                 
    }
} 

};

//OPERATE FUNCTION
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
//   let teston = [5.3, "+", 5];
//   let test = operate(...teston);

//   console.log(test);