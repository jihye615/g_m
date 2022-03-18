var swiper = new Swiper(".mySwiper", {
    autoplay:{
        delay:4000,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop:true,
});


function showMore(){

    const hide = document.querySelectorAll('.hide');
    const first = Array.from(hide).slice(0,4);
    first.forEach(item => {
        item.classList.remove('hide');
    });
    if(hide.length <= 2) {
        hideMoreBtn();
    }
}
function hideMoreBtn() {
    document.getElementById('moreBtn').classList.add('hide');
}