'use strict';
var React = require('react'),
    _ = require('lodash');

var _toastrOptions = {
  'closeButton': true,
  'debug': false,
  'newestOnTop': true,
  'progressBar': true,
  'positionClass': 'toast-top-right',
  'preventDuplicates': true,
  'showDuration': '300',
  'hideDuration': '1000',
  'timeOut': '5000',
  'extendedTimeOut': '1000',
  'showEasing': 'swing',
  'hideEasing': 'linear',
  'showMethod': 'fadeIn',
  'hideMethod': 'fadeOut'
};

var _toastr;

function toastr() {
  if(!_toastr){
    var mytoastr = require('toastr');
    require('toastr/toastr.css');
    mytoastr.options = _toastrOptions;
    _toastr = mytoastr;
  }
  return _toastr;
}

module.exports = {
  toastr: toastr
};
