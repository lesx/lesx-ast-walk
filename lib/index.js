'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.base = undefined;

var _lesxParser;

function _load_lesxParser() {
    return _lesxParser = require('lesx-parser');
}

var _walk;

function _load_walk() {
    return _walk = require('./walk.js');
}

//
// Extends acorn walk with Lesx elements
//

(_walk || _load_walk()).base.LesxElement = (node, st, c) => {
    // node.openingElement.name
    node.children.forEach(n => {
        c(n, st);
    });
    // node.closingElement.name
};

(_walk || _load_walk()).base.LesxExpressionContainer = (node, st, c) => {
    c(node.expression, st);
};

exports.default = (source, options = {}, parseOpts = {}) => {
    let ast = source;

    if (typeof source === 'string') {
        ast = (0, (_lesxParser || _load_lesxParser()).acornParse)(source, {
            specTags: parseOpts.specTags
        });
    }

    (0, (_walk || _load_walk()).simple)(ast, options);
};

// if the caller wants to play with all the possible types


exports.base = (_walk || _load_walk()).base;