// pc버전 메뉴 1차메뉴 hover시 2차메뉴 보여지기
let menu = $('#gnb-pc');
let menu_list = menu.children('li');

  menu_list.on('mouseenter', function(){
    let target = $(this);
    target.addClass('on');
    target.children('div').stop().fadeIn(function(){
      menu_list.not('.on').children('div').fadeOut();
      target.removeClass('on');
    });
  });
  menu_list.on('mouseleave', function(){
    let target = $(this);
    target.children('div').fadeOut(); 
  });

// 모바일에서 햄버거 메뉴클릭시 #gnb-mo 보여지고 닫기버튼 누르면 사라짐
$('.hambuger, .close').on('click', function () {
    $('#gnb-mo, .slide-fade').toggleClass('ison')
})

// 1차메뉴클릭시 2차메뉴 보여짐
$('#gnb-mo ul li a').click(function (e) {
    e.preventDefault()
    $(this).next().slideUp(),
        $(this).next().is(':visible') || $(this).next().slideDown();
})

// 슬릭 슬라이더
$('.best-item').slick({
	slide: 'div',
	adaptiveHeight: false,
	slidesToShow: 4,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 2000,
	enterPadding: 0,
	centerMode: false,
	draggable: true,
    navigation : {
        prevEl : ".best-item .button-prev",
        nextEl : ".best-item .button-next"
    },
	 //반응형 
	responsive: [{       
			breakpoint: 1200,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
				infinite: true,
				dots: false
			}
                },
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				infinite: true,
				dots: false
			}
                },
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				infinite: true,
				dots: false
			}
                }
            ]
});




// 푸터영역 
$('.arrow_down').on('click', function () {
    $('#footer-menu').toggleClass('foter')
})

$('#footer-menu ul li a').click(function (e) {
    e.preventDefault()
    $(this).next().slideUp(),
        $(this).next().is(':visible') || $(this).next().slideDown();
})

