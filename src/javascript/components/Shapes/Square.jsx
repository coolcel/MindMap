"use strict";

var React = require('react');
var Draggable = require('react-draggable');
var _ = require('lodash');
var MapActions = require('../../actions/MapActions');

module.exports = React.createClass({
  render: function(){
    return (
      <Draggable zIndex={100} start={this.props.start} onStop={this.handleStop}>
        <rect {...this.props}>{this.props.children}</rect>
      </Draggable>
      )
  },
  handleStop: function (event, ui) {
    this.props.item.position = ui.position;
    MapActions.updatePosition(this.props.item);
  }
})
