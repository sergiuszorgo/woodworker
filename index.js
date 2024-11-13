
const TOKEN = '7356224291:AAE8qvy3cWXYbvYgN8xCpn3p8u4Ali_b1kM';
const CHAT_ID = '-1002441337293';
const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
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
        success.innerHTML = 'message success';
        success.style.display = 'block';
    })
    .catch((err) => {
        console.log(err);
    }) 
    .finally(() => {
        console.log('end');
    })
})