// uses Bootstrap 3.0 for styling
var React = require('react');
// DataItem details component to print issues details

function renderNow () {
  var route = window.location.hash.substr(1);
  React.render(
    <App route={route}/>, document.getElementById('app-main')
  );
}

// to handle routing
// alternatives: react-router (on github), flux
// or a proper JS MVC (backbone, meteor, express etc.)
window.addEventListener('hashchange', renderNow);
renderNow();
