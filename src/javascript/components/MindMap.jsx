"use strict";

var React = require('react');
var Reflux = require('reflux');
var $ = require('jquery');
var _ = require('lodash');

var MapStore = require('../stores/MapStore');
var Toolbar = require('./toolbar/Toolbar')
var Square = require('./Shapes/Square');
var Circle = require('./Shapes/Circle');


var VectorWidget = React.createClass({
  mixins: [Reflux.connect(MapStore)],

  getDimentions: function(){
    return {
      height: $(window).height() - 250,
      width: $(window).width() - 50
    }
  },
  componentDidMount: function(){
    MapStore.getData();
  },
  render: function() {
    var dimentions = this.getDimentions();
    var elements = [];
    console.debug(this.state);
    _.forEach(this.state.elements, function(item){
        var start = {x: item.position.left, y: item.position.top};
        if(item.type === 'square')
          elements.push((<Square height='50' width='50' key={item.id}
          start={start}
           item={item} />));
        else
          elements.push((<Circle key={item.id}
          start={start}
          r='25' item={item} />));
    });
    console.debug('ele', elements, this.state);
    return (
      <div>
        <Toolbar />
        <svg height={dimentions.height} width={dimentions.width}>
          {elements}
        </svg>
      </div>
    );
  }
});

module.exports = VectorWidget;

