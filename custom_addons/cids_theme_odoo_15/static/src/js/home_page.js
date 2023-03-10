odoo.define("cids_theme_odoo_15.cidsdes", function (require) {
    var ajax = require("web.ajax");
    var core = require('web.core');

   $(document).ready(function() {
            var nav = $('.nav-bar');
            $('#wrapwrap').scroll(function () {
                if ($(this).scrollTop() > 50) {
                    nav.addClass("f-nav");
                } else {
                    nav.removeClass("f-nav");
                }
            });
   })

     $(document).ready(function(){
            var width = $('#wrapwrap').width();
            if(width<=990)
            {
            $('.drop-down').click(function(){
                $('.child-menu').toggleClass('showmenu');
            })
        }
        });

    $(document).ready(function () {
            var owl = $('.owl-carousel.tpbanner');
            owl.owlCarousel({
                nav: true,
                autoplay: true,
                autoplayTimeout: 4000,
                autoplaySpeed: 3500,
                autoplayHoverPause: true,
                loop: true,

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
            $( ".tpbanner .owl-prev").html('<i class="fa fa-angle-left"></i>');
            $( ".tpbanner .owl-next").html('<i class="fa fa-angle-right"></i>');
        });


        $("document").ready(function () {
            $('.humburger').click(function(){
               $('.menu').toggleClass('mobileMenu');

            });
        });

          $(document).ready(function () {
            var owl4 = $('.owl-carousel.address');
            owl4.owlCarousel({
                margin: 10,
                nav: true,
                autoplay: false,
                loop: true,

                responsive: {
                    0: {
                        items: 1
                    },
                    769: {
                        items: 1
                    },
                    1000: {
                        items: 1
                    }
                }
            });
            $(".addholder .owl-prev").html('<img src="/cids_theme_odoo_15/static/src/img/images/footerLeft.png"/>');
            $(".addholder .owl-next").html('<img src="/cids_theme_odoo_15/static/src/img/images/footerRight.png"/>');

        });


        $(document).ready(function () {
            var owl5 = $('.owl-carousel.aboutcarsouel');
            owl5.owlCarousel({
                margin: 0,
                nav: true,
                autoplay: true,
                loop: true,
                slideTransition: 'linear',
            autoplayTimeout: 4000,
            autoplaySpeed: 1500,
            autoplayHoverPause: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    769: {
                        items: 1
                    },
                    1000: {
                        items: 1
                    }
                }
            });
        });


         $(document).ready(function () {
            var owl6 = $('.owl-carousel.hotelServicesCarsouel');
            owl6.owlCarousel({
                margin: 0,
                nav: true,
                autoplay: false,
                loop: true,

                responsive: {
                    0: {
                        items: 1
                    },
                    769: {
                        items: 3
                    },
                    1000: {
                        items: 4
                    }
                }
            });
            $(".hotel-services .owl-prev").html('<img src="/cids_theme_odoo_15/static/src/img/images/Left.png"/>');
            $(".hotel-services .owl-next").html('<img src="/cids_theme_odoo_15/static/src/img/images/Right.png"/>');
        });


          $(document).ready(function () {
            var owl7 = $('.owl-carousel.hotelCaseCarsouel');
            owl7.owlCarousel({
                margin: 32,
                nav: true,

                autoplay: false,
                loop: true,

                responsive: {
                    0: {
                        items: 1
                    },
                    769: {
                        items: 1,
                        stagePadding:0
                    },
                    1000: {
                        items: 1,
                        stagePadding: 170,
                    }
                }
            });
            $(".hotel-case .owl-prev").html('<img src="/cids_theme_odoo_15/static/src/img/images/Left.png"/>');
            $(".hotel-case .owl-next").html('<img src="/cids_theme_odoo_15/static/src/img/images/Right.png"/>');
        });


          $(document).ready(function () {
            var owl8 = $('.owl-carousel.hotelClientCarsouel');
            owl8.owlCarousel({
                margin: 150,
                nav: true,
                autoplay: true,
                loop: true,
                autoplayTimeout: 4000,
            autoplaySpeed: 3500,
            autoplayHoverPause: true,

                responsive: {
                    0: {
                        items: 3
                    },
                    769: {
                        items: 4
                    },
                    1000: {
                        items: 4
                    }
                }
            });
        });
    
    
    
     $(document).ready(function () {
            var owl9 = $('.owl-carousel.clientFeedbackCarsouel');
            owl9.owlCarousel({
                margin: 0,
                nav: true,
               
                autoplay: false,
                loop: true,
//                autoplaySpeed:5500,
//                autoplayHoverPause: true,
//                animateOut: 'fadeOut',
//                animateIn: 'fadeIn',

                responsive: {
                    0: {
                        items: 1
                    },
                    769: {
                        items: 1,
                        stagePadding:0
                    },
                    1000: {
                        items: 1,
//                        stagePadding: 170,
                    }
                }
            });
            $(".client-feedback .owl-prev").html('<img src="/cids_theme_odoo_15/static/src/img/images/whiteLeft.png"/>');
            $(".client-feedback .owl-next").html('<img src="/cids_theme_odoo_15/static/src/img/images/whiteRight.png"/>');
        });
        $(document).ready(function () {
            var owl = $('.owl-carousel.commercialBanner');
            owl.owlCarousel({
                margin: 0,
                nav: true,
                autoplay: true,
                autoplayTimeout: 4000,
                autoplaySpeed: 3500,
                autoplayHoverPause: true,
                loop: true,

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
            $( ".commercialBanner .owl-prev").html('<i class="fa fa-angle-left"></i>');
            $( ".commercialBanner .owl-next").html('<i class="fa fa-angle-right"></i>');
        });

        var btn = $('#button');

        $('#wrapwrap').scroll(function() {
          if ($('#wrapwrap').scrollTop() > 300) {
            btn.addClass('show');
          } else {
            btn.removeClass('show');
          }
        });

        btn.on('click', function(e) {
          e.preventDefault();
          $('html, body').animate({scrollTop:0}, '300');
        });

        $(document).ready(function () {
            var owl = $('.owl-carousel.aboutBanner');
            owl.owlCarousel({
                margin: 0,
                nav: true,
                autoplay: true,
                autoplayTimeout: 4000,
                autoplaySpeed: 3500,
                autoplayHoverPause: true,

                loop: true,

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
            $(".abouttop-banner .owl-prev").html(' <i class="fa fa-angle-left"></i>');
            $(".abouttop-banner .owl-next").html(' <i class="fa fa-angle-right"></i>');

        });

        $("document").ready(function () {
            $(".accordion-content:not(:first-of-type)").css("display", "none");

            $(".js-accordion-title:first-of-type").addClass("open");

            $(".js-accordion-title").click(function () {
                $(".open").not(this).removeClass("open").next().slideUp(300);
                $(this).toggleClass("open").next().slideToggle(300);
            });
            $(".accordion-container .accordion-title").eq(0).click(function () {
                var imageUrl =
                    "/cids_theme_odoo_15/static/src/img/how_design/define-look.png";
                $(".right-proc").css("background-image", "url(" + imageUrl + ")");
                $(".right-proc .absDiv-except h2").text('We Always Provide Undivided Attention to your  Project Visions and Aspirations');
            });
            $(".accordion-container .accordion-title").eq(1).click(function () {
                var imageUrl =
                    "/cids_theme_odoo_15/static/src/img/how_design/concept-development.png";
                $(".right-proc").css("background-image", "url(" + imageUrl + ")");
                $(".right-proc .absDiv-except h2").text('Concept Development');

            });
            $(".accordion-container .accordion-title").eq(2).click(function () {
                var imageUrl =
                    "/cids_theme_odoo_15/static/src/img/how_design/smartLogistics.png";
                $(".right-proc").css("background-image", "url(" + imageUrl + ")");
                $(".right-proc .absDiv-except h2").text('Design & Procurement');

            });
            $(".accordion-container .accordion-title").eq(3).click(function () {
                var imageUrl =
                    "/cids_theme_odoo_15/static/src/img/how_design/handover.png";
                $(".right-proc").css("background-image", "url(" + imageUrl + ")");
                $(".right-proc .absDiv-except h2").text('Completion & Handover');

                // console.log(imageUrl);
            });

        });



//        $("document").ready(function () {
//            var nav = $('.header');
//
//            $(window).scroll(function () {
//                if ($(this).scrollTop() > 50) {
//                    nav.addClass("f-nav");
//                } else {
//                    nav.removeClass("f-nav");
//                }
//            });
//        });

   









  
})
