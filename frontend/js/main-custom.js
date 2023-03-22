$('.solution_silder_wrap').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots:true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        768: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
});

$('.testimonail_silder').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});
$('.partner_slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
        0: {
            items: 3
        },
        600: {
            items: 5
        },
        1000: {
            items: 7
        }
    }
});


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



function check() {
    var checkBox = document.getElementById("checbox");
    var text1 = document.getElementsByClassName("text1");
    var text2 = document.getElementsByClassName("text2");
  
    for (var i = 0; i < text1.length; i++) {
      if (checkBox.checked == true) {
        text1[i].style.display = "block";
        text2[i].style.display = "none";
      } else if (checkBox.checked == false) {
        text1[i].style.display = "none";
        text2[i].style.display = "block";
      }
    }
  }
  check();
// vedio


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
  