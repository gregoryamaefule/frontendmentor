let radioB = document.querySelectorAll('.lizt .before')
let Actives = document.querySelectorAll('.lizt .before .uncompleted')
let Completeds = document.querySelectorAll('.lizt .before .completed')
let activeCMD = document.querySelectorAll('.activeCMD')
let lizt = document.querySelectorAll('.lizt li')
let allCMD = document.querySelectorAll('.allCMD')
let completedCMD = document.querySelectorAll('.completedCMD')
let uncompleted = document.querySelectorAll('.lizt .uncompleted')
let crossB = document.querySelectorAll('.after')

for (const radioo of  radioB){
    radioo.addEventListener('click', handleClickCompleted);
}
for (const activeCMDs of  activeCMD){
    activeCMDs.addEventListener('click', handleActiveCMD);
}
for (const cross of crossB){
    cross.addEventListener('click', handleCross)
}

function handleCross(event){
    event.target.parentNode.remove();
    setListNo()
}
document.querySelector('#clearCompleted').addEventListener('click', handleClearCompleted);

function handleClearCompleted(){
    const targ = document.querySelectorAll('.lizt .completed');
    for (const tar of targ){
        tar.remove()
        setListNo()
    }
}


function handleActiveCMD(event){
    // var sheet = document.createElement('style')
    // sheet.innerHTML = ".completed {display:none;}";
    // document.body.appendChild(sheet);
    // document.styleSheets[0].insertRule(".completed { display:none;}", -1);
    lizt = document.querySelectorAll('.lizt li')
    for (const lizts of lizt){
        console.log(lizts.getAttribute('style'))
        if (lizts.getAttribute('class') === 'completed'){
            lizts.setAttribute('style', 'display:none;');
        }
        else{
            lizts.setAttribute('style', 'display:flex;');
        }
        if(document.querySelector('.currentStateActive').innerHTML === 'All'){
            for (const allCMDs of allCMD){
                allCMDs.setAttribute('class', 'link allCMD')
            }
            for (const activeCMDs of activeCMD){
                activeCMDs.setAttribute('class', 'link activeCMD currentStateActive')
            }
        }
        else if(document.querySelector('.currentStateActive').innerHTML === 'Completed'){
            for (const completedCMDs of completedCMD){
                completedCMDs.setAttribute('class', 'link completedCMD')
            }
            for (const activeCMDs of activeCMD){
                activeCMDs.setAttribute('class', 'link activeCMD currentStateActive')
            }
        }
    }
}
for (const completedCMDs of  completedCMD){
    completedCMDs.addEventListener('click', handleCompletedCMD);
}


function handleCompletedCMD(){
    // var sheet = document.createElement('style')
    // sheet.innerHTML = ".completed {display:none;}";
    // document.body.appendChild(sheet);
    // document.styleSheets[0].insertRule(".completed { display:none;}", -1);
    lizt = document.querySelectorAll('.lizt li')
    for (const lizts of lizt){
        console.log(lizts.getAttribute('style'))
        if (lizts.getAttribute('class') === 'uncompleted'){
            lizts.setAttribute('style', 'display:none;');
        }
        else{
            lizts.setAttribute('style', 'display:flex;');
        }
        if(document.querySelector('.currentStateActive').innerHTML === 'All'){
            for (const allCMDs of allCMD){
                allCMDs.setAttribute('class', 'link allCMD')
            }
            for (const completedCMDs of completedCMD){
                completedCMDs.setAttribute('class', 'link completedCMD currentStateActive')
            }
        }
        else if(document.querySelector('.currentStateActive').innerHTML === 'Active'){
            for (const activeCMDs of activeCMD){
                activeCMDs.setAttribute('class', 'link activeCMD')
            }
            for (const completedCMDs of completedCMD){
                completedCMDs.setAttribute('class', 'link completedCMD currentStateActive')
            }
        }
    }
}
for (const allCMDs of  allCMD){
    allCMDs.addEventListener('click', handleAllCMD);
}


function handleAllCMD(){
    for (const lizts of lizt){
        lizts.setAttribute('style', 'display:flex;');
    }
    if(document.querySelector('.currentStateActive').innerHTML === 'Active'){
        for (const activeCMDs of activeCMD){
            activeCMDs.setAttribute('class', 'link activeCMD')
        }
        for (const allCMDs of allCMD){
            allCMDs.setAttribute('class', 'link allCMD currentStateActive')
        }
    }
    else if(document.querySelector('.currentStateActive').innerHTML === 'Completed'){
        for (const completedCMDs of completedCMD){
            completedCMDs.setAttribute('class', 'link completedCMD')
        }
        for (const allCMDs of allCMD){
            allCMDs.setAttribute('class', 'link allCMD currentStateActive')
        }
    }
}
function setListNo(){
    document.querySelector('#listCounter').innerHTML = document.querySelectorAll('.lizt .uncompleted').length;
    
    
}

function handleClickCompleted(event){
    if (event.target.parentNode.getAttribute('class') === 'completed'){
        event.target.parentNode.setAttribute('class', 'uncompleted');
    }
    else{
        event.target.parentNode.setAttribute('class','completed');
    }
    if(document.querySelector('.currentStateActive').innerHTML === 'Active'){
        handleActiveCMD()
    }
    else if(document.querySelector('.currentStateActive').innerHTML === 'Completed'){
        handleCompletedCMD()
    }
    setListNo()
    
}
const input = document.querySelector('.inpt input')
// input.addEventListener('change', () => {
//     const paraTextcontent = input.value;
//     const listItem = document.createElement('li')
//     listItem.classList.add('uncompleted')
//     listItem.innerHTML = `<span class="before"></span><p>${paraTextcontent}</p><span class="after"></span>`;
//     document.querySelector('.lizt').appendChild(listItem);
//     console.log(listItem)
//     setListNo()
//     radioB = document.querySelectorAll('.lizt .before')
//     console.log(radioB.length)
// })

input.addEventListener('change', () => {
    const paraTextcontent = input.value;
    const listItem = document.createElement('li')
    listItem.setAttribute('class', 'uncompleted')
    const spanBfr = document.createElement('span')
    spanBfr.setAttribute('class', 'before')
    spanBfr.addEventListener('click', handleClickCompleted)
    // spanBfr.addEventListener('click', handleAllCMD)
    // spanBfr.addEventListener('click', handleActiveCMD)
    // spanBfr.addEventListener('click', handleCompletedCMD)
    const para = document.createElement('p')
    para.textContent = `${paraTextcontent}`
    const spanAfter = document.createElement('span')
    spanAfter.addEventListener('click', handleCross)
    spanAfter.setAttribute('class', 'after')
    listItem.appendChild(spanBfr)
    listItem.appendChild(para)
    listItem.appendChild(spanAfter)
    document.querySelector('.lizt').appendChild(listItem)
    setListNo()
    input.value = ''
})

const themeC = document.querySelector('#themeChanger')

// themeC.addEventListener('click', handleThemeChange)

// function handleThemeChange(){
//     pass
// }

setListNo()