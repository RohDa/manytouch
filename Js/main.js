//검색창 요소(.search실행) 찾기.
const searchEl = document.querySelector('.search');
const searchInputEl = document.querySelector('input');

//검색창 요소를 클릭하면 실행
searchEl.addEventListener('click', function(){
    searchInputEl.focus();
});

//검색창 요소 내부 실제 input 요소에 포커스만 실행
searchInputEl.addEventListener('focus', function (){
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합검색');
});

//검색창 요소 내부 실제 input 요소에서 포커스가 해체(불러)되면 실행
searchInputEl.addEventListener('blur', function (){
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');
});

//페이지 스크롤에 따른 요소 제어
const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', function (){
    console.log(this.window.scrollY);
    if(window.screenY > 500) {
        badgeEl.style.display = 'none';
    } else {
        badgeEl.style.display = 'block';
    }
});