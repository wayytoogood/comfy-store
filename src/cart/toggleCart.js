import { getElement } from '../utils.js'

const cartBtn = getElement('.shopping-cart')
const closeCart = getElement('.close-cart')
const cartContainer = getElement('.cart-section-container')

cartBtn.addEventListener('click', () => {
    cartContainer.classList.add('show')
})

closeCart.addEventListener('click', () => {
    cartContainer.classList.remove('show')
})

const openCart = () => {
    cartContainer.classList.add('show')
}

export default openCart