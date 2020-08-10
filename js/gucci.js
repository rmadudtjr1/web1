



function scrollBtn_click(e) {
	var tab_wrap_location = document.querySelector(".tab_wrap").offsetTop;
	console.log(tab_wrap_location);
	window.scrollTo({
		top: tab_wrap_location,
		behavior:'smooth',
	});
}

$(function(){
	$('.tab_menu_btn').on('click',function(){
		console.log("Btn작동")
		//버튼 색 제거,추가
		$('.tab_menu_btn').removeClass('on');
		$(this).addClass('on')
	  
		//컨텐츠 제거 후 인덱스에 맞는 컨텐츠 노출
		var idx = $('.tab_menu_btn').index(this);
	  
		$('.tab_box').hide();
		$('.tab_box').eq(idx).show();


		var tab_wrap_location = document.querySelector(".tab_wrap").offsetTop;
		console.log(tab_wrap_location);
		window.scrollTo({
			top: tab_wrap_location,
			behavior:'smooth',
		});
	});
});





function f_top_click(e){
	var f_top_banner_location = document.querySelector(".female-top").offsetTop;
	console.log(f_top_banner_location);
	window.scrollTo({
		top: f_top_banner_location,
		behavior:'smooth'
	});
}
function f_tote_click(e) {
	var f_tote_banner_location = document.querySelector(".female-tote").offsetTop;
	console.log(f_tote_banner_location);
	window.scrollTo({
		top: f_tote_banner_location,
		behavior:'smooth'
	});
}
function f_shoulder_click(e) {
	var f_shoulder_banner_location = document.querySelector(".female-shoulder").offsetTop;
	console.log(f_shoulder_banner_location);
	window.scrollTo({
		top: f_shoulder_banner_location,
		behavior:'smooth'
	});
}
function f_cross_click(e) {
	var f_cross_banner_location = document.querySelector(".female-cross").offsetTop;
	console.log(f_cross_banner_location);
	window.scrollTo({
		top: f_cross_banner_location,
		behavior:'smooth'
	});
}
function f_belt_click(e) {
	var f_belt_banner_location = document.querySelector(".female-back").offsetTop;
	console.log(f_belt_banner_location);
	window.scrollTo({
		top: f_belt_banner_location,
		behavior:'smooth'
	});
}
function f_mini_click(e) {
	var f_mini_banner_location = document.querySelector(".female-mini").offsetTop;
	console.log(f_mini_banner_location);
	window.scrollTo({
		top: f_mini_banner_location,
		behavior:'smooth'
	});
}


function m_cross_click(e) {
	var m_cross_banner_location = document.querySelector(".male-cross").offsetTop;
	console.log(m_cross_banner_location);
	window.scrollTo({
		top: m_cross_banner_location,
		behavior:'smooth'
	});
}
function m_back_click(e) {
	var m_back_banner_location = document.querySelector(".male-back").offsetTop;
	console.log(m_back_banner_location);
	window.scrollTo({
		top: m_back_banner_location,
		behavior:'smooth'
	});
}
function m_belt_click(e) {
	var m_belt_banner_location = document.querySelector(".male-belt").offsetTop;
	console.log(m_belt_banner_location);
	window.scrollTo({
		top: m_belt_banner_location,
		behavior:'smooth'
	});
}
function m_portfolio_click(e) {
	var m_portfolio_banner_location = document.querySelector(".male-portfolio").offsetTop;
	console.log(m_portfolio_banner_location);
	window.scrollTo({
		top: m_portfolio_banner_location,
		behavior:'smooth'
	});
}



