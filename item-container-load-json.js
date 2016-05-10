// uses Bootstrap 3.0 for styling
var React = require('react');

// container component to provite item information in more detail
var ItemDetailsContainer = React.createClass({
  loadIssueFromServer: function() {
    $.ajax({
      url: this.props.url + "/" + this.props.issueNumber,
      dataType: 'json',
      cache: true,
      success: function(data) {
        var newData = this.state.data.concat([data]); // api returns an object literal
        this.setState({data: newData});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  getInitialState: function() {
    return {
      data: []
    };
  },
  componentDidMount: function() {
    this.loadIssueFromServer();
  },
  render: function() {
    return (
      <div>
        <div className = "container">
          <div className = "row">
            <div className = "col-md-12">
              <ItemDetailsHeader data={this.state.data}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

ReactDOM.render(
  <ItemDetailsContainer />,
