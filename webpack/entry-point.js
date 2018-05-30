'use strict';

const define = require('./define');
const { resolve } = require('path');

const entryPoint = Object.assign({}, {
    vendors: [
        'core-js/es6/map',
        'core-js/es6/set'
    ]
});

Object.assign(entryPoint, {
    index: [
        ...define.rs_development ? [
            '@babel/polyfill'
        ] : [ /* */ ],
        resolve(define.rs_root, 'index')
    ]
});

module.exports.config = entryPoint;
