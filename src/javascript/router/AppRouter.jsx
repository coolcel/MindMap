var React = require('react');
var Router = require('react-router'); // or var Router = ReactRouter; in browsers
var PlayApp = require('./../components/PlayApp.jsx');
var PersonApp = require('./../components/PersonApp.jsx');
var HomeApp = require('./../components/HomeApp.jsx');
var PlayDetailApp = require('./../components/PlayDetailApp.jsx');
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

var mui = require('material-ui'),
  AppBar = mui.AppBar,
  LeftNav = mui.LeftNav,
  MenuItem = mui.MenuItem,
  Tabs = mui.Tabs,
  Tab = mui.Tab,
  MaterialMixin = require('../utils/MaterialMixin');

var menuItems = [
  { type: MenuItem.Types.LINK, payload: '#plays', text: 'Plays' },
  { type: MenuItem.Types.LINK, payload: '#theatres', text: 'Theatres' },
  { type: MenuItem.Types.LINK, payload: '#persons', text: 'Persons' }
  ];

var App = React.createClass({
  mixins: [MaterialMixin],

  render: function () {
    var header = (
        <AppBar
          title='Rasik-Katta'
          showMenuIconButton={false} />
    );

    return (
      <div className="row">
          <AppBar
            onLeftIconButtonTouchTap={this.showLeftNav}
            title='Plays Panel'
            iconClassNameRight="muidocs-icon-navigation-expand-more"/>
          <LeftNav
            ref="leftNav"
            header={header}
            docked={false}
            menuItems={menuItems} />
          <RouteHandler/>
        </div>
    );
  },
  showLeftNav: function(){
    this.refs.leftNav.toggle();
  }
});

var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="plays" handler={PlayApp}/>
    <Route name="theatres" handler={PlayApp}/>
    <Route name="persons" handler={PersonApp}/>
    <Route name="schedules" handler={PlayApp}/>
    <Route name="viewplay/:id" handler={PlayDetailApp}/>
    <DefaultRoute handler={HomeApp}/>
  </Route>
);
//
Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.getElementById("page-content"));
});

          // <Tabs>
          //   <Tab label='Plays' route='plays'>
          //   </Tab>
          //   <Tab label='Theatres' route='theatres' >
          //   </Tab>
          //   <Tab label='Persons' route='persons' >
          //   </Tab>
          //   <Tab label='Schedules' route='schedules' >
          //   </Tab>
          // </Tabs>
