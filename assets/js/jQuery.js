 // for Header main
 $(document).ready(function () {
    var $headerMain = $(".header-main");
    var $headerTop = $(".header-top");
    var $navbarAnchor = $('.navbar_anchor');

    // Function to check window width and adjust .header-top display
    function checkWidth() {
      if ($(window).width() < 790) {
        $headerTop.hide();
      } else {
        $headerTop.show();
      }
    }

    checkWidth();

    $(window).resize(checkWidth);

    // Handle scroll events
    $(window).scroll(function () {
      var scrollPos = $(this).scrollTop();

      // Handle header main background color and navbar anchor color
      if (scrollPos > 100) {
        $headerMain.css("background-color", "#ececec");
        $navbarAnchor.css('color', '#000');
      } else {
        $headerMain.css("background-color", "transparent");
        $navbarAnchor.css('color', '#efefee');
      }

      // Handle header top display based on scroll position
      if (scrollPos > 700) {
        $headerTop.hide();
      } else {
        checkWidth();
      }
    });
  });
  // for image Animation
  window.addEventListener('scroll', function () {
    const image = document.getElementById('animatedImage');
    if (!image) return; // Exit if the element is not found

    const scrollPosition = window.scrollY;

    if (scrollPosition >= 1600) {
      image.classList.add('show');
    } else {
      image.classList.remove('show');
    }
  });

  // for like count
//   $(document).ready(function () {
//     var likeCount = 0;
//     $('#like-button').click(function () {
//       if ($(this).hasClass('liked')) {
//         likeCount--;
//         $(this).removeClass('liked');
//       } else {
//         likeCount++;
//         $(this).addClass('liked');
//       }
//       $('#like-count').text(likeCount);
//     });
//   });
//   // dublicates function
//   $(document).ready(function () {
//     var likeCount = 0;
//     $('#like-button-2').click(function () {
//       if ($(this).hasClass('liked')) {
//         likeCount--;
//         $(this).removeClass('liked');
//       } else {
//         likeCount++;
//         $(this).addClass('liked');
//       }
//       $('#like-count-2').text(likeCount);
//     });
//   });
//   $(document).ready(function () {
//     var likeCount = 0;
//     $('#like-button-3').click(function () {
//       if ($(this).hasClass('liked')) {
//         likeCount--;
//         $(this).removeClass('liked');
//       } else {
//         likeCount++;
//         $(this).addClass('liked');
//       }
//       $('#like-count-3').text(likeCount);
//     });
//   });

$(document).ready(function () {
    var likeCounts = {
        '#like-button': 0,
        '#like-button-2': 0,
        '#like-button-3': 0,
        '#like-button-4': 0,
        '#like-button-5': 0
    };

    $('.like-button').click(function () {
        var id = '#' + $(this).attr('id');
        if ($(this).hasClass('liked')) {
            likeCounts[id]--;
            $(this).removeClass('liked');
        } else {
            likeCounts[id]++;
            $(this).addClass('liked');
        }
        $(id.replace('button', 'count')).text(likeCounts[id]);
    });
});

  // for nav link active
  document.addEventListener('DOMContentLoaded', function() {
  const url = window.location.href;
  const links = [
      { id: 'index', keyword: 'index' },
      { id: 'about', keyword: 'about' },
      { id: 'blog', keyword: 'blog' },
      { id: 'services', keyword: 'services' },
      { id: 'booking', keyword: 'booking' },
      { id: 'contact', keyword: 'contact' }
  ];

  links.forEach(link => {
      if (url.includes(link.keyword)) {
          document.getElementById(link.id).style.background = '#4c889e';
      }
  });
});