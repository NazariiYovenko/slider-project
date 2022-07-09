$(document).ready(function () {
  $(".lazy").slick({
    dots: true,
    dotsClass: "my-dots",
  });

  $(".lazy").slick({
    lazyLoad: "ondemand",
    slidesToShow: 3,
    slidesToScroll: 1,
  });
});
