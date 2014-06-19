$(document).ready(function(){

	

	var $container = $('.portfolioContainer');
		$container.isotope({
			filter: '*',
			resizable: false,
			masonry: { columnWidth: $container.width()  / 3 },
			animationOptions: {
				duration: 750,
				easing: 'linear',
				queue: false
			}
		});
	
		$(window).smartresize(function(){
			$container.isotope({
				masonry: { columnWidth: $container.width() / 3 } 
			});
		});

		$('.flexslider').flexslider({
			animation: "slide",
			directionNav: false,
			slideshow: true,
			animationLoop: true
		  });
	 
		$('.portfolioFilter a').click(function(){
			$('.portfolioFilter .current').removeClass('current');
			$(this).addClass('current');
	 
			var selector = $(this).attr('data-filter');
			$container.isotope({
				filter: selector,
				animationOptions: {
					duration: 750,
					easing: 'linear',
					queue: false
				}
			 });
			 return false;
		}); 

	$('.main-slider.flexslider').flexslider({
		animation: "slide",
		directionNav: false,
		
		
		
		start: function () {
				$(".slider-info").animate({"margin-bottom": "60px", "opacity": "toggle"},500,'easeOutBack');
		  },
		  after: function () {
				$(".slider-info").animate({"margin-bottom": "60px", "opacity": "toggle"},500,'easeOutBack');
		  },
		  before: function () {
				$(".slider-info").animate({"margin-bottom": "-200px", "opacity": "toggle"},500,'easeOutBack');
		  }
	  });
	  
	  $('a[href*=#]:not([href=#])').click(function(){
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			  var target = $(this.hash);
			  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			  if (target.length) {
				$('html,body').animate({
				  scrollTop: (target.offset().top-105)
				}, 700);
				return false;
			  }
			}
	});

});