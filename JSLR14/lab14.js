$(document).ready(function () {
  const $tabs = $('.tabs-title');
  const $contents = $('.tabs-content > li');

  $tabs.on('click', function () {
      const index = $tabs.index(this);

      $tabs.removeClass('active');
      $contents.hide();

      $(this).addClass('active');
      $contents.eq(index).show();
  });

  $contents.hide().first().show();
});