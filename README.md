# acorn-ast-walk

acorn jsx ast walk。


## example

```javascript
import walk, { base } from 'acorn-ast-walk';
 
// base contains all the possible node walkers, see walk.js 
// Program, BlockStatement, ExpressionStatement, SwitchStatement etc. 
 
const source = 'const a = 2; const f = u => k => { const m = <div>Hey</div>; return m; }';
walk(source, {
  VariableDeclaration: (node) => console.log(node),
});
```