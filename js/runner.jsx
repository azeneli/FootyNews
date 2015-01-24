define(
[
    'react'
    , 'routes'
    , 'jsx!NewsBox'
]
, function(
	React
	, Routes
	, NewsBox
) {
	var Bootstrap = {};
	Bootstrap.leagues = [
		[
			'https://www.kimonolabs.com/api/3t42e6zw?apikey=1GOc2OSA1mDIhg5yRe4wnCJE6CvM0QAo'
			, 'https://www.kimonolabs.com/api/cq7lpf3q?apikey=1GOc2OSA1mDIhg5yRe4wnCJE6CvM0QAo'
			, 'https://www.kimonolabs.com/api/ct819a06?apikey=1GOc2OSA1mDIhg5yRe4wnCJE6CvM0QAo'
		] // barclays
		, [
			// 'https://www.kimonolabs.com/api/6za2al5g?apikey=1GOc2OSA1mDIhg5yRe4wnCJE6CvM0QAo'
			'https://www.kimonolabs.com/api/1uebfc8o?apikey=1GOc2OSA1mDIhg5yRe4wnCJE6CvM0QAo'
			// , 'https://www.kimonolabs.com/api/c4rgbbww?apikey=1GOc2OSA1mDIhg5yRe4wnCJE6CvM0QAo'
		] // laliga

		, [
			'https://www.kimonolabs.com/api/8vvz8fti?apikey=1GOc2OSA1mDIhg5yRe4wnCJE6CvM0QAo'
			, 'https://www.kimonolabs.com/api/5nmgm0xo?apikey=1GOc2OSA1mDIhg5yRe4wnCJE6CvM0QAo'
			, 'https://www.kimonolabs.com/api/9ix1p9ve?apikey=1GOc2OSA1mDIhg5yRe4wnCJE6CvM0QAo'

		]  // serie A

		, [
			'https://www.kimonolabs.com/api/3mcz0tn6?apikey=1GOc2OSA1mDIhg5yRe4wnCJE6CvM0QAo'
			, 'https://www.kimonolabs.com/api/dgkd30q4?apikey=1GOc2OSA1mDIhg5yRe4wnCJE6CvM0QAo'
			, 'https://www.kimonolabs.com/api/bggwei3u?apikey=1GOc2OSA1mDIhg5yRe4wnCJE6CvM0QAo'
		]  // bundeslinga

	];

	Bootstrap.init = function() {
		Routes.register( 'leagues/:id', Bootstrap.getLeague );
		Routes.init( 'leagues/0' );
	} // bootstrap

	Bootstrap.getLeague = function( id ) {
		var urls = Bootstrap.leagues[ id ]
			, NewsBoxes = [], ar = [];
		for ( var i = 0; i < urls.length; i++ ) {


			(function(url, ar){
				var deferred = $.Deferred();

				var request = $.ajax({
					url: 'scraper.php?url='+url
					// , dataType: 'jsonp'
					// , cache: false
					// , jsonpCallback: 'test'
					, success: function( data ) {
						// console.log( JSON.parse( data ), url )
						// console.log( JSON.parse( data ) )
						deferred.resolve( JSON.parse( data ) );
					}
				});

				ar.push( deferred.promise() );
			})( urls[i], ar);
		}

		$.when.apply($, ar).then(function(){
			var args = [].slice.call(arguments);
			for ( var i = 0; i < args.length; i++ ) {
				NewsBoxes.push(
					<NewsBox data={args[i]} />
				);
			}

			console.log( NewsBoxes );
			React.render(
				<div>
					{NewsBoxes}
				</div>
				, document.getElementsByClassName( 'react-container')[ 0 ]
			);
		});


	}

	Bootstrap.laliga = function() {

		var urls = Bootstrap.leagues.laliga
			, NewsBoxes = [];
		for ( var i = 0; i < urls.length; i++ ) {
			NewsBoxes.push(
				<NewsBox urls={[ urls[i] ]}  />
			);
		}
		React.render(
			<div>
				{NewsBoxes}
			</div>
			, document.getElementsByClassName( 'react-container')[ 0 ]
		);
	}

	 Bootstrap.seriea = function() {

		var urls = Bootstrap.leagues.seriea
			, NewsBoxes = []
		for ( var i = 0; i < urls.length; i++ ) {
			NewsBoxes.push(
				<NewsBox urls={[ urls[i] ]}  />
		);
		}
		React.render(
			<div>
				{NewsBoxes}
			</div>
			, document.getElementsByClassName( 'react-container')[ 0 ]
		  );
		}

	 Bootstrap.bundesliga = function() {

	 	var urls = Bootstrap.leagues.bundesliga
	 		, NewsBoxes = [];
	 	for ( var i = 0; i < urls.length; i++ ) {
	 		NewsBoxes.push(
	 			<NewsBox urls={[ urls[i] ]}  />
	 		);
	 	}
	 	React.render(
	 		<div>
	 			{NewsBoxes}
			</div>
	 		, document.getElementsByClassName( 'react-container')[ 0 ]
		);
	}









	Bootstrap.getRouter = function() {
		return this.router;
	}

	return Bootstrap;
}
);
