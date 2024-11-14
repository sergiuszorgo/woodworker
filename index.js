import {CHAT_ID, URL_API} from './environment/key.js'
const buttonOpen = document.querySelector('.burger');
const buttonClose = document.querySelector('.close-btn');
const lightField = document.querySelector('.backdrop');
const grayField = document.querySelector('.gray-field');
const mobileMenu = document.querySelector('.mobile-menu')
const body = document.getElementById('body');
const confirm = document.getElementById('confirm');
const success = document.getElementById('success');

////////menu-call//////

function openMenu(e) {
    e.preventDefault();
    lightField.classList.add('open');
    mobileMenu.classList.add('slide');
    body.classList.add('no-scroll');
    buttonClose.addEventListener('click', closeMenu);
    grayField.addEventListener('click', closeMenu);
}

function closeMenu(e) {
    e.preventDefault();
    lightField.classList.remove('open');
    mobileMenu.classList.remove('slide');
    body.classList.remove('no-scroll');
}

function removeNoScroll() {
    body.classList.remove('no-scroll');
    lightField.classList.remove('open');
    mobileMenu.classList.remove('slide');
}

buttonOpen.addEventListener('click', openMenu);	


////////////TGSCREPKA///////


function sendForm(e) {
    e.preventDefault();

    let message = `<b>Заявка с сайта</b>\n`;
    message += `<b>Имя отправителя:</b> ${this.nameinput.value}\n`;
    message += `<b>Номер телефона:</b> ${this.tel.value}\n`;

    axios.post(URL_API, {
        chat_id: CHAT_ID,
        parse_mode: 'html',
        text: message
    })
    .then((res) => {
        this.nameinput.value = '';
        this.tel.value = '';
        // success.innerHTML = 'Сообщение отправлено';
        // success.style.display = 'block';
        // setTimeout(() => {
        //     success.style.display = 'none';
        // }, 3000);
        confirmSend();
    })
    .catch((err) => {
        console.log(err);
    }) 
    .finally(() => {
        
    })
}

document.getElementById('tg').addEventListener('submit', sendForm);
document.getElementById('tg2').addEventListener('submit', sendForm);

function confirmSend() {
    body.classList.add('no-scroll');
    confirm.style.display = 'block';
}

function modalClose() {
    body.classList.remove('no-scroll');
    confirm.style.display = 'none';
}