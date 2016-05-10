// uses Bootstrap 3.0 for styling
var React = require('react');

// item details header component to map DataItem details
var ItemDetailsHeader = React.createClass({
  render: function() {
    var issueNode = this.props.data.map(function(issue, index) {
      return (
        // `key` is a React-specific concept, see more here:
        // http://facebook.github.io/react/docs/multiple-components.html#dynamic-children
        <ItemDetails
        number = {issue.number}
        title = {issue.title}
        body = {issue.body}
        state = {issue.state}
        updated_at = {issue.updated_at}
        created_at = {issue.created_at}

        comments_url = {issue.comments_url}
        comments = {issue.comments}

        user = {issue.user}
        milestone = {issue.miletstone}
        labels = {issue.labels}
        key={index}>
        </ItemDetails>
      );
    });
    return (
      <div>
          {issueNode}
      </div>
    );
  }
});


ReactDOM.render(
  <ItemDetailsHeader />,
