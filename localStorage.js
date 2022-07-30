const userName = document.getElementById('client-name');
const userEmail = document.getElementById('client-email');
const userMessage = document.getElementById('client-message');

const userInput = {
  un: userName.value,
  email: userEmail.value,
  message: userMessage.value,
};


localStorage.setItem('userData', JSON.stringify(userInput));
const test = localStorage.getItem('userData');
const parsedData = JSON.parse(test);
userName.value = parsedData.un;
userEmail.value = parsedData.email;
userMessage.value = parsedData.message;
