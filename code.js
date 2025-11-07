$('.center').slick({
  centerMode: true,
  centerPadding: '20px',
  slidesToShow: 3,
  dots: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '20px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 1
      }
    }
  ]
});

// navbar JS start

$(".navbarToggler").click(function(){
    $(".navbarMenuCollapsed").toggleClass("show");
//     var $div = $('.navbarMenuCollapsed');
//   if ($div.height() === 0) {
//     // Khula nahi hai
//     var fullHeight = $div.prop('scrollHeight');
//     $div.animate({ height: fullHeight }, 100);
//   } else {
//     // Already open hai
//     $div.animate({ height: auto }, 100);
//   }
  });

// navbar JS end

$('.cusSubMenuWrap > .NavLink').click(function (event) {
        event.preventDefault();
        let submenu = $(this).next('.cusSubMenu');
        let parentWrap = $(this).closest('.cusSubMenuWrap');
        $('.cusSubMenu').not(submenu).removeClass('open');
        $('.cusSubMenuWrap').not(parentWrap).removeClass('open');
        submenu.toggleClass('open');
        parentWrap.toggleClass('open');
        event.stopPropagation();
    });

    $(document).click(function () {
        $('.cusSubMenu').removeClass('open');
        $('.cusSubMenuWrap').removeClass('open');
    });

    $('.cusSubMenu').click(function (event) {
        event.stopPropagation();
    });