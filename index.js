import {CHAT_ID, URL_API} from './environments/key.js'


const success = document.getElementById('success');

document.getElementById('tg').addEventListener('submit', function(e) {
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
        success.innerHTML = 'Сообщение отправлено';
        success.style.display = 'block';
        setTimeout(() => {
            success.style.display = 'none';
        }, 3000);
    })
    .catch((err) => {
        console.log(err);
    }) 
    .finally(() => {

    })
})