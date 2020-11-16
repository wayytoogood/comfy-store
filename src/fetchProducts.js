import { productsURL } from './utils.js'

const fetchProducts = async () => {
    const response = await fetch(productsURL).catch(err => console.log(err))
    if (response) {
        const data = await response.json()
        return data
    }
}

export default fetchProducts