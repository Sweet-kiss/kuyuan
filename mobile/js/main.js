var btnNoChanging = true;
var panelNoChanging = true;
$("#login .login-btn").click(function() {
	if (!btnNoChanging && !panelNoChanging) return
	btnNoChanging = false;
	panelNoChanging = false;
	if ($("#login-panel").is(':hidden')) {
		$("#login .more").fadeOut("fast", function() {
			btnNoChanging = true;
		});
		$("#login .close").fadeIn("fast", function() {})
		$("#login-panel").stop(true,true).slideDown(200, 'swing', function() {
			panelIsChanging = true;
		})
	} else {
		$("#login .close").fadeOut("fast", function() {
			btnNoChanging = true;
		});
		$("#login .more").fadeIn("fast", function() {})
		$("#login-panel").stop(true,true).slideUp(200, 'swing', function() {
			panelIsChanging = true;
		})
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
var mySwiper = new Swiper('#banner-swiper', {
	autoplay: 5000,
	autoplayDisableOnInteraction : false,
	loop : true,
	prevButton:'#banner-swiper-button-prev',
	nextButton:'#banner-swiper-button-next',
})
var mySwiper = new Swiper('#new-center-swiper', {
	autoplay: 5000,
	autoplayDisableOnInteraction : false,
	loop : true,
	prevButton:'#new-swiper-button-prev',
	nextButton:'#new-swiper-button-next',
})