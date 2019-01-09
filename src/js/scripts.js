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

(function () {
  var html = document.querySelector("html");
  if (html.scrollTop != 0) {
    var nav = document.querySelector("#main-navbar");
    nav.classList.toggle("scrolled");
  }
})();

(function () {
  var toggler = document.querySelector(".navbar-toggler");
  toggler.addEventListener("click", function () {
    var nav = document.querySelector("#main-navbar");
    nav.classList.toggle("blue-bg");
  });
})();

$(document).ready(function() {
 
  setTimeout(function(){
      $('body').addClass('loaded');
      $('h1').css('color','#222222');
      $('#main-navbar').removeClass('d-none');
  }, 000);

});