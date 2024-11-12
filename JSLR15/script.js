document.querySelectorAll('.nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    document.querySelector(targetId).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

const toTopButton = document.createElement('div');
toTopButton.id = 'toTop';
toTopButton.innerHTML = '↑';
document.body.appendChild(toTopButton);

window.addEventListener('scroll', () => {
  if (window.scrollY > window.innerHeight) {
    toTopButton.style.display = 'flex';
  } else {
    toTopButton.style.display = 'none';
  }
});

toTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

$(document).ready(function() {

  $('.clients .toggle-btn').click(function() {
      
      $(this).closest('.clients').find('p').slideToggle();
  });
});

$('#toggle-gallery').on('click', function() {
  $('.gallery-container').slideToggle();
});