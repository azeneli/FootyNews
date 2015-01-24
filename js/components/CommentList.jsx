define(
[
    'react'
    , 'jsx!components/Comment'
]
, function( React, Comment ) {
    var CommentList = React.createClass({
        render: function() {
            var commentNodes = this.props.data.map(function( comment ) {
                return (
                    <Comment author={comment.author}>
                        {comment.text}
                    </Comment>
                ); // return
            }); // commentNodes
            return (
                <div classname="commentlist">
                    {commentNodes}
                </div>
            ); // return JSX for CommentList

        } // render CommentList

    }); // declare CommentList

    return CommentList;

}); // define CommentList module
