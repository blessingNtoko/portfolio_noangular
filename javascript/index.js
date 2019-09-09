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

    console.log('[Contact Form]>>>>', formContact);

    contactForm.reset();
}