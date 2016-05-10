// uses Bootstrap 3.0 for styling
var React = require('react');
// DataItem details component to print issues details

// comments component for each comment
var CommentBox = React.createClass({
    render: function() {
      return (
        <div>
          <div className="comment">
            <a className="comment-img" href={this.props.user.html_url}>
              <img className="img-circle gavatar-images-lg" src={this.props.user.avatar_url} alt="" width="50" height="50" />
            </a>
            <div className="comment-body">
              <small>
                <div className="comment-text">
                  <p>
                  <span>"Text here"</span>
                  </p>
                </div>
              </small>
              <div className = "comment-info">
                <small>
                  <span>"More info here"</span>
                </small>
              </div>
            </div>
          </div>
        </div>
      );
    }
});

ReactDOM.render(
  <CommentBox />,
