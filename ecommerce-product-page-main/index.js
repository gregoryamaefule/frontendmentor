const minus = document.querySelector('.minus')
const plus = document.querySelector('.plus')
const q = document.querySelector('.Q')

minus.addEventListener('click', handleMinus)

function handleMinus(){
    if (q.innerHTML == 0){
        return
    }
    q.innerHTML = parseInt(q.innerHTML) - 1
}
plus.addEventListener('click', handlePlus)

function handlePlus(){
    q.innerHTML = parseInt(q.innerHTML) + 1
}

const cartBox = document.querySelector('.cart-box')

cartBox.addEventListener('click', handleCartClick)

const cartTooltip = document.querySelector('.cart-tooltip')

function handleCartClick(){
    if (getComputedStyle(cartTooltip)['display'] == 'none'){
        cartTooltip.style.display = 'block';
        return
    }else{
        cartTooltip.style.display = 'none';
        return
    }
}

const addToCart = document.querySelector('.addTC button')

addToCart.addEventListener('click', handleATC)

const cartTTT = document.querySelector('.cart-total-tooltip')
const Q = document.querySelector('.q')
const total = document.querySelector('.total')
const cartTTP = document.querySelector('.cart-tooltip p')
const cartTooltipDiv = document.querySelector('.cart-tooltip div')

function handleATC(){

    Q.innerHTML = q.innerHTML
    total.innerHTML = `${parseFloat(Q.innerHTML) * 125.00}.00`
    if (q.innerHTML == 0){
        cartTTT.style.display = 'none'
        cartTTP.style.display = 'flex'
        cartTooltipDiv.style.display = 'none'
        return
    }
    else{
        cartTTT.style.display = 'block'
        cartTTT.innerHTML = q.innerHTML
        cartTTP.style.display = 'none'
        cartTooltipDiv.style.display = 'flex'
        return
    }
}

const imageProducts = document.querySelectorAll('.image-product-thumbnails img')

for (const imageProduct of imageProducts){
    imageProduct.addEventListener('click', handldeImageP)
}

const image = document.querySelector('.image')

function handldeImageP(event){
    let SRC = event.target.getAttribute('src')
    SRC = SRC.substring(0, SRC.length - 14)
    image.style.backgroundImage = `url(${SRC}.jpg)`

    for (const imageProduct of imageProducts){
        imageProduct.classList.remove("itb")
    }
    event.target.classList.add("itb")
}
