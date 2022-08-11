//initialization of all variables needed

let buffer = "0";
let prevOp = null;
let runningTotal = 0;
let themetracker = 1;

const screen = document.querySelector('.screen');
const sButton = document.querySelectorAll('.buttons button');
const togle = document.querySelector('.themeSelect')

function changeTheme(){
    let bodyy = document.querySelector('body');
    let screenBg = document.querySelector('.screen');
    let secButtons = document.querySelector('.buttons');
    let themeBg = document.querySelector('.themeSelect');
    let themeCol = document.querySelector('.fa');
    let calcColor = document.querySelector('.calc *');
    let calcColorH = document.querySelector('.head *');
    let calcColorDiv = document.querySelector('.targDiv');
    let secButtonsColor = document.querySelector('.buttons *');
    let resetCol = document.querySelector('.reset');
    let delCol = document.querySelector('.DEL');
    let resetBg = document.querySelector('.reset');
    let delBg = document.querySelector('.DEL');
    let equalsCol = document.querySelector('.equals');
    let equalsBg = document.querySelector('.equals');
    let themeTextAlign = document.querySelector('.themeSelect');
    let buttns = document.querySelectorAll('button');

    
    if (themetracker == 1){
        bodyy.style.backgroundColor = 'hsl(0, 0%, 90%)';
        screenBg.style.backgroundColor = 'hsl(0, 0%, 93%)';
        secButtons.style.backgroundColor = 'hsl(0, 5%, 81%)';
        themeBg.style.backgroundColor = 'hsl(0, 5%, 81%)';
        calcColor.style.color = 'black';
        themeCol.style.color = 'hsl(25, 98%, 40%)';
        secButtonsColor.style.color = 'black';
        for (const btn of buttns){
            btn.style.color = 'black';
            btn.style.backgroundColor = 'hsl(45, 7%, 89%)';
            btn.style.boxShadow = '0 5px hsl(35, 11%, 61%)';
        }
        resetCol.style.color = 'white';
        delCol.style.color = 'white';
        resetBg.style.backgroundColor = 'hsl(185, 42%, 37%)';
        delBg.style.backgroundColor = 'hsl(185, 42%, 37%)';
        equalsCol.style.color = 'white';
        equalsBg.style.backgroundColor = 'hsl(25, 98%, 40%)';
        themeTextAlign.style.textAlign = 'center';
        delBg.style.boxShadow = '0 5px hsl(185, 58%, 25%)';
        equalsBg.style.boxShadow = '0 5px hsl(25, 99%, 27%)';
        resetBg.style.boxShadow = '0 5px hsl(185, 58%, 25%)';
        calcColorH.style.color = 'black'
        calcColorDiv.style.color = 'black'
        screenBg.style.color = 'black'
        themeBg.style.boxShadow = 'none'

        themetracker = 2;
        
        return
    }else if( themetracker === 2){
        bodyy.style.backgroundColor = 'hsl(268, 75%, 9%)';
        screenBg.style.backgroundColor = 'hsl(268, 71%, 12%)';
        secButtons.style.backgroundColor = 'hsl(268, 71%, 12%)';
        themeBg.style.backgroundColor = 'hsl(268, 71%, 12%)';
        calcColor.style.color = 'hsl(52, 100%, 62%)';
        themeCol.style.color = 'hsl(176, 100%, 44%)';
        secButtonsColor.style.color = 'hsl(52, 100%, 62%)';
        for (const btn of buttns){
            btn.style.color = 'hsl(52, 100%, 62%)';
            btn.style.backgroundColor = 'hsl(268, 47%, 21%)';
            btn.style.boxShadow = '0 5px hsl(290, 70%, 36%)';
        }
        resetCol.style.color = 'white';
        delCol.style.color = 'white';
        resetBg.style.backgroundColor = 'hsl(281, 89%, 26%)';
        delBg.style.backgroundColor = 'hsl(281, 89%, 26%)';
        equalsCol.style.color = 'hsl(198, 20%, 13%)';
        equalsBg.style.backgroundColor = 'hsl(176, 100%, 44%)';
        themeTextAlign.style.textAlign = 'right';
        delBg.style.boxShadow = '0 5px hsl(285, 91%, 52%)';
        equalsBg.style.boxShadow = '0 5px hsl(176, 100%, 44%)';
        resetBg.style.boxShadow = '0 5px hsl(285, 91%, 52%)';
        calcColorH.style.color = 'hsl(52, 100%, 62%)';
        calcColorDiv.style.color = 'hsl(52, 100%, 62%)';
        screenBg.style.color = 'hsl(52, 100%, 62%)';
        themeBg.style.boxShadow = 'none'

        themetracker = 3;
        
        return
    }
    else{
        bodyy.style.backgroundColor = '';
        screenBg.style.backgroundColor = '';
        secButtons.style.backgroundColor = '';
        themeBg.style.backgroundColor = '';
        calcColor.style.color = '';
        themeCol.style.color = 'hsl(6, 63%, 50%)';
        secButtonsColor.style.color = '';
        for (const btn of buttns){
            btn.style.color = '';
            btn.style.backgroundColor = '';
            btn.style.boxShadow = '';
        }
        resetCol.style.color = '';
        delCol.style.color = '';
        resetBg.style.backgroundColor = '';
        delBg.style.backgroundColor = '';
        equalsCol.style.color = '';
        equalsBg.style.backgroundColor = '';
        themeTextAlign.style.textAlign = '';
        delBg.style.boxShadowColor = '';
        equalsBg.style.boxShadowColor = '';
        resetBg.style.boxShadowColor = '';
        resetBg.style.boxShadowColor = '';
        calcColorH.style.color = ''
        calcColorDiv.style.color = ''
        screenBg.style.color = ''

        themetracker = 1;
        
        return
    }



}

togle.addEventListener('click', changeTheme)

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