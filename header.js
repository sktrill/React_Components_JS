// uses Bootstrap 3.0 for styling

var React = require('react');

// header component
var Header = React.createClass({
  render: function() {
    return (
      <div>
        <nav className = "navbar navbar-default navbar-static-top">
          <div className = "container">
            <div className = "navbar-header">
              <span className = "navbar-brand">Title of Header</span>
            </div>
          </div>
        </nav>
      </div>
    );
  }
});

ReactDOM.render(
  <Header />,
