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

    const xhr = new XMLHttpRequest();

    // let urlEncodedData = '';
    // let urlEncodedDataPairs = [];
    // let name;

    // // Turn data object into anm array of URL-encoded key/value pairs.
    // for (name in formContact) {
    //     urlEncodedDataPairs.push(encodeURIComponent(name) + '=' + encodeURIComponent(formContact[name]));
    // }

    contactForm.reset();
}