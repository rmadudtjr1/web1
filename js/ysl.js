$(function(){
    // $('.main').fadeIn(1000);

  function slide1(){
    let $swiper1 = new Swiper('.swiperW', {
      observer: true, 
      observeParents: true,
      slidesPerView : 1,
      spaceBetween: 30,
      centeredSlides: true,
      speed : 800,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiperW .swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiperW .swiper-button-next',
        prevEl: '.swiperW swiper-button-prev',
      },
    });
  }
  function slide2(){
    let $swiper2 = new Swiper('.lightswiper', {
      direction: 'vertical',
        slidesPerView: 2,
        spaceBetween: 30,
        mousewheel: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
    });
  }


	   // 첫 화면에서 다음 화면으로 넘어 가기 위한 버튼의 함수
    // menu 클래스 바로 하위에 있는 button 태그를 클릭했을때
    $('.main_menu>button').click(function(){
        console.log($(this));
        let $submenu = $(this).next('ul');
        // submenu 가 화면상에 보일때는 위로 접고 아니면 아래로 펼치기
        if( $submenu.is(':visible') ){
        		// $(this).css('background', 'transparent');
            $('.main .nav button').removeClass('on');
            $submenu.slideUp();
        }else{     
            $(this).addClass('on');  	
            $submenu.slideDown();
        }
        
    });

    
	$('.circle_menu').click(function(){
        let $submenu = $('.rec_menu');
        // submenu 가 화면상에 보일때는 위로 접고 아니면 아래로 펼치기
        if( $submenu.is(':visible') ){
          $('.circle_menu').removeClass('on')
            $submenu.slideUp();
        }else{
            $('.circle_menu').addClass('on');
            $submenu.slideDown();
        }
        
    });



	// 메인에서 두번째 페이지 들어갈 때 함수
	$('.nav .main_menu>ul>li').click(function(){
		$('.main').hide(500);
		$('#ysl_body').show(500);
    let gotoClass = $(this)[0].classList[0];
		let goto = '#ysl_body .' + gotoClass;
    slide1();
    console.log(goto);
		$(goto).show();
    // 여기에 위치값 넣어서 해당 위치를 보여준다
	});





	// 두번째(정보페이지들) 페이지 에서 다른 정보페이지로 이동할 때 함수
	$('#ysl_body .sub_menu>ul>li').click(function(){
    
    let gotoId = $(this)[0].id;
		let goto = '#ysl_body .'+gotoId;
		let haveToHide = document.getElementsByClassName('showdiv')[0];
    
		for(let i=0;i<6;i++){
			let hideMenu = '#ysl_body .' + haveToHide.children[i].className;
			$(hideMenu).hide();
		}

    $('.circle_menu').removeClass('on')
    $('.rec_menu').slideUp();
		console.log(goto);
    $(goto).show(500);
      
    
	});


  $('#ysl_body .W_Ready .ready_cont>div>img').click(showLightBox);
  // $(document).on("click",'#ysl_body .W_Ready .ready_cont>div>img', showLightBox);
  $(document).on("click",'#ysl_body .M_Ready .ready_cont>div>img', showLightBox);



  $('.btnClose').click(function(){
    let closeElement = $(this)[0].parentElement.parentElement.className;
    
    lightBoxClose(closeElement);

  });

  function lightBoxOpen(idx, WM){

    // String 형태인 idx를 Integer형태로 변환
    let IDX = idx*1+1;
    if(WM === 'W_R'){
      lightBoxInfo('woman','../img/ysl/ready/woman/'+IDX, idx);
      $('.W_Ready #lightbox').attr('class', 'active');
      $('.W_Ready #block').attr('class', 'active');
    }
    else if(WM === 'M_R'){
      lightBoxInfo('man','../img/ysl/ready/man/'+IDX, idx);
      $('.M_Ready #lightbox').attr('class', 'active');
      $('.M_Ready #block').attr('class', 'active');
    }
  } 

  function lightBoxClose(closeElement){
    $('.'+ closeElement+' #lightbox').removeAttr('class');
    $('.'+ closeElement+' #block').removeAttr('class');
  }


  function showLightBox(){
  
    let idx = $(this)[0].classList[0];
    
    
    // woman / man 어떤 곳의 lightbox를 열어줄지 판별하기 위한 방법
    var WM = $(this)[0].classList[1];
    

    lightBoxOpen(idx, WM);
   
    slide2();
  }

  function lightBoxInfo(gender, location, idx){
    // lightBoxOpen의 idx, WM을 이용하여 lightBox에 들어갈 내용 지정
    let woman = [
      // 0
      [["밍크와 램스킨 소재의 롱 스트라이프 퍼 코트", "₩24,935,000"]
      , ["캐시미어 소재의 생로랑 터틀넥 스웨터", "₩2,155,000"]
      , ["램스킨 소재의 퀼트 처리된 쇼츠", "₩4,740,000"]
      , ["메탈 소재의 라이언 노커 펜던트 네크리스", "₩485,000"]
      , ["스무스 가죽 소재의 76 오버-더-니 부츠", "₩2,545,000"]],
      // 1
      [["초크 스트라이프 트윌 소재의 오버사이즈 더블 브레스트 재킷", "₩3,750,000"]
      , ["라메 스트라이프 실크 소재의 러플 장식 블라우스", "₩2,535,000"]
      , ["크래클드 가죽 소재의 비잔틴 벨트", "₩2,520,000"]
      , ["울 트윌 소재의 빈티지 캐시미어 프린트 반다나", "₩320,000"]
      , ["스웨이드 소재의 제인 오버-더-니 부츠", "₩2,320,000"]],
      // 2
      [["캐시미어 플란넬 소재의 더블 브레스트 롱 재킷", "₩4,705,000"]
      , ["크래클드 가죽 소재의 비잔틴 벨트", "₩2,520,000"]
      , ["울 개버딘 소재의 플리츠 미니 쇼츠", "1,260,000"]
      , ["메탈 소재의 미니 하트 펜던트 네크리스", "₩410,000"]
      , ["2페이턴트 가죽 소재의 76 부츠40", "₩2,375,000"]],
      // 3
      [["캐시미어, 울, 실크 소재의 니트 스웨터", "₩1,260,000"]
      , ["램스킨 소재의 롱 스커트", "₩5,260,000"]
      , ["래빗 펠트 소재의 페도라 모자", "₩1,290,000"]],
      // 4
      [["울과 앙고라 소재의 더블 브레스트 피코트", "₩4,130,000"]
      , ["버튼을 장식한 카울 넥 니트 드레스", "₩2,155,000"]
      , ["스무스 가죽 소재의 아나이스 보우 펌프스", "₩1,075,000"]],
      // 5
      [["플뢰르 드 리스 레이스 소재의 보우 장식 원숄더 드레스", "₩4,290,000"]
      , ["스무스 가죽 소재의 76 싸이 하이 레이스 부츠", "₩3,320,000"]]
    ];
    let man = [
      // 0
      [["울 및 캐시미어 플란넬 소재의 더블 브레스트 스퀘어컷 롱 재킷", "₩3,970,000"]
      , ["실크 새틴 소재의 스폿 무늬 라발리에르 넥 셔츠", "₩1,980,000"]
      , ["다이 블루 데님 소재의 하이 라이즈 스트레이트 컷 진", "₩800,000"]
      , ["SL 402", "₩480,000"]
      , ["스무스 가죽 소재의 제임스 웨스턴 지퍼 부츠", "₩1,655,000"]],
      // 1
      [["샤이니 및 매트 실크 소재의 트리플 스트라이프 셔츠", "₩1,630,000"]
      , ["레이즈드 스트라이프 울 사블레 소재의 하이 라이즈 플리츠 팬츠", "₩1,565,000"]
      , ["래빗 펠트 소재의 페도라 모자", "₩960,000"]
      , ["스무스 가죽 소재의 제임스 웨스턴 지퍼 부츠", "₩1,655,000"]],
      // 2
      [["울 및 모헤어 소재의 세일러 니트 스웨터", "₩1,370,000"]
      , ["스트라이프 트윌 소재의 셔츠", "₩800,000"]
      , ["레이즈드 스트라이프 울 사블레 소재의 하이 라이즈 플리츠 팬츠", "₩1,565,000"]
      , ["울 펠트 및 가죽 소재의 피크 캡", "₩805,000"]
      , ["스무스 가죽 소재의 제임스 웨스턴 지퍼 부츠", "₩1,655,000"]],
      // 3
      [["모헤어 소재의 스트라이프 터틀넥 스웨터", "₩1,260,000"]
      , ["울 트윌 소재의 하이 라이즈 플리츠 턱시도 팬츠", "₩1,830,000"]
      , ["스무스 가죽 소재의 콜 지퍼 부츠", "₩1,490,000"]],
      // 4
      [["스트라이프 코튼 피케 소재의 폴로 셔츠", "₩485,000"]
      , ["더티 윈터 블루 데님 소재의 하이 라이즈 스트레이트 컷 진", "₩1,260,000"]
      , ["캐시미어 소재의 니트 커프스 비니", "₩480,000"]
      , ["립 울 삭스", "₩285,000"]
      , ["스무스 가죽 소재의 아미 레이스 부츠", "₩1,240,000"]],
      // 5
      [["선 더티 블루 데님 소재의 '50S 진 재킷", "₩2,245,000"]
      , ["샤이니 및 매트 울 체크 소재의 슬림 핏 웨스턴 셔츠", "₩1,005,000"]
      , ["레오파드 프린트 티셔츠", "₩730,000"]
      , ["더티 윈터 블루 데님 소재의 하이 라이즈 스트레이트 컷 진", "₩1,260,000"]
      , ["스무스 가죽 소재의 마르소 몽크 스트랩 슈즈", "₩1,325,000"]]
    ];

    if(gender==='woman'){
      setLightBoxInfo('.W_Ready',location, woman[idx], idx);
    }
    else if(gender ==='man'){
      setLightBoxInfo('.M_Ready',location, man[idx], idx);
    }
  }

  function setLightBoxInfo(classwhere, location, info, idx){

    $(classwhere+' .swiper-wrapper *').remove();

    for(let i=0 ; i<info.length ;i++){
      let img = '<img src="'+location+'-'+(i+1)+'.png">';
      let name = '<div class="txtwrap"><p>'+info[i][0]+'</p></br>';
      let price = '<p style="font-size:15px">'+info[i][1]+'</p></div>';
      $('#ysl_body '+ classwhere +' .swiper-wrapper').append('<div class="swiper-slide"><div class="infowrap">' + img + name + price + '</div></div>');
    }
  }

});
//  ------------------------- JQuery -------------------------