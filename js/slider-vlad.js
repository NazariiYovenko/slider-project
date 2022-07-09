$(document).ready(function () {
  $(".lazy").slick({
    dots: true,
    dotsClass: "my-dots",
  });

  $(".slider-vlad").slick({
    lazyLoad: "ondemand",
    slidesToShow: 3,
    slidesToScroll: 1,
  });
});
