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


// Fullpage
$(document).ready(function() {
	$('#fullpage').fullpage({
    navigation: true,
    navigationTooltips: ['01', '02', '03', '04'],
    verticalCentered: false
//    onLeave: function() {
//      if ($('.product-section, .events-section').hasClass('active')) {
//        $('.header').addClass('header--blue');
//      } else {
//        $('.header').removeClass('header--blue');
//      }
//      if ($('.advantages').hasClass('active')) {
//        $('.header').hide();
//      } else {
//        $('.header').show();
//      }
//    }
  });
});

// Slider
$(document).ready(function(){
  $('.product-section').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    accessibility: false,
    pauseOnHover: false,
    pauseOnFocus: false
  });
  
  var posLeft = $('.manufac-section__wrap').offset().left;
  $('.slick-dots').css('margin-left', posLeft - 5);
  
});
