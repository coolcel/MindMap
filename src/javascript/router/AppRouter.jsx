'use strict';

var React = require('react');
var Router = require('react-router'); // or var Router = ReactRouter; in browsers
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

/*
 * Project components
 */
var MindMap = require('../components/MindMap');

var App = React.createClass({
  render: function () {
    return (
      <div className="row">
          <RouteHandler/>
        </div>
    );
  }
});

var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="map" handler={MindMap}/>
    <DefaultRoute handler={MindMap}/>
  </Route>
);
//
Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.getElementById("page-content"));
});
