// uses Bootstrap 3.0 for styling
var React = require('react');

// data list component to list all data items from incoming JSON
var DataList = React.createClass({
  render: function() {
    var issuesNodes = this.props.data.map(function(issue, index) {
      return (
        // `key` is a React-specific concept, see more here:
        // http://facebook.github.io/react/docs/multiple-components.html#dynamic-children
        // change below based on JSON imported
        <Issue
        number = {issue.number}
        title = {issue.title}
        body = {issue.body}
        state = {issue.state}
        updated_at = {issue.updated_at}
        created_at = {issue.created_at}
        user = {issue.user}
        labels = {issue.labels}
        key={index}>
        </Issue>
      );
    });
    return (
      <div>
        <tbody>
          {issuesNodes}
        </tbody>
      </div>
    );
  }
});

ReactDOM.render(
  <DataList />,
