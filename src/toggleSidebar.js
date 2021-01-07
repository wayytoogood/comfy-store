import { getElement } from './utils.js';

const toggleBtn = getElement('.toggle-btn');
const closeBtn = getElement('.close-btn');
const asideContainer = getElement('.aside-container');
const mobilAside = getElement('.mobil-aside');

toggleBtn.addEventListener('click', () => {
  asideContainer.classList.add('open-container');
  mobilAside.classList.add('open-aside');
});

closeBtn.addEventListener('click', () => {
  asideContainer.classList.remove('open-container');
  mobilAside.classList.remove('open-aside');
});
