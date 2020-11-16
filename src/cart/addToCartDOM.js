import { formatPrice } from '../utils.js'
import addToCart from './setUpCart.js'

const addToCartDOM = (container, item) => {
    const element = document.createElement('article')
    element.classList.add('cart-item')
    const { id, name, price, img, amount } = item
    element.setAttribute('data-id', id)
    element.innerHTML = `<img src="${img}" alt="${name}" class="cart-img">
              <div class="cart-info">
                <h2>${name}</h2>
                <p>${formatPrice(price)}</p>
                <button class="remove-item" data-id="${id}">remove</button>
              </div>
              <div class="cart-math">
                <button class="increase" data-id="${id}"><i class="fas fa-chevron-up"></i></button>
                <span class="item-amount" data-id="${id}">${amount}</span>
                <button class="decrease" data-id="${id}"><i class="fas fa-chevron-down"></i></button>
              </div>`
    container.appendChild(element)
}

export default addToCartDOM