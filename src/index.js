import {
    acornParse,
} from 'lesx-parser';

import {
    simple as walk,
    base,
} from './walk.js';

//
// Extends acorn walk with Lesx elements
//

base.LesxElement = (node, st, c) => {
    // node.openingElement.name
    node.children.forEach(n => {
        c(n, st);
    });
    // node.closingElement.name
};

base.LesxExpressionContainer = (node, st, c) => {
    c(node.expression, st);
};

export default (source, options = {}, parseOpts = {}) => {
    let ast = source;

    if (typeof(source) === 'string') {
        ast = acornParse(source, {
            specTags: parseOpts.specTags,
        });
    }

    walk(ast, options);
};

// if the caller wants to play with all the possible types
export {
    base
};
