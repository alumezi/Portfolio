
/*
$('button').on('click', function(){
    open();
});
$('html').keypress(function(e){
    if(e.which === 13){
        open();
    }
});

function open(){
    $('.back').slideDown(1000); 
    $('button').fadeOut(1000);
};
*/


$(window).ready(function(){
	$('header').draggable();

	$('.portScroll').click(function(evt){
		evt.preventDefault();
		$('html, body').animate({scrollTop : $('.portfolio').offset().top},1000);
	});

		$('.certScroll').click(function(evt){
		evt.preventDefault();
		$('html, body').animate({scrollTop : $('.certificates').offset().top},1000);
	});

		$('.contactScroll').click(function(evt){
		evt.preventDefault();
		$('html, body').animate({scrollTop : $('.contact').offset().top},1000);
	});



$('.mit').click(function(){
	var source = $(this).attr('src');
	$('#img').attr('src',source);
	$('.hidden').css('display','block');
});

$('.ion-close-circled').click(function(){
	$('.hidden').css('display','none');
});

var waypoint = new Waypoint({
	element : $('.portfolio'),
	handler: function(direction){
		if(direction==='down'){
			$('.sticky').css('display','block');
		}else{
			$('.sticky').css('display','none');
		}
		
	},
	offset:20
})

var waypoint2 = new Waypoint({
	element : $('.certificates'),
	handler: function(direction){
		$('#sticky-port').toggleClass('col').toggleClass('stickyCol');
		$('#sticky-cert').toggleClass('col').toggleClass('stickyCol');
	},
	offset:20
});

var waypoint3 = new Waypoint({
	element : $('.contact'),
	handler: function(direction){
		$('#sticky-con').toggleClass('col').toggleClass('stickyCol');
		$('#sticky-cert').toggleClass('col').toggleClass('stickyCol');
	},
	offset:20
})






});


