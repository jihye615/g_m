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


$('.hambuger, .close').on('click', function () {
    $('#gnb-mo, .slide-fade').toggleClass('ison')
})


$('#gnb-mo ul li a').click(function (e) {
    e.preventDefault()
    $(this).next().slideUp(),
        $(this).next().is(':visible') || $(this).next().slideDown();
})


// function showMore(){

//     const hide = document.querySelectorAll('.hide');
//     const first = Array.from(hide).slice(0,4);
//     first.forEach(item => {
//         item.classList.remove('hide');
//     });
//     if(hide.length <= 2) {
//         hideMoreBtn();
//     }
// }
// function hideMoreBtn() {
//     document.getElementById('moreBtn').classList.add('hide');
// }

$('.arrow_down').on('click', function () {
    $('#footer-menu').toggleClass('foter')
})

$('#footer-menu ul li a').click(function (e) {
    e.preventDefault()
    $(this).next().slideUp(),
        $(this).next().is(':visible') || $(this).next().slideDown();
})

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