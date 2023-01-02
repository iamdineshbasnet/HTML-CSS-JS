const label = document.querySelector('label');
const input = document.querySelector('input');
const altEmail = document.querySelector('.altEmail');
const xmark = document.querySelector('.xmark');
const check = document.querySelector('.check');
let emailRegx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

window.addEventListener('click', (e) => {
  if (input.value.length !== 0) {
    label.classList.add('active')
    return;
  }
  if (input.contains(e.target)) {
    label.classList.add('active')
  } else {
    label.classList.remove('active');
  }
})

input.onkeyup = function() {

  if (input.value.length === 0) {
    label.innerText = "Email"

    label.classList.remove('active')
    input.blur();

    altEmail.classList.add('active')
    xmark.classList.remove('active')
    check.classList.remove('active')

    label.classList.remove('valid')
    label.classList.remove('invalid')

    input.classList.remove('valid')
    input.classList.remove('invalid')
    return;
  }
  if (input.value.match(emailRegx)) {
    label.innerText = 'Email is valid'

    altEmail.classList.remove('active')
    xmark.classList.remove('active')
    check.classList.add('active')

    label.classList.remove('invalid')
    label.classList.add('valid')

    input.classList.add('valid')
    input.classList.remove('invalid')
  } else {
    label.innerText = 'Email is invalid'

    altEmail.classList.remove('active')
    xmark.classList.add('active')
    check.classList.remove('active')

    label.classList.add('invalid')
    label.classList.remove('valid')

    input.classList.add('invalid')
    input.classList.remove('valid')
  }
}
