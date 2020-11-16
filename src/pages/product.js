// default imports
import '../toggleSidebar.js'
import '../cart/toggleCart.js'
import '../cart/setUpCart.js'

// specific imports
import { getElement, formatPrice, singleProductURL, closeLoading } from '../utils.js'
import addToCart from '../cart/setUpCart.js'

const title = getElement('.page-title h2:last-of-type')
const loading = getElement('.page-loading')
const center = getElement('.specific-center')

const productID = window.location.search
const fullURL = singleProductURL + productID

window.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch(fullURL)
        if (response.status >= 200 && response.status <= 299) {
            const data = await response.json()

            const { id } = data
            const { name, price, image, description, colors, company } = data.fields
            const { url } = image[0].thumbnails.large

            document.title = `${name.toUpperCase()} || Comfy`

            title.textContent = name

            center.innerHTML = `<article class="product-img-container">
                <img class="product-img" src="${url}" alt="${name}">
            </article>
            <article class="product-info">
                <h2 class="product-name">${name}</h2>
                <p class="product-brand">${company}</p>
                <p class="specific-price">${formatPrice(price)}</p>
            <div class="color-container">
                </div>
            <div class="product-text">${description}</div>
                <button type="button" class="btn primary-btn add-btn" data-id="${id}">add to cart</button>
            </article>`

            const colorContainer = getElement('.color-container')
            colors.forEach(color => {
                const element = document.createElement('span')
                element.classList.add('color')
                element.style.backgroundColor = color
                colorContainer.appendChild(element)
            })

            const btn = getElement('.add-btn')
            btn.addEventListener('click', function () {
                addToCart(this.dataset.id)
            })
        }
        else {
            console.log({
                status: response.status,
                information: response.statusText
            })
            center.innerHTML = `<h3 class="filter-error">sorry, no products matched your search...</h3>`
        }

    } catch (error) {
        console.log(error);
    }

    closeLoading(loading)

})

