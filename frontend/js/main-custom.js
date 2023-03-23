$(document).ready(function() {
  $('.accordion-panel').on('click', '.accordion__header', function() {
    $('.accordion__body').slideUp().removeClass('flipInX');
    if($(this).next().is(':hidden')) {
      $(this).next().slideDown().addClass('flipInX');
      $(this).closest('.accordion__header').addClass('open');
    } else {
      $(this).next().slideUp();
      $(this).closest('.accordion__header').removeClass('open');
    }
  });
});

// HEADER STICKY 

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    //>=, not <=
    if (scroll >= 115) {
        $(".navbar").addClass("sticky_navbar");
    } else {
        $(".navbar").removeClass("sticky_navbar");
    }
});

// VEDIO PLAYER

$(document).ready(function() {
    var video = $('.video-container video')[0];
    var playPauseBtn = $('.play-pause');
    
    // Play/Pause button click event handler
    playPauseBtn.click(function() {
      if (video.paused) {
        video.play();
        playPauseBtn.parent().addClass('playing');
      } else {
        video.pause();
        playPauseBtn.parent().removeClass('playing');
      }
    });
});



// ANIMATION
wow = new WOW(
  {
    animateClass: 'animated',
    offset:       100,
    callback:     function(box) {
      console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
    }
  }
);
wow.init();

// BACK TO TOP
$(document).ready(function(){ 
  $(window).scroll(function(){ 
      if ($(this).scrollTop() > 100) { 
          $('#scroll').fadeIn(); 
      } else { 
          $('#scroll').fadeOut(); 
      } 
  }); 
  $('#scroll').click(function(){ 
      $("html, body").animate({ scrollTop: 0 }, 600); 
      return false; 
  }); 
});