// uses Bootstrap 3.0 for styling

var React = require('react');

// button component
var Button = React.createClass({
  render: function() {
    return (
      <div>
        <div className="prompt">Press the button</div>
        <button>Press</button>
      </div>
    );
  }
});

// button event component
var ButtonEvent = React.createClass({
  doSomething: function() {
    alert('Howdy');
  },

  render: function() {
    return (
      <div>
        <Button />
      </div>
    );
  }
});

ReactDOM.render(
  <ButtonEvent />,
