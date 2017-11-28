// Prevent # behavior
  $('[href="#"]').click(function(e) {
    e.preventDefault();
  });

// Preloader
$(window).on('load', function() {
  $('#status').fadeOut();
  $('#preloader').delay(350).fadeOut('slow');
  $('body').removeClass('no-scroll');
})

$(document).ready(function(){
  
/////////
/// Homepage
/////////
  
  // Меню
$('[js-open-catalog]').on('click', function(e){
  e.preventDefault();
  if ($(this).hasClass('is-active')) {
    $.scrollify.enable();
    $('body').removeClass('no-scroll');
    $(this).removeClass('is-active');
    $(this).find('.hamburger').removeClass('is-active');
    $('.menu').removeClass('is-active');
    $('.header').removeClass('header--menu-open');
  } else {
    $.scrollify.disable();
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
    $('body').removeClass('no-scroll');
    $(this).removeClass('is-active');
    $('.mobile-menu').slideUp(300);
  } else {
    $('body').addClass('no-scroll');
    $(this).addClass('is-active');
    $('.mobile-menu').slideDown(300);
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
		$(this).next('[class*=placeholder]').addClass('is-active');
		$(this).css({
			"paddingTop": "22px",
			"paddingBottom": "12px"
		});
});
$('[js-input] input').focusout(function () {
		if ($(this).val() === "") {
			$(this).next('[class*=placeholder]').removeClass('is-active');
			$(this).css({
				"paddingTop": "17px",
				"paddingBottom": "17px"
			});
		}
});
  
  // Форма обратной связи
$('[js-open-form]').on('click', function(e){
  e.preventDefault();
  $.scrollify.disable();
  $('body').addClass('no-scroll');
  $('[js-open-mobile]').removeClass('is-active');
  $('.mobile-menu').slideUp(300);
  $(this).addClass('is-active');
  $('.callback-form').addClass('is-active');
});

$('[js-close-form]').on('click', function(e){
  e.preventDefault();
  $.scrollify.enable();
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
  
  
  // Слайдер продукция
  $('.product-section').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: false,
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
  
  // Выравнивание точек для слайдера
  if ($('.manufac-section__wrap').length > 0) {
    var posLeft = $('.manufac-section__wrap').offset().left;
    $('.slick-dots').css('padding-left', posLeft - 5);
  }
  
  // Fullpage scroll
  if ($('body').hasClass('homepage-body')) {
      if ($(window).width() > 991) {
        $.scrollify({
          updateHash: false,
          section : '.section',
          scrollbars: false,
          easing: "easeOutExpo",
          interstitialSection : '.footer, .events-section',
          scrollSpeed: 1600,
          before:function(i,panels) {
            var ref = panels[i].attr("data-section-name");
            $(".pagination .active").removeClass("active");
            $(".pagination").find("a[href=\"#" + ref + "\"]").addClass("active");
            
            // Меняем стили у пагинации и хедера
            if ($('.pagination a[href*="05"]').hasClass('active')) {
              $('.pagination').addClass('pagination--hidden');
            } else {
              $('.pagination').removeClass('pagination--hidden');
            }
            
            if ($('.pagination a[href*="03"]').hasClass('active')) {
              $('.header').removeClass('header--white');
            } else {
              $('.header').addClass('header--white');
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
            $('.header').addClass('header--white')
          },
        });
      }
  } else {
    // Для остальных страниц
    $('.header').removeClass('header--white')
    $('.footer').removeClass('section');
    $('.footer').removeAttr('data-section-name');
  }
  
  
  // Events slider mobile
  var _eventsSlick = $('.events-section__wrap');
  var eventsSlickOptions = {
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      autoplay: false,
      accessibility: false,
      pauseOnHover: false,
      pauseOnFocus: false,
      adaptiveHeight: false
    }
  if ($(window).width() < 992) { 
    _eventsSlick.slick(eventsSlickOptions);
  }
  
    $(window).resize(300, function(e){
      if ($(window).width() > 991 ) {
        if (_eventsSlick.hasClass('slick-initialized')) {
          _eventsSlick.slick('unslick');
        }
        return
      }
      if (!_eventsSlick.hasClass('slick-initialized')) {
        return _eventsSlick.slick(eventsSlickOptions);
      }
    });
  _eventsSlick.on('beforeChange', function(){
      var maxH = 0;
      $('.event-item').each(function () {
         var elemHeight = parseInt($(this).height());
         if(elemHeight > maxH) {
            maxH = elemHeight;
         };
       });
      $('.event-item').height(maxH);
    });
  
  // Footer companies slider mobile
   var _footerSlick = $('.footer__companies .flex-wrap');
    var footerSlickOptions = {
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      autoplay: false,
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
    }
    if ($(window).width() < 992) {
      _footerSlick.slick(footerSlickOptions);
    }
  
    $(window).resize(300, function(e){
      if ($(window).width() > 991 ) {
        if (_footerSlick.hasClass('slick-initialized')) {
          _footerSlick.slick('unslick');
        }
        return
      }
      if (!_footerSlick.hasClass('slick-initialized')) {
        return _footerSlick.slick(footerSlickOptions);
      }
  });
  
  // Footer mobile
  $('.footer__item-title').on('click', function(e){
    e.preventDefault();
    if ($(window).width() < 992) {
      if ($(this).hasClass('is-active')) {
        $(this).next('ul').slideUp(200);
        $(this).removeClass('is-active');
      } else {
        $('.footer__item-title').next('ul').slideUp(200);
        $('.footer__item-title').removeClass('is-active')
        $(this).next('ul').slideDown(200);
        $(this).addClass('is-active');
      }
    }
  });
  
  // VIDEO PLAY
  $('[js-play]').on('click', function() {
    $('.video-popup').addClass('is-active');
    playVideo();
  });
  $('.video-popup__close').on('click', function(){
    $('.video-popup').removeClass('is-active');
    playVideo();
  });
  
  function playVideo() {
    var videoFrame = $('.video-popup__video')
    var iframe = videoFrame.find('iframe');
    var addedSubject;
    
    if (!videoFrame.is('.is-playing')) {
      // check if params are present
      if (iframe.attr('src').indexOf("?") >= 0) {
        addedSubject = "&autoplay=1"
      } else {
        addedSubject = "?autoplay=1"
      }
      iframe.attr("src", iframe.attr('src') + addedSubject);

      videoFrame.addClass('is-playing');
    } else {
      iframe.attr("src", "https://www.youtube.com/embed/koW2Clc0xEA")
      videoFrame.removeClass('is-playing');
    }
  }

//  function playVideo(that) {
//    // that - get's triggered on playbtn
//    var videoFrame = that.closest('.video')
//    var iframe = videoFrame.find('iframe');
//    var addedSubject;
//
//    // chrome bug - fullscreen video
//    if (that.closest('.wow')) {
//      var thatObj = that.closest('.wow');
//      thatObj.removeClass('wow').removeClass('wowFadeUp');
//      thatObj.attr('style', null)
//
//      thatObj.css({
//        'transform': 'translate3d(0,0,0)',
//        'opacity': 1
//      })
//    }
//
//    if (!videoFrame.is('.is-playing')) {
//      // check if params are present
//      if (iframe.attr('src').indexOf("?") >= 0) {
//        addedSubject = "&autoplay=1"
//      } else {
//        addedSubject = "?autoplay=1"
//      }
//      iframe.attr("src", iframe.attr('src') + addedSubject);
//
//      videoFrame.addClass('is-playing');
//    } else {
//      iframe.attr("src", "https://www.youtube.com/embed/koW2Clc0xEA")
//      videoFrame.removeClass('is-playing');
//    }
//
//  }
  
  
  /////////
  /// Documents page
  /////////
  $('[js-select]').selectric();
  
  $('.page-tabs__tab').on('click', function(e){
    e.preventDefault();
    $('.page-tabs__tab').removeClass('is-active');
		$(this).addClass('is-active');
		var dataId = $(this).attr('data-id');
    if (dataId == 'all') {
      $('.doc-section__item').addClass('is-active');
    } else {
		  $('.doc-section__item').removeClass('is-active');
		  $('.doc-section__item#' + dataId).addClass('is-active');
    }
  });
  
  $('.doc-section__tabs select').on('change', function(){
    var dataOpt = $(this).find('option:selected').attr('data-option')
    if (dataOpt == 'all') {
      $('.doc-section__item').addClass('is-active');
    } else {
		  $('.doc-section__item').removeClass('is-active');
		  $('.doc-section__item#' + dataOpt).addClass('is-active');
    }
  });
  
   // Написать сообщение
  $('[js-write-form]').on('click', function(e){
    e.preventDefault();
    $('body').addClass('no-scroll');
    $('[js-open-mobile]').removeClass('is-active');
    $('.mobile-menu').slideUp(300);
    $(this).addClass('is-active');
    $('.write-form').addClass('is-active');
  });
  
  $('[js-close-form]').on('click', function(e){
    e.preventDefault();
    $('body').removeClass('no-scroll');
    $(this).removeClass('is-active');
    $('.write-form').removeClass('is-active');
  });
  
  /////////
  /// Documents page
  /////////
  if ($('body').hasClass('month-event-body')) {
    $('.header').addClass('header--white')
  }
});


// Resize functions
$(window).resize(function(){
  // Выравнивание точек для слайдера
  if ($('.manufac-section__wrap').length > 0) {
    var posLeft = $('.manufac-section__wrap').offset().left;
    $('.slick-dots').css('padding-left', posLeft - 5);
  }
  
  if ($(window).width() < 992) {
    $('.footer__item-title').next('ul').css('display', 'none');
    $.scrollify.destroy();
    $.scrollify.disable();
    $('.header').removeClass('header--white');
  } else {
    $('.event-item').removeAttr('style');
    $('.footer__item-title').removeClass('is-active');
    $('.footer__item-title').next('ul').css('display', 'block');
    // Fullpage
    if ($('body').hasClass('homepage-body')) {
      $('.header').addClass('header--white');
      if ($(window).width() > 991) {
        $.scrollify.enable();
        $.scrollify({
          updateHash: false,
          section : '.section',
          scrollbars: false,
          easing: "easeOutExpo",
          interstitialSection : '.footer, .events-section',
          scrollSpeed: 1600,
          before:function(i,panels) {
            var ref = panels[i].attr("data-section-name");
            $(".pagination .active").removeClass("active");
            $(".pagination").find("a[href=\"#" + ref + "\"]").addClass("active");
            
            if ($('.pagination a[href*="05"]').hasClass('active')) {
              $('.pagination').addClass('pagination--hidden');
            } else {
              $('.pagination').removeClass('pagination--hidden');
            }
            
            if ($('.pagination a[href*="03"]').hasClass('active')) {
              $('.header').removeClass('header--white');
            } else {
              $('.header').addClass('header--white');
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
            $('.header').addClass('header--white')
          },
        });
      }
    } else {
      $('.footer').removeClass('section');
      $('.footer').removeAttr('data-section-name');
    }
    if ($('body').hasClass('month-event-body')) {
      $('.header').addClass('header--white')
    }
  }
  
});
