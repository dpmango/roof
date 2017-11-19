$(document).ready(function(){
  // Меню
$('[js-open-catalog]').on('click', function(e){
  e.preventDefault();
  if ($(this).hasClass('is-active')) {
    $('body').removeClass('no-scroll');
    $(this).removeClass('is-active');
    $(this).find('.hamburger').removeClass('is-active');
    $('.menu').removeClass('is-active');
    $('.header').removeClass('header--menu-open');
  } else {
    $('body').addClass('no-scroll');
    $(this).addClass('is-active');
    $(this).find('.hamburger').addClass('is-active');
    $('.menu').addClass('is-active');
    $('.header').addClass('header--menu-open');
  }
});
  
// Мобильное меню
$('[js-open-mobile]').on('click', function(e){
  e.preventDefault();
  if ($(this).hasClass('is-active')) {
    $(this).removeClass('is-active');
    $('.mobile-menu').slideUp(200);
    $('body').removeClass('no-scroll');
  } else {
    $(this).addClass('is-active');
    $('.mobile-menu').slideDown(200);
    $('body').addClass('no-scroll');
  }
});
  
  $('.mobile-menu__link--prod').on('click', function(e){
    e.preventDefault();
    if ($(this).hasClass('is-active')) {
      $(this).next('.mobile-menu__products').slideUp(200);
      $(this).removeClass('is-active');
    } else {
      $(this).next('.mobile-menu__products').slideDown(200);
      $(this).addClass('is-active');
    }
  })

// Плавный плейсхолдеры
$('[js-input] input').focus(function () {
		$(this).next('.callback-form__placeholder').addClass('is-active');
		$(this).css({
			"paddingTop": "22px",
			"paddingBottom": "12px"
		});
});
$('[js-input] input').focusout(function () {
		if ($(this).val() === "") {
			$(this).next('.callback-form__placeholder').removeClass('is-active');
			$(this).css({
				"paddingTop": "17px",
				"paddingBottom": "17px"
			});
		}
});
  
  // Форма обратной связи
$('[js-open-form]').on('click', function(e){
  e.preventDefault();
  $('body').addClass('no-scroll');
  $(this).addClass('is-active');
  $('.callback-form').addClass('is-active');
});

$('[js-close-form]').on('click', function(e){
  e.preventDefault();
  $('body').removeClass('no-scroll');
  $(this).removeClass('is-active');
  $('.callback-form').removeClass('is-active');
  $('.callback-form__ok').hide();
  $('.callback-form__form').show();
});

$('[js-submit-form]').on('click', function(e){
  e.preventDefault();
  $('.callback-form__form').hide();
  $('.callback-form__ok').show();
});
  
  
  // Slider
  $('.product-section').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    accessibility: false,
    pauseOnHover: false,
    pauseOnFocus: false,
    responsive: [
    {
      breakpoint: 768,
      settings: {
        dots: false
      }
    }
  ]
  });
  
  var posLeft = $('.manufac-section__wrap').offset().left;
  $('.slick-dots').css('margin-left', posLeft - 5);
  
  // Fullpage
  $.scrollify({
    section : '.section',
    scrollbars: false,
    easing: "easeOutExpo",
    interstitialSection : '.footer, .events-section',
    scrollSpeed: 1600,
    before:function(i,panels) {
      var ref = panels[i].attr("data-section-name");
      $(".pagination .active").removeClass("active");
      $(".pagination").find("a[href=\"#" + ref + "\"]").addClass("active");
      
      if ($('.pagination a[href*="03"]').hasClass('active')) {
        $('.header').addClass('header--blue');
      } else {
        $('.header').removeClass('header--blue');
      }
      if ($('.pagination a[href*="04"], .pagination a[href*="05"]').hasClass('active')) {
        $('.header').fadeOut(200)
      } else {
        $('.header').fadeIn(200)
      }
      if ($('.pagination a[href*="03"], .pagination a[href*="04"]').hasClass('active')) {
        $('.pagination').addClass('pagination--black');
      } else {
        $('.pagination').removeClass('pagination--black');
      }
    },
    afterRender:function() {
      var pagination = "<ul class=\"pagination\">";
      var activeClass = "";
      $(".section").each(function(i) {
        activeClass = "";
        if(i===0) {
          activeClass = "active";
        }
        pagination += "<li><a class=\"" + activeClass + "\" href=\"#" + $(this).attr("data-section-name") + "\"><span class=\"hover-text\">" + $(this).attr("data-section-name").charAt(0).toUpperCase() + $(this).attr("data-section-name").slice(1) + "</span></a></li>";
      });
      pagination += "</ul>";
      $("#fullpage").append(pagination);
      $(".pagination a").on("click",$.scrollify.move);
    },
  });
  
  if ($(window).width() < 992) {
    $.scrollify.destroy();
    
    $('.events-section__wrap').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      autoplay: true,
      accessibility: false,
      pauseOnHover: false,
      pauseOnFocus: false,
      adaptiveHeight: true
    });
    $('.footer__companies .flex-wrap').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      autoplay: true,
      accessibility: false,
      pauseOnHover: false,
      pauseOnFocus: false,
      responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3
        }
      },
        {
        breakpoint: 568,
        settings: {
          slidesToShow: 2
        }
      }
      ]
    });
  }
  
  // Footer mobile
  $('.footer__item-title').on('click', function(){
    if ($(this).hasClass('is-active')) {
      $(this).next('ul').slideUp(200);
      $(this).removeClass('is-active');
    } else {
      $(this).next('ul').slideDown(200);
      $(this).addClass('is-active');
    }
    
  });
});

$(window).resize(function(){
  if ($(window).width() < 992) {
    $.scrollify.destroy();
    
    $('.events-section__wrap').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      autoplay: true,
      accessibility: false,
      pauseOnHover: false,
      pauseOnFocus: false,
      adaptiveHeight: true
    });
    $('.footer__companies .flex-wrap').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      autoplay: true,
      accessibility: false,
      pauseOnHover: false,
      pauseOnFocus: false
    });
  }
});
