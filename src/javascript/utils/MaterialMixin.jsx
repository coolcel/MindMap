var React = require('react');

var mui = require('material-ui'),
  ThemeManager = new mui.Styles.ThemeManager(),
  RaisedButton = mui.RaisedButton;

module.exports = {
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext: function() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },
};
