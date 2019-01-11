$(document).ready(function () {
  $(function () {
    $(document).scroll(function () {
      var $nav = $("#main-navbar");
      $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
  });

  $(function () {
    var mdEventListener = window.matchMedia("(max-width: 768px)");
    mdEventListener.addListener(function () {
      var nav = document.querySelector("#main-navbar");
      var classes = nav.classList;
      for (var i = 0; i < classes.length; i++) {
        if (classes[i] == "blue-bg") {
          document.querySelector("button").click();
        }
      }
    });
  });

  $(function () {
    var html = document.querySelector("html");
    if (html.scrollTop != 0) {
      var nav = document.querySelector("#main-navbar");
      nav.classList.toggle("scrolled");
    }
  });

  $(function () {
    var toggler = document.querySelector(".navbar-toggler");
    toggler.addEventListener("click", function () {
      var nav = document.querySelector("#main-navbar");
      nav.classList.toggle("blue-bg");
    });
  });


  $("body").imagesLoaded( { background: true }, function() {

    $('body').addClass('loaded');
    $('h1').css('color', '#222222');
    setTimeout(function () {
      $('#main-navbar').removeClass('trans-init');
    }, 800);
  });
    
 

  $(function () {
    var introContainer = document.querySelector(".intro-container");
    introContainer.addEventListener("overflow", function () {
      document.querySelector(".landingNote").classList.add("overflow");
    });
    introContainer.addEventListener("underflow", function () {
      document.querySelector(".landingNote").classList.remove("overflow");
    });
  });

  $(function () {
    var links = document.querySelectorAll("a");
    for (var i = 0; i < links.length; i++) {
      for (var j = 0; j < links[i].classList.length; j++) {
        if (links[i].classList[j] == "animate-scroll") {
          links[i].addEventListener("click", function () {
            var goto = this.getAttribute('href');
            console.log(goto);
            $('html, body').animate({
              scrollTop: $(goto).offset().top - 55
            }, 1000);
          });
        }
      }
    }
  });

});

function preloadScreen(time) {
  setTimeout(function () {
    $('body').addClass('loaded');
    $('h1').css('color', '#222222');
    setTimeout(function () {
      $('#main-navbar').removeClass('trans-init');
    }, 800);
  }, time);
}