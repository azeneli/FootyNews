define(
[
    'react'
    , 'jquery'
]
, function(
	React
	, $
) {
    var NewsBox = React.createClass({
		_getData: function( args ) {
			var self = this;
			var ar = [];

			var urls = ( typeof args === "undefined" ) ? self.props.urls: args;
			console.log( urls );
			alert('asdfasdf')
			for ( var i = 0; i < self.props.urls.length; i++ ) {
				// var deferred = $.Deferred();
				console.log('hitting API: ' +this.props.urls[i]);
				(function(url, ar){
					var deferred = $.Deferred();

					var request = $.ajax({
						url: 'scraper.php?url='+self.props.urls[ i ]
						// , dataType: 'jsonp'
						// , cache: false
						// , jsonpCallback: 'test'
						, success: function( data ) {
							console.log( JSON.parse( data ) )
							deferred.resolve( JSON.parse( data ) );
						}
					});

					ar.push( deferred.promise() );
				})( this.props.urls[i], ar);
				
				// .then(function(data){
				// 	console.log( ar )
				// 	console.log(data);
				// });
				// ar.push( request );	
			}
			$.when.apply($, ar).then(function(){
				var args = [].slice.call(arguments);
				console.log('about to call...')
				self._populateRows( args );
			})

		}
		, _populateRows: function( data ) {  
			var ar = [];
			console.log( data )
			// for ( var j = 0; j < data.length; j++ ) {
			// 	var currData = data[ j ];
				var results = data.collection1;
				console.log( results )
				for ( var i = 0; i < results.length; i++ ) {
					var keys = Object.keys( results[ i ] );
					var curr = results[ i ][ keys[ 0 ] ];
					console.log('##########');
					console.log( curr, results[i] )
					ar.push(
						<li  className="newsholding__column expandUp">
							<a className="active item" href={curr.href} target="_blank">
								{curr.text}
							 </a>
						 </li>
					);
				}
			// }
			console.log( ar );
			return ar;
			
			// console.log( ar )
			// this.setState({
			// 	items: ar
			// 	, name: data[0].name
			// });
		}
		, getInitialState: function() {
			// this sets the inital state of your component
			
			return {
				items: "loading..."
				, name: 'loading...'
			};
		}
		, componentDidMount: function() {
			// this._getData();
		}
        , render: function() {
        	// var ar = [];
        	// console.log( this.props.data.results )
        	// for ( var i = 0; i < this.props.data.results.collection1.length; i++ ) {
        	// 	ar.push( this._populateRows( this.props.data.results.collection1[ i ] ) );
        	// }
        	console.log( this.props.data.results )
        	ar = this._populateRows( this.props.data.results );
            return (
				<div className="col__3-mid">
					<h1 className="newsbox__title">{this.props.data.name}</h1>
					<div className="overflow-container">
						<ul>
							{ar}
						</ul>
					</div>
				</div>
            ); // return JSX for NewsBox

        } // render NewsBox

    }); // declare NewsBox

    return NewsBox;
}); // define NewsBox module
