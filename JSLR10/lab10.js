const passwordInputs = document.querySelectorAll('.input-wrapper input[type="password"]');
const toggleIcons = document.querySelectorAll('.icon-password');
const submitButton = document.querySelector('.btn');

toggleIcons.forEach((icon, index) => {
  icon.addEventListener('click', () => {
    const input = passwordInputs[index];
    if (input.type === 'password') {
      input.type = 'text';
      icon.classList.remove('fa-eye');
      icon.classList.add('fa-eye-slash');
    } else {
      input.type = 'password';
      icon.classList.remove('fa-eye-slash');
      icon.classList.add('fa-eye');
    }
  });
});

submitButton.addEventListener('click', (event) => {
  event.preventDefault(); 

  const password1 = passwordInputs[0].value;
  const password2 = passwordInputs[1].value;


  if (password1 === password2) {
    const errorMessage = document.querySelector('.error-message');
    if (errorMessage) {
      errorMessage.remove();
    }
    alert('You are welcome');
  } else {
    let errorMessage = document.querySelector('.error-message');
    if (!errorMessage) {
      errorMessage = document.createElement('div');
      errorMessage.className = 'error-message';
      errorMessage.style.color = 'red';
      passwordInputs[1].parentNode.appendChild(errorMessage);
    }
    errorMessage.textContent = 'Пароль має співпадати';
  }
});
