$(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar");
      $nav.toggleClass('static', $(this).scrollTop() > $nav.height());
    });
});