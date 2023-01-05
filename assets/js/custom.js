$(document).ready(function(){
    $(".icon-menu").click(function () {
        $(".primary-nav").fadeToggle();
    });
});


$('.masthead-slider').slick({
  dots: true,
  arrows: true,
  infinite: true,
  speed: 300,
  autoplay: true,
  autoplaySpeed: 2000
});

$('.testimonial-slider').slick({
  dots: true,
  arrows: false,
  infinite: true,
  speed: 300,
  autoplay: true,
  autoplaySpeed: 2000
});

$('.brand-slider').slick({
  dots: false,
  arrows: true,
  infinite: false,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow:3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});







function scrollNav() {
  $('.go_top').click(function(){
    $(".active").removeClass("active");     
    $(this).addClass("active");
    
    $('html, body').stop().animate({
      scrollTop: $($(this).attr('href')).offset().top - 0
    }, 1000);
    return false;
  });
}
scrollNav();


$(document).ready(function() {
  $(".set > a").on("click", function() {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this)
        .siblings(".content")
        .slideUp(200);
      $(".set > a i")
        .removeClass("fa-minus")
        .addClass("fa-plus");
    } else {
      $(".set > a i")
        .removeClass("fa-minus")
        .addClass("fa-plus");
      $(this)
        .find("i")
        .removeClass("fa-plus")
        .addClass("fa-minus");
      $(".set > a").removeClass("active");
      $(this).addClass("active");
      $(".content").slideUp(200);
      $(this)
        .siblings(".content")
        .slideDown(200);
    }
  });
});