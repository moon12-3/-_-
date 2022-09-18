const toggleBtn = document.querySelector('.navbar-toggle-btn');
const menu = document.querySelector('.navbar-menu');

toggleBtn.addEventListener('click', ()=> {
    menu.classList.toggle('active');   // 클릭 시 active 없으면 active 추가
})

let last_top = $(this).scrollTop();
$(window).scroll(function() {
  let this_top = $(this).scrollTop();
  if( this_top > last_top ) {
    $(".nav").addClass("hide");
  }
  else {
    $(".nav").removeClass("hide");
  }
	last_top = this_top;  
});

let bar = $('.bar');

bar.fadeOut(0);

$(document).ready(function(){
  $(window).scroll(function () {
    let scroll_height = $(document).scrollTop();
    // console.log(scroll_height);
    if ( $(window).height() >= scroll_height) {
        bar.fadeOut();
        // console.log(scroll_height);
    } else {
        bar.fadeIn();
    }
  });
});