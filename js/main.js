/* CURRENTLY IN: javascript/main.js */

(function(){

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
	}
	dropMenu(".menu-trigger");

})();