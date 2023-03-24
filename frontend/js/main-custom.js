
// ====================== PRELOADER =======================
window.addEventListener("load", function(){
  const preloader = document.getElementById("preloader");
  preloader.style.display = "none";
})



// ========================== HEADER STICKY =========================

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    //>=, not <=
    if (scroll >= 115) {
        $(".navbar").addClass("sticky_navbar");
    } else {
        $(".navbar").removeClass("sticky_navbar");
    }
});


// =============== SHIFTING HEADER ==================

$(document).ready(function() {
  var lastScroll = 50;

  jQuery(document).ready(function($) {
      $(window).scroll(function() {
          setTimeout(function() {
              //gives 100ms to finish scrolling before doing a check
              var scroll = $(window).scrollTop();
              console.log('Scroll:', scroll);
              console.log('LastScroll:', lastScroll);

              if (scroll > 100 && scroll > lastScroll) {
                  $(".navbar").addClass("shift");
              } else if (scroll < lastScroll) {
                  $(".navbar").removeClass("shift");
              }

              lastScroll = scroll;
          }, 100);
      });
  });
});

// ======================== VEDIO PLAYER ====================

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


// ======================== CHANGE PRICING  ======================
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



// ============================ WOW ANIMATION =======================
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

// =========================  BACK TO TOP ========================
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