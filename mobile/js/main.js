$("#login .login-btn").click(function() {
	$(this).stop().fadeOut();
	$(this).siblings().stop().fadeIn()
	if ($(this).is(":hidden")) {
		$("#login-panel").slideDown("fast")
	} else {
		$("#login-panel").slideUp("fast")
	}
})
$("#goods-title").click(function() {
	if ($(this).find("ul").is(":hidden")) {
		$(this).css("color", "#FF0000")
		$(this).find(".goods-center").attr("src", "img/triangle-open.png")
		$(this).find("ul").slideDown("fast")
	} else {
		$(this).css("color", "#000000")
		$(this).find(".goods-center").attr("src", "img/triangle-close.png")
		$(this).find("ul").slideUp("fast")
	}
})
$("#goods-title li").click(function(event) {
	event.stopPropagation()
})
var mySwiper = new Swiper('.swiper-container', {
	autoplay: 5000,
	autoplayDisableOnInteraction : false,
	loop : true,
	prevButton:'.swiper-button-prev',
	nextButton:'.swiper-button-next',
})