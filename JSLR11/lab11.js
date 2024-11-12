const buttons = document.querySelectorAll('.btn');
let activeButton = null;
document.addEventListener('keydown', (event) => {
  const key = event.key.toUpperCase();
  buttons.forEach((button) => {
    if (button.textContent.toUpperCase() === key) {
      if (activeButton) {
        activeButton.style.backgroundColor = '#33333a';
      }
      button.style.backgroundColor = 'blue';
      activeButton = button;
    }
  });
});
