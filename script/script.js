let submitEmail = document.querySelector('.subscribe-wrapper button');
let emailInput = document.querySelector('.subscribe-wrapper-form input');

submitEmail.addEventListener('click', (event) => {
   event.preventDefault();
   let mail = emailInput.value;
   let mailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
   if (!mail.match(mailRegex)) {
      alert('The email is invalid ...');
   } else {
      alert('Thanks for subscribing !');
   }
});