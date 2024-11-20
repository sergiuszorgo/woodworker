import {CHAT_ID, URL_API} from './environment/key.js'
const buttonOpen = document.querySelector('.burger');
const buttonClose = document.querySelector('.close-btn');
const lightField = document.querySelector('.backdrop');
const grayField = document.querySelector('.gray-field');
const mobileMenu = document.querySelector('.mobile-menu')
const body = document.getElementById('body');
const confirm = document.getElementById('confirm');

////////menu-call//////

function openMenu(e) {
    e.preventDefault();
    console.log("OPEN");
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


const tgss = document.querySelectorAll('.tgs')
tgss.forEach(elem => {elem.addEventListener('submit', sendForm)})

function confirmSend() {
    body.classList.add('no-scroll');
    confirm.style.display = 'block';
}

// arrow-up 

const btnUp = {
  el: document.querySelector('.btn-up'),
  show() {
    // удалим у кнопки класс btn-up_hide
    this.el.classList.remove('btn-up_hide');
  },
  hide() {
    // добавим к кнопке класс btn-up_hide
    this.el.classList.add('btn-up_hide');
  },
  addEventListener() {
    // при прокрутке содержимого страницы
    window.addEventListener('scroll', () => {
      // определяем величину прокрутки
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      // если страница прокручена больше чем на 400px, то делаем кнопку видимой, иначе скрываем
      scrollY > 400 ? this.show() : this.hide();
    });
    // при нажатии на кнопку .btn-up
    document.querySelector('.btn-up').onclick = () => {
      // переместим в начало страницы
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
}

btnUp.addEventListener();