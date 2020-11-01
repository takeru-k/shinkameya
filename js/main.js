(function($) {
  $(".icon-hamburger").click(function() {
  $(".icon-hamburger").toggleClass("active");
  $(".menu-nav").toggleClass("open");
  });

$('.question-p').on('click', function () {
  /*矢印の向きを変更*/
  $(this).toggleClass("arrow", 200);
});
})( jQuery );