const burger_html = '<i class="fas fa-bars"></i>';
const cross_html = '<i class="fas fa-times"></i>';
const burger = document.getElementById('burger');
const menu = document.getElementById('menu');
const body = document.querySelector('body');
var menu_open = false;

burger.onclick = () => {
    if (!menu_open) {
        burger.innerHTML = cross_html;
        menu.classList.add('menu-open');
        body.classList.add('menu-open');
    } else {
        burger.innerHTML = burger_html;
        menu.classList.remove('menu-open');
        body.classList.remove('menu-open');
    }
    menu_open = !menu_open;
};

// Links click

const links = document.getElementsByClassName('nav-link');

for (let link of links) {
    link.onclick = () => {
        burger.innerHTML = burger_html;
        menu.classList.remove('menu-open');
        body.classList.remove('menu-open');
        menu_open = !menu_open;
        setTimeout(() => {
            console.log(window.pageYOffset);
        }, 2000);
    };
}

// Mobile menu height fix
// We listen to the resize event
window.addEventListener('resize', () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});
