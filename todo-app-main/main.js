const radioB = document.querySelectorAll('.lizt .before')
const Actives = document.querySelectorAll('.lizt .before .uncompleted')
const Completeds = document.querySelectorAll('.lizt .before .completed')
const activeCMD = document.querySelectorAll('.activeCMD')
const lizt = document.querySelectorAll('.lizt li')
const allCMD = document.querySelectorAll('.allCMD')
const completedCMD = document.querySelectorAll('.completedCMD')

for (const radioo of  radioB){
    radioo.addEventListener('click', handleClickCompleted);
}
for (const activeCMDs of  activeCMD){
    activeCMDs.addEventListener('click', handleActiveCMD);
}


function handleActiveCMD(event){
    // var sheet = document.createElement('style')
    // sheet.innerHTML = ".completed {display:none;}";
    // document.body.appendChild(sheet);
    // document.styleSheets[0].insertRule(".completed { display:none;}", -1);
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
}