const toggleBtn = document.querySelector('.navbar-toggle-btn');
const menu = document.querySelector('navbar-menu');

toggleBtn.addEventListener('click', ()=> {
    menu.classList.toggle('active');   // 클릭 시 active 없으면 active 추가
})

