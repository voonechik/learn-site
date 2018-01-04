$(document).ready(function() {
  
$('[title = "Hosted on free web hosting 000webhost.com. Host your own website for FREE."]').css('display', 'none');	
  
// Title in header
  var $head_title = $("#head-wrap .main-title");
  
  setTimeout(function() {
    $head_title.addClass("wow animated fadeIn");
  } , 1000);
  
// Magnific popup
  $(".popup-link").magnificPopup({
    items: {
      src: "https://vimeo.com/93951774",
      type: "iframe"
    }
  });
  
// Burger menu	
  $(".burger-btn").click(function() {
    $("#mobile-mnu").css({
      "transform": "translateX(0)",
      "transition": "all 0.5s ease"
    });
  });

  $(".btn-close").click(function() {
    $("#mobile-mnu").css({
      "transform": "translateX(270px)",
      "transition": "all 0.5s ease"
    });
  });
  
// Dropdown menu item
  $(".top-nav li:nth-child(4)").mouseenter(function() {
    $(".dropdown").css({
      "display": "block"
    });
    
    $(".dropdown").addClass("animated fadeInUp");
  });
  
  $(".top-nav li:nth-child(4)").mouseleave(function() {
    $(".dropdown").css({
      "display": "none"
    });
    
    $(".dropdown").removeClass("animated fadeInUp");
  });
  
// Dropdown menu item-m
  $(".blog-link-m").click(function() {
    $(".dropdown-m").slideToggle();
    $("#mobile-mnu .item-nav").toggleClass("active");
  });
  
// Parallax
  $("#head-wrap").parallax();

// Service counter
  var animate_c = $(".animate-counter");
  
  animate_c.waypoint({
    handler: function(direction) {
      if ( direction === "down" && $(this.element).hasClass("animate-counter") ) {
         $(".timer").countTo({
            speed: 5000,
            refreshInterval: 50
          });
      }
    },
    offset: "70%"
  });
  
// Animation
  new WOW().init();	
  
// Waypoint

  var contentWayPoint = function() {
//	var i = 0;
  $('.animate-wrap').waypoint( function( direction ) {

    if( direction === 'down' ) {
        
//			i++;

//			$(this.element).addClass('item-animate');
//			setTimeout(function(){

        $('.animate-wrap').each(function(k){
          var el = $(this);
          setTimeout( function () {
            var effect = el.data('animate-effect');
            if ( effect === 'fadeIn') {
              el.addClass('wow animated fadeIn');
            } else if ( effect === 'fadeInLeft') {
              el.addClass('fadeInLeft animated-fast');
            } else if ( effect === 'fadeInRight') {
              el.addClass('fadeInRight animated-fast');
            } else {
              el.addClass('wow animated fadeInUp');
            }
              
            el.removeClass('item-animate');
          },  k * 200, 'easeInOutExpo' );
        });
          
//			}, 100);
        
    }

  } , { offset: '85%' } );
};

contentWayPoint();
  
// Owl Carousel
  $("#owl-carousel-1").owlCarousel({
    items: 1,
    smartSpeed: 900
  });
  
// Back to top button
  smoothScroll.init();
  
  function backToTop() {
    
    $(window).scroll(function() {
      var $win = $(window).scrollTop();
      var $button = $(".to-top");
      if ($win > 200) {
        $button.addClass("active-top");
      } else {
        $button.removeClass("active-top")
      }
    });
    
  };
  
  backToTop();
  
// Ajax
  $("form").submit(function() { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php", //Change
      data: th.serialize()
    }).done(function() {
      alert("Thank you!");
      setTimeout(function() {
        // Done Functions
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });
  
});