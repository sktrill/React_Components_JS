// uses Bootstrap 3.0 for styling
var React = require('react');
// DataItem details component to print issues details

// comments container component for all comments
var CommentsContainer = React.createClass({
  loadCommentsFromServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: true,
      success: function(data) {
        this.setState({data: data}); // api returns an array
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
    if (this.props.comments != 0) {
      this.loadCommentsFromServer();
    }
  },

  render: function() {
    if (this.props.comments == 0) {
      return (
        <div>
          No comments duuuude.
        </div>
      );
    }
    return (
      <div>
        <section className="comments">
          <CommentsHeader data={this.state.data}/>
        </section>
      </div>
    );
  }
});

ReactDOM.render(
  <CommentsContainer />,
