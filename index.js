'use strict';

require("babel-polyfill")
module.exports = function(entry) {
    require('babel-core/register')({
        plugins: [require('babel-plugin-add-module-exports'), require('babel-plugin-transform-es2015-modules-commonjs')],
        presets: [require('babel-preset-es2015-node5'), require('babel-preset-stage-3')],
        babelrc: false
    })
    require(entry) // this is es7 - gets transpile
}