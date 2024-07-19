$(window).scroll(function() {
    if ($(this).scrollTop()) {
        $('#toTop').fadeIn();
    } else {
        $('#toTop').fadeOut();
    }
});

$("#toTop").click(function () {
   //1 second of animation time
   //html works for FFX but not Chrome
   //body works for Chrome but not FFX
   //This strange selector seems to work universally
   $("html, body").animate({scrollTop: 0}, 1000);
});

$(document).ready(function(){
    /**owl-slider-settings**/
      $('.slider').owlCarousel({
          loop:true,
          margin:0,
          nav:true,
          center: false,
          autoplay:true,
              autoplayTimeout:5000,
              navText : ["<img src='images/prev.png' />","<img src='images/next.png' />"],
              dots:false,
          responsive:{
              0:{
                  items:1
              },
              600:{
                  items:1
              },
              1000:{
                  items:1
              }
          }
      });
      $('.latestSlider').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        center: false,
        autoplay:true,
            autoplayTimeout:5000,
            navText : ["<img src='images/arrow-left.png' />","<img src='images/arrow-right.png' />"],
            dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
    $('.testimonialSlider').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        center: false,
        autoplay:true,
            autoplayTimeout:5000,
            navText : ["<img src='images/arrow-left.png' />","<img src='images/arrow-right.png' />"],
            dots:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
      $('.fiveSlider').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        center: true,
        autoplay:true,
            autoplayTimeout:5000,
            navText : ["<img src='images/arrow-left.png' />","<img src='images/arrow-right.png' />"],
            dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });
    $('.brandSlider').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        center: false,
        autoplay:true,
            autoplayTimeout:5000,
            navText : ["<img src='images/arrow-left.png' />","<img src='images/arrow-right.png' />"],
            dots:false,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });
      $('.threeSlider').owlCarousel({
        loop:true,
        margin:30,
        nav:true,
        center: false,
        autoplay:true,
            autoplayTimeout:5000,
            navText : ["<img src='images/prev.png' />","<img src='images/next.png' />"],
            dots:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });
    /**Announcement-slider-settings**/
      $('.announcementSlider').owlCarousel({
          loop:true,
          margin:10,
          nav:true,
          autoplay:true,
              autoplayTimeout:5000,
              navText : ["<img src='images/arrow-left.png' />","<img src='images/arrow-right.png' />"],
              dots:false,
          responsive:{
              0:{
                  items:1
              },
              600:{
                  items:1
              },
              1000:{
                  items:2
              }
          }
      });
      
    });

//dropmenu-toggle for mobile
// if(window.innerWidth < 991){
//   $( ".menuToggleIco" ).click(function() {
//     $( this ).siblings('.dropMenu').toggleClass("active");
//   });
// }


// $(".mainNavList li .menuToggleIco").on('click', '.menuToggleIco', function () {
//     $(".mainNavList li ul.active").removeClass("active");
//     // adding classname 'active' to current click li 
//     $('.mainNavList li ul').addClass("active");
// });
$( ".navbar-toggler, .cross-toggler" ).click(function() {
    $("#navbarSupportedContent").toggleClass("active");
    $(".overLay").toggleClass("active");
  });
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
        $(".mainHeader").addClass("fixedHeader");
    }else{
    	$(".mainHeader").removeClass("fixedHeader");
    }
});

//dropmenu-toggle for mobile
if(window.innerWidth < 991){
    $( ".menuToggleIco" ).click(function() {
      $( this ).siblings('.dropMenu').toggleClass("active");
      $( this ).toggleClass("active");
    });
  }