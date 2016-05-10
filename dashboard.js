// uses Bootstrap 3.0 for styling

var React = require('react');

// dashboard component for displaying stats
var Dashboard = React.createClass({
  render: function() {
    return (
      <div>
        <div className="container">
          <p>
            This is where the dashboard will go, using jQuery or d3.js
          </p>
        </div>
      </div>
    );
  }
});

ReactDOM.render(
  <Dashboard />,
