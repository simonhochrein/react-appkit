(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Button = /** @class */ (function () {
    function Button() {
        this.button = new NSButton();
        this.button.setOnClick(this.onClick);
    }
    Button.prototype.get = function () {
        return this.button.get();
    };
    Button.prototype.onClick = function () {
        print("tester123");
    };
    return Button;
}());
exports.Button = Button;

},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dropdown = /** @class */ (function () {
    function Dropdown() {
        this.button = new NSPopUpButton();
        // this.button.setOnClick(this.onClick)
    }
    Dropdown.prototype.get = function () {
        return this.button.get();
    };
    return Dropdown;
}());
exports.Dropdown = Dropdown;

},{}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Editor = /** @class */ (function () {
    function Editor() {
        this.editor = new MyEditor();
    }
    Editor.prototype.get = function () {
        return this.editor.get();
    };
    return Editor;
}());
exports.Editor = Editor;

},{}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SplitView = /** @class */ (function () {
    function SplitView() {
        // setTimeout(function () {
        // }, 5000);
        this.view = new NSSplitView();
    }
    SplitView.prototype.appendChild = function (child) {
        this.view.appendChild(child.get());
    };
    SplitView.prototype.get = function () {
        return this.view.get();
    };
    return SplitView;
}());
exports.SplitView = SplitView;

},{}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StackView = /** @class */ (function () {
    function StackView() {
        this.view = new NSStackView();
    }
    StackView.prototype.appendChild = function (child) {
        this.view.appendChild(child.get());
    };
    StackView.prototype.get = function () {
        return this.view.get();
    };
    return StackView;
}());
exports.StackView = StackView;

},{}],6:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var View = /** @class */ (function () {
    function View() {
        this.view = new NSView();
    }
    View.prototype.appendChild = function (child) {
        this.view.appendChild(child.get());
    };
    View.prototype.get = function () {
        return this.view.get();
    };
    return View;
}());
exports.View = View;

},{}],7:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Window = /** @class */ (function () {
    function Window() {
        this.win = new NSWindow();
    }
    Window.prototype.appendChild = function (child) {
        this.win.appendChild(child.get());
    };
    Window.prototype.get = function () {
        return this.win.get();
    };
    return Window;
}());
exports.Window = Window;

},{}],8:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Reconciler = require("react-reconciler");
var Window_1 = require("./components/Window");
var Button_1 = require("./components/Button");
var View_1 = require("./components/View");
var SplitView_1 = require("./components/SplitView");
var StackView_1 = require("./components/StackView");
var Dropdown_1 = require("./components/Dropdown");
var Editor_1 = require("./components/Editor");
// import "babel-polyfill";
var Root = /** @class */ (function () {
    function Root() {
    }
    Root.prototype.appendChild = function (child) {
    };
    return Root;
}());
var map = {
    "window": Window_1.Window,
    "button": Button_1.Button,
    "view": View_1.View,
    "splitview": SplitView_1.SplitView,
    "stackview": StackView_1.StackView,
    "dropdown": Dropdown_1.Dropdown,
    "editor": Editor_1.Editor
};
var rec = Reconciler({
    appendInitialChild: function (parentInstance, child) {
        // if (parentInstance.appendChild) {
        //     parentInstance.appendChild(child);
        // } else {
        //     parentInstance.document = child;
        // }
        parentInstance.appendChild(child);
    },
    appendChildToContainer: function (parent, child) {
        parent.appendChild(child);
        // print(arguments);
    },
    createInstance: function (type, props, internalInstanceHandle) {
        var component = new map[type]();
        return component;
        // return createElement(type, props, internalInstanceHandle);
    },
    createTextInstance: function (text, rootContainerInstance, internalInstanceHandle) {
        return text;
    },
    finalizeInitialChildren: function (wordElement, type, props) {
        return false;
    },
    getPublicInstance: function (inst) {
        return inst;
    },
    prepareForCommit: function () {
        // noop
    },
    prepareUpdate: function (wordElement, type, oldProps, newProps) {
        return true;
    },
    resetAfterCommit: function () {
        // noop
    },
    resetTextContent: function (wordElement) {
        // noop
    },
    getRootHostContext: function (rootInstance) {
        // You can use this 'rootInstance' to pass data from the roots.
    },
    getChildHostContext: function () {
        return {};
    },
    shouldSetTextContent: function (type, props) {
        return false;
    },
    now: Date.now,
    supportsMutation: true
});
var root = rec.createContainer(new Root());
function render(element) {
    rec.updateContainer(element, root);
}
render(React.createElement("window", null,
    React.createElement("editor", null)));

},{"./components/Button":1,"./components/Dropdown":2,"./components/Editor":3,"./components/SplitView":4,"./components/StackView":5,"./components/View":6,"./components/Window":7,"react":23,"react-reconciler":20}],9:[function(require,module,exports){
"use strict";

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;
},{}],10:[function(require,module,exports){
(function (process){
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

'use strict';

var emptyObject = {};

if (process.env.NODE_ENV !== 'production') {
  Object.freeze(emptyObject);
}

module.exports = emptyObject;
}).call(this,require('_process'))
},{"_process":15}],11:[function(require,module,exports){
(function (process){
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

'use strict';

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (process.env.NODE_ENV !== 'production') {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;
}).call(this,require('_process'))
},{"_process":15}],12:[function(require,module,exports){
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 * 
 */

/*eslint-disable no-self-compare */

'use strict';

var hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */
function is(x, y) {
  // SameValue algorithm
  if (x === y) {
    // Steps 1-5, 7-10
    // Steps 6.b-6.e: +0 != -0
    // Added the nonzero y check to make Flow happy, but it is redundant
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    // Step 6.a: NaN == NaN
    return x !== x && y !== y;
  }
}

/**
 * Performs equality by iterating through keys on an object and returning false
 * when any key has values which are not strictly equal between the arguments.
 * Returns true when the values of all keys are strictly equal.
 */
function shallowEqual(objA, objB) {
  if (is(objA, objB)) {
    return true;
  }

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  // Test for A's keys different from B.
  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

module.exports = shallowEqual;
},{}],13:[function(require,module,exports){
(function (process){
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

'use strict';

var emptyFunction = require('./emptyFunction');

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (process.env.NODE_ENV !== 'production') {
  var printWarning = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

module.exports = warning;
}).call(this,require('_process'))
},{"./emptyFunction":9,"_process":15}],14:[function(require,module,exports){
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

'use strict';
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

},{}],15:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],16:[function(require,module,exports){
(function (process){
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

var printWarning = function() {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret = require('./lib/ReactPropTypesSecret');
  var loggedTypeFailures = {};

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          )

        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

module.exports = checkPropTypes;

}).call(this,require('_process'))
},{"./lib/ReactPropTypesSecret":17,"_process":15}],17:[function(require,module,exports){
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;

},{}],18:[function(require,module,exports){
(function (process){
/** @license React v16.4.1
 * react-reconciler.development.js
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

if (process.env.NODE_ENV !== "production") {
  module.exports = function $$$reconciler($$$hostConfig) {
'use strict';

var _assign = require('object-assign');
var invariant = require('fbjs/lib/invariant');
var warning = require('fbjs/lib/warning');
var React = require('react');
var emptyObject = require('fbjs/lib/emptyObject');
var checkPropTypes = require('prop-types/checkPropTypes');
var shallowEqual = require('fbjs/lib/shallowEqual');

// Relying on the `invariant()` implementation lets us
// have preserve the format and params in the www builds.

/**
 * `ReactInstanceMap` maintains a mapping from a public facing stateful
 * instance (key) and the internal representation (value). This allows public
 * methods to accept the user facing instance as an argument and map them back
 * to internal methods.
 *
 * Note that this module is currently shared and assumed to be stateless.
 * If this becomes an actual Map, that will break.
 */

/**
 * This API should be called `delete` but we'd have to make sure to always
 * transform these to strings for IE support. When this transform is fully
 * supported we can rename it.
 */


function get(key) {
  return key._reactInternalFiber;
}



function set(key, value) {
  key._reactInternalFiber = value;
}

var ReactInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

var ReactCurrentOwner = ReactInternals.ReactCurrentOwner;
var ReactDebugCurrentFrame = ReactInternals.ReactDebugCurrentFrame;

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_TIMEOUT_TYPE = hasSymbol ? Symbol.for('react.timeout') : 0xead1;

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';

function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable === 'undefined') {
    return null;
  }
  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }
  return null;
}

function getComponentName(fiber) {
  var type = fiber.type;

  if (typeof type === 'function') {
    return type.displayName || type.name;
  }
  if (typeof type === 'string') {
    return type;
  }
  switch (type) {
    case REACT_ASYNC_MODE_TYPE:
      return 'AsyncMode';
    case REACT_CONTEXT_TYPE:
      return 'Context.Consumer';
    case REACT_FRAGMENT_TYPE:
      return 'ReactFragment';
    case REACT_PORTAL_TYPE:
      return 'ReactPortal';
    case REACT_PROFILER_TYPE:
      return 'Profiler(' + fiber.pendingProps.id + ')';
    case REACT_PROVIDER_TYPE:
      return 'Context.Provider';
    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';
    case REACT_TIMEOUT_TYPE:
      return 'Timeout';
  }
  if (typeof type === 'object' && type !== null) {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        var functionName = type.render.displayName || type.render.name || '';
        return functionName !== '' ? 'ForwardRef(' + functionName + ')' : 'ForwardRef';
    }
  }
  return null;
}

var IndeterminateComponent = 0; // Before we know whether it is functional or class
var FunctionalComponent = 1;
var ClassComponent = 2;
var HostRoot = 3; // Root of a host tree. Could be nested inside another node.
var HostPortal = 4; // A subtree. Could be an entry point to a different renderer.
var HostComponent = 5;
var HostText = 6;



var Fragment = 10;
var Mode = 11;
var ContextConsumer = 12;
var ContextProvider = 13;
var ForwardRef = 14;
var Profiler = 15;
var TimeoutComponent = 16;

// Don't change these two values. They're used by React Dev Tools.
var NoEffect = /*              */0;
var PerformedWork = /*         */1;

// You can change the rest (and add more).
var Placement = /*             */2;
var Update = /*                */4;
var PlacementAndUpdate = /*    */6;
var Deletion = /*              */8;
var ContentReset = /*          */16;
var Callback = /*              */32;
var DidCapture = /*            */64;
var Ref = /*                   */128;
var Snapshot = /*              */256;

// Union of all host effects
var HostEffectMask = /*        */511;

var Incomplete = /*            */512;
var ShouldCapture = /*         */1024;

var MOUNTING = 1;
var MOUNTED = 2;
var UNMOUNTED = 3;

function isFiberMountedImpl(fiber) {
  var node = fiber;
  if (!fiber.alternate) {
    // If there is no alternate, this might be a new tree that isn't inserted
    // yet. If it is, then it will have a pending insertion effect on it.
    if ((node.effectTag & Placement) !== NoEffect) {
      return MOUNTING;
    }
    while (node.return) {
      node = node.return;
      if ((node.effectTag & Placement) !== NoEffect) {
        return MOUNTING;
      }
    }
  } else {
    while (node.return) {
      node = node.return;
    }
  }
  if (node.tag === HostRoot) {
    // TODO: Check if this was a nested HostRoot when used with
    // renderContainerIntoSubtree.
    return MOUNTED;
  }
  // If we didn't hit the root, that means that we're in an disconnected tree
  // that has been unmounted.
  return UNMOUNTED;
}

function isFiberMounted(fiber) {
  return isFiberMountedImpl(fiber) === MOUNTED;
}

function isMounted(component) {
  {
    var owner = ReactCurrentOwner.current;
    if (owner !== null && owner.tag === ClassComponent) {
      var ownerFiber = owner;
      var instance = ownerFiber.stateNode;
      !instance._warnedAboutRefsInRender ? warning(false, '%s is accessing isMounted inside its render() function. ' + 'render() should be a pure function of props and state. It should ' + 'never access something that requires stale data from the previous ' + 'render, such as refs. Move this logic to componentDidMount and ' + 'componentDidUpdate instead.', getComponentName(ownerFiber) || 'A component') : void 0;
      instance._warnedAboutRefsInRender = true;
    }
  }

  var fiber = get(component);
  if (!fiber) {
    return false;
  }
  return isFiberMountedImpl(fiber) === MOUNTED;
}

function assertIsMounted(fiber) {
  !(isFiberMountedImpl(fiber) === MOUNTED) ? invariant(false, 'Unable to find node on an unmounted component.') : void 0;
}

function findCurrentFiberUsingSlowPath(fiber) {
  var alternate = fiber.alternate;
  if (!alternate) {
    // If there is no alternate, then we only need to check if it is mounted.
    var state = isFiberMountedImpl(fiber);
    !(state !== UNMOUNTED) ? invariant(false, 'Unable to find node on an unmounted component.') : void 0;
    if (state === MOUNTING) {
      return null;
    }
    return fiber;
  }
  // If we have two possible branches, we'll walk backwards up to the root
  // to see what path the root points to. On the way we may hit one of the
  // special cases and we'll deal with them.
  var a = fiber;
  var b = alternate;
  while (true) {
    var parentA = a.return;
    var parentB = parentA ? parentA.alternate : null;
    if (!parentA || !parentB) {
      // We're at the root.
      break;
    }

    // If both copies of the parent fiber point to the same child, we can
    // assume that the child is current. This happens when we bailout on low
    // priority: the bailed out fiber's child reuses the current child.
    if (parentA.child === parentB.child) {
      var child = parentA.child;
      while (child) {
        if (child === a) {
          // We've determined that A is the current branch.
          assertIsMounted(parentA);
          return fiber;
        }
        if (child === b) {
          // We've determined that B is the current branch.
          assertIsMounted(parentA);
          return alternate;
        }
        child = child.sibling;
      }
      // We should never have an alternate for any mounting node. So the only
      // way this could possibly happen is if this was unmounted, if at all.
      invariant(false, 'Unable to find node on an unmounted component.');
    }

    if (a.return !== b.return) {
      // The return pointer of A and the return pointer of B point to different
      // fibers. We assume that return pointers never criss-cross, so A must
      // belong to the child set of A.return, and B must belong to the child
      // set of B.return.
      a = parentA;
      b = parentB;
    } else {
      // The return pointers point to the same fiber. We'll have to use the
      // default, slow path: scan the child sets of each parent alternate to see
      // which child belongs to which set.
      //
      // Search parent A's child set
      var didFindChild = false;
      var _child = parentA.child;
      while (_child) {
        if (_child === a) {
          didFindChild = true;
          a = parentA;
          b = parentB;
          break;
        }
        if (_child === b) {
          didFindChild = true;
          b = parentA;
          a = parentB;
          break;
        }
        _child = _child.sibling;
      }
      if (!didFindChild) {
        // Search parent B's child set
        _child = parentB.child;
        while (_child) {
          if (_child === a) {
            didFindChild = true;
            a = parentB;
            b = parentA;
            break;
          }
          if (_child === b) {
            didFindChild = true;
            b = parentB;
            a = parentA;
            break;
          }
          _child = _child.sibling;
        }
        !didFindChild ? invariant(false, 'Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.') : void 0;
      }
    }

    !(a.alternate === b) ? invariant(false, 'Return fibers should always be each others\' alternates. This error is likely caused by a bug in React. Please file an issue.') : void 0;
  }
  // If the root is not a host container, we're in a disconnected tree. I.e.
  // unmounted.
  !(a.tag === HostRoot) ? invariant(false, 'Unable to find node on an unmounted component.') : void 0;
  if (a.stateNode.current === a) {
    // We've determined that A is the current branch.
    return fiber;
  }
  // Otherwise B has to be current branch.
  return alternate;
}

function findCurrentHostFiber(parent) {
  var currentParent = findCurrentFiberUsingSlowPath(parent);
  if (!currentParent) {
    return null;
  }

  // Next we'll drill down this component to find the first HostComponent/Text.
  var node = currentParent;
  while (true) {
    if (node.tag === HostComponent || node.tag === HostText) {
      return node;
    } else if (node.child) {
      node.child.return = node;
      node = node.child;
      continue;
    }
    if (node === currentParent) {
      return null;
    }
    while (!node.sibling) {
      if (!node.return || node.return === currentParent) {
        return null;
      }
      node = node.return;
    }
    node.sibling.return = node.return;
    node = node.sibling;
  }
  // Flow needs the return null here, but ESLint complains about it.
  // eslint-disable-next-line no-unreachable
  return null;
}

function findCurrentHostFiberWithNoPortals(parent) {
  var currentParent = findCurrentFiberUsingSlowPath(parent);
  if (!currentParent) {
    return null;
  }

  // Next we'll drill down this component to find the first HostComponent/Text.
  var node = currentParent;
  while (true) {
    if (node.tag === HostComponent || node.tag === HostText) {
      return node;
    } else if (node.child && node.tag !== HostPortal) {
      node.child.return = node;
      node = node.child;
      continue;
    }
    if (node === currentParent) {
      return null;
    }
    while (!node.sibling) {
      if (!node.return || node.return === currentParent) {
        return null;
      }
      node = node.return;
    }
    node.sibling.return = node.return;
    node = node.sibling;
  }
  // Flow needs the return null here, but ESLint complains about it.
  // eslint-disable-next-line no-unreachable
  return null;
}

// eslint-disable-line no-undef

// eslint-disable-line no-undef
// eslint-disable-line no-undef
// eslint-disable-line no-undef
// eslint-disable-line no-undef
var getPublicInstance = $$$hostConfig.getPublicInstance; // eslint-disable-line no-undef
// eslint-disable-line no-undef
// eslint-disable-line no-undef
// eslint-disable-line no-undef
// eslint-disable-line no-undef
// This is a host config that's used for the `react-reconciler` package on npm.
// It is only used by third-party renderers.
//
// Its API lets you pass the host config as an argument.
// However, inside the `react-reconciler` we treat host config as a module.
// This file is a shim between two worlds.
//
// It works because the `react-reconciler` bundle is wrapped in something like:
//
// module.exports = function ($$$config) {
//   /* reconciler code */
// }
//
// So `$$$config` looks like a global variable, but it's
// really an argument to a top-level wrapping function.

var getRootHostContext = $$$hostConfig.getRootHostContext;
var getChildHostContext = $$$hostConfig.getChildHostContext;
var prepareForCommit = $$$hostConfig.prepareForCommit;
var resetAfterCommit = $$$hostConfig.resetAfterCommit;
var createInstance = $$$hostConfig.createInstance;
var appendInitialChild = $$$hostConfig.appendInitialChild;
var finalizeInitialChildren = $$$hostConfig.finalizeInitialChildren;
var prepareUpdate = $$$hostConfig.prepareUpdate;
var shouldSetTextContent = $$$hostConfig.shouldSetTextContent;
var shouldDeprioritizeSubtree = $$$hostConfig.shouldDeprioritizeSubtree;
var createTextInstance = $$$hostConfig.createTextInstance;
var scheduleDeferredCallback = $$$hostConfig.scheduleDeferredCallback;
var cancelDeferredCallback = $$$hostConfig.cancelDeferredCallback;
var now = $$$hostConfig.now;
var isPrimaryRenderer = $$$hostConfig.isPrimaryRenderer;
var supportsMutation = $$$hostConfig.supportsMutation;
var supportsPersistence = $$$hostConfig.supportsPersistence;
var supportsHydration = $$$hostConfig.supportsHydration;

// -------------------
//      Mutation
//     (optional)
// -------------------
var appendChild = $$$hostConfig.appendChild;
var appendChildToContainer = $$$hostConfig.appendChildToContainer;
var commitTextUpdate = $$$hostConfig.commitTextUpdate;
var commitMount = $$$hostConfig.commitMount;
var commitUpdate = $$$hostConfig.commitUpdate;
var insertBefore = $$$hostConfig.insertBefore;
var insertInContainerBefore = $$$hostConfig.insertInContainerBefore;
var removeChild = $$$hostConfig.removeChild;
var removeChildFromContainer = $$$hostConfig.removeChildFromContainer;
var resetTextContent = $$$hostConfig.resetTextContent;

// -------------------
//     Persistence
//     (optional)
// -------------------
var cloneInstance = $$$hostConfig.cloneInstance;
var createContainerChildSet = $$$hostConfig.createContainerChildSet;
var appendChildToContainerChildSet = $$$hostConfig.appendChildToContainerChildSet;
var finalizeContainerChildren = $$$hostConfig.finalizeContainerChildren;
var replaceContainerChildren = $$$hostConfig.replaceContainerChildren;

// -------------------
//     Hydration
//     (optional)
// -------------------
var canHydrateInstance = $$$hostConfig.canHydrateInstance;
var canHydrateTextInstance = $$$hostConfig.canHydrateTextInstance;
var getNextHydratableSibling = $$$hostConfig.getNextHydratableSibling;
var getFirstHydratableChild = $$$hostConfig.getFirstHydratableChild;
var hydrateInstance = $$$hostConfig.hydrateInstance;
var hydrateTextInstance = $$$hostConfig.hydrateTextInstance;
var didNotMatchHydratedContainerTextInstance = $$$hostConfig.didNotMatchHydratedContainerTextInstance;
var didNotMatchHydratedTextInstance = $$$hostConfig.didNotMatchHydratedTextInstance;
var didNotHydrateContainerInstance = $$$hostConfig.didNotHydrateContainerInstance;
var didNotHydrateInstance = $$$hostConfig.didNotHydrateInstance;
var didNotFindHydratableContainerInstance = $$$hostConfig.didNotFindHydratableContainerInstance;
var didNotFindHydratableContainerTextInstance = $$$hostConfig.didNotFindHydratableContainerTextInstance;
var didNotFindHydratableInstance = $$$hostConfig.didNotFindHydratableInstance;
var didNotFindHydratableTextInstance = $$$hostConfig.didNotFindHydratableTextInstance;

var describeComponentFrame = function (name, source, ownerName) {
  return '\n    in ' + (name || 'Unknown') + (source ? ' (at ' + source.fileName.replace(/^.*[\\\/]/, '') + ':' + source.lineNumber + ')' : ownerName ? ' (created by ' + ownerName + ')' : '');
};

function describeFiber(fiber) {
  switch (fiber.tag) {
    case IndeterminateComponent:
    case FunctionalComponent:
    case ClassComponent:
    case HostComponent:
      var owner = fiber._debugOwner;
      var source = fiber._debugSource;
      var name = getComponentName(fiber);
      var ownerName = null;
      if (owner) {
        ownerName = getComponentName(owner);
      }
      return describeComponentFrame(name, source, ownerName);
    default:
      return '';
  }
}

// This function can only be called with a work-in-progress fiber and
// only during begin or complete phase. Do not call it under any other
// circumstances.
function getStackAddendumByWorkInProgressFiber(workInProgress) {
  var info = '';
  var node = workInProgress;
  do {
    info += describeFiber(node);
    // Otherwise this return pointer might point to the wrong tree:
    node = node.return;
  } while (node);
  return info;
}

function getCurrentFiberOwnerName() {
  {
    var fiber = ReactDebugCurrentFiber.current;
    if (fiber === null) {
      return null;
    }
    var owner = fiber._debugOwner;
    if (owner !== null && typeof owner !== 'undefined') {
      return getComponentName(owner);
    }
  }
  return null;
}

function getCurrentFiberStackAddendum() {
  {
    var fiber = ReactDebugCurrentFiber.current;
    if (fiber === null) {
      return null;
    }
    // Safe because if current fiber exists, we are reconciling,
    // and it is guaranteed to be the work-in-progress version.
    return getStackAddendumByWorkInProgressFiber(fiber);
  }
  return null;
}

function resetCurrentFiber() {
  ReactDebugCurrentFrame.getCurrentStack = null;
  ReactDebugCurrentFiber.current = null;
  ReactDebugCurrentFiber.phase = null;
}

function setCurrentFiber(fiber) {
  ReactDebugCurrentFrame.getCurrentStack = getCurrentFiberStackAddendum;
  ReactDebugCurrentFiber.current = fiber;
  ReactDebugCurrentFiber.phase = null;
}

function setCurrentPhase(phase) {
  ReactDebugCurrentFiber.phase = phase;
}

var ReactDebugCurrentFiber = {
  current: null,
  phase: null,
  resetCurrentFiber: resetCurrentFiber,
  setCurrentFiber: setCurrentFiber,
  setCurrentPhase: setCurrentPhase,
  getCurrentFiberOwnerName: getCurrentFiberOwnerName,
  getCurrentFiberStackAddendum: getCurrentFiberStackAddendum
};

// Exports ReactDOM.createRoot
var enableUserTimingAPI = true;

// Experimental error-boundary API that can recover from errors within a single
// render phase
var enableGetDerivedStateFromCatch = false;
// Suspense
var enableSuspense = false;
// Helps identify side effects in begin-phase lifecycle hooks and setState reducers:
var debugRenderPhaseSideEffects = false;

// In some cases, StrictMode should also double-render lifecycles.
// This can be confusing for tests though,
// And it can be bad for performance in production.
// This feature flag can be used to control the behavior:
var debugRenderPhaseSideEffectsForStrictMode = true;

// To preserve the "Pause on caught exceptions" behavior of the debugger, we
// replay the begin phase of a failed component inside invokeGuardedCallback.
var replayFailedUnitOfWorkWithInvokeGuardedCallback = true;

// Warn about deprecated, async-unsafe lifecycles; relates to RFC #6:
var warnAboutDeprecatedLifecycles = false;

// Warn about legacy context API
var warnAboutLegacyContextAPI = false;

// Gather advanced timing metrics for Profiler subtrees.
var enableProfilerTimer = true;

// Only used in www builds.

// Prefix measurements so that it's possible to filter them.
// Longer prefixes are hard to read in DevTools.
var reactEmoji = '\u269B';
var warningEmoji = '\u26D4';
var supportsUserTiming = typeof performance !== 'undefined' && typeof performance.mark === 'function' && typeof performance.clearMarks === 'function' && typeof performance.measure === 'function' && typeof performance.clearMeasures === 'function';

// Keep track of current fiber so that we know the path to unwind on pause.
// TODO: this looks the same as nextUnitOfWork in scheduler. Can we unify them?
var currentFiber = null;
// If we're in the middle of user code, which fiber and method is it?
// Reusing `currentFiber` would be confusing for this because user code fiber
// can change during commit phase too, but we don't need to unwind it (since
// lifecycles in the commit phase don't resemble a tree).
var currentPhase = null;
var currentPhaseFiber = null;
// Did lifecycle hook schedule an update? This is often a performance problem,
// so we will keep track of it, and include it in the report.
// Track commits caused by cascading updates.
var isCommitting = false;
var hasScheduledUpdateInCurrentCommit = false;
var hasScheduledUpdateInCurrentPhase = false;
var commitCountInCurrentWorkLoop = 0;
var effectCountInCurrentCommit = 0;
var isWaitingForCallback = false;
// During commits, we only show a measurement once per method name
// to avoid stretch the commit phase with measurement overhead.
var labelsInCurrentCommit = new Set();

var formatMarkName = function (markName) {
  return reactEmoji + ' ' + markName;
};

var formatLabel = function (label, warning$$1) {
  var prefix = warning$$1 ? warningEmoji + ' ' : reactEmoji + ' ';
  var suffix = warning$$1 ? ' Warning: ' + warning$$1 : '';
  return '' + prefix + label + suffix;
};

var beginMark = function (markName) {
  performance.mark(formatMarkName(markName));
};

var clearMark = function (markName) {
  performance.clearMarks(formatMarkName(markName));
};

var endMark = function (label, markName, warning$$1) {
  var formattedMarkName = formatMarkName(markName);
  var formattedLabel = formatLabel(label, warning$$1);
  try {
    performance.measure(formattedLabel, formattedMarkName);
  } catch (err) {}
  // If previous mark was missing for some reason, this will throw.
  // This could only happen if React crashed in an unexpected place earlier.
  // Don't pile on with more errors.

  // Clear marks immediately to avoid growing buffer.
  performance.clearMarks(formattedMarkName);
  performance.clearMeasures(formattedLabel);
};

var getFiberMarkName = function (label, debugID) {
  return label + ' (#' + debugID + ')';
};

var getFiberLabel = function (componentName, isMounted, phase) {
  if (phase === null) {
    // These are composite component total time measurements.
    return componentName + ' [' + (isMounted ? 'update' : 'mount') + ']';
  } else {
    // Composite component methods.
    return componentName + '.' + phase;
  }
};

var beginFiberMark = function (fiber, phase) {
  var componentName = getComponentName(fiber) || 'Unknown';
  var debugID = fiber._debugID;
  var isMounted = fiber.alternate !== null;
  var label = getFiberLabel(componentName, isMounted, phase);

  if (isCommitting && labelsInCurrentCommit.has(label)) {
    // During the commit phase, we don't show duplicate labels because
    // there is a fixed overhead for every measurement, and we don't
    // want to stretch the commit phase beyond necessary.
    return false;
  }
  labelsInCurrentCommit.add(label);

  var markName = getFiberMarkName(label, debugID);
  beginMark(markName);
  return true;
};

var clearFiberMark = function (fiber, phase) {
  var componentName = getComponentName(fiber) || 'Unknown';
  var debugID = fiber._debugID;
  var isMounted = fiber.alternate !== null;
  var label = getFiberLabel(componentName, isMounted, phase);
  var markName = getFiberMarkName(label, debugID);
  clearMark(markName);
};

var endFiberMark = function (fiber, phase, warning$$1) {
  var componentName = getComponentName(fiber) || 'Unknown';
  var debugID = fiber._debugID;
  var isMounted = fiber.alternate !== null;
  var label = getFiberLabel(componentName, isMounted, phase);
  var markName = getFiberMarkName(label, debugID);
  endMark(label, markName, warning$$1);
};

var shouldIgnoreFiber = function (fiber) {
  // Host components should be skipped in the timeline.
  // We could check typeof fiber.type, but does this work with RN?
  switch (fiber.tag) {
    case HostRoot:
    case HostComponent:
    case HostText:
    case HostPortal:
    case Fragment:
    case ContextProvider:
    case ContextConsumer:
    case Mode:
      return true;
    default:
      return false;
  }
};

var clearPendingPhaseMeasurement = function () {
  if (currentPhase !== null && currentPhaseFiber !== null) {
    clearFiberMark(currentPhaseFiber, currentPhase);
  }
  currentPhaseFiber = null;
  currentPhase = null;
  hasScheduledUpdateInCurrentPhase = false;
};

var pauseTimers = function () {
  // Stops all currently active measurements so that they can be resumed
  // if we continue in a later deferred loop from the same unit of work.
  var fiber = currentFiber;
  while (fiber) {
    if (fiber._debugIsCurrentlyTiming) {
      endFiberMark(fiber, null, null);
    }
    fiber = fiber.return;
  }
};

var resumeTimersRecursively = function (fiber) {
  if (fiber.return !== null) {
    resumeTimersRecursively(fiber.return);
  }
  if (fiber._debugIsCurrentlyTiming) {
    beginFiberMark(fiber, null);
  }
};

var resumeTimers = function () {
  // Resumes all measurements that were active during the last deferred loop.
  if (currentFiber !== null) {
    resumeTimersRecursively(currentFiber);
  }
};

function recordEffect() {
  if (enableUserTimingAPI) {
    effectCountInCurrentCommit++;
  }
}

function recordScheduleUpdate() {
  if (enableUserTimingAPI) {
    if (isCommitting) {
      hasScheduledUpdateInCurrentCommit = true;
    }
    if (currentPhase !== null && currentPhase !== 'componentWillMount' && currentPhase !== 'componentWillReceiveProps') {
      hasScheduledUpdateInCurrentPhase = true;
    }
  }
}

function startRequestCallbackTimer() {
  if (enableUserTimingAPI) {
    if (supportsUserTiming && !isWaitingForCallback) {
      isWaitingForCallback = true;
      beginMark('(Waiting for async callback...)');
    }
  }
}

function stopRequestCallbackTimer(didExpire, expirationTime) {
  if (enableUserTimingAPI) {
    if (supportsUserTiming) {
      isWaitingForCallback = false;
      var warning$$1 = didExpire ? 'React was blocked by main thread' : null;
      endMark('(Waiting for async callback... will force flush in ' + expirationTime + ' ms)', '(Waiting for async callback...)', warning$$1);
    }
  }
}

function startWorkTimer(fiber) {
  if (enableUserTimingAPI) {
    if (!supportsUserTiming || shouldIgnoreFiber(fiber)) {
      return;
    }
    // If we pause, this is the fiber to unwind from.
    currentFiber = fiber;
    if (!beginFiberMark(fiber, null)) {
      return;
    }
    fiber._debugIsCurrentlyTiming = true;
  }
}

function cancelWorkTimer(fiber) {
  if (enableUserTimingAPI) {
    if (!supportsUserTiming || shouldIgnoreFiber(fiber)) {
      return;
    }
    // Remember we shouldn't complete measurement for this fiber.
    // Otherwise flamechart will be deep even for small updates.
    fiber._debugIsCurrentlyTiming = false;
    clearFiberMark(fiber, null);
  }
}

function stopWorkTimer(fiber) {
  if (enableUserTimingAPI) {
    if (!supportsUserTiming || shouldIgnoreFiber(fiber)) {
      return;
    }
    // If we pause, its parent is the fiber to unwind from.
    currentFiber = fiber.return;
    if (!fiber._debugIsCurrentlyTiming) {
      return;
    }
    fiber._debugIsCurrentlyTiming = false;
    endFiberMark(fiber, null, null);
  }
}

function stopFailedWorkTimer(fiber) {
  if (enableUserTimingAPI) {
    if (!supportsUserTiming || shouldIgnoreFiber(fiber)) {
      return;
    }
    // If we pause, its parent is the fiber to unwind from.
    currentFiber = fiber.return;
    if (!fiber._debugIsCurrentlyTiming) {
      return;
    }
    fiber._debugIsCurrentlyTiming = false;
    var warning$$1 = 'An error was thrown inside this error boundary';
    endFiberMark(fiber, null, warning$$1);
  }
}

function startPhaseTimer(fiber, phase) {
  if (enableUserTimingAPI) {
    if (!supportsUserTiming) {
      return;
    }
    clearPendingPhaseMeasurement();
    if (!beginFiberMark(fiber, phase)) {
      return;
    }
    currentPhaseFiber = fiber;
    currentPhase = phase;
  }
}

function stopPhaseTimer() {
  if (enableUserTimingAPI) {
    if (!supportsUserTiming) {
      return;
    }
    if (currentPhase !== null && currentPhaseFiber !== null) {
      var warning$$1 = hasScheduledUpdateInCurrentPhase ? 'Scheduled a cascading update' : null;
      endFiberMark(currentPhaseFiber, currentPhase, warning$$1);
    }
    currentPhase = null;
    currentPhaseFiber = null;
  }
}

function startWorkLoopTimer(nextUnitOfWork) {
  if (enableUserTimingAPI) {
    currentFiber = nextUnitOfWork;
    if (!supportsUserTiming) {
      return;
    }
    commitCountInCurrentWorkLoop = 0;
    // This is top level call.
    // Any other measurements are performed within.
    beginMark('(React Tree Reconciliation)');
    // Resume any measurements that were in progress during the last loop.
    resumeTimers();
  }
}

function stopWorkLoopTimer(interruptedBy, didCompleteRoot) {
  if (enableUserTimingAPI) {
    if (!supportsUserTiming) {
      return;
    }
    var warning$$1 = null;
    if (interruptedBy !== null) {
      if (interruptedBy.tag === HostRoot) {
        warning$$1 = 'A top-level update interrupted the previous render';
      } else {
        var componentName = getComponentName(interruptedBy) || 'Unknown';
        warning$$1 = 'An update to ' + componentName + ' interrupted the previous render';
      }
    } else if (commitCountInCurrentWorkLoop > 1) {
      warning$$1 = 'There were cascading updates';
    }
    commitCountInCurrentWorkLoop = 0;
    var label = didCompleteRoot ? '(React Tree Reconciliation: Completed Root)' : '(React Tree Reconciliation: Yielded)';
    // Pause any measurements until the next loop.
    pauseTimers();
    endMark(label, '(React Tree Reconciliation)', warning$$1);
  }
}

function startCommitTimer() {
  if (enableUserTimingAPI) {
    if (!supportsUserTiming) {
      return;
    }
    isCommitting = true;
    hasScheduledUpdateInCurrentCommit = false;
    labelsInCurrentCommit.clear();
    beginMark('(Committing Changes)');
  }
}

function stopCommitTimer() {
  if (enableUserTimingAPI) {
    if (!supportsUserTiming) {
      return;
    }

    var warning$$1 = null;
    if (hasScheduledUpdateInCurrentCommit) {
      warning$$1 = 'Lifecycle hook scheduled a cascading update';
    } else if (commitCountInCurrentWorkLoop > 0) {
      warning$$1 = 'Caused by a cascading update in earlier commit';
    }
    hasScheduledUpdateInCurrentCommit = false;
    commitCountInCurrentWorkLoop++;
    isCommitting = false;
    labelsInCurrentCommit.clear();

    endMark('(Committing Changes)', '(Committing Changes)', warning$$1);
  }
}

function startCommitSnapshotEffectsTimer() {
  if (enableUserTimingAPI) {
    if (!supportsUserTiming) {
      return;
    }
    effectCountInCurrentCommit = 0;
    beginMark('(Committing Snapshot Effects)');
  }
}

function stopCommitSnapshotEffectsTimer() {
  if (enableUserTimingAPI) {
    if (!supportsUserTiming) {
      return;
    }
    var count = effectCountInCurrentCommit;
    effectCountInCurrentCommit = 0;
    endMark('(Committing Snapshot Effects: ' + count + ' Total)', '(Committing Snapshot Effects)', null);
  }
}

function startCommitHostEffectsTimer() {
  if (enableUserTimingAPI) {
    if (!supportsUserTiming) {
      return;
    }
    effectCountInCurrentCommit = 0;
    beginMark('(Committing Host Effects)');
  }
}

function stopCommitHostEffectsTimer() {
  if (enableUserTimingAPI) {
    if (!supportsUserTiming) {
      return;
    }
    var count = effectCountInCurrentCommit;
    effectCountInCurrentCommit = 0;
    endMark('(Committing Host Effects: ' + count + ' Total)', '(Committing Host Effects)', null);
  }
}

function startCommitLifeCyclesTimer() {
  if (enableUserTimingAPI) {
    if (!supportsUserTiming) {
      return;
    }
    effectCountInCurrentCommit = 0;
    beginMark('(Calling Lifecycle Methods)');
  }
}

function stopCommitLifeCyclesTimer() {
  if (enableUserTimingAPI) {
    if (!supportsUserTiming) {
      return;
    }
    var count = effectCountInCurrentCommit;
    effectCountInCurrentCommit = 0;
    endMark('(Calling Lifecycle Methods: ' + count + ' Total)', '(Calling Lifecycle Methods)', null);
  }
}

var valueStack = [];

var fiberStack = void 0;

{
  fiberStack = [];
}

var index = -1;

function createCursor(defaultValue) {
  return {
    current: defaultValue
  };
}

function pop(cursor, fiber) {
  if (index < 0) {
    {
      warning(false, 'Unexpected pop.');
    }
    return;
  }

  {
    if (fiber !== fiberStack[index]) {
      warning(false, 'Unexpected Fiber popped.');
    }
  }

  cursor.current = valueStack[index];

  valueStack[index] = null;

  {
    fiberStack[index] = null;
  }

  index--;
}

function push(cursor, value, fiber) {
  index++;

  valueStack[index] = cursor.current;

  {
    fiberStack[index] = fiber;
  }

  cursor.current = value;
}

function checkThatStackIsEmpty() {
  {
    if (index !== -1) {
      warning(false, 'Expected an empty stack. Something was not reset properly.');
    }
  }
}

function resetStackAfterFatalErrorInDev() {
  {
    index = -1;
    valueStack.length = 0;
    fiberStack.length = 0;
  }
}

var warnedAboutMissingGetChildContext = void 0;

{
  warnedAboutMissingGetChildContext = {};
}

// A cursor to the current merged context object on the stack.
var contextStackCursor = createCursor(emptyObject);
// A cursor to a boolean indicating whether the context has changed.
var didPerformWorkStackCursor = createCursor(false);
// Keep track of the previous context object that was on the stack.
// We use this to get access to the parent context after we have already
// pushed the next context provider, and now need to merge their contexts.
var previousContext = emptyObject;

function getUnmaskedContext(workInProgress) {
  var hasOwnContext = isContextProvider(workInProgress);
  if (hasOwnContext) {
    // If the fiber is a context provider itself, when we read its context
    // we have already pushed its own child context on the stack. A context
    // provider should not "see" its own child context. Therefore we read the
    // previous (parent) context instead for a context provider.
    return previousContext;
  }
  return contextStackCursor.current;
}

function cacheContext(workInProgress, unmaskedContext, maskedContext) {
  var instance = workInProgress.stateNode;
  instance.__reactInternalMemoizedUnmaskedChildContext = unmaskedContext;
  instance.__reactInternalMemoizedMaskedChildContext = maskedContext;
}

function getMaskedContext(workInProgress, unmaskedContext) {
  var type = workInProgress.type;
  var contextTypes = type.contextTypes;
  if (!contextTypes) {
    return emptyObject;
  }

  // Avoid recreating masked context unless unmasked context has changed.
  // Failing to do this will result in unnecessary calls to componentWillReceiveProps.
  // This may trigger infinite loops if componentWillReceiveProps calls setState.
  var instance = workInProgress.stateNode;
  if (instance && instance.__reactInternalMemoizedUnmaskedChildContext === unmaskedContext) {
    return instance.__reactInternalMemoizedMaskedChildContext;
  }

  var context = {};
  for (var key in contextTypes) {
    context[key] = unmaskedContext[key];
  }

  {
    var name = getComponentName(workInProgress) || 'Unknown';
    checkPropTypes(contextTypes, context, 'context', name, ReactDebugCurrentFiber.getCurrentFiberStackAddendum);
  }

  // Cache unmasked context so we can avoid recreating masked context unless necessary.
  // Context is created before the class component is instantiated so check for instance.
  if (instance) {
    cacheContext(workInProgress, unmaskedContext, context);
  }

  return context;
}

function hasContextChanged() {
  return didPerformWorkStackCursor.current;
}

function isContextConsumer(fiber) {
  return fiber.tag === ClassComponent && fiber.type.contextTypes != null;
}

function isContextProvider(fiber) {
  return fiber.tag === ClassComponent && fiber.type.childContextTypes != null;
}

function popContextProvider(fiber) {
  if (!isContextProvider(fiber)) {
    return;
  }

  pop(didPerformWorkStackCursor, fiber);
  pop(contextStackCursor, fiber);
}

function popTopLevelContextObject(fiber) {
  pop(didPerformWorkStackCursor, fiber);
  pop(contextStackCursor, fiber);
}

function pushTopLevelContextObject(fiber, context, didChange) {
  !(contextStackCursor.current === emptyObject) ? invariant(false, 'Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.') : void 0;

  push(contextStackCursor, context, fiber);
  push(didPerformWorkStackCursor, didChange, fiber);
}

function processChildContext(fiber, parentContext) {
  var instance = fiber.stateNode;
  var childContextTypes = fiber.type.childContextTypes;

  // TODO (bvaughn) Replace this behavior with an invariant() in the future.
  // It has only been added in Fiber to match the (unintentional) behavior in Stack.
  if (typeof instance.getChildContext !== 'function') {
    {
      var componentName = getComponentName(fiber) || 'Unknown';

      if (!warnedAboutMissingGetChildContext[componentName]) {
        warnedAboutMissingGetChildContext[componentName] = true;
        warning(false, '%s.childContextTypes is specified but there is no getChildContext() method ' + 'on the instance. You can either define getChildContext() on %s or remove ' + 'childContextTypes from it.', componentName, componentName);
      }
    }
    return parentContext;
  }

  var childContext = void 0;
  {
    ReactDebugCurrentFiber.setCurrentPhase('getChildContext');
  }
  startPhaseTimer(fiber, 'getChildContext');
  childContext = instance.getChildContext();
  stopPhaseTimer();
  {
    ReactDebugCurrentFiber.setCurrentPhase(null);
  }
  for (var contextKey in childContext) {
    !(contextKey in childContextTypes) ? invariant(false, '%s.getChildContext(): key "%s" is not defined in childContextTypes.', getComponentName(fiber) || 'Unknown', contextKey) : void 0;
  }
  {
    var name = getComponentName(fiber) || 'Unknown';
    checkPropTypes(childContextTypes, childContext, 'child context', name,
    // In practice, there is one case in which we won't get a stack. It's when
    // somebody calls unstable_renderSubtreeIntoContainer() and we process
    // context from the parent component instance. The stack will be missing
    // because it's outside of the reconciliation, and so the pointer has not
    // been set. This is rare and doesn't matter. We'll also remove that API.
    ReactDebugCurrentFiber.getCurrentFiberStackAddendum);
  }

  return _assign({}, parentContext, childContext);
}

function pushContextProvider(workInProgress) {
  if (!isContextProvider(workInProgress)) {
    return false;
  }

  var instance = workInProgress.stateNode;
  // We push the context as early as possible to ensure stack integrity.
  // If the instance does not exist yet, we will push null at first,
  // and replace it on the stack later when invalidating the context.
  var memoizedMergedChildContext = instance && instance.__reactInternalMemoizedMergedChildContext || emptyObject;

  // Remember the parent context so we can merge with it later.
  // Inherit the parent's did-perform-work value to avoid inadvertently blocking updates.
  previousContext = contextStackCursor.current;
  push(contextStackCursor, memoizedMergedChildContext, workInProgress);
  push(didPerformWorkStackCursor, didPerformWorkStackCursor.current, workInProgress);

  return true;
}

function invalidateContextProvider(workInProgress, didChange) {
  var instance = workInProgress.stateNode;
  !instance ? invariant(false, 'Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.') : void 0;

  if (didChange) {
    // Merge parent and own context.
    // Skip this if we're not updating due to sCU.
    // This avoids unnecessarily recomputing memoized values.
    var mergedContext = processChildContext(workInProgress, previousContext);
    instance.__reactInternalMemoizedMergedChildContext = mergedContext;

    // Replace the old (or empty) context with the new one.
    // It is important to unwind the context in the reverse order.
    pop(didPerformWorkStackCursor, workInProgress);
    pop(contextStackCursor, workInProgress);
    // Now push the new context and mark that it has changed.
    push(contextStackCursor, mergedContext, workInProgress);
    push(didPerformWorkStackCursor, didChange, workInProgress);
  } else {
    pop(didPerformWorkStackCursor, workInProgress);
    push(didPerformWorkStackCursor, didChange, workInProgress);
  }
}

function findCurrentUnmaskedContext(fiber) {
  // Currently this is only used with renderSubtreeIntoContainer; not sure if it
  // makes sense elsewhere
  !(isFiberMounted(fiber) && fiber.tag === ClassComponent) ? invariant(false, 'Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.') : void 0;

  var node = fiber;
  while (node.tag !== HostRoot) {
    if (isContextProvider(node)) {
      return node.stateNode.__reactInternalMemoizedMergedChildContext;
    }
    var parent = node.return;
    !parent ? invariant(false, 'Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.') : void 0;
    node = parent;
  }
  return node.stateNode.context;
}

// Max 31 bit integer. The max integer size in V8 for 32-bit systems.
// Math.pow(2, 30) - 1
// 0b111111111111111111111111111111
var MAX_SIGNED_31_BIT_INT = 1073741823;

// TODO: Use an opaque type once ESLint et al support the syntax


var NoWork = 0;
var Sync = 1;
var Never = MAX_SIGNED_31_BIT_INT;

var UNIT_SIZE = 10;
var MAGIC_NUMBER_OFFSET = 2;

// 1 unit of expiration time represents 10ms.
function msToExpirationTime(ms) {
  // Always add an offset so that we don't clash with the magic number for NoWork.
  return (ms / UNIT_SIZE | 0) + MAGIC_NUMBER_OFFSET;
}

function expirationTimeToMs(expirationTime) {
  return (expirationTime - MAGIC_NUMBER_OFFSET) * UNIT_SIZE;
}

function ceiling(num, precision) {
  return ((num / precision | 0) + 1) * precision;
}

function computeExpirationBucket(currentTime, expirationInMs, bucketSizeMs) {
  return MAGIC_NUMBER_OFFSET + ceiling(currentTime - MAGIC_NUMBER_OFFSET + expirationInMs / UNIT_SIZE, bucketSizeMs / UNIT_SIZE);
}

var NoContext = 0;
var AsyncMode = 1;
var StrictMode = 2;
var ProfileMode = 4;

var hasBadMapPolyfill = void 0;

{
  hasBadMapPolyfill = false;
  try {
    var nonExtensibleObject = Object.preventExtensions({});
    var testMap = new Map([[nonExtensibleObject, null]]);
    var testSet = new Set([nonExtensibleObject]);
    // This is necessary for Rollup to not consider these unused.
    // https://github.com/rollup/rollup/issues/1771
    // TODO: we can remove these if Rollup fixes the bug.
    testMap.set(0, 0);
    testSet.add(0);
  } catch (e) {
    // TODO: Consider warning about bad polyfills
    hasBadMapPolyfill = true;
  }
}

// A Fiber is work on a Component that needs to be done or was done. There can
// be more than one per component.


var debugCounter = void 0;

{
  debugCounter = 1;
}

function FiberNode(tag, pendingProps, key, mode) {
  // Instance
  this.tag = tag;
  this.key = key;
  this.type = null;
  this.stateNode = null;

  // Fiber
  this.return = null;
  this.child = null;
  this.sibling = null;
  this.index = 0;

  this.ref = null;

  this.pendingProps = pendingProps;
  this.memoizedProps = null;
  this.updateQueue = null;
  this.memoizedState = null;

  this.mode = mode;

  // Effects
  this.effectTag = NoEffect;
  this.nextEffect = null;

  this.firstEffect = null;
  this.lastEffect = null;

  this.expirationTime = NoWork;

  this.alternate = null;

  if (enableProfilerTimer) {
    this.actualDuration = 0;
    this.actualStartTime = 0;
    this.selfBaseTime = 0;
    this.treeBaseTime = 0;
  }

  {
    this._debugID = debugCounter++;
    this._debugSource = null;
    this._debugOwner = null;
    this._debugIsCurrentlyTiming = false;
    if (!hasBadMapPolyfill && typeof Object.preventExtensions === 'function') {
      Object.preventExtensions(this);
    }
  }
}

// This is a constructor function, rather than a POJO constructor, still
// please ensure we do the following:
// 1) Nobody should add any instance methods on this. Instance methods can be
//    more difficult to predict when they get optimized and they are almost
//    never inlined properly in static compilers.
// 2) Nobody should rely on `instanceof Fiber` for type testing. We should
//    always know when it is a fiber.
// 3) We might want to experiment with using numeric keys since they are easier
//    to optimize in a non-JIT environment.
// 4) We can easily go from a constructor to a createFiber object literal if that
//    is faster.
// 5) It should be easy to port this to a C struct and keep a C implementation
//    compatible.
var createFiber = function (tag, pendingProps, key, mode) {
  // $FlowFixMe: the shapes are exact here but Flow doesn't like constructors
  return new FiberNode(tag, pendingProps, key, mode);
};

function shouldConstruct(Component) {
  return !!(Component.prototype && Component.prototype.isReactComponent);
}

// This is used to create an alternate fiber to do work on.
function createWorkInProgress(current, pendingProps, expirationTime) {
  var workInProgress = current.alternate;
  if (workInProgress === null) {
    // We use a double buffering pooling technique because we know that we'll
    // only ever need at most two versions of a tree. We pool the "other" unused
    // node that we're free to reuse. This is lazily created to avoid allocating
    // extra objects for things that are never updated. It also allow us to
    // reclaim the extra memory if needed.
    workInProgress = createFiber(current.tag, pendingProps, current.key, current.mode);
    workInProgress.type = current.type;
    workInProgress.stateNode = current.stateNode;

    {
      // DEV-only fields
      workInProgress._debugID = current._debugID;
      workInProgress._debugSource = current._debugSource;
      workInProgress._debugOwner = current._debugOwner;
    }

    workInProgress.alternate = current;
    current.alternate = workInProgress;
  } else {
    workInProgress.pendingProps = pendingProps;

    // We already have an alternate.
    // Reset the effect tag.
    workInProgress.effectTag = NoEffect;

    // The effect list is no longer valid.
    workInProgress.nextEffect = null;
    workInProgress.firstEffect = null;
    workInProgress.lastEffect = null;

    if (enableProfilerTimer) {
      // We intentionally reset, rather than copy, actualDuration & actualStartTime.
      // This prevents time from endlessly accumulating in new commits.
      // This has the downside of resetting values for different priority renders,
      // But works for yielding (the common case) and should support resuming.
      workInProgress.actualDuration = 0;
      workInProgress.actualStartTime = 0;
    }
  }

  workInProgress.expirationTime = expirationTime;

  workInProgress.child = current.child;
  workInProgress.memoizedProps = current.memoizedProps;
  workInProgress.memoizedState = current.memoizedState;
  workInProgress.updateQueue = current.updateQueue;

  // These will be overridden during the parent's reconciliation
  workInProgress.sibling = current.sibling;
  workInProgress.index = current.index;
  workInProgress.ref = current.ref;

  if (enableProfilerTimer) {
    workInProgress.selfBaseTime = current.selfBaseTime;
    workInProgress.treeBaseTime = current.treeBaseTime;
  }

  return workInProgress;
}

function createHostRootFiber(isAsync) {
  var mode = isAsync ? AsyncMode | StrictMode : NoContext;
  return createFiber(HostRoot, null, null, mode);
}

function createFiberFromElement(element, mode, expirationTime) {
  var owner = null;
  {
    owner = element._owner;
  }

  var fiber = void 0;
  var type = element.type;
  var key = element.key;
  var pendingProps = element.props;

  var fiberTag = void 0;
  if (typeof type === 'function') {
    fiberTag = shouldConstruct(type) ? ClassComponent : IndeterminateComponent;
  } else if (typeof type === 'string') {
    fiberTag = HostComponent;
  } else {
    switch (type) {
      case REACT_FRAGMENT_TYPE:
        return createFiberFromFragment(pendingProps.children, mode, expirationTime, key);
      case REACT_ASYNC_MODE_TYPE:
        fiberTag = Mode;
        mode |= AsyncMode | StrictMode;
        break;
      case REACT_STRICT_MODE_TYPE:
        fiberTag = Mode;
        mode |= StrictMode;
        break;
      case REACT_PROFILER_TYPE:
        return createFiberFromProfiler(pendingProps, mode, expirationTime, key);
      case REACT_TIMEOUT_TYPE:
        fiberTag = TimeoutComponent;
        // Suspense does not require async, but its children should be strict
        // mode compatible.
        mode |= StrictMode;
        break;
      default:
        fiberTag = getFiberTagFromObjectType(type, owner);
        break;
    }
  }

  fiber = createFiber(fiberTag, pendingProps, key, mode);
  fiber.type = type;
  fiber.expirationTime = expirationTime;

  {
    fiber._debugSource = element._source;
    fiber._debugOwner = element._owner;
  }

  return fiber;
}

function getFiberTagFromObjectType(type, owner) {
  var $$typeof = typeof type === 'object' && type !== null ? type.$$typeof : null;

  switch ($$typeof) {
    case REACT_PROVIDER_TYPE:
      return ContextProvider;
    case REACT_CONTEXT_TYPE:
      // This is a consumer
      return ContextConsumer;
    case REACT_FORWARD_REF_TYPE:
      return ForwardRef;
    default:
      {
        var info = '';
        {
          if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
            info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and " + 'named imports.';
          }
          var ownerName = owner ? getComponentName(owner) : null;
          if (ownerName) {
            info += '\n\nCheck the render method of `' + ownerName + '`.';
          }
        }
        invariant(false, 'Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s', type == null ? type : typeof type, info);
      }
  }
}

function createFiberFromFragment(elements, mode, expirationTime, key) {
  var fiber = createFiber(Fragment, elements, key, mode);
  fiber.expirationTime = expirationTime;
  return fiber;
}

function createFiberFromProfiler(pendingProps, mode, expirationTime, key) {
  {
    if (typeof pendingProps.id !== 'string' || typeof pendingProps.onRender !== 'function') {
      invariant(false, 'Profiler must specify an "id" string and "onRender" function as props');
    }
  }

  var fiber = createFiber(Profiler, pendingProps, key, mode | ProfileMode);
  fiber.type = REACT_PROFILER_TYPE;
  fiber.expirationTime = expirationTime;

  return fiber;
}

function createFiberFromText(content, mode, expirationTime) {
  var fiber = createFiber(HostText, content, null, mode);
  fiber.expirationTime = expirationTime;
  return fiber;
}

function createFiberFromHostInstanceForDeletion() {
  var fiber = createFiber(HostComponent, null, null, NoContext);
  fiber.type = 'DELETED';
  return fiber;
}

function createFiberFromPortal(portal, mode, expirationTime) {
  var pendingProps = portal.children !== null ? portal.children : [];
  var fiber = createFiber(HostPortal, pendingProps, portal.key, mode);
  fiber.expirationTime = expirationTime;
  fiber.stateNode = {
    containerInfo: portal.containerInfo,
    pendingChildren: null, // Used by persistent updates
    implementation: portal.implementation
  };
  return fiber;
}

// Used for stashing WIP properties to replay failed work in DEV.
function assignFiberPropertiesInDEV(target, source) {
  if (target === null) {
    // This Fiber's initial properties will always be overwritten.
    // We only use a Fiber to ensure the same hidden class so DEV isn't slow.
    target = createFiber(IndeterminateComponent, null, null, NoContext);
  }

  // This is intentionally written as a list of all properties.
  // We tried to use Object.assign() instead but this is called in
  // the hottest path, and Object.assign() was too slow:
  // https://github.com/facebook/react/issues/12502
  // This code is DEV-only so size is not a concern.

  target.tag = source.tag;
  target.key = source.key;
  target.type = source.type;
  target.stateNode = source.stateNode;
  target.return = source.return;
  target.child = source.child;
  target.sibling = source.sibling;
  target.index = source.index;
  target.ref = source.ref;
  target.pendingProps = source.pendingProps;
  target.memoizedProps = source.memoizedProps;
  target.updateQueue = source.updateQueue;
  target.memoizedState = source.memoizedState;
  target.mode = source.mode;
  target.effectTag = source.effectTag;
  target.nextEffect = source.nextEffect;
  target.firstEffect = source.firstEffect;
  target.lastEffect = source.lastEffect;
  target.expirationTime = source.expirationTime;
  target.alternate = source.alternate;
  if (enableProfilerTimer) {
    target.actualDuration = source.actualDuration;
    target.actualStartTime = source.actualStartTime;
    target.selfBaseTime = source.selfBaseTime;
    target.treeBaseTime = source.treeBaseTime;
  }
  target._debugID = source._debugID;
  target._debugSource = source._debugSource;
  target._debugOwner = source._debugOwner;
  target._debugIsCurrentlyTiming = source._debugIsCurrentlyTiming;
  return target;
}

// TODO: This should be lifted into the renderer.


function createFiberRoot(containerInfo, isAsync, hydrate) {
  // Cyclic construction. This cheats the type system right now because
  // stateNode is any.
  var uninitializedFiber = createHostRootFiber(isAsync);
  var root = {
    current: uninitializedFiber,
    containerInfo: containerInfo,
    pendingChildren: null,

    earliestPendingTime: NoWork,
    latestPendingTime: NoWork,
    earliestSuspendedTime: NoWork,
    latestSuspendedTime: NoWork,
    latestPingedTime: NoWork,

    pendingCommitExpirationTime: NoWork,
    finishedWork: null,
    context: null,
    pendingContext: null,
    hydrate: hydrate,
    remainingExpirationTime: NoWork,
    firstBatch: null,
    nextScheduledRoot: null
  };
  uninitializedFiber.stateNode = root;
  return root;
}

var onCommitFiberRoot = null;
var onCommitFiberUnmount = null;
var hasLoggedError = false;

function catchErrors(fn) {
  return function (arg) {
    try {
      return fn(arg);
    } catch (err) {
      if (true && !hasLoggedError) {
        hasLoggedError = true;
        warning(false, 'React DevTools encountered an error: %s', err);
      }
    }
  };
}

function injectInternals(internals) {
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined') {
    // No DevTools
    return false;
  }
  var hook = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (hook.isDisabled) {
    // This isn't a real property on the hook, but it can be set to opt out
    // of DevTools integration and associated warnings and logs.
    // https://github.com/facebook/react/issues/3877
    return true;
  }
  if (!hook.supportsFiber) {
    {
      warning(false, 'The installed version of React DevTools is too old and will not work ' + 'with the current version of React. Please update React DevTools. ' + 'https://fb.me/react-devtools');
    }
    // DevTools exists, even though it doesn't support Fiber.
    return true;
  }
  try {
    var rendererID = hook.inject(internals);
    // We have successfully injected, so now it is safe to set up hooks.
    onCommitFiberRoot = catchErrors(function (root) {
      return hook.onCommitFiberRoot(rendererID, root);
    });
    onCommitFiberUnmount = catchErrors(function (fiber) {
      return hook.onCommitFiberUnmount(rendererID, fiber);
    });
  } catch (err) {
    // Catch all errors because it is unsafe to throw during initialization.
    {
      warning(false, 'React DevTools encountered an error: %s.', err);
    }
  }
  // DevTools exists
  return true;
}

function onCommitRoot(root) {
  if (typeof onCommitFiberRoot === 'function') {
    onCommitFiberRoot(root);
  }
}

function onCommitUnmount(fiber) {
  if (typeof onCommitFiberUnmount === 'function') {
    onCommitFiberUnmount(fiber);
  }
}

var invokeGuardedCallback$1 = function (name, func, context, a, b, c, d, e, f) {
  this._hasCaughtError = false;
  this._caughtError = null;
  var funcArgs = Array.prototype.slice.call(arguments, 3);
  try {
    func.apply(context, funcArgs);
  } catch (error) {
    this._caughtError = error;
    this._hasCaughtError = true;
  }
};

{
  // In DEV mode, we swap out invokeGuardedCallback for a special version
  // that plays more nicely with the browser's DevTools. The idea is to preserve
  // "Pause on exceptions" behavior. Because React wraps all user-provided
  // functions in invokeGuardedCallback, and the production version of
  // invokeGuardedCallback uses a try-catch, all user exceptions are treated
  // like caught exceptions, and the DevTools won't pause unless the developer
  // takes the extra step of enabling pause on caught exceptions. This is
  // untintuitive, though, because even though React has caught the error, from
  // the developer's perspective, the error is uncaught.
  //
  // To preserve the expected "Pause on exceptions" behavior, we don't use a
  // try-catch in DEV. Instead, we synchronously dispatch a fake event to a fake
  // DOM node, and call the user-provided callback from inside an event handler
  // for that fake event. If the callback throws, the error is "captured" using
  // a global event handler. But because the error happens in a different
  // event loop context, it does not interrupt the normal program flow.
  // Effectively, this gives us try-catch behavior without actually using
  // try-catch. Neat!

  // Check that the browser supports the APIs we need to implement our special
  // DEV version of invokeGuardedCallback
  if (typeof window !== 'undefined' && typeof window.dispatchEvent === 'function' && typeof document !== 'undefined' && typeof document.createEvent === 'function') {
    var fakeNode = document.createElement('react');

    var invokeGuardedCallbackDev = function (name, func, context, a, b, c, d, e, f) {
      // If document doesn't exist we know for sure we will crash in this method
      // when we call document.createEvent(). However this can cause confusing
      // errors: https://github.com/facebookincubator/create-react-app/issues/3482
      // So we preemptively throw with a better message instead.
      !(typeof document !== 'undefined') ? invariant(false, 'The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.') : void 0;
      var evt = document.createEvent('Event');

      // Keeps track of whether the user-provided callback threw an error. We
      // set this to true at the beginning, then set it to false right after
      // calling the function. If the function errors, `didError` will never be
      // set to false. This strategy works even if the browser is flaky and
      // fails to call our global error handler, because it doesn't rely on
      // the error event at all.
      var didError = true;

      // Create an event handler for our fake event. We will synchronously
      // dispatch our fake event using `dispatchEvent`. Inside the handler, we
      // call the user-provided callback.
      var funcArgs = Array.prototype.slice.call(arguments, 3);
      function callCallback() {
        // We immediately remove the callback from event listeners so that
        // nested `invokeGuardedCallback` calls do not clash. Otherwise, a
        // nested call would trigger the fake event handlers of any call higher
        // in the stack.
        fakeNode.removeEventListener(evtType, callCallback, false);
        func.apply(context, funcArgs);
        didError = false;
      }

      // Create a global error event handler. We use this to capture the value
      // that was thrown. It's possible that this error handler will fire more
      // than once; for example, if non-React code also calls `dispatchEvent`
      // and a handler for that event throws. We should be resilient to most of
      // those cases. Even if our error event handler fires more than once, the
      // last error event is always used. If the callback actually does error,
      // we know that the last error event is the correct one, because it's not
      // possible for anything else to have happened in between our callback
      // erroring and the code that follows the `dispatchEvent` call below. If
      // the callback doesn't error, but the error event was fired, we know to
      // ignore it because `didError` will be false, as described above.
      var error = void 0;
      // Use this to track whether the error event is ever called.
      var didSetError = false;
      var isCrossOriginError = false;

      function onError(event) {
        error = event.error;
        didSetError = true;
        if (error === null && event.colno === 0 && event.lineno === 0) {
          isCrossOriginError = true;
        }
      }

      // Create a fake event type.
      var evtType = 'react-' + (name ? name : 'invokeguardedcallback');

      // Attach our event handlers
      window.addEventListener('error', onError);
      fakeNode.addEventListener(evtType, callCallback, false);

      // Synchronously dispatch our fake event. If the user-provided function
      // errors, it will trigger our global error handler.
      evt.initEvent(evtType, false, false);
      fakeNode.dispatchEvent(evt);

      if (didError) {
        if (!didSetError) {
          // The callback errored, but the error event never fired.
          error = new Error('An error was thrown inside one of your components, but React ' + "doesn't know what it was. This is likely due to browser " + 'flakiness. React does its best to preserve the "Pause on ' + 'exceptions" behavior of the DevTools, which requires some ' + "DEV-mode only tricks. It's possible that these don't work in " + 'your browser. Try triggering the error in production mode, ' + 'or switching to a modern browser. If you suspect that this is ' + 'actually an issue with React, please file an issue.');
        } else if (isCrossOriginError) {
          error = new Error("A cross-origin error was thrown. React doesn't have access to " + 'the actual error object in development. ' + 'See https://fb.me/react-crossorigin-error for more information.');
        }
        this._hasCaughtError = true;
        this._caughtError = error;
      } else {
        this._hasCaughtError = false;
        this._caughtError = null;
      }

      // Remove our event listeners
      window.removeEventListener('error', onError);
    };

    invokeGuardedCallback$1 = invokeGuardedCallbackDev;
  }
}

var invokeGuardedCallback$2 = invokeGuardedCallback$1;

var ReactErrorUtils = {
  // Used by Fiber to simulate a try-catch.
  _caughtError: null,
  _hasCaughtError: false,

  // Used by event system to capture/rethrow the first error.
  _rethrowError: null,
  _hasRethrowError: false,

  /**
   * Call a function while guarding against errors that happens within it.
   * Returns an error if it throws, otherwise null.
   *
   * In production, this is implemented using a try-catch. The reason we don't
   * use a try-catch directly is so that we can swap out a different
   * implementation in DEV mode.
   *
   * @param {String} name of the guard to use for logging or debugging
   * @param {Function} func The function to invoke
   * @param {*} context The context to use when calling the function
   * @param {...*} args Arguments for function
   */
  invokeGuardedCallback: function (name, func, context, a, b, c, d, e, f) {
    invokeGuardedCallback$2.apply(ReactErrorUtils, arguments);
  },

  /**
   * Same as invokeGuardedCallback, but instead of returning an error, it stores
   * it in a global so it can be rethrown by `rethrowCaughtError` later.
   * TODO: See if _caughtError and _rethrowError can be unified.
   *
   * @param {String} name of the guard to use for logging or debugging
   * @param {Function} func The function to invoke
   * @param {*} context The context to use when calling the function
   * @param {...*} args Arguments for function
   */
  invokeGuardedCallbackAndCatchFirstError: function (name, func, context, a, b, c, d, e, f) {
    ReactErrorUtils.invokeGuardedCallback.apply(this, arguments);
    if (ReactErrorUtils.hasCaughtError()) {
      var error = ReactErrorUtils.clearCaughtError();
      if (!ReactErrorUtils._hasRethrowError) {
        ReactErrorUtils._hasRethrowError = true;
        ReactErrorUtils._rethrowError = error;
      }
    }
  },

  /**
   * During execution of guarded functions we will capture the first error which
   * we will rethrow to be handled by the top level error handler.
   */
  rethrowCaughtError: function () {
    return rethrowCaughtError.apply(ReactErrorUtils, arguments);
  },

  hasCaughtError: function () {
    return ReactErrorUtils._hasCaughtError;
  },

  clearCaughtError: function () {
    if (ReactErrorUtils._hasCaughtError) {
      var error = ReactErrorUtils._caughtError;
      ReactErrorUtils._caughtError = null;
      ReactErrorUtils._hasCaughtError = false;
      return error;
    } else {
      invariant(false, 'clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.');
    }
  }
};

var rethrowCaughtError = function () {
  if (ReactErrorUtils._hasRethrowError) {
    var error = ReactErrorUtils._rethrowError;
    ReactErrorUtils._rethrowError = null;
    ReactErrorUtils._hasRethrowError = false;
    throw error;
  }
};

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

var ReactStrictModeWarnings = {
  discardPendingWarnings: function () {},
  flushPendingDeprecationWarnings: function () {},
  flushPendingUnsafeLifecycleWarnings: function () {},
  recordDeprecationWarnings: function (fiber, instance) {},
  recordUnsafeLifecycleWarnings: function (fiber, instance) {},
  recordLegacyContextWarning: function (fiber, instance) {},
  flushLegacyContextWarning: function () {}
};

{
  var LIFECYCLE_SUGGESTIONS = {
    UNSAFE_componentWillMount: 'componentDidMount',
    UNSAFE_componentWillReceiveProps: 'static getDerivedStateFromProps',
    UNSAFE_componentWillUpdate: 'componentDidUpdate'
  };

  var pendingComponentWillMountWarnings = [];
  var pendingComponentWillReceivePropsWarnings = [];
  var pendingComponentWillUpdateWarnings = [];
  var pendingUnsafeLifecycleWarnings = new Map();
  var pendingLegacyContextWarning = new Map();

  // Tracks components we have already warned about.
  var didWarnAboutDeprecatedLifecycles = new Set();
  var didWarnAboutUnsafeLifecycles = new Set();
  var didWarnAboutLegacyContext = new Set();

  var setToSortedString = function (set) {
    var array = [];
    set.forEach(function (value) {
      array.push(value);
    });
    return array.sort().join(', ');
  };

  ReactStrictModeWarnings.discardPendingWarnings = function () {
    pendingComponentWillMountWarnings = [];
    pendingComponentWillReceivePropsWarnings = [];
    pendingComponentWillUpdateWarnings = [];
    pendingUnsafeLifecycleWarnings = new Map();
    pendingLegacyContextWarning = new Map();
  };

  ReactStrictModeWarnings.flushPendingUnsafeLifecycleWarnings = function () {
    pendingUnsafeLifecycleWarnings.forEach(function (lifecycleWarningsMap, strictRoot) {
      var lifecyclesWarningMesages = [];

      Object.keys(lifecycleWarningsMap).forEach(function (lifecycle) {
        var lifecycleWarnings = lifecycleWarningsMap[lifecycle];
        if (lifecycleWarnings.length > 0) {
          var componentNames = new Set();
          lifecycleWarnings.forEach(function (fiber) {
            componentNames.add(getComponentName(fiber) || 'Component');
            didWarnAboutUnsafeLifecycles.add(fiber.type);
          });

          var formatted = lifecycle.replace('UNSAFE_', '');
          var suggestion = LIFECYCLE_SUGGESTIONS[lifecycle];
          var sortedComponentNames = setToSortedString(componentNames);

          lifecyclesWarningMesages.push(formatted + ': Please update the following components to use ' + (suggestion + ' instead: ' + sortedComponentNames));
        }
      });

      if (lifecyclesWarningMesages.length > 0) {
        var strictRootComponentStack = getStackAddendumByWorkInProgressFiber(strictRoot);

        warning(false, 'Unsafe lifecycle methods were found within a strict-mode tree:%s' + '\n\n%s' + '\n\nLearn more about this warning here:' + '\nhttps://fb.me/react-strict-mode-warnings', strictRootComponentStack, lifecyclesWarningMesages.join('\n\n'));
      }
    });

    pendingUnsafeLifecycleWarnings = new Map();
  };

  var findStrictRoot = function (fiber) {
    var maybeStrictRoot = null;

    var node = fiber;
    while (node !== null) {
      if (node.mode & StrictMode) {
        maybeStrictRoot = node;
      }
      node = node.return;
    }

    return maybeStrictRoot;
  };

  ReactStrictModeWarnings.flushPendingDeprecationWarnings = function () {
    if (pendingComponentWillMountWarnings.length > 0) {
      var uniqueNames = new Set();
      pendingComponentWillMountWarnings.forEach(function (fiber) {
        uniqueNames.add(getComponentName(fiber) || 'Component');
        didWarnAboutDeprecatedLifecycles.add(fiber.type);
      });

      var sortedNames = setToSortedString(uniqueNames);

      lowPriorityWarning$1(false, 'componentWillMount is deprecated and will be removed in the next major version. ' + 'Use componentDidMount instead. As a temporary workaround, ' + 'you can rename to UNSAFE_componentWillMount.' + '\n\nPlease update the following components: %s' + '\n\nLearn more about this warning here:' + '\nhttps://fb.me/react-async-component-lifecycle-hooks', sortedNames);

      pendingComponentWillMountWarnings = [];
    }

    if (pendingComponentWillReceivePropsWarnings.length > 0) {
      var _uniqueNames = new Set();
      pendingComponentWillReceivePropsWarnings.forEach(function (fiber) {
        _uniqueNames.add(getComponentName(fiber) || 'Component');
        didWarnAboutDeprecatedLifecycles.add(fiber.type);
      });

      var _sortedNames = setToSortedString(_uniqueNames);

      lowPriorityWarning$1(false, 'componentWillReceiveProps is deprecated and will be removed in the next major version. ' + 'Use static getDerivedStateFromProps instead.' + '\n\nPlease update the following components: %s' + '\n\nLearn more about this warning here:' + '\nhttps://fb.me/react-async-component-lifecycle-hooks', _sortedNames);

      pendingComponentWillReceivePropsWarnings = [];
    }

    if (pendingComponentWillUpdateWarnings.length > 0) {
      var _uniqueNames2 = new Set();
      pendingComponentWillUpdateWarnings.forEach(function (fiber) {
        _uniqueNames2.add(getComponentName(fiber) || 'Component');
        didWarnAboutDeprecatedLifecycles.add(fiber.type);
      });

      var _sortedNames2 = setToSortedString(_uniqueNames2);

      lowPriorityWarning$1(false, 'componentWillUpdate is deprecated and will be removed in the next major version. ' + 'Use componentDidUpdate instead. As a temporary workaround, ' + 'you can rename to UNSAFE_componentWillUpdate.' + '\n\nPlease update the following components: %s' + '\n\nLearn more about this warning here:' + '\nhttps://fb.me/react-async-component-lifecycle-hooks', _sortedNames2);

      pendingComponentWillUpdateWarnings = [];
    }
  };

  ReactStrictModeWarnings.recordDeprecationWarnings = function (fiber, instance) {
    // Dedup strategy: Warn once per component.
    if (didWarnAboutDeprecatedLifecycles.has(fiber.type)) {
      return;
    }

    // Don't warn about react-lifecycles-compat polyfilled components.
    if (typeof instance.componentWillMount === 'function' && instance.componentWillMount.__suppressDeprecationWarning !== true) {
      pendingComponentWillMountWarnings.push(fiber);
    }
    if (typeof instance.componentWillReceiveProps === 'function' && instance.componentWillReceiveProps.__suppressDeprecationWarning !== true) {
      pendingComponentWillReceivePropsWarnings.push(fiber);
    }
    if (typeof instance.componentWillUpdate === 'function' && instance.componentWillUpdate.__suppressDeprecationWarning !== true) {
      pendingComponentWillUpdateWarnings.push(fiber);
    }
  };

  ReactStrictModeWarnings.recordUnsafeLifecycleWarnings = function (fiber, instance) {
    var strictRoot = findStrictRoot(fiber);
    if (strictRoot === null) {
      warning(false, 'Expected to find a StrictMode component in a strict mode tree. ' + 'This error is likely caused by a bug in React. Please file an issue.');
      return;
    }

    // Dedup strategy: Warn once per component.
    // This is difficult to track any other way since component names
    // are often vague and are likely to collide between 3rd party libraries.
    // An expand property is probably okay to use here since it's DEV-only,
    // and will only be set in the event of serious warnings.
    if (didWarnAboutUnsafeLifecycles.has(fiber.type)) {
      return;
    }

    var warningsForRoot = void 0;
    if (!pendingUnsafeLifecycleWarnings.has(strictRoot)) {
      warningsForRoot = {
        UNSAFE_componentWillMount: [],
        UNSAFE_componentWillReceiveProps: [],
        UNSAFE_componentWillUpdate: []
      };

      pendingUnsafeLifecycleWarnings.set(strictRoot, warningsForRoot);
    } else {
      warningsForRoot = pendingUnsafeLifecycleWarnings.get(strictRoot);
    }

    var unsafeLifecycles = [];
    if (typeof instance.componentWillMount === 'function' && instance.componentWillMount.__suppressDeprecationWarning !== true || typeof instance.UNSAFE_componentWillMount === 'function') {
      unsafeLifecycles.push('UNSAFE_componentWillMount');
    }
    if (typeof instance.componentWillReceiveProps === 'function' && instance.componentWillReceiveProps.__suppressDeprecationWarning !== true || typeof instance.UNSAFE_componentWillReceiveProps === 'function') {
      unsafeLifecycles.push('UNSAFE_componentWillReceiveProps');
    }
    if (typeof instance.componentWillUpdate === 'function' && instance.componentWillUpdate.__suppressDeprecationWarning !== true || typeof instance.UNSAFE_componentWillUpdate === 'function') {
      unsafeLifecycles.push('UNSAFE_componentWillUpdate');
    }

    if (unsafeLifecycles.length > 0) {
      unsafeLifecycles.forEach(function (lifecycle) {
        warningsForRoot[lifecycle].push(fiber);
      });
    }
  };

  ReactStrictModeWarnings.recordLegacyContextWarning = function (fiber, instance) {
    var strictRoot = findStrictRoot(fiber);
    if (strictRoot === null) {
      warning(false, 'Expected to find a StrictMode component in a strict mode tree. ' + 'This error is likely caused by a bug in React. Please file an issue.');
      return;
    }

    // Dedup strategy: Warn once per component.
    if (didWarnAboutLegacyContext.has(fiber.type)) {
      return;
    }

    var warningsForRoot = pendingLegacyContextWarning.get(strictRoot);

    if (fiber.type.contextTypes != null || fiber.type.childContextTypes != null || instance !== null && typeof instance.getChildContext === 'function') {
      if (warningsForRoot === undefined) {
        warningsForRoot = [];
        pendingLegacyContextWarning.set(strictRoot, warningsForRoot);
      }
      warningsForRoot.push(fiber);
    }
  };

  ReactStrictModeWarnings.flushLegacyContextWarning = function () {
    pendingLegacyContextWarning.forEach(function (fiberArray, strictRoot) {
      var uniqueNames = new Set();
      fiberArray.forEach(function (fiber) {
        uniqueNames.add(getComponentName(fiber) || 'Component');
        didWarnAboutLegacyContext.add(fiber.type);
      });

      var sortedNames = setToSortedString(uniqueNames);
      var strictRootComponentStack = getStackAddendumByWorkInProgressFiber(strictRoot);

      warning(false, 'Legacy context API has been detected within a strict-mode tree: %s' + '\n\nPlease update the following components: %s' + '\n\nLearn more about this warning here:' + '\nhttps://fb.me/react-strict-mode-warnings', strictRootComponentStack, sortedNames);
    });
  };
}

// This lets us hook into Fiber to debug what it's doing.
// See https://github.com/facebook/react/pull/8033.
// This is not part of the public API, not even for React DevTools.
// You may only inject a debugTool if you work on React Fiber itself.
var ReactFiberInstrumentation = {
  debugTool: null
};

var ReactFiberInstrumentation_1 = ReactFiberInstrumentation;

// TODO: Offscreen updates

function markPendingPriorityLevel(root, expirationTime) {
  if (enableSuspense) {
    // Update the latest and earliest pending times
    var earliestPendingTime = root.earliestPendingTime;
    if (earliestPendingTime === NoWork) {
      // No other pending updates.
      root.earliestPendingTime = root.latestPendingTime = expirationTime;
    } else {
      if (earliestPendingTime > expirationTime) {
        // This is the earliest pending update.
        root.earliestPendingTime = expirationTime;
      } else {
        var latestPendingTime = root.latestPendingTime;
        if (latestPendingTime < expirationTime) {
          // This is the latest pending update
          root.latestPendingTime = expirationTime;
        }
      }
    }
  }
}

function markCommittedPriorityLevels(root, currentTime, earliestRemainingTime) {
  if (enableSuspense) {
    if (earliestRemainingTime === NoWork) {
      // Fast path. There's no remaining work. Clear everything.
      root.earliestPendingTime = NoWork;
      root.latestPendingTime = NoWork;
      root.earliestSuspendedTime = NoWork;
      root.latestSuspendedTime = NoWork;
      root.latestPingedTime = NoWork;
      return;
    }

    // Let's see if the previous latest known pending level was just flushed.
    var latestPendingTime = root.latestPendingTime;
    if (latestPendingTime !== NoWork) {
      if (latestPendingTime < earliestRemainingTime) {
        // We've flushed all the known pending levels.
        root.earliestPendingTime = root.latestPendingTime = NoWork;
      } else {
        var earliestPendingTime = root.earliestPendingTime;
        if (earliestPendingTime < earliestRemainingTime) {
          // We've flushed the earliest known pending level. Set this to the
          // latest pending time.
          root.earliestPendingTime = root.latestPendingTime;
        }
      }
    }

    // Now let's handle the earliest remaining level in the whole tree. We need to
    // decide whether to treat it as a pending level or as suspended. Check
    // it falls within the range of known suspended levels.

    var earliestSuspendedTime = root.earliestSuspendedTime;
    if (earliestSuspendedTime === NoWork) {
      // There's no suspended work. Treat the earliest remaining level as a
      // pending level.
      markPendingPriorityLevel(root, earliestRemainingTime);
      return;
    }

    var latestSuspendedTime = root.latestSuspendedTime;
    if (earliestRemainingTime > latestSuspendedTime) {
      // The earliest remaining level is later than all the suspended work. That
      // means we've flushed all the suspended work.
      root.earliestSuspendedTime = NoWork;
      root.latestSuspendedTime = NoWork;
      root.latestPingedTime = NoWork;

      // There's no suspended work. Treat the earliest remaining level as a
      // pending level.
      markPendingPriorityLevel(root, earliestRemainingTime);
      return;
    }

    if (earliestRemainingTime < earliestSuspendedTime) {
      // The earliest remaining time is earlier than all the suspended work.
      // Treat it as a pending update.
      markPendingPriorityLevel(root, earliestRemainingTime);
      return;
    }

    // The earliest remaining time falls within the range of known suspended
    // levels. We should treat this as suspended work.
  }
}

function markSuspendedPriorityLevel(root, suspendedTime) {
  if (enableSuspense) {
    // First, check the known pending levels and update them if needed.
    var earliestPendingTime = root.earliestPendingTime;
    var latestPendingTime = root.latestPendingTime;
    if (earliestPendingTime === suspendedTime) {
      if (latestPendingTime === suspendedTime) {
        // Both known pending levels were suspended. Clear them.
        root.earliestPendingTime = root.latestPendingTime = NoWork;
      } else {
        // The earliest pending level was suspended. Clear by setting it to the
        // latest pending level.
        root.earliestPendingTime = latestPendingTime;
      }
    } else if (latestPendingTime === suspendedTime) {
      // The latest pending level was suspended. Clear by setting it to the
      // latest pending level.
      root.latestPendingTime = earliestPendingTime;
    }

    // Next, if we're working on the lowest known suspended level, clear the ping.
    // TODO: What if a promise suspends and pings before the root completes?
    var latestSuspendedTime = root.latestSuspendedTime;
    if (latestSuspendedTime === suspendedTime) {
      root.latestPingedTime = NoWork;
    }

    // Finally, update the known suspended levels.
    var earliestSuspendedTime = root.earliestSuspendedTime;
    if (earliestSuspendedTime === NoWork) {
      // No other suspended levels.
      root.earliestSuspendedTime = root.latestSuspendedTime = suspendedTime;
    } else {
      if (earliestSuspendedTime > suspendedTime) {
        // This is the earliest suspended level.
        root.earliestSuspendedTime = suspendedTime;
      } else if (latestSuspendedTime < suspendedTime) {
        // This is the latest suspended level
        root.latestSuspendedTime = suspendedTime;
      }
    }
  }
}

function markPingedPriorityLevel(root, pingedTime) {
  if (enableSuspense) {
    var latestSuspendedTime = root.latestSuspendedTime;
    if (latestSuspendedTime !== NoWork && latestSuspendedTime <= pingedTime) {
      var latestPingedTime = root.latestPingedTime;
      if (latestPingedTime === NoWork || latestPingedTime < pingedTime) {
        root.latestPingedTime = pingedTime;
      }
    }
  }
}

function findNextPendingPriorityLevel(root) {
  if (enableSuspense) {
    var earliestSuspendedTime = root.earliestSuspendedTime;
    var earliestPendingTime = root.earliestPendingTime;
    if (earliestSuspendedTime === NoWork) {
      // Fast path. There's no suspended work.
      return earliestPendingTime;
    }

    // First, check if there's known pending work.
    if (earliestPendingTime !== NoWork) {
      return earliestPendingTime;
    }

    // Finally, if a suspended level was pinged, work on that. Otherwise there's
    // nothing to work on.
    return root.latestPingedTime;
  } else {
    return root.current.expirationTime;
  }
}

// UpdateQueue is a linked list of prioritized updates.
//
// Like fibers, update queues come in pairs: a current queue, which represents
// the visible state of the screen, and a work-in-progress queue, which is
// can be mutated and processed asynchronously before it is committed — a form
// of double buffering. If a work-in-progress render is discarded before
// finishing, we create a new work-in-progress by cloning the current queue.
//
// Both queues share a persistent, singly-linked list structure. To schedule an
// update, we append it to the end of both queues. Each queue maintains a
// pointer to first update in the persistent list that hasn't been processed.
// The work-in-progress pointer always has a position equal to or greater than
// the current queue, since we always work on that one. The current queue's
// pointer is only updated during the commit phase, when we swap in the
// work-in-progress.
//
// For example:
//
//   Current pointer:           A - B - C - D - E - F
//   Work-in-progress pointer:              D - E - F
//                                          ^
//                                          The work-in-progress queue has
//                                          processed more updates than current.
//
// The reason we append to both queues is because otherwise we might drop
// updates without ever processing them. For example, if we only add updates to
// the work-in-progress queue, some updates could be lost whenever a work-in
// -progress render restarts by cloning from current. Similarly, if we only add
// updates to the current queue, the updates will be lost whenever an already
// in-progress queue commits and swaps with the current queue. However, by
// adding to both queues, we guarantee that the update will be part of the next
// work-in-progress. (And because the work-in-progress queue becomes the
// current queue once it commits, there's no danger of applying the same
// update twice.)
//
// Prioritization
// --------------
//
// Updates are not sorted by priority, but by insertion; new updates are always
// appended to the end of the list.
//
// The priority is still important, though. When processing the update queue
// during the render phase, only the updates with sufficient priority are
// included in the result. If we skip an update because it has insufficient
// priority, it remains in the queue to be processed later, during a lower
// priority render. Crucially, all updates subsequent to a skipped update also
// remain in the queue *regardless of their priority*. That means high priority
// updates are sometimes processed twice, at two separate priorities. We also
// keep track of a base state, that represents the state before the first
// update in the queue is applied.
//
// For example:
//
//   Given a base state of '', and the following queue of updates
//
//     A1 - B2 - C1 - D2
//
//   where the number indicates the priority, and the update is applied to the
//   previous state by appending a letter, React will process these updates as
//   two separate renders, one per distinct priority level:
//
//   First render, at priority 1:
//     Base state: ''
//     Updates: [A1, C1]
//     Result state: 'AC'
//
//   Second render, at priority 2:
//     Base state: 'A'            <-  The base state does not include C1,
//                                    because B2 was skipped.
//     Updates: [B2, C1, D2]      <-  C1 was rebased on top of B2
//     Result state: 'ABCD'
//
// Because we process updates in insertion order, and rebase high priority
// updates when preceding updates are skipped, the final result is deterministic
// regardless of priority. Intermediate state may vary according to system
// resources, but the final state is always the same.

var UpdateState = 0;
var ReplaceState = 1;
var ForceUpdate = 2;
var CaptureUpdate = 3;

// Global state that is reset at the beginning of calling `processUpdateQueue`.
// It should only be read right after calling `processUpdateQueue`, via
// `checkHasForceUpdateAfterProcessing`.
var hasForceUpdate = false;

var didWarnUpdateInsideUpdate = void 0;
var currentlyProcessingQueue = void 0;
var resetCurrentlyProcessingQueue = void 0;
{
  didWarnUpdateInsideUpdate = false;
  currentlyProcessingQueue = null;
  resetCurrentlyProcessingQueue = function () {
    currentlyProcessingQueue = null;
  };
}

function createUpdateQueue(baseState) {
  var queue = {
    expirationTime: NoWork,
    baseState: baseState,
    firstUpdate: null,
    lastUpdate: null,
    firstCapturedUpdate: null,
    lastCapturedUpdate: null,
    firstEffect: null,
    lastEffect: null,
    firstCapturedEffect: null,
    lastCapturedEffect: null
  };
  return queue;
}

function cloneUpdateQueue(currentQueue) {
  var queue = {
    expirationTime: currentQueue.expirationTime,
    baseState: currentQueue.baseState,
    firstUpdate: currentQueue.firstUpdate,
    lastUpdate: currentQueue.lastUpdate,

    // TODO: With resuming, if we bail out and resuse the child tree, we should
    // keep these effects.
    firstCapturedUpdate: null,
    lastCapturedUpdate: null,

    firstEffect: null,
    lastEffect: null,

    firstCapturedEffect: null,
    lastCapturedEffect: null
  };
  return queue;
}

function createUpdate(expirationTime) {
  return {
    expirationTime: expirationTime,

    tag: UpdateState,
    payload: null,
    callback: null,

    next: null,
    nextEffect: null
  };
}

function appendUpdateToQueue(queue, update, expirationTime) {
  // Append the update to the end of the list.
  if (queue.lastUpdate === null) {
    // Queue is empty
    queue.firstUpdate = queue.lastUpdate = update;
  } else {
    queue.lastUpdate.next = update;
    queue.lastUpdate = update;
  }
  if (queue.expirationTime === NoWork || queue.expirationTime > expirationTime) {
    // The incoming update has the earliest expiration of any update in the
    // queue. Update the queue's expiration time.
    queue.expirationTime = expirationTime;
  }
}

function enqueueUpdate(fiber, update, expirationTime) {
  // Update queues are created lazily.
  var alternate = fiber.alternate;
  var queue1 = void 0;
  var queue2 = void 0;
  if (alternate === null) {
    // There's only one fiber.
    queue1 = fiber.updateQueue;
    queue2 = null;
    if (queue1 === null) {
      queue1 = fiber.updateQueue = createUpdateQueue(fiber.memoizedState);
    }
  } else {
    // There are two owners.
    queue1 = fiber.updateQueue;
    queue2 = alternate.updateQueue;
    if (queue1 === null) {
      if (queue2 === null) {
        // Neither fiber has an update queue. Create new ones.
        queue1 = fiber.updateQueue = createUpdateQueue(fiber.memoizedState);
        queue2 = alternate.updateQueue = createUpdateQueue(alternate.memoizedState);
      } else {
        // Only one fiber has an update queue. Clone to create a new one.
        queue1 = fiber.updateQueue = cloneUpdateQueue(queue2);
      }
    } else {
      if (queue2 === null) {
        // Only one fiber has an update queue. Clone to create a new one.
        queue2 = alternate.updateQueue = cloneUpdateQueue(queue1);
      } else {
        // Both owners have an update queue.
      }
    }
  }
  if (queue2 === null || queue1 === queue2) {
    // There's only a single queue.
    appendUpdateToQueue(queue1, update, expirationTime);
  } else {
    // There are two queues. We need to append the update to both queues,
    // while accounting for the persistent structure of the list — we don't
    // want the same update to be added multiple times.
    if (queue1.lastUpdate === null || queue2.lastUpdate === null) {
      // One of the queues is not empty. We must add the update to both queues.
      appendUpdateToQueue(queue1, update, expirationTime);
      appendUpdateToQueue(queue2, update, expirationTime);
    } else {
      // Both queues are non-empty. The last update is the same in both lists,
      // because of structural sharing. So, only append to one of the lists.
      appendUpdateToQueue(queue1, update, expirationTime);
      // But we still need to update the `lastUpdate` pointer of queue2.
      queue2.lastUpdate = update;
    }
  }

  {
    if (fiber.tag === ClassComponent && (currentlyProcessingQueue === queue1 || queue2 !== null && currentlyProcessingQueue === queue2) && !didWarnUpdateInsideUpdate) {
      warning(false, 'An update (setState, replaceState, or forceUpdate) was scheduled ' + 'from inside an update function. Update functions should be pure, ' + 'with zero side-effects. Consider using componentDidUpdate or a ' + 'callback.');
      didWarnUpdateInsideUpdate = true;
    }
  }
}

function enqueueCapturedUpdate(workInProgress, update, renderExpirationTime) {
  // Captured updates go into a separate list, and only on the work-in-
  // progress queue.
  var workInProgressQueue = workInProgress.updateQueue;
  if (workInProgressQueue === null) {
    workInProgressQueue = workInProgress.updateQueue = createUpdateQueue(workInProgress.memoizedState);
  } else {
    // TODO: I put this here rather than createWorkInProgress so that we don't
    // clone the queue unnecessarily. There's probably a better way to
    // structure this.
    workInProgressQueue = ensureWorkInProgressQueueIsAClone(workInProgress, workInProgressQueue);
  }

  // Append the update to the end of the list.
  if (workInProgressQueue.lastCapturedUpdate === null) {
    // This is the first render phase update
    workInProgressQueue.firstCapturedUpdate = workInProgressQueue.lastCapturedUpdate = update;
  } else {
    workInProgressQueue.lastCapturedUpdate.next = update;
    workInProgressQueue.lastCapturedUpdate = update;
  }
  if (workInProgressQueue.expirationTime === NoWork || workInProgressQueue.expirationTime > renderExpirationTime) {
    // The incoming update has the earliest expiration of any update in the
    // queue. Update the queue's expiration time.
    workInProgressQueue.expirationTime = renderExpirationTime;
  }
}

function ensureWorkInProgressQueueIsAClone(workInProgress, queue) {
  var current = workInProgress.alternate;
  if (current !== null) {
    // If the work-in-progress queue is equal to the current queue,
    // we need to clone it first.
    if (queue === current.updateQueue) {
      queue = workInProgress.updateQueue = cloneUpdateQueue(queue);
    }
  }
  return queue;
}

function getStateFromUpdate(workInProgress, queue, update, prevState, nextProps, instance) {
  switch (update.tag) {
    case ReplaceState:
      {
        var _payload = update.payload;
        if (typeof _payload === 'function') {
          // Updater function
          {
            if (debugRenderPhaseSideEffects || debugRenderPhaseSideEffectsForStrictMode && workInProgress.mode & StrictMode) {
              _payload.call(instance, prevState, nextProps);
            }
          }
          return _payload.call(instance, prevState, nextProps);
        }
        // State object
        return _payload;
      }
    case CaptureUpdate:
      {
        workInProgress.effectTag = workInProgress.effectTag & ~ShouldCapture | DidCapture;
      }
    // Intentional fallthrough
    case UpdateState:
      {
        var _payload2 = update.payload;
        var partialState = void 0;
        if (typeof _payload2 === 'function') {
          // Updater function
          {
            if (debugRenderPhaseSideEffects || debugRenderPhaseSideEffectsForStrictMode && workInProgress.mode & StrictMode) {
              _payload2.call(instance, prevState, nextProps);
            }
          }
          partialState = _payload2.call(instance, prevState, nextProps);
        } else {
          // Partial state object
          partialState = _payload2;
        }
        if (partialState === null || partialState === undefined) {
          // Null and undefined are treated as no-ops.
          return prevState;
        }
        // Merge the partial state and the previous state.
        return _assign({}, prevState, partialState);
      }
    case ForceUpdate:
      {
        hasForceUpdate = true;
        return prevState;
      }
  }
  return prevState;
}

function processUpdateQueue(workInProgress, queue, props, instance, renderExpirationTime) {
  hasForceUpdate = false;

  if (queue.expirationTime === NoWork || queue.expirationTime > renderExpirationTime) {
    // Insufficient priority. Bailout.
    return;
  }

  queue = ensureWorkInProgressQueueIsAClone(workInProgress, queue);

  {
    currentlyProcessingQueue = queue;
  }

  // These values may change as we process the queue.
  var newBaseState = queue.baseState;
  var newFirstUpdate = null;
  var newExpirationTime = NoWork;

  // Iterate through the list of updates to compute the result.
  var update = queue.firstUpdate;
  var resultState = newBaseState;
  while (update !== null) {
    var updateExpirationTime = update.expirationTime;
    if (updateExpirationTime > renderExpirationTime) {
      // This update does not have sufficient priority. Skip it.
      if (newFirstUpdate === null) {
        // This is the first skipped update. It will be the first update in
        // the new list.
        newFirstUpdate = update;
        // Since this is the first update that was skipped, the current result
        // is the new base state.
        newBaseState = resultState;
      }
      // Since this update will remain in the list, update the remaining
      // expiration time.
      if (newExpirationTime === NoWork || newExpirationTime > updateExpirationTime) {
        newExpirationTime = updateExpirationTime;
      }
    } else {
      // This update does have sufficient priority. Process it and compute
      // a new result.
      resultState = getStateFromUpdate(workInProgress, queue, update, resultState, props, instance);
      var _callback = update.callback;
      if (_callback !== null) {
        workInProgress.effectTag |= Callback;
        // Set this to null, in case it was mutated during an aborted render.
        update.nextEffect = null;
        if (queue.lastEffect === null) {
          queue.firstEffect = queue.lastEffect = update;
        } else {
          queue.lastEffect.nextEffect = update;
          queue.lastEffect = update;
        }
      }
    }
    // Continue to the next update.
    update = update.next;
  }

  // Separately, iterate though the list of captured updates.
  var newFirstCapturedUpdate = null;
  update = queue.firstCapturedUpdate;
  while (update !== null) {
    var _updateExpirationTime = update.expirationTime;
    if (_updateExpirationTime > renderExpirationTime) {
      // This update does not have sufficient priority. Skip it.
      if (newFirstCapturedUpdate === null) {
        // This is the first skipped captured update. It will be the first
        // update in the new list.
        newFirstCapturedUpdate = update;
        // If this is the first update that was skipped, the current result is
        // the new base state.
        if (newFirstUpdate === null) {
          newBaseState = resultState;
        }
      }
      // Since this update will remain in the list, update the remaining
      // expiration time.
      if (newExpirationTime === NoWork || newExpirationTime > _updateExpirationTime) {
        newExpirationTime = _updateExpirationTime;
      }
    } else {
      // This update does have sufficient priority. Process it and compute
      // a new result.
      resultState = getStateFromUpdate(workInProgress, queue, update, resultState, props, instance);
      var _callback2 = update.callback;
      if (_callback2 !== null) {
        workInProgress.effectTag |= Callback;
        // Set this to null, in case it was mutated during an aborted render.
        update.nextEffect = null;
        if (queue.lastCapturedEffect === null) {
          queue.firstCapturedEffect = queue.lastCapturedEffect = update;
        } else {
          queue.lastCapturedEffect.nextEffect = update;
          queue.lastCapturedEffect = update;
        }
      }
    }
    update = update.next;
  }

  if (newFirstUpdate === null) {
    queue.lastUpdate = null;
  }
  if (newFirstCapturedUpdate === null) {
    queue.lastCapturedUpdate = null;
  } else {
    workInProgress.effectTag |= Callback;
  }
  if (newFirstUpdate === null && newFirstCapturedUpdate === null) {
    // We processed every update, without skipping. That means the new base
    // state is the same as the result state.
    newBaseState = resultState;
  }

  queue.baseState = newBaseState;
  queue.firstUpdate = newFirstUpdate;
  queue.firstCapturedUpdate = newFirstCapturedUpdate;
  queue.expirationTime = newExpirationTime;

  workInProgress.memoizedState = resultState;

  {
    currentlyProcessingQueue = null;
  }
}

function callCallback(callback, context) {
  !(typeof callback === 'function') ? invariant(false, 'Invalid argument passed as callback. Expected a function. Instead received: %s', callback) : void 0;
  callback.call(context);
}

function resetHasForceUpdateBeforeProcessing() {
  hasForceUpdate = false;
}

function checkHasForceUpdateAfterProcessing() {
  return hasForceUpdate;
}

function commitUpdateQueue(finishedWork, finishedQueue, instance, renderExpirationTime) {
  // If the finished render included captured updates, and there are still
  // lower priority updates left over, we need to keep the captured updates
  // in the queue so that they are rebased and not dropped once we process the
  // queue again at the lower priority.
  if (finishedQueue.firstCapturedUpdate !== null) {
    // Join the captured update list to the end of the normal list.
    if (finishedQueue.lastUpdate !== null) {
      finishedQueue.lastUpdate.next = finishedQueue.firstCapturedUpdate;
      finishedQueue.lastUpdate = finishedQueue.lastCapturedUpdate;
    }
    // Clear the list of captured updates.
    finishedQueue.firstCapturedUpdate = finishedQueue.lastCapturedUpdate = null;
  }

  // Commit the effects
  var effect = finishedQueue.firstEffect;
  finishedQueue.firstEffect = finishedQueue.lastEffect = null;
  while (effect !== null) {
    var _callback3 = effect.callback;
    if (_callback3 !== null) {
      effect.callback = null;
      callCallback(_callback3, instance);
    }
    effect = effect.nextEffect;
  }

  effect = finishedQueue.firstCapturedEffect;
  finishedQueue.firstCapturedEffect = finishedQueue.lastCapturedEffect = null;
  while (effect !== null) {
    var _callback4 = effect.callback;
    if (_callback4 !== null) {
      effect.callback = null;
      callCallback(_callback4, instance);
    }
    effect = effect.nextEffect;
  }
}

function createCapturedValue(value, source) {
  // If the value is an error, call this function immediately after it is thrown
  // so the stack is accurate.
  return {
    value: value,
    source: source,
    stack: getStackAddendumByWorkInProgressFiber(source)
  };
}

var providerCursor = createCursor(null);
var valueCursor = createCursor(null);
var changedBitsCursor = createCursor(0);

var rendererSigil = void 0;
{
  // Use this to detect multiple renderers using the same context
  rendererSigil = {};
}

function pushProvider(providerFiber) {
  var context = providerFiber.type._context;

  if (isPrimaryRenderer) {
    push(changedBitsCursor, context._changedBits, providerFiber);
    push(valueCursor, context._currentValue, providerFiber);
    push(providerCursor, providerFiber, providerFiber);

    context._currentValue = providerFiber.pendingProps.value;
    context._changedBits = providerFiber.stateNode;
    {
      !(context._currentRenderer === undefined || context._currentRenderer === null || context._currentRenderer === rendererSigil) ? warning(false, 'Detected multiple renderers concurrently rendering the ' + 'same context provider. This is currently unsupported.') : void 0;
      context._currentRenderer = rendererSigil;
    }
  } else {
    push(changedBitsCursor, context._changedBits2, providerFiber);
    push(valueCursor, context._currentValue2, providerFiber);
    push(providerCursor, providerFiber, providerFiber);

    context._currentValue2 = providerFiber.pendingProps.value;
    context._changedBits2 = providerFiber.stateNode;
    {
      !(context._currentRenderer2 === undefined || context._currentRenderer2 === null || context._currentRenderer2 === rendererSigil) ? warning(false, 'Detected multiple renderers concurrently rendering the ' + 'same context provider. This is currently unsupported.') : void 0;
      context._currentRenderer2 = rendererSigil;
    }
  }
}

function popProvider(providerFiber) {
  var changedBits = changedBitsCursor.current;
  var currentValue = valueCursor.current;

  pop(providerCursor, providerFiber);
  pop(valueCursor, providerFiber);
  pop(changedBitsCursor, providerFiber);

  var context = providerFiber.type._context;
  if (isPrimaryRenderer) {
    context._currentValue = currentValue;
    context._changedBits = changedBits;
  } else {
    context._currentValue2 = currentValue;
    context._changedBits2 = changedBits;
  }
}

function getContextCurrentValue(context) {
  return isPrimaryRenderer ? context._currentValue : context._currentValue2;
}

function getContextChangedBits(context) {
  return isPrimaryRenderer ? context._changedBits : context._changedBits2;
}

var NO_CONTEXT = {};

var contextStackCursor$1 = createCursor(NO_CONTEXT);
var contextFiberStackCursor = createCursor(NO_CONTEXT);
var rootInstanceStackCursor = createCursor(NO_CONTEXT);

function requiredContext(c) {
  !(c !== NO_CONTEXT) ? invariant(false, 'Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.') : void 0;
  return c;
}

function getRootHostContainer() {
  var rootInstance = requiredContext(rootInstanceStackCursor.current);
  return rootInstance;
}

function pushHostContainer(fiber, nextRootInstance) {
  // Push current root instance onto the stack;
  // This allows us to reset root when portals are popped.
  push(rootInstanceStackCursor, nextRootInstance, fiber);
  // Track the context and the Fiber that provided it.
  // This enables us to pop only Fibers that provide unique contexts.
  push(contextFiberStackCursor, fiber, fiber);

  // Finally, we need to push the host context to the stack.
  // However, we can't just call getRootHostContext() and push it because
  // we'd have a different number of entries on the stack depending on
  // whether getRootHostContext() throws somewhere in renderer code or not.
  // So we push an empty value first. This lets us safely unwind on errors.
  push(contextStackCursor$1, NO_CONTEXT, fiber);
  var nextRootContext = getRootHostContext(nextRootInstance);
  // Now that we know this function doesn't throw, replace it.
  pop(contextStackCursor$1, fiber);
  push(contextStackCursor$1, nextRootContext, fiber);
}

function popHostContainer(fiber) {
  pop(contextStackCursor$1, fiber);
  pop(contextFiberStackCursor, fiber);
  pop(rootInstanceStackCursor, fiber);
}

function getHostContext() {
  var context = requiredContext(contextStackCursor$1.current);
  return context;
}

function pushHostContext(fiber) {
  var rootInstance = requiredContext(rootInstanceStackCursor.current);
  var context = requiredContext(contextStackCursor$1.current);
  var nextContext = getChildHostContext(context, fiber.type, rootInstance);

  // Don't push this Fiber's context unless it's unique.
  if (context === nextContext) {
    return;
  }

  // Track the context and the Fiber that provided it.
  // This enables us to pop only Fibers that provide unique contexts.
  push(contextFiberStackCursor, fiber, fiber);
  push(contextStackCursor$1, nextContext, fiber);
}

function popHostContext(fiber) {
  // Do not pop unless this Fiber provided the current context.
  // pushHostContext() only pushes Fibers that provide unique contexts.
  if (contextFiberStackCursor.current !== fiber) {
    return;
  }

  pop(contextStackCursor$1, fiber);
  pop(contextFiberStackCursor, fiber);
}

var commitTime = 0;

function getCommitTime() {
  return commitTime;
}

function recordCommitTime() {
  if (!enableProfilerTimer) {
    return;
  }
  commitTime = now();
}

/**
 * The "actual" render time is total time required to render the descendants of a Profiler component.
 * This time is stored as a stack, since Profilers can be nested.
 * This time is started during the "begin" phase and stopped during the "complete" phase.
 * It is paused (and accumulated) in the event of an interruption or an aborted render.
 */

var fiberStack$1 = void 0;

{
  fiberStack$1 = [];
}

var timerPausedAt = 0;
var totalElapsedPauseTime = 0;

function checkActualRenderTimeStackEmpty() {
  if (!enableProfilerTimer) {
    return;
  }
  {
    !(fiberStack$1.length === 0) ? warning(false, 'Expected an empty stack. Something was not reset properly.') : void 0;
  }
}

function markActualRenderTimeStarted(fiber) {
  if (!enableProfilerTimer) {
    return;
  }
  {
    fiberStack$1.push(fiber);
  }

  fiber.actualDuration = now() - fiber.actualDuration - totalElapsedPauseTime;
  fiber.actualStartTime = now();
}

function pauseActualRenderTimerIfRunning() {
  if (!enableProfilerTimer) {
    return;
  }
  if (timerPausedAt === 0) {
    timerPausedAt = now();
  }
}

function recordElapsedActualRenderTime(fiber) {
  if (!enableProfilerTimer) {
    return;
  }
  {
    !(fiber === fiberStack$1.pop()) ? warning(false, 'Unexpected Fiber (%s) popped.', getComponentName(fiber)) : void 0;
  }

  fiber.actualDuration = now() - totalElapsedPauseTime - fiber.actualDuration;
}

function resetActualRenderTimer() {
  if (!enableProfilerTimer) {
    return;
  }
  totalElapsedPauseTime = 0;
}

function resumeActualRenderTimerIfPaused() {
  if (!enableProfilerTimer) {
    return;
  }
  if (timerPausedAt > 0) {
    totalElapsedPauseTime += now() - timerPausedAt;
    timerPausedAt = 0;
  }
}

/**
 * The "base" render time is the duration of the “begin” phase of work for a particular fiber.
 * This time is measured and stored on each fiber.
 * The time for all sibling fibers are accumulated and stored on their parent during the "complete" phase.
 * If a fiber bails out (sCU false) then its "base" timer is cancelled and the fiber is not updated.
 */

var baseStartTime = -1;

function recordElapsedBaseRenderTimeIfRunning(fiber) {
  if (!enableProfilerTimer) {
    return;
  }
  if (baseStartTime !== -1) {
    fiber.selfBaseTime = now() - baseStartTime;
  }
}

function startBaseRenderTimer() {
  if (!enableProfilerTimer) {
    return;
  }
  {
    if (baseStartTime !== -1) {
      warning(false, 'Cannot start base timer that is already running. ' + 'This error is likely caused by a bug in React. ' + 'Please file an issue.');
    }
  }
  baseStartTime = now();
}

function stopBaseRenderTimerIfRunning() {
  if (!enableProfilerTimer) {
    return;
  }
  baseStartTime = -1;
}

var fakeInternalInstance = {};
var isArray = Array.isArray;

var didWarnAboutStateAssignmentForComponent = void 0;
var didWarnAboutUninitializedState = void 0;
var didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate = void 0;
var didWarnAboutLegacyLifecyclesAndDerivedState = void 0;
var didWarnAboutUndefinedDerivedState = void 0;
var warnOnUndefinedDerivedState = void 0;
var warnOnInvalidCallback = void 0;

{
  didWarnAboutStateAssignmentForComponent = new Set();
  didWarnAboutUninitializedState = new Set();
  didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate = new Set();
  didWarnAboutLegacyLifecyclesAndDerivedState = new Set();
  didWarnAboutUndefinedDerivedState = new Set();

  var didWarnOnInvalidCallback = new Set();

  warnOnInvalidCallback = function (callback, callerName) {
    if (callback === null || typeof callback === 'function') {
      return;
    }
    var key = callerName + '_' + callback;
    if (!didWarnOnInvalidCallback.has(key)) {
      didWarnOnInvalidCallback.add(key);
      warning(false, '%s(...): Expected the last optional `callback` argument to be a ' + 'function. Instead received: %s.', callerName, callback);
    }
  };

  warnOnUndefinedDerivedState = function (workInProgress, partialState) {
    if (partialState === undefined) {
      var componentName = getComponentName(workInProgress) || 'Component';
      if (!didWarnAboutUndefinedDerivedState.has(componentName)) {
        didWarnAboutUndefinedDerivedState.add(componentName);
        warning(false, '%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. ' + 'You have returned undefined.', componentName);
      }
    }
  };

  // This is so gross but it's at least non-critical and can be removed if
  // it causes problems. This is meant to give a nicer error message for
  // ReactDOM15.unstable_renderSubtreeIntoContainer(reactDOM16Component,
  // ...)) which otherwise throws a "_processChildContext is not a function"
  // exception.
  Object.defineProperty(fakeInternalInstance, '_processChildContext', {
    enumerable: false,
    value: function () {
      invariant(false, '_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn\'t supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).');
    }
  });
  Object.freeze(fakeInternalInstance);
}

function applyDerivedStateFromProps(workInProgress, getDerivedStateFromProps, nextProps) {
  var prevState = workInProgress.memoizedState;

  {
    if (debugRenderPhaseSideEffects || debugRenderPhaseSideEffectsForStrictMode && workInProgress.mode & StrictMode) {
      // Invoke the function an extra time to help detect side-effects.
      getDerivedStateFromProps(nextProps, prevState);
    }
  }

  var partialState = getDerivedStateFromProps(nextProps, prevState);

  {
    warnOnUndefinedDerivedState(workInProgress, partialState);
  }
  // Merge the partial state and the previous state.
  var memoizedState = partialState === null || partialState === undefined ? prevState : _assign({}, prevState, partialState);
  workInProgress.memoizedState = memoizedState;

  // Once the update queue is empty, persist the derived state onto the
  // base state.
  var updateQueue = workInProgress.updateQueue;
  if (updateQueue !== null && updateQueue.expirationTime === NoWork) {
    updateQueue.baseState = memoizedState;
  }
}

var classComponentUpdater = {
  isMounted: isMounted,
  enqueueSetState: function (inst, payload, callback) {
    var fiber = get(inst);
    var currentTime = recalculateCurrentTime();
    var expirationTime = computeExpirationForFiber(currentTime, fiber);

    var update = createUpdate(expirationTime);
    update.payload = payload;
    if (callback !== undefined && callback !== null) {
      {
        warnOnInvalidCallback(callback, 'setState');
      }
      update.callback = callback;
    }

    enqueueUpdate(fiber, update, expirationTime);
    scheduleWork(fiber, expirationTime);
  },
  enqueueReplaceState: function (inst, payload, callback) {
    var fiber = get(inst);
    var currentTime = recalculateCurrentTime();
    var expirationTime = computeExpirationForFiber(currentTime, fiber);

    var update = createUpdate(expirationTime);
    update.tag = ReplaceState;
    update.payload = payload;

    if (callback !== undefined && callback !== null) {
      {
        warnOnInvalidCallback(callback, 'replaceState');
      }
      update.callback = callback;
    }

    enqueueUpdate(fiber, update, expirationTime);
    scheduleWork(fiber, expirationTime);
  },
  enqueueForceUpdate: function (inst, callback) {
    var fiber = get(inst);
    var currentTime = recalculateCurrentTime();
    var expirationTime = computeExpirationForFiber(currentTime, fiber);

    var update = createUpdate(expirationTime);
    update.tag = ForceUpdate;

    if (callback !== undefined && callback !== null) {
      {
        warnOnInvalidCallback(callback, 'forceUpdate');
      }
      update.callback = callback;
    }

    enqueueUpdate(fiber, update, expirationTime);
    scheduleWork(fiber, expirationTime);
  }
};

function checkShouldComponentUpdate(workInProgress, oldProps, newProps, oldState, newState, newContext) {
  var instance = workInProgress.stateNode;
  var ctor = workInProgress.type;
  if (typeof instance.shouldComponentUpdate === 'function') {
    startPhaseTimer(workInProgress, 'shouldComponentUpdate');
    var shouldUpdate = instance.shouldComponentUpdate(newProps, newState, newContext);
    stopPhaseTimer();

    {
      !(shouldUpdate !== undefined) ? warning(false, '%s.shouldComponentUpdate(): Returned undefined instead of a ' + 'boolean value. Make sure to return true or false.', getComponentName(workInProgress) || 'Component') : void 0;
    }

    return shouldUpdate;
  }

  if (ctor.prototype && ctor.prototype.isPureReactComponent) {
    return !shallowEqual(oldProps, newProps) || !shallowEqual(oldState, newState);
  }

  return true;
}

function checkClassInstance(workInProgress) {
  var instance = workInProgress.stateNode;
  var type = workInProgress.type;
  {
    var name = getComponentName(workInProgress) || 'Component';
    var renderPresent = instance.render;

    if (!renderPresent) {
      if (type.prototype && typeof type.prototype.render === 'function') {
        warning(false, '%s(...): No `render` method found on the returned component ' + 'instance: did you accidentally return an object from the constructor?', name);
      } else {
        warning(false, '%s(...): No `render` method found on the returned component ' + 'instance: you may have forgotten to define `render`.', name);
      }
    }

    var noGetInitialStateOnES6 = !instance.getInitialState || instance.getInitialState.isReactClassApproved || instance.state;
    !noGetInitialStateOnES6 ? warning(false, 'getInitialState was defined on %s, a plain JavaScript class. ' + 'This is only supported for classes created using React.createClass. ' + 'Did you mean to define a state property instead?', name) : void 0;
    var noGetDefaultPropsOnES6 = !instance.getDefaultProps || instance.getDefaultProps.isReactClassApproved;
    !noGetDefaultPropsOnES6 ? warning(false, 'getDefaultProps was defined on %s, a plain JavaScript class. ' + 'This is only supported for classes created using React.createClass. ' + 'Use a static property to define defaultProps instead.', name) : void 0;
    var noInstancePropTypes = !instance.propTypes;
    !noInstancePropTypes ? warning(false, 'propTypes was defined as an instance property on %s. Use a static ' + 'property to define propTypes instead.', name) : void 0;
    var noInstanceContextTypes = !instance.contextTypes;
    !noInstanceContextTypes ? warning(false, 'contextTypes was defined as an instance property on %s. Use a static ' + 'property to define contextTypes instead.', name) : void 0;
    var noComponentShouldUpdate = typeof instance.componentShouldUpdate !== 'function';
    !noComponentShouldUpdate ? warning(false, '%s has a method called ' + 'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' + 'The name is phrased as a question because the function is ' + 'expected to return a value.', name) : void 0;
    if (type.prototype && type.prototype.isPureReactComponent && typeof instance.shouldComponentUpdate !== 'undefined') {
      warning(false, '%s has a method called shouldComponentUpdate(). ' + 'shouldComponentUpdate should not be used when extending React.PureComponent. ' + 'Please extend React.Component if shouldComponentUpdate is used.', getComponentName(workInProgress) || 'A pure component');
    }
    var noComponentDidUnmount = typeof instance.componentDidUnmount !== 'function';
    !noComponentDidUnmount ? warning(false, '%s has a method called ' + 'componentDidUnmount(). But there is no such lifecycle method. ' + 'Did you mean componentWillUnmount()?', name) : void 0;
    var noComponentDidReceiveProps = typeof instance.componentDidReceiveProps !== 'function';
    !noComponentDidReceiveProps ? warning(false, '%s has a method called ' + 'componentDidReceiveProps(). But there is no such lifecycle method. ' + 'If you meant to update the state in response to changing props, ' + 'use componentWillReceiveProps(). If you meant to fetch data or ' + 'run side-effects or mutations after React has updated the UI, use componentDidUpdate().', name) : void 0;
    var noComponentWillRecieveProps = typeof instance.componentWillRecieveProps !== 'function';
    !noComponentWillRecieveProps ? warning(false, '%s has a method called ' + 'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?', name) : void 0;
    var noUnsafeComponentWillRecieveProps = typeof instance.UNSAFE_componentWillRecieveProps !== 'function';
    !noUnsafeComponentWillRecieveProps ? warning(false, '%s has a method called ' + 'UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?', name) : void 0;
    var hasMutatedProps = instance.props !== workInProgress.pendingProps;
    !(instance.props === undefined || !hasMutatedProps) ? warning(false, '%s(...): When calling super() in `%s`, make sure to pass ' + "up the same props that your component's constructor was passed.", name, name) : void 0;
    var noInstanceDefaultProps = !instance.defaultProps;
    !noInstanceDefaultProps ? warning(false, 'Setting defaultProps as an instance property on %s is not supported and will be ignored.' + ' Instead, define defaultProps as a static property on %s.', name, name) : void 0;

    if (typeof instance.getSnapshotBeforeUpdate === 'function' && typeof instance.componentDidUpdate !== 'function' && !didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate.has(type)) {
      didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate.add(type);
      warning(false, '%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). ' + 'This component defines getSnapshotBeforeUpdate() only.', getComponentName(workInProgress));
    }

    var noInstanceGetDerivedStateFromProps = typeof instance.getDerivedStateFromProps !== 'function';
    !noInstanceGetDerivedStateFromProps ? warning(false, '%s: getDerivedStateFromProps() is defined as an instance method ' + 'and will be ignored. Instead, declare it as a static method.', name) : void 0;
    var noInstanceGetDerivedStateFromCatch = typeof instance.getDerivedStateFromCatch !== 'function';
    !noInstanceGetDerivedStateFromCatch ? warning(false, '%s: getDerivedStateFromCatch() is defined as an instance method ' + 'and will be ignored. Instead, declare it as a static method.', name) : void 0;
    var noStaticGetSnapshotBeforeUpdate = typeof type.getSnapshotBeforeUpdate !== 'function';
    !noStaticGetSnapshotBeforeUpdate ? warning(false, '%s: getSnapshotBeforeUpdate() is defined as a static method ' + 'and will be ignored. Instead, declare it as an instance method.', name) : void 0;
    var _state = instance.state;
    if (_state && (typeof _state !== 'object' || isArray(_state))) {
      warning(false, '%s.state: must be set to an object or null', name);
    }
    if (typeof instance.getChildContext === 'function') {
      !(typeof type.childContextTypes === 'object') ? warning(false, '%s.getChildContext(): childContextTypes must be defined in order to ' + 'use getChildContext().', name) : void 0;
    }
  }
}

function adoptClassInstance(workInProgress, instance) {
  instance.updater = classComponentUpdater;
  workInProgress.stateNode = instance;
  // The instance needs access to the fiber so that it can schedule updates
  set(instance, workInProgress);
  {
    instance._reactInternalInstance = fakeInternalInstance;
  }
}

function constructClassInstance(workInProgress, props, renderExpirationTime) {
  var ctor = workInProgress.type;
  var unmaskedContext = getUnmaskedContext(workInProgress);
  var needsContext = isContextConsumer(workInProgress);
  var context = needsContext ? getMaskedContext(workInProgress, unmaskedContext) : emptyObject;

  // Instantiate twice to help detect side-effects.
  {
    if (debugRenderPhaseSideEffects || debugRenderPhaseSideEffectsForStrictMode && workInProgress.mode & StrictMode) {
      new ctor(props, context); // eslint-disable-line no-new
    }
  }

  var instance = new ctor(props, context);
  var state = workInProgress.memoizedState = instance.state !== null && instance.state !== undefined ? instance.state : null;
  adoptClassInstance(workInProgress, instance);

  {
    if (typeof ctor.getDerivedStateFromProps === 'function' && state === null) {
      var componentName = getComponentName(workInProgress) || 'Component';
      if (!didWarnAboutUninitializedState.has(componentName)) {
        didWarnAboutUninitializedState.add(componentName);
        warning(false, '%s: Did not properly initialize state during construction. ' + 'Expected state to be an object, but it was %s.', componentName, instance.state === null ? 'null' : 'undefined');
      }
    }

    // If new component APIs are defined, "unsafe" lifecycles won't be called.
    // Warn about these lifecycles if they are present.
    // Don't warn about react-lifecycles-compat polyfilled methods though.
    if (typeof ctor.getDerivedStateFromProps === 'function' || typeof instance.getSnapshotBeforeUpdate === 'function') {
      var foundWillMountName = null;
      var foundWillReceivePropsName = null;
      var foundWillUpdateName = null;
      if (typeof instance.componentWillMount === 'function' && instance.componentWillMount.__suppressDeprecationWarning !== true) {
        foundWillMountName = 'componentWillMount';
      } else if (typeof instance.UNSAFE_componentWillMount === 'function') {
        foundWillMountName = 'UNSAFE_componentWillMount';
      }
      if (typeof instance.componentWillReceiveProps === 'function' && instance.componentWillReceiveProps.__suppressDeprecationWarning !== true) {
        foundWillReceivePropsName = 'componentWillReceiveProps';
      } else if (typeof instance.UNSAFE_componentWillReceiveProps === 'function') {
        foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
      }
      if (typeof instance.componentWillUpdate === 'function' && instance.componentWillUpdate.__suppressDeprecationWarning !== true) {
        foundWillUpdateName = 'componentWillUpdate';
      } else if (typeof instance.UNSAFE_componentWillUpdate === 'function') {
        foundWillUpdateName = 'UNSAFE_componentWillUpdate';
      }
      if (foundWillMountName !== null || foundWillReceivePropsName !== null || foundWillUpdateName !== null) {
        var _componentName = getComponentName(workInProgress) || 'Component';
        var newApiName = typeof ctor.getDerivedStateFromProps === 'function' ? 'getDerivedStateFromProps()' : 'getSnapshotBeforeUpdate()';
        if (!didWarnAboutLegacyLifecyclesAndDerivedState.has(_componentName)) {
          didWarnAboutLegacyLifecyclesAndDerivedState.add(_componentName);
          warning(false, 'Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' + '%s uses %s but also contains the following legacy lifecycles:%s%s%s\n\n' + 'The above lifecycles should be removed. Learn more about this warning here:\n' + 'https://fb.me/react-async-component-lifecycle-hooks', _componentName, newApiName, foundWillMountName !== null ? '\n  ' + foundWillMountName : '', foundWillReceivePropsName !== null ? '\n  ' + foundWillReceivePropsName : '', foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '');
        }
      }
    }
  }

  // Cache unmasked context so we can avoid recreating masked context unless necessary.
  // ReactFiberContext usually updates this cache but can't for newly-created instances.
  if (needsContext) {
    cacheContext(workInProgress, unmaskedContext, context);
  }

  return instance;
}

function callComponentWillMount(workInProgress, instance) {
  startPhaseTimer(workInProgress, 'componentWillMount');
  var oldState = instance.state;

  if (typeof instance.componentWillMount === 'function') {
    instance.componentWillMount();
  }
  if (typeof instance.UNSAFE_componentWillMount === 'function') {
    instance.UNSAFE_componentWillMount();
  }

  stopPhaseTimer();

  if (oldState !== instance.state) {
    {
      warning(false, '%s.componentWillMount(): Assigning directly to this.state is ' + "deprecated (except inside a component's " + 'constructor). Use setState instead.', getComponentName(workInProgress) || 'Component');
    }
    classComponentUpdater.enqueueReplaceState(instance, instance.state, null);
  }
}

function callComponentWillReceiveProps(workInProgress, instance, newProps, newContext) {
  var oldState = instance.state;
  startPhaseTimer(workInProgress, 'componentWillReceiveProps');
  if (typeof instance.componentWillReceiveProps === 'function') {
    instance.componentWillReceiveProps(newProps, newContext);
  }
  if (typeof instance.UNSAFE_componentWillReceiveProps === 'function') {
    instance.UNSAFE_componentWillReceiveProps(newProps, newContext);
  }
  stopPhaseTimer();

  if (instance.state !== oldState) {
    {
      var componentName = getComponentName(workInProgress) || 'Component';
      if (!didWarnAboutStateAssignmentForComponent.has(componentName)) {
        didWarnAboutStateAssignmentForComponent.add(componentName);
        warning(false, '%s.componentWillReceiveProps(): Assigning directly to ' + "this.state is deprecated (except inside a component's " + 'constructor). Use setState instead.', componentName);
      }
    }
    classComponentUpdater.enqueueReplaceState(instance, instance.state, null);
  }
}

// Invokes the mount life-cycles on a previously never rendered instance.
function mountClassInstance(workInProgress, renderExpirationTime) {
  var ctor = workInProgress.type;

  {
    checkClassInstance(workInProgress);
  }

  var instance = workInProgress.stateNode;
  var props = workInProgress.pendingProps;
  var unmaskedContext = getUnmaskedContext(workInProgress);

  instance.props = props;
  instance.state = workInProgress.memoizedState;
  instance.refs = emptyObject;
  instance.context = getMaskedContext(workInProgress, unmaskedContext);

  {
    if (workInProgress.mode & StrictMode) {
      ReactStrictModeWarnings.recordUnsafeLifecycleWarnings(workInProgress, instance);

      ReactStrictModeWarnings.recordLegacyContextWarning(workInProgress, instance);
    }

    if (warnAboutDeprecatedLifecycles) {
      ReactStrictModeWarnings.recordDeprecationWarnings(workInProgress, instance);
    }
  }

  var updateQueue = workInProgress.updateQueue;
  if (updateQueue !== null) {
    processUpdateQueue(workInProgress, updateQueue, props, instance, renderExpirationTime);
    instance.state = workInProgress.memoizedState;
  }

  var getDerivedStateFromProps = workInProgress.type.getDerivedStateFromProps;
  if (typeof getDerivedStateFromProps === 'function') {
    applyDerivedStateFromProps(workInProgress, getDerivedStateFromProps, props);
    instance.state = workInProgress.memoizedState;
  }

  // In order to support react-lifecycles-compat polyfilled components,
  // Unsafe lifecycles should not be invoked for components using the new APIs.
  if (typeof ctor.getDerivedStateFromProps !== 'function' && typeof instance.getSnapshotBeforeUpdate !== 'function' && (typeof instance.UNSAFE_componentWillMount === 'function' || typeof instance.componentWillMount === 'function')) {
    callComponentWillMount(workInProgress, instance);
    // If we had additional state updates during this life-cycle, let's
    // process them now.
    updateQueue = workInProgress.updateQueue;
    if (updateQueue !== null) {
      processUpdateQueue(workInProgress, updateQueue, props, instance, renderExpirationTime);
      instance.state = workInProgress.memoizedState;
    }
  }

  if (typeof instance.componentDidMount === 'function') {
    workInProgress.effectTag |= Update;
  }
}

function resumeMountClassInstance(workInProgress, renderExpirationTime) {
  var ctor = workInProgress.type;
  var instance = workInProgress.stateNode;

  var oldProps = workInProgress.memoizedProps;
  var newProps = workInProgress.pendingProps;
  instance.props = oldProps;

  var oldContext = instance.context;
  var newUnmaskedContext = getUnmaskedContext(workInProgress);
  var newContext = getMaskedContext(workInProgress, newUnmaskedContext);

  var getDerivedStateFromProps = ctor.getDerivedStateFromProps;
  var hasNewLifecycles = typeof getDerivedStateFromProps === 'function' || typeof instance.getSnapshotBeforeUpdate === 'function';

  // Note: During these life-cycles, instance.props/instance.state are what
  // ever the previously attempted to render - not the "current". However,
  // during componentDidUpdate we pass the "current" props.

  // In order to support react-lifecycles-compat polyfilled components,
  // Unsafe lifecycles should not be invoked for components using the new APIs.
  if (!hasNewLifecycles && (typeof instance.UNSAFE_componentWillReceiveProps === 'function' || typeof instance.componentWillReceiveProps === 'function')) {
    if (oldProps !== newProps || oldContext !== newContext) {
      callComponentWillReceiveProps(workInProgress, instance, newProps, newContext);
    }
  }

  resetHasForceUpdateBeforeProcessing();

  var oldState = workInProgress.memoizedState;
  var newState = instance.state = oldState;
  var updateQueue = workInProgress.updateQueue;
  if (updateQueue !== null) {
    processUpdateQueue(workInProgress, updateQueue, newProps, instance, renderExpirationTime);
    newState = workInProgress.memoizedState;
  }
  if (oldProps === newProps && oldState === newState && !hasContextChanged() && !checkHasForceUpdateAfterProcessing()) {
    // If an update was already in progress, we should schedule an Update
    // effect even though we're bailing out, so that cWU/cDU are called.
    if (typeof instance.componentDidMount === 'function') {
      workInProgress.effectTag |= Update;
    }
    return false;
  }

  if (typeof getDerivedStateFromProps === 'function') {
    applyDerivedStateFromProps(workInProgress, getDerivedStateFromProps, newProps);
    newState = workInProgress.memoizedState;
  }

  var shouldUpdate = checkHasForceUpdateAfterProcessing() || checkShouldComponentUpdate(workInProgress, oldProps, newProps, oldState, newState, newContext);

  if (shouldUpdate) {
    // In order to support react-lifecycles-compat polyfilled components,
    // Unsafe lifecycles should not be invoked for components using the new APIs.
    if (!hasNewLifecycles && (typeof instance.UNSAFE_componentWillMount === 'function' || typeof instance.componentWillMount === 'function')) {
      startPhaseTimer(workInProgress, 'componentWillMount');
      if (typeof instance.componentWillMount === 'function') {
        instance.componentWillMount();
      }
      if (typeof instance.UNSAFE_componentWillMount === 'function') {
        instance.UNSAFE_componentWillMount();
      }
      stopPhaseTimer();
    }
    if (typeof instance.componentDidMount === 'function') {
      workInProgress.effectTag |= Update;
    }
  } else {
    // If an update was already in progress, we should schedule an Update
    // effect even though we're bailing out, so that cWU/cDU are called.
    if (typeof instance.componentDidMount === 'function') {
      workInProgress.effectTag |= Update;
    }

    // If shouldComponentUpdate returned false, we should still update the
    // memoized state to indicate that this work can be reused.
    workInProgress.memoizedProps = newProps;
    workInProgress.memoizedState = newState;
  }

  // Update the existing instance's state, props, and context pointers even
  // if shouldComponentUpdate returns false.
  instance.props = newProps;
  instance.state = newState;
  instance.context = newContext;

  return shouldUpdate;
}

// Invokes the update life-cycles and returns false if it shouldn't rerender.
function updateClassInstance(current, workInProgress, renderExpirationTime) {
  var ctor = workInProgress.type;
  var instance = workInProgress.stateNode;

  var oldProps = workInProgress.memoizedProps;
  var newProps = workInProgress.pendingProps;
  instance.props = oldProps;

  var oldContext = instance.context;
  var newUnmaskedContext = getUnmaskedContext(workInProgress);
  var newContext = getMaskedContext(workInProgress, newUnmaskedContext);

  var getDerivedStateFromProps = ctor.getDerivedStateFromProps;
  var hasNewLifecycles = typeof getDerivedStateFromProps === 'function' || typeof instance.getSnapshotBeforeUpdate === 'function';

  // Note: During these life-cycles, instance.props/instance.state are what
  // ever the previously attempted to render - not the "current". However,
  // during componentDidUpdate we pass the "current" props.

  // In order to support react-lifecycles-compat polyfilled components,
  // Unsafe lifecycles should not be invoked for components using the new APIs.
  if (!hasNewLifecycles && (typeof instance.UNSAFE_componentWillReceiveProps === 'function' || typeof instance.componentWillReceiveProps === 'function')) {
    if (oldProps !== newProps || oldContext !== newContext) {
      callComponentWillReceiveProps(workInProgress, instance, newProps, newContext);
    }
  }

  resetHasForceUpdateBeforeProcessing();

  var oldState = workInProgress.memoizedState;
  var newState = instance.state = oldState;
  var updateQueue = workInProgress.updateQueue;
  if (updateQueue !== null) {
    processUpdateQueue(workInProgress, updateQueue, newProps, instance, renderExpirationTime);
    newState = workInProgress.memoizedState;
  }

  if (oldProps === newProps && oldState === newState && !hasContextChanged() && !checkHasForceUpdateAfterProcessing()) {
    // If an update was already in progress, we should schedule an Update
    // effect even though we're bailing out, so that cWU/cDU are called.
    if (typeof instance.componentDidUpdate === 'function') {
      if (oldProps !== current.memoizedProps || oldState !== current.memoizedState) {
        workInProgress.effectTag |= Update;
      }
    }
    if (typeof instance.getSnapshotBeforeUpdate === 'function') {
      if (oldProps !== current.memoizedProps || oldState !== current.memoizedState) {
        workInProgress.effectTag |= Snapshot;
      }
    }
    return false;
  }

  if (typeof getDerivedStateFromProps === 'function') {
    applyDerivedStateFromProps(workInProgress, getDerivedStateFromProps, newProps);
    newState = workInProgress.memoizedState;
  }

  var shouldUpdate = checkHasForceUpdateAfterProcessing() || checkShouldComponentUpdate(workInProgress, oldProps, newProps, oldState, newState, newContext);

  if (shouldUpdate) {
    // In order to support react-lifecycles-compat polyfilled components,
    // Unsafe lifecycles should not be invoked for components using the new APIs.
    if (!hasNewLifecycles && (typeof instance.UNSAFE_componentWillUpdate === 'function' || typeof instance.componentWillUpdate === 'function')) {
      startPhaseTimer(workInProgress, 'componentWillUpdate');
      if (typeof instance.componentWillUpdate === 'function') {
        instance.componentWillUpdate(newProps, newState, newContext);
      }
      if (typeof instance.UNSAFE_componentWillUpdate === 'function') {
        instance.UNSAFE_componentWillUpdate(newProps, newState, newContext);
      }
      stopPhaseTimer();
    }
    if (typeof instance.componentDidUpdate === 'function') {
      workInProgress.effectTag |= Update;
    }
    if (typeof instance.getSnapshotBeforeUpdate === 'function') {
      workInProgress.effectTag |= Snapshot;
    }
  } else {
    // If an update was already in progress, we should schedule an Update
    // effect even though we're bailing out, so that cWU/cDU are called.
    if (typeof instance.componentDidUpdate === 'function') {
      if (oldProps !== current.memoizedProps || oldState !== current.memoizedState) {
        workInProgress.effectTag |= Update;
      }
    }
    if (typeof instance.getSnapshotBeforeUpdate === 'function') {
      if (oldProps !== current.memoizedProps || oldState !== current.memoizedState) {
        workInProgress.effectTag |= Snapshot;
      }
    }

    // If shouldComponentUpdate returned false, we should still update the
    // memoized props/state to indicate that this work can be reused.
    workInProgress.memoizedProps = newProps;
    workInProgress.memoizedState = newState;
  }

  // Update the existing instance's state, props, and context pointers even
  // if shouldComponentUpdate returns false.
  instance.props = newProps;
  instance.state = newState;
  instance.context = newContext;

  return shouldUpdate;
}

var getCurrentFiberStackAddendum$2 = ReactDebugCurrentFiber.getCurrentFiberStackAddendum;


var didWarnAboutMaps = void 0;
var didWarnAboutStringRefInStrictMode = void 0;
var ownerHasKeyUseWarning = void 0;
var ownerHasFunctionTypeWarning = void 0;
var warnForMissingKey = function (child) {};

{
  didWarnAboutMaps = false;
  didWarnAboutStringRefInStrictMode = {};

  /**
   * Warn if there's no key explicitly set on dynamic arrays of children or
   * object keys are not valid. This allows us to keep track of children between
   * updates.
   */
  ownerHasKeyUseWarning = {};
  ownerHasFunctionTypeWarning = {};

  warnForMissingKey = function (child) {
    if (child === null || typeof child !== 'object') {
      return;
    }
    if (!child._store || child._store.validated || child.key != null) {
      return;
    }
    !(typeof child._store === 'object') ? invariant(false, 'React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.') : void 0;
    child._store.validated = true;

    var currentComponentErrorInfo = 'Each child in an array or iterator should have a unique ' + '"key" prop. See https://fb.me/react-warning-keys for ' + 'more information.' + (getCurrentFiberStackAddendum$2() || '');
    if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
      return;
    }
    ownerHasKeyUseWarning[currentComponentErrorInfo] = true;

    warning(false, 'Each child in an array or iterator should have a unique ' + '"key" prop. See https://fb.me/react-warning-keys for ' + 'more information.%s', getCurrentFiberStackAddendum$2());
  };
}

var isArray$1 = Array.isArray;

function coerceRef(returnFiber, current, element) {
  var mixedRef = element.ref;
  if (mixedRef !== null && typeof mixedRef !== 'function' && typeof mixedRef !== 'object') {
    {
      if (returnFiber.mode & StrictMode) {
        var componentName = getComponentName(returnFiber) || 'Component';
        if (!didWarnAboutStringRefInStrictMode[componentName]) {
          warning(false, 'A string ref, "%s", has been found within a strict mode tree. ' + 'String refs are a source of potential bugs and should be avoided. ' + 'We recommend using createRef() instead.' + '\n%s' + '\n\nLearn more about using refs safely here:' + '\nhttps://fb.me/react-strict-mode-string-ref', mixedRef, getStackAddendumByWorkInProgressFiber(returnFiber));
          didWarnAboutStringRefInStrictMode[componentName] = true;
        }
      }
    }

    if (element._owner) {
      var owner = element._owner;
      var inst = void 0;
      if (owner) {
        var ownerFiber = owner;
        !(ownerFiber.tag === ClassComponent) ? invariant(false, 'Stateless function components cannot have refs.') : void 0;
        inst = ownerFiber.stateNode;
      }
      !inst ? invariant(false, 'Missing owner for string ref %s. This error is likely caused by a bug in React. Please file an issue.', mixedRef) : void 0;
      var stringRef = '' + mixedRef;
      // Check if previous string ref matches new string ref
      if (current !== null && current.ref !== null && typeof current.ref === 'function' && current.ref._stringRef === stringRef) {
        return current.ref;
      }
      var ref = function (value) {
        var refs = inst.refs === emptyObject ? inst.refs = {} : inst.refs;
        if (value === null) {
          delete refs[stringRef];
        } else {
          refs[stringRef] = value;
        }
      };
      ref._stringRef = stringRef;
      return ref;
    } else {
      !(typeof mixedRef === 'string') ? invariant(false, 'Expected ref to be a function or a string.') : void 0;
      !element._owner ? invariant(false, 'Element ref was specified as a string (%s) but no owner was set. This could happen for one of the following reasons:\n1. You may be adding a ref to a functional component\n2. You may be adding a ref to a component that was not created inside a component\'s render method\n3. You have multiple copies of React loaded\nSee https://fb.me/react-refs-must-have-owner for more information.', mixedRef) : void 0;
    }
  }
  return mixedRef;
}

function throwOnInvalidObjectType(returnFiber, newChild) {
  if (returnFiber.type !== 'textarea') {
    var addendum = '';
    {
      addendum = ' If you meant to render a collection of children, use an array ' + 'instead.' + (getCurrentFiberStackAddendum$2() || '');
    }
    invariant(false, 'Objects are not valid as a React child (found: %s).%s', Object.prototype.toString.call(newChild) === '[object Object]' ? 'object with keys {' + Object.keys(newChild).join(', ') + '}' : newChild, addendum);
  }
}

function warnOnFunctionType() {
  var currentComponentErrorInfo = 'Functions are not valid as a React child. This may happen if ' + 'you return a Component instead of <Component /> from render. ' + 'Or maybe you meant to call this function rather than return it.' + (getCurrentFiberStackAddendum$2() || '');

  if (ownerHasFunctionTypeWarning[currentComponentErrorInfo]) {
    return;
  }
  ownerHasFunctionTypeWarning[currentComponentErrorInfo] = true;

  warning(false, 'Functions are not valid as a React child. This may happen if ' + 'you return a Component instead of <Component /> from render. ' + 'Or maybe you meant to call this function rather than return it.%s', getCurrentFiberStackAddendum$2() || '');
}

// This wrapper function exists because I expect to clone the code in each path
// to be able to optimize each path individually by branching early. This needs
// a compiler or we can do it manually. Helpers that don't need this branching
// live outside of this function.
function ChildReconciler(shouldTrackSideEffects) {
  function deleteChild(returnFiber, childToDelete) {
    if (!shouldTrackSideEffects) {
      // Noop.
      return;
    }
    // Deletions are added in reversed order so we add it to the front.
    // At this point, the return fiber's effect list is empty except for
    // deletions, so we can just append the deletion to the list. The remaining
    // effects aren't added until the complete phase. Once we implement
    // resuming, this may not be true.
    var last = returnFiber.lastEffect;
    if (last !== null) {
      last.nextEffect = childToDelete;
      returnFiber.lastEffect = childToDelete;
    } else {
      returnFiber.firstEffect = returnFiber.lastEffect = childToDelete;
    }
    childToDelete.nextEffect = null;
    childToDelete.effectTag = Deletion;
  }

  function deleteRemainingChildren(returnFiber, currentFirstChild) {
    if (!shouldTrackSideEffects) {
      // Noop.
      return null;
    }

    // TODO: For the shouldClone case, this could be micro-optimized a bit by
    // assuming that after the first child we've already added everything.
    var childToDelete = currentFirstChild;
    while (childToDelete !== null) {
      deleteChild(returnFiber, childToDelete);
      childToDelete = childToDelete.sibling;
    }
    return null;
  }

  function mapRemainingChildren(returnFiber, currentFirstChild) {
    // Add the remaining children to a temporary map so that we can find them by
    // keys quickly. Implicit (null) keys get added to this set with their index
    var existingChildren = new Map();

    var existingChild = currentFirstChild;
    while (existingChild !== null) {
      if (existingChild.key !== null) {
        existingChildren.set(existingChild.key, existingChild);
      } else {
        existingChildren.set(existingChild.index, existingChild);
      }
      existingChild = existingChild.sibling;
    }
    return existingChildren;
  }

  function useFiber(fiber, pendingProps, expirationTime) {
    // We currently set sibling to null and index to 0 here because it is easy
    // to forget to do before returning it. E.g. for the single child case.
    var clone = createWorkInProgress(fiber, pendingProps, expirationTime);
    clone.index = 0;
    clone.sibling = null;
    return clone;
  }

  function placeChild(newFiber, lastPlacedIndex, newIndex) {
    newFiber.index = newIndex;
    if (!shouldTrackSideEffects) {
      // Noop.
      return lastPlacedIndex;
    }
    var current = newFiber.alternate;
    if (current !== null) {
      var oldIndex = current.index;
      if (oldIndex < lastPlacedIndex) {
        // This is a move.
        newFiber.effectTag = Placement;
        return lastPlacedIndex;
      } else {
        // This item can stay in place.
        return oldIndex;
      }
    } else {
      // This is an insertion.
      newFiber.effectTag = Placement;
      return lastPlacedIndex;
    }
  }

  function placeSingleChild(newFiber) {
    // This is simpler for the single child case. We only need to do a
    // placement for inserting new children.
    if (shouldTrackSideEffects && newFiber.alternate === null) {
      newFiber.effectTag = Placement;
    }
    return newFiber;
  }

  function updateTextNode(returnFiber, current, textContent, expirationTime) {
    if (current === null || current.tag !== HostText) {
      // Insert
      var created = createFiberFromText(textContent, returnFiber.mode, expirationTime);
      created.return = returnFiber;
      return created;
    } else {
      // Update
      var existing = useFiber(current, textContent, expirationTime);
      existing.return = returnFiber;
      return existing;
    }
  }

  function updateElement(returnFiber, current, element, expirationTime) {
    if (current !== null && current.type === element.type) {
      // Move based on index
      var existing = useFiber(current, element.props, expirationTime);
      existing.ref = coerceRef(returnFiber, current, element);
      existing.return = returnFiber;
      {
        existing._debugSource = element._source;
        existing._debugOwner = element._owner;
      }
      return existing;
    } else {
      // Insert
      var created = createFiberFromElement(element, returnFiber.mode, expirationTime);
      created.ref = coerceRef(returnFiber, current, element);
      created.return = returnFiber;
      return created;
    }
  }

  function updatePortal(returnFiber, current, portal, expirationTime) {
    if (current === null || current.tag !== HostPortal || current.stateNode.containerInfo !== portal.containerInfo || current.stateNode.implementation !== portal.implementation) {
      // Insert
      var created = createFiberFromPortal(portal, returnFiber.mode, expirationTime);
      created.return = returnFiber;
      return created;
    } else {
      // Update
      var existing = useFiber(current, portal.children || [], expirationTime);
      existing.return = returnFiber;
      return existing;
    }
  }

  function updateFragment(returnFiber, current, fragment, expirationTime, key) {
    if (current === null || current.tag !== Fragment) {
      // Insert
      var created = createFiberFromFragment(fragment, returnFiber.mode, expirationTime, key);
      created.return = returnFiber;
      return created;
    } else {
      // Update
      var existing = useFiber(current, fragment, expirationTime);
      existing.return = returnFiber;
      return existing;
    }
  }

  function createChild(returnFiber, newChild, expirationTime) {
    if (typeof newChild === 'string' || typeof newChild === 'number') {
      // Text nodes don't have keys. If the previous node is implicitly keyed
      // we can continue to replace it without aborting even if it is not a text
      // node.
      var created = createFiberFromText('' + newChild, returnFiber.mode, expirationTime);
      created.return = returnFiber;
      return created;
    }

    if (typeof newChild === 'object' && newChild !== null) {
      switch (newChild.$$typeof) {
        case REACT_ELEMENT_TYPE:
          {
            var _created = createFiberFromElement(newChild, returnFiber.mode, expirationTime);
            _created.ref = coerceRef(returnFiber, null, newChild);
            _created.return = returnFiber;
            return _created;
          }
        case REACT_PORTAL_TYPE:
          {
            var _created2 = createFiberFromPortal(newChild, returnFiber.mode, expirationTime);
            _created2.return = returnFiber;
            return _created2;
          }
      }

      if (isArray$1(newChild) || getIteratorFn(newChild)) {
        var _created3 = createFiberFromFragment(newChild, returnFiber.mode, expirationTime, null);
        _created3.return = returnFiber;
        return _created3;
      }

      throwOnInvalidObjectType(returnFiber, newChild);
    }

    {
      if (typeof newChild === 'function') {
        warnOnFunctionType();
      }
    }

    return null;
  }

  function updateSlot(returnFiber, oldFiber, newChild, expirationTime) {
    // Update the fiber if the keys match, otherwise return null.

    var key = oldFiber !== null ? oldFiber.key : null;

    if (typeof newChild === 'string' || typeof newChild === 'number') {
      // Text nodes don't have keys. If the previous node is implicitly keyed
      // we can continue to replace it without aborting even if it is not a text
      // node.
      if (key !== null) {
        return null;
      }
      return updateTextNode(returnFiber, oldFiber, '' + newChild, expirationTime);
    }

    if (typeof newChild === 'object' && newChild !== null) {
      switch (newChild.$$typeof) {
        case REACT_ELEMENT_TYPE:
          {
            if (newChild.key === key) {
              if (newChild.type === REACT_FRAGMENT_TYPE) {
                return updateFragment(returnFiber, oldFiber, newChild.props.children, expirationTime, key);
              }
              return updateElement(returnFiber, oldFiber, newChild, expirationTime);
            } else {
              return null;
            }
          }
        case REACT_PORTAL_TYPE:
          {
            if (newChild.key === key) {
              return updatePortal(returnFiber, oldFiber, newChild, expirationTime);
            } else {
              return null;
            }
          }
      }

      if (isArray$1(newChild) || getIteratorFn(newChild)) {
        if (key !== null) {
          return null;
        }

        return updateFragment(returnFiber, oldFiber, newChild, expirationTime, null);
      }

      throwOnInvalidObjectType(returnFiber, newChild);
    }

    {
      if (typeof newChild === 'function') {
        warnOnFunctionType();
      }
    }

    return null;
  }

  function updateFromMap(existingChildren, returnFiber, newIdx, newChild, expirationTime) {
    if (typeof newChild === 'string' || typeof newChild === 'number') {
      // Text nodes don't have keys, so we neither have to check the old nor
      // new node for the key. If both are text nodes, they match.
      var matchedFiber = existingChildren.get(newIdx) || null;
      return updateTextNode(returnFiber, matchedFiber, '' + newChild, expirationTime);
    }

    if (typeof newChild === 'object' && newChild !== null) {
      switch (newChild.$$typeof) {
        case REACT_ELEMENT_TYPE:
          {
            var _matchedFiber = existingChildren.get(newChild.key === null ? newIdx : newChild.key) || null;
            if (newChild.type === REACT_FRAGMENT_TYPE) {
              return updateFragment(returnFiber, _matchedFiber, newChild.props.children, expirationTime, newChild.key);
            }
            return updateElement(returnFiber, _matchedFiber, newChild, expirationTime);
          }
        case REACT_PORTAL_TYPE:
          {
            var _matchedFiber2 = existingChildren.get(newChild.key === null ? newIdx : newChild.key) || null;
            return updatePortal(returnFiber, _matchedFiber2, newChild, expirationTime);
          }
      }

      if (isArray$1(newChild) || getIteratorFn(newChild)) {
        var _matchedFiber3 = existingChildren.get(newIdx) || null;
        return updateFragment(returnFiber, _matchedFiber3, newChild, expirationTime, null);
      }

      throwOnInvalidObjectType(returnFiber, newChild);
    }

    {
      if (typeof newChild === 'function') {
        warnOnFunctionType();
      }
    }

    return null;
  }

  /**
   * Warns if there is a duplicate or missing key
   */
  function warnOnInvalidKey(child, knownKeys) {
    {
      if (typeof child !== 'object' || child === null) {
        return knownKeys;
      }
      switch (child.$$typeof) {
        case REACT_ELEMENT_TYPE:
        case REACT_PORTAL_TYPE:
          warnForMissingKey(child);
          var key = child.key;
          if (typeof key !== 'string') {
            break;
          }
          if (knownKeys === null) {
            knownKeys = new Set();
            knownKeys.add(key);
            break;
          }
          if (!knownKeys.has(key)) {
            knownKeys.add(key);
            break;
          }
          warning(false, 'Encountered two children with the same key, `%s`. ' + 'Keys should be unique so that components maintain their identity ' + 'across updates. Non-unique keys may cause children to be ' + 'duplicated and/or omitted — the behavior is unsupported and ' + 'could change in a future version.%s', key, getCurrentFiberStackAddendum$2());
          break;
        default:
          break;
      }
    }
    return knownKeys;
  }

  function reconcileChildrenArray(returnFiber, currentFirstChild, newChildren, expirationTime) {
    // This algorithm can't optimize by searching from boths ends since we
    // don't have backpointers on fibers. I'm trying to see how far we can get
    // with that model. If it ends up not being worth the tradeoffs, we can
    // add it later.

    // Even with a two ended optimization, we'd want to optimize for the case
    // where there are few changes and brute force the comparison instead of
    // going for the Map. It'd like to explore hitting that path first in
    // forward-only mode and only go for the Map once we notice that we need
    // lots of look ahead. This doesn't handle reversal as well as two ended
    // search but that's unusual. Besides, for the two ended optimization to
    // work on Iterables, we'd need to copy the whole set.

    // In this first iteration, we'll just live with hitting the bad case
    // (adding everything to a Map) in for every insert/move.

    // If you change this code, also update reconcileChildrenIterator() which
    // uses the same algorithm.

    {
      // First, validate keys.
      var knownKeys = null;
      for (var i = 0; i < newChildren.length; i++) {
        var child = newChildren[i];
        knownKeys = warnOnInvalidKey(child, knownKeys);
      }
    }

    var resultingFirstChild = null;
    var previousNewFiber = null;

    var oldFiber = currentFirstChild;
    var lastPlacedIndex = 0;
    var newIdx = 0;
    var nextOldFiber = null;
    for (; oldFiber !== null && newIdx < newChildren.length; newIdx++) {
      if (oldFiber.index > newIdx) {
        nextOldFiber = oldFiber;
        oldFiber = null;
      } else {
        nextOldFiber = oldFiber.sibling;
      }
      var newFiber = updateSlot(returnFiber, oldFiber, newChildren[newIdx], expirationTime);
      if (newFiber === null) {
        // TODO: This breaks on empty slots like null children. That's
        // unfortunate because it triggers the slow path all the time. We need
        // a better way to communicate whether this was a miss or null,
        // boolean, undefined, etc.
        if (oldFiber === null) {
          oldFiber = nextOldFiber;
        }
        break;
      }
      if (shouldTrackSideEffects) {
        if (oldFiber && newFiber.alternate === null) {
          // We matched the slot, but we didn't reuse the existing fiber, so we
          // need to delete the existing child.
          deleteChild(returnFiber, oldFiber);
        }
      }
      lastPlacedIndex = placeChild(newFiber, lastPlacedIndex, newIdx);
      if (previousNewFiber === null) {
        // TODO: Move out of the loop. This only happens for the first run.
        resultingFirstChild = newFiber;
      } else {
        // TODO: Defer siblings if we're not at the right index for this slot.
        // I.e. if we had null values before, then we want to defer this
        // for each null value. However, we also don't want to call updateSlot
        // with the previous one.
        previousNewFiber.sibling = newFiber;
      }
      previousNewFiber = newFiber;
      oldFiber = nextOldFiber;
    }

    if (newIdx === newChildren.length) {
      // We've reached the end of the new children. We can delete the rest.
      deleteRemainingChildren(returnFiber, oldFiber);
      return resultingFirstChild;
    }

    if (oldFiber === null) {
      // If we don't have any more existing children we can choose a fast path
      // since the rest will all be insertions.
      for (; newIdx < newChildren.length; newIdx++) {
        var _newFiber = createChild(returnFiber, newChildren[newIdx], expirationTime);
        if (!_newFiber) {
          continue;
        }
        lastPlacedIndex = placeChild(_newFiber, lastPlacedIndex, newIdx);
        if (previousNewFiber === null) {
          // TODO: Move out of the loop. This only happens for the first run.
          resultingFirstChild = _newFiber;
        } else {
          previousNewFiber.sibling = _newFiber;
        }
        previousNewFiber = _newFiber;
      }
      return resultingFirstChild;
    }

    // Add all children to a key map for quick lookups.
    var existingChildren = mapRemainingChildren(returnFiber, oldFiber);

    // Keep scanning and use the map to restore deleted items as moves.
    for (; newIdx < newChildren.length; newIdx++) {
      var _newFiber2 = updateFromMap(existingChildren, returnFiber, newIdx, newChildren[newIdx], expirationTime);
      if (_newFiber2) {
        if (shouldTrackSideEffects) {
          if (_newFiber2.alternate !== null) {
            // The new fiber is a work in progress, but if there exists a
            // current, that means that we reused the fiber. We need to delete
            // it from the child list so that we don't add it to the deletion
            // list.
            existingChildren.delete(_newFiber2.key === null ? newIdx : _newFiber2.key);
          }
        }
        lastPlacedIndex = placeChild(_newFiber2, lastPlacedIndex, newIdx);
        if (previousNewFiber === null) {
          resultingFirstChild = _newFiber2;
        } else {
          previousNewFiber.sibling = _newFiber2;
        }
        previousNewFiber = _newFiber2;
      }
    }

    if (shouldTrackSideEffects) {
      // Any existing children that weren't consumed above were deleted. We need
      // to add them to the deletion list.
      existingChildren.forEach(function (child) {
        return deleteChild(returnFiber, child);
      });
    }

    return resultingFirstChild;
  }

  function reconcileChildrenIterator(returnFiber, currentFirstChild, newChildrenIterable, expirationTime) {
    // This is the same implementation as reconcileChildrenArray(),
    // but using the iterator instead.

    var iteratorFn = getIteratorFn(newChildrenIterable);
    !(typeof iteratorFn === 'function') ? invariant(false, 'An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.') : void 0;

    {
      // Warn about using Maps as children
      if (newChildrenIterable.entries === iteratorFn) {
        !didWarnAboutMaps ? warning(false, 'Using Maps as children is unsupported and will likely yield ' + 'unexpected results. Convert it to a sequence/iterable of keyed ' + 'ReactElements instead.%s', getCurrentFiberStackAddendum$2()) : void 0;
        didWarnAboutMaps = true;
      }

      // First, validate keys.
      // We'll get a different iterator later for the main pass.
      var _newChildren = iteratorFn.call(newChildrenIterable);
      if (_newChildren) {
        var knownKeys = null;
        var _step = _newChildren.next();
        for (; !_step.done; _step = _newChildren.next()) {
          var child = _step.value;
          knownKeys = warnOnInvalidKey(child, knownKeys);
        }
      }
    }

    var newChildren = iteratorFn.call(newChildrenIterable);
    !(newChildren != null) ? invariant(false, 'An iterable object provided no iterator.') : void 0;

    var resultingFirstChild = null;
    var previousNewFiber = null;

    var oldFiber = currentFirstChild;
    var lastPlacedIndex = 0;
    var newIdx = 0;
    var nextOldFiber = null;

    var step = newChildren.next();
    for (; oldFiber !== null && !step.done; newIdx++, step = newChildren.next()) {
      if (oldFiber.index > newIdx) {
        nextOldFiber = oldFiber;
        oldFiber = null;
      } else {
        nextOldFiber = oldFiber.sibling;
      }
      var newFiber = updateSlot(returnFiber, oldFiber, step.value, expirationTime);
      if (newFiber === null) {
        // TODO: This breaks on empty slots like null children. That's
        // unfortunate because it triggers the slow path all the time. We need
        // a better way to communicate whether this was a miss or null,
        // boolean, undefined, etc.
        if (!oldFiber) {
          oldFiber = nextOldFiber;
        }
        break;
      }
      if (shouldTrackSideEffects) {
        if (oldFiber && newFiber.alternate === null) {
          // We matched the slot, but we didn't reuse the existing fiber, so we
          // need to delete the existing child.
          deleteChild(returnFiber, oldFiber);
        }
      }
      lastPlacedIndex = placeChild(newFiber, lastPlacedIndex, newIdx);
      if (previousNewFiber === null) {
        // TODO: Move out of the loop. This only happens for the first run.
        resultingFirstChild = newFiber;
      } else {
        // TODO: Defer siblings if we're not at the right index for this slot.
        // I.e. if we had null values before, then we want to defer this
        // for each null value. However, we also don't want to call updateSlot
        // with the previous one.
        previousNewFiber.sibling = newFiber;
      }
      previousNewFiber = newFiber;
      oldFiber = nextOldFiber;
    }

    if (step.done) {
      // We've reached the end of the new children. We can delete the rest.
      deleteRemainingChildren(returnFiber, oldFiber);
      return resultingFirstChild;
    }

    if (oldFiber === null) {
      // If we don't have any more existing children we can choose a fast path
      // since the rest will all be insertions.
      for (; !step.done; newIdx++, step = newChildren.next()) {
        var _newFiber3 = createChild(returnFiber, step.value, expirationTime);
        if (_newFiber3 === null) {
          continue;
        }
        lastPlacedIndex = placeChild(_newFiber3, lastPlacedIndex, newIdx);
        if (previousNewFiber === null) {
          // TODO: Move out of the loop. This only happens for the first run.
          resultingFirstChild = _newFiber3;
        } else {
          previousNewFiber.sibling = _newFiber3;
        }
        previousNewFiber = _newFiber3;
      }
      return resultingFirstChild;
    }

    // Add all children to a key map for quick lookups.
    var existingChildren = mapRemainingChildren(returnFiber, oldFiber);

    // Keep scanning and use the map to restore deleted items as moves.
    for (; !step.done; newIdx++, step = newChildren.next()) {
      var _newFiber4 = updateFromMap(existingChildren, returnFiber, newIdx, step.value, expirationTime);
      if (_newFiber4 !== null) {
        if (shouldTrackSideEffects) {
          if (_newFiber4.alternate !== null) {
            // The new fiber is a work in progress, but if there exists a
            // current, that means that we reused the fiber. We need to delete
            // it from the child list so that we don't add it to the deletion
            // list.
            existingChildren.delete(_newFiber4.key === null ? newIdx : _newFiber4.key);
          }
        }
        lastPlacedIndex = placeChild(_newFiber4, lastPlacedIndex, newIdx);
        if (previousNewFiber === null) {
          resultingFirstChild = _newFiber4;
        } else {
          previousNewFiber.sibling = _newFiber4;
        }
        previousNewFiber = _newFiber4;
      }
    }

    if (shouldTrackSideEffects) {
      // Any existing children that weren't consumed above were deleted. We need
      // to add them to the deletion list.
      existingChildren.forEach(function (child) {
        return deleteChild(returnFiber, child);
      });
    }

    return resultingFirstChild;
  }

  function reconcileSingleTextNode(returnFiber, currentFirstChild, textContent, expirationTime) {
    // There's no need to check for keys on text nodes since we don't have a
    // way to define them.
    if (currentFirstChild !== null && currentFirstChild.tag === HostText) {
      // We already have an existing node so let's just update it and delete
      // the rest.
      deleteRemainingChildren(returnFiber, currentFirstChild.sibling);
      var existing = useFiber(currentFirstChild, textContent, expirationTime);
      existing.return = returnFiber;
      return existing;
    }
    // The existing first child is not a text node so we need to create one
    // and delete the existing ones.
    deleteRemainingChildren(returnFiber, currentFirstChild);
    var created = createFiberFromText(textContent, returnFiber.mode, expirationTime);
    created.return = returnFiber;
    return created;
  }

  function reconcileSingleElement(returnFiber, currentFirstChild, element, expirationTime) {
    var key = element.key;
    var child = currentFirstChild;
    while (child !== null) {
      // TODO: If key === null and child.key === null, then this only applies to
      // the first item in the list.
      if (child.key === key) {
        if (child.tag === Fragment ? element.type === REACT_FRAGMENT_TYPE : child.type === element.type) {
          deleteRemainingChildren(returnFiber, child.sibling);
          var existing = useFiber(child, element.type === REACT_FRAGMENT_TYPE ? element.props.children : element.props, expirationTime);
          existing.ref = coerceRef(returnFiber, child, element);
          existing.return = returnFiber;
          {
            existing._debugSource = element._source;
            existing._debugOwner = element._owner;
          }
          return existing;
        } else {
          deleteRemainingChildren(returnFiber, child);
          break;
        }
      } else {
        deleteChild(returnFiber, child);
      }
      child = child.sibling;
    }

    if (element.type === REACT_FRAGMENT_TYPE) {
      var created = createFiberFromFragment(element.props.children, returnFiber.mode, expirationTime, element.key);
      created.return = returnFiber;
      return created;
    } else {
      var _created4 = createFiberFromElement(element, returnFiber.mode, expirationTime);
      _created4.ref = coerceRef(returnFiber, currentFirstChild, element);
      _created4.return = returnFiber;
      return _created4;
    }
  }

  function reconcileSinglePortal(returnFiber, currentFirstChild, portal, expirationTime) {
    var key = portal.key;
    var child = currentFirstChild;
    while (child !== null) {
      // TODO: If key === null and child.key === null, then this only applies to
      // the first item in the list.
      if (child.key === key) {
        if (child.tag === HostPortal && child.stateNode.containerInfo === portal.containerInfo && child.stateNode.implementation === portal.implementation) {
          deleteRemainingChildren(returnFiber, child.sibling);
          var existing = useFiber(child, portal.children || [], expirationTime);
          existing.return = returnFiber;
          return existing;
        } else {
          deleteRemainingChildren(returnFiber, child);
          break;
        }
      } else {
        deleteChild(returnFiber, child);
      }
      child = child.sibling;
    }

    var created = createFiberFromPortal(portal, returnFiber.mode, expirationTime);
    created.return = returnFiber;
    return created;
  }

  // This API will tag the children with the side-effect of the reconciliation
  // itself. They will be added to the side-effect list as we pass through the
  // children and the parent.
  function reconcileChildFibers(returnFiber, currentFirstChild, newChild, expirationTime) {
    // This function is not recursive.
    // If the top level item is an array, we treat it as a set of children,
    // not as a fragment. Nested arrays on the other hand will be treated as
    // fragment nodes. Recursion happens at the normal flow.

    // Handle top level unkeyed fragments as if they were arrays.
    // This leads to an ambiguity between <>{[...]}</> and <>...</>.
    // We treat the ambiguous cases above the same.
    var isUnkeyedTopLevelFragment = typeof newChild === 'object' && newChild !== null && newChild.type === REACT_FRAGMENT_TYPE && newChild.key === null;
    if (isUnkeyedTopLevelFragment) {
      newChild = newChild.props.children;
    }

    // Handle object types
    var isObject = typeof newChild === 'object' && newChild !== null;

    if (isObject) {
      switch (newChild.$$typeof) {
        case REACT_ELEMENT_TYPE:
          return placeSingleChild(reconcileSingleElement(returnFiber, currentFirstChild, newChild, expirationTime));
        case REACT_PORTAL_TYPE:
          return placeSingleChild(reconcileSinglePortal(returnFiber, currentFirstChild, newChild, expirationTime));
      }
    }

    if (typeof newChild === 'string' || typeof newChild === 'number') {
      return placeSingleChild(reconcileSingleTextNode(returnFiber, currentFirstChild, '' + newChild, expirationTime));
    }

    if (isArray$1(newChild)) {
      return reconcileChildrenArray(returnFiber, currentFirstChild, newChild, expirationTime);
    }

    if (getIteratorFn(newChild)) {
      return reconcileChildrenIterator(returnFiber, currentFirstChild, newChild, expirationTime);
    }

    if (isObject) {
      throwOnInvalidObjectType(returnFiber, newChild);
    }

    {
      if (typeof newChild === 'function') {
        warnOnFunctionType();
      }
    }
    if (typeof newChild === 'undefined' && !isUnkeyedTopLevelFragment) {
      // If the new child is undefined, and the return fiber is a composite
      // component, throw an error. If Fiber return types are disabled,
      // we already threw above.
      switch (returnFiber.tag) {
        case ClassComponent:
          {
            {
              var instance = returnFiber.stateNode;
              if (instance.render._isMockFunction) {
                // We allow auto-mocks to proceed as if they're returning null.
                break;
              }
            }
          }
        // Intentionally fall through to the next case, which handles both
        // functions and classes
        // eslint-disable-next-lined no-fallthrough
        case FunctionalComponent:
          {
            var Component = returnFiber.type;
            invariant(false, '%s(...): Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null.', Component.displayName || Component.name || 'Component');
          }
      }
    }

    // Remaining cases are all treated as empty.
    return deleteRemainingChildren(returnFiber, currentFirstChild);
  }

  return reconcileChildFibers;
}

var reconcileChildFibers = ChildReconciler(true);
var mountChildFibers = ChildReconciler(false);

function cloneChildFibers(current, workInProgress) {
  !(current === null || workInProgress.child === current.child) ? invariant(false, 'Resuming work not yet implemented.') : void 0;

  if (workInProgress.child === null) {
    return;
  }

  var currentChild = workInProgress.child;
  var newChild = createWorkInProgress(currentChild, currentChild.pendingProps, currentChild.expirationTime);
  workInProgress.child = newChild;

  newChild.return = workInProgress;
  while (currentChild.sibling !== null) {
    currentChild = currentChild.sibling;
    newChild = newChild.sibling = createWorkInProgress(currentChild, currentChild.pendingProps, currentChild.expirationTime);
    newChild.return = workInProgress;
  }
  newChild.sibling = null;
}

// The deepest Fiber on the stack involved in a hydration context.
// This may have been an insertion or a hydration.
var hydrationParentFiber = null;
var nextHydratableInstance = null;
var isHydrating = false;

function enterHydrationState(fiber) {
  if (!supportsHydration) {
    return false;
  }

  var parentInstance = fiber.stateNode.containerInfo;
  nextHydratableInstance = getFirstHydratableChild(parentInstance);
  hydrationParentFiber = fiber;
  isHydrating = true;
  return true;
}

function deleteHydratableInstance(returnFiber, instance) {
  {
    switch (returnFiber.tag) {
      case HostRoot:
        didNotHydrateContainerInstance(returnFiber.stateNode.containerInfo, instance);
        break;
      case HostComponent:
        didNotHydrateInstance(returnFiber.type, returnFiber.memoizedProps, returnFiber.stateNode, instance);
        break;
    }
  }

  var childToDelete = createFiberFromHostInstanceForDeletion();
  childToDelete.stateNode = instance;
  childToDelete.return = returnFiber;
  childToDelete.effectTag = Deletion;

  // This might seem like it belongs on progressedFirstDeletion. However,
  // these children are not part of the reconciliation list of children.
  // Even if we abort and rereconcile the children, that will try to hydrate
  // again and the nodes are still in the host tree so these will be
  // recreated.
  if (returnFiber.lastEffect !== null) {
    returnFiber.lastEffect.nextEffect = childToDelete;
    returnFiber.lastEffect = childToDelete;
  } else {
    returnFiber.firstEffect = returnFiber.lastEffect = childToDelete;
  }
}

function insertNonHydratedInstance(returnFiber, fiber) {
  fiber.effectTag |= Placement;
  {
    switch (returnFiber.tag) {
      case HostRoot:
        {
          var parentContainer = returnFiber.stateNode.containerInfo;
          switch (fiber.tag) {
            case HostComponent:
              var type = fiber.type;
              var props = fiber.pendingProps;
              didNotFindHydratableContainerInstance(parentContainer, type, props);
              break;
            case HostText:
              var text = fiber.pendingProps;
              didNotFindHydratableContainerTextInstance(parentContainer, text);
              break;
          }
          break;
        }
      case HostComponent:
        {
          var parentType = returnFiber.type;
          var parentProps = returnFiber.memoizedProps;
          var parentInstance = returnFiber.stateNode;
          switch (fiber.tag) {
            case HostComponent:
              var _type = fiber.type;
              var _props = fiber.pendingProps;
              didNotFindHydratableInstance(parentType, parentProps, parentInstance, _type, _props);
              break;
            case HostText:
              var _text = fiber.pendingProps;
              didNotFindHydratableTextInstance(parentType, parentProps, parentInstance, _text);
              break;
          }
          break;
        }
      default:
        return;
    }
  }
}

function tryHydrate(fiber, nextInstance) {
  switch (fiber.tag) {
    case HostComponent:
      {
        var type = fiber.type;
        var props = fiber.pendingProps;
        var instance = canHydrateInstance(nextInstance, type, props);
        if (instance !== null) {
          fiber.stateNode = instance;
          return true;
        }
        return false;
      }
    case HostText:
      {
        var text = fiber.pendingProps;
        var textInstance = canHydrateTextInstance(nextInstance, text);
        if (textInstance !== null) {
          fiber.stateNode = textInstance;
          return true;
        }
        return false;
      }
    default:
      return false;
  }
}

function tryToClaimNextHydratableInstance(fiber) {
  if (!isHydrating) {
    return;
  }
  var nextInstance = nextHydratableInstance;
  if (!nextInstance) {
    // Nothing to hydrate. Make it an insertion.
    insertNonHydratedInstance(hydrationParentFiber, fiber);
    isHydrating = false;
    hydrationParentFiber = fiber;
    return;
  }
  var firstAttemptedInstance = nextInstance;
  if (!tryHydrate(fiber, nextInstance)) {
    // If we can't hydrate this instance let's try the next one.
    // We use this as a heuristic. It's based on intuition and not data so it
    // might be flawed or unnecessary.
    nextInstance = getNextHydratableSibling(firstAttemptedInstance);
    if (!nextInstance || !tryHydrate(fiber, nextInstance)) {
      // Nothing to hydrate. Make it an insertion.
      insertNonHydratedInstance(hydrationParentFiber, fiber);
      isHydrating = false;
      hydrationParentFiber = fiber;
      return;
    }
    // We matched the next one, we'll now assume that the first one was
    // superfluous and we'll delete it. Since we can't eagerly delete it
    // we'll have to schedule a deletion. To do that, this node needs a dummy
    // fiber associated with it.
    deleteHydratableInstance(hydrationParentFiber, firstAttemptedInstance);
  }
  hydrationParentFiber = fiber;
  nextHydratableInstance = getFirstHydratableChild(nextInstance);
}

function prepareToHydrateHostInstance(fiber, rootContainerInstance, hostContext) {
  if (!supportsHydration) {
    invariant(false, 'Expected prepareToHydrateHostInstance() to never be called. This error is likely caused by a bug in React. Please file an issue.');
  }

  var instance = fiber.stateNode;
  var updatePayload = hydrateInstance(instance, fiber.type, fiber.memoizedProps, rootContainerInstance, hostContext, fiber);
  // TODO: Type this specific to this type of component.
  fiber.updateQueue = updatePayload;
  // If the update payload indicates that there is a change or if there
  // is a new ref we mark this as an update.
  if (updatePayload !== null) {
    return true;
  }
  return false;
}

function prepareToHydrateHostTextInstance(fiber) {
  if (!supportsHydration) {
    invariant(false, 'Expected prepareToHydrateHostTextInstance() to never be called. This error is likely caused by a bug in React. Please file an issue.');
  }

  var textInstance = fiber.stateNode;
  var textContent = fiber.memoizedProps;
  var shouldUpdate = hydrateTextInstance(textInstance, textContent, fiber);
  {
    if (shouldUpdate) {
      // We assume that prepareToHydrateHostTextInstance is called in a context where the
      // hydration parent is the parent host component of this host text.
      var returnFiber = hydrationParentFiber;
      if (returnFiber !== null) {
        switch (returnFiber.tag) {
          case HostRoot:
            {
              var parentContainer = returnFiber.stateNode.containerInfo;
              didNotMatchHydratedContainerTextInstance(parentContainer, textInstance, textContent);
              break;
            }
          case HostComponent:
            {
              var parentType = returnFiber.type;
              var parentProps = returnFiber.memoizedProps;
              var parentInstance = returnFiber.stateNode;
              didNotMatchHydratedTextInstance(parentType, parentProps, parentInstance, textInstance, textContent);
              break;
            }
        }
      }
    }
  }
  return shouldUpdate;
}

function popToNextHostParent(fiber) {
  var parent = fiber.return;
  while (parent !== null && parent.tag !== HostComponent && parent.tag !== HostRoot) {
    parent = parent.return;
  }
  hydrationParentFiber = parent;
}

function popHydrationState(fiber) {
  if (!supportsHydration) {
    return false;
  }
  if (fiber !== hydrationParentFiber) {
    // We're deeper than the current hydration context, inside an inserted
    // tree.
    return false;
  }
  if (!isHydrating) {
    // If we're not currently hydrating but we're in a hydration context, then
    // we were an insertion and now need to pop up reenter hydration of our
    // siblings.
    popToNextHostParent(fiber);
    isHydrating = true;
    return false;
  }

  var type = fiber.type;

  // If we have any remaining hydratable nodes, we need to delete them now.
  // We only do this deeper than head and body since they tend to have random
  // other nodes in them. We also ignore components with pure text content in
  // side of them.
  // TODO: Better heuristic.
  if (fiber.tag !== HostComponent || type !== 'head' && type !== 'body' && !shouldSetTextContent(type, fiber.memoizedProps)) {
    var nextInstance = nextHydratableInstance;
    while (nextInstance) {
      deleteHydratableInstance(fiber, nextInstance);
      nextInstance = getNextHydratableSibling(nextInstance);
    }
  }

  popToNextHostParent(fiber);
  nextHydratableInstance = hydrationParentFiber ? getNextHydratableSibling(fiber.stateNode) : null;
  return true;
}

function resetHydrationState() {
  if (!supportsHydration) {
    return;
  }

  hydrationParentFiber = null;
  nextHydratableInstance = null;
  isHydrating = false;
}

var getCurrentFiberStackAddendum$1 = ReactDebugCurrentFiber.getCurrentFiberStackAddendum;


var didWarnAboutBadClass = void 0;
var didWarnAboutGetDerivedStateOnFunctionalComponent = void 0;
var didWarnAboutStatelessRefs = void 0;

{
  didWarnAboutBadClass = {};
  didWarnAboutGetDerivedStateOnFunctionalComponent = {};
  didWarnAboutStatelessRefs = {};
}

// TODO: Remove this and use reconcileChildrenAtExpirationTime directly.
function reconcileChildren(current, workInProgress, nextChildren) {
  reconcileChildrenAtExpirationTime(current, workInProgress, nextChildren, workInProgress.expirationTime);
}

function reconcileChildrenAtExpirationTime(current, workInProgress, nextChildren, renderExpirationTime) {
  if (current === null) {
    // If this is a fresh new component that hasn't been rendered yet, we
    // won't update its child set by applying minimal side-effects. Instead,
    // we will add them all to the child before it gets rendered. That means
    // we can optimize this reconciliation pass by not tracking side-effects.
    workInProgress.child = mountChildFibers(workInProgress, null, nextChildren, renderExpirationTime);
  } else {
    // If the current child is the same as the work in progress, it means that
    // we haven't yet started any work on these children. Therefore, we use
    // the clone algorithm to create a copy of all the current children.

    // If we had any progressed work already, that is invalid at this point so
    // let's throw it out.
    workInProgress.child = reconcileChildFibers(workInProgress, current.child, nextChildren, renderExpirationTime);
  }
}

function updateForwardRef(current, workInProgress) {
  var render = workInProgress.type.render;
  var nextProps = workInProgress.pendingProps;
  var ref = workInProgress.ref;
  if (hasContextChanged()) {
    // Normally we can bail out on props equality but if context has changed
    // we don't do the bailout and we have to reuse existing props instead.
  } else if (workInProgress.memoizedProps === nextProps) {
    var currentRef = current !== null ? current.ref : null;
    if (ref === currentRef) {
      return bailoutOnAlreadyFinishedWork(current, workInProgress);
    }
  }

  var nextChildren = void 0;
  {
    ReactCurrentOwner.current = workInProgress;
    ReactDebugCurrentFiber.setCurrentPhase('render');
    nextChildren = render(nextProps, ref);
    ReactDebugCurrentFiber.setCurrentPhase(null);
  }

  reconcileChildren(current, workInProgress, nextChildren);
  memoizeProps(workInProgress, nextProps);
  return workInProgress.child;
}

function updateFragment(current, workInProgress) {
  var nextChildren = workInProgress.pendingProps;
  if (hasContextChanged()) {
    // Normally we can bail out on props equality but if context has changed
    // we don't do the bailout and we have to reuse existing props instead.
  } else if (workInProgress.memoizedProps === nextChildren) {
    return bailoutOnAlreadyFinishedWork(current, workInProgress);
  }
  reconcileChildren(current, workInProgress, nextChildren);
  memoizeProps(workInProgress, nextChildren);
  return workInProgress.child;
}

function updateMode(current, workInProgress) {
  var nextChildren = workInProgress.pendingProps.children;
  if (hasContextChanged()) {
    // Normally we can bail out on props equality but if context has changed
    // we don't do the bailout and we have to reuse existing props instead.
  } else if (nextChildren === null || workInProgress.memoizedProps === nextChildren) {
    return bailoutOnAlreadyFinishedWork(current, workInProgress);
  }
  reconcileChildren(current, workInProgress, nextChildren);
  memoizeProps(workInProgress, nextChildren);
  return workInProgress.child;
}

function updateProfiler(current, workInProgress) {
  var nextProps = workInProgress.pendingProps;
  if (enableProfilerTimer) {
    workInProgress.effectTag |= Update;
  }
  if (workInProgress.memoizedProps === nextProps) {
    return bailoutOnAlreadyFinishedWork(current, workInProgress);
  }
  var nextChildren = nextProps.children;
  reconcileChildren(current, workInProgress, nextChildren);
  memoizeProps(workInProgress, nextProps);
  return workInProgress.child;
}

function markRef(current, workInProgress) {
  var ref = workInProgress.ref;
  if (current === null && ref !== null || current !== null && current.ref !== ref) {
    // Schedule a Ref effect
    workInProgress.effectTag |= Ref;
  }
}

function updateFunctionalComponent(current, workInProgress) {
  var fn = workInProgress.type;
  var nextProps = workInProgress.pendingProps;

  if (hasContextChanged()) {
    // Normally we can bail out on props equality but if context has changed
    // we don't do the bailout and we have to reuse existing props instead.
  } else {
    if (workInProgress.memoizedProps === nextProps) {
      return bailoutOnAlreadyFinishedWork(current, workInProgress);
    }
    // TODO: consider bringing fn.shouldComponentUpdate() back.
    // It used to be here.
  }

  var unmaskedContext = getUnmaskedContext(workInProgress);
  var context = getMaskedContext(workInProgress, unmaskedContext);

  var nextChildren = void 0;

  {
    ReactCurrentOwner.current = workInProgress;
    ReactDebugCurrentFiber.setCurrentPhase('render');
    nextChildren = fn(nextProps, context);
    ReactDebugCurrentFiber.setCurrentPhase(null);
  }
  // React DevTools reads this flag.
  workInProgress.effectTag |= PerformedWork;
  reconcileChildren(current, workInProgress, nextChildren);
  memoizeProps(workInProgress, nextProps);
  return workInProgress.child;
}

function updateClassComponent(current, workInProgress, renderExpirationTime) {
  // Push context providers early to prevent context stack mismatches.
  // During mounting we don't know the child context yet as the instance doesn't exist.
  // We will invalidate the child context in finishClassComponent() right after rendering.
  var hasContext = pushContextProvider(workInProgress);
  var shouldUpdate = void 0;
  if (current === null) {
    if (workInProgress.stateNode === null) {
      // In the initial pass we might need to construct the instance.
      constructClassInstance(workInProgress, workInProgress.pendingProps, renderExpirationTime);
      mountClassInstance(workInProgress, renderExpirationTime);

      shouldUpdate = true;
    } else {
      // In a resume, we'll already have an instance we can reuse.
      shouldUpdate = resumeMountClassInstance(workInProgress, renderExpirationTime);
    }
  } else {
    shouldUpdate = updateClassInstance(current, workInProgress, renderExpirationTime);
  }
  return finishClassComponent(current, workInProgress, shouldUpdate, hasContext, renderExpirationTime);
}

function finishClassComponent(current, workInProgress, shouldUpdate, hasContext, renderExpirationTime) {
  // Refs should update even if shouldComponentUpdate returns false
  markRef(current, workInProgress);

  var didCaptureError = (workInProgress.effectTag & DidCapture) !== NoEffect;

  if (!shouldUpdate && !didCaptureError) {
    // Context providers should defer to sCU for rendering
    if (hasContext) {
      invalidateContextProvider(workInProgress, false);
    }

    return bailoutOnAlreadyFinishedWork(current, workInProgress);
  }

  var ctor = workInProgress.type;
  var instance = workInProgress.stateNode;

  // Rerender
  ReactCurrentOwner.current = workInProgress;
  var nextChildren = void 0;
  if (didCaptureError && (!enableGetDerivedStateFromCatch || typeof ctor.getDerivedStateFromCatch !== 'function')) {
    // If we captured an error, but getDerivedStateFrom catch is not defined,
    // unmount all the children. componentDidCatch will schedule an update to
    // re-render a fallback. This is temporary until we migrate everyone to
    // the new API.
    // TODO: Warn in a future release.
    nextChildren = null;

    if (enableProfilerTimer) {
      stopBaseRenderTimerIfRunning();
    }
  } else {
    {
      ReactDebugCurrentFiber.setCurrentPhase('render');
      nextChildren = instance.render();
      if (debugRenderPhaseSideEffects || debugRenderPhaseSideEffectsForStrictMode && workInProgress.mode & StrictMode) {
        instance.render();
      }
      ReactDebugCurrentFiber.setCurrentPhase(null);
    }
  }

  // React DevTools reads this flag.
  workInProgress.effectTag |= PerformedWork;
  if (didCaptureError) {
    // If we're recovering from an error, reconcile twice: first to delete
    // all the existing children.
    reconcileChildrenAtExpirationTime(current, workInProgress, null, renderExpirationTime);
    workInProgress.child = null;
    // Now we can continue reconciling like normal. This has the effect of
    // remounting all children regardless of whether their their
    // identity matches.
  }
  reconcileChildrenAtExpirationTime(current, workInProgress, nextChildren, renderExpirationTime);
  // Memoize props and state using the values we just used to render.
  // TODO: Restructure so we never read values from the instance.
  memoizeState(workInProgress, instance.state);
  memoizeProps(workInProgress, instance.props);

  // The context might have changed so we need to recalculate it.
  if (hasContext) {
    invalidateContextProvider(workInProgress, true);
  }

  return workInProgress.child;
}

function pushHostRootContext(workInProgress) {
  var root = workInProgress.stateNode;
  if (root.pendingContext) {
    pushTopLevelContextObject(workInProgress, root.pendingContext, root.pendingContext !== root.context);
  } else if (root.context) {
    // Should always be set
    pushTopLevelContextObject(workInProgress, root.context, false);
  }
  pushHostContainer(workInProgress, root.containerInfo);
}

function updateHostRoot(current, workInProgress, renderExpirationTime) {
  pushHostRootContext(workInProgress);
  var updateQueue = workInProgress.updateQueue;
  if (updateQueue !== null) {
    var nextProps = workInProgress.pendingProps;
    var prevState = workInProgress.memoizedState;
    var prevChildren = prevState !== null ? prevState.element : null;
    processUpdateQueue(workInProgress, updateQueue, nextProps, null, renderExpirationTime);
    var nextState = workInProgress.memoizedState;
    // Caution: React DevTools currently depends on this property
    // being called "element".
    var nextChildren = nextState.element;

    if (nextChildren === prevChildren) {
      // If the state is the same as before, that's a bailout because we had
      // no work that expires at this time.
      resetHydrationState();
      return bailoutOnAlreadyFinishedWork(current, workInProgress);
    }
    var root = workInProgress.stateNode;
    if ((current === null || current.child === null) && root.hydrate && enterHydrationState(workInProgress)) {
      // If we don't have any current children this might be the first pass.
      // We always try to hydrate. If this isn't a hydration pass there won't
      // be any children to hydrate which is effectively the same thing as
      // not hydrating.

      // This is a bit of a hack. We track the host root as a placement to
      // know that we're currently in a mounting state. That way isMounted
      // works as expected. We must reset this before committing.
      // TODO: Delete this when we delete isMounted and findDOMNode.
      workInProgress.effectTag |= Placement;

      // Ensure that children mount into this root without tracking
      // side-effects. This ensures that we don't store Placement effects on
      // nodes that will be hydrated.
      workInProgress.child = mountChildFibers(workInProgress, null, nextChildren, renderExpirationTime);
    } else {
      // Otherwise reset hydration state in case we aborted and resumed another
      // root.
      resetHydrationState();
      reconcileChildren(current, workInProgress, nextChildren);
    }
    return workInProgress.child;
  }
  resetHydrationState();
  // If there is no update queue, that's a bailout because the root has no props.
  return bailoutOnAlreadyFinishedWork(current, workInProgress);
}

function updateHostComponent(current, workInProgress, renderExpirationTime) {
  pushHostContext(workInProgress);

  if (current === null) {
    tryToClaimNextHydratableInstance(workInProgress);
  }

  var type = workInProgress.type;
  var memoizedProps = workInProgress.memoizedProps;
  var nextProps = workInProgress.pendingProps;
  var prevProps = current !== null ? current.memoizedProps : null;

  if (hasContextChanged()) {
    // Normally we can bail out on props equality but if context has changed
    // we don't do the bailout and we have to reuse existing props instead.
  } else if (memoizedProps === nextProps) {
    var isHidden = workInProgress.mode & AsyncMode && shouldDeprioritizeSubtree(type, nextProps);
    if (isHidden) {
      // Before bailing out, make sure we've deprioritized a hidden component.
      workInProgress.expirationTime = Never;
    }
    if (!isHidden || renderExpirationTime !== Never) {
      return bailoutOnAlreadyFinishedWork(current, workInProgress);
    }
    // If we're rendering a hidden node at hidden priority, don't bailout. The
    // parent is complete, but the children may not be.
  }

  var nextChildren = nextProps.children;
  var isDirectTextChild = shouldSetTextContent(type, nextProps);

  if (isDirectTextChild) {
    // We special case a direct text child of a host node. This is a common
    // case. We won't handle it as a reified child. We will instead handle
    // this in the host environment that also have access to this prop. That
    // avoids allocating another HostText fiber and traversing it.
    nextChildren = null;
  } else if (prevProps && shouldSetTextContent(type, prevProps)) {
    // If we're switching from a direct text child to a normal child, or to
    // empty, we need to schedule the text content to be reset.
    workInProgress.effectTag |= ContentReset;
  }

  markRef(current, workInProgress);

  // Check the host config to see if the children are offscreen/hidden.
  if (renderExpirationTime !== Never && workInProgress.mode & AsyncMode && shouldDeprioritizeSubtree(type, nextProps)) {
    // Down-prioritize the children.
    workInProgress.expirationTime = Never;
    // Bailout and come back to this fiber later.
    workInProgress.memoizedProps = nextProps;
    return null;
  }

  reconcileChildren(current, workInProgress, nextChildren);
  memoizeProps(workInProgress, nextProps);
  return workInProgress.child;
}

function updateHostText(current, workInProgress) {
  if (current === null) {
    tryToClaimNextHydratableInstance(workInProgress);
  }
  var nextProps = workInProgress.pendingProps;
  memoizeProps(workInProgress, nextProps);
  // Nothing to do here. This is terminal. We'll do the completion step
  // immediately after.
  return null;
}

function mountIndeterminateComponent(current, workInProgress, renderExpirationTime) {
  !(current === null) ? invariant(false, 'An indeterminate component should never have mounted. This error is likely caused by a bug in React. Please file an issue.') : void 0;
  var fn = workInProgress.type;
  var props = workInProgress.pendingProps;
  var unmaskedContext = getUnmaskedContext(workInProgress);
  var context = getMaskedContext(workInProgress, unmaskedContext);

  var value = void 0;

  {
    if (fn.prototype && typeof fn.prototype.render === 'function') {
      var componentName = getComponentName(workInProgress) || 'Unknown';

      if (!didWarnAboutBadClass[componentName]) {
        warning(false, "The <%s /> component appears to have a render method, but doesn't extend React.Component. " + 'This is likely to cause errors. Change %s to extend React.Component instead.', componentName, componentName);
        didWarnAboutBadClass[componentName] = true;
      }
    }

    if (workInProgress.mode & StrictMode) {
      ReactStrictModeWarnings.recordLegacyContextWarning(workInProgress, null);
    }

    ReactCurrentOwner.current = workInProgress;
    value = fn(props, context);
  }
  // React DevTools reads this flag.
  workInProgress.effectTag |= PerformedWork;

  if (typeof value === 'object' && value !== null && typeof value.render === 'function' && value.$$typeof === undefined) {
    var Component = workInProgress.type;

    // Proceed under the assumption that this is a class instance
    workInProgress.tag = ClassComponent;

    workInProgress.memoizedState = value.state !== null && value.state !== undefined ? value.state : null;

    var getDerivedStateFromProps = Component.getDerivedStateFromProps;
    if (typeof getDerivedStateFromProps === 'function') {
      applyDerivedStateFromProps(workInProgress, getDerivedStateFromProps, props);
    }

    // Push context providers early to prevent context stack mismatches.
    // During mounting we don't know the child context yet as the instance doesn't exist.
    // We will invalidate the child context in finishClassComponent() right after rendering.
    var hasContext = pushContextProvider(workInProgress);
    adoptClassInstance(workInProgress, value);
    mountClassInstance(workInProgress, renderExpirationTime);
    return finishClassComponent(current, workInProgress, true, hasContext, renderExpirationTime);
  } else {
    // Proceed under the assumption that this is a functional component
    workInProgress.tag = FunctionalComponent;
    {
      var _Component = workInProgress.type;

      if (_Component) {
        !!_Component.childContextTypes ? warning(false, '%s(...): childContextTypes cannot be defined on a functional component.', _Component.displayName || _Component.name || 'Component') : void 0;
      }
      if (workInProgress.ref !== null) {
        var info = '';
        var ownerName = ReactDebugCurrentFiber.getCurrentFiberOwnerName();
        if (ownerName) {
          info += '\n\nCheck the render method of `' + ownerName + '`.';
        }

        var warningKey = ownerName || workInProgress._debugID || '';
        var debugSource = workInProgress._debugSource;
        if (debugSource) {
          warningKey = debugSource.fileName + ':' + debugSource.lineNumber;
        }
        if (!didWarnAboutStatelessRefs[warningKey]) {
          didWarnAboutStatelessRefs[warningKey] = true;
          warning(false, 'Stateless function components cannot be given refs. ' + 'Attempts to access this ref will fail.%s%s', info, ReactDebugCurrentFiber.getCurrentFiberStackAddendum());
        }
      }

      if (typeof fn.getDerivedStateFromProps === 'function') {
        var _componentName = getComponentName(workInProgress) || 'Unknown';

        if (!didWarnAboutGetDerivedStateOnFunctionalComponent[_componentName]) {
          warning(false, '%s: Stateless functional components do not support getDerivedStateFromProps.', _componentName);
          didWarnAboutGetDerivedStateOnFunctionalComponent[_componentName] = true;
        }
      }
    }
    reconcileChildren(current, workInProgress, value);
    memoizeProps(workInProgress, props);
    return workInProgress.child;
  }
}

function updateTimeoutComponent(current, workInProgress, renderExpirationTime) {
  if (enableSuspense) {
    var nextProps = workInProgress.pendingProps;
    var prevProps = workInProgress.memoizedProps;

    var prevDidTimeout = workInProgress.memoizedState;

    // Check if we already attempted to render the normal state. If we did,
    // and we timed out, render the placeholder state.
    var alreadyCaptured = (workInProgress.effectTag & DidCapture) === NoEffect;
    var nextDidTimeout = !alreadyCaptured;

    if (hasContextChanged()) {
      // Normally we can bail out on props equality but if context has changed
      // we don't do the bailout and we have to reuse existing props instead.
    } else if (nextProps === prevProps && nextDidTimeout === prevDidTimeout) {
      return bailoutOnAlreadyFinishedWork(current, workInProgress);
    }

    var render = nextProps.children;
    var nextChildren = render(nextDidTimeout);
    workInProgress.memoizedProps = nextProps;
    workInProgress.memoizedState = nextDidTimeout;
    reconcileChildren(current, workInProgress, nextChildren);
    return workInProgress.child;
  } else {
    return null;
  }
}

function updatePortalComponent(current, workInProgress, renderExpirationTime) {
  pushHostContainer(workInProgress, workInProgress.stateNode.containerInfo);
  var nextChildren = workInProgress.pendingProps;
  if (hasContextChanged()) {
    // Normally we can bail out on props equality but if context has changed
    // we don't do the bailout and we have to reuse existing props instead.
  } else if (workInProgress.memoizedProps === nextChildren) {
    return bailoutOnAlreadyFinishedWork(current, workInProgress);
  }

  if (current === null) {
    // Portals are special because we don't append the children during mount
    // but at commit. Therefore we need to track insertions which the normal
    // flow doesn't do during mount. This doesn't happen at the root because
    // the root always starts with a "current" with a null child.
    // TODO: Consider unifying this with how the root works.
    workInProgress.child = reconcileChildFibers(workInProgress, null, nextChildren, renderExpirationTime);
    memoizeProps(workInProgress, nextChildren);
  } else {
    reconcileChildren(current, workInProgress, nextChildren);
    memoizeProps(workInProgress, nextChildren);
  }
  return workInProgress.child;
}

function propagateContextChange(workInProgress, context, changedBits, renderExpirationTime) {
  var fiber = workInProgress.child;
  if (fiber !== null) {
    // Set the return pointer of the child to the work-in-progress fiber.
    fiber.return = workInProgress;
  }
  while (fiber !== null) {
    var nextFiber = void 0;
    // Visit this fiber.
    switch (fiber.tag) {
      case ContextConsumer:
        // Check if the context matches.
        var observedBits = fiber.stateNode | 0;
        if (fiber.type === context && (observedBits & changedBits) !== 0) {
          // Update the expiration time of all the ancestors, including
          // the alternates.
          var node = fiber;
          while (node !== null) {
            var alternate = node.alternate;
            if (node.expirationTime === NoWork || node.expirationTime > renderExpirationTime) {
              node.expirationTime = renderExpirationTime;
              if (alternate !== null && (alternate.expirationTime === NoWork || alternate.expirationTime > renderExpirationTime)) {
                alternate.expirationTime = renderExpirationTime;
              }
            } else if (alternate !== null && (alternate.expirationTime === NoWork || alternate.expirationTime > renderExpirationTime)) {
              alternate.expirationTime = renderExpirationTime;
            } else {
              // Neither alternate was updated, which means the rest of the
              // ancestor path already has sufficient priority.
              break;
            }
            node = node.return;
          }
          // Don't scan deeper than a matching consumer. When we render the
          // consumer, we'll continue scanning from that point. This way the
          // scanning work is time-sliced.
          nextFiber = null;
        } else {
          // Traverse down.
          nextFiber = fiber.child;
        }
        break;
      case ContextProvider:
        // Don't scan deeper if this is a matching provider
        nextFiber = fiber.type === workInProgress.type ? null : fiber.child;
        break;
      default:
        // Traverse down.
        nextFiber = fiber.child;
        break;
    }
    if (nextFiber !== null) {
      // Set the return pointer of the child to the work-in-progress fiber.
      nextFiber.return = fiber;
    } else {
      // No child. Traverse to next sibling.
      nextFiber = fiber;
      while (nextFiber !== null) {
        if (nextFiber === workInProgress) {
          // We're back to the root of this subtree. Exit.
          nextFiber = null;
          break;
        }
        var sibling = nextFiber.sibling;
        if (sibling !== null) {
          // Set the return pointer of the sibling to the work-in-progress fiber.
          sibling.return = nextFiber.return;
          nextFiber = sibling;
          break;
        }
        // No more siblings. Traverse up.
        nextFiber = nextFiber.return;
      }
    }
    fiber = nextFiber;
  }
}

function updateContextProvider(current, workInProgress, renderExpirationTime) {
  var providerType = workInProgress.type;
  var context = providerType._context;

  var newProps = workInProgress.pendingProps;
  var oldProps = workInProgress.memoizedProps;
  var canBailOnProps = true;

  if (hasContextChanged()) {
    canBailOnProps = false;
    // Normally we can bail out on props equality but if context has changed
    // we don't do the bailout and we have to reuse existing props instead.
  } else if (oldProps === newProps) {
    workInProgress.stateNode = 0;
    pushProvider(workInProgress);
    return bailoutOnAlreadyFinishedWork(current, workInProgress);
  }

  var newValue = newProps.value;
  workInProgress.memoizedProps = newProps;

  {
    var providerPropTypes = workInProgress.type.propTypes;

    if (providerPropTypes) {
      checkPropTypes(providerPropTypes, newProps, 'prop', 'Context.Provider', getCurrentFiberStackAddendum$1);
    }
  }

  var changedBits = void 0;
  if (oldProps === null) {
    // Initial render
    changedBits = MAX_SIGNED_31_BIT_INT;
  } else {
    if (oldProps.value === newProps.value) {
      // No change. Bailout early if children are the same.
      if (oldProps.children === newProps.children && canBailOnProps) {
        workInProgress.stateNode = 0;
        pushProvider(workInProgress);
        return bailoutOnAlreadyFinishedWork(current, workInProgress);
      }
      changedBits = 0;
    } else {
      var oldValue = oldProps.value;
      // Use Object.is to compare the new context value to the old value.
      // Inlined Object.is polyfill.
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
      if (oldValue === newValue && (oldValue !== 0 || 1 / oldValue === 1 / newValue) || oldValue !== oldValue && newValue !== newValue // eslint-disable-line no-self-compare
      ) {
          // No change. Bailout early if children are the same.
          if (oldProps.children === newProps.children && canBailOnProps) {
            workInProgress.stateNode = 0;
            pushProvider(workInProgress);
            return bailoutOnAlreadyFinishedWork(current, workInProgress);
          }
          changedBits = 0;
        } else {
        changedBits = typeof context._calculateChangedBits === 'function' ? context._calculateChangedBits(oldValue, newValue) : MAX_SIGNED_31_BIT_INT;
        {
          !((changedBits & MAX_SIGNED_31_BIT_INT) === changedBits) ? warning(false, 'calculateChangedBits: Expected the return value to be a ' + '31-bit integer. Instead received: %s', changedBits) : void 0;
        }
        changedBits |= 0;

        if (changedBits === 0) {
          // No change. Bailout early if children are the same.
          if (oldProps.children === newProps.children && canBailOnProps) {
            workInProgress.stateNode = 0;
            pushProvider(workInProgress);
            return bailoutOnAlreadyFinishedWork(current, workInProgress);
          }
        } else {
          propagateContextChange(workInProgress, context, changedBits, renderExpirationTime);
        }
      }
    }
  }

  workInProgress.stateNode = changedBits;
  pushProvider(workInProgress);

  var newChildren = newProps.children;
  reconcileChildren(current, workInProgress, newChildren);
  return workInProgress.child;
}

function updateContextConsumer(current, workInProgress, renderExpirationTime) {
  var context = workInProgress.type;
  var newProps = workInProgress.pendingProps;
  var oldProps = workInProgress.memoizedProps;

  var newValue = getContextCurrentValue(context);
  var changedBits = getContextChangedBits(context);

  if (hasContextChanged()) {
    // Normally we can bail out on props equality but if context has changed
    // we don't do the bailout and we have to reuse existing props instead.
  } else if (changedBits === 0 && oldProps === newProps) {
    return bailoutOnAlreadyFinishedWork(current, workInProgress);
  }
  workInProgress.memoizedProps = newProps;

  var observedBits = newProps.unstable_observedBits;
  if (observedBits === undefined || observedBits === null) {
    // Subscribe to all changes by default
    observedBits = MAX_SIGNED_31_BIT_INT;
  }
  // Store the observedBits on the fiber's stateNode for quick access.
  workInProgress.stateNode = observedBits;

  if ((changedBits & observedBits) !== 0) {
    // Context change propagation stops at matching consumers, for time-
    // slicing. Continue the propagation here.
    propagateContextChange(workInProgress, context, changedBits, renderExpirationTime);
  } else if (oldProps === newProps) {
    // Skip over a memoized parent with a bitmask bailout even
    // if we began working on it because of a deeper matching child.
    return bailoutOnAlreadyFinishedWork(current, workInProgress);
  }
  // There is no bailout on `children` equality because we expect people
  // to often pass a bound method as a child, but it may reference
  // `this.state` or `this.props` (and thus needs to re-render on `setState`).

  var render = newProps.children;

  {
    !(typeof render === 'function') ? warning(false, 'A context consumer was rendered with multiple children, or a child ' + "that isn't a function. A context consumer expects a single child " + 'that is a function. If you did pass a function, make sure there ' + 'is no trailing or leading whitespace around it.') : void 0;
  }

  var newChildren = void 0;
  {
    ReactCurrentOwner.current = workInProgress;
    ReactDebugCurrentFiber.setCurrentPhase('render');
    newChildren = render(newValue);
    ReactDebugCurrentFiber.setCurrentPhase(null);
  }

  // React DevTools reads this flag.
  workInProgress.effectTag |= PerformedWork;
  reconcileChildren(current, workInProgress, newChildren);
  return workInProgress.child;
}

/*
  function reuseChildrenEffects(returnFiber : Fiber, firstChild : Fiber) {
    let child = firstChild;
    do {
      // Ensure that the first and last effect of the parent corresponds
      // to the children's first and last effect.
      if (!returnFiber.firstEffect) {
        returnFiber.firstEffect = child.firstEffect;
      }
      if (child.lastEffect) {
        if (returnFiber.lastEffect) {
          returnFiber.lastEffect.nextEffect = child.firstEffect;
        }
        returnFiber.lastEffect = child.lastEffect;
      }
    } while (child = child.sibling);
  }
  */

function bailoutOnAlreadyFinishedWork(current, workInProgress) {
  cancelWorkTimer(workInProgress);

  if (enableProfilerTimer) {
    // Don't update "base" render times for bailouts.
    stopBaseRenderTimerIfRunning();
  }

  // TODO: We should ideally be able to bail out early if the children have no
  // more work to do. However, since we don't have a separation of this
  // Fiber's priority and its children yet - we don't know without doing lots
  // of the same work we do anyway. Once we have that separation we can just
  // bail out here if the children has no more work at this priority level.
  // if (workInProgress.priorityOfChildren <= priorityLevel) {
  //   // If there are side-effects in these children that have not yet been
  //   // committed we need to ensure that they get properly transferred up.
  //   if (current && current.child !== workInProgress.child) {
  //     reuseChildrenEffects(workInProgress, child);
  //   }
  //   return null;
  // }

  cloneChildFibers(current, workInProgress);
  return workInProgress.child;
}

function bailoutOnLowPriority(current, workInProgress) {
  cancelWorkTimer(workInProgress);

  if (enableProfilerTimer) {
    // Don't update "base" render times for bailouts.
    stopBaseRenderTimerIfRunning();
  }

  // TODO: Handle HostComponent tags here as well and call pushHostContext()?
  // See PR 8590 discussion for context
  switch (workInProgress.tag) {
    case HostRoot:
      pushHostRootContext(workInProgress);
      break;
    case ClassComponent:
      pushContextProvider(workInProgress);
      break;
    case HostPortal:
      pushHostContainer(workInProgress, workInProgress.stateNode.containerInfo);
      break;
    case ContextProvider:
      pushProvider(workInProgress);
      break;
  }
  // TODO: What if this is currently in progress?
  // How can that happen? How is this not being cloned?
  return null;
}

// TODO: Delete memoizeProps/State and move to reconcile/bailout instead
function memoizeProps(workInProgress, nextProps) {
  workInProgress.memoizedProps = nextProps;
}

function memoizeState(workInProgress, nextState) {
  workInProgress.memoizedState = nextState;
  // Don't reset the updateQueue, in case there are pending updates. Resetting
  // is handled by processUpdateQueue.
}

function beginWork(current, workInProgress, renderExpirationTime) {
  if (enableProfilerTimer) {
    if (workInProgress.mode & ProfileMode) {
      markActualRenderTimeStarted(workInProgress);
    }
  }

  if (workInProgress.expirationTime === NoWork || workInProgress.expirationTime > renderExpirationTime) {
    return bailoutOnLowPriority(current, workInProgress);
  }

  switch (workInProgress.tag) {
    case IndeterminateComponent:
      return mountIndeterminateComponent(current, workInProgress, renderExpirationTime);
    case FunctionalComponent:
      return updateFunctionalComponent(current, workInProgress);
    case ClassComponent:
      return updateClassComponent(current, workInProgress, renderExpirationTime);
    case HostRoot:
      return updateHostRoot(current, workInProgress, renderExpirationTime);
    case HostComponent:
      return updateHostComponent(current, workInProgress, renderExpirationTime);
    case HostText:
      return updateHostText(current, workInProgress);
    case TimeoutComponent:
      return updateTimeoutComponent(current, workInProgress, renderExpirationTime);
    case HostPortal:
      return updatePortalComponent(current, workInProgress, renderExpirationTime);
    case ForwardRef:
      return updateForwardRef(current, workInProgress);
    case Fragment:
      return updateFragment(current, workInProgress);
    case Mode:
      return updateMode(current, workInProgress);
    case Profiler:
      return updateProfiler(current, workInProgress);
    case ContextProvider:
      return updateContextProvider(current, workInProgress, renderExpirationTime);
    case ContextConsumer:
      return updateContextConsumer(current, workInProgress, renderExpirationTime);
    default:
      invariant(false, 'Unknown unit of work tag. This error is likely caused by a bug in React. Please file an issue.');
  }
}

function markUpdate(workInProgress) {
  // Tag the fiber with an update effect. This turns a Placement into
  // a PlacementAndUpdate.
  workInProgress.effectTag |= Update;
}

function markRef$1(workInProgress) {
  workInProgress.effectTag |= Ref;
}

function appendAllChildren(parent, workInProgress) {
  // We only have the top Fiber that was created but we need recurse down its
  // children to find all the terminal nodes.
  var node = workInProgress.child;
  while (node !== null) {
    if (node.tag === HostComponent || node.tag === HostText) {
      appendInitialChild(parent, node.stateNode);
    } else if (node.tag === HostPortal) {
      // If we have a portal child, then we don't want to traverse
      // down its children. Instead, we'll get insertions from each child in
      // the portal directly.
    } else if (node.child !== null) {
      node.child.return = node;
      node = node.child;
      continue;
    }
    if (node === workInProgress) {
      return;
    }
    while (node.sibling === null) {
      if (node.return === null || node.return === workInProgress) {
        return;
      }
      node = node.return;
    }
    node.sibling.return = node.return;
    node = node.sibling;
  }
}

var updateHostContainer = void 0;
var updateHostComponent$1 = void 0;
var updateHostText$1 = void 0;
if (supportsMutation) {
  // Mutation mode

  updateHostContainer = function (workInProgress) {
    // Noop
  };
  updateHostComponent$1 = function (current, workInProgress, updatePayload, type, oldProps, newProps, rootContainerInstance, currentHostContext) {
    // TODO: Type this specific to this type of component.
    workInProgress.updateQueue = updatePayload;
    // If the update payload indicates that there is a change or if there
    // is a new ref we mark this as an update. All the work is done in commitWork.
    if (updatePayload) {
      markUpdate(workInProgress);
    }
  };
  updateHostText$1 = function (current, workInProgress, oldText, newText) {
    // If the text differs, mark it as an update. All the work in done in commitWork.
    if (oldText !== newText) {
      markUpdate(workInProgress);
    }
  };
} else if (supportsPersistence) {
  // Persistent host tree mode

  // An unfortunate fork of appendAllChildren because we have two different parent types.
  var appendAllChildrenToContainer = function (containerChildSet, workInProgress) {
    // We only have the top Fiber that was created but we need recurse down its
    // children to find all the terminal nodes.
    var node = workInProgress.child;
    while (node !== null) {
      if (node.tag === HostComponent || node.tag === HostText) {
        appendChildToContainerChildSet(containerChildSet, node.stateNode);
      } else if (node.tag === HostPortal) {
        // If we have a portal child, then we don't want to traverse
        // down its children. Instead, we'll get insertions from each child in
        // the portal directly.
      } else if (node.child !== null) {
        node.child.return = node;
        node = node.child;
        continue;
      }
      if (node === workInProgress) {
        return;
      }
      while (node.sibling === null) {
        if (node.return === null || node.return === workInProgress) {
          return;
        }
        node = node.return;
      }
      node.sibling.return = node.return;
      node = node.sibling;
    }
  };
  updateHostContainer = function (workInProgress) {
    var portalOrRoot = workInProgress.stateNode;
    var childrenUnchanged = workInProgress.firstEffect === null;
    if (childrenUnchanged) {
      // No changes, just reuse the existing instance.
    } else {
      var container = portalOrRoot.containerInfo;
      var newChildSet = createContainerChildSet(container);
      // If children might have changed, we have to add them all to the set.
      appendAllChildrenToContainer(newChildSet, workInProgress);
      portalOrRoot.pendingChildren = newChildSet;
      // Schedule an update on the container to swap out the container.
      markUpdate(workInProgress);
      finalizeContainerChildren(container, newChildSet);
    }
  };
  updateHostComponent$1 = function (current, workInProgress, updatePayload, type, oldProps, newProps, rootContainerInstance, currentHostContext) {
    // If there are no effects associated with this node, then none of our children had any updates.
    // This guarantees that we can reuse all of them.
    var childrenUnchanged = workInProgress.firstEffect === null;
    var currentInstance = current.stateNode;
    if (childrenUnchanged && updatePayload === null) {
      // No changes, just reuse the existing instance.
      // Note that this might release a previous clone.
      workInProgress.stateNode = currentInstance;
    } else {
      var recyclableInstance = workInProgress.stateNode;
      var newInstance = cloneInstance(currentInstance, updatePayload, type, oldProps, newProps, workInProgress, childrenUnchanged, recyclableInstance);
      if (finalizeInitialChildren(newInstance, type, newProps, rootContainerInstance, currentHostContext)) {
        markUpdate(workInProgress);
      }
      workInProgress.stateNode = newInstance;
      if (childrenUnchanged) {
        // If there are no other effects in this tree, we need to flag this node as having one.
        // Even though we're not going to use it for anything.
        // Otherwise parents won't know that there are new children to propagate upwards.
        markUpdate(workInProgress);
      } else {
        // If children might have changed, we have to add them all to the set.
        appendAllChildren(newInstance, workInProgress);
      }
    }
  };
  updateHostText$1 = function (current, workInProgress, oldText, newText) {
    if (oldText !== newText) {
      // If the text content differs, we'll create a new text instance for it.
      var rootContainerInstance = getRootHostContainer();
      var currentHostContext = getHostContext();
      workInProgress.stateNode = createTextInstance(newText, rootContainerInstance, currentHostContext, workInProgress);
      // We'll have to mark it as having an effect, even though we won't use the effect for anything.
      // This lets the parents know that at least one of their children has changed.
      markUpdate(workInProgress);
    }
  };
} else {
  // No host operations
  updateHostContainer = function (workInProgress) {
    // Noop
  };
  updateHostComponent$1 = function (current, workInProgress, updatePayload, type, oldProps, newProps, rootContainerInstance, currentHostContext) {
    // Noop
  };
  updateHostText$1 = function (current, workInProgress, oldText, newText) {
    // Noop
  };
}

function completeWork(current, workInProgress, renderExpirationTime) {
  var newProps = workInProgress.pendingProps;

  if (enableProfilerTimer) {
    if (workInProgress.mode & ProfileMode) {
      recordElapsedActualRenderTime(workInProgress);
    }
  }

  switch (workInProgress.tag) {
    case FunctionalComponent:
      return null;
    case ClassComponent:
      {
        // We are leaving this subtree, so pop context if any.
        popContextProvider(workInProgress);
        return null;
      }
    case HostRoot:
      {
        popHostContainer(workInProgress);
        popTopLevelContextObject(workInProgress);
        var fiberRoot = workInProgress.stateNode;
        if (fiberRoot.pendingContext) {
          fiberRoot.context = fiberRoot.pendingContext;
          fiberRoot.pendingContext = null;
        }
        if (current === null || current.child === null) {
          // If we hydrated, pop so that we can delete any remaining children
          // that weren't hydrated.
          popHydrationState(workInProgress);
          // This resets the hacky state to fix isMounted before committing.
          // TODO: Delete this when we delete isMounted and findDOMNode.
          workInProgress.effectTag &= ~Placement;
        }
        updateHostContainer(workInProgress);
        return null;
      }
    case HostComponent:
      {
        popHostContext(workInProgress);
        var rootContainerInstance = getRootHostContainer();
        var type = workInProgress.type;
        if (current !== null && workInProgress.stateNode != null) {
          // If we have an alternate, that means this is an update and we need to
          // schedule a side-effect to do the updates.
          var oldProps = current.memoizedProps;
          // If we get updated because one of our children updated, we don't
          // have newProps so we'll have to reuse them.
          // TODO: Split the update API as separate for the props vs. children.
          // Even better would be if children weren't special cased at all tho.
          var instance = workInProgress.stateNode;
          var currentHostContext = getHostContext();
          // TODO: Experiencing an error where oldProps is null. Suggests a host
          // component is hitting the resume path. Figure out why. Possibly
          // related to `hidden`.
          var updatePayload = prepareUpdate(instance, type, oldProps, newProps, rootContainerInstance, currentHostContext);

          updateHostComponent$1(current, workInProgress, updatePayload, type, oldProps, newProps, rootContainerInstance, currentHostContext);

          if (current.ref !== workInProgress.ref) {
            markRef$1(workInProgress);
          }
        } else {
          if (!newProps) {
            !(workInProgress.stateNode !== null) ? invariant(false, 'We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.') : void 0;
            // This can happen when we abort work.
            return null;
          }

          var _currentHostContext = getHostContext();
          // TODO: Move createInstance to beginWork and keep it on a context
          // "stack" as the parent. Then append children as we go in beginWork
          // or completeWork depending on we want to add then top->down or
          // bottom->up. Top->down is faster in IE11.
          var wasHydrated = popHydrationState(workInProgress);
          if (wasHydrated) {
            // TODO: Move this and createInstance step into the beginPhase
            // to consolidate.
            if (prepareToHydrateHostInstance(workInProgress, rootContainerInstance, _currentHostContext)) {
              // If changes to the hydrated node needs to be applied at the
              // commit-phase we mark this as such.
              markUpdate(workInProgress);
            }
          } else {
            var _instance = createInstance(type, newProps, rootContainerInstance, _currentHostContext, workInProgress);

            appendAllChildren(_instance, workInProgress);

            // Certain renderers require commit-time effects for initial mount.
            // (eg DOM renderer supports auto-focus for certain elements).
            // Make sure such renderers get scheduled for later work.
            if (finalizeInitialChildren(_instance, type, newProps, rootContainerInstance, _currentHostContext)) {
              markUpdate(workInProgress);
            }
            workInProgress.stateNode = _instance;
          }

          if (workInProgress.ref !== null) {
            // If there is a ref on a host node we need to schedule a callback
            markRef$1(workInProgress);
          }
        }
        return null;
      }
    case HostText:
      {
        var newText = newProps;
        if (current && workInProgress.stateNode != null) {
          var oldText = current.memoizedProps;
          // If we have an alternate, that means this is an update and we need
          // to schedule a side-effect to do the updates.
          updateHostText$1(current, workInProgress, oldText, newText);
        } else {
          if (typeof newText !== 'string') {
            !(workInProgress.stateNode !== null) ? invariant(false, 'We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.') : void 0;
            // This can happen when we abort work.
            return null;
          }
          var _rootContainerInstance = getRootHostContainer();
          var _currentHostContext2 = getHostContext();
          var _wasHydrated = popHydrationState(workInProgress);
          if (_wasHydrated) {
            if (prepareToHydrateHostTextInstance(workInProgress)) {
              markUpdate(workInProgress);
            }
          } else {
            workInProgress.stateNode = createTextInstance(newText, _rootContainerInstance, _currentHostContext2, workInProgress);
          }
        }
        return null;
      }
    case ForwardRef:
      return null;
    case TimeoutComponent:
      return null;
    case Fragment:
      return null;
    case Mode:
      return null;
    case Profiler:
      return null;
    case HostPortal:
      popHostContainer(workInProgress);
      updateHostContainer(workInProgress);
      return null;
    case ContextProvider:
      // Pop provider fiber
      popProvider(workInProgress);
      return null;
    case ContextConsumer:
      return null;
    // Error cases
    case IndeterminateComponent:
      invariant(false, 'An indeterminate component should have become determinate before completing. This error is likely caused by a bug in React. Please file an issue.');
    // eslint-disable-next-line no-fallthrough
    default:
      invariant(false, 'Unknown unit of work tag. This error is likely caused by a bug in React. Please file an issue.');
  }
}

// This module is forked in different environments.
// By default, return `true` to log errors to the console.
// Forks can return `false` if this isn't desirable.
function showErrorDialog(capturedError) {
  return true;
}

function logCapturedError(capturedError) {
  var logError = showErrorDialog(capturedError);

  // Allow injected showErrorDialog() to prevent default console.error logging.
  // This enables renderers like ReactNative to better manage redbox behavior.
  if (logError === false) {
    return;
  }

  var error = capturedError.error;
  var suppressLogging = error && error.suppressReactErrorLogging;
  if (suppressLogging) {
    return;
  }

  {
    var componentName = capturedError.componentName,
        componentStack = capturedError.componentStack,
        errorBoundaryName = capturedError.errorBoundaryName,
        errorBoundaryFound = capturedError.errorBoundaryFound,
        willRetry = capturedError.willRetry;


    var componentNameMessage = componentName ? 'The above error occurred in the <' + componentName + '> component:' : 'The above error occurred in one of your React components:';

    var errorBoundaryMessage = void 0;
    // errorBoundaryFound check is sufficient; errorBoundaryName check is to satisfy Flow.
    if (errorBoundaryFound && errorBoundaryName) {
      if (willRetry) {
        errorBoundaryMessage = 'React will try to recreate this component tree from scratch ' + ('using the error boundary you provided, ' + errorBoundaryName + '.');
      } else {
        errorBoundaryMessage = 'This error was initially handled by the error boundary ' + errorBoundaryName + '.\n' + 'Recreating the tree from scratch failed so React will unmount the tree.';
      }
    } else {
      errorBoundaryMessage = 'Consider adding an error boundary to your tree to customize error handling behavior.\n' + 'Visit https://fb.me/react-error-boundaries to learn more about error boundaries.';
    }
    var combinedMessage = '' + componentNameMessage + componentStack + '\n\n' + ('' + errorBoundaryMessage);

    // In development, we provide our own message with just the component stack.
    // We don't include the original error message and JS stack because the browser
    // has already printed it. Even if the application swallows the error, it is still
    // displayed by the browser thanks to the DEV-only fake event trick in ReactErrorUtils.
    console.error(combinedMessage);
  }
}

var invokeGuardedCallback$3 = ReactErrorUtils.invokeGuardedCallback;
var hasCaughtError$1 = ReactErrorUtils.hasCaughtError;
var clearCaughtError$1 = ReactErrorUtils.clearCaughtError;


var didWarnAboutUndefinedSnapshotBeforeUpdate = null;
{
  didWarnAboutUndefinedSnapshotBeforeUpdate = new Set();
}

function logError(boundary, errorInfo) {
  var source = errorInfo.source;
  var stack = errorInfo.stack;
  if (stack === null && source !== null) {
    stack = getStackAddendumByWorkInProgressFiber(source);
  }

  var capturedError = {
    componentName: source !== null ? getComponentName(source) : null,
    componentStack: stack !== null ? stack : '',
    error: errorInfo.value,
    errorBoundary: null,
    errorBoundaryName: null,
    errorBoundaryFound: false,
    willRetry: false
  };

  if (boundary !== null && boundary.tag === ClassComponent) {
    capturedError.errorBoundary = boundary.stateNode;
    capturedError.errorBoundaryName = getComponentName(boundary);
    capturedError.errorBoundaryFound = true;
    capturedError.willRetry = true;
  }

  try {
    logCapturedError(capturedError);
  } catch (e) {
    // Prevent cycle if logCapturedError() throws.
    // A cycle may still occur if logCapturedError renders a component that throws.
    var suppressLogging = e && e.suppressReactErrorLogging;
    if (!suppressLogging) {
      console.error(e);
    }
  }
}

var callComponentWillUnmountWithTimer = function (current, instance) {
  startPhaseTimer(current, 'componentWillUnmount');
  instance.props = current.memoizedProps;
  instance.state = current.memoizedState;
  instance.componentWillUnmount();
  stopPhaseTimer();
};

// Capture errors so they don't interrupt unmounting.
function safelyCallComponentWillUnmount(current, instance) {
  {
    invokeGuardedCallback$3(null, callComponentWillUnmountWithTimer, null, current, instance);
    if (hasCaughtError$1()) {
      var unmountError = clearCaughtError$1();
      captureCommitPhaseError(current, unmountError);
    }
  }
}

function safelyDetachRef(current) {
  var ref = current.ref;
  if (ref !== null) {
    if (typeof ref === 'function') {
      {
        invokeGuardedCallback$3(null, ref, null, null);
        if (hasCaughtError$1()) {
          var refError = clearCaughtError$1();
          captureCommitPhaseError(current, refError);
        }
      }
    } else {
      ref.current = null;
    }
  }
}

function commitBeforeMutationLifeCycles(current, finishedWork) {
  switch (finishedWork.tag) {
    case ClassComponent:
      {
        if (finishedWork.effectTag & Snapshot) {
          if (current !== null) {
            var prevProps = current.memoizedProps;
            var prevState = current.memoizedState;
            startPhaseTimer(finishedWork, 'getSnapshotBeforeUpdate');
            var instance = finishedWork.stateNode;
            instance.props = finishedWork.memoizedProps;
            instance.state = finishedWork.memoizedState;
            var snapshot = instance.getSnapshotBeforeUpdate(prevProps, prevState);
            {
              var didWarnSet = didWarnAboutUndefinedSnapshotBeforeUpdate;
              if (snapshot === undefined && !didWarnSet.has(finishedWork.type)) {
                didWarnSet.add(finishedWork.type);
                warning(false, '%s.getSnapshotBeforeUpdate(): A snapshot value (or null) ' + 'must be returned. You have returned undefined.', getComponentName(finishedWork));
              }
            }
            instance.__reactInternalSnapshotBeforeUpdate = snapshot;
            stopPhaseTimer();
          }
        }
        return;
      }
    case HostRoot:
    case HostComponent:
    case HostText:
    case HostPortal:
      // Nothing to do for these component types
      return;
    default:
      {
        invariant(false, 'This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.');
      }
  }
}

function commitLifeCycles(finishedRoot, current, finishedWork, currentTime, committedExpirationTime) {
  switch (finishedWork.tag) {
    case ClassComponent:
      {
        var instance = finishedWork.stateNode;
        if (finishedWork.effectTag & Update) {
          if (current === null) {
            startPhaseTimer(finishedWork, 'componentDidMount');
            instance.props = finishedWork.memoizedProps;
            instance.state = finishedWork.memoizedState;
            instance.componentDidMount();
            stopPhaseTimer();
          } else {
            var prevProps = current.memoizedProps;
            var prevState = current.memoizedState;
            startPhaseTimer(finishedWork, 'componentDidUpdate');
            instance.props = finishedWork.memoizedProps;
            instance.state = finishedWork.memoizedState;
            instance.componentDidUpdate(prevProps, prevState, instance.__reactInternalSnapshotBeforeUpdate);
            stopPhaseTimer();
          }
        }
        var updateQueue = finishedWork.updateQueue;
        if (updateQueue !== null) {
          instance.props = finishedWork.memoizedProps;
          instance.state = finishedWork.memoizedState;
          commitUpdateQueue(finishedWork, updateQueue, instance, committedExpirationTime);
        }
        return;
      }
    case HostRoot:
      {
        var _updateQueue = finishedWork.updateQueue;
        if (_updateQueue !== null) {
          var _instance = null;
          if (finishedWork.child !== null) {
            switch (finishedWork.child.tag) {
              case HostComponent:
                _instance = getPublicInstance(finishedWork.child.stateNode);
                break;
              case ClassComponent:
                _instance = finishedWork.child.stateNode;
                break;
            }
          }
          commitUpdateQueue(finishedWork, _updateQueue, _instance, committedExpirationTime);
        }
        return;
      }
    case HostComponent:
      {
        var _instance2 = finishedWork.stateNode;

        // Renderers may schedule work to be done after host components are mounted
        // (eg DOM renderer may schedule auto-focus for inputs and form controls).
        // These effects should only be committed when components are first mounted,
        // aka when there is no current/alternate.
        if (current === null && finishedWork.effectTag & Update) {
          var type = finishedWork.type;
          var props = finishedWork.memoizedProps;
          commitMount(_instance2, type, props, finishedWork);
        }

        return;
      }
    case HostText:
      {
        // We have no life-cycles associated with text.
        return;
      }
    case HostPortal:
      {
        // We have no life-cycles associated with portals.
        return;
      }
    case Profiler:
      {
        // We have no life-cycles associated with Profiler.
        return;
      }
    case TimeoutComponent:
      {
        // We have no life-cycles associated with Timeouts.
        return;
      }
    default:
      {
        invariant(false, 'This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.');
      }
  }
}

function commitAttachRef(finishedWork) {
  var ref = finishedWork.ref;
  if (ref !== null) {
    var instance = finishedWork.stateNode;
    var instanceToUse = void 0;
    switch (finishedWork.tag) {
      case HostComponent:
        instanceToUse = getPublicInstance(instance);
        break;
      default:
        instanceToUse = instance;
    }
    if (typeof ref === 'function') {
      ref(instanceToUse);
    } else {
      {
        if (!ref.hasOwnProperty('current')) {
          warning(false, 'Unexpected ref object provided for %s. ' + 'Use either a ref-setter function or React.createRef().%s', getComponentName(finishedWork), getStackAddendumByWorkInProgressFiber(finishedWork));
        }
      }

      ref.current = instanceToUse;
    }
  }
}

function commitDetachRef(current) {
  var currentRef = current.ref;
  if (currentRef !== null) {
    if (typeof currentRef === 'function') {
      currentRef(null);
    } else {
      currentRef.current = null;
    }
  }
}

// User-originating errors (lifecycles and refs) should not interrupt
// deletion, so don't let them throw. Host-originating errors should
// interrupt deletion, so it's okay
function commitUnmount(current) {
  if (typeof onCommitUnmount === 'function') {
    onCommitUnmount(current);
  }

  switch (current.tag) {
    case ClassComponent:
      {
        safelyDetachRef(current);
        var instance = current.stateNode;
        if (typeof instance.componentWillUnmount === 'function') {
          safelyCallComponentWillUnmount(current, instance);
        }
        return;
      }
    case HostComponent:
      {
        safelyDetachRef(current);
        return;
      }
    case HostPortal:
      {
        // TODO: this is recursive.
        // We are also not using this parent because
        // the portal will get pushed immediately.
        if (supportsMutation) {
          unmountHostComponents(current);
        } else if (supportsPersistence) {
          emptyPortalContainer(current);
        }
        return;
      }
  }
}

function commitNestedUnmounts(root) {
  // While we're inside a removed host node we don't want to call
  // removeChild on the inner nodes because they're removed by the top
  // call anyway. We also want to call componentWillUnmount on all
  // composites before this host node is removed from the tree. Therefore
  var node = root;
  while (true) {
    commitUnmount(node);
    // Visit children because they may contain more composite or host nodes.
    // Skip portals because commitUnmount() currently visits them recursively.
    if (node.child !== null && (
    // If we use mutation we drill down into portals using commitUnmount above.
    // If we don't use mutation we drill down into portals here instead.
    !supportsMutation || node.tag !== HostPortal)) {
      node.child.return = node;
      node = node.child;
      continue;
    }
    if (node === root) {
      return;
    }
    while (node.sibling === null) {
      if (node.return === null || node.return === root) {
        return;
      }
      node = node.return;
    }
    node.sibling.return = node.return;
    node = node.sibling;
  }
}

function detachFiber(current) {
  // Cut off the return pointers to disconnect it from the tree. Ideally, we
  // should clear the child pointer of the parent alternate to let this
  // get GC:ed but we don't know which for sure which parent is the current
  // one so we'll settle for GC:ing the subtree of this child. This child
  // itself will be GC:ed when the parent updates the next time.
  current.return = null;
  current.child = null;
  if (current.alternate) {
    current.alternate.child = null;
    current.alternate.return = null;
  }
}

function emptyPortalContainer(current) {
  if (!supportsPersistence) {
    return;
  }

  var portal = current.stateNode;
  var containerInfo = portal.containerInfo;

  var emptyChildSet = createContainerChildSet(containerInfo);
  replaceContainerChildren(containerInfo, emptyChildSet);
}

function commitContainer(finishedWork) {
  if (!supportsPersistence) {
    return;
  }

  switch (finishedWork.tag) {
    case ClassComponent:
      {
        return;
      }
    case HostComponent:
      {
        return;
      }
    case HostText:
      {
        return;
      }
    case HostRoot:
    case HostPortal:
      {
        var portalOrRoot = finishedWork.stateNode;
        var containerInfo = portalOrRoot.containerInfo,
            _pendingChildren = portalOrRoot.pendingChildren;

        replaceContainerChildren(containerInfo, _pendingChildren);
        return;
      }
    default:
      {
        invariant(false, 'This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.');
      }
  }
}

function getHostParentFiber(fiber) {
  var parent = fiber.return;
  while (parent !== null) {
    if (isHostParent(parent)) {
      return parent;
    }
    parent = parent.return;
  }
  invariant(false, 'Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.');
}

function isHostParent(fiber) {
  return fiber.tag === HostComponent || fiber.tag === HostRoot || fiber.tag === HostPortal;
}

function getHostSibling(fiber) {
  // We're going to search forward into the tree until we find a sibling host
  // node. Unfortunately, if multiple insertions are done in a row we have to
  // search past them. This leads to exponential search for the next sibling.
  var node = fiber;
  siblings: while (true) {
    // If we didn't find anything, let's try the next sibling.
    while (node.sibling === null) {
      if (node.return === null || isHostParent(node.return)) {
        // If we pop out of the root or hit the parent the fiber we are the
        // last sibling.
        return null;
      }
      node = node.return;
    }
    node.sibling.return = node.return;
    node = node.sibling;
    while (node.tag !== HostComponent && node.tag !== HostText) {
      // If it is not host node and, we might have a host node inside it.
      // Try to search down until we find one.
      if (node.effectTag & Placement) {
        // If we don't have a child, try the siblings instead.
        continue siblings;
      }
      // If we don't have a child, try the siblings instead.
      // We also skip portals because they are not part of this host tree.
      if (node.child === null || node.tag === HostPortal) {
        continue siblings;
      } else {
        node.child.return = node;
        node = node.child;
      }
    }
    // Check if this host node is stable or about to be placed.
    if (!(node.effectTag & Placement)) {
      // Found it!
      return node.stateNode;
    }
  }
}

function commitPlacement(finishedWork) {
  if (!supportsMutation) {
    return;
  }

  // Recursively insert all host nodes into the parent.
  var parentFiber = getHostParentFiber(finishedWork);
  var parent = void 0;
  var isContainer = void 0;
  switch (parentFiber.tag) {
    case HostComponent:
      parent = parentFiber.stateNode;
      isContainer = false;
      break;
    case HostRoot:
      parent = parentFiber.stateNode.containerInfo;
      isContainer = true;
      break;
    case HostPortal:
      parent = parentFiber.stateNode.containerInfo;
      isContainer = true;
      break;
    default:
      invariant(false, 'Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.');
  }
  if (parentFiber.effectTag & ContentReset) {
    // Reset the text content of the parent before doing any insertions
    resetTextContent(parent);
    // Clear ContentReset from the effect tag
    parentFiber.effectTag &= ~ContentReset;
  }

  var before = getHostSibling(finishedWork);
  // We only have the top Fiber that was inserted but we need recurse down its
  // children to find all the terminal nodes.
  var node = finishedWork;
  while (true) {
    if (node.tag === HostComponent || node.tag === HostText) {
      if (before) {
        if (isContainer) {
          insertInContainerBefore(parent, node.stateNode, before);
        } else {
          insertBefore(parent, node.stateNode, before);
        }
      } else {
        if (isContainer) {
          appendChildToContainer(parent, node.stateNode);
        } else {
          appendChild(parent, node.stateNode);
        }
      }
    } else if (node.tag === HostPortal) {
      // If the insertion itself is a portal, then we don't want to traverse
      // down its children. Instead, we'll get insertions from each child in
      // the portal directly.
    } else if (node.child !== null) {
      node.child.return = node;
      node = node.child;
      continue;
    }
    if (node === finishedWork) {
      return;
    }
    while (node.sibling === null) {
      if (node.return === null || node.return === finishedWork) {
        return;
      }
      node = node.return;
    }
    node.sibling.return = node.return;
    node = node.sibling;
  }
}

function unmountHostComponents(current) {
  // We only have the top Fiber that was inserted but we need recurse down its
  var node = current;

  // Each iteration, currentParent is populated with node's host parent if not
  // currentParentIsValid.
  var currentParentIsValid = false;
  var currentParent = void 0;
  var currentParentIsContainer = void 0;

  while (true) {
    if (!currentParentIsValid) {
      var parent = node.return;
      findParent: while (true) {
        !(parent !== null) ? invariant(false, 'Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.') : void 0;
        switch (parent.tag) {
          case HostComponent:
            currentParent = parent.stateNode;
            currentParentIsContainer = false;
            break findParent;
          case HostRoot:
            currentParent = parent.stateNode.containerInfo;
            currentParentIsContainer = true;
            break findParent;
          case HostPortal:
            currentParent = parent.stateNode.containerInfo;
            currentParentIsContainer = true;
            break findParent;
        }
        parent = parent.return;
      }
      currentParentIsValid = true;
    }

    if (node.tag === HostComponent || node.tag === HostText) {
      commitNestedUnmounts(node);
      // After all the children have unmounted, it is now safe to remove the
      // node from the tree.
      if (currentParentIsContainer) {
        removeChildFromContainer(currentParent, node.stateNode);
      } else {
        removeChild(currentParent, node.stateNode);
      }
      // Don't visit children because we already visited them.
    } else if (node.tag === HostPortal) {
      // When we go into a portal, it becomes the parent to remove from.
      // We will reassign it back when we pop the portal on the way up.
      currentParent = node.stateNode.containerInfo;
      // Visit children because portals might contain host components.
      if (node.child !== null) {
        node.child.return = node;
        node = node.child;
        continue;
      }
    } else {
      commitUnmount(node);
      // Visit children because we may find more host components below.
      if (node.child !== null) {
        node.child.return = node;
        node = node.child;
        continue;
      }
    }
    if (node === current) {
      return;
    }
    while (node.sibling === null) {
      if (node.return === null || node.return === current) {
        return;
      }
      node = node.return;
      if (node.tag === HostPortal) {
        // When we go out of the portal, we need to restore the parent.
        // Since we don't keep a stack of them, we will search for it.
        currentParentIsValid = false;
      }
    }
    node.sibling.return = node.return;
    node = node.sibling;
  }
}

function commitDeletion(current) {
  if (supportsMutation) {
    // Recursively delete all host nodes from the parent.
    // Detach refs and call componentWillUnmount() on the whole subtree.
    unmountHostComponents(current);
  } else {
    // Detach refs and call componentWillUnmount() on the whole subtree.
    commitNestedUnmounts(current);
  }
  detachFiber(current);
}

function commitWork(current, finishedWork) {
  if (!supportsMutation) {
    commitContainer(finishedWork);
    return;
  }

  switch (finishedWork.tag) {
    case ClassComponent:
      {
        return;
      }
    case HostComponent:
      {
        var instance = finishedWork.stateNode;
        if (instance != null) {
          // Commit the work prepared earlier.
          var newProps = finishedWork.memoizedProps;
          // For hydration we reuse the update path but we treat the oldProps
          // as the newProps. The updatePayload will contain the real change in
          // this case.
          var oldProps = current !== null ? current.memoizedProps : newProps;
          var type = finishedWork.type;
          // TODO: Type the updateQueue to be specific to host components.
          var updatePayload = finishedWork.updateQueue;
          finishedWork.updateQueue = null;
          if (updatePayload !== null) {
            commitUpdate(instance, updatePayload, type, oldProps, newProps, finishedWork);
          }
        }
        return;
      }
    case HostText:
      {
        !(finishedWork.stateNode !== null) ? invariant(false, 'This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.') : void 0;
        var textInstance = finishedWork.stateNode;
        var newText = finishedWork.memoizedProps;
        // For hydration we reuse the update path but we treat the oldProps
        // as the newProps. The updatePayload will contain the real change in
        // this case.
        var oldText = current !== null ? current.memoizedProps : newText;
        commitTextUpdate(textInstance, oldText, newText);
        return;
      }
    case HostRoot:
      {
        return;
      }
    case Profiler:
      {
        if (enableProfilerTimer) {
          var onRender = finishedWork.memoizedProps.onRender;
          onRender(finishedWork.memoizedProps.id, current === null ? 'mount' : 'update', finishedWork.actualDuration, finishedWork.treeBaseTime, finishedWork.actualStartTime, getCommitTime());
        }
        return;
      }
    case TimeoutComponent:
      {
        return;
      }
    default:
      {
        invariant(false, 'This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.');
      }
  }
}

function commitResetTextContent(current) {
  if (!supportsMutation) {
    return;
  }
  resetTextContent(current.stateNode);
}

function createRootErrorUpdate(fiber, errorInfo, expirationTime) {
  var update = createUpdate(expirationTime);
  // Unmount the root by rendering null.
  update.tag = CaptureUpdate;
  // Caution: React DevTools currently depends on this property
  // being called "element".
  update.payload = { element: null };
  var error = errorInfo.value;
  update.callback = function () {
    onUncaughtError(error);
    logError(fiber, errorInfo);
  };
  return update;
}

function createClassErrorUpdate(fiber, errorInfo, expirationTime) {
  var update = createUpdate(expirationTime);
  update.tag = CaptureUpdate;
  var getDerivedStateFromCatch = fiber.type.getDerivedStateFromCatch;
  if (enableGetDerivedStateFromCatch && typeof getDerivedStateFromCatch === 'function') {
    var error = errorInfo.value;
    update.payload = function () {
      return getDerivedStateFromCatch(error);
    };
  }

  var inst = fiber.stateNode;
  if (inst !== null && typeof inst.componentDidCatch === 'function') {
    update.callback = function callback() {
      if (!enableGetDerivedStateFromCatch || getDerivedStateFromCatch !== 'function') {
        // To preserve the preexisting retry behavior of error boundaries,
        // we keep track of which ones already failed during this batch.
        // This gets reset before we yield back to the browser.
        // TODO: Warn in strict mode if getDerivedStateFromCatch is
        // not defined.
        markLegacyErrorBoundaryAsFailed(this);
      }
      var error = errorInfo.value;
      var stack = errorInfo.stack;
      logError(fiber, errorInfo);
      this.componentDidCatch(error, {
        componentStack: stack !== null ? stack : ''
      });
    };
  }
  return update;
}

function schedulePing(finishedWork) {
  // Once the promise resolves, we should try rendering the non-
  // placeholder state again.
  var currentTime = recalculateCurrentTime();
  var expirationTime = computeExpirationForFiber(currentTime, finishedWork);
  var recoveryUpdate = createUpdate(expirationTime);
  enqueueUpdate(finishedWork, recoveryUpdate, expirationTime);
  scheduleWork(finishedWork, expirationTime);
}

function throwException(root, returnFiber, sourceFiber, value, renderIsExpired, renderExpirationTime, currentTimeMs) {
  // The source fiber did not complete.
  sourceFiber.effectTag |= Incomplete;
  // Its effect list is no longer valid.
  sourceFiber.firstEffect = sourceFiber.lastEffect = null;

  if (enableSuspense && value !== null && typeof value === 'object' && typeof value.then === 'function') {
    // This is a thenable.
    var thenable = value;

    var expirationTimeMs = expirationTimeToMs(renderExpirationTime);
    var startTimeMs = expirationTimeMs - 5000;
    var elapsedMs = currentTimeMs - startTimeMs;
    if (elapsedMs < 0) {
      elapsedMs = 0;
    }
    var remainingTimeMs = expirationTimeMs - currentTimeMs;

    // Find the earliest timeout of all the timeouts in the ancestor path.
    // TODO: Alternatively, we could store the earliest timeout on the context
    // stack, rather than searching on every suspend.
    var _workInProgress = returnFiber;
    var earliestTimeoutMs = -1;
    searchForEarliestTimeout: do {
      if (_workInProgress.tag === TimeoutComponent) {
        var current = _workInProgress.alternate;
        if (current !== null && current.memoizedState === true) {
          // A parent Timeout already committed in a placeholder state. We
          // need to handle this promise immediately. In other words, we
          // should never suspend inside a tree that already expired.
          earliestTimeoutMs = 0;
          break searchForEarliestTimeout;
        }
        var timeoutPropMs = _workInProgress.pendingProps.ms;
        if (typeof timeoutPropMs === 'number') {
          if (timeoutPropMs <= 0) {
            earliestTimeoutMs = 0;
            break searchForEarliestTimeout;
          } else if (earliestTimeoutMs === -1 || timeoutPropMs < earliestTimeoutMs) {
            earliestTimeoutMs = timeoutPropMs;
          }
        } else if (earliestTimeoutMs === -1) {
          earliestTimeoutMs = remainingTimeMs;
        }
      }
      _workInProgress = _workInProgress.return;
    } while (_workInProgress !== null);

    // Compute the remaining time until the timeout.
    var msUntilTimeout = earliestTimeoutMs - elapsedMs;

    if (renderExpirationTime === Never || msUntilTimeout > 0) {
      // There's still time remaining.
      suspendRoot(root, thenable, msUntilTimeout, renderExpirationTime);
      var onResolveOrReject = function () {
        retrySuspendedRoot(root, renderExpirationTime);
      };
      thenable.then(onResolveOrReject, onResolveOrReject);
      return;
    } else {
      // No time remaining. Need to fallback to placeholder.
      // Find the nearest timeout that can be retried.
      _workInProgress = returnFiber;
      do {
        switch (_workInProgress.tag) {
          case HostRoot:
            {
              // The root expired, but no fallback was provided. Throw a
              // helpful error.
              var message = renderExpirationTime === Sync ? 'A synchronous update was suspended, but no fallback UI ' + 'was provided.' : 'An update was suspended for longer than the timeout, ' + 'but no fallback UI was provided.';
              value = new Error(message);
              break;
            }
          case TimeoutComponent:
            {
              if ((_workInProgress.effectTag & DidCapture) === NoEffect) {
                _workInProgress.effectTag |= ShouldCapture;
                var _onResolveOrReject = schedulePing.bind(null, _workInProgress);
                thenable.then(_onResolveOrReject, _onResolveOrReject);
                return;
              }
              // Already captured during this render. Continue to the next
              // Timeout ancestor.
              break;
            }
        }
        _workInProgress = _workInProgress.return;
      } while (_workInProgress !== null);
    }
  }

  // We didn't find a boundary that could handle this type of exception. Start
  // over and traverse parent path again, this time treating the exception
  // as an error.
  value = createCapturedValue(value, sourceFiber);
  var workInProgress = returnFiber;
  do {
    switch (workInProgress.tag) {
      case HostRoot:
        {
          var _errorInfo = value;
          workInProgress.effectTag |= ShouldCapture;
          var update = createRootErrorUpdate(workInProgress, _errorInfo, renderExpirationTime);
          enqueueCapturedUpdate(workInProgress, update, renderExpirationTime);
          return;
        }
      case ClassComponent:
        // Capture and retry
        var errorInfo = value;
        var ctor = workInProgress.type;
        var instance = workInProgress.stateNode;
        if ((workInProgress.effectTag & DidCapture) === NoEffect && (typeof ctor.getDerivedStateFromCatch === 'function' && enableGetDerivedStateFromCatch || instance !== null && typeof instance.componentDidCatch === 'function' && !isAlreadyFailedLegacyErrorBoundary(instance))) {
          workInProgress.effectTag |= ShouldCapture;
          // Schedule the error boundary to re-render using updated state
          var _update = createClassErrorUpdate(workInProgress, errorInfo, renderExpirationTime);
          enqueueCapturedUpdate(workInProgress, _update, renderExpirationTime);
          return;
        }
        break;
      default:
        break;
    }
    workInProgress = workInProgress.return;
  } while (workInProgress !== null);
}

function unwindWork(workInProgress, renderIsExpired, renderExpirationTime) {
  if (enableProfilerTimer) {
    if (workInProgress.mode & ProfileMode) {
      recordElapsedActualRenderTime(workInProgress);
    }
  }

  switch (workInProgress.tag) {
    case ClassComponent:
      {
        popContextProvider(workInProgress);
        var effectTag = workInProgress.effectTag;
        if (effectTag & ShouldCapture) {
          workInProgress.effectTag = effectTag & ~ShouldCapture | DidCapture;
          return workInProgress;
        }
        return null;
      }
    case HostRoot:
      {
        popHostContainer(workInProgress);
        popTopLevelContextObject(workInProgress);
        var _effectTag = workInProgress.effectTag;
        if (_effectTag & ShouldCapture) {
          workInProgress.effectTag = _effectTag & ~ShouldCapture | DidCapture;
          return workInProgress;
        }
        return null;
      }
    case HostComponent:
      {
        popHostContext(workInProgress);
        return null;
      }
    case TimeoutComponent:
      {
        var _effectTag2 = workInProgress.effectTag;
        if (_effectTag2 & ShouldCapture) {
          workInProgress.effectTag = _effectTag2 & ~ShouldCapture | DidCapture;
          return workInProgress;
        }
        return null;
      }
    case HostPortal:
      popHostContainer(workInProgress);
      return null;
    case ContextProvider:
      popProvider(workInProgress);
      return null;
    default:
      return null;
  }
}

function unwindInterruptedWork(interruptedWork) {
  if (enableProfilerTimer) {
    if (interruptedWork.mode & ProfileMode) {
      // Resume in case we're picking up on work that was paused.
      resumeActualRenderTimerIfPaused();
      recordElapsedActualRenderTime(interruptedWork);
    }
  }

  switch (interruptedWork.tag) {
    case ClassComponent:
      {
        popContextProvider(interruptedWork);
        break;
      }
    case HostRoot:
      {
        popHostContainer(interruptedWork);
        popTopLevelContextObject(interruptedWork);
        break;
      }
    case HostComponent:
      {
        popHostContext(interruptedWork);
        break;
      }
    case HostPortal:
      popHostContainer(interruptedWork);
      break;
    case ContextProvider:
      popProvider(interruptedWork);
      break;
    default:
      break;
  }
}

var invokeGuardedCallback = ReactErrorUtils.invokeGuardedCallback;
var hasCaughtError = ReactErrorUtils.hasCaughtError;
var clearCaughtError = ReactErrorUtils.clearCaughtError;


var didWarnAboutStateTransition = void 0;
var didWarnSetStateChildContext = void 0;
var warnAboutUpdateOnUnmounted = void 0;
var warnAboutInvalidUpdates = void 0;

{
  didWarnAboutStateTransition = false;
  didWarnSetStateChildContext = false;
  var didWarnStateUpdateForUnmountedComponent = {};

  warnAboutUpdateOnUnmounted = function (fiber) {
    // We show the whole stack but dedupe on the top component's name because
    // the problematic code almost always lies inside that component.
    var componentName = getComponentName(fiber) || 'ReactClass';
    if (didWarnStateUpdateForUnmountedComponent[componentName]) {
      return;
    }
    warning(false, "Can't call setState (or forceUpdate) on an unmounted component. This " + 'is a no-op, but it indicates a memory leak in your application. To ' + 'fix, cancel all subscriptions and asynchronous tasks in the ' + 'componentWillUnmount method.%s', getStackAddendumByWorkInProgressFiber(fiber));
    didWarnStateUpdateForUnmountedComponent[componentName] = true;
  };

  warnAboutInvalidUpdates = function (instance) {
    switch (ReactDebugCurrentFiber.phase) {
      case 'getChildContext':
        if (didWarnSetStateChildContext) {
          return;
        }
        warning(false, 'setState(...): Cannot call setState() inside getChildContext()');
        didWarnSetStateChildContext = true;
        break;
      case 'render':
        if (didWarnAboutStateTransition) {
          return;
        }
        warning(false, 'Cannot update during an existing state transition (such as within ' + "`render` or another component's constructor). Render methods should " + 'be a pure function of props and state; constructor side-effects are ' + 'an anti-pattern, but can be moved to `componentWillMount`.');
        didWarnAboutStateTransition = true;
        break;
    }
  };
}

// Represents the current time in ms.
var originalStartTimeMs = now();
var mostRecentCurrentTime = msToExpirationTime(0);
var mostRecentCurrentTimeMs = originalStartTimeMs;

// Used to ensure computeUniqueAsyncExpiration is monotonically increases.
var lastUniqueAsyncExpiration = 0;

// Represents the expiration time that incoming updates should use. (If this
// is NoWork, use the default strategy: async updates in async mode, sync
// updates in sync mode.)
var expirationContext = NoWork;

var isWorking = false;

// The next work in progress fiber that we're currently working on.
var nextUnitOfWork = null;
var nextRoot = null;
// The time at which we're currently rendering work.
var nextRenderExpirationTime = NoWork;
var nextLatestTimeoutMs = -1;
var nextRenderIsExpired = false;

// The next fiber with an effect that we're currently committing.
var nextEffect = null;

var isCommitting$1 = false;

var isRootReadyForCommit = false;

var legacyErrorBoundariesThatAlreadyFailed = null;

// Used for performance tracking.
var interruptedBy = null;

var stashedWorkInProgressProperties = void 0;
var replayUnitOfWork = void 0;
var isReplayingFailedUnitOfWork = void 0;
var originalReplayError = void 0;
var rethrowOriginalError = void 0;
if (true && replayFailedUnitOfWorkWithInvokeGuardedCallback) {
  stashedWorkInProgressProperties = null;
  isReplayingFailedUnitOfWork = false;
  originalReplayError = null;
  replayUnitOfWork = function (failedUnitOfWork, thrownValue, isAsync) {
    if (thrownValue !== null && typeof thrownValue === 'object' && typeof thrownValue.then === 'function') {
      // Don't replay promises. Treat everything else like an error.
      // TODO: Need to figure out a different strategy if/when we add
      // support for catching other types.
      return;
    }

    // Restore the original state of the work-in-progress
    if (stashedWorkInProgressProperties === null) {
      // This should never happen. Don't throw because this code is DEV-only.
      warning(false, 'Could not replay rendering after an error. This is likely a bug in React. ' + 'Please file an issue.');
      return;
    }
    assignFiberPropertiesInDEV(failedUnitOfWork, stashedWorkInProgressProperties);

    switch (failedUnitOfWork.tag) {
      case HostRoot:
        popHostContainer(failedUnitOfWork);
        popTopLevelContextObject(failedUnitOfWork);
        break;
      case HostComponent:
        popHostContext(failedUnitOfWork);
        break;
      case ClassComponent:
        popContextProvider(failedUnitOfWork);
        break;
      case HostPortal:
        popHostContainer(failedUnitOfWork);
        break;
      case ContextProvider:
        popProvider(failedUnitOfWork);
        break;
    }
    // Replay the begin phase.
    isReplayingFailedUnitOfWork = true;
    originalReplayError = thrownValue;
    invokeGuardedCallback(null, workLoop, null, isAsync);
    isReplayingFailedUnitOfWork = false;
    originalReplayError = null;
    if (hasCaughtError()) {
      clearCaughtError();

      if (enableProfilerTimer) {
        if (failedUnitOfWork.mode & ProfileMode) {
          recordElapsedActualRenderTime(failedUnitOfWork);
        }

        // Stop "base" render timer again (after the re-thrown error).
        stopBaseRenderTimerIfRunning();
      }
    } else {
      // If the begin phase did not fail the second time, set this pointer
      // back to the original value.
      nextUnitOfWork = failedUnitOfWork;
    }
  };
  rethrowOriginalError = function () {
    throw originalReplayError;
  };
}

function resetStack() {
  if (nextUnitOfWork !== null) {
    var interruptedWork = nextUnitOfWork.return;
    while (interruptedWork !== null) {
      unwindInterruptedWork(interruptedWork);
      interruptedWork = interruptedWork.return;
    }
  }

  {
    ReactStrictModeWarnings.discardPendingWarnings();
    checkThatStackIsEmpty();
  }

  nextRoot = null;
  nextRenderExpirationTime = NoWork;
  nextLatestTimeoutMs = -1;
  nextRenderIsExpired = false;
  nextUnitOfWork = null;

  isRootReadyForCommit = false;
}

function commitAllHostEffects() {
  while (nextEffect !== null) {
    {
      ReactDebugCurrentFiber.setCurrentFiber(nextEffect);
    }
    recordEffect();

    var effectTag = nextEffect.effectTag;

    if (effectTag & ContentReset) {
      commitResetTextContent(nextEffect);
    }

    if (effectTag & Ref) {
      var current = nextEffect.alternate;
      if (current !== null) {
        commitDetachRef(current);
      }
    }

    // The following switch statement is only concerned about placement,
    // updates, and deletions. To avoid needing to add a case for every
    // possible bitmap value, we remove the secondary effects from the
    // effect tag and switch on that value.
    var primaryEffectTag = effectTag & (Placement | Update | Deletion);
    switch (primaryEffectTag) {
      case Placement:
        {
          commitPlacement(nextEffect);
          // Clear the "placement" from effect tag so that we know that this is inserted, before
          // any life-cycles like componentDidMount gets called.
          // TODO: findDOMNode doesn't rely on this any more but isMounted
          // does and isMounted is deprecated anyway so we should be able
          // to kill this.
          nextEffect.effectTag &= ~Placement;
          break;
        }
      case PlacementAndUpdate:
        {
          // Placement
          commitPlacement(nextEffect);
          // Clear the "placement" from effect tag so that we know that this is inserted, before
          // any life-cycles like componentDidMount gets called.
          nextEffect.effectTag &= ~Placement;

          // Update
          var _current = nextEffect.alternate;
          commitWork(_current, nextEffect);
          break;
        }
      case Update:
        {
          var _current2 = nextEffect.alternate;
          commitWork(_current2, nextEffect);
          break;
        }
      case Deletion:
        {
          commitDeletion(nextEffect);
          break;
        }
    }
    nextEffect = nextEffect.nextEffect;
  }

  {
    ReactDebugCurrentFiber.resetCurrentFiber();
  }
}

function commitBeforeMutationLifecycles() {
  while (nextEffect !== null) {
    var effectTag = nextEffect.effectTag;

    if (effectTag & Snapshot) {
      recordEffect();
      var current = nextEffect.alternate;
      commitBeforeMutationLifeCycles(current, nextEffect);
    }

    // Don't cleanup effects yet;
    // This will be done by commitAllLifeCycles()
    nextEffect = nextEffect.nextEffect;
  }
}

function commitAllLifeCycles(finishedRoot, currentTime, committedExpirationTime) {
  {
    ReactStrictModeWarnings.flushPendingUnsafeLifecycleWarnings();

    if (warnAboutDeprecatedLifecycles) {
      ReactStrictModeWarnings.flushPendingDeprecationWarnings();
    }

    if (warnAboutLegacyContextAPI) {
      ReactStrictModeWarnings.flushLegacyContextWarning();
    }
  }
  while (nextEffect !== null) {
    var effectTag = nextEffect.effectTag;

    if (effectTag & (Update | Callback)) {
      recordEffect();
      var current = nextEffect.alternate;
      commitLifeCycles(finishedRoot, current, nextEffect, currentTime, committedExpirationTime);
    }

    if (effectTag & Ref) {
      recordEffect();
      commitAttachRef(nextEffect);
    }

    var next = nextEffect.nextEffect;
    // Ensure that we clean these up so that we don't accidentally keep them.
    // I'm not actually sure this matters because we can't reset firstEffect
    // and lastEffect since they're on every node, not just the effectful
    // ones. So we have to clean everything as we reuse nodes anyway.
    nextEffect.nextEffect = null;
    // Ensure that we reset the effectTag here so that we can rely on effect
    // tags to reason about the current life-cycle.
    nextEffect = next;
  }
}

function isAlreadyFailedLegacyErrorBoundary(instance) {
  return legacyErrorBoundariesThatAlreadyFailed !== null && legacyErrorBoundariesThatAlreadyFailed.has(instance);
}

function markLegacyErrorBoundaryAsFailed(instance) {
  if (legacyErrorBoundariesThatAlreadyFailed === null) {
    legacyErrorBoundariesThatAlreadyFailed = new Set([instance]);
  } else {
    legacyErrorBoundariesThatAlreadyFailed.add(instance);
  }
}

function commitRoot(finishedWork) {
  isWorking = true;
  isCommitting$1 = true;
  startCommitTimer();

  var root = finishedWork.stateNode;
  !(root.current !== finishedWork) ? invariant(false, 'Cannot commit the same tree as before. This is probably a bug related to the return field. This error is likely caused by a bug in React. Please file an issue.') : void 0;
  var committedExpirationTime = root.pendingCommitExpirationTime;
  !(committedExpirationTime !== NoWork) ? invariant(false, 'Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.') : void 0;
  root.pendingCommitExpirationTime = NoWork;

  var currentTime = recalculateCurrentTime();

  // Reset this to null before calling lifecycles
  ReactCurrentOwner.current = null;

  var firstEffect = void 0;
  if (finishedWork.effectTag > PerformedWork) {
    // A fiber's effect list consists only of its children, not itself. So if
    // the root has an effect, we need to add it to the end of the list. The
    // resulting list is the set that would belong to the root's parent, if
    // it had one; that is, all the effects in the tree including the root.
    if (finishedWork.lastEffect !== null) {
      finishedWork.lastEffect.nextEffect = finishedWork;
      firstEffect = finishedWork.firstEffect;
    } else {
      firstEffect = finishedWork;
    }
  } else {
    // There is no effect on the root.
    firstEffect = finishedWork.firstEffect;
  }

  prepareForCommit(root.containerInfo);

  // Invoke instances of getSnapshotBeforeUpdate before mutation.
  nextEffect = firstEffect;
  startCommitSnapshotEffectsTimer();
  while (nextEffect !== null) {
    var didError = false;
    var error = void 0;
    {
      invokeGuardedCallback(null, commitBeforeMutationLifecycles, null);
      if (hasCaughtError()) {
        didError = true;
        error = clearCaughtError();
      }
    }
    if (didError) {
      !(nextEffect !== null) ? invariant(false, 'Should have next effect. This error is likely caused by a bug in React. Please file an issue.') : void 0;
      captureCommitPhaseError(nextEffect, error);
      // Clean-up
      if (nextEffect !== null) {
        nextEffect = nextEffect.nextEffect;
      }
    }
  }
  stopCommitSnapshotEffectsTimer();

  if (enableProfilerTimer) {
    // Mark the current commit time to be shared by all Profilers in this batch.
    // This enables them to be grouped later.
    recordCommitTime();
  }

  // Commit all the side-effects within a tree. We'll do this in two passes.
  // The first pass performs all the host insertions, updates, deletions and
  // ref unmounts.
  nextEffect = firstEffect;
  startCommitHostEffectsTimer();
  while (nextEffect !== null) {
    var _didError = false;
    var _error = void 0;
    {
      invokeGuardedCallback(null, commitAllHostEffects, null);
      if (hasCaughtError()) {
        _didError = true;
        _error = clearCaughtError();
      }
    }
    if (_didError) {
      !(nextEffect !== null) ? invariant(false, 'Should have next effect. This error is likely caused by a bug in React. Please file an issue.') : void 0;
      captureCommitPhaseError(nextEffect, _error);
      // Clean-up
      if (nextEffect !== null) {
        nextEffect = nextEffect.nextEffect;
      }
    }
  }
  stopCommitHostEffectsTimer();

  resetAfterCommit(root.containerInfo);

  // The work-in-progress tree is now the current tree. This must come after
  // the first pass of the commit phase, so that the previous tree is still
  // current during componentWillUnmount, but before the second pass, so that
  // the finished work is current during componentDidMount/Update.
  root.current = finishedWork;

  // In the second pass we'll perform all life-cycles and ref callbacks.
  // Life-cycles happen as a separate pass so that all placements, updates,
  // and deletions in the entire tree have already been invoked.
  // This pass also triggers any renderer-specific initial effects.
  nextEffect = firstEffect;
  startCommitLifeCyclesTimer();
  while (nextEffect !== null) {
    var _didError2 = false;
    var _error2 = void 0;
    {
      invokeGuardedCallback(null, commitAllLifeCycles, null, root, currentTime, committedExpirationTime);
      if (hasCaughtError()) {
        _didError2 = true;
        _error2 = clearCaughtError();
      }
    }
    if (_didError2) {
      !(nextEffect !== null) ? invariant(false, 'Should have next effect. This error is likely caused by a bug in React. Please file an issue.') : void 0;
      captureCommitPhaseError(nextEffect, _error2);
      if (nextEffect !== null) {
        nextEffect = nextEffect.nextEffect;
      }
    }
  }

  if (enableProfilerTimer) {
    {
      checkActualRenderTimeStackEmpty();
    }
    resetActualRenderTimer();
  }

  isCommitting$1 = false;
  isWorking = false;
  stopCommitLifeCyclesTimer();
  stopCommitTimer();
  if (typeof onCommitRoot === 'function') {
    onCommitRoot(finishedWork.stateNode);
  }
  if (true && ReactFiberInstrumentation_1.debugTool) {
    ReactFiberInstrumentation_1.debugTool.onCommitWork(finishedWork);
  }

  markCommittedPriorityLevels(root, currentTime, root.current.expirationTime);
  var remainingTime = findNextPendingPriorityLevel(root);
  if (remainingTime === NoWork) {
    // If there's no remaining work, we can clear the set of already failed
    // error boundaries.
    legacyErrorBoundariesThatAlreadyFailed = null;
  }
  return remainingTime;
}

function resetExpirationTime(workInProgress, renderTime) {
  if (renderTime !== Never && workInProgress.expirationTime === Never) {
    // The children of this component are hidden. Don't bubble their
    // expiration times.
    return;
  }

  // Check for pending updates.
  var newExpirationTime = NoWork;
  switch (workInProgress.tag) {
    case HostRoot:
    case ClassComponent:
      {
        var updateQueue = workInProgress.updateQueue;
        if (updateQueue !== null) {
          newExpirationTime = updateQueue.expirationTime;
        }
      }
  }

  // TODO: Calls need to visit stateNode

  // Bubble up the earliest expiration time.
  // (And "base" render timers if that feature flag is enabled)
  if (enableProfilerTimer && workInProgress.mode & ProfileMode) {
    var treeBaseTime = workInProgress.selfBaseTime;
    var child = workInProgress.child;
    while (child !== null) {
      treeBaseTime += child.treeBaseTime;
      if (child.expirationTime !== NoWork && (newExpirationTime === NoWork || newExpirationTime > child.expirationTime)) {
        newExpirationTime = child.expirationTime;
      }
      child = child.sibling;
    }
    workInProgress.treeBaseTime = treeBaseTime;
  } else {
    var _child = workInProgress.child;
    while (_child !== null) {
      if (_child.expirationTime !== NoWork && (newExpirationTime === NoWork || newExpirationTime > _child.expirationTime)) {
        newExpirationTime = _child.expirationTime;
      }
      _child = _child.sibling;
    }
  }

  workInProgress.expirationTime = newExpirationTime;
}

function completeUnitOfWork(workInProgress) {
  // Attempt to complete the current unit of work, then move to the
  // next sibling. If there are no more siblings, return to the
  // parent fiber.
  while (true) {
    // The current, flushed, state of this fiber is the alternate.
    // Ideally nothing should rely on this, but relying on it here
    // means that we don't need an additional field on the work in
    // progress.
    var current = workInProgress.alternate;
    {
      ReactDebugCurrentFiber.setCurrentFiber(workInProgress);
    }

    var returnFiber = workInProgress.return;
    var siblingFiber = workInProgress.sibling;

    if ((workInProgress.effectTag & Incomplete) === NoEffect) {
      // This fiber completed.
      var next = completeWork(current, workInProgress, nextRenderExpirationTime);
      stopWorkTimer(workInProgress);
      resetExpirationTime(workInProgress, nextRenderExpirationTime);
      {
        ReactDebugCurrentFiber.resetCurrentFiber();
      }

      if (next !== null) {
        stopWorkTimer(workInProgress);
        if (true && ReactFiberInstrumentation_1.debugTool) {
          ReactFiberInstrumentation_1.debugTool.onCompleteWork(workInProgress);
        }
        // If completing this work spawned new work, do that next. We'll come
        // back here again.
        return next;
      }

      if (returnFiber !== null &&
      // Do not append effects to parents if a sibling failed to complete
      (returnFiber.effectTag & Incomplete) === NoEffect) {
        // Append all the effects of the subtree and this fiber onto the effect
        // list of the parent. The completion order of the children affects the
        // side-effect order.
        if (returnFiber.firstEffect === null) {
          returnFiber.firstEffect = workInProgress.firstEffect;
        }
        if (workInProgress.lastEffect !== null) {
          if (returnFiber.lastEffect !== null) {
            returnFiber.lastEffect.nextEffect = workInProgress.firstEffect;
          }
          returnFiber.lastEffect = workInProgress.lastEffect;
        }

        // If this fiber had side-effects, we append it AFTER the children's
        // side-effects. We can perform certain side-effects earlier if
        // needed, by doing multiple passes over the effect list. We don't want
        // to schedule our own side-effect on our own list because if end up
        // reusing children we'll schedule this effect onto itself since we're
        // at the end.
        var effectTag = workInProgress.effectTag;
        // Skip both NoWork and PerformedWork tags when creating the effect list.
        // PerformedWork effect is read by React DevTools but shouldn't be committed.
        if (effectTag > PerformedWork) {
          if (returnFiber.lastEffect !== null) {
            returnFiber.lastEffect.nextEffect = workInProgress;
          } else {
            returnFiber.firstEffect = workInProgress;
          }
          returnFiber.lastEffect = workInProgress;
        }
      }

      if (true && ReactFiberInstrumentation_1.debugTool) {
        ReactFiberInstrumentation_1.debugTool.onCompleteWork(workInProgress);
      }

      if (siblingFiber !== null) {
        // If there is more work to do in this returnFiber, do that next.
        return siblingFiber;
      } else if (returnFiber !== null) {
        // If there's no more work in this returnFiber. Complete the returnFiber.
        workInProgress = returnFiber;
        continue;
      } else {
        // We've reached the root.
        isRootReadyForCommit = true;
        return null;
      }
    } else {
      // This fiber did not complete because something threw. Pop values off
      // the stack without entering the complete phase. If this is a boundary,
      // capture values if possible.
      var _next = unwindWork(workInProgress, nextRenderIsExpired, nextRenderExpirationTime);
      // Because this fiber did not complete, don't reset its expiration time.
      if (workInProgress.effectTag & DidCapture) {
        // Restarting an error boundary
        stopFailedWorkTimer(workInProgress);
      } else {
        stopWorkTimer(workInProgress);
      }

      {
        ReactDebugCurrentFiber.resetCurrentFiber();
      }

      if (_next !== null) {
        stopWorkTimer(workInProgress);
        if (true && ReactFiberInstrumentation_1.debugTool) {
          ReactFiberInstrumentation_1.debugTool.onCompleteWork(workInProgress);
        }
        // If completing this work spawned new work, do that next. We'll come
        // back here again.
        // Since we're restarting, remove anything that is not a host effect
        // from the effect tag.
        _next.effectTag &= HostEffectMask;
        return _next;
      }

      if (returnFiber !== null) {
        // Mark the parent fiber as incomplete and clear its effect list.
        returnFiber.firstEffect = returnFiber.lastEffect = null;
        returnFiber.effectTag |= Incomplete;
      }

      if (true && ReactFiberInstrumentation_1.debugTool) {
        ReactFiberInstrumentation_1.debugTool.onCompleteWork(workInProgress);
      }

      if (siblingFiber !== null) {
        // If there is more work to do in this returnFiber, do that next.
        return siblingFiber;
      } else if (returnFiber !== null) {
        // If there's no more work in this returnFiber. Complete the returnFiber.
        workInProgress = returnFiber;
        continue;
      } else {
        return null;
      }
    }
  }

  // Without this explicit null return Flow complains of invalid return type
  // TODO Remove the above while(true) loop
  // eslint-disable-next-line no-unreachable
  return null;
}

function performUnitOfWork(workInProgress) {
  // The current, flushed, state of this fiber is the alternate.
  // Ideally nothing should rely on this, but relying on it here
  // means that we don't need an additional field on the work in
  // progress.
  var current = workInProgress.alternate;

  // See if beginning this work spawns more work.
  startWorkTimer(workInProgress);
  {
    ReactDebugCurrentFiber.setCurrentFiber(workInProgress);
  }

  if (true && replayFailedUnitOfWorkWithInvokeGuardedCallback) {
    stashedWorkInProgressProperties = assignFiberPropertiesInDEV(stashedWorkInProgressProperties, workInProgress);
  }

  var next = void 0;
  if (enableProfilerTimer) {
    if (workInProgress.mode & ProfileMode) {
      startBaseRenderTimer();
    }

    next = beginWork(current, workInProgress, nextRenderExpirationTime);

    if (workInProgress.mode & ProfileMode) {
      // Update "base" time if the render wasn't bailed out on.
      recordElapsedBaseRenderTimeIfRunning(workInProgress);
      stopBaseRenderTimerIfRunning();
    }
  } else {
    next = beginWork(current, workInProgress, nextRenderExpirationTime);
  }

  {
    ReactDebugCurrentFiber.resetCurrentFiber();
    if (isReplayingFailedUnitOfWork) {
      // Currently replaying a failed unit of work. This should be unreachable,
      // because the render phase is meant to be idempotent, and it should
      // have thrown again. Since it didn't, rethrow the original error, so
      // React's internal stack is not misaligned.
      rethrowOriginalError();
    }
  }
  if (true && ReactFiberInstrumentation_1.debugTool) {
    ReactFiberInstrumentation_1.debugTool.onBeginWork(workInProgress);
  }

  if (next === null) {
    // If this doesn't spawn new work, complete the current work.
    next = completeUnitOfWork(workInProgress);
  }

  ReactCurrentOwner.current = null;

  return next;
}

function workLoop(isAsync) {
  if (!isAsync) {
    // Flush all expired work.
    while (nextUnitOfWork !== null) {
      nextUnitOfWork = performUnitOfWork(nextUnitOfWork);
    }
  } else {
    // Flush asynchronous work until the deadline runs out of time.
    while (nextUnitOfWork !== null && !shouldYield()) {
      nextUnitOfWork = performUnitOfWork(nextUnitOfWork);
    }

    if (enableProfilerTimer) {
      // If we didn't finish, pause the "actual" render timer.
      // We'll restart it when we resume work.
      pauseActualRenderTimerIfRunning();
    }
  }
}

function renderRoot(root, expirationTime, isAsync) {
  !!isWorking ? invariant(false, 'renderRoot was called recursively. This error is likely caused by a bug in React. Please file an issue.') : void 0;
  isWorking = true;

  // Check if we're starting from a fresh stack, or if we're resuming from
  // previously yielded work.
  if (expirationTime !== nextRenderExpirationTime || root !== nextRoot || nextUnitOfWork === null) {
    // Reset the stack and start working from the root.
    resetStack();
    nextRoot = root;
    nextRenderExpirationTime = expirationTime;
    nextLatestTimeoutMs = -1;
    nextUnitOfWork = createWorkInProgress(nextRoot.current, null, nextRenderExpirationTime);
    root.pendingCommitExpirationTime = NoWork;
  }

  var didFatal = false;

  nextRenderIsExpired = !isAsync || nextRenderExpirationTime <= mostRecentCurrentTime;

  startWorkLoopTimer(nextUnitOfWork);

  do {
    try {
      workLoop(isAsync);
    } catch (thrownValue) {
      if (enableProfilerTimer) {
        // Stop "base" render timer in the event of an error.
        stopBaseRenderTimerIfRunning();
      }

      if (nextUnitOfWork === null) {
        // This is a fatal error.
        didFatal = true;
        onUncaughtError(thrownValue);
      } else {
        {
          // Reset global debug state
          // We assume this is defined in DEV
          resetCurrentlyProcessingQueue();
        }

        var failedUnitOfWork = nextUnitOfWork;
        if (true && replayFailedUnitOfWorkWithInvokeGuardedCallback) {
          replayUnitOfWork(failedUnitOfWork, thrownValue, isAsync);
        }

        // TODO: we already know this isn't true in some cases.
        // At least this shows a nicer error message until we figure out the cause.
        // https://github.com/facebook/react/issues/12449#issuecomment-386727431
        !(nextUnitOfWork !== null) ? invariant(false, 'Failed to replay rendering after an error. This is likely caused by a bug in React. Please file an issue with a reproducing case to help us find it.') : void 0;

        var sourceFiber = nextUnitOfWork;
        var returnFiber = sourceFiber.return;
        if (returnFiber === null) {
          // This is the root. The root could capture its own errors. However,
          // we don't know if it errors before or after we pushed the host
          // context. This information is needed to avoid a stack mismatch.
          // Because we're not sure, treat this as a fatal error. We could track
          // which phase it fails in, but doesn't seem worth it. At least
          // for now.
          didFatal = true;
          onUncaughtError(thrownValue);
          break;
        }
        throwException(root, returnFiber, sourceFiber, thrownValue, nextRenderIsExpired, nextRenderExpirationTime, mostRecentCurrentTimeMs);
        nextUnitOfWork = completeUnitOfWork(sourceFiber);
      }
    }
    break;
  } while (true);

  // We're done performing work. Time to clean up.
  var didCompleteRoot = false;
  isWorking = false;

  // Yield back to main thread.
  if (didFatal) {
    stopWorkLoopTimer(interruptedBy, didCompleteRoot);
    interruptedBy = null;
    // There was a fatal error.
    {
      resetStackAfterFatalErrorInDev();
    }
    return null;
  } else if (nextUnitOfWork === null) {
    // We reached the root.
    if (isRootReadyForCommit) {
      didCompleteRoot = true;
      stopWorkLoopTimer(interruptedBy, didCompleteRoot);
      interruptedBy = null;
      // The root successfully completed. It's ready for commit.
      root.pendingCommitExpirationTime = expirationTime;
      var finishedWork = root.current.alternate;
      return finishedWork;
    } else {
      // The root did not complete.
      stopWorkLoopTimer(interruptedBy, didCompleteRoot);
      interruptedBy = null;
      !!nextRenderIsExpired ? invariant(false, 'Expired work should have completed. This error is likely caused by a bug in React. Please file an issue.') : void 0;
      markSuspendedPriorityLevel(root, expirationTime);
      if (nextLatestTimeoutMs >= 0) {
        setTimeout(function () {
          retrySuspendedRoot(root, expirationTime);
        }, nextLatestTimeoutMs);
      }
      var firstUnblockedExpirationTime = findNextPendingPriorityLevel(root);
      onBlock(firstUnblockedExpirationTime);
      return null;
    }
  } else {
    stopWorkLoopTimer(interruptedBy, didCompleteRoot);
    interruptedBy = null;
    // There's more work to do, but we ran out of time. Yield back to
    // the renderer.
    return null;
  }
}

function dispatch(sourceFiber, value, expirationTime) {
  !(!isWorking || isCommitting$1) ? invariant(false, 'dispatch: Cannot dispatch during the render phase.') : void 0;

  var fiber = sourceFiber.return;
  while (fiber !== null) {
    switch (fiber.tag) {
      case ClassComponent:
        var ctor = fiber.type;
        var instance = fiber.stateNode;
        if (typeof ctor.getDerivedStateFromCatch === 'function' || typeof instance.componentDidCatch === 'function' && !isAlreadyFailedLegacyErrorBoundary(instance)) {
          var errorInfo = createCapturedValue(value, sourceFiber);
          var update = createClassErrorUpdate(fiber, errorInfo, expirationTime);
          enqueueUpdate(fiber, update, expirationTime);
          scheduleWork(fiber, expirationTime);
          return;
        }
        break;
      case HostRoot:
        {
          var _errorInfo = createCapturedValue(value, sourceFiber);
          var _update = createRootErrorUpdate(fiber, _errorInfo, expirationTime);
          enqueueUpdate(fiber, _update, expirationTime);
          scheduleWork(fiber, expirationTime);
          return;
        }
    }
    fiber = fiber.return;
  }

  if (sourceFiber.tag === HostRoot) {
    // Error was thrown at the root. There is no parent, so the root
    // itself should capture it.
    var rootFiber = sourceFiber;
    var _errorInfo2 = createCapturedValue(value, rootFiber);
    var _update2 = createRootErrorUpdate(rootFiber, _errorInfo2, expirationTime);
    enqueueUpdate(rootFiber, _update2, expirationTime);
    scheduleWork(rootFiber, expirationTime);
  }
}

function captureCommitPhaseError(fiber, error) {
  return dispatch(fiber, error, Sync);
}

function computeAsyncExpiration(currentTime) {
  // Given the current clock time, returns an expiration time. We use rounding
  // to batch like updates together.
  // Should complete within ~5000ms. 5250ms max.
  var expirationMs = 5000;
  var bucketSizeMs = 250;
  return computeExpirationBucket(currentTime, expirationMs, bucketSizeMs);
}

function computeInteractiveExpiration(currentTime) {
  var expirationMs = void 0;
  // We intentionally set a higher expiration time for interactive updates in
  // dev than in production.
  // If the main thread is being blocked so long that you hit the expiration,
  // it's a problem that could be solved with better scheduling.
  // People will be more likely to notice this and fix it with the long
  // expiration time in development.
  // In production we opt for better UX at the risk of masking scheduling
  // problems, by expiring fast.
  {
    // Should complete within ~500ms. 600ms max.
    expirationMs = 500;
  }
  var bucketSizeMs = 100;
  return computeExpirationBucket(currentTime, expirationMs, bucketSizeMs);
}

// Creates a unique async expiration time.
function computeUniqueAsyncExpiration() {
  var currentTime = recalculateCurrentTime();
  var result = computeAsyncExpiration(currentTime);
  if (result <= lastUniqueAsyncExpiration) {
    // Since we assume the current time monotonically increases, we only hit
    // this branch when computeUniqueAsyncExpiration is fired multiple times
    // within a 200ms window (or whatever the async bucket size is).
    result = lastUniqueAsyncExpiration + 1;
  }
  lastUniqueAsyncExpiration = result;
  return lastUniqueAsyncExpiration;
}

function computeExpirationForFiber(currentTime, fiber) {
  var expirationTime = void 0;
  if (expirationContext !== NoWork) {
    // An explicit expiration context was set;
    expirationTime = expirationContext;
  } else if (isWorking) {
    if (isCommitting$1) {
      // Updates that occur during the commit phase should have sync priority
      // by default.
      expirationTime = Sync;
    } else {
      // Updates during the render phase should expire at the same time as
      // the work that is being rendered.
      expirationTime = nextRenderExpirationTime;
    }
  } else {
    // No explicit expiration context was set, and we're not currently
    // performing work. Calculate a new expiration time.
    if (fiber.mode & AsyncMode) {
      if (isBatchingInteractiveUpdates) {
        // This is an interactive update
        expirationTime = computeInteractiveExpiration(currentTime);
      } else {
        // This is an async update
        expirationTime = computeAsyncExpiration(currentTime);
      }
    } else {
      // This is a sync update
      expirationTime = Sync;
    }
  }
  if (isBatchingInteractiveUpdates) {
    // This is an interactive update. Keep track of the lowest pending
    // interactive expiration time. This allows us to synchronously flush
    // all interactive updates when needed.
    if (lowestPendingInteractiveExpirationTime === NoWork || expirationTime > lowestPendingInteractiveExpirationTime) {
      lowestPendingInteractiveExpirationTime = expirationTime;
    }
  }
  return expirationTime;
}

// TODO: Rename this to scheduleTimeout or something
function suspendRoot(root, thenable, timeoutMs, suspendedTime) {
  // Schedule the timeout.
  if (timeoutMs >= 0 && nextLatestTimeoutMs < timeoutMs) {
    nextLatestTimeoutMs = timeoutMs;
  }
}

function retrySuspendedRoot(root, suspendedTime) {
  markPingedPriorityLevel(root, suspendedTime);
  var retryTime = findNextPendingPriorityLevel(root);
  if (retryTime !== NoWork) {
    requestRetry(root, retryTime);
  }
}

function scheduleWork(fiber, expirationTime) {
  recordScheduleUpdate();

  {
    if (fiber.tag === ClassComponent) {
      var instance = fiber.stateNode;
      warnAboutInvalidUpdates(instance);
    }
  }

  var node = fiber;
  while (node !== null) {
    // Walk the parent path to the root and update each node's
    // expiration time.
    if (node.expirationTime === NoWork || node.expirationTime > expirationTime) {
      node.expirationTime = expirationTime;
    }
    if (node.alternate !== null) {
      if (node.alternate.expirationTime === NoWork || node.alternate.expirationTime > expirationTime) {
        node.alternate.expirationTime = expirationTime;
      }
    }
    if (node.return === null) {
      if (node.tag === HostRoot) {
        var root = node.stateNode;
        if (!isWorking && nextRenderExpirationTime !== NoWork && expirationTime < nextRenderExpirationTime) {
          // This is an interruption. (Used for performance tracking.)
          interruptedBy = fiber;
          resetStack();
        }
        markPendingPriorityLevel(root, expirationTime);
        var nextExpirationTimeToWorkOn = findNextPendingPriorityLevel(root);
        if (
        // If we're in the render phase, we don't need to schedule this root
        // for an update, because we'll do it before we exit...
        !isWorking || isCommitting$1 ||
        // ...unless this is a different root than the one we're rendering.
        nextRoot !== root) {
          requestWork(root, nextExpirationTimeToWorkOn);
        }
        if (nestedUpdateCount > NESTED_UPDATE_LIMIT) {
          invariant(false, 'Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.');
        }
      } else {
        {
          if (fiber.tag === ClassComponent) {
            warnAboutUpdateOnUnmounted(fiber);
          }
        }
        return;
      }
    }
    node = node.return;
  }
}

function recalculateCurrentTime() {
  // Subtract initial time so it fits inside 32bits
  mostRecentCurrentTimeMs = now() - originalStartTimeMs;
  mostRecentCurrentTime = msToExpirationTime(mostRecentCurrentTimeMs);
  return mostRecentCurrentTime;
}

function deferredUpdates(fn) {
  var previousExpirationContext = expirationContext;
  var currentTime = recalculateCurrentTime();
  expirationContext = computeAsyncExpiration(currentTime);
  try {
    return fn();
  } finally {
    expirationContext = previousExpirationContext;
  }
}
function syncUpdates(fn, a, b, c, d) {
  var previousExpirationContext = expirationContext;
  expirationContext = Sync;
  try {
    return fn(a, b, c, d);
  } finally {
    expirationContext = previousExpirationContext;
  }
}

// TODO: Everything below this is written as if it has been lifted to the
// renderers. I'll do this in a follow-up.

// Linked-list of roots
var firstScheduledRoot = null;
var lastScheduledRoot = null;

var callbackExpirationTime = NoWork;
var callbackID = void 0;
var isRendering = false;
var nextFlushedRoot = null;
var nextFlushedExpirationTime = NoWork;
var lowestPendingInteractiveExpirationTime = NoWork;
var deadlineDidExpire = false;
var hasUnhandledError = false;
var unhandledError = null;
var deadline = null;

var isBatchingUpdates = false;
var isUnbatchingUpdates = false;
var isBatchingInteractiveUpdates = false;

var completedBatches = null;

// Use these to prevent an infinite loop of nested updates
var NESTED_UPDATE_LIMIT = 1000;
var nestedUpdateCount = 0;

var timeHeuristicForUnitOfWork = 1;

function scheduleCallbackWithExpiration(expirationTime) {
  if (callbackExpirationTime !== NoWork) {
    // A callback is already scheduled. Check its expiration time (timeout).
    if (expirationTime > callbackExpirationTime) {
      // Existing callback has sufficient timeout. Exit.
      return;
    } else {
      if (callbackID !== null) {
        // Existing callback has insufficient timeout. Cancel and schedule a
        // new one.
        cancelDeferredCallback(callbackID);
      }
    }
    // The request callback timer is already running. Don't start a new one.
  } else {
    startRequestCallbackTimer();
  }

  // Compute a timeout for the given expiration time.
  var currentMs = now() - originalStartTimeMs;
  var expirationMs = expirationTimeToMs(expirationTime);
  var timeout = expirationMs - currentMs;

  callbackExpirationTime = expirationTime;
  callbackID = scheduleDeferredCallback(performAsyncWork, { timeout: timeout });
}

function requestRetry(root, expirationTime) {
  if (root.remainingExpirationTime === NoWork || root.remainingExpirationTime < expirationTime) {
    // For a retry, only update the remaining expiration time if it has a
    // *lower priority* than the existing value. This is because, on a retry,
    // we should attempt to coalesce as much as possible.
    requestWork(root, expirationTime);
  }
}

// requestWork is called by the scheduler whenever a root receives an update.
// It's up to the renderer to call renderRoot at some point in the future.
function requestWork(root, expirationTime) {
  addRootToSchedule(root, expirationTime);

  if (isRendering) {
    // Prevent reentrancy. Remaining work will be scheduled at the end of
    // the currently rendering batch.
    return;
  }

  if (isBatchingUpdates) {
    // Flush work at the end of the batch.
    if (isUnbatchingUpdates) {
      // ...unless we're inside unbatchedUpdates, in which case we should
      // flush it now.
      nextFlushedRoot = root;
      nextFlushedExpirationTime = Sync;
      performWorkOnRoot(root, Sync, false);
    }
    return;
  }

  // TODO: Get rid of Sync and use current time?
  if (expirationTime === Sync) {
    performSyncWork();
  } else {
    scheduleCallbackWithExpiration(expirationTime);
  }
}

function addRootToSchedule(root, expirationTime) {
  // Add the root to the schedule.
  // Check if this root is already part of the schedule.
  if (root.nextScheduledRoot === null) {
    // This root is not already scheduled. Add it.
    root.remainingExpirationTime = expirationTime;
    if (lastScheduledRoot === null) {
      firstScheduledRoot = lastScheduledRoot = root;
      root.nextScheduledRoot = root;
    } else {
      lastScheduledRoot.nextScheduledRoot = root;
      lastScheduledRoot = root;
      lastScheduledRoot.nextScheduledRoot = firstScheduledRoot;
    }
  } else {
    // This root is already scheduled, but its priority may have increased.
    var remainingExpirationTime = root.remainingExpirationTime;
    if (remainingExpirationTime === NoWork || expirationTime < remainingExpirationTime) {
      // Update the priority.
      root.remainingExpirationTime = expirationTime;
    }
  }
}

function findHighestPriorityRoot() {
  var highestPriorityWork = NoWork;
  var highestPriorityRoot = null;
  if (lastScheduledRoot !== null) {
    var previousScheduledRoot = lastScheduledRoot;
    var root = firstScheduledRoot;
    while (root !== null) {
      var remainingExpirationTime = root.remainingExpirationTime;
      if (remainingExpirationTime === NoWork) {
        // This root no longer has work. Remove it from the scheduler.

        // TODO: This check is redudant, but Flow is confused by the branch
        // below where we set lastScheduledRoot to null, even though we break
        // from the loop right after.
        !(previousScheduledRoot !== null && lastScheduledRoot !== null) ? invariant(false, 'Should have a previous and last root. This error is likely caused by a bug in React. Please file an issue.') : void 0;
        if (root === root.nextScheduledRoot) {
          // This is the only root in the list.
          root.nextScheduledRoot = null;
          firstScheduledRoot = lastScheduledRoot = null;
          break;
        } else if (root === firstScheduledRoot) {
          // This is the first root in the list.
          var next = root.nextScheduledRoot;
          firstScheduledRoot = next;
          lastScheduledRoot.nextScheduledRoot = next;
          root.nextScheduledRoot = null;
        } else if (root === lastScheduledRoot) {
          // This is the last root in the list.
          lastScheduledRoot = previousScheduledRoot;
          lastScheduledRoot.nextScheduledRoot = firstScheduledRoot;
          root.nextScheduledRoot = null;
          break;
        } else {
          previousScheduledRoot.nextScheduledRoot = root.nextScheduledRoot;
          root.nextScheduledRoot = null;
        }
        root = previousScheduledRoot.nextScheduledRoot;
      } else {
        if (highestPriorityWork === NoWork || remainingExpirationTime < highestPriorityWork) {
          // Update the priority, if it's higher
          highestPriorityWork = remainingExpirationTime;
          highestPriorityRoot = root;
        }
        if (root === lastScheduledRoot) {
          break;
        }
        previousScheduledRoot = root;
        root = root.nextScheduledRoot;
      }
    }
  }

  // If the next root is the same as the previous root, this is a nested
  // update. To prevent an infinite loop, increment the nested update count.
  var previousFlushedRoot = nextFlushedRoot;
  if (previousFlushedRoot !== null && previousFlushedRoot === highestPriorityRoot && highestPriorityWork === Sync) {
    nestedUpdateCount++;
  } else {
    // Reset whenever we switch roots.
    nestedUpdateCount = 0;
  }
  nextFlushedRoot = highestPriorityRoot;
  nextFlushedExpirationTime = highestPriorityWork;
}

function performAsyncWork(dl) {
  performWork(NoWork, true, dl);
}

function performSyncWork() {
  performWork(Sync, false, null);
}

function performWork(minExpirationTime, isAsync, dl) {
  deadline = dl;

  // Keep working on roots until there's no more work, or until the we reach
  // the deadline.
  findHighestPriorityRoot();

  if (enableProfilerTimer) {
    resumeActualRenderTimerIfPaused();
  }

  if (enableUserTimingAPI && deadline !== null) {
    var didExpire = nextFlushedExpirationTime < recalculateCurrentTime();
    var timeout = expirationTimeToMs(nextFlushedExpirationTime);
    stopRequestCallbackTimer(didExpire, timeout);
  }

  if (isAsync) {
    while (nextFlushedRoot !== null && nextFlushedExpirationTime !== NoWork && (minExpirationTime === NoWork || minExpirationTime >= nextFlushedExpirationTime) && (!deadlineDidExpire || recalculateCurrentTime() >= nextFlushedExpirationTime)) {
      recalculateCurrentTime();
      performWorkOnRoot(nextFlushedRoot, nextFlushedExpirationTime, !deadlineDidExpire);
      findHighestPriorityRoot();
    }
  } else {
    while (nextFlushedRoot !== null && nextFlushedExpirationTime !== NoWork && (minExpirationTime === NoWork || minExpirationTime >= nextFlushedExpirationTime)) {
      performWorkOnRoot(nextFlushedRoot, nextFlushedExpirationTime, false);
      findHighestPriorityRoot();
    }
  }

  // We're done flushing work. Either we ran out of time in this callback,
  // or there's no more work left with sufficient priority.

  // If we're inside a callback, set this to false since we just completed it.
  if (deadline !== null) {
    callbackExpirationTime = NoWork;
    callbackID = null;
  }
  // If there's work left over, schedule a new callback.
  if (nextFlushedExpirationTime !== NoWork) {
    scheduleCallbackWithExpiration(nextFlushedExpirationTime);
  }

  // Clean-up.
  deadline = null;
  deadlineDidExpire = false;

  finishRendering();
}

function flushRoot(root, expirationTime) {
  !!isRendering ? invariant(false, 'work.commit(): Cannot commit while already rendering. This likely means you attempted to commit from inside a lifecycle method.') : void 0;
  // Perform work on root as if the given expiration time is the current time.
  // This has the effect of synchronously flushing all work up to and
  // including the given time.
  nextFlushedRoot = root;
  nextFlushedExpirationTime = expirationTime;
  performWorkOnRoot(root, expirationTime, false);
  // Flush any sync work that was scheduled by lifecycles
  performSyncWork();
  finishRendering();
}

function finishRendering() {
  nestedUpdateCount = 0;

  if (completedBatches !== null) {
    var batches = completedBatches;
    completedBatches = null;
    for (var i = 0; i < batches.length; i++) {
      var batch = batches[i];
      try {
        batch._onComplete();
      } catch (error) {
        if (!hasUnhandledError) {
          hasUnhandledError = true;
          unhandledError = error;
        }
      }
    }
  }

  if (hasUnhandledError) {
    var error = unhandledError;
    unhandledError = null;
    hasUnhandledError = false;
    throw error;
  }
}

function performWorkOnRoot(root, expirationTime, isAsync) {
  !!isRendering ? invariant(false, 'performWorkOnRoot was called recursively. This error is likely caused by a bug in React. Please file an issue.') : void 0;

  isRendering = true;

  // Check if this is async work or sync/expired work.
  if (!isAsync) {
    // Flush sync work.
    var finishedWork = root.finishedWork;
    if (finishedWork !== null) {
      // This root is already complete. We can commit it.
      completeRoot(root, finishedWork, expirationTime);
    } else {
      finishedWork = renderRoot(root, expirationTime, false);
      if (finishedWork !== null) {
        // We've completed the root. Commit it.
        completeRoot(root, finishedWork, expirationTime);
      }
    }
  } else {
    // Flush async work.
    var _finishedWork = root.finishedWork;
    if (_finishedWork !== null) {
      // This root is already complete. We can commit it.
      completeRoot(root, _finishedWork, expirationTime);
    } else {
      _finishedWork = renderRoot(root, expirationTime, true);
      if (_finishedWork !== null) {
        // We've completed the root. Check the deadline one more time
        // before committing.
        if (!shouldYield()) {
          // Still time left. Commit the root.
          completeRoot(root, _finishedWork, expirationTime);
        } else {
          // There's no time left. Mark this root as complete. We'll come
          // back and commit it later.
          root.finishedWork = _finishedWork;

          if (enableProfilerTimer) {
            // If we didn't finish, pause the "actual" render timer.
            // We'll restart it when we resume work.
            pauseActualRenderTimerIfRunning();
          }
        }
      }
    }
  }

  isRendering = false;
}

function completeRoot(root, finishedWork, expirationTime) {
  // Check if there's a batch that matches this expiration time.
  var firstBatch = root.firstBatch;
  if (firstBatch !== null && firstBatch._expirationTime <= expirationTime) {
    if (completedBatches === null) {
      completedBatches = [firstBatch];
    } else {
      completedBatches.push(firstBatch);
    }
    if (firstBatch._defer) {
      // This root is blocked from committing by a batch. Unschedule it until
      // we receive another update.
      root.finishedWork = finishedWork;
      root.remainingExpirationTime = NoWork;
      return;
    }
  }

  // Commit the root.
  root.finishedWork = null;
  root.remainingExpirationTime = commitRoot(finishedWork);
}

// When working on async work, the reconciler asks the renderer if it should
// yield execution. For DOM, we implement this with requestIdleCallback.
function shouldYield() {
  if (deadline === null) {
    return false;
  }
  if (deadline.timeRemaining() > timeHeuristicForUnitOfWork) {
    // Disregard deadline.didTimeout. Only expired work should be flushed
    // during a timeout. This path is only hit for non-expired work.
    return false;
  }
  deadlineDidExpire = true;
  return true;
}

function onUncaughtError(error) {
  !(nextFlushedRoot !== null) ? invariant(false, 'Should be working on a root. This error is likely caused by a bug in React. Please file an issue.') : void 0;
  // Unschedule this root so we don't work on it again until there's
  // another update.
  nextFlushedRoot.remainingExpirationTime = NoWork;
  if (!hasUnhandledError) {
    hasUnhandledError = true;
    unhandledError = error;
  }
}

function onBlock(remainingExpirationTime) {
  !(nextFlushedRoot !== null) ? invariant(false, 'Should be working on a root. This error is likely caused by a bug in React. Please file an issue.') : void 0;
  // This root was blocked. Unschedule it until there's another update.
  nextFlushedRoot.remainingExpirationTime = remainingExpirationTime;
}

// TODO: Batching should be implemented at the renderer level, not inside
// the reconciler.
function batchedUpdates(fn, a) {
  var previousIsBatchingUpdates = isBatchingUpdates;
  isBatchingUpdates = true;
  try {
    return fn(a);
  } finally {
    isBatchingUpdates = previousIsBatchingUpdates;
    if (!isBatchingUpdates && !isRendering) {
      performSyncWork();
    }
  }
}

// TODO: Batching should be implemented at the renderer level, not inside
// the reconciler.
function unbatchedUpdates(fn, a) {
  if (isBatchingUpdates && !isUnbatchingUpdates) {
    isUnbatchingUpdates = true;
    try {
      return fn(a);
    } finally {
      isUnbatchingUpdates = false;
    }
  }
  return fn(a);
}

// TODO: Batching should be implemented at the renderer level, not within
// the reconciler.
function flushSync(fn, a) {
  !!isRendering ? invariant(false, 'flushSync was called from inside a lifecycle method. It cannot be called when React is already rendering.') : void 0;
  var previousIsBatchingUpdates = isBatchingUpdates;
  isBatchingUpdates = true;
  try {
    return syncUpdates(fn, a);
  } finally {
    isBatchingUpdates = previousIsBatchingUpdates;
    performSyncWork();
  }
}

function interactiveUpdates(fn, a, b) {
  if (isBatchingInteractiveUpdates) {
    return fn(a, b);
  }
  // If there are any pending interactive updates, synchronously flush them.
  // This needs to happen before we read any handlers, because the effect of
  // the previous event may influence which handlers are called during
  // this event.
  if (!isBatchingUpdates && !isRendering && lowestPendingInteractiveExpirationTime !== NoWork) {
    // Synchronously flush pending interactive updates.
    performWork(lowestPendingInteractiveExpirationTime, false, null);
    lowestPendingInteractiveExpirationTime = NoWork;
  }
  var previousIsBatchingInteractiveUpdates = isBatchingInteractiveUpdates;
  var previousIsBatchingUpdates = isBatchingUpdates;
  isBatchingInteractiveUpdates = true;
  isBatchingUpdates = true;
  try {
    return fn(a, b);
  } finally {
    isBatchingInteractiveUpdates = previousIsBatchingInteractiveUpdates;
    isBatchingUpdates = previousIsBatchingUpdates;
    if (!isBatchingUpdates && !isRendering) {
      performSyncWork();
    }
  }
}

function flushInteractiveUpdates() {
  if (!isRendering && lowestPendingInteractiveExpirationTime !== NoWork) {
    // Synchronously flush pending interactive updates.
    performWork(lowestPendingInteractiveExpirationTime, false, null);
    lowestPendingInteractiveExpirationTime = NoWork;
  }
}

function flushControlled(fn) {
  var previousIsBatchingUpdates = isBatchingUpdates;
  isBatchingUpdates = true;
  try {
    syncUpdates(fn);
  } finally {
    isBatchingUpdates = previousIsBatchingUpdates;
    if (!isBatchingUpdates && !isRendering) {
      performWork(Sync, false, null);
    }
  }
}

// 0 is PROD, 1 is DEV.
// Might add PROFILE later.


var didWarnAboutNestedUpdates = void 0;

{
  didWarnAboutNestedUpdates = false;
}

function getContextForSubtree(parentComponent) {
  if (!parentComponent) {
    return emptyObject;
  }

  var fiber = get(parentComponent);
  var parentContext = findCurrentUnmaskedContext(fiber);
  return isContextProvider(fiber) ? processChildContext(fiber, parentContext) : parentContext;
}

function scheduleRootUpdate(current, element, expirationTime, callback) {
  {
    if (ReactDebugCurrentFiber.phase === 'render' && ReactDebugCurrentFiber.current !== null && !didWarnAboutNestedUpdates) {
      didWarnAboutNestedUpdates = true;
      warning(false, 'Render methods should be a pure function of props and state; ' + 'triggering nested component updates from render is not allowed. ' + 'If necessary, trigger nested updates in componentDidUpdate.\n\n' + 'Check the render method of %s.', getComponentName(ReactDebugCurrentFiber.current) || 'Unknown');
    }
  }

  var update = createUpdate(expirationTime);
  // Caution: React DevTools currently depends on this property
  // being called "element".
  update.payload = { element: element };

  callback = callback === undefined ? null : callback;
  if (callback !== null) {
    !(typeof callback === 'function') ? warning(false, 'render(...): Expected the last optional `callback` argument to be a ' + 'function. Instead received: %s.', callback) : void 0;
    update.callback = callback;
  }
  enqueueUpdate(current, update, expirationTime);

  scheduleWork(current, expirationTime);
  return expirationTime;
}

function updateContainerAtExpirationTime(element, container, parentComponent, expirationTime, callback) {
  // TODO: If this is a nested container, this won't be the root.
  var current = container.current;

  {
    if (ReactFiberInstrumentation_1.debugTool) {
      if (current.alternate === null) {
        ReactFiberInstrumentation_1.debugTool.onMountContainer(container);
      } else if (element === null) {
        ReactFiberInstrumentation_1.debugTool.onUnmountContainer(container);
      } else {
        ReactFiberInstrumentation_1.debugTool.onUpdateContainer(container);
      }
    }
  }

  var context = getContextForSubtree(parentComponent);
  if (container.context === null) {
    container.context = context;
  } else {
    container.pendingContext = context;
  }

  return scheduleRootUpdate(current, element, expirationTime, callback);
}

function findHostInstance(component) {
  var fiber = get(component);
  if (fiber === undefined) {
    if (typeof component.render === 'function') {
      invariant(false, 'Unable to find node on an unmounted component.');
    } else {
      invariant(false, 'Argument appears to not be a ReactComponent. Keys: %s', Object.keys(component));
    }
  }
  var hostFiber = findCurrentHostFiber(fiber);
  if (hostFiber === null) {
    return null;
  }
  return hostFiber.stateNode;
}

function createContainer(containerInfo, isAsync, hydrate) {
  return createFiberRoot(containerInfo, isAsync, hydrate);
}

function updateContainer(element, container, parentComponent, callback) {
  var current = container.current;
  var currentTime = recalculateCurrentTime();
  var expirationTime = computeExpirationForFiber(currentTime, current);
  return updateContainerAtExpirationTime(element, container, parentComponent, expirationTime, callback);
}

function getPublicRootInstance(container) {
  var containerFiber = container.current;
  if (!containerFiber.child) {
    return null;
  }
  switch (containerFiber.child.tag) {
    case HostComponent:
      return getPublicInstance(containerFiber.child.stateNode);
    default:
      return containerFiber.child.stateNode;
  }
}

function findHostInstanceWithNoPortals(fiber) {
  var hostFiber = findCurrentHostFiberWithNoPortals(fiber);
  if (hostFiber === null) {
    return null;
  }
  return hostFiber.stateNode;
}

function injectIntoDevTools(devToolsConfig) {
  var findFiberByHostInstance = devToolsConfig.findFiberByHostInstance;

  return injectInternals(_assign({}, devToolsConfig, {
    findHostInstanceByFiber: function (fiber) {
      var hostFiber = findCurrentHostFiber(fiber);
      if (hostFiber === null) {
        return null;
      }
      return hostFiber.stateNode;
    },
    findFiberByHostInstance: function (instance) {
      if (!findFiberByHostInstance) {
        // Might not be implemented by the renderer.
        return null;
      }
      return findFiberByHostInstance(instance);
    }
  }));
}

var ReactFiberReconciler = Object.freeze({
	updateContainerAtExpirationTime: updateContainerAtExpirationTime,
	createContainer: createContainer,
	updateContainer: updateContainer,
	flushRoot: flushRoot,
	requestWork: requestWork,
	computeUniqueAsyncExpiration: computeUniqueAsyncExpiration,
	batchedUpdates: batchedUpdates,
	unbatchedUpdates: unbatchedUpdates,
	deferredUpdates: deferredUpdates,
	syncUpdates: syncUpdates,
	interactiveUpdates: interactiveUpdates,
	flushInteractiveUpdates: flushInteractiveUpdates,
	flushControlled: flushControlled,
	flushSync: flushSync,
	getPublicRootInstance: getPublicRootInstance,
	findHostInstance: findHostInstance,
	findHostInstanceWithNoPortals: findHostInstanceWithNoPortals,
	injectIntoDevTools: injectIntoDevTools
});

// This entry point is intentionally not typed. It exists only for third-party
// renderers. The renderers we ship (such as React DOM) instead import a named
// "inline" entry point (for example, `react-reconciler/inline.dom`). It uses
// the same code, but the Flow configuration redirects the host config to its
// real implementation so we can check it against exact intended host types.
//
// Only one renderer (the one you passed to `yarn flow <renderer>`) is fully
// type-checked at any given time. The Flow config maps the
// `react-reconciler/inline.<renderer>` import (which is *not* Flow typed) to
// `react-reconciler/inline-typed` (which *is*) for the current renderer.
// On CI, we run Flow checks for each renderer separately.





// TODO: decide on the top-level export form.
// This is hacky but makes it work with both Rollup and Jest.
var reactReconciler = ReactFiberReconciler.default ? ReactFiberReconciler.default : ReactFiberReconciler;

module.exports = reactReconciler;
    var $$$renderer = module.exports;
    module.exports = $$$reconciler;
    return $$$renderer;
  };
}

}).call(this,require('_process'))
},{"_process":15,"fbjs/lib/emptyObject":10,"fbjs/lib/invariant":11,"fbjs/lib/shallowEqual":12,"fbjs/lib/warning":13,"object-assign":14,"prop-types/checkPropTypes":16,"react":23}],19:[function(require,module,exports){
/** @license React v16.4.1
 * react-reconciler.production.min.js
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
module.exports = function $$$reconciler($$$hostConfig) {
'use strict';var aa=require("object-assign"),ba=require("fbjs/lib/invariant"),ca=require("react"),m=require("fbjs/lib/emptyObject"),da=require("fbjs/lib/shallowEqual");function n(a){for(var b=arguments.length-1,c="https://reactjs.org/docs/error-decoder.html?invariant="+a,d=0;d<b;d++)c+="&args[]="+encodeURIComponent(arguments[d+1]);ba(!1,"Minified React error #"+a+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",c)}
var ea=ca.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,w="function"===typeof Symbol&&Symbol.for,ha=w?Symbol.for("react.element"):60103,ia=w?Symbol.for("react.portal"):60106,x=w?Symbol.for("react.fragment"):60107,ja=w?Symbol.for("react.strict_mode"):60108,ka=w?Symbol.for("react.profiler"):60114,la=w?Symbol.for("react.provider"):60109,ma=w?Symbol.for("react.context"):60110,na=w?Symbol.for("react.async_mode"):60111,oa=w?Symbol.for("react.forward_ref"):60112,pa=w?Symbol.for("react.timeout"):
60113,qa="function"===typeof Symbol&&Symbol.iterator;function ra(a){if(null===a||"undefined"===typeof a)return null;a=qa&&a[qa]||a["@@iterator"];return"function"===typeof a?a:null}
function sa(a){var b=a.type;if("function"===typeof b)return b.displayName||b.name;if("string"===typeof b)return b;switch(b){case na:return"AsyncMode";case ma:return"Context.Consumer";case x:return"ReactFragment";case ia:return"ReactPortal";case ka:return"Profiler("+a.pendingProps.id+")";case la:return"Context.Provider";case ja:return"StrictMode";case pa:return"Timeout"}if("object"===typeof b&&null!==b)switch(b.$$typeof){case oa:return a=b.render.displayName||b.render.name||"",""!==a?"ForwardRef("+
a+")":"ForwardRef"}return null}function ta(a){var b=a;if(a.alternate)for(;b.return;)b=b.return;else{if(0!==(b.effectTag&2))return 1;for(;b.return;)if(b=b.return,0!==(b.effectTag&2))return 1}return 3===b.tag?2:3}function ua(a){2!==ta(a)?n("188"):void 0}
function va(a){var b=a.alternate;if(!b)return b=ta(a),3===b?n("188"):void 0,1===b?null:a;for(var c=a,d=b;;){var e=c.return,f=e?e.alternate:null;if(!e||!f)break;if(e.child===f.child){for(var g=e.child;g;){if(g===c)return ua(e),a;if(g===d)return ua(e),b;g=g.sibling}n("188")}if(c.return!==d.return)c=e,d=f;else{g=!1;for(var k=e.child;k;){if(k===c){g=!0;c=e;d=f;break}if(k===d){g=!0;d=e;c=f;break}k=k.sibling}if(!g){for(k=f.child;k;){if(k===c){g=!0;c=f;d=e;break}if(k===d){g=!0;d=f;c=e;break}k=k.sibling}g?
void 0:n("189")}}c.alternate!==d?n("190"):void 0}3!==c.tag?n("188"):void 0;return c.stateNode.current===c?a:b}function wa(a){a=va(a);if(!a)return null;for(var b=a;;){if(5===b.tag||6===b.tag)return b;if(b.child)b.child.return=b,b=b.child;else{if(b===a)break;for(;!b.sibling;){if(!b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}}return null}
function xa(a){a=va(a);if(!a)return null;for(var b=a;;){if(5===b.tag||6===b.tag)return b;if(b.child&&4!==b.tag)b.child.return=b,b=b.child;else{if(b===a)break;for(;!b.sibling;){if(!b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}}return null}
var ya=$$$hostConfig.getPublicInstance,za=$$$hostConfig.getRootHostContext,Aa=$$$hostConfig.getChildHostContext,Ba=$$$hostConfig.prepareForCommit,Ca=$$$hostConfig.resetAfterCommit,Ea=$$$hostConfig.createInstance,Fa=$$$hostConfig.appendInitialChild,Ga=$$$hostConfig.finalizeInitialChildren,Ha=$$$hostConfig.prepareUpdate,Ia=$$$hostConfig.shouldSetTextContent,Ja=$$$hostConfig.shouldDeprioritizeSubtree,Ka=$$$hostConfig.createTextInstance,La=$$$hostConfig.scheduleDeferredCallback,Ma=$$$hostConfig.cancelDeferredCallback,
Na=$$$hostConfig.now,Oa=$$$hostConfig.isPrimaryRenderer,Pa=$$$hostConfig.supportsMutation,Qa=$$$hostConfig.supportsPersistence,Ra=$$$hostConfig.supportsHydration,Sa=$$$hostConfig.appendChild,Ta=$$$hostConfig.appendChildToContainer,Ua=$$$hostConfig.commitTextUpdate,Va=$$$hostConfig.commitMount,Wa=$$$hostConfig.commitUpdate,Xa=$$$hostConfig.insertBefore,Ya=$$$hostConfig.insertInContainerBefore,Za=$$$hostConfig.removeChild,$a=$$$hostConfig.removeChildFromContainer,ab=$$$hostConfig.resetTextContent,bb=
$$$hostConfig.cloneInstance,db=$$$hostConfig.createContainerChildSet,eb=$$$hostConfig.appendChildToContainerChildSet,fb=$$$hostConfig.finalizeContainerChildren,gb=$$$hostConfig.replaceContainerChildren,hb=$$$hostConfig.canHydrateInstance,ib=$$$hostConfig.canHydrateTextInstance,jb=$$$hostConfig.getNextHydratableSibling,kb=$$$hostConfig.getFirstHydratableChild,lb=$$$hostConfig.hydrateInstance,mb=$$$hostConfig.hydrateTextInstance;
function nb(a){var b="";do{a:switch(a.tag){case 0:case 1:case 2:case 5:var c=a._debugOwner,d=a._debugSource;var e=sa(a);var f=null;c&&(f=sa(c));c=d;e="\n    in "+(e||"Unknown")+(c?" (at "+c.fileName.replace(/^.*[\\\/]/,"")+":"+c.lineNumber+")":f?" (created by "+f+")":"");break a;default:e=""}b+=e;a=a.return}while(a);return b}new Set;var ob=[],pb=-1;function y(a){return{current:a}}function z(a){0>pb||(a.current=ob[pb],ob[pb]=null,pb--)}function A(a,b){pb++;ob[pb]=a.current;a.current=b}
var B=y(m),C=y(!1),qb=m;function rb(a){return sb(a)?qb:B.current}function tb(a,b){var c=a.type.contextTypes;if(!c)return m;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}function sb(a){return 2===a.tag&&null!=a.type.childContextTypes}
function ub(a){sb(a)&&(z(C,a),z(B,a))}function vb(a){z(C,a);z(B,a)}function wb(a,b,c){B.current!==m?n("168"):void 0;A(B,b,a);A(C,c,a)}function xb(a,b){var c=a.stateNode,d=a.type.childContextTypes;if("function"!==typeof c.getChildContext)return b;c=c.getChildContext();for(var e in c)e in d?void 0:n("108",sa(a)||"Unknown",e);return aa({},b,c)}function yb(a){if(!sb(a))return!1;var b=a.stateNode;b=b&&b.__reactInternalMemoizedMergedChildContext||m;qb=B.current;A(B,b,a);A(C,C.current,a);return!0}
function zb(a,b){var c=a.stateNode;c?void 0:n("169");if(b){var d=xb(a,qb);c.__reactInternalMemoizedMergedChildContext=d;z(C,a);z(B,a);A(B,d,a)}else z(C,a);A(C,b,a)}
function D(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=null;this.index=0;this.ref=null;this.pendingProps=b;this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.effectTag=0;this.lastEffect=this.firstEffect=this.nextEffect=null;this.expirationTime=0;this.alternate=null}
function Ab(a,b,c){var d=a.alternate;null===d?(d=new D(a.tag,b,a.key,a.mode),d.type=a.type,d.stateNode=a.stateNode,d.alternate=a,a.alternate=d):(d.pendingProps=b,d.effectTag=0,d.nextEffect=null,d.firstEffect=null,d.lastEffect=null);d.expirationTime=c;d.child=a.child;d.memoizedProps=a.memoizedProps;d.memoizedState=a.memoizedState;d.updateQueue=a.updateQueue;d.sibling=a.sibling;d.index=a.index;d.ref=a.ref;return d}
function Bb(a,b,c){var d=a.type,e=a.key;a=a.props;if("function"===typeof d)var f=d.prototype&&d.prototype.isReactComponent?2:0;else if("string"===typeof d)f=5;else switch(d){case x:return Cb(a.children,b,c,e);case na:f=11;b|=3;break;case ja:f=11;b|=2;break;case ka:return d=new D(15,a,e,b|4),d.type=ka,d.expirationTime=c,d;case pa:f=16;b|=2;break;default:a:{switch("object"===typeof d&&null!==d?d.$$typeof:null){case la:f=13;break a;case ma:f=12;break a;case oa:f=14;break a;default:n("130",null==d?d:
typeof d,"")}f=void 0}}b=new D(f,a,e,b);b.type=d;b.expirationTime=c;return b}function Cb(a,b,c,d){a=new D(10,a,d,b);a.expirationTime=c;return a}function Db(a,b,c){a=new D(6,a,null,b);a.expirationTime=c;return a}function Eb(a,b,c){b=new D(4,null!==a.children?a.children:[],a.key,b);b.expirationTime=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}var Fb=null,Gb=null;function Hb(a){return function(b){try{return a(b)}catch(c){}}}
function Ib(a){if("undefined"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)return!1;var b=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(b.isDisabled||!b.supportsFiber)return!0;try{var c=b.inject(a);Fb=Hb(function(a){return b.onCommitFiberRoot(c,a)});Gb=Hb(function(a){return b.onCommitFiberUnmount(c,a)})}catch(d){}return!0}function Jb(a){"function"===typeof Fb&&Fb(a)}function Kb(a){"function"===typeof Gb&&Gb(a)}var E=!1;
function Lb(a){return{expirationTime:0,baseState:a,firstUpdate:null,lastUpdate:null,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}function Mb(a){return{expirationTime:a.expirationTime,baseState:a.baseState,firstUpdate:a.firstUpdate,lastUpdate:a.lastUpdate,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}
function Nb(a){return{expirationTime:a,tag:0,payload:null,callback:null,next:null,nextEffect:null}}function Ob(a,b,c){null===a.lastUpdate?a.firstUpdate=a.lastUpdate=b:(a.lastUpdate.next=b,a.lastUpdate=b);if(0===a.expirationTime||a.expirationTime>c)a.expirationTime=c}
function Pb(a,b,c){var d=a.alternate;if(null===d){var e=a.updateQueue;var f=null;null===e&&(e=a.updateQueue=Lb(a.memoizedState))}else e=a.updateQueue,f=d.updateQueue,null===e?null===f?(e=a.updateQueue=Lb(a.memoizedState),f=d.updateQueue=Lb(d.memoizedState)):e=a.updateQueue=Mb(f):null===f&&(f=d.updateQueue=Mb(e));null===f||e===f?Ob(e,b,c):null===e.lastUpdate||null===f.lastUpdate?(Ob(e,b,c),Ob(f,b,c)):(Ob(e,b,c),f.lastUpdate=b)}
function Qb(a,b,c){var d=a.updateQueue;d=null===d?a.updateQueue=Lb(a.memoizedState):Rb(a,d);null===d.lastCapturedUpdate?d.firstCapturedUpdate=d.lastCapturedUpdate=b:(d.lastCapturedUpdate.next=b,d.lastCapturedUpdate=b);if(0===d.expirationTime||d.expirationTime>c)d.expirationTime=c}function Rb(a,b){var c=a.alternate;null!==c&&b===c.updateQueue&&(b=a.updateQueue=Mb(b));return b}
function Sb(a,b,c,d,e,f){switch(c.tag){case 1:return a=c.payload,"function"===typeof a?a.call(f,d,e):a;case 3:a.effectTag=a.effectTag&-1025|64;case 0:a=c.payload;e="function"===typeof a?a.call(f,d,e):a;if(null===e||void 0===e)break;return aa({},d,e);case 2:E=!0}return d}
function Tb(a,b,c,d,e){E=!1;if(!(0===b.expirationTime||b.expirationTime>e)){b=Rb(a,b);for(var f=b.baseState,g=null,k=0,h=b.firstUpdate,l=f;null!==h;){var p=h.expirationTime;if(p>e){if(null===g&&(g=h,f=l),0===k||k>p)k=p}else l=Sb(a,b,h,l,c,d),null!==h.callback&&(a.effectTag|=32,h.nextEffect=null,null===b.lastEffect?b.firstEffect=b.lastEffect=h:(b.lastEffect.nextEffect=h,b.lastEffect=h));h=h.next}p=null;for(h=b.firstCapturedUpdate;null!==h;){var u=h.expirationTime;if(u>e){if(null===p&&(p=h,null===g&&
(f=l)),0===k||k>u)k=u}else l=Sb(a,b,h,l,c,d),null!==h.callback&&(a.effectTag|=32,h.nextEffect=null,null===b.lastCapturedEffect?b.firstCapturedEffect=b.lastCapturedEffect=h:(b.lastCapturedEffect.nextEffect=h,b.lastCapturedEffect=h));h=h.next}null===g&&(b.lastUpdate=null);null===p?b.lastCapturedUpdate=null:a.effectTag|=32;null===g&&null===p&&(f=l);b.baseState=f;b.firstUpdate=g;b.firstCapturedUpdate=p;b.expirationTime=k;a.memoizedState=l}}
function Ub(a,b){"function"!==typeof a?n("191",a):void 0;a.call(b)}
function Vb(a,b,c){null!==b.firstCapturedUpdate&&(null!==b.lastUpdate&&(b.lastUpdate.next=b.firstCapturedUpdate,b.lastUpdate=b.lastCapturedUpdate),b.firstCapturedUpdate=b.lastCapturedUpdate=null);a=b.firstEffect;for(b.firstEffect=b.lastEffect=null;null!==a;){var d=a.callback;null!==d&&(a.callback=null,Ub(d,c));a=a.nextEffect}a=b.firstCapturedEffect;for(b.firstCapturedEffect=b.lastCapturedEffect=null;null!==a;)b=a.callback,null!==b&&(a.callback=null,Ub(b,c)),a=a.nextEffect}
function Wb(a,b){return{value:a,source:b,stack:nb(b)}}var Xb=y(null),Yb=y(null),Zb=y(0);function $b(a){var b=a.type._context;Oa?(A(Zb,b._changedBits,a),A(Yb,b._currentValue,a),A(Xb,a,a),b._currentValue=a.pendingProps.value,b._changedBits=a.stateNode):(A(Zb,b._changedBits2,a),A(Yb,b._currentValue2,a),A(Xb,a,a),b._currentValue2=a.pendingProps.value,b._changedBits2=a.stateNode)}
function ac(a){var b=Zb.current,c=Yb.current;z(Xb,a);z(Yb,a);z(Zb,a);a=a.type._context;Oa?(a._currentValue=c,a._changedBits=b):(a._currentValue2=c,a._changedBits2=b)}var bc={},F=y(bc),cc=y(bc),dc=y(bc);function G(a){a===bc?n("174"):void 0;return a}function ec(a,b){A(dc,b,a);A(cc,a,a);A(F,bc,a);b=za(b);z(F,a);A(F,b,a)}function fc(a){z(F,a);z(cc,a);z(dc,a)}function gc(a){cc.current===a&&(z(F,a),z(cc,a))}
function hc(a,b,c){var d=a.memoizedState;b=b(c,d);d=null===b||void 0===b?d:aa({},d,b);a.memoizedState=d;a=a.updateQueue;null!==a&&0===a.expirationTime&&(a.baseState=d)}
var kc={isMounted:function(a){return(a=a._reactInternalFiber)?2===ta(a):!1},enqueueSetState:function(a,b,c){a=a._reactInternalFiber;var d=H();d=ic(d,a);var e=Nb(d);e.payload=b;void 0!==c&&null!==c&&(e.callback=c);Pb(a,e,d);jc(a,d)},enqueueReplaceState:function(a,b,c){a=a._reactInternalFiber;var d=H();d=ic(d,a);var e=Nb(d);e.tag=1;e.payload=b;void 0!==c&&null!==c&&(e.callback=c);Pb(a,e,d);jc(a,d)},enqueueForceUpdate:function(a,b){a=a._reactInternalFiber;var c=H();c=ic(c,a);var d=Nb(c);d.tag=2;void 0!==
b&&null!==b&&(d.callback=b);Pb(a,d,c);jc(a,c)}};function lc(a,b,c,d,e,f){var g=a.stateNode;a=a.type;return"function"===typeof g.shouldComponentUpdate?g.shouldComponentUpdate(c,e,f):a.prototype&&a.prototype.isPureReactComponent?!da(b,c)||!da(d,e):!0}
function mc(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&kc.enqueueReplaceState(b,b.state,null)}
function nc(a,b){var c=a.type,d=a.stateNode,e=a.pendingProps,f=rb(a);d.props=e;d.state=a.memoizedState;d.refs=m;d.context=tb(a,f);f=a.updateQueue;null!==f&&(Tb(a,f,e,d,b),d.state=a.memoizedState);f=a.type.getDerivedStateFromProps;"function"===typeof f&&(hc(a,f,e),d.state=a.memoizedState);"function"===typeof c.getDerivedStateFromProps||"function"===typeof d.getSnapshotBeforeUpdate||"function"!==typeof d.UNSAFE_componentWillMount&&"function"!==typeof d.componentWillMount||(c=d.state,"function"===typeof d.componentWillMount&&
d.componentWillMount(),"function"===typeof d.UNSAFE_componentWillMount&&d.UNSAFE_componentWillMount(),c!==d.state&&kc.enqueueReplaceState(d,d.state,null),f=a.updateQueue,null!==f&&(Tb(a,f,e,d,b),d.state=a.memoizedState));"function"===typeof d.componentDidMount&&(a.effectTag|=4)}var oc=Array.isArray;
function pc(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;var d=void 0;c&&(2!==c.tag?n("110"):void 0,d=c.stateNode);d?void 0:n("147",a);var e=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===e)return b.ref;b=function(b){var a=d.refs===m?d.refs={}:d.refs;null===b?delete a[e]:a[e]=b};b._stringRef=e;return b}"string"!==typeof a?n("148"):void 0;c._owner?void 0:n("254",a)}return a}
function qc(a,b){"textarea"!==a.type&&n("31","[object Object]"===Object.prototype.toString.call(b)?"object with keys {"+Object.keys(b).join(", ")+"}":b,"")}
function rc(a){function b(b,c){if(a){var d=b.lastEffect;null!==d?(d.nextEffect=c,b.lastEffect=c):b.firstEffect=b.lastEffect=c;c.nextEffect=null;c.effectTag=8}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(b,a){for(b=new Map;null!==a;)null!==a.key?b.set(a.key,a):b.set(a.index,a),a=a.sibling;return b}function e(b,a,c){b=Ab(b,a,c);b.index=0;b.sibling=null;return b}function f(b,c,d){b.index=d;if(!a)return c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.effectTag=
2,c):d;b.effectTag=2;return c}function g(b){a&&null===b.alternate&&(b.effectTag=2);return b}function k(b,a,c,d){if(null===a||6!==a.tag)return a=Db(c,b.mode,d),a.return=b,a;a=e(a,c,d);a.return=b;return a}function h(b,a,c,d){if(null!==a&&a.type===c.type)return d=e(a,c.props,d),d.ref=pc(b,a,c),d.return=b,d;d=Bb(c,b.mode,d);d.ref=pc(b,a,c);d.return=b;return d}function l(b,a,c,d){if(null===a||4!==a.tag||a.stateNode.containerInfo!==c.containerInfo||a.stateNode.implementation!==c.implementation)return a=
Eb(c,b.mode,d),a.return=b,a;a=e(a,c.children||[],d);a.return=b;return a}function p(b,a,c,d,f){if(null===a||10!==a.tag)return a=Cb(c,b.mode,d,f),a.return=b,a;a=e(a,c,d);a.return=b;return a}function u(b,a,c){if("string"===typeof a||"number"===typeof a)return a=Db(""+a,b.mode,c),a.return=b,a;if("object"===typeof a&&null!==a){switch(a.$$typeof){case ha:return c=Bb(a,b.mode,c),c.ref=pc(b,null,a),c.return=b,c;case ia:return a=Eb(a,b.mode,c),a.return=b,a}if(oc(a)||ra(a))return a=Cb(a,b.mode,c,null),a.return=
b,a;qc(b,a)}return null}function K(b,a,c,d){var e=null!==a?a.key:null;if("string"===typeof c||"number"===typeof c)return null!==e?null:k(b,a,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case ha:return c.key===e?c.type===x?p(b,a,c.props.children,d,e):h(b,a,c,d):null;case ia:return c.key===e?l(b,a,c,d):null}if(oc(c)||ra(c))return null!==e?null:p(b,a,c,d,null);qc(b,c)}return null}function P(b,a,c,d,e){if("string"===typeof d||"number"===typeof d)return b=b.get(c)||null,k(a,b,""+d,e);if("object"===
typeof d&&null!==d){switch(d.$$typeof){case ha:return b=b.get(null===d.key?c:d.key)||null,d.type===x?p(a,b,d.props.children,e,d.key):h(a,b,d,e);case ia:return b=b.get(null===d.key?c:d.key)||null,l(a,b,d,e)}if(oc(d)||ra(d))return b=b.get(c)||null,p(a,b,d,e,null);qc(a,d)}return null}function fa(e,g,h,k){for(var r=null,v=null,q=g,l=g=0,p=null;null!==q&&l<h.length;l++){q.index>l?(p=q,q=null):p=q.sibling;var t=K(e,q,h[l],k);if(null===t){null===q&&(q=p);break}a&&q&&null===t.alternate&&b(e,q);g=f(t,g,l);
null===v?r=t:v.sibling=t;v=t;q=p}if(l===h.length)return c(e,q),r;if(null===q){for(;l<h.length;l++)if(q=u(e,h[l],k))g=f(q,g,l),null===v?r=q:v.sibling=q,v=q;return r}for(q=d(e,q);l<h.length;l++)if(p=P(q,e,l,h[l],k))a&&null!==p.alternate&&q.delete(null===p.key?l:p.key),g=f(p,g,l),null===v?r=p:v.sibling=p,v=p;a&&q.forEach(function(a){return b(e,a)});return r}function Z(e,g,h,k){var q=ra(h);"function"!==typeof q?n("150"):void 0;h=q.call(h);null==h?n("151"):void 0;for(var l=q=null,r=g,v=g=0,p=null,t=h.next();null!==
r&&!t.done;v++,t=h.next()){r.index>v?(p=r,r=null):p=r.sibling;var Y=K(e,r,t.value,k);if(null===Y){r||(r=p);break}a&&r&&null===Y.alternate&&b(e,r);g=f(Y,g,v);null===l?q=Y:l.sibling=Y;l=Y;r=p}if(t.done)return c(e,r),q;if(null===r){for(;!t.done;v++,t=h.next())t=u(e,t.value,k),null!==t&&(g=f(t,g,v),null===l?q=t:l.sibling=t,l=t);return q}for(r=d(e,r);!t.done;v++,t=h.next())t=P(r,e,v,t.value,k),null!==t&&(a&&null!==t.alternate&&r.delete(null===t.key?v:t.key),g=f(t,g,v),null===l?q=t:l.sibling=t,l=t);a&&
r.forEach(function(a){return b(e,a)});return q}return function(a,d,f,h){var k="object"===typeof f&&null!==f&&f.type===x&&null===f.key;k&&(f=f.props.children);var l="object"===typeof f&&null!==f;if(l)switch(f.$$typeof){case ha:a:{l=f.key;for(k=d;null!==k;){if(k.key===l)if(10===k.tag?f.type===x:k.type===f.type){c(a,k.sibling);d=e(k,f.type===x?f.props.children:f.props,h);d.ref=pc(a,k,f);d.return=a;a=d;break a}else{c(a,k);break}else b(a,k);k=k.sibling}f.type===x?(d=Cb(f.props.children,a.mode,h,f.key),
d.return=a,a=d):(h=Bb(f,a.mode,h),h.ref=pc(a,d,f),h.return=a,a=h)}return g(a);case ia:a:{for(k=f.key;null!==d;){if(d.key===k)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[],h);d.return=a;a=d;break a}else{c(a,d);break}else b(a,d);d=d.sibling}d=Eb(f,a.mode,h);d.return=a;a=d}return g(a)}if("string"===typeof f||"number"===typeof f)return f=""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f,h),d.return=a,a=d):(c(a,
d),d=Db(f,a.mode,h),d.return=a,a=d),g(a);if(oc(f))return fa(a,d,f,h);if(ra(f))return Z(a,d,f,h);l&&qc(a,f);if("undefined"===typeof f&&!k)switch(a.tag){case 2:case 1:h=a.type,n("152",h.displayName||h.name||"Component")}return c(a,d)}}var sc=rc(!0),tc=rc(!1),I=null,uc=null,vc=!1;function wc(a,b){var c=new D(5,null,null,0);c.type="DELETED";c.stateNode=b;c.return=a;c.effectTag=8;null!==a.lastEffect?(a.lastEffect.nextEffect=c,a.lastEffect=c):a.firstEffect=a.lastEffect=c}
function xc(a,b){switch(a.tag){case 5:return b=hb(b,a.type,a.pendingProps),null!==b?(a.stateNode=b,!0):!1;case 6:return b=ib(b,a.pendingProps),null!==b?(a.stateNode=b,!0):!1;default:return!1}}function yc(a){if(vc){var b=uc;if(b){var c=b;if(!xc(a,b)){b=jb(c);if(!b||!xc(a,b)){a.effectTag|=2;vc=!1;I=a;return}wc(I,c)}I=a;uc=kb(b)}else a.effectTag|=2,vc=!1,I=a}}function zc(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag;)a=a.return;I=a}
function Ac(a){if(!Ra||a!==I)return!1;if(!vc)return zc(a),vc=!0,!1;var b=a.type;if(5!==a.tag||"head"!==b&&"body"!==b&&!Ia(b,a.memoizedProps))for(b=uc;b;)wc(a,b),b=jb(b);zc(a);uc=I?jb(a.stateNode):null;return!0}function Bc(){Ra&&(uc=I=null,vc=!1)}function J(a,b,c){Cc(a,b,c,b.expirationTime)}function Cc(a,b,c,d){b.child=null===a?tc(b,null,c,d):sc(b,a.child,c,d)}function Fc(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.effectTag|=128}
function Gc(a,b,c,d,e){Fc(a,b);var f=0!==(b.effectTag&64);if(!c&&!f)return d&&zb(b,!1),L(a,b);c=b.stateNode;ea.current=b;var g=f?null:c.render();b.effectTag|=1;f&&(Cc(a,b,null,e),b.child=null);Cc(a,b,g,e);b.memoizedState=c.state;b.memoizedProps=c.props;d&&zb(b,!0);return b.child}function Hc(a){var b=a.stateNode;b.pendingContext?wb(a,b.pendingContext,b.pendingContext!==b.context):b.context&&wb(a,b.context,!1);ec(a,b.containerInfo)}
function Ic(a,b,c,d){var e=a.child;null!==e&&(e.return=a);for(;null!==e;){switch(e.tag){case 12:var f=e.stateNode|0;if(e.type===b&&0!==(f&c)){for(f=e;null!==f;){var g=f.alternate;if(0===f.expirationTime||f.expirationTime>d)f.expirationTime=d,null!==g&&(0===g.expirationTime||g.expirationTime>d)&&(g.expirationTime=d);else if(null!==g&&(0===g.expirationTime||g.expirationTime>d))g.expirationTime=d;else break;f=f.return}f=null}else f=e.child;break;case 13:f=e.type===a.type?null:e.child;break;default:f=
e.child}if(null!==f)f.return=e;else for(f=e;null!==f;){if(f===a){f=null;break}e=f.sibling;if(null!==e){e.return=f.return;f=e;break}f=f.return}e=f}}
function Jc(a,b,c){var d=b.type._context,e=b.pendingProps,f=b.memoizedProps,g=!0;if(C.current)g=!1;else if(f===e)return b.stateNode=0,$b(b),L(a,b);var k=e.value;b.memoizedProps=e;if(null===f)k=1073741823;else if(f.value===e.value){if(f.children===e.children&&g)return b.stateNode=0,$b(b),L(a,b);k=0}else{var h=f.value;if(h===k&&(0!==h||1/h===1/k)||h!==h&&k!==k){if(f.children===e.children&&g)return b.stateNode=0,$b(b),L(a,b);k=0}else if(k="function"===typeof d._calculateChangedBits?d._calculateChangedBits(h,
k):1073741823,k|=0,0===k){if(f.children===e.children&&g)return b.stateNode=0,$b(b),L(a,b)}else Ic(b,d,k,c)}b.stateNode=k;$b(b);J(a,b,e.children);return b.child}function L(a,b){null!==a&&b.child!==a.child?n("153"):void 0;if(null!==b.child){a=b.child;var c=Ab(a,a.pendingProps,a.expirationTime);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=Ab(a,a.pendingProps,a.expirationTime),c.return=b;c.sibling=null}return b.child}
function Kc(a,b,c){if(0===b.expirationTime||b.expirationTime>c){switch(b.tag){case 3:Hc(b);break;case 2:yb(b);break;case 4:ec(b,b.stateNode.containerInfo);break;case 13:$b(b)}return null}switch(b.tag){case 0:null!==a?n("155"):void 0;var d=b.type,e=b.pendingProps,f=rb(b);f=tb(b,f);d=d(e,f);b.effectTag|=1;"object"===typeof d&&null!==d&&"function"===typeof d.render&&void 0===d.$$typeof?(f=b.type,b.tag=2,b.memoizedState=null!==d.state&&void 0!==d.state?d.state:null,f=f.getDerivedStateFromProps,"function"===
typeof f&&hc(b,f,e),e=yb(b),d.updater=kc,b.stateNode=d,d._reactInternalFiber=b,nc(b,c),a=Gc(a,b,!0,e,c)):(b.tag=1,J(a,b,d),b.memoizedProps=e,a=b.child);return a;case 1:return e=b.type,c=b.pendingProps,C.current||b.memoizedProps!==c?(d=rb(b),d=tb(b,d),e=e(c,d),b.effectTag|=1,J(a,b,e),b.memoizedProps=c,a=b.child):a=L(a,b),a;case 2:e=yb(b);if(null===a)if(null===b.stateNode){var g=b.pendingProps,k=b.type;d=rb(b);var h=2===b.tag&&null!=b.type.contextTypes;f=h?tb(b,d):m;g=new k(g,f);b.memoizedState=null!==
g.state&&void 0!==g.state?g.state:null;g.updater=kc;b.stateNode=g;g._reactInternalFiber=b;h&&(h=b.stateNode,h.__reactInternalMemoizedUnmaskedChildContext=d,h.__reactInternalMemoizedMaskedChildContext=f);nc(b,c);d=!0}else{k=b.type;d=b.stateNode;h=b.memoizedProps;f=b.pendingProps;d.props=h;var l=d.context;g=rb(b);g=tb(b,g);var p=k.getDerivedStateFromProps;(k="function"===typeof p||"function"===typeof d.getSnapshotBeforeUpdate)||"function"!==typeof d.UNSAFE_componentWillReceiveProps&&"function"!==typeof d.componentWillReceiveProps||
(h!==f||l!==g)&&mc(b,d,f,g);E=!1;var u=b.memoizedState;l=d.state=u;var K=b.updateQueue;null!==K&&(Tb(b,K,f,d,c),l=b.memoizedState);h!==f||u!==l||C.current||E?("function"===typeof p&&(hc(b,p,f),l=b.memoizedState),(h=E||lc(b,h,f,u,l,g))?(k||"function"!==typeof d.UNSAFE_componentWillMount&&"function"!==typeof d.componentWillMount||("function"===typeof d.componentWillMount&&d.componentWillMount(),"function"===typeof d.UNSAFE_componentWillMount&&d.UNSAFE_componentWillMount()),"function"===typeof d.componentDidMount&&
(b.effectTag|=4)):("function"===typeof d.componentDidMount&&(b.effectTag|=4),b.memoizedProps=f,b.memoizedState=l),d.props=f,d.state=l,d.context=g,d=h):("function"===typeof d.componentDidMount&&(b.effectTag|=4),d=!1)}else k=b.type,d=b.stateNode,f=b.memoizedProps,h=b.pendingProps,d.props=f,l=d.context,g=rb(b),g=tb(b,g),p=k.getDerivedStateFromProps,(k="function"===typeof p||"function"===typeof d.getSnapshotBeforeUpdate)||"function"!==typeof d.UNSAFE_componentWillReceiveProps&&"function"!==typeof d.componentWillReceiveProps||
(f!==h||l!==g)&&mc(b,d,h,g),E=!1,l=b.memoizedState,u=d.state=l,K=b.updateQueue,null!==K&&(Tb(b,K,h,d,c),u=b.memoizedState),f!==h||l!==u||C.current||E?("function"===typeof p&&(hc(b,p,h),u=b.memoizedState),(p=E||lc(b,f,h,l,u,g))?(k||"function"!==typeof d.UNSAFE_componentWillUpdate&&"function"!==typeof d.componentWillUpdate||("function"===typeof d.componentWillUpdate&&d.componentWillUpdate(h,u,g),"function"===typeof d.UNSAFE_componentWillUpdate&&d.UNSAFE_componentWillUpdate(h,u,g)),"function"===typeof d.componentDidUpdate&&
(b.effectTag|=4),"function"===typeof d.getSnapshotBeforeUpdate&&(b.effectTag|=256)):("function"!==typeof d.componentDidUpdate||f===a.memoizedProps&&l===a.memoizedState||(b.effectTag|=4),"function"!==typeof d.getSnapshotBeforeUpdate||f===a.memoizedProps&&l===a.memoizedState||(b.effectTag|=256),b.memoizedProps=h,b.memoizedState=u),d.props=h,d.state=u,d.context=g,d=p):("function"!==typeof d.componentDidUpdate||f===a.memoizedProps&&l===a.memoizedState||(b.effectTag|=4),"function"!==typeof d.getSnapshotBeforeUpdate||
f===a.memoizedProps&&l===a.memoizedState||(b.effectTag|=256),d=!1);return Gc(a,b,d,e,c);case 3:Hc(b);e=b.updateQueue;if(null!==e)if(d=b.memoizedState,d=null!==d?d.element:null,Tb(b,e,b.pendingProps,null,c),e=b.memoizedState.element,e===d)Bc(),a=L(a,b);else{d=b.stateNode;if(d=(null===a||null===a.child)&&d.hydrate)Ra?(uc=kb(b.stateNode.containerInfo),I=b,d=vc=!0):d=!1;d?(b.effectTag|=2,b.child=tc(b,null,e,c)):(Bc(),J(a,b,e));a=b.child}else Bc(),a=L(a,b);return a;case 5:a:{d=G(dc.current);e=G(F.current);
d=Aa(e,b.type,d);e!==d&&(A(cc,b,b),A(F,d,b));null===a&&yc(b);e=b.type;h=b.memoizedProps;d=b.pendingProps;f=null!==a?a.memoizedProps:null;if(!C.current&&h===d){if(h=b.mode&1&&Ja(e,d))b.expirationTime=1073741823;if(!h||1073741823!==c){a=L(a,b);break a}}h=d.children;Ia(e,d)?h=null:f&&Ia(e,f)&&(b.effectTag|=16);Fc(a,b);1073741823!==c&&b.mode&1&&Ja(e,d)?(b.expirationTime=1073741823,b.memoizedProps=d,a=null):(J(a,b,h),b.memoizedProps=d,a=b.child)}return a;case 6:return null===a&&yc(b),b.memoizedProps=b.pendingProps,
null;case 16:return null;case 4:return ec(b,b.stateNode.containerInfo),e=b.pendingProps,C.current||b.memoizedProps!==e?(null===a?b.child=sc(b,null,e,c):J(a,b,e),b.memoizedProps=e,a=b.child):a=L(a,b),a;case 14:return e=b.type.render,c=b.pendingProps,d=b.ref,C.current||b.memoizedProps!==c||d!==(null!==a?a.ref:null)?(e=e(c,d),J(a,b,e),b.memoizedProps=c,a=b.child):a=L(a,b),a;case 10:return c=b.pendingProps,C.current||b.memoizedProps!==c?(J(a,b,c),b.memoizedProps=c,a=b.child):a=L(a,b),a;case 11:return c=
b.pendingProps.children,C.current||null!==c&&b.memoizedProps!==c?(J(a,b,c),b.memoizedProps=c,a=b.child):a=L(a,b),a;case 15:return c=b.pendingProps,b.memoizedProps===c?a=L(a,b):(J(a,b,c.children),b.memoizedProps=c,a=b.child),a;case 13:return Jc(a,b,c);case 12:a:if(d=b.type,f=b.pendingProps,h=b.memoizedProps,e=Oa?d._currentValue:d._currentValue2,g=Oa?d._changedBits:d._changedBits2,C.current||0!==g||h!==f){b.memoizedProps=f;k=f.unstable_observedBits;if(void 0===k||null===k)k=1073741823;b.stateNode=k;
if(0!==(g&k))Ic(b,d,g,c);else if(h===f){a=L(a,b);break a}c=f.children;c=c(e);b.effectTag|=1;J(a,b,c);a=b.child}else a=L(a,b);return a;default:n("156")}}function M(a){a.effectTag|=4}function Lc(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)Fa(a,c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return}c.sibling.return=c.return;c=c.sibling}}var Mc=void 0,Nc=void 0,Oc=void 0;
Pa?(Mc=function(){},Nc=function(a,b,c){(b.updateQueue=c)&&M(b)},Oc=function(a,b,c,d){c!==d&&M(b)}):Qa?(Mc=function(a){var b=a.stateNode;if(null!==a.firstEffect){var c=b.containerInfo,d=db(c);a:for(var e=a.child;null!==e;){if(5===e.tag||6===e.tag)eb(d,e.stateNode);else if(4!==e.tag&&null!==e.child){e.child.return=e;e=e.child;continue}if(e===a)break a;for(;null===e.sibling;){if(null===e.return||e.return===a)break a;e=e.return}e.sibling.return=e.return;e=e.sibling}b.pendingChildren=d;M(a);fb(c,d)}},
Nc=function(a,b,c,d,e,f,g,k){var h=null===b.firstEffect;a=a.stateNode;h&&null===c?b.stateNode=a:(c=bb(a,c,d,e,f,b,h,b.stateNode),Ga(c,d,f,g,k)&&M(b),b.stateNode=c,h?M(b):Lc(c,b))},Oc=function(a,b,c,d){c!==d&&(a=G(dc.current),c=G(F.current),b.stateNode=Ka(d,a,c,b),M(b))}):(Mc=function(){},Nc=function(){},Oc=function(){});
function Pc(a,b){var c=b.pendingProps;switch(b.tag){case 1:return null;case 2:return ub(b),null;case 3:fc(b);vb(b);c=b.stateNode;c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null);if(null===a||null===a.child)Ac(b),b.effectTag&=-3;Mc(b);return null;case 5:gc(b);var d=G(dc.current),e=b.type;if(null!==a&&null!=b.stateNode){var f=a.memoizedProps,g=b.stateNode,k=G(F.current);g=Ha(g,e,f,c,d,k);Nc(a,b,g,e,f,c,d,k);a.ref!==b.ref&&(b.effectTag|=128)}else{if(!c)return null===b.stateNode?n("166"):
void 0,null;a=G(F.current);Ac(b)?(Ra||n("175"),c=lb(b.stateNode,b.type,b.memoizedProps,d,a,b),b.updateQueue=c,null!==c&&M(b)):(f=Ea(e,c,d,a,b),Lc(f,b),Ga(f,e,c,d,a)&&M(b),b.stateNode=f);null!==b.ref&&(b.effectTag|=128)}return null;case 6:if(a&&null!=b.stateNode)Oc(a,b,a.memoizedProps,c);else{if("string"!==typeof c)return null===b.stateNode?n("166"):void 0,null;d=G(dc.current);e=G(F.current);Ac(b)?(Ra||n("176"),mb(b.stateNode,b.memoizedProps,b)&&M(b)):b.stateNode=Ka(c,d,e,b)}return null;case 14:return null;
case 16:return null;case 10:return null;case 11:return null;case 15:return null;case 4:return fc(b),Mc(b),null;case 13:return ac(b),null;case 12:return null;case 0:n("167");default:n("156")}}function Qc(a,b){var c=b.source;null===b.stack&&null!==c&&nb(c);null!==c&&sa(c);b=b.value;null!==a&&2===a.tag&&sa(a);try{b&&b.suppressReactErrorLogging||console.error(b)}catch(d){d&&d.suppressReactErrorLogging||console.error(d)}}
function Rc(a){var b=a.ref;if(null!==b)if("function"===typeof b)try{b(null)}catch(c){Sc(a,c)}else b.current=null}function Tc(a){"function"===typeof Kb&&Kb(a);switch(a.tag){case 2:Rc(a);var b=a.stateNode;if("function"===typeof b.componentWillUnmount)try{b.props=a.memoizedProps,b.state=a.memoizedState,b.componentWillUnmount()}catch(c){Sc(a,c)}break;case 5:Rc(a);break;case 4:Pa?Uc(a):Qa&&Qa&&(a=a.stateNode.containerInfo,b=db(a),gb(a,b))}}
function Vc(a){for(var b=a;;)if(Tc(b),null===b.child||Pa&&4===b.tag){if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return;b=b.return}b.sibling.return=b.return;b=b.sibling}else b.child.return=b,b=b.child}function Wc(a){return 5===a.tag||3===a.tag||4===a.tag}
function Xc(a){if(Pa){a:{for(var b=a.return;null!==b;){if(Wc(b)){var c=b;break a}b=b.return}n("160");c=void 0}var d=b=void 0;switch(c.tag){case 5:b=c.stateNode;d=!1;break;case 3:b=c.stateNode.containerInfo;d=!0;break;case 4:b=c.stateNode.containerInfo;d=!0;break;default:n("161")}c.effectTag&16&&(ab(b),c.effectTag&=-17);a:b:for(c=a;;){for(;null===c.sibling;){if(null===c.return||Wc(c.return)){c=null;break a}c=c.return}c.sibling.return=c.return;for(c=c.sibling;5!==c.tag&&6!==c.tag;){if(c.effectTag&2)continue b;
if(null===c.child||4===c.tag)continue b;else c.child.return=c,c=c.child}if(!(c.effectTag&2)){c=c.stateNode;break a}}for(var e=a;;){if(5===e.tag||6===e.tag)c?d?Ya(b,e.stateNode,c):Xa(b,e.stateNode,c):d?Ta(b,e.stateNode):Sa(b,e.stateNode);else if(4!==e.tag&&null!==e.child){e.child.return=e;e=e.child;continue}if(e===a)break;for(;null===e.sibling;){if(null===e.return||e.return===a)return;e=e.return}e.sibling.return=e.return;e=e.sibling}}}
function Uc(a){for(var b=a,c=!1,d=void 0,e=void 0;;){if(!c){c=b.return;a:for(;;){null===c?n("160"):void 0;switch(c.tag){case 5:d=c.stateNode;e=!1;break a;case 3:d=c.stateNode.containerInfo;e=!0;break a;case 4:d=c.stateNode.containerInfo;e=!0;break a}c=c.return}c=!0}if(5===b.tag||6===b.tag)Vc(b),e?$a(d,b.stateNode):Za(d,b.stateNode);else if(4===b.tag?d=b.stateNode.containerInfo:Tc(b),null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===
a)return;b=b.return;4===b.tag&&(c=!1)}b.sibling.return=b.return;b=b.sibling}}
function Yc(a,b){if(Pa)switch(b.tag){case 2:break;case 5:var c=b.stateNode;if(null!=c){var d=b.memoizedProps;a=null!==a?a.memoizedProps:d;var e=b.type,f=b.updateQueue;b.updateQueue=null;null!==f&&Wa(c,f,e,a,d,b)}break;case 6:null===b.stateNode?n("162"):void 0;c=b.memoizedProps;Ua(b.stateNode,null!==a?a.memoizedProps:c,c);break;case 3:break;case 15:break;case 16:break;default:n("163")}else if(Qa)switch(b.tag){case 2:break;case 5:break;case 6:break;case 3:case 4:b=b.stateNode;gb(b.containerInfo,b.pendingChildren);
break;default:n("163")}}function Zc(a,b,c){c=Nb(c);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){$c(d);Qc(a,b)};return c}function ad(a,b,c){c=Nb(c);c.tag=3;var d=a.stateNode;null!==d&&"function"===typeof d.componentDidCatch&&(c.callback=function(){null===bd?bd=new Set([this]):bd.add(this);var c=b.value,d=b.stack;Qc(a,b);this.componentDidCatch(c,{componentStack:null!==d?d:""})});return c}
function cd(a,b,c,d,e,f){c.effectTag|=512;c.firstEffect=c.lastEffect=null;d=Wb(d,c);a=b;do{switch(a.tag){case 3:a.effectTag|=1024;d=Zc(a,d,f);Qb(a,d,f);return;case 2:if(b=d,c=a.stateNode,0===(a.effectTag&64)&&null!==c&&"function"===typeof c.componentDidCatch&&(null===bd||!bd.has(c))){a.effectTag|=1024;d=ad(a,b,f);Qb(a,d,f);return}}a=a.return}while(null!==a)}
function dd(a){switch(a.tag){case 2:ub(a);var b=a.effectTag;return b&1024?(a.effectTag=b&-1025|64,a):null;case 3:return fc(a),vb(a),b=a.effectTag,b&1024?(a.effectTag=b&-1025|64,a):null;case 5:return gc(a),null;case 16:return b=a.effectTag,b&1024?(a.effectTag=b&-1025|64,a):null;case 4:return fc(a),null;case 13:return ac(a),null;default:return null}}var ed=Na(),fd=2,gd=ed,hd=0,id=0,N=!1,O=null,jd=null,Q=0,kd=-1,ld=!1,R=null,md=!1,nd=!1,bd=null;
function od(){if(null!==O)for(var a=O.return;null!==a;){var b=a;switch(b.tag){case 2:ub(b);break;case 3:fc(b);vb(b);break;case 5:gc(b);break;case 4:fc(b);break;case 13:ac(b)}a=a.return}jd=null;Q=0;kd=-1;ld=!1;O=null;nd=!1}
function pd(a){for(;;){var b=a.alternate,c=a.return,d=a.sibling;if(0===(a.effectTag&512)){b=Pc(b,a,Q);var e=a;if(1073741823===Q||1073741823!==e.expirationTime){var f=0;switch(e.tag){case 3:case 2:var g=e.updateQueue;null!==g&&(f=g.expirationTime)}for(g=e.child;null!==g;)0!==g.expirationTime&&(0===f||f>g.expirationTime)&&(f=g.expirationTime),g=g.sibling;e.expirationTime=f}if(null!==b)return b;null!==c&&0===(c.effectTag&512)&&(null===c.firstEffect&&(c.firstEffect=a.firstEffect),null!==a.lastEffect&&
(null!==c.lastEffect&&(c.lastEffect.nextEffect=a.firstEffect),c.lastEffect=a.lastEffect),1<a.effectTag&&(null!==c.lastEffect?c.lastEffect.nextEffect=a:c.firstEffect=a,c.lastEffect=a));if(null!==d)return d;if(null!==c)a=c;else{nd=!0;break}}else{a=dd(a,ld,Q);if(null!==a)return a.effectTag&=511,a;null!==c&&(c.firstEffect=c.lastEffect=null,c.effectTag|=512);if(null!==d)return d;if(null!==c)a=c;else break}}return null}
function qd(a){var b=Kc(a.alternate,a,Q);null===b&&(b=pd(a));ea.current=null;return b}
function rd(a,b,c){N?n("243"):void 0;N=!0;if(b!==Q||a!==jd||null===O)od(),jd=a,Q=b,kd=-1,O=Ab(jd.current,null,Q),a.pendingCommitExpirationTime=0;var d=!1;ld=!c||Q<=fd;do{try{if(c)for(;null!==O&&!sd();)O=qd(O);else for(;null!==O;)O=qd(O)}catch(f){if(null===O)d=!0,$c(f);else{null===O?n("271"):void 0;c=O;var e=c.return;if(null===e){d=!0;$c(f);break}cd(a,e,c,f,ld,Q,gd);O=pd(c)}}break}while(1);N=!1;if(d)return null;if(null===O){if(nd)return a.pendingCommitExpirationTime=b,a.current.alternate;ld?n("262"):
void 0;0<=kd&&setTimeout(function(){var b=a.current.expirationTime;0!==b&&(0===a.remainingExpirationTime||a.remainingExpirationTime<b)&&td(a,b)},kd);ud(a.current.expirationTime)}return null}
function Sc(a,b){var c;a:{N&&!md?n("263"):void 0;for(c=a.return;null!==c;){switch(c.tag){case 2:var d=c.stateNode;if("function"===typeof c.type.getDerivedStateFromCatch||"function"===typeof d.componentDidCatch&&(null===bd||!bd.has(d))){a=Wb(b,a);a=ad(c,a,1);Pb(c,a,1);jc(c,1);c=void 0;break a}break;case 3:a=Wb(b,a);a=Zc(c,a,1);Pb(c,a,1);jc(c,1);c=void 0;break a}c=c.return}3===a.tag&&(c=Wb(b,a),c=Zc(a,c,1),Pb(a,c,1),jc(a,1));c=void 0}return c}
function ic(a,b){a=0!==id?id:N?md?1:Q:b.mode&1?vd?2+10*(((a-2+15)/10|0)+1):2+25*(((a-2+500)/25|0)+1):1;vd&&(0===S||a>S)&&(S=a);return a}
function jc(a,b){for(;null!==a;){if(0===a.expirationTime||a.expirationTime>b)a.expirationTime=b;null!==a.alternate&&(0===a.alternate.expirationTime||a.alternate.expirationTime>b)&&(a.alternate.expirationTime=b);if(null===a.return)if(3===a.tag){var c=a.stateNode;!N&&0!==Q&&b<Q&&od();var d=c.current.expirationTime;N&&!md&&jd===c||td(c,d);wd>xd&&n("185")}else break;a=a.return}}function H(){gd=Na()-ed;return fd=(gd/10|0)+2}function yd(a,b,c,d,e){var f=id;id=1;try{return a(b,c,d,e)}finally{id=f}}
var zd=null,T=null,Ad=0,Bd=void 0,U=!1,V=null,W=0,S=0,Cd=!1,Dd=!1,Ed=null,Fd=null,X=!1,Gd=!1,vd=!1,Hd=null,xd=1E3,wd=0,Id=1;function Jd(a){if(0!==Ad){if(a>Ad)return;null!==Bd&&Ma(Bd)}var b=Na()-ed;Ad=a;Bd=La(Nd,{timeout:10*(a-2)-b})}
function td(a,b){if(null===a.nextScheduledRoot)a.remainingExpirationTime=b,null===T?(zd=T=a,a.nextScheduledRoot=a):(T=T.nextScheduledRoot=a,T.nextScheduledRoot=zd);else{var c=a.remainingExpirationTime;if(0===c||b<c)a.remainingExpirationTime=b}U||(X?Gd&&(V=a,W=1,Od(a,1,!1)):1===b?Pd():Jd(b))}
function Qd(){var a=0,b=null;if(null!==T)for(var c=T,d=zd;null!==d;){var e=d.remainingExpirationTime;if(0===e){null===c||null===T?n("244"):void 0;if(d===d.nextScheduledRoot){zd=T=d.nextScheduledRoot=null;break}else if(d===zd)zd=e=d.nextScheduledRoot,T.nextScheduledRoot=e,d.nextScheduledRoot=null;else if(d===T){T=c;T.nextScheduledRoot=zd;d.nextScheduledRoot=null;break}else c.nextScheduledRoot=d.nextScheduledRoot,d.nextScheduledRoot=null;d=c.nextScheduledRoot}else{if(0===a||e<a)a=e,b=d;if(d===T)break;
c=d;d=d.nextScheduledRoot}}c=V;null!==c&&c===b&&1===a?wd++:wd=0;V=b;W=a}function Nd(a){Rd(0,!0,a)}function Pd(){Rd(1,!1,null)}function Rd(a,b,c){Fd=c;Qd();if(b)for(;null!==V&&0!==W&&(0===a||a>=W)&&(!Cd||H()>=W);)H(),Od(V,W,!Cd),Qd();else for(;null!==V&&0!==W&&(0===a||a>=W);)Od(V,W,!1),Qd();null!==Fd&&(Ad=0,Bd=null);0!==W&&Jd(W);Fd=null;Cd=!1;Sd()}
function Sd(){wd=0;if(null!==Hd){var a=Hd;Hd=null;for(var b=0;b<a.length;b++){var c=a[b];try{c._onComplete()}catch(d){Dd||(Dd=!0,Ed=d)}}}if(Dd)throw a=Ed,Ed=null,Dd=!1,a;}function Od(a,b,c){U?n("245"):void 0;U=!0;c?(c=a.finishedWork,null!==c?Td(a,c,b):(c=rd(a,b,!0),null!==c&&(sd()?a.finishedWork=c:Td(a,c,b)))):(c=a.finishedWork,null!==c?Td(a,c,b):(c=rd(a,b,!1),null!==c&&Td(a,c,b)));U=!1}
function Td(a,b,c){var d=a.firstBatch;if(null!==d&&d._expirationTime<=c&&(null===Hd?Hd=[d]:Hd.push(d),d._defer)){a.finishedWork=b;a.remainingExpirationTime=0;return}a.finishedWork=null;md=N=!0;c=b.stateNode;c.current===b?n("177"):void 0;d=c.pendingCommitExpirationTime;0===d?n("261"):void 0;c.pendingCommitExpirationTime=0;H();ea.current=null;if(1<b.effectTag)if(null!==b.lastEffect){b.lastEffect.nextEffect=b;var e=b.firstEffect}else e=b;else e=b.firstEffect;Ba(c.containerInfo);for(R=e;null!==R;){var f=
!1,g=void 0;try{for(;null!==R;){if(R.effectTag&256){var k=R.alternate,h=R;switch(h.tag){case 2:if(h.effectTag&256&&null!==k){var l=k.memoizedProps,p=k.memoizedState,u=h.stateNode;u.props=h.memoizedProps;u.state=h.memoizedState;var K=u.getSnapshotBeforeUpdate(l,p);u.__reactInternalSnapshotBeforeUpdate=K}break;case 3:case 5:case 6:case 4:break;default:n("163")}}R=R.nextEffect}}catch(Da){f=!0,g=Da}f&&(null===R?n("178"):void 0,Sc(R,g),null!==R&&(R=R.nextEffect))}for(R=e;null!==R;){k=!1;l=void 0;try{for(;null!==
R;){var P=R.effectTag;P&16&&Pa&&ab(R.stateNode);if(P&128){var fa=R.alternate;if(null!==fa){var Z=fa.ref;null!==Z&&("function"===typeof Z?Z(null):Z.current=null)}}switch(P&14){case 2:Xc(R);R.effectTag&=-3;break;case 6:Xc(R);R.effectTag&=-3;Yc(R.alternate,R);break;case 4:Yc(R.alternate,R);break;case 8:p=R,Pa?Uc(p):Vc(p),p.return=null,p.child=null,p.alternate&&(p.alternate.child=null,p.alternate.return=null)}R=R.nextEffect}}catch(Da){k=!0,l=Da}k&&(null===R?n("178"):void 0,Sc(R,l),null!==R&&(R=R.nextEffect))}Ca(c.containerInfo);
c.current=b;for(R=e;null!==R;){P=!1;fa=void 0;try{for(Z=d;null!==R;){var q=R.effectTag;if(q&36){var v=R.alternate;e=R;k=Z;switch(e.tag){case 2:var r=e.stateNode;if(e.effectTag&4)if(null===v)r.props=e.memoizedProps,r.state=e.memoizedState,r.componentDidMount();else{var Y=v.memoizedProps,Kd=v.memoizedState;r.props=e.memoizedProps;r.state=e.memoizedState;r.componentDidUpdate(Y,Kd,r.__reactInternalSnapshotBeforeUpdate)}var Dc=e.updateQueue;null!==Dc&&(r.props=e.memoizedProps,r.state=e.memoizedState,Vb(e,
Dc,r,k));break;case 3:var Ec=e.updateQueue;if(null!==Ec){l=null;if(null!==e.child)switch(e.child.tag){case 5:l=ya(e.child.stateNode);break;case 2:l=e.child.stateNode}Vb(e,Ec,l,k)}break;case 5:var Ld=e.stateNode;null===v&&e.effectTag&4&&Va(Ld,e.type,e.memoizedProps,e);break;case 6:break;case 4:break;case 15:break;case 16:break;default:n("163")}}if(q&128){e=void 0;var cb=R.ref;if(null!==cb){var t=R.stateNode;switch(R.tag){case 5:e=ya(t);break;default:e=t}"function"===typeof cb?cb(e):cb.current=e}}var Md=
R.nextEffect;R.nextEffect=null;R=Md}}catch(Da){P=!0,fa=Da}P&&(null===R?n("178"):void 0,Sc(R,fa),null!==R&&(R=R.nextEffect))}N=md=!1;"function"===typeof Jb&&Jb(b.stateNode);b=c.current.expirationTime;0===b&&(bd=null);a.remainingExpirationTime=b}function sd(){return null===Fd||Fd.timeRemaining()>Id?!1:Cd=!0}function $c(a){null===V?n("246"):void 0;V.remainingExpirationTime=0;Dd||(Dd=!0,Ed=a)}function ud(a){null===V?n("246"):void 0;V.remainingExpirationTime=a}
function Ud(a,b,c,d,e){var f=b.current;if(c){c=c._reactInternalFiber;var g;b:{2===ta(c)&&2===c.tag?void 0:n("170");for(g=c;3!==g.tag;){if(sb(g)){g=g.stateNode.__reactInternalMemoizedMergedChildContext;break b}(g=g.return)?void 0:n("171")}g=g.stateNode.context}c=sb(c)?xb(c,g):g}else c=m;null===b.context?b.context=c:b.pendingContext=c;b=e;e=Nb(d);e.payload={element:a};b=void 0===b?null:b;null!==b&&(e.callback=b);Pb(f,e,d);jc(f,d);return d}
var Vd={updateContainerAtExpirationTime:Ud,createContainer:function(a,b,c){b=new D(3,null,null,b?3:0);a={current:b,containerInfo:a,pendingChildren:null,earliestPendingTime:0,latestPendingTime:0,earliestSuspendedTime:0,latestSuspendedTime:0,latestPingedTime:0,pendingCommitExpirationTime:0,finishedWork:null,context:null,pendingContext:null,hydrate:c,remainingExpirationTime:0,firstBatch:null,nextScheduledRoot:null};return b.stateNode=a},updateContainer:function(a,b,c,d){var e=b.current,f=H();e=ic(f,
e);return Ud(a,b,c,e,d)},flushRoot:function(a,b){U?n("253"):void 0;V=a;W=b;Od(a,b,!1);Pd();Sd()},requestWork:td,computeUniqueAsyncExpiration:function(){var a=2+25*(((H()-2+500)/25|0)+1);a<=hd&&(a=hd+1);return hd=a},batchedUpdates:function(a,b){var c=X;X=!0;try{return a(b)}finally{(X=c)||U||Pd()}},unbatchedUpdates:function(a,b){if(X&&!Gd){Gd=!0;try{return a(b)}finally{Gd=!1}}return a(b)},deferredUpdates:function(a){var b=id;id=2+25*(((H()-2+500)/25|0)+1);try{return a()}finally{id=b}},syncUpdates:yd,
interactiveUpdates:function(a,b,c){if(vd)return a(b,c);X||U||0===S||(Rd(S,!1,null),S=0);var d=vd,e=X;X=vd=!0;try{return a(b,c)}finally{vd=d,(X=e)||U||Pd()}},flushInteractiveUpdates:function(){U||0===S||(Rd(S,!1,null),S=0)},flushControlled:function(a){var b=X;X=!0;try{yd(a)}finally{(X=b)||U||Rd(1,!1,null)}},flushSync:function(a,b){U?n("187"):void 0;var c=X;X=!0;try{return yd(a,b)}finally{X=c,Pd()}},getPublicRootInstance:function(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return ya(a.child.stateNode);
default:return a.child.stateNode}},findHostInstance:function(a){var b=a._reactInternalFiber;void 0===b&&("function"===typeof a.render?n("188"):n("268",Object.keys(a)));a=wa(b);return null===a?null:a.stateNode},findHostInstanceWithNoPortals:function(a){a=xa(a);return null===a?null:a.stateNode},injectIntoDevTools:function(a){var b=a.findFiberByHostInstance;return Ib(aa({},a,{findHostInstanceByFiber:function(a){a=wa(a);return null===a?null:a.stateNode},findFiberByHostInstance:function(a){return b?b(a):
null}}))}};module.exports=Vd.default?Vd.default:Vd;

    var $$$renderer = module.exports;
    module.exports = $$$reconciler;
    return $$$renderer;
};

},{"fbjs/lib/emptyObject":10,"fbjs/lib/invariant":11,"fbjs/lib/shallowEqual":12,"object-assign":14,"react":23}],20:[function(require,module,exports){
(function (process){
'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./cjs/react-reconciler.production.min.js');
} else {
  module.exports = require('./cjs/react-reconciler.development.js');
}

}).call(this,require('_process'))
},{"./cjs/react-reconciler.development.js":18,"./cjs/react-reconciler.production.min.js":19,"_process":15}],21:[function(require,module,exports){
(function (process){
/** @license React v16.4.1
 * react.development.js
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';



if (process.env.NODE_ENV !== "production") {
  (function() {
'use strict';

var _assign = require('object-assign');
var invariant = require('fbjs/lib/invariant');
var emptyObject = require('fbjs/lib/emptyObject');
var warning = require('fbjs/lib/warning');
var emptyFunction = require('fbjs/lib/emptyFunction');
var checkPropTypes = require('prop-types/checkPropTypes');

// TODO: this is special because it gets imported during build.

var ReactVersion = '16.4.1';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_TIMEOUT_TYPE = hasSymbol ? Symbol.for('react.timeout') : 0xead1;

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';

function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable === 'undefined') {
    return null;
  }
  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }
  return null;
}

// Relying on the `invariant()` implementation lets us
// have preserve the format and params in the www builds.

// Exports ReactDOM.createRoot


// Experimental error-boundary API that can recover from errors within a single
// render phase

// Suspense
var enableSuspense = false;
// Helps identify side effects in begin-phase lifecycle hooks and setState reducers:


// In some cases, StrictMode should also double-render lifecycles.
// This can be confusing for tests though,
// And it can be bad for performance in production.
// This feature flag can be used to control the behavior:


// To preserve the "Pause on caught exceptions" behavior of the debugger, we
// replay the begin phase of a failed component inside invokeGuardedCallback.


// Warn about deprecated, async-unsafe lifecycles; relates to RFC #6:


// Warn about legacy context API


// Gather advanced timing metrics for Profiler subtrees.


// Only used in www builds.

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

var didWarnStateUpdateForUnmountedComponent = {};

function warnNoop(publicInstance, callerName) {
  {
    var _constructor = publicInstance.constructor;
    var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
    var warningKey = componentName + '.' + callerName;
    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
      return;
    }
    warning(false, "Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);
    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
  }
}

/**
 * This is the abstract API for an update queue.
 */
var ReactNoopUpdateQueue = {
  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    return false;
  },

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance, callback, callerName) {
    warnNoop(publicInstance, 'forceUpdate');
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
    warnNoop(publicInstance, 'replaceState');
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} Name of the calling function in the public API.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
    warnNoop(publicInstance, 'setState');
  }
};

/**
 * Base class helpers for the updating state of a component.
 */
function Component(props, context, updater) {
  this.props = props;
  this.context = context;
  this.refs = emptyObject;
  // We initialize the default updater but the real one gets injected by the
  // renderer.
  this.updater = updater || ReactNoopUpdateQueue;
}

Component.prototype.isReactComponent = {};

/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */
Component.prototype.setState = function (partialState, callback) {
  !(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null) ? invariant(false, 'setState(...): takes an object of state variables to update or a function which returns an object of state variables.') : void 0;
  this.updater.enqueueSetState(this, partialState, callback, 'setState');
};

/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */
Component.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
};

/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */
{
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };
  var defineDeprecationWarning = function (methodName, info) {
    Object.defineProperty(Component.prototype, methodName, {
      get: function () {
        lowPriorityWarning$1(false, '%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);
        return undefined;
      }
    });
  };
  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}

function ComponentDummy() {}
ComponentDummy.prototype = Component.prototype;

/**
 * Convenience component with default shallow equality check for sCU.
 */
function PureComponent(props, context, updater) {
  this.props = props;
  this.context = context;
  this.refs = emptyObject;
  this.updater = updater || ReactNoopUpdateQueue;
}

var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
pureComponentPrototype.constructor = PureComponent;
// Avoid an extra prototype jump for these methods.
_assign(pureComponentPrototype, Component.prototype);
pureComponentPrototype.isPureReactComponent = true;

// an immutable object with a single mutable value
function createRef() {
  var refObject = {
    current: null
  };
  {
    Object.seal(refObject);
  }
  return refObject;
}

/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

var hasOwnProperty = Object.prototype.hasOwnProperty;

var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};

var specialPropKeyWarningShown = void 0;
var specialPropRefWarningShown = void 0;

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }
  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }
  return config.key !== undefined;
}

function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function () {
    if (!specialPropKeyWarningShown) {
      specialPropKeyWarningShown = true;
      warning(false, '%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
    }
  };
  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}

function defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function () {
    if (!specialPropRefWarningShown) {
      specialPropRefWarningShown = true;
      warning(false, '%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
    }
  };
  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}

/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, no instanceof check
 * will work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} key
 * @param {string|object} ref
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @param {*} owner
 * @param {*} props
 * @internal
 */
var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,

    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,

    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {};

    // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.
    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    });
    // self and source are DEV only properties.
    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    });
    // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.
    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });
    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};

/**
 * Create and return a new ReactElement of the given type.
 * See https://reactjs.org/docs/react-api.html#createelement
 */
function createElement(type, config, children) {
  var propName = void 0;

  // Reserved names are extracted
  var props = {};

  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;
    }
    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source;
    // Remaining properties are added to a new props object
    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  }

  // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.
  var childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);
    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }
    props.children = childArray;
  }

  // Resolve default props
  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;
    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }
  {
    if (key || ref) {
      if (typeof props.$$typeof === 'undefined' || props.$$typeof !== REACT_ELEMENT_TYPE) {
        var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
        if (key) {
          defineKeyPropWarningGetter(props, displayName);
        }
        if (ref) {
          defineRefPropWarningGetter(props, displayName);
        }
      }
    }
  }
  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
}

/**
 * Return a function that produces ReactElements of a given type.
 * See https://reactjs.org/docs/react-api.html#createfactory
 */


function cloneAndReplaceKey(oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);

  return newElement;
}

/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://reactjs.org/docs/react-api.html#cloneelement
 */
function cloneElement(element, config, children) {
  !!(element === null || element === undefined) ? invariant(false, 'React.cloneElement(...): The argument must be a React element, but you passed %s.', element) : void 0;

  var propName = void 0;

  // Original props are copied
  var props = _assign({}, element.props);

  // Reserved names are extracted
  var key = element.key;
  var ref = element.ref;
  // Self is preserved since the owner is preserved.
  var self = element._self;
  // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.
  var source = element._source;

  // Owner will be preserved, unless ref is overridden
  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner.current;
    }
    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    // Remaining properties override existing props
    var defaultProps = void 0;
    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }
    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  }

  // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.
  var childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);
    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
}

/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a valid component.
 * @final
 */
function isValidElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}

var ReactDebugCurrentFrame = {};

{
  // Component that is being worked on
  ReactDebugCurrentFrame.getCurrentStack = null;

  ReactDebugCurrentFrame.getStackAddendum = function () {
    var impl = ReactDebugCurrentFrame.getCurrentStack;
    if (impl) {
      return impl();
    }
    return null;
  };
}

var SEPARATOR = '.';
var SUBSEPARATOR = ':';

/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */
function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = ('' + key).replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });

  return '$' + escapedString;
}

/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */

var didWarnAboutMaps = false;

var userProvidedKeyEscapeRegex = /\/+/g;
function escapeUserProvidedKey(text) {
  return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
}

var POOL_SIZE = 10;
var traverseContextPool = [];
function getPooledTraverseContext(mapResult, keyPrefix, mapFunction, mapContext) {
  if (traverseContextPool.length) {
    var traverseContext = traverseContextPool.pop();
    traverseContext.result = mapResult;
    traverseContext.keyPrefix = keyPrefix;
    traverseContext.func = mapFunction;
    traverseContext.context = mapContext;
    traverseContext.count = 0;
    return traverseContext;
  } else {
    return {
      result: mapResult,
      keyPrefix: keyPrefix,
      func: mapFunction,
      context: mapContext,
      count: 0
    };
  }
}

function releaseTraverseContext(traverseContext) {
  traverseContext.result = null;
  traverseContext.keyPrefix = null;
  traverseContext.func = null;
  traverseContext.context = null;
  traverseContext.count = 0;
  if (traverseContextPool.length < POOL_SIZE) {
    traverseContextPool.push(traverseContext);
  }
}

/**
 * @param {?*} children Children tree container.
 * @param {!string} nameSoFar Name of the key path so far.
 * @param {!function} callback Callback to invoke with each child found.
 * @param {?*} traverseContext Used to pass information throughout the traversal
 * process.
 * @return {!number} The number of children in this subtree.
 */
function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  var invokeCallback = false;

  if (children === null) {
    invokeCallback = true;
  } else {
    switch (type) {
      case 'string':
      case 'number':
        invokeCallback = true;
        break;
      case 'object':
        switch (children.$$typeof) {
          case REACT_ELEMENT_TYPE:
          case REACT_PORTAL_TYPE:
            invokeCallback = true;
        }
    }
  }

  if (invokeCallback) {
    callback(traverseContext, children,
    // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows.
    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
    return 1;
  }

  var child = void 0;
  var nextName = void 0;
  var subtreeCount = 0; // Count of children found in the current subtree.
  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getComponentKey(child, i);
      subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
    }
  } else {
    var iteratorFn = getIteratorFn(children);
    if (typeof iteratorFn === 'function') {
      {
        // Warn about using Maps as children
        if (iteratorFn === children.entries) {
          !didWarnAboutMaps ? warning(false, 'Using Maps as children is unsupported and will likely yield ' + 'unexpected results. Convert it to a sequence/iterable of keyed ' + 'ReactElements instead.%s', ReactDebugCurrentFrame.getStackAddendum()) : void 0;
          didWarnAboutMaps = true;
        }
      }

      var iterator = iteratorFn.call(children);
      var step = void 0;
      var ii = 0;
      while (!(step = iterator.next()).done) {
        child = step.value;
        nextName = nextNamePrefix + getComponentKey(child, ii++);
        subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
      }
    } else if (type === 'object') {
      var addendum = '';
      {
        addendum = ' If you meant to render a collection of children, use an array ' + 'instead.' + ReactDebugCurrentFrame.getStackAddendum();
      }
      var childrenString = '' + children;
      invariant(false, 'Objects are not valid as a React child (found: %s).%s', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum);
    }
  }

  return subtreeCount;
}

/**
 * Traverses children that are typically specified as `props.children`, but
 * might also be specified through attributes:
 *
 * - `traverseAllChildren(this.props.children, ...)`
 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
 *
 * The `traverseContext` is an optional argument that is passed through the
 * entire traversal. It can be used to store accumulations or anything else that
 * the callback might find relevant.
 *
 * @param {?*} children Children tree object.
 * @param {!function} callback To invoke upon traversing each child.
 * @param {?*} traverseContext Context for traversal.
 * @return {!number} The number of children in this subtree.
 */
function traverseAllChildren(children, callback, traverseContext) {
  if (children == null) {
    return 0;
  }

  return traverseAllChildrenImpl(children, '', callback, traverseContext);
}

/**
 * Generate a key string that identifies a component within a set.
 *
 * @param {*} component A component that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */
function getComponentKey(component, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (typeof component === 'object' && component !== null && component.key != null) {
    // Explicit key
    return escape(component.key);
  }
  // Implicit key determined by the index in the set
  return index.toString(36);
}

function forEachSingleChild(bookKeeping, child, name) {
  var func = bookKeeping.func,
      context = bookKeeping.context;

  func.call(context, child, bookKeeping.count++);
}

/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */
function forEachChildren(children, forEachFunc, forEachContext) {
  if (children == null) {
    return children;
  }
  var traverseContext = getPooledTraverseContext(null, null, forEachFunc, forEachContext);
  traverseAllChildren(children, forEachSingleChild, traverseContext);
  releaseTraverseContext(traverseContext);
}

function mapSingleChildIntoContext(bookKeeping, child, childKey) {
  var result = bookKeeping.result,
      keyPrefix = bookKeeping.keyPrefix,
      func = bookKeeping.func,
      context = bookKeeping.context;


  var mappedChild = func.call(context, child, bookKeeping.count++);
  if (Array.isArray(mappedChild)) {
    mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, emptyFunction.thatReturnsArgument);
  } else if (mappedChild != null) {
    if (isValidElement(mappedChild)) {
      mappedChild = cloneAndReplaceKey(mappedChild,
      // Keep both the (mapped) and old keys if they differ, just as
      // traverseAllChildren used to do for objects as children
      keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
    }
    result.push(mappedChild);
  }
}

function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
  var escapedPrefix = '';
  if (prefix != null) {
    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
  }
  var traverseContext = getPooledTraverseContext(array, escapedPrefix, func, context);
  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
  releaseTraverseContext(traverseContext);
}

/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
 *
 * The provided mapFunction(child, key, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */
function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, func, context);
  return result;
}

/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrencount
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */
function countChildren(children) {
  return traverseAllChildren(children, emptyFunction.thatReturnsNull, null);
}

/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
 */
function toArray(children) {
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, emptyFunction.thatReturnsArgument);
  return result;
}

/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */
function onlyChild(children) {
  !isValidElement(children) ? invariant(false, 'React.Children.only expected to receive a single React element child.') : void 0;
  return children;
}

function createContext(defaultValue, calculateChangedBits) {
  if (calculateChangedBits === undefined) {
    calculateChangedBits = null;
  } else {
    {
      !(calculateChangedBits === null || typeof calculateChangedBits === 'function') ? warning(false, 'createContext: Expected the optional second argument to be a ' + 'function. Instead received: %s', calculateChangedBits) : void 0;
    }
  }

  var context = {
    $$typeof: REACT_CONTEXT_TYPE,
    _calculateChangedBits: calculateChangedBits,
    _defaultValue: defaultValue,
    _currentValue: defaultValue,
    // As a workaround to support multiple concurrent renderers, we categorize
    // some renderers as primary and others as secondary. We only expect
    // there to be two concurrent renderers at most: React Native (primary) and
    // Fabric (secondary); React DOM (primary) and React ART (secondary).
    // Secondary renderers store their context values on separate fields.
    _currentValue2: defaultValue,
    _changedBits: 0,
    _changedBits2: 0,
    // These are circular
    Provider: null,
    Consumer: null
  };

  context.Provider = {
    $$typeof: REACT_PROVIDER_TYPE,
    _context: context
  };
  context.Consumer = context;

  {
    context._currentRenderer = null;
    context._currentRenderer2 = null;
  }

  return context;
}

function forwardRef(render) {
  {
    !(typeof render === 'function') ? warning(false, 'forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render) : void 0;

    if (render != null) {
      !(render.defaultProps == null && render.propTypes == null) ? warning(false, 'forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?') : void 0;
    }
  }

  return {
    $$typeof: REACT_FORWARD_REF_TYPE,
    render: render
  };
}

var describeComponentFrame = function (name, source, ownerName) {
  return '\n    in ' + (name || 'Unknown') + (source ? ' (at ' + source.fileName.replace(/^.*[\\\/]/, '') + ':' + source.lineNumber + ')' : ownerName ? ' (created by ' + ownerName + ')' : '');
};

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_ASYNC_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_TIMEOUT_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

function getComponentName(fiber) {
  var type = fiber.type;

  if (typeof type === 'function') {
    return type.displayName || type.name;
  }
  if (typeof type === 'string') {
    return type;
  }
  switch (type) {
    case REACT_ASYNC_MODE_TYPE:
      return 'AsyncMode';
    case REACT_CONTEXT_TYPE:
      return 'Context.Consumer';
    case REACT_FRAGMENT_TYPE:
      return 'ReactFragment';
    case REACT_PORTAL_TYPE:
      return 'ReactPortal';
    case REACT_PROFILER_TYPE:
      return 'Profiler(' + fiber.pendingProps.id + ')';
    case REACT_PROVIDER_TYPE:
      return 'Context.Provider';
    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';
    case REACT_TIMEOUT_TYPE:
      return 'Timeout';
  }
  if (typeof type === 'object' && type !== null) {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        var functionName = type.render.displayName || type.render.name || '';
        return functionName !== '' ? 'ForwardRef(' + functionName + ')' : 'ForwardRef';
    }
  }
  return null;
}

/**
 * ReactElementValidator provides a wrapper around a element factory
 * which validates the props passed to the element. This is intended to be
 * used only in DEV and could be replaced by a static type checker for languages
 * that support it.
 */

var currentlyValidatingElement = void 0;
var propTypesMisspellWarningShown = void 0;

var getDisplayName = function () {};
var getStackAddendum = function () {};

{
  currentlyValidatingElement = null;

  propTypesMisspellWarningShown = false;

  getDisplayName = function (element) {
    if (element == null) {
      return '#empty';
    } else if (typeof element === 'string' || typeof element === 'number') {
      return '#text';
    } else if (typeof element.type === 'string') {
      return element.type;
    }

    var type = element.type;
    if (type === REACT_FRAGMENT_TYPE) {
      return 'React.Fragment';
    } else if (typeof type === 'object' && type !== null && type.$$typeof === REACT_FORWARD_REF_TYPE) {
      var functionName = type.render.displayName || type.render.name || '';
      return functionName !== '' ? 'ForwardRef(' + functionName + ')' : 'ForwardRef';
    } else {
      return type.displayName || type.name || 'Unknown';
    }
  };

  getStackAddendum = function () {
    var stack = '';
    if (currentlyValidatingElement) {
      var name = getDisplayName(currentlyValidatingElement);
      var owner = currentlyValidatingElement._owner;
      stack += describeComponentFrame(name, currentlyValidatingElement._source, owner && getComponentName(owner));
    }
    stack += ReactDebugCurrentFrame.getStackAddendum() || '';
    return stack;
  };
}

function getDeclarationErrorAddendum() {
  if (ReactCurrentOwner.current) {
    var name = getComponentName(ReactCurrentOwner.current);
    if (name) {
      return '\n\nCheck the render method of `' + name + '`.';
    }
  }
  return '';
}

function getSourceInfoErrorAddendum(elementProps) {
  if (elementProps !== null && elementProps !== undefined && elementProps.__source !== undefined) {
    var source = elementProps.__source;
    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
    var lineNumber = source.lineNumber;
    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
  }
  return '';
}

/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */
var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  var info = getDeclarationErrorAddendum();

  if (!info) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
    if (parentName) {
      info = '\n\nCheck the top-level render call using <' + parentName + '>.';
    }
  }
  return info;
}

/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */
function validateExplicitKey(element, parentType) {
  if (!element._store || element._store.validated || element.key != null) {
    return;
  }
  element._store.validated = true;

  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
    return;
  }
  ownerHasKeyUseWarning[currentComponentErrorInfo] = true;

  // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.
  var childOwner = '';
  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
    // Give the component that originally created this child.
    childOwner = ' It was passed a child from ' + getComponentName(element._owner) + '.';
  }

  currentlyValidatingElement = element;
  {
    warning(false, 'Each child in an array or iterator should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.%s', currentComponentErrorInfo, childOwner, getStackAddendum());
  }
  currentlyValidatingElement = null;
}

/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */
function validateChildKeys(node, parentType) {
  if (typeof node !== 'object') {
    return;
  }
  if (Array.isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];
      if (isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (isValidElement(node)) {
    // This element was passed in a valid location.
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) {
    var iteratorFn = getIteratorFn(node);
    if (typeof iteratorFn === 'function') {
      // Entry iterators used to provide implicit keys,
      // but now we print a separate warning for them later.
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step = void 0;
        while (!(step = iterator.next()).done) {
          if (isValidElement(step.value)) {
            validateExplicitKey(step.value, parentType);
          }
        }
      }
    }
  }
}

/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */
function validatePropTypes(element) {
  var type = element.type;
  var name = void 0,
      propTypes = void 0;
  if (typeof type === 'function') {
    // Class or functional component
    name = type.displayName || type.name;
    propTypes = type.propTypes;
  } else if (typeof type === 'object' && type !== null && type.$$typeof === REACT_FORWARD_REF_TYPE) {
    // ForwardRef
    var functionName = type.render.displayName || type.render.name || '';
    name = functionName !== '' ? 'ForwardRef(' + functionName + ')' : 'ForwardRef';
    propTypes = type.propTypes;
  } else {
    return;
  }
  if (propTypes) {
    currentlyValidatingElement = element;
    checkPropTypes(propTypes, element.props, 'prop', name, getStackAddendum);
    currentlyValidatingElement = null;
  } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
    propTypesMisspellWarningShown = true;
    warning(false, 'Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', name || 'Unknown');
  }
  if (typeof type.getDefaultProps === 'function') {
    !type.getDefaultProps.isReactClassApproved ? warning(false, 'getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.') : void 0;
  }
}

/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */
function validateFragmentProps(fragment) {
  currentlyValidatingElement = fragment;

  var keys = Object.keys(fragment.props);
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (key !== 'children' && key !== 'key') {
      warning(false, 'Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.%s', key, getStackAddendum());
      break;
    }
  }

  if (fragment.ref !== null) {
    warning(false, 'Invalid attribute `ref` supplied to `React.Fragment`.%s', getStackAddendum());
  }

  currentlyValidatingElement = null;
}

function createElementWithValidation(type, props, children) {
  var validType = isValidElementType(type);

  // We warn in this case but don't throw. We expect the element creation to
  // succeed and there will likely be errors in render.
  if (!validType) {
    var info = '';
    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
    }

    var sourceInfo = getSourceInfoErrorAddendum(props);
    if (sourceInfo) {
      info += sourceInfo;
    } else {
      info += getDeclarationErrorAddendum();
    }

    info += getStackAddendum() || '';

    var typeString = void 0;
    if (type === null) {
      typeString = 'null';
    } else if (Array.isArray(type)) {
      typeString = 'array';
    } else {
      typeString = typeof type;
    }

    warning(false, 'React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
  }

  var element = createElement.apply(this, arguments);

  // The result can be nullish if a mock or a custom function is used.
  // TODO: Drop this when these are no longer allowed as the type argument.
  if (element == null) {
    return element;
  }

  // Skip key warning if the type isn't valid since our key validation logic
  // doesn't expect a non-string/function type and can throw confusing errors.
  // We don't want exception behavior to differ between dev and prod.
  // (Rendering will throw with a helpful message and as soon as the type is
  // fixed, the key warnings will appear.)
  if (validType) {
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], type);
    }
  }

  if (type === REACT_FRAGMENT_TYPE) {
    validateFragmentProps(element);
  } else {
    validatePropTypes(element);
  }

  return element;
}

function createFactoryWithValidation(type) {
  var validatedFactory = createElementWithValidation.bind(null, type);
  validatedFactory.type = type;
  // Legacy hook: remove it
  {
    Object.defineProperty(validatedFactory, 'type', {
      enumerable: false,
      get: function () {
        lowPriorityWarning$1(false, 'Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');
        Object.defineProperty(this, 'type', {
          value: type
        });
        return type;
      }
    });
  }

  return validatedFactory;
}

function cloneElementWithValidation(element, props, children) {
  var newElement = cloneElement.apply(this, arguments);
  for (var i = 2; i < arguments.length; i++) {
    validateChildKeys(arguments[i], newElement.type);
  }
  validatePropTypes(newElement);
  return newElement;
}

var React = {
  Children: {
    map: mapChildren,
    forEach: forEachChildren,
    count: countChildren,
    toArray: toArray,
    only: onlyChild
  },

  createRef: createRef,
  Component: Component,
  PureComponent: PureComponent,

  createContext: createContext,
  forwardRef: forwardRef,

  Fragment: REACT_FRAGMENT_TYPE,
  StrictMode: REACT_STRICT_MODE_TYPE,
  unstable_AsyncMode: REACT_ASYNC_MODE_TYPE,
  unstable_Profiler: REACT_PROFILER_TYPE,

  createElement: createElementWithValidation,
  cloneElement: cloneElementWithValidation,
  createFactory: createFactoryWithValidation,
  isValidElement: isValidElement,

  version: ReactVersion,

  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
    ReactCurrentOwner: ReactCurrentOwner,
    // Used by renderers to avoid bundling object-assign twice in UMD bundles:
    assign: _assign
  }
};

if (enableSuspense) {
  React.Timeout = REACT_TIMEOUT_TYPE;
}

{
  _assign(React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, {
    // These should not be included in production.
    ReactDebugCurrentFrame: ReactDebugCurrentFrame,
    // Shim for React DOM 16.0.0 which still destructured (but not used) this.
    // TODO: remove in React 17.0.
    ReactComponentTreeHook: {}
  });
}



var React$2 = Object.freeze({
	default: React
});

var React$3 = ( React$2 && React ) || React$2;

// TODO: decide on the top-level export form.
// This is hacky but makes it work with both Rollup and Jest.
var react = React$3.default ? React$3.default : React$3;

module.exports = react;
  })();
}

}).call(this,require('_process'))
},{"_process":15,"fbjs/lib/emptyFunction":9,"fbjs/lib/emptyObject":10,"fbjs/lib/invariant":11,"fbjs/lib/warning":13,"object-assign":14,"prop-types/checkPropTypes":16}],22:[function(require,module,exports){
/** @license React v16.4.1
 * react.production.min.js
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';var k=require("object-assign"),n=require("fbjs/lib/invariant"),p=require("fbjs/lib/emptyObject"),q=require("fbjs/lib/emptyFunction"),r="function"===typeof Symbol&&Symbol.for,t=r?Symbol.for("react.element"):60103,u=r?Symbol.for("react.portal"):60106,v=r?Symbol.for("react.fragment"):60107,w=r?Symbol.for("react.strict_mode"):60108,x=r?Symbol.for("react.profiler"):60114,y=r?Symbol.for("react.provider"):60109,z=r?Symbol.for("react.context"):60110,A=r?Symbol.for("react.async_mode"):60111,B=
r?Symbol.for("react.forward_ref"):60112;r&&Symbol.for("react.timeout");var C="function"===typeof Symbol&&Symbol.iterator;function D(a){for(var b=arguments.length-1,e="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=0;c<b;c++)e+="&args[]="+encodeURIComponent(arguments[c+1]);n(!1,"Minified React error #"+a+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",e)}
var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}};function F(a,b,e){this.props=a;this.context=b;this.refs=p;this.updater=e||E}F.prototype.isReactComponent={};F.prototype.setState=function(a,b){"object"!==typeof a&&"function"!==typeof a&&null!=a?D("85"):void 0;this.updater.enqueueSetState(this,a,b,"setState")};F.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};function G(){}
G.prototype=F.prototype;function H(a,b,e){this.props=a;this.context=b;this.refs=p;this.updater=e||E}var I=H.prototype=new G;I.constructor=H;k(I,F.prototype);I.isPureReactComponent=!0;var J={current:null},K=Object.prototype.hasOwnProperty,L={key:!0,ref:!0,__self:!0,__source:!0};
function M(a,b,e){var c=void 0,d={},g=null,h=null;if(null!=b)for(c in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(g=""+b.key),b)K.call(b,c)&&!L.hasOwnProperty(c)&&(d[c]=b[c]);var f=arguments.length-2;if(1===f)d.children=e;else if(1<f){for(var l=Array(f),m=0;m<f;m++)l[m]=arguments[m+2];d.children=l}if(a&&a.defaultProps)for(c in f=a.defaultProps,f)void 0===d[c]&&(d[c]=f[c]);return{$$typeof:t,type:a,key:g,ref:h,props:d,_owner:J.current}}
function N(a){return"object"===typeof a&&null!==a&&a.$$typeof===t}function escape(a){var b={"=":"=0",":":"=2"};return"$"+(""+a).replace(/[=:]/g,function(a){return b[a]})}var O=/\/+/g,P=[];function Q(a,b,e,c){if(P.length){var d=P.pop();d.result=a;d.keyPrefix=b;d.func=e;d.context=c;d.count=0;return d}return{result:a,keyPrefix:b,func:e,context:c,count:0}}function R(a){a.result=null;a.keyPrefix=null;a.func=null;a.context=null;a.count=0;10>P.length&&P.push(a)}
function S(a,b,e,c){var d=typeof a;if("undefined"===d||"boolean"===d)a=null;var g=!1;if(null===a)g=!0;else switch(d){case "string":case "number":g=!0;break;case "object":switch(a.$$typeof){case t:case u:g=!0}}if(g)return e(c,a,""===b?"."+T(a,0):b),1;g=0;b=""===b?".":b+":";if(Array.isArray(a))for(var h=0;h<a.length;h++){d=a[h];var f=b+T(d,h);g+=S(d,f,e,c)}else if(null===a||"undefined"===typeof a?f=null:(f=C&&a[C]||a["@@iterator"],f="function"===typeof f?f:null),"function"===typeof f)for(a=f.call(a),
h=0;!(d=a.next()).done;)d=d.value,f=b+T(d,h++),g+=S(d,f,e,c);else"object"===d&&(e=""+a,D("31","[object Object]"===e?"object with keys {"+Object.keys(a).join(", ")+"}":e,""));return g}function T(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(a.key):b.toString(36)}function U(a,b){a.func.call(a.context,b,a.count++)}
function V(a,b,e){var c=a.result,d=a.keyPrefix;a=a.func.call(a.context,b,a.count++);Array.isArray(a)?W(a,c,e,q.thatReturnsArgument):null!=a&&(N(a)&&(b=d+(!a.key||b&&b.key===a.key?"":(""+a.key).replace(O,"$&/")+"/")+e,a={$$typeof:t,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}),c.push(a))}function W(a,b,e,c,d){var g="";null!=e&&(g=(""+e).replace(O,"$&/")+"/");b=Q(b,g,c,d);null==a||S(a,"",V,b);R(b)}
var X={Children:{map:function(a,b,e){if(null==a)return a;var c=[];W(a,c,null,b,e);return c},forEach:function(a,b,e){if(null==a)return a;b=Q(null,null,b,e);null==a||S(a,"",U,b);R(b)},count:function(a){return null==a?0:S(a,"",q.thatReturnsNull,null)},toArray:function(a){var b=[];W(a,b,null,q.thatReturnsArgument);return b},only:function(a){N(a)?void 0:D("143");return a}},createRef:function(){return{current:null}},Component:F,PureComponent:H,createContext:function(a,b){void 0===b&&(b=null);a={$$typeof:z,
_calculateChangedBits:b,_defaultValue:a,_currentValue:a,_currentValue2:a,_changedBits:0,_changedBits2:0,Provider:null,Consumer:null};a.Provider={$$typeof:y,_context:a};return a.Consumer=a},forwardRef:function(a){return{$$typeof:B,render:a}},Fragment:v,StrictMode:w,unstable_AsyncMode:A,unstable_Profiler:x,createElement:M,cloneElement:function(a,b,e){null===a||void 0===a?D("267",a):void 0;var c=void 0,d=k({},a.props),g=a.key,h=a.ref,f=a._owner;if(null!=b){void 0!==b.ref&&(h=b.ref,f=J.current);void 0!==
b.key&&(g=""+b.key);var l=void 0;a.type&&a.type.defaultProps&&(l=a.type.defaultProps);for(c in b)K.call(b,c)&&!L.hasOwnProperty(c)&&(d[c]=void 0===b[c]&&void 0!==l?l[c]:b[c])}c=arguments.length-2;if(1===c)d.children=e;else if(1<c){l=Array(c);for(var m=0;m<c;m++)l[m]=arguments[m+2];d.children=l}return{$$typeof:t,type:a.type,key:g,ref:h,props:d,_owner:f}},createFactory:function(a){var b=M.bind(null,a);b.type=a;return b},isValidElement:N,version:"16.4.1",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:J,
assign:k}},Y={default:X},Z=Y&&X||Y;module.exports=Z.default?Z.default:Z;

},{"fbjs/lib/emptyFunction":9,"fbjs/lib/emptyObject":10,"fbjs/lib/invariant":11,"object-assign":14}],23:[function(require,module,exports){
(function (process){
'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./cjs/react.production.min.js');
} else {
  module.exports = require('./cjs/react.development.js');
}

}).call(this,require('_process'))
},{"./cjs/react.development.js":21,"./cjs/react.production.min.js":22,"_process":15}]},{},[8]);
