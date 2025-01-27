const form = document.getElementById('contactForm');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (String(email).length <= 0) {
        alert('Введите электронную почту.');
        return;
    };

    if (String(message).length <= 16) {
        alert('Минимальная длина сообщения: 16 символов');
        return;
    }

    form.innerHTML = `
    <div class="userselect-none">Спасибо! Ваше сообщение отправлено.</div>
    `;
});