// uses Bootstrap 3.0 for styling
var React = require('react');
// DataItem details component to print issues details

// comments header component to map comments json and pass to children
var CommentsHeader = React.createClass({
  render: function() {
    var commentsNode = this.props.data.map(function(comment, index) {
      return (
        // `key` is a React-specific concept, see more here:
        // http://facebook.github.io/react/docs/multiple-components.html#dynamic-children
        <CommentBox
        body = {comment.body}
        id = {comment.id}
        updated_at = {comment.updated_at}
        created_at = {comment.created_at}
        user = {comment.user}
        key={index}>
        </CommentBox>
      );
    });
    return (
      <div>
          {commentsNode}
      </div>
    );
  }
});

ReactDOM.render(
  <CommentsHeader />,
