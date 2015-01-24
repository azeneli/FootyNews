;define(
[
	'jquery'
]
, function( $ ) {

	function dropMenu( button ) {
		var menu = $(".expanded-menu");
		$(button).on('click', function(){
			if ($(button).hasClass('active')){
				$(button).removeClass('active');
				
				$(menu).animate({
								'right': '-100%',
							});
			} else {
				$(button).addClass('active');

				$(menu).animate({
								'right': '0px',
							});
			}
			
		});
	} // dropMenu
	
	var UIMethods = {};

	UIMethods.init = function() {
		dropMenu(".menu-trigger");
	} // init

	return UIMethods;
}
)