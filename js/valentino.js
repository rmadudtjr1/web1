$( document ).ready(function() {
   setTimeout('go()',3000)
    let lightbox = document.createElement('div')
    lightbox.id= 'lightbox'
    document.body.appendChild(lightbox)

   let img = document.querySelectorAll('img')
   img.forEach(img =>{
      img.addEventListener('click', e =>{
       lightbox.classList.add('active')
       let popimg = document.createElement('img')
       popimg.src = img.src
       popimg.id='popimg'
      lightbox.appendChild(popimg)
   })
})
   lightbox.addEventListener('click', e =>{
   if(e.target !== e.currentTarget) return
   let popimg=document.getElementById('popimg')
   let parent=document.getElementById('lightbox')
   lightbox.removeChild(popimg)
   lightbox.classList.remove('active')
})

});
  function go(){
   $("#front").fadeOut(1000);
   $(".wrapper").show()
   slider();

   }

function slider(){
   var mySwiper = new Swiper('.swiper-container', {
      // 슬라이드를 버튼으로 움직일 수 있습니다.
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
          
      // 현재 페이지를 나타내는 점이 생깁니다. 클릭하면 이동합니다.
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
        },

      // 현재 페이지를 나타내는 스크롤이 생깁니다. 클릭하면 이동합니다.
        scrollbar: {
          el: '.swiper-scrollbar',
          draggable: true,
        },
          
      // 3초마다 자동으로 슬라이드가 넘어갑니다. 1초 = 1000
        autoplay: {
          delay: 3000,
        },
        speed : 1000
      });
}