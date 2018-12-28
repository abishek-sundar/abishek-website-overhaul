$(function () {
  $(document).scroll(function () {
    var $nav = $("#main-navbar");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    checkAndRemove();
  });
});

function checkAndRemove(){
  var nav = document.querySelector("#main-navbar");
  var scrollFound = false;
  var blueFound = false;
  for (var i = 0; i < nav.classList.length; i++){
    if (nav.classList[i] === "scrolled"){
      scrollFound = true;
    }else if(nav.classList[i]==="blue-bg"){
      blueFound = true;
    }
  }
  if (scrollFound && blueFound){
    nav.classList.remove("blue-bg");
  }
}