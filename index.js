// default imports
import './src/toggleSidebar.js'
import './src/cart/toggleCart.js'
import './src/cart/setUpCart.js'

//specific imports
import fetchProducts from './src/fetchProducts.js'
import { store, setUpStore } from './src/setUpStore.js'
import { getElement, closeLoading } from './src/utils.js'
import displayFeatured from './src/display.js'

const itemsContainer = getElement('.furniture-container')
const sectionLoading = getElement('.section-loading')

window.addEventListener('DOMContentLoaded', async () => {
    const products = await fetchProducts()
    setUpStore(products)
    const featuredOnes = store.filter(item => item.featured === true)
    closeLoading(sectionLoading)
    displayFeatured(itemsContainer, featuredOnes)
})