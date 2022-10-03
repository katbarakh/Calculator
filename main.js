let first = document.querySelector(".first");
let second = document.querySelector(".second");
let tempResult = document.querySelector(".result")
let numbers = document.querySelectorAll(".number");
let operation = document.querySelectorAll(".operation");
let equal = document.querySelector(".equal");
let clear = document.querySelector(".C");
let clearLast = document.querySelector(".CE");

let display1 = "";
let display2 = "";
let result = null;
let lastOperation = "";
let haveDot = false;

numbers.forEach(number =>{
    number.addEventListener("click", (e)=>{
        if(e.target.innerText === "." && !haveDot){
            haveDot = true;
        }
        else if (e.target.innerText === "." && haveDot){
            return;
        }
        display2 += e.target.innerText;
        second.innerText = display2;
    })
});

operation.forEach(operation => {
    operation.addEventListener("click", (e) => {
        if(!display2) return;
        haveDot = false;
        const operationName = e.target.innerText;
        if(display1 && display2 && lastOperation){
            solveSample();
        }
        else{
            result = parseFloat(display2)
        }
        clearAction(operationName)
        lastOperation = operationName
    })
});

function clearAction(name = ""){
    display1 += display2 + " " + name + " ";
    first.innerText = display1;
    second.innerText = "";
    display2 = "";
    tempResult.innerText = result;
}

function solveSample(){
    if(lastOperation === "x"){
        result = parseFloat(result) * parseFloat(display2);
    }
    else if(lastOperation === "+"){
        result = parseFloat(result) + parseFloat(display2);
    }
    else if(lastOperation === "-"){
        result = parseFloat(result) - parseFloat(display2);
    }
    else if(lastOperation === "/"){
        result = parseFloat(result) / parseFloat(display2);
    }
    else if(lastOperation === "%"){
        result = parseFloat(result) % parseFloat(display2);
    }
}
equal.addEventListener("click", (e)=>{
    if(!display2 || !display1) return;
    haveDot = false;
    solveSample();
    clearAction();
    second.innerText = result;
    tempResult.innerText = "";
    display2 = result;
    display1 = "";
});

clear.addEventListener("click", (e)=>{
    display1 = "";
    display2 = "";
    first.innerText = "0";
    second.innerText = "0";
    result = "";
    tempResult.innerText = "0";
})

clearLast.addEventListener("click", (e)=>{
    second.innerText = "";
    display2 = "";
})

window.addEventListener("keydown", (e) => {
    if(
        e.key === "0" ||
        e.key === "1" ||
        e.key === "2" ||
        e.key === "3" ||
        e.key === "4" ||
        e.key === "5" ||
        e.key === "6" ||
        e.key === "7" ||
        e.key === "8" ||
        e.key === "9" ||
        e.key === "." 
    ){
        clickButton(e.key)
    }
    else if (e.key === "+" || e.key === "-" || e.key === "/" || e.key === "%"){
        clickOperation(e.key)
    }
    else if (e.key === "*"){
        clickOperation("x")
    }
    else if (e.key == "Enter" || e.key === "="){
        clickEqual()
    }
})

function clickButton (key){
    numbers.forEach(button => {
        if(button.innerText === key){
            button.click()
        }
    })
}

function clickOperation(key){
    operation.forEach(button => {
        if(button.innerText === key){
            button.click()
        }
    })
}
function clickEqual(){
    equal.click()
}