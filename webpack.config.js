var path = require('path');
var merge = require('webpack-merge');
var webpack = require('webpack')


var  TARGET = process.env.npm_lifecycle_event;


module.exports = {
  entry: './blueprint/index.js',
  output: {
    path: __dirname,
    filename: './api/api.md'
  }
}



 console.info("TARGET:"+TARGET);

