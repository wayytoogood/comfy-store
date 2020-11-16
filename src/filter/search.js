import display from '../display.js'
import { getElement } from '../utils.js'

const searchBar = getElement('.search-input')
const productsDOM = getElement('.products')

const searchByName = (store) => {
    searchBar.addEventListener('keyup', function () {
        let value = this.value
        value = value.toLowerCase()
        const currentItems = store.filter(item => item.name.toLowerCase().startsWith(value))
        display(productsDOM, currentItems)
        if (currentItems.length === 0) {
            productsDOM.innerHTML = `<h3 class="filter-error">sorry, no products matched your search...</h3>`
        }
    })
}


export default searchByName
