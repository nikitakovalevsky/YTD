$(function () {

$('.owl-carousel.carousel1').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
	items:1,
	smartSpeed: 1700,
	autoplay:true,
	autoplayTimeout:5000
})
$('.owl-carousel.carousel2').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
	smartSpeed: 1700,
	autoplay:true,
	autoplayTimeout:5000,
	 responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        },
		1500:{
			items:4
		},
		2000:{
			items: 5
		},
		2500:{
			items: 7
		},
		2900:{
			items: 10
		}
    }
})

//2p


	$('ul li a').click(function(event) { 
                var checkElement = $(this).next();
		checkElement.stop().animate({'height':'toggle'}, 500);
		if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
			event.preventDefault();
		}
	});
	

$('.obrazci_list1').click(function(){
$(".obrazci_vibor_list1").slideToggle('fast');
});
$('ul.obrazci_vibor_list1 li').click(function(){
var tx = $(this).html();
var tv = $(this).attr('alt');
$(".obrazci_vibor_list1").slideUp('fast');
$(".obrazci_list1 span").html(tx);
$(".obrazci_text1").html(tv);
});

$('.obrazci_list2').click(function(){
$(".obrazci_vibor_list2").slideToggle('fast');
});
$('ul.obrazci_vibor_list2 li').click(function(){
var tx = $(this).html();
var tv = $(this).attr('alt');
$(".obrazci_vibor_list2").slideUp('fast');
$(".obrazci_list2 span").html(tx);
$(".obrazci_text2").html(tv);
});

$('.obrazci_list3').click(function(){
$(".obrazci_vibor_list3").slideToggle('fast');
});
$('ul.obrazci_vibor_list3 li').click(function(){
var tx = $(this).html();
var tv = $(this).attr('alt');
$(".obrazci_vibor_list3").slideUp('fast');
$(".obrazci_list3 span").html(tx);
$(".obrazci_text3").html(tv);
});

});