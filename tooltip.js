// uses Bootstrap 3.0 for styling

var React = require('react');

// tooltip component
var Tooltip = React.createClass({
  render: function() {
    return (
      <div>Textual words</div>
      <p>
          <a href="http://www.google.com">Explanation in tool tip</a>
      </p>
    );
  }
});

ReactDOM.render(
  <Tooltip />,
