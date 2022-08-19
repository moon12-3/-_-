const toggleBtn = document.querySelector('.navbar-toggle-btn');
const menu = document.querySelector('.navbar-menu');

toggleBtn.addEventListener('click', ()=> {
    menu.classList.toggle('active');   // 클릭 시 active 없으면 active 추가
})

function random(min, max) {
    return parseFloat((Math.random * (max-min)+min).toFixed(2))
}

function floatingCircle(item, delayAfter, size) {
    gsap.to(
        item,
        random(1.5, 2.5),
        {
            delay: random(0, delayAfter), //몇초 뒤에 애니메이션을 실행, 지연 시간 설정
            y: size, //transform: translateY(수치)와 같음. 수직으로 움직이는 크기
            repeat: -1, //몇 번 반복하는지를 설정, -1은 무한 반복.
            yoyo: true, //한번 재생된 애니메이션을 다시 뒤로 재생-위아래 움직임
            ease: Power1.easeInOut //easing 함수 적용
        }
    )
}

floatingCircle('.c', 1, 25)

