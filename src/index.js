import menu from './menu.json'
import cards from './templates/cards.hbs';
import './sass/main.scss';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const bodyRef = document.querySelector('body')
const menuRef = document.querySelector('.js-menu');
const themeBtnRef = document.querySelector('#theme-switch-toggle')



const createCardsMarkUp = menu.map(cards).join('')

menuRef.insertAdjacentHTML('afterBegin', createCardsMarkUp)


themeBtnRef.addEventListener('change',function (e) {
    if (e.target.checked) {
        bodyRef.classList.add(Theme.DARK)
        bodyRef.classList.remove(Theme.LIGHT)
        localStorage.setItem('Theme',Theme.DARK)
    }
    else {
        bodyRef.classList.add(Theme.LIGHT)
        bodyRef.classList.remove(Theme.DARK)
        localStorage.setItem('Theme',Theme.LIGHT)
    }
})

const currentTheme = localStorage.getItem('Theme');

if (currentTheme === Theme.DARK) {
    themeBtnRef.checked = 'true'
    bodyRef.classList.add(Theme.DARK)
}
else {
    themeBtnRef.checked = 'false'
    bodyRef.classList.add(Theme.LIGHT)
}



