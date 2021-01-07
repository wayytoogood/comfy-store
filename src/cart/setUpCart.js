import { store } from '../setUpStore.js'
import { getElement, getItem, setItem, formatPrice } from '../utils.js'
import addToCartDOM from './addToCartDOM.js'
import openCart from './toggleCart.js'

const amountDOM = getElement('.cart-value')
const totalDOM = getElement('.total')
const itemsContainer = getElement('.items-container')

let cart = getItem('cart')

const addToCart = (id) => {
    const element = cart.find(item => item.id === id)
    if (!element) {
        let newCartItem = store.find(product => product.id === id)
        newCartItem = { ...newCartItem, amount: 1 }
        cart = [...cart, newCartItem]
        addToCartDOM(itemsContainer, newCartItem)
    }
    else {
        const itemAmounts = [...document.querySelectorAll('.item-amount')]
        const itemAmount = itemAmounts.find(item => item.dataset.id === id)
        itemAmount.textContent = adjustAmount(id, 'inc')
    }
    setItem('cart', cart)
    openCart()
    calculateAmount()
    calculateTotal()
}

const adjustAmount = (id, process) => {
    let cartItem = cart.find(item => item.id === id)
    if (process === 'inc') {
        cartItem.amount++
        return cartItem.amount
    }
    if (process === 'dec') {
        cartItem.amount--
        return cartItem.amount
    }
}

const calculateAmount = () => {
    const amount = cart.reduce((total, item) => {
        return total += item.amount
    }, 0)
    amountDOM.textContent = amount
}

const calculateTotal = () => {
    const total = cart.reduce((total, item) => {
        return total += item.amount * item.price
    }, 0)
    totalDOM.textContent = `total: ${formatPrice(total)}`
}

const removeItem = (id, element) => {
    cart = cart.filter(item => item.id !== id)
    element.parentElement.parentElement.remove()
}

const addCartItems = () => {
    cart.forEach(item => {
        addToCartDOM(itemsContainer, item)
    })
}

const cartFunctionality = () => {
    itemsContainer.addEventListener('click', (e) => {
        const element = e.target
        const parent = e.target.parentElement
        const elementId = element.dataset.id
        const parentId = parent.dataset.id
        if (element.classList.contains('remove-item')) {
            removeItem(elementId, element)
        }
        if (parent.classList.contains('increase')) {
            parent.nextElementSibling.textContent = adjustAmount(parentId, 'inc')
        }
        if (parent.classList.contains('decrease')) {
            parent.previousElementSibling.textContent = adjustAmount(parentId, 'dec')
            const amount = parseInt(parent.previousElementSibling.textContent)
            if (amount === 0) {
                removeItem(parentId, parent)
            }
        }
        setItem('cart', cart)
        calculateAmount()
        calculateTotal()
    })
}

const init = () => {
    calculateAmount()
    calculateTotal()
    addCartItems()
    cartFunctionality()
}

init()

export default addToCart