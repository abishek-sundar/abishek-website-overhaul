$(document).ready(function () {
  var scrolled = 0;
  $(function () {
    $(document).scroll(function () {
      var $nav = $("#main-navbar");
      scrolled = 1;
      $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
  });

  $(function () {
    var mdEventListener = window.matchMedia("(max-width: 768px)");
    mdEventListener.addListener(checkButtonAndClick);
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

  $(function () {
    var imagesLoaded = 0;
    setTimeout(function () {
      if (!imagesLoaded) {
        preloadScreen(300);
      }
    }, 4700);
    $("body").imagesLoaded({
      background: true
    }, function () {
      imagesLoaded = 1;
      $('body').addClass('loaded');
      $('h1').css('color', '#222222');
      setTimeout(function () {
        $('#main-navbar').removeClass('trans-init');
      }, 800);
    });
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
  var prevgoto;
  var prevScroll;
  $(function () {
    var links = document.querySelectorAll("a");
    for (var i = 0; i < links.length; i++) {
      for (var j = 0; j < links[i].classList.length; j++) {
        if (links[i].classList[j] == "animate-scroll") {
          links[i].addEventListener("click", function (event) {
            event.preventDefault();

            var goto = this.getAttribute('href');
            var oldScroll = $(window).scrollTop();
            var newScroll = $(goto).offset().top - 55;
            if (prevgoto !== goto || Math.floor(prevScroll) !== Math.floor(oldScroll)) {
              $('html, body').animate({
                scrollTop: newScroll
              }, 1000);
            }
            prevgoto = goto;
            prevScroll = newScroll;
            scrolled = 0;
            if ($(window).width() < 768) {
              if (goto != "#body" && this.id != "scroll") {
                document.querySelector("button").click();
              } else if (goto == "#body") {
                checkButtonAndClick();
              }
            }
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

function checkButtonAndClick() {
  var nav = document.querySelector("#main-navbar");
  var classes = nav.classList;
  for (var i = 0; i < classes.length; i++) {
    if (classes[i] == "blue-bg") {
      document.querySelector("button").click();
    }
  }
}