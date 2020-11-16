import { getItem, setItem } from './utils.js'

let store = getItem('store')

const setUpStore = (products) => {
    store = products.map(product => {
        const { id } = product
        const { name, price, featured, image, company } = product.fields
        const img = image[0].thumbnails.large.url
        return { id, name, price, featured, img, company }
    })
    setItem('store', store)
}

export {
    store,
    setUpStore,
}