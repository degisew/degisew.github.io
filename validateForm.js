const form = document.getElementsByTagName('form')[0];
const emailInput = document.getElementById('client-email');
const emailError = document.querySelector('#email-error');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (emailInput.value === emailInput.value.toLowerCase()) {
    return form.submit();
  }
  emailError.textContent = 'Please enter your email in lowercase.';
  return null;
});
