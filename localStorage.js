const userName = document.getElementById('client-name');
const userEmail = document.getElementById('client-email');
const userMessage = document.getElementById('client-message');
const form = document.getElementById('form-tag');
const userInput = {
  un: '',
  email: '',
  message: '',
};

// to check wheather the local storage has data or not.
if (localStorage.getItem('userData')) {
  const test = localStorage.getItem('userData');
  const parsedData = JSON.parse(test);
  userName.value = parsedData.un;
  userEmail.value = parsedData.email;
  userMessage.value = parsedData.message;
}

userName.addEventListener('input', (event) => {
  event.preventDefault();
  userInput.un = userName.value;
});
userEmail.addEventListener('input', (event) => {
  event.preventDefault();
  userInput.email = userEmail.value;
});
userMessage.addEventListener('input', (event) => {
  event.preventDefault();
  userInput.message = userMessage.value;
});

form.addEventListener('input', (event) => {
  event.preventDefault();
  localStorage.setItem('userData', JSON.stringify(userInput));
});
