const productsURL = 'https://course-api.com/javascript-store-products';
const singleProductURL =
  'https://course-api.com/javascript-store-single-product';

const getElement = (selection) => {
  const element = document.querySelector(selection);
  if (element) return element;
  throw new Error(`Please check ${selection} selector, no such element exist`);
};

const setItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const getItem = (key) => {
  return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : [];
};

const closeLoading = (part) => {
  part.classList.add('close-loading');
};

const formatPrice = (price) => {
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format((price / 100).toFixed(2));
  return formattedPrice;
};

export {
  productsURL,
  singleProductURL,
  getElement,
  setItem,
  getItem,
  closeLoading,
  formatPrice,
};
