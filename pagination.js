// uses Bootstrap 3.0 for styling
var React = require('react');

// issues component to paginate and update DataItem numbers
var ListPagination = React.createClass({
  // go to the previous 25 issues
  // #optimize: cache for previous pagination
  handlePreviousPageClick: function(e) {
    e.preventDefault();
    this.props.onPaginationClick({pageIncrement: -1});
  },
  // go to the next 25 issues
  // #optimize: cache for next pagination
  handleNextPageClick: function(e) {
    e.preventDefault();
    this.props.onPaginationClick({pageIncrement: 1});
  },
  render: function() {
    return (
      <div>
        <nav>
          <ul className="pager">
            <li className="previous" onClick={this.handlePreviousPageClick}><a href=""><span aria-hidden="true">&larr;</span> Newer</a></li>
            <span>
              {((this.props.pageNumber - 1) * 25) + 1} to {25 * this.props.pageNumber}
            </span>
            <li className="next" onClick={this.handleNextPageClick}><a href="">Older <span aria-hidden="true">&rarr;</span></a></li>
          </ul>
        </nav>
      </div>
    );
  }
});

ReactDOM.render(
  <ListPagination />,
