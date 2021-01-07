import display from '../display.js'
import { getElement } from '../utils.js'

const priceFilter = getElement('.price-filter')
const priceDOM = getElement('.price-value')
const productsContainer = getElement('.products')

const filterPrice = (store) => {
    let maxValue = store.map(item => item.price)
    maxValue = Math.max(...maxValue) / 100
    maxValue = Math.ceil(maxValue)
    priceFilter.max = maxValue
    priceFilter.min = 0
    priceFilter.value = maxValue
    priceDOM.textContent = `value: $${maxValue}`

    priceFilter.addEventListener('input', function () {
        priceDOM.textContent = `value: $${this.value}`
        const currentProducts = store.filter(item => (item.price / 100) <= parseInt(this.value))
        display(productsContainer, currentProducts)
        if (currentProducts.length === 0) {
            productsContainer.innerHTML = `<h3 class="filter-error">sorry, no products matched your search...</h3>`
        }
    })
}

export default filterPrice