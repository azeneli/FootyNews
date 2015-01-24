define(
[
    'react'
    , 'jquery'
    , 'jsx!components/CommentList'
    , 'jsx!components/CommentForm'
]
, function(
    React
    , $
    , CommentList
    , CommentForm
) {

    var CommentBox = React.createClass({
        getInitialState: function() {
            return {data: []};
        }
        , loadCommentsFromServer: function() {
            var ajaxOpts = {
                url: this.props.url
                , dataType: 'json'
                , success: function( data ) {
                    this.setState({data: data});
                }.bind(this)
                , error: function( xhr, status, err ) {
                    console.error(this.props.url, status, err.toString());
                }.bind(this)
            };
            $.ajax( ajaxOpts );
        }
        , handleCommentSubmit: function( comment ) {
            var comments = this.state.data;
            var newComments = comments.concat([comment]);
            this.setState({data: newComments});
        }
        , componentDidMount: function() {
            this.loadCommentsFromServer();
            setInterval(this.loadCommentsFromServer, this.props.pollInterval);
        }
        , render: function() {
            return (
                <div classname="commentBox">
                    <h1>Comments:</h1>
                    <CommentList data={this.state.data} />
                    <CommentForm onCommentSubmit={this.handleCommentSubmit} />
                </div>
            ); // return
        } // render
    }); // createClass

    return CommentBox;
});
