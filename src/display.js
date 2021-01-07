import { formatPrice } from './utils.js'
import addToCart from './cart/setUpCart.js'

const display = (container, items) => {
  container.innerHTML = items.map(({ id, name, price, img }) => {
    return `<article class="furniture">
        <div class="furniture-img-container">
          <img class="furniture-img" src="${img}" alt="${name}">
          <div class="img-nav">
            <a href="product.html?id=${id}" class="nav-specific-product"><i class="fas fa-search"></i></a>
            <button type="button" class="shopping-cart-img" data-id="${id}">
              <i class="fas fa-shopping-cart"></i>
            </button>
          </div>
        </div>
        <div class="furniture-info">
          <h2>${name}</h2>
          <p>${formatPrice(price)}</p>
        </div>
      </article>`
  }).join('')


  container.addEventListener('click', (e) => {
    const target = e.target.parentElement
    if (target.classList.contains('shopping-cart-img')) {
      const id = target.dataset.id
      addToCart(id)
    }
  })
}

export default display