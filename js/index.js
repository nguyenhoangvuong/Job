

// open modal login
let btnLogin = document.querySelector('.btn-login');
let overlay = document.querySelector('.overlay');
let btnSwitchLang = document.querySelector('.btn-switch-lang')
let optionSwitchLang = document.querySelector('.btn-switch-lang--option')

// click button login then open modal option login
btnLogin.addEventListener('click', () => {
    overlay.classList.add('open');
})

btnSwitchLang.addEventListener('click', () => {
    optionSwitchLang.classList.toggle('open')
})

// click overlay visible modal option login
window.addEventListener('click', (e) => {
    console.log(e.target);
    if (e.target.classList.contains('overlay')) {
        overlay.classList.remove('open');
    } else if (!e.target.classList.contains('btn-switch-lange--name')){
        optionSwitchLang.classList.remove('open')
    }
})

