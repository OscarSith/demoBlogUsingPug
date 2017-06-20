var prevArrowButton = '<button type="button" class="slick-prev"><i class="glyphicon glyphicon-menu-left"></i></button>';
var nextArrowButton = '<button type="button" class="slick-next"><i class="glyphicon glyphicon-menu-right"></i></button>';

$('div.list-proyects').slick({
	slidesToShow: 4,
	slidesToScroll: 1,
	appendArrows: $('div.list-proyects-toolbar .pull-left .arrows'),
	prevArrow: prevArrowButton,
	nextArrow: nextArrowButton,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
			}
		}
	]
});

$('div.students').slick({
	slidesToShow: 5,
	slidesToScroll: 1,
	prevArrow: prevArrowButton,
	nextArrow: nextArrowButton,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 4,
			}
		},
		{
			breakpoint: 880,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
			}
		}
	]
});

$('button.navbar-toggle').on('click', function(e) {
	var $icon = $(e.currentTarget).children();
	$('div.full-overload').fadeToggle(400, function(ex) {
		if ($icon.hasClass('glyphicon-menu-hamburger')) {
			$icon.removeClass('glyphicon-menu-hamburger').addClass('glyphicon-remove');
		} else {
			$icon.removeClass('glyphicon-remove').addClass('glyphicon-menu-hamburger');
		}
	});
});