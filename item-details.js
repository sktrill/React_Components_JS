// uses Bootstrap 3.0 for styling
var React = require('react');
// DataItem details component to print issues details

// item details component , use data from parent component to fill details
var ItemDetails = React.createClass({
    render: function() {
      return (
        <div>
          <h4>
            <span className="label label-success">
            <span className="glyphicon glyphicon-exclamation-sign"></span>
            <span>&nbsp;{" DataItem #" + this.props.number}</span>
            <small>
              {" / opened by "}
              &nbsp;<a href={this.props.user.html_url}>{"@"+this.props.user.login}</a>
            </small>
          </h4>
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3><strong>
              {this.props.title}
              </strong></h3>
            </div>
            <div className="panel-footer">
              <CommentsContainer url={this.props.comments_url} comments = {this.props.comments}/>
            </div>
          </div>
        </div>
      );
    }
});

ReactDOM.render(
  <ItemDetails />,
