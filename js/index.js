const LOGIN = false;

// open modal login
let $$ = document.querySelectorAll.bind(document);
let btnLogin = document.querySelector('.btn-login');
let overlay = document.querySelector('.overlay');
let btnSwitchLang = document.querySelector('.btn-switch-lang')
let optionSwitchLang = document.querySelector('.btn-switch-lang--option');
let listNavItem = $$('.nav-item');
let navItemActive = document.querySelector('.nav-item.nav-item-active');
let avatarLogin = document.getElementById('avatarLogin');

// click button login then open modal option login
btnLogin.addEventListener('click', () => {
    overlay.classList.add('open');
})

let inputComment = $$('.comment-textarea');

if(LOGIN ==  true) {
    inputComment.forEach(item => {
        item.addEventListener('click', () => {
            item.removeAttribute("readonly");
        })
    })
    avatarLogin.style.display = 'block';
} else {
    inputComment.forEach(item => {
        item.addEventListener('click', () => {
            overlay.classList.add('open');
        })
    })
}

inputLogin.addEventListener('click', () => {
    overlay.classList.add('open');
})

btnSwitchLang.addEventListener('click', () => {
    optionSwitchLang.classList.toggle('open')
})

btnLogin.addEventListener('click', () => {
    overlay.classList.add('open');
})

// click overlay visible modal option login
window.addEventListener('click', (e) => {
    console.log(e.target);
    if (e.target.classList.contains('overlay')) {
        overlay.classList.remove('open');
    } else if (!e.target.classList.contains('check-Open')){
        optionSwitchLang.classList.remove('open')
    } else if (e.target.classList.contains('btn-login--text')) {
        overlay.classList.add('open')
    }
})



