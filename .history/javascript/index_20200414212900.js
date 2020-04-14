const contactForm = document.querySelector('#contactForm');
const formName = document.querySelector('#formName');
const formEmail = document.querySelector('#formEmail');
const formMess = document.querySelector('#formMess');

contactForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    const formContact = {
        name: formName.value,
        email: formEmail.value,
        message: formMess.value
    };

    const toJSON = JSON.stringify(formContact);
    console.log('[Contact Form]>>>>', toJSON);
    const base64 = toJSON;

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:4177');
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send(base64);

    contactForm.reset();
}