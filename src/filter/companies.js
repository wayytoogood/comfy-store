import display from '../display.js'
import { getElement } from '../utils.js'

const companyList = getElement('.company-list')
const productsContainer = getElement('.products')

const adjustCompanies = (store) => {
    let companies = store.map(item => item.company)
    companies = ['all', ...new Set(companies)]

    companyList.innerHTML = companies.map(company => {
        return `<button class="company-btn">${company}</button>`
    }).join('')

    companyList.addEventListener('click', (e) => {
        const et = e.target
        if (et.classList.contains('company-btn')) {
            if (et.textContent === 'all') {
                display(productsContainer, store)
            } else {
                const currentProducts = store.filter(product => product.company === et.textContent)
                display(productsContainer, currentProducts)
            }
        }
    })
}

export default adjustCompanies