//header, footer js
//header 전체메뉴 스크립트 flow
//변수생성
const open_nav = document.querySelector('#open_nav') //nav클릭 시 open대상
const nav_close = document.querySelector('#nav_close') //x닫기
const nav = document.querySelector('.nav') //햄버거메뉴
console.log(open_nav, nav_close,nav)
//1. open-nav 초기 숨기기 #open_nav {transform:translateX;}
open_nav.style.transform = 'translateX(100%)' //화면비율에 따라 (px->%)
//2. 햄버거메뉴(nav) 클릭 시 open-nav 출력
nav.addEventListener('click',function(){
    open_nav.style.transform = 'translateX(0)'
    //css값 상태에 따라 변경일어날 경우 애니메이션 transition
    open_nav.style.transition = 'transform 1s ease'
    // open_nav.style.display = 'none'
    //display:none으로 숨긴대상을 다시 보이게 할 경우
    //기존 디자인css에서 flex로 정렬한 대상이라면 display='flex'
    //기존 디자인css에서 flex 설정이 없었다면 display='block'
})
//3. open-nav 안 X버튼(nav_close) 클릭 시 open-nav 숨기기
nav_close.addEventListener('click',function(){
    open_nav.style.transform = 'translateX(100%)' 
    // open_nav.style.display = 'none'
}) //position으로 겹칠 땐(중첩) css 해당 요소에 z-index:999; 주면 됨

//swiper-slide open-nav 광고영역
const nav_adver = new Swiper('#nav_adver',{ //직접움직임으로 되는 지 확인 후 아래 작성
    direction: 'horizontal',
    autoplay:{delay:1000},
    loop:true,
    navigation: {
        nextEl: '#nav_adver .swiper-button-next',
        prevEl: '#nav_adver .swiper-button-prev',
    },
}) 

