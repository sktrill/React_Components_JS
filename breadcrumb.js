// uses Bootstrap 3.0 for styling

var React = require('react');

// breadcrumb component
var Breadcrumb = React.createClass({
  render: function() {
    return (
      <div className = "container">
        <h3 className = "page-header">
          <strong>
          <a href="https://google.com">Home</a>&nbsp;/&nbsp;
          <a href="https://google.com/#">Next1</a>&nbsp;/&nbsp;
          <a href="#">Next2</a>
          </strong>
          </h3>
      </div>
    );
  }
});

ReactDOM.render(
  <Breadcrumb />,
