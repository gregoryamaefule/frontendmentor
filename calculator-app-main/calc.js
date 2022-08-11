//initialization of all variables needed

let buffer = "0";
let prevOp = null;
let runningTotal = 0;

const screen = document.querySelector('.screen');
const sButton = document.querySelectorAll('.buttons button');
const togle = document.querySelectorAll('.themeSelect button')

function handleClick(event){
    const value = event.target.innerText;
    if (isNaN(value) && value !== "."){
        handleSymbol(value);
    }else if(value === "."){
        handleNumber(value)
    }
    else{
        handleNumber(value);
    }
    screen.innerText = buffer;
}

function handleSymbol(value){
    switch(value){
        case 'RESET':
            buffer = "0";
            runningTotal = 0;
            break;

        case 'DEL':
            if (screen.innerText.length === 1 | buffer === "0"){
                buffer = "0";
                break;
            }else{
                buffer = buffer.slice(0, buffer.length-1);
                break;
            }
        case '=':
            if(prevOp === null){
                return;
            }else{
                handleOperation(parseInt(buffer));
                prevOp = null;
                buffer = runningTotal.toString();
                runningTotal = 0;
                break;
            }

        case '/':
        case '−':
        case '+':
        case '×':
            handleMath(value);
            break;
    }
}
function handleMath(value){
    if (buffer === "0"){
        return;
    }

    const intBuffer = parseInt(buffer);

    if (runningTotal === 0){
        runningTotal = intBuffer;
    }else{
        handleOperation(intBuffer);
    }
    prevOp = value;

    buffer = "0"
}

function handleOperation(intBuffer){
    switch(prevOp){
        case '+':
            runningTotal += intBuffer;
            break;
        case '−':
            runningTotal -= intBuffer;
            break;
        case '×':
            runningTotal *= intBuffer;
            break;
        case '/':
            runningTotal /= intBuffer;
            break;

    }
}

function handleNumber(value){
    if (buffer === "0"){
        buffer = value;
    }else {
        buffer += value;
    }
}

for (const buttn of  sButton){
    buttn.addEventListener('click', handleClick);
}