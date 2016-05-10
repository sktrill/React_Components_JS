// uses Bootstrap 3.0 for styling
var React = require('react');

// info tip component (question mark)
var Infotip = React.createClass({
  render: function() {
    return (
        <div>Textual words</div>
        <p>
        <a href="http://www.google.com">Explanation in info tip</a>
        </p>
    );
  }
});

ReactDOM.render(
  <Infotip />,
