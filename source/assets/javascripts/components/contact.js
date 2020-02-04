const name = document.querySelector('input[name="name"]');
const phone = document.querySelector('input[name="phone"]');
const email = document.querySelector('input[name="email"]');
const subject = document.querySelector('input[name="subject"]');
const message = document.querySelector('textarea[name="message"]');

// TODO: Phone validation!!
const form = document.querySelector('.validate-form');

function showValidate(input) {
  const thisAlert = input.parentElement;
  thisAlert.classList.add('alert-validate');
}

function hideValidate(input) {
  const thisAlert = input.parentElement;
  thisAlert.classList.remove('alert-validate');
}

function validateForm() {
  const mailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let check = true;

  if (name.value.trim() === '') {
    showValidate(name);
    check = false;
  }
  if (email.value.trim().match(mailRegex) == null) {
    showValidate(email);
    check = false;
  }
  if (phone.value.trim() === '') {
    showValidate(phone);
    check = false;
  }
  if (subject.value.trim() === '') {
    showValidate(subject);
    check = false;
  }
  if (message.value.trim() === '') {
    showValidate(message);
    check = false;
  }

  return check;
}

const inputs = document.querySelectorAll('.input1');
inputs.forEach(input => {
  input.addEventListener('blur', () => {
    hideValidate(input);
  });
});

form.addEventListener('submit', function(event) {
  const validated = validateForm();
  if (validated === false) {
    event.preventDefault();
  } else {
    form.submit();
  }
});
