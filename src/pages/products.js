// default imports
import '../toggleSidebar.js'
import '../cart/toggleCart.js'
import '../cart/setUpCart.js'

// specific imports
import { store } from '../setUpStore.js'
import { getElement, closeLoading } from '../utils.js'
import display from '../display.js'
import searchByName from '../filter/search.js'
import adjustCompanies from '../filter/companies.js'
import filterPrice from '../filter/price.js'

const loading = getElement('.page-loading')
const productsDOM = getElement('.products')

window.addEventListener('DOMContentLoaded', () => {
    closeLoading(loading)
    display(productsDOM, store)
    searchByName(store)
    adjustCompanies(store)
    filterPrice(store)
})




