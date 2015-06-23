"use strict";

var React = require('react');
var Draggable = require('react-draggable');
var ResizableBox = require('react-resizable');

module.exports = React.createClass({
  render: function(){
    return (
        <Draggable start={this.props.start} zIndex={100} onStop={this.handleStop}>
          <circle  {...this.props}>{this.props.children}</circle>
        </Draggable>
      )
  },
  handleStop: function (event, ui) {
    this.props.item.position = ui.position;
  }
});
