'use strict';
var pathTool = require('path')
require("babel-polyfill")
module.exports = function(entryArr) {
    require('babel-core/register')({
        plugins: [require('babel-plugin-add-module-exports'), require('babel-plugin-transform-es2015-modules-commonjs')],
        presets: [require('babel-preset-es2015-node5'), require('babel-preset-stage-3')],
        babelrc: false
    })
    require(pathTool.resolve.apply(null, [].concat(entryArr))) // this is es7 - gets transpile
}