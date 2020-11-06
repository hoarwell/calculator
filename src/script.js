function output(val){
    const input = document.querySelector(".input");
    switch(input.value){
        case '0': input.value = ''; // if input value is 0, change value empty and put numbers
        default: input.value = input.value + val;
            break;
    }
}

function calculate(){
    const input = document.querySelector(".input");
    var result = eval(input.value);
    input.value = result;
}

function percentage(){
    const input = document.querySelector(".input");
    var result = input.value/100;
    input.value = result;
}

function reset(){
    console.log("reset!")
    const input = document.querySelector(".input");
    input.value = 0;
}

function ce(){
    console.log("del!")
    const input = document.querySelector(".input");
    switch(input.value){
        case '0':
            break;
        case '': input.value = 0;
            break;
        default: input.value = input.value.slice(0, -1);
            break;
    }
    
}

function init(){
    reset()
}

init();