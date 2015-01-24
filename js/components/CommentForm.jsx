define(
[
    'react'
]
, function( React ) {
    var CommentForm = React.createClass({
        _getValue: function( key, value ) {
            if ( typeof value === "undefined" ) {
                return this.refs[ key ].getDOMNode().value;
            }

            this.refs[ key ].getDOMNode().value = value;
        }
        , handleSubmit: function( e ) {
            e.preventDefault();

            var author = this._getValue( 'author' ).trim()
                , text = this._getValue( 'text' ).trim()

            if (!text || !author) {
                return;
            }

            this.props.onCommentSubmit({author: author, text: text});
            this._getValue( 'author', '' );
            this._getValue( 'text', '' );

            return;
        }
        , render: function() {

            return (
                <form classname="commentForm" onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Your Name" ref="author" /><br/>
                    <input type="text" placeholder="Say Something!" ref="text" /><br/>
                    <input type="submit" value="post" />
                </form>
            ); // return JSX for CommentForm

        } // render CommentForm

    }); // declare CommentForm

    return CommentForm;
}); // define CommentForm module
