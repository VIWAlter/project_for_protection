const helpButton1 = document.querySelector('.help-button'); // Измененный селектор
const popup1 = document.getElementById('popup');
const closeButton1 = document.getElementById('closeButton');

helpButton.addEventListener('click', () => {
  popup.style.display = 'block';
});

closeButton.addEventListener('click', () => {
  popup.style.display = 'none';
});