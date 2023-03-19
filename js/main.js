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

$(document).ready(function(){
  $(window).scroll(function () {
    let scroll_height = $(document).scrollTop();
    // console.log(scroll_height);
    if ( $(window).height() >= scroll_height) {
        bar.fadeOut();
        // console.log(scroll_height);
    } else {
        bar.animate({opacity:"1"}, 0);
        bar.fadeIn();
    }
  });
});

// 이미지 팝업

function fnImgPop(url){
  var img=new Image();
  img.src=url;
  var img_width=img.width;
  var win_width=img.width+25;
  var img_height=img.height;
  var win=img.height+30;
  var OpenWindow=window.open('','_blank', 'width='+img_width+', height='+img_height+', menubars=no, scrollbars=auto');
  OpenWindow.document.write("<style>body{margin:0px;}</style><img src='"+url+"' width='"+win_width+"'>");
 }