define(
[
    'react'
    , 'showdown'
]
, function( React, ShowDown ) {
    var converter = new ShowDown.converter();

    var Comment = React.createClass({
        render: function() {
            var rawMarkup = converter.makeHtml(this.props.children.toString());
            return (
                <div classname="comment">
                    <h2 className="commentAuthor">
                        {this.props.author}
                    </h2>
                    <div dangerouslySetInnerHTML={{__html: rawMarkup}} />
                </div>
            ); // return JSX for Comment

        } // render Comment

    }); // declare Comment

    return Comment;
}); // define Comment module
