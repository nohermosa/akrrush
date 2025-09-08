/******/ (() => { // webpackBootstrap
    var __webpack_exports__ = {};

    window.PXUTheme.jsTestimonials = {
      init: function($section) {
        // Add settings from schema to current object
        window.PXUTheme.jsTestimonials = $.extend(this, window.PXUTheme.getSectionData($section));
        
        const $testimonialSlider = $section.find('[data-testimonial-slider]');
        
        $testimonialSlider.flickity({
          wrapAround: true,
          initialIndex: 0,
          prevNextButtons: false,
          pageDots: this.show_navigation_dots,
          watchCSS: true,
          groupCells: '33.333%',
          cellAlign: 'center',
          autoPlay: this.scroll_speed * 1000,
          selectedAttraction: 0.2,
          friction: 0.8
        });
    
        // Resize flickity when the slider is settled
        $testimonialSlider.on('settle.flickity', function() {
          $testimonialSlider.flickity('resize');
        });
    
        $section.on('click', '.testimonial__nav--prev', function () {
          $testimonialSlider.flickity('previous');
        });
    
        $section.on('click', '.testimonial__nav--next', function () {
          $testimonialSlider.flickity('next');
        });
      },
    
      blockSelect: function($section, blockId) {
        const $testimonialSlider = $section.find('[data-testimonial-slider]');
        const slideIndex = $('#shopify-section-' + blockId).data('testimonial-index');
        $testimonialSlider.flickity('select', slideIndex);
      },
    
      unload: function($section) {
        const $slider = $section.find('.flickity-enabled');
        $slider.flickity('destroy');
        $('.testimonial__nav--prev').off();
        $('.testimonial__nav--next').off();
      }
    }
    
    /******/ })();