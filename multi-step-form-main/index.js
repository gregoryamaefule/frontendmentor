const nextsteps = document.querySelectorAll('.NS')
const gobacks = document.querySelectorAll('.GB')
const form = document.querySelector('form')
const selecttargets = document.querySelectorAll('.selecttarget li')
const moyrbutton = document.querySelector('.moyr button')
const paos = document.querySelectorAll('.pao input')
let position = 000
let positn = 'left'

// for (const pao of paos){
//     pao.addEventListener('change', handlepao)

// }


// function handlepao(e){
//     if (e.target.hasAttribute('checked')){
//         console.log(e.target.parentNode)
//         e.target.parentNode.classList.add('.checked')
//     }
//     else{
//         console.log(1)
//         e.target.parentNode.classList.remove('.checked')
        
//     }
// }

moyrbutton.addEventListener('click', handlemoyr)

function handlemoyr(e){
    e.preventDefault()
    moyrbutton.style.textAlign = positn === 'left' ? 'right' : 'left'
    positn = positn === 'left' ? 'right' : 'left'
    if (positn === 'left'){
        document.querySelector('#Arcade-Price').innerHTML = '$9/mo'
        document.querySelector('#Advanced-price').innerHTML = '$12/mo'
        document.querySelector('#Pro-price').innerHTML = '$15/mo'
        document.querySelector('#yr').style.color = 'hsl(231, 11%, 63%, 50%)'
        document.querySelector('#mo').style.color = 'hsl(213, 96%, 18%)'
    }
    else{
        document.querySelector('#Arcade-Price').innerHTML = '$18/mo'
        document.querySelector('#Advanced-price').innerHTML = '$24/mo'
        document.querySelector('#Pro-price').innerHTML = '$25/mo'
        document.querySelector('#mo').style.color = 'hsl(231, 11%, 63%,50%)'
        document.querySelector('#yr').style.color = 'hsl(213, 96%, 18%)'
    }
}

for (const nextstep of nextsteps){
    nextstep.addEventListener('click', handleNextstep)
}
for (const goback of gobacks){
    goback.addEventListener('click', handleGoback)
}
for (const selecttarget of selecttargets){
    selecttarget.addEventListener('click', handleST)
}

function handleST(e){
    for (const selecttarget of selecttargets){
        selecttarget.classList.remove('select-your-plan-active')
    }
    e.target.closest('.selecttarget li').classList.add('select-your-plan-active')
}

function handleNextstep(e){
    e.preventDefault();
    position += 100
    const pos = `${position}%`
    document.querySelector('form').style.bottom = pos
    const poss = position/100
    const tar = document.querySelectorAll('.target li')[poss]
    tar.firstChild.classList.add('active-no')
    const tarR = document.querySelectorAll('.target li')[poss -1]
    tarR.firstChild.classList.remove('active-no')
}
function handleGoback(e){
    e.preventDefault();
    position -= 100
    const pos = `${position}%`
    document.querySelector('form').style.bottom = pos
    const poss = position/100
    const tar = document.querySelectorAll('.target li')[poss]
    tar.firstChild.classList.add('active-no')
    const tarR = document.querySelectorAll('.target li')[poss +1]
    tarR.firstChild.classList.remove('active-no')

}