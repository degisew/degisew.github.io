const userName = document.getElementById('client-name');
const userEmail = document.getElementById('client-email');
const userMessage = document.getElementById('client-message');
const form = document.getElementsByClassName('form');
const userInput = {
  un: userName.value,
  email: userEmail.value,
  message: userMessage.value,
};

form.addEventListener('input', (event) => {
  event.preventDefault();
  localStorage.setItem('userData', JSON.stringify(userInput));
  return true;
});

const test = localStorage.getItem('userData');
const parsedData = JSON.parse(test);
if (parsedData !== null) { // to check wheather the local storage is empty or not.
  userName.value = parsedData.un;
  userEmail.value = parsedData.email;
  userMessage.value = parsedData.message;
}
