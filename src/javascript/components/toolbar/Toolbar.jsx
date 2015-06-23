"use strict";

var React = require('react');
var Toolbar = require('react-simple-toolbar');
var Region  = Toolbar.Region;

var MapActions = require('../../actions/MapActions');

module.exports = React.createClass({
  render: function(){
    return (
<Toolbar>
    <Region>
        <button onClick={this.addSquare}>Square</button>
        <button onClick={this.addCircle}>Circle</button>
    </Region>

    <Region flex={2}>
        <Toolbar>
            <Region align="center">
                <button>Link</button>
                <button>Class</button>
            </Region>
            <Region align="center">
                <button>Arrow</button>
                <button>Undo</button>
            </Region>
        </Toolbar>
    </Region>

    <Region>
      <button onClick={this.save}>Save</button>
    </Region>
</Toolbar>
      )
  },
  addSquare: function(){
    MapActions.addSquare();
  },
  addCircle: function(){
    MapActions.addCircle();
  },
  save: function(){
    MapActions.saveMindMap();
  }
})
