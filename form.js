const form = document.querySelector('#service-form')
const inputCompany = document.querySelector('#company');
const inputEmail = document.querySelector('#email');
const inputContact = document.querySelector('#contact');
const inputService = document.querySelector('#select-service');
const inputMsg = document.querySelector('#inputMsg');
let msg = document.querySelector('#holder');

form.addEventListener('submit', onSubmit);

function onSubmit(e) {

  e.preventDefault();

  if(inputCompany.value === '' || inputEmail.value === '' || inputContact.value.length < 8 || inputContact.value.length > 11 || inputMsg.value === '' || inputService.value === 'select') {

    msg = document.querySelector('.messageError');
    msg.innerHTML = 'Please enter all Fields Correct';
    msg.classList.add('messageError')
    setTimeout(() => msg.innerHTML = '', 2000);
  } else {

    msg = document.querySelector('.msgSuccess');
    msg.innerHTML = 'SUCCESS!';
    msg.classList.add('msgSuccess');
    setTimeout(() => msg.innerHTML = '',2000);

    console.log (`Company : ${inputCompany.value}`);
    console.log (`Email : ${inputEmail.value}`);
    console.log (`Contact : ${inputContact.value}`);
    console.log (`Service : ${inputService.value}`);
    console.log(`Message : ${inputMsg.value}`);


    // Clear Fields

    inputCompany.value = '';
    inputEmail.value = '';
    inputMsg.value = '';
    inputContact.value = '';
    inputService.value = 'select';
  } 

}

