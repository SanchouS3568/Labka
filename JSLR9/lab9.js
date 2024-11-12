document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.tabs-title');
    const contents = document.querySelectorAll('.tabs-content > li');

    tabs.forEach((tab, index) => {
      tab.addEventListener('click', function () {

        tabs.forEach(tab => tab.classList.remove('active'));
        contents.forEach(content => content.style.display = 'none');

        this.classList.add('active');
        contents[index].style.display = 'block';
      });
    });
    contents.forEach((content, index) => {
      content.style.display = index === 0 ? 'block' : 'none';
    });
  });