// uses Bootstrap 3.0 for styling
var React = require('react');

// Data item component for each data row in DataList
var DataItem = React.createClass({
  render: function() {
    return (
        <tr>
          <td>
          <h4>
            <span className="glyphicon glyphicon-exclamation-sign glyph-open"></span>
          </h4>
          </td>
          <td>
            <span>{"Some text"}</span>
          </td>
          <td>
            <span>{"Some text here too"}</span>
          </td>
        </tr>
    );
  }
});

ReactDOM.render(
  <DataItem />,
