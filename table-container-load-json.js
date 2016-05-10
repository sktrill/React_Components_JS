// uses Bootstrap 3.0 for styling
var React = require('react');

// data table component for displaying data via JSON
var DataTable = React.createClass({
  loadIssuesFromServer: function() {
    $.ajax({
      url: this.props.urlOrig + "?per_page=25&page=", // change accordingly
      dataType: 'json',
      cache: true, // cache for router
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  getInitialState: function() {
    return {
      data: [],
      pageNumber: 1 // for pagination
    };
  },
  componentDidMount: function() {
    this.loadIssuesFromServer();
  },

  // paginattion for table data - state based
  handlePagination: function(pageIncrement) {
    var newPageNumber = this.state.pageNumber + pageIncrement.pageIncrement
    if (newPageNumber < 1){
      return;
    }
    this.setState({pageNumber: newPageNumber, data: []}, function(){
      $.ajax({
        url: this.props.urlOrig + "?per_page=25&page=" + this.state.pageNumber,
        dataType: 'json',
        cache: true,
        success: function(data) {
          if (data.length == 0) {
            newPageNumber--;
            return;
          }
          else {
            this.setState({data: data});
          }
        }.bind(this),
        error: function(xhr, status, err) {
          console.error(this.props.url, status, err.toString());
        }.bind(this)
      });
    });
  },
  render: function() {
    // route to individual DataItem if router is triggered (by hash change)
    if (this.props.route.length > 0) {
      return (
        <div>
          <ItemDetailsContainer url={this.props.urlOrig} issueNumber = {this.props.route} />
        </div>
      )
    }
    // route to issues list otherwise
    // <Dashboard/>
    return (
      <div>
        <div className = "container">
          <div className = "row">
            <div className = "col-md-12">
              <div className="DataTable">
                <div className="table-responsive">
                  <table className = "table table-striped table-hover">
                      <thead>
                        <tr className = "issues-box-container">
                          <th> </th>
                          <th><h4><strong>Issues</strong></h4></th>
                          <th></th>
                          <th></th>
                          <th><h4><strong>Owner</strong></h4></th>
                        </tr>
                      </thead>
                    <DataList data={this.state.data} />
                  </table>
                </div>
                <ListPagination onPaginationClick={this.handlePagination} pageNumber={this.state.pageNumber}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

ReactDOM.render(
  <DataTable />,
