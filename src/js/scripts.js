$(function () {
  $(document).scroll(function () {
    var $nav = $("#main-navbar");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});

function changeBg() {
  var nav = document.querySelector("#main-navbar");
  nav.classList.toggle("blue-bg");
}

function removeBlue(){
  var nav = document.querySelector("#main-navbar");
  var classes = nav.classList;
  for (var i = 0; i < classes.length; i++){
    if (classes[i] == "blue-bg"){
      document.querySelector("button").click();
    }
  }
}

$(function(){
  var mdEventListener = window.matchMedia("(max-width: 768px)");
  mdEventListener.addListener(removeBlue);
});
