'use strict';

var React = require('react'),
    Reflux = require('reflux'),
    _ = require('lodash'),
    MapActions = require('../actions/MapActions');

var _data = { elements: [] };

module.exports = Reflux.createStore({
  listenables: [MapActions],

  getData: function(){
    if(_.has(localStorage, '_data')){
      _data = JSON.parse(localStorage._data);
    }
    console.debug('RD', _data);
    this.trigger(_data);
  },
  onAddSquare: function(){
    _data.elements.push({
      id: (_data.elements.length + 1),
      position: { left: 0, top: 0},
      type: 'square'
    });
    this.trigger(_data);
  },
  onAddCircle: function(){
    _data.elements.push({
      id: (_data.elements.length + 1),
      position: { left: 50, top: 50},
      type: 'circle'
    });
    this.trigger(_data);
  },
  onUpdatePosition: function(item){
    var index = _.findIndex(_data.elements, {id: item.id});
    if(index !== -1){
      _data.elements[index] = item;
    }
  },
  onSaveMindMap: function(){
    console.debug('SHOULD SAVE', _data);
    localStorage.setItem('_data', JSON.stringify(_data));
  }
});

