$(document).ready(function () {
  // FAQ
  function faqInit() {
    let $faq = $('.faq');
    if ($faq.length > 0) {
      let item = $('.faq__list-item');
      $(item).on('click', function () {
        $(item).each(function (index, element) {
          $(element).removeClass('faq__list-item--active');
        });
        $(this).addClass('faq__list-item--active');
      });
    }
  }

  // Custom scrollbar
  function customScrollInit() {
    if ($('.participants').length > 0) {
      const participantsPS = new PerfectScrollbar('.participants__row--bg-white');
    }
  }

  // Slider
  function initSlider() {
    let $sliderWrapper = $('.slider__wrapper');
    if ($sliderWrapper.length > 0) {
      $sliderWrapper.slick({
        prevArrow: $('.slider__nav-item--prev'),
        nextArrow: $('.slider__nav-item--next')
      });
    }
  }

  // File input
  function fileInputChange() {
    let $fileInput = $('.download__file-input')
    if ($fileInput.length > 0) {
      $fileInput.change(function (e) {
        let fileName = e.target.files[0].name;
        $('.download__progress-wrapper').removeClass('download__progress-wrapper--hidden');
        $('.download__file-input-name-wrapper').removeClass('download__file-input-name-wrapper--hidden');
        $('.download__file-input-name-text').text(fileName);
      });
    }
  }

  // Init
  faqInit();
  customScrollInit();
  initSlider();
  fileInputChange();
});
