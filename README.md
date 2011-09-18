# Node-Bisection

Node-Bisection is a JavaScript port of the Python 8.5. bisect - Array bisection algorithm.
&lt;http://docs.python.org/library/bisect.html&gt;

This module provides support for maintaining a list in sorted order without having to sort 
the list after each insertion. For long lists of items with expensive comparison operations,
this can be an improvement over the more common approach. The module is called bisect because
it uses a basic bisection algorithm to do its work. The source code may be most useful as a 
working example of the algorithm (the boundary conditions are already right!)."

This project is not limited to use in node.js. It's excellent for any JavaScript project. Also 
included in the repo is a YUI-minified version of the code that's pretty-wicked @ only 527 bytes!

## How to use

### in node.js

Require `bisection`:

```js
var bisect = require('bisection');
```
You're ready to start using `bisection`.

### In a Mozilla Firefox add-on project.

Inside the main xul file for the project, add this line after the opening <overlay> tag. This 
follows that you've included bisection.js in the content folder of the add-ons folder structure.

```html
<script type="application/x-javascript" src="chrome://PROJECT_NAME/content/bisection.js"/>
```
Instantiate the object to a variable by:

```js
var bisect = new bisection();
```

Then, simply call the `bisection` function you want to use. e.g. To find the index where this
item should go in the list, do:

```js
bisect.bisect(an_array, an_item);
```

### In a web page

Add this line to inside the <head> tag of your web page. It assumes that the bisection.js is 
in the same folder as this page.

```html
<script type="text/javascript" src="bisection.js" ></script>
```
Instantiate the object to a variable by:

```js
var bisect = new bisection();
```

Then, simply call the `bisection` function you want to use. e.g. To find the index where this
item should go in the list, do:

```js
bisect.bisect(an_array, an_item);
```
## Short recipes

### node.js projects.

```js
var bisect = require('bisection');
var an_array = [0,1,2,3,5,6,7,8,9];
console.log('bisect.bisect: ' + bisect.bisect(an_array, 5));
console.log('bisect.bisect_left: ' + bisect.bisect_left(an_array, 5));
```

outputs:
```
bisect.bisect: 5\n
bisect.bisect_left: 4
```

### Non-node.js projects.

```js
var bisect = new bisection();
var an_array = [0,1,2,3,5,6,7,8,9];
console.log('bisect.bisect: ' + bisect.bisect(an_array, 5));
console.log('bisect.bisect_left: ' + bisect.bisect_left(an_array, 5));
```

outputs:
```
bisect.bisect: 5\n
bisect.bisect_left: 4
```

## License 

(The MIT License)

Copyright (c) 2011 Jason Wiener, JasonWiener, LLC &lt;hiya@jasonwiener.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.