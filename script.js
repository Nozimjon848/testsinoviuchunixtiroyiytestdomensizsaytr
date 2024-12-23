 function sendToTelegram() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    const telegramApiUrl = `https://api.telegram.org/bot8175230847:AAEFVgsiwH5xk0MEWvuOUUS_k3P7nZzA_Xk/sendMessage`;
    const chatId = '7384543170';

    const text = `Yangi oquvchi izohi:\n\nName: ${name}\nNumber: ${email}`;

    fetch(telegramApiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: chatId, text: text })
    })
    .then(response => response.json())
    .then(data => {
        if (data.ok) {
            alert('Xabaringiz Yuborildi!');
        } else {
            alert('Xabaringiz Yuborilmadi iltimos qaytadan urining.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred while sending the message.');
    });
}

