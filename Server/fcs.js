/*!
 * FCS Javascript Library
 *
 * Copyright 2012, Genband
 */

(function( window, undefined ) {
    
// DO NOT UPDATE THIS DEFINITION
// IT IS ONLY USED FOR REMOVING TEST
// SPECIFIC REFERENCES FROM API.
var __testonly__;
/*!
 * jQuery JavaScript Library v1.11.2-pre -css,-css/addGetHookIf,-css/curCSS,-css/defaultDisplay,-css/hiddenVisibleSelectors,-css/support,-css/swap,-css/var/cssExpand,-css/var/isHidden,-css/var/rmargin,-css/var/rnumnonpx,-effects,-effects/Tween,-effects/animatedSelector,-effects/support,-dimensions,-offset,-deprecated,-wrap,-event/alias
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-12-12T14:26Z
 */

(function( global, factory ) {

	if ( typeof module === "object" && typeof module.exports === "object" ) {
		// For CommonJS and CommonJS-like environments where a proper window is present,
		// execute the factory and get jQuery
		// For environments that do not inherently posses a window with a document
		// (such as Node.js), expose a jQuery-making factory as module.exports
		// This accentuates the need for the creation of a real window
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
}(typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Can't do this because several apps including ASP.NET trace
// the stack via arguments.caller.callee and Firefox dies if
// you try to trace through "use strict" call chains. (#13335)
// Support: Firefox 18+
//
var deletedIds = [];

var slice = deletedIds.slice;

var concat = deletedIds.concat;

var push = deletedIds.push;

var indexOf = deletedIds.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var support = {};



var
	version = "1.11.2-pre -css,-css/addGetHookIf,-css/curCSS,-css/defaultDisplay,-css/hiddenVisibleSelectors,-css/support,-css/swap,-css/var/cssExpand,-css/var/isHidden,-css/var/rmargin,-css/var/rnumnonpx,-effects,-effects/Tween,-effects/animatedSelector,-effects/support,-dimensions,-offset,-deprecated,-wrap,-event/alias",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {
		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android<4.1, IE<9
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([\da-z])/gi,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// Start with an empty selector
	selector: "",

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {
		return num != null ?

			// Return just the one element from the set
			( num < 0 ? this[ num + this.length ] : this[ num ] ) :

			// Return all the elements in a clean array
			slice.call( this );
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;
		ret.context = this.context;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	// (You can seed the arguments with an array of args, but this is
	// only used internally.)
	each: function( callback, args ) {
		return jQuery.each( this, callback, args );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map(this, function( elem, i ) {
			return callback.call( elem, i, elem );
		}));
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[j] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor(null);
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: deletedIds.sort,
	splice: deletedIds.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var src, copyIsArray, copy, name, options, clone,
		target = arguments[0] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction(target) ) {
		target = {};
	}

	// extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {
		// Only deal with non-null/undefined values
		if ( (options = arguments[ i ]) != null ) {
			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject(copy) ||
					(copyIsArray = jQuery.isArray(copy)) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && jQuery.isArray(src) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject(src) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend({
	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	// See test/unit/core.js for details concerning isFunction.
	// Since version 1.3, DOM methods and functions like alert
	// aren't supported. They return false on IE (#2968).
	isFunction: function( obj ) {
		return jQuery.type(obj) === "function";
	},

	isArray: Array.isArray || function( obj ) {
		return jQuery.type(obj) === "array";
	},

	isWindow: function( obj ) {
		/* jshint eqeqeq: false */
		return obj != null && obj == obj.window;
	},

	isNumeric: function( obj ) {
		// parseFloat NaNs numeric-cast false positives (null|true|false|"")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		// adding 1 corrects loss of precision from parseFloat (#15100)
		return !jQuery.isArray( obj ) && (obj - parseFloat( obj ) + 1) >= 0;
	},

	isEmptyObject: function( obj ) {
		var name;
		for ( name in obj ) {
			return false;
		}
		return true;
	},

	isPlainObject: function( obj ) {
		var key;

		// Must be an Object.
		// Because of IE, we also have to check the presence of the constructor property.
		// Make sure that DOM nodes and window objects don't pass through, as well
		if ( !obj || jQuery.type(obj) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
			return false;
		}

		try {
			// Not own constructor property must be Object
			if ( obj.constructor &&
				!hasOwn.call(obj, "constructor") &&
				!hasOwn.call(obj.constructor.prototype, "isPrototypeOf") ) {
				return false;
			}
		} catch ( e ) {
			// IE8,9 Will throw exceptions on certain host objects #9897
			return false;
		}

		// Support: IE<9
		// Handle iteration over inherited properties before own properties.
		if ( support.ownLast ) {
			for ( key in obj ) {
				return hasOwn.call( obj, key );
			}
		}

		// Own properties are enumerated firstly, so to speed up,
		// if last one is own, then all properties are own.
		for ( key in obj ) {}

		return key === undefined || hasOwn.call( obj, key );
	},

	type: function( obj ) {
		if ( obj == null ) {
			return obj + "";
		}
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call(obj) ] || "object" :
			typeof obj;
	},

	// Evaluates a script in a global context
	globalEval: function( data ) {
		// Inspired by code by Andrea Giammarchi
		// http://webreflection.blogspot.com/2007/08/global-scope-evaluation-and-dom.html
		var head = document.head || jQuery( "head" )[ 0 ] || document.documentElement,
			script = document.createElement( "script" );

		script.text = data;

		// Support: IE6
		// Circumvent bugs with base elements (#2709 and #4378) by prepending
		head.insertBefore( script, head.firstChild );
		head.removeChild( script );
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	nodeName: function( elem, name ) {
		return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
	},

	// args is for internal usage only
	each: function( obj, callback, args ) {
		var value,
			i = 0,
			length = obj.length,
			isArray = isArraylike( obj );

		if ( args ) {
			if ( isArray ) {
				for ( ; i < length; i++ ) {
					value = callback.apply( obj[ i ], args );

					if ( value === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					value = callback.apply( obj[ i ], args );

					if ( value === false ) {
						break;
					}
				}
			}

		// A special, fast, case for the most common use of each
		} else {
			if ( isArray ) {
				for ( ; i < length; i++ ) {
					value = callback.call( obj[ i ], i, obj[ i ] );

					if ( value === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					value = callback.call( obj[ i ], i, obj[ i ] );

					if ( value === false ) {
						break;
					}
				}
			}
		}

		return obj;
	},

	// Support: Android<4.1, IE<9
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArraylike( Object(arr) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		var len;

		if ( arr ) {
			if ( indexOf ) {
				return indexOf.call( arr, elem, i );
			}

			len = arr.length;
			i = i ? i < 0 ? Math.max( 0, len + i ) : i : 0;

			for ( ; i < len; i++ ) {
				// Skip accessing in sparse arrays
				if ( i in arr && arr[ i ] === elem ) {
					return i;
				}
			}
		}

		return -1;
	},

	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		while ( j < len ) {
			first[ i++ ] = second[ j++ ];
		}

		// Support: IE<9
		// Workaround casting of .length to NaN on otherwise arraylike objects (e.g., NodeLists)
		if ( len !== len ) {
			while ( second[j] !== undefined ) {
				first[ i++ ] = second[ j++ ];
			}
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var value,
			i = 0,
			length = elems.length,
			isArray = isArraylike( elems ),
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArray ) {
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		var args, proxy, tmp;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	},

	now: function() {
		return +( new Date() );
	},

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
});

// Populate the class2type map
jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),
function(i, name) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
});

function isArraylike( obj ) {
	var length = obj.length,
		type = jQuery.type( obj );

	if ( type === "function" || jQuery.isWindow( obj ) ) {
		return false;
	}

	if ( obj.nodeType === 1 && length ) {
		return true;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.0.0
 * http://sizzlejs.com/
 *
 * Copyright 2008, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-07-01
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + -(new Date()),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// General-purpose constants
	strundefined = typeof undefined,
	MAX_NEGATIVE = 1 << 31,

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf if we can't use a native one
	indexOf = arr.indexOf || function( elem ) {
		var i = 0,
			len = this.length;
		for ( ; i < len; i++ ) {
			if ( this[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,
	rescape = /'|\\/g,

	// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	};

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var match, elem, m, nodeType,
		// QSA vars
		i, groups, old, nid, newContext, newSelector;

	if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
		setDocument( context );
	}

	context = context || document;
	results = results || [];

	if ( !selector || typeof selector !== "string" ) {
		return results;
	}

	if ( (nodeType = context.nodeType) !== 1 && nodeType !== 9 ) {
		return [];
	}

	if ( documentIsHTML && !seed ) {

		// Shortcuts
		if ( (match = rquickExpr.exec( selector )) ) {
			// Speed-up: Sizzle("#ID")
			if ( (m = match[1]) ) {
				if ( nodeType === 9 ) {
					elem = context.getElementById( m );
					// Check parentNode to catch when Blackberry 4.6 returns
					// nodes that are no longer in the document (jQuery #6963)
					if ( elem && elem.parentNode ) {
						// Handle the case where IE, Opera, and Webkit return items
						// by name instead of ID
						if ( elem.id === m ) {
							results.push( elem );
							return results;
						}
					} else {
						return results;
					}
				} else {
					// Context is not a document
					if ( context.ownerDocument && (elem = context.ownerDocument.getElementById( m )) &&
						contains( context, elem ) && elem.id === m ) {
						results.push( elem );
						return results;
					}
				}

			// Speed-up: Sizzle("TAG")
			} else if ( match[2] ) {
				push.apply( results, context.getElementsByTagName( selector ) );
				return results;

			// Speed-up: Sizzle(".CLASS")
			} else if ( (m = match[3]) && support.getElementsByClassName ) {
				push.apply( results, context.getElementsByClassName( m ) );
				return results;
			}
		}

		// QSA path
		if ( support.qsa && (!rbuggyQSA || !rbuggyQSA.test( selector )) ) {
			nid = old = expando;
			newContext = context;
			newSelector = nodeType === 9 && selector;

			// qSA works strangely on Element-rooted queries
			// We can work around this by specifying an extra ID on the root
			// and working up from there (Thanks to Andrew Dupont for the technique)
			// IE 8 doesn't work on object elements
			if ( nodeType === 1 && context.nodeName.toLowerCase() !== "object" ) {
				groups = tokenize( selector );

				if ( (old = context.getAttribute("id")) ) {
					nid = old.replace( rescape, "\\$&" );
				} else {
					context.setAttribute( "id", nid );
				}
				nid = "[id='" + nid + "'] ";

				i = groups.length;
				while ( i-- ) {
					groups[i] = nid + toSelector( groups[i] );
				}
				newContext = rsibling.test( selector ) && testContext( context.parentNode ) || context;
				newSelector = groups.join(",");
			}

			if ( newSelector ) {
				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch(qsaError) {
				} finally {
					if ( !old ) {
						context.removeAttribute("id");
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {Function(string, Object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created div and expects a boolean result
 */
function assert( fn ) {
	var div = document.createElement("div");

	try {
		return !!fn( div );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( div.parentNode ) {
			div.parentNode.removeChild( div );
		}
		// release memory in IE
		div = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = attrs.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			( ~b.sourceIndex || MAX_NEGATIVE ) -
			( ~a.sourceIndex || MAX_NEGATIVE );

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== strundefined && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare,
		doc = node ? node.ownerDocument || node : preferredDoc,
		parent = doc.defaultView;

	// If no document and documentElement is available, return
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Set our document
	document = doc;
	docElem = doc.documentElement;

	// Support tests
	documentIsHTML = !isXML( doc );

	// Support: IE>8
	// If iframe document is assigned to "document" variable and if iframe has been reloaded,
	// IE will throw "permission denied" error when accessing "document" variable, see jQuery #13936
	// IE6-8 do not support the defaultView property so parent will be undefined
	if ( parent && parent !== parent.top ) {
		// IE11 does not have attachEvent, so all must suffer
		if ( parent.addEventListener ) {
			parent.addEventListener( "unload", function() {
				setDocument();
			}, false );
		} else if ( parent.attachEvent ) {
			parent.attachEvent( "onunload", function() {
				setDocument();
			});
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties (excepting IE8 booleans)
	support.attributes = assert(function( div ) {
		div.className = "i";
		return !div.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( div ) {
		div.appendChild( doc.createComment("") );
		return !div.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( doc.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( div ) {
		docElem.appendChild( div ).id = expando;
		return !doc.getElementsByName || !doc.getElementsByName( expando ).length;
	});

	// ID find and filter
	if ( support.getById ) {
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== strundefined && documentIsHTML ) {
				var m = context.getElementById( id );
				// Check parentNode to catch when Blackberry 4.6 returns
				// nodes that are no longer in the document #6963
				return m && m.parentNode ? [ m ] : [];
			}
		};
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
	} else {
		// Support: IE6/7
		// getElementById is not reliable as a find shortcut
		delete Expr.find["ID"];

		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== strundefined && elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== strundefined ) {
				return context.getElementsByTagName( tag );
			}
		} :
		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See http://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( doc.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( div ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// http://bugs.jquery.com/ticket/12359
			div.innerHTML = "<select msallowcapture=''><option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( div.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !div.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !div.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}
		});

		assert(function( div ) {
			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = doc.createElement("input");
			input.setAttribute( "type", "hidden" );
			div.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( div.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( !div.querySelectorAll(":enabled").length ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			div.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( div ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( div, "div" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( div, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully does not implement inclusive descendent
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === doc || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === doc || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf.call( sortInput, a ) - indexOf.call( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === doc ? -1 :
				b === doc ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf.call( sortInput, a ) - indexOf.call( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return doc;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch(e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== strundefined && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, outerCache, node, diff, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) {
										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {
							// Seek `elem` from a previously-cached index
							outerCache = parent[ expando ] || (parent[ expando ] = {});
							cache = outerCache[ type ] || [];
							nodeIndex = cache[0] === dirruns && cache[1];
							diff = cache[0] === dirruns && cache[2];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									outerCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						// Use previously-cached element index if available
						} else if ( useCache && (cache = (elem[ expando ] || (elem[ expando ] = {}))[ type ]) && cache[0] === dirruns ) {
							diff = cache[1];

						// xml :nth-child(...) or :nth-last-child(...) or :nth(-last)?-of-type(...)
						} else {
							// Use the same loop as above to seek `elem` from the start
							while ( (node = ++nodeIndex && node && node[ dir ] ||
								(diff = nodeIndex = 0) || start.pop()) ) {

								if ( ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) && ++diff ) {
									// Cache the index of each encountered element
									if ( useCache ) {
										(node[ expando ] || (node[ expando ] = {}))[ type ] = [ dirruns, diff ];
									}

									if ( node === elem ) {
										break;
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf.call( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": function( elem ) {
			return elem.disabled === false;
		},

		"disabled": function( elem ) {
			return elem.disabled === true;
		},

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		checkNonElements = base && dir === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from dir caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});
						if ( (oldCache = outerCache[ dir ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							outerCache[ dir ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf.call( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf.call( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			return ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context !== document && context;
			}

			// Add elements passing elementMatchers directly to results
			// Keep `i` a string if there are no elements so `matchedCount` will be "00" below
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context, xml ) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// Apply set filters to unmatched elements
			matchedCount += i;
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is no seed and only one group
	if ( match.length === 1 ) {

		// Take a shortcut and set the context if the root selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				support.getById && context.nodeType === 9 && documentIsHTML &&
				Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( div1 ) {
	// Should return 1, but returns 4 (following)
	return div1.compareDocumentPosition( document.createElement("div") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( div ) {
	div.innerHTML = "<a href='#'></a>";
	return div.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( div ) {
	div.innerHTML = "<input/>";
	div.firstChild.setAttribute( "value", "" );
	return div.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( div ) {
	return div.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;
jQuery.expr[":"] = jQuery.expr.pseudos;
jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;



var rneedsContext = jQuery.expr.match.needsContext;

var rsingleTag = (/^<(\w+)\s*\/?>(?:<\/\1>|)$/);



var risSimple = /^.[^:#\[\.,]*$/;

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			/* jshint -W018 */
			return !!qualifier.call( elem, i, elem ) !== not;
		});

	}

	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		});

	}

	if ( typeof qualifier === "string" ) {
		if ( risSimple.test( qualifier ) ) {
			return jQuery.filter( qualifier, elements, not );
		}

		qualifier = jQuery.filter( qualifier, elements );
	}

	return jQuery.grep( elements, function( elem ) {
		return ( jQuery.inArray( elem, qualifier ) >= 0 ) !== not;
	});
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	return elems.length === 1 && elem.nodeType === 1 ?
		jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
		jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
			return elem.nodeType === 1;
		}));
};

jQuery.fn.extend({
	find: function( selector ) {
		var i,
			ret = [],
			self = this,
			len = self.length;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter(function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			}) );
		}

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		// Needed because $( selector, context ) becomes $( context ).find( selector )
		ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
		ret.selector = this.selector ? this.selector + " " + selector : selector;
		return ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow(this, selector || [], false) );
	},
	not: function( selector ) {
		return this.pushStack( winnow(this, selector || [], true) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
});


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// Use the correct document accordingly with window argument (sandbox)
	document = window.document,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,

	init = jQuery.fn.init = function( selector, context ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector.charAt(0) === "<" &&
				selector.charAt( selector.length - 1 ) === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && (match[1] || !context) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[1] ) {
					context = context instanceof jQuery ? context[0] : context;

					// scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[1],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[1] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {
							// Properties of context are called as methods if possible
							if ( jQuery.isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[2] );

					// Check parentNode to catch when Blackberry 4.6 returns
					// nodes that are no longer in the document #6963
					if ( elem && elem.parentNode ) {
						// Handle the case where IE and Opera return items
						// by name instead of ID
						if ( elem.id !== match[2] ) {
							return rootjQuery.find( selector );
						}

						// Otherwise, we inject the element directly into the jQuery object
						this.length = 1;
						this[0] = elem;
					}

					this.context = document;
					this.selector = selector;
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || rootjQuery ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this.context = this[0] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return typeof rootjQuery.ready !== "undefined" ?
				rootjQuery.ready( selector ) :
				// Execute immediately if ready is not present
				selector( jQuery );
		}

		if ( selector.selector !== undefined ) {
			this.selector = selector.selector;
			this.context = selector.context;
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,
	// methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.extend({
	dir: function( elem, dir, until ) {
		var matched = [],
			cur = elem[ dir ];

		while ( cur && cur.nodeType !== 9 &&
			(until === undefined || cur.nodeType !== 1 || !jQuery( cur ).is( until )) ) {

			if ( cur.nodeType === 1 ) {
				matched.push( cur );
			}
			cur = cur[dir];
		}
		return matched;
	},

	sibling: function( n, elem ) {
		var r = [];

		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				r.push( n );
			}
		}

		return r;
	}
});

jQuery.fn.extend({
	has: function( target ) {
		var i,
			targets = jQuery( target, this ),
			len = targets.length;

		return this.filter(function() {
			for ( i = 0; i < len; i++ ) {
				if ( jQuery.contains( this, targets[i] ) ) {
					return true;
				}
			}
		});
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
				jQuery( selectors, context || this.context ) :
				0;

		for ( ; i < l; i++ ) {
			for ( cur = this[i]; cur && cur !== context; cur = cur.parentNode ) {
				// Always skip document fragments
				if ( cur.nodeType < 11 && (pos ?
					pos.index(cur) > -1 :

					// Don't pass non-elements to Sizzle
					cur.nodeType === 1 &&
						jQuery.find.matchesSelector(cur, selectors)) ) {

					matched.push( cur );
					break;
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.unique( matched ) : matched );
	},

	// Determine the position of an element within
	// the matched set of elements
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[0] && this[0].parentNode ) ? this.first().prevAll().length : -1;
		}

		// index in selector
		if ( typeof elem === "string" ) {
			return jQuery.inArray( this[0], jQuery( elem ) );
		}

		// Locate the position of the desired element
		return jQuery.inArray(
			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[0] : elem, this );
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.unique(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter(selector)
		);
	}
});

function sibling( cur, dir ) {
	do {
		cur = cur[ dir ];
	} while ( cur && cur.nodeType !== 1 );

	return cur;
}

jQuery.each({
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return jQuery.dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return jQuery.dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return jQuery.dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return jQuery.sibling( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return jQuery.sibling( elem.firstChild );
	},
	contents: function( elem ) {
		return jQuery.nodeName( elem, "iframe" ) ?
			elem.contentDocument || elem.contentWindow.document :
			jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var ret = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			ret = jQuery.filter( selector, ret );
		}

		if ( this.length > 1 ) {
			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				ret = jQuery.unique( ret );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				ret = ret.reverse();
			}
		}

		return this.pushStack( ret );
	};
});
var rnotwhite = (/\S+/g);



// String to Object options format cache
var optionsCache = {};

// Convert String-formatted options into Object-formatted ones and store in cache
function createOptions( options ) {
	var object = optionsCache[ options ] = {};
	jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	});
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		( optionsCache[ options ] || createOptions( options ) ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,
		// Last fire value (for non-forgettable lists)
		memory,
		// Flag to know if list was already fired
		fired,
		// End of the loop when firing
		firingLength,
		// Index of currently firing callback (modified by remove if needed)
		firingIndex,
		// First callback to fire (used internally by add and fireWith)
		firingStart,
		// Actual callback list
		list = [],
		// Stack of fire calls for repeatable lists
		stack = !options.once && [],
		// Fire callbacks
		fire = function( data ) {
			memory = options.memory && data;
			fired = true;
			firingIndex = firingStart || 0;
			firingStart = 0;
			firingLength = list.length;
			firing = true;
			for ( ; list && firingIndex < firingLength; firingIndex++ ) {
				if ( list[ firingIndex ].apply( data[ 0 ], data[ 1 ] ) === false &&
					options.stopOnFalse ) {

					memory = false; // To prevent further calls using add
					break;
				}
			}
			firing = false;
			if ( list ) {
				if ( stack ) {
					if ( stack.length ) {
						fire( stack.shift() );
					}
				} else if ( memory ) {
					list = [];
				} else {
					self.disable();
				}
			}
		},
		// Actual Callbacks object
		self = {
			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {
					// First, we save the current length
					var start = list.length;
					(function add( args ) {
						jQuery.each( args, function( _, arg ) {
							var type = jQuery.type( arg );
							if ( type === "function" ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && type !== "string" ) {
								// Inspect recursively
								add( arg );
							}
						});
					})( arguments );
					// Do we need to add the callbacks to the
					// current firing batch?
					if ( firing ) {
						firingLength = list.length;
					// With memory, if we're not firing then
					// we should call right away
					} else if ( memory ) {
						firingStart = start;
						fire( memory );
					}
				}
				return this;
			},
			// Remove a callback from the list
			remove: function() {
				if ( list ) {
					jQuery.each( arguments, function( _, arg ) {
						var index;
						while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
							list.splice( index, 1 );
							// Handle firing indexes
							if ( firing ) {
								if ( index <= firingLength ) {
									firingLength--;
								}
								if ( index <= firingIndex ) {
									firingIndex--;
								}
							}
						}
					});
				}
				return this;
			},
			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ? jQuery.inArray( fn, list ) > -1 : !!( list && list.length );
			},
			// Remove all callbacks from the list
			empty: function() {
				list = [];
				firingLength = 0;
				return this;
			},
			// Have the list do nothing anymore
			disable: function() {
				list = stack = memory = undefined;
				return this;
			},
			// Is it disabled?
			disabled: function() {
				return !list;
			},
			// Lock the list in its current state
			lock: function() {
				stack = undefined;
				if ( !memory ) {
					self.disable();
				}
				return this;
			},
			// Is it locked?
			locked: function() {
				return !stack;
			},
			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( list && ( !fired || stack ) ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					if ( firing ) {
						stack.push( args );
					} else {
						fire( args );
					}
				}
				return this;
			},
			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},
			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


jQuery.extend({

	Deferred: function( func ) {
		var tuples = [
				// action, add listener, listener list, final state
				[ "resolve", "done", jQuery.Callbacks("once memory"), "resolved" ],
				[ "reject", "fail", jQuery.Callbacks("once memory"), "rejected" ],
				[ "notify", "progress", jQuery.Callbacks("memory") ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				then: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;
					return jQuery.Deferred(function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {
							var fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];
							// deferred[ done | fail | progress ] for forwarding actions to newDefer
							deferred[ tuple[1] ](function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && jQuery.isFunction( returned.promise ) ) {
									returned.promise()
										.done( newDefer.resolve )
										.fail( newDefer.reject )
										.progress( newDefer.notify );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this === promise ? newDefer.promise() : this,
										fn ? [ returned ] : arguments
									);
								}
							});
						});
						fns = null;
					}).promise();
				},
				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Keep pipe for back-compat
		promise.pipe = promise.then;

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 3 ];

			// promise[ done | fail | progress ] = list.add
			promise[ tuple[1] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(function() {
					// state = [ resolved | rejected ]
					state = stateString;

				// [ reject_list | resolve_list ].disable; progress_list.lock
				}, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
			}

			// deferred[ resolve | reject | notify ]
			deferred[ tuple[0] ] = function() {
				deferred[ tuple[0] + "With" ]( this === deferred ? promise : this, arguments );
				return this;
			};
			deferred[ tuple[0] + "With" ] = list.fireWith;
		});

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( subordinate /* , ..., subordinateN */ ) {
		var i = 0,
			resolveValues = slice.call( arguments ),
			length = resolveValues.length,

			// the count of uncompleted subordinates
			remaining = length !== 1 ||
				( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,

			// the master Deferred.
			// If resolveValues consist of only a single Deferred, just use that.
			deferred = remaining === 1 ? subordinate : jQuery.Deferred(),

			// Update function for both resolve and progress values
			updateFunc = function( i, contexts, values ) {
				return function( value ) {
					contexts[ i ] = this;
					values[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( values === progressValues ) {
						deferred.notifyWith( contexts, values );

					} else if ( !(--remaining) ) {
						deferred.resolveWith( contexts, values );
					}
				};
			},

			progressValues, progressContexts, resolveContexts;

		// add listeners to Deferred subordinates; treat others as resolved
		if ( length > 1 ) {
			progressValues = new Array( length );
			progressContexts = new Array( length );
			resolveContexts = new Array( length );
			for ( ; i < length; i++ ) {
				if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
					resolveValues[ i ].promise()
						.done( updateFunc( i, resolveContexts, resolveValues ) )
						.fail( deferred.reject )
						.progress( updateFunc( i, progressContexts, progressValues ) );
				} else {
					--remaining;
				}
			}
		}

		// if we're not waiting on anything, resolve the master
		if ( !remaining ) {
			deferred.resolveWith( resolveContexts, resolveValues );
		}

		return deferred.promise();
	}
});


// The deferred used on DOM ready
var readyList;

jQuery.fn.ready = function( fn ) {
	// Add the callback
	jQuery.ready.promise().done( fn );

	return this;
};

jQuery.extend({
	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Hold (or release) the ready event
	holdReady: function( hold ) {
		if ( hold ) {
			jQuery.readyWait++;
		} else {
			jQuery.ready( true );
		}
	},

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Make sure body exists, at least, in case IE gets a little overzealous (ticket #5443).
		if ( !document.body ) {
			return setTimeout( jQuery.ready );
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );

		// Trigger any bound ready events
		if ( jQuery.fn.triggerHandler ) {
			jQuery( document ).triggerHandler( "ready" );
			jQuery( document ).off( "ready" );
		}
	}
});

/**
 * Clean-up method for dom ready events
 */
function detach() {
	if ( document.addEventListener ) {
		document.removeEventListener( "DOMContentLoaded", completed, false );
		window.removeEventListener( "load", completed, false );

	} else {
		document.detachEvent( "onreadystatechange", completed );
		window.detachEvent( "onload", completed );
	}
}

/**
 * The ready event handler and self cleanup method
 */
function completed() {
	// readyState === "complete" is good enough for us to call the dom ready in oldIE
	if ( document.addEventListener ||
		event.type === "load" ||
		document.readyState === "complete" ) {

		detach();
		jQuery.ready();
	}
}

jQuery.ready.promise = function( obj ) {
	if ( !readyList ) {

		readyList = jQuery.Deferred();

		// Catch cases where $(document).ready() is called
		// after the browser event has already occurred.
		// we once tried to use readyState "interactive" here,
		// but it caused issues like the one
		// discovered by ChrisS here:
		// http://bugs.jquery.com/ticket/12282#comment:15
		if ( document.readyState === "complete" ) {
			// Handle it asynchronously to allow scripts the opportunity to delay ready
			setTimeout( jQuery.ready );

		// Standards-based browsers support DOMContentLoaded
		} else if ( document.addEventListener ) {
			// Use the handy event callback
			document.addEventListener( "DOMContentLoaded", completed, false );

			// A fallback to window.onload, that will always work
			window.addEventListener( "load", completed, false );

		// If IE event model is used
		} else {
			// Ensure firing before onload, maybe late but safe also for iframes
			document.attachEvent( "onreadystatechange", completed );

			// A fallback to window.onload, that will always work
			window.attachEvent( "onload", completed );

			// If IE and not a frame
			// continually check to see if the document is ready
			var top = false;

			try {
				top = window.frameElement == null && document.documentElement;
			} catch ( e ) {}

			if ( top && top.doScroll ) {
				(function doScrollCheck() {
					if ( !jQuery.isReady ) {

						try {
							// Use the trick by Diego Perini
							// http://javascript.nwbox.com/IEContentLoaded/
							top.doScroll("left");
						} catch ( e ) {
							return setTimeout( doScrollCheck, 50 );
						}

						// detach all dom ready events
						detach();

						// and execute any waiting functions
						jQuery.ready();
					}
				})();
			}
		}
	}
	return readyList.promise( obj );
};




// Support: IE<9
// Iteration over object's inherited properties before its own
var i;
for ( i in jQuery( support ) ) {
	break;
}
support.ownLast = i !== "0";

// Note: most support tests are defined in their respective modules.
// false until the test is run
support.inlineBlockNeedsLayout = false;

// Execute ASAP in case we need to set body.style.zoom
jQuery(function() {
	// Minified: var a,b,c,d
	var val, div, body, container;

	body = document.getElementsByTagName( "body" )[ 0 ];
	if ( !body || !body.style ) {
		// Return for frameset docs that don't have a body
		return;
	}

	// Setup
	div = document.createElement( "div" );
	container = document.createElement( "div" );
	container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
	body.appendChild( container ).appendChild( div );

	if ( typeof div.style.zoom !== "undefined" ) {
		// Support: IE<8
		// Check if natively block-level elements act like inline-block
		// elements when setting their display to 'inline' and giving
		// them layout
		div.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1";

		support.inlineBlockNeedsLayout = val = div.offsetWidth === 3;
		if ( val ) {
			// Prevent IE 6 from affecting layout for positioned elements #11048
			// Prevent IE from shrinking the body in IE 7 mode #12869
			// Support: IE<8
			body.style.zoom = 1;
		}
	}

	body.removeChild( container );
});




(function() {
	var div = document.createElement( "div" );

	// Execute the test only if not already executed in another module.
	if (support.deleteExpando == null) {
		// Support: IE<9
		support.deleteExpando = true;
		try {
			delete div.test;
		} catch ( e ) {
			support.deleteExpando = false;
		}
	}

	// Null elements to avoid leaks in IE.
	div = null;
})();


/**
 * Determines whether an object can have data
 */
jQuery.acceptData = function( elem ) {
	var noData = jQuery.noData[ (elem.nodeName + " ").toLowerCase() ],
		nodeType = +elem.nodeType || 1;

	// Do not set data on non-element DOM nodes because it will not be cleared (#8335).
	return nodeType !== 1 && nodeType !== 9 ?
		false :

		// Nodes accept data unless otherwise specified; rejection can be conditional
		!noData || noData !== true && elem.getAttribute("classid") === noData;
};


var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /([A-Z])/g;

function dataAttr( elem, key, data ) {
	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {

		var name = "data-" + key.replace( rmultiDash, "-$1" ).toLowerCase();

		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = data === "true" ? true :
					data === "false" ? false :
					data === "null" ? null :
					// Only convert to a number if it doesn't change the string
					+data + "" === data ? +data :
					rbrace.test( data ) ? jQuery.parseJSON( data ) :
					data;
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			jQuery.data( elem, key, data );

		} else {
			data = undefined;
		}
	}

	return data;
}

// checks a cache object for emptiness
function isEmptyDataObject( obj ) {
	var name;
	for ( name in obj ) {

		// if the public data object is empty, the private is still empty
		if ( name === "data" && jQuery.isEmptyObject( obj[name] ) ) {
			continue;
		}
		if ( name !== "toJSON" ) {
			return false;
		}
	}

	return true;
}

function internalData( elem, name, data, pvt /* Internal Use Only */ ) {
	if ( !jQuery.acceptData( elem ) ) {
		return;
	}

	var ret, thisCache,
		internalKey = jQuery.expando,

		// We have to handle DOM nodes and JS objects differently because IE6-7
		// can't GC object references properly across the DOM-JS boundary
		isNode = elem.nodeType,

		// Only DOM nodes need the global jQuery cache; JS object data is
		// attached directly to the object so GC can occur automatically
		cache = isNode ? jQuery.cache : elem,

		// Only defining an ID for JS objects if its cache already exists allows
		// the code to shortcut on the same path as a DOM node with no cache
		id = isNode ? elem[ internalKey ] : elem[ internalKey ] && internalKey;

	// Avoid doing any more work than we need to when trying to get data on an
	// object that has no data at all
	if ( (!id || !cache[id] || (!pvt && !cache[id].data)) &&
		data === undefined && typeof name === "string" ) {
		return;
	}

	if ( !id ) {
		// Only DOM nodes need a new unique ID for each element since their data
		// ends up in the global cache
		if ( isNode ) {
			id = elem[ internalKey ] = deletedIds.pop() || jQuery.guid++;
		} else {
			id = internalKey;
		}
	}

	if ( !cache[ id ] ) {
		// Avoid exposing jQuery metadata on plain JS objects when the object
		// is serialized using JSON.stringify
		cache[ id ] = isNode ? {} : { toJSON: jQuery.noop };
	}

	// An object can be passed to jQuery.data instead of a key/value pair; this gets
	// shallow copied over onto the existing cache
	if ( typeof name === "object" || typeof name === "function" ) {
		if ( pvt ) {
			cache[ id ] = jQuery.extend( cache[ id ], name );
		} else {
			cache[ id ].data = jQuery.extend( cache[ id ].data, name );
		}
	}

	thisCache = cache[ id ];

	// jQuery data() is stored in a separate object inside the object's internal data
	// cache in order to avoid key collisions between internal data and user-defined
	// data.
	if ( !pvt ) {
		if ( !thisCache.data ) {
			thisCache.data = {};
		}

		thisCache = thisCache.data;
	}

	if ( data !== undefined ) {
		thisCache[ jQuery.camelCase( name ) ] = data;
	}

	// Check for both converted-to-camel and non-converted data property names
	// If a data property was specified
	if ( typeof name === "string" ) {

		// First Try to find as-is property data
		ret = thisCache[ name ];

		// Test for null|undefined property data
		if ( ret == null ) {

			// Try to find the camelCased property
			ret = thisCache[ jQuery.camelCase( name ) ];
		}
	} else {
		ret = thisCache;
	}

	return ret;
}

function internalRemoveData( elem, name, pvt ) {
	if ( !jQuery.acceptData( elem ) ) {
		return;
	}

	var thisCache, i,
		isNode = elem.nodeType,

		// See jQuery.data for more information
		cache = isNode ? jQuery.cache : elem,
		id = isNode ? elem[ jQuery.expando ] : jQuery.expando;

	// If there is already no cache entry for this object, there is no
	// purpose in continuing
	if ( !cache[ id ] ) {
		return;
	}

	if ( name ) {

		thisCache = pvt ? cache[ id ] : cache[ id ].data;

		if ( thisCache ) {

			// Support array or space separated string names for data keys
			if ( !jQuery.isArray( name ) ) {

				// try the string as a key before any manipulation
				if ( name in thisCache ) {
					name = [ name ];
				} else {

					// split the camel cased version by spaces unless a key with the spaces exists
					name = jQuery.camelCase( name );
					if ( name in thisCache ) {
						name = [ name ];
					} else {
						name = name.split(" ");
					}
				}
			} else {
				// If "name" is an array of keys...
				// When data is initially created, via ("key", "val") signature,
				// keys will be converted to camelCase.
				// Since there is no way to tell _how_ a key was added, remove
				// both plain key and camelCase key. #12786
				// This will only penalize the array argument path.
				name = name.concat( jQuery.map( name, jQuery.camelCase ) );
			}

			i = name.length;
			while ( i-- ) {
				delete thisCache[ name[i] ];
			}

			// If there is no data left in the cache, we want to continue
			// and let the cache object itself get destroyed
			if ( pvt ? !isEmptyDataObject(thisCache) : !jQuery.isEmptyObject(thisCache) ) {
				return;
			}
		}
	}

	// See jQuery.data for more information
	if ( !pvt ) {
		delete cache[ id ].data;

		// Don't destroy the parent cache unless the internal data object
		// had been the only thing left in it
		if ( !isEmptyDataObject( cache[ id ] ) ) {
			return;
		}
	}

	// Destroy the cache
	if ( isNode ) {
		jQuery.cleanData( [ elem ], true );

	// Use delete when supported for expandos or `cache` is not a window per isWindow (#10080)
	/* jshint eqeqeq: false */
	} else if ( support.deleteExpando || cache != cache.window ) {
		/* jshint eqeqeq: true */
		delete cache[ id ];

	// When all else fails, null
	} else {
		cache[ id ] = null;
	}
}

jQuery.extend({
	cache: {},

	// The following elements (space-suffixed to avoid Object.prototype collisions)
	// throw uncatchable exceptions if you attempt to set expando properties
	noData: {
		"applet ": true,
		"embed ": true,
		// ...but Flash objects (which have this classid) *can* handle expandos
		"object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
	},

	hasData: function( elem ) {
		elem = elem.nodeType ? jQuery.cache[ elem[jQuery.expando] ] : elem[ jQuery.expando ];
		return !!elem && !isEmptyDataObject( elem );
	},

	data: function( elem, name, data ) {
		return internalData( elem, name, data );
	},

	removeData: function( elem, name ) {
		return internalRemoveData( elem, name );
	},

	// For internal use only.
	_data: function( elem, name, data ) {
		return internalData( elem, name, data, true );
	},

	_removeData: function( elem, name ) {
		return internalRemoveData( elem, name, true );
	}
});

jQuery.fn.extend({
	data: function( key, value ) {
		var i, name, data,
			elem = this[0],
			attrs = elem && elem.attributes;

		// Special expections of .data basically thwart jQuery.access,
		// so implement the relevant behavior ourselves

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = jQuery.data( elem );

				if ( elem.nodeType === 1 && !jQuery._data( elem, "parsedAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE11+
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = jQuery.camelCase( name.slice(5) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					jQuery._data( elem, "parsedAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each(function() {
				jQuery.data( this, key );
			});
		}

		return arguments.length > 1 ?
			// Sets one value
			this.each(function() {
				jQuery.data( this, key, value );
			}) :

			// Gets one value
			// Try to fetch any internally stored data first
			elem ? dataAttr( elem, key, jQuery.data( elem, key ) ) : undefined;
	},

	removeData: function( key ) {
		return this.each(function() {
			jQuery.removeData( this, key );
		});
	}
});


jQuery.extend({
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = jQuery._data( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || jQuery.isArray(data) ) {
					queue = jQuery._data( elem, type, jQuery.makeArray(data) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// not intended for public consumption - generates a queueHooks object,
	// or returns the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return jQuery._data( elem, key ) || jQuery._data( elem, key, {
			empty: jQuery.Callbacks("once memory").add(function() {
				jQuery._removeData( elem, type + "queue" );
				jQuery._removeData( elem, key );
			})
		});
	}
});

jQuery.fn.extend({
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[0], type );
		}

		return data === undefined ?
			this :
			this.each(function() {
				var queue = jQuery.queue( this, type, data );

				// ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[0] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			});
	},
	dequeue: function( type ) {
		return this.each(function() {
			jQuery.dequeue( this, type );
		});
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},
	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = jQuery._data( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
});
var pnum = (/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source;



// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = jQuery.access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		length = elems.length,
		bulk = key == null;

	// Sets many values
	if ( jQuery.type( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[i], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !jQuery.isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {
			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < length; i++ ) {
				fn( elems[i], key, raw ? value : value.call( elems[i], i, fn( elems[i], key ) ) );
			}
		}
	}

	return chainable ?
		elems :

		// Gets
		bulk ?
			fn.call( elems ) :
			length ? fn( elems[0], key ) : emptyGet;
};
var rcheckableType = (/^(?:checkbox|radio)$/i);



(function() {
	// Minified: var a,b,c
	var input = document.createElement( "input" ),
		div = document.createElement( "div" ),
		fragment = document.createDocumentFragment();

	// Setup
	div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";

	// IE strips leading whitespace when .innerHTML is used
	support.leadingWhitespace = div.firstChild.nodeType === 3;

	// Make sure that tbody elements aren't automatically inserted
	// IE will insert them into empty tables
	support.tbody = !div.getElementsByTagName( "tbody" ).length;

	// Make sure that link elements get serialized correctly by innerHTML
	// This requires a wrapper element in IE
	support.htmlSerialize = !!div.getElementsByTagName( "link" ).length;

	// Makes sure cloning an html5 element does not cause problems
	// Where outerHTML is undefined, this still works
	support.html5Clone =
		document.createElement( "nav" ).cloneNode( true ).outerHTML !== "<:nav></:nav>";

	// Check if a disconnected checkbox will retain its checked
	// value of true after appended to the DOM (IE6/7)
	input.type = "checkbox";
	input.checked = true;
	fragment.appendChild( input );
	support.appendChecked = input.checked;

	// Make sure textarea (and checkbox) defaultValue is properly cloned
	// Support: IE6-IE11+
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;

	// #11217 - WebKit loses check when the name is after the checked attribute
	fragment.appendChild( div );
	div.innerHTML = "<input type='radio' checked='checked' name='t'/>";

	// Support: Safari 5.1, iOS 5.1, Android 4.x, Android 2.3
	// old WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE<9
	// Opera does not clone events (and typeof div.attachEvent === undefined).
	// IE9-10 clones events bound via attachEvent, but they don't trigger with .click()
	support.noCloneEvent = true;
	if ( div.attachEvent ) {
		div.attachEvent( "onclick", function() {
			support.noCloneEvent = false;
		});

		div.cloneNode( true ).click();
	}

	// Execute the test only if not already executed in another module.
	if (support.deleteExpando == null) {
		// Support: IE<9
		support.deleteExpando = true;
		try {
			delete div.test;
		} catch ( e ) {
			support.deleteExpando = false;
		}
	}
})();


(function() {
	var i, eventName,
		div = document.createElement( "div" );

	// Support: IE<9 (lack submit/change bubble), Firefox 23+ (lack focusin event)
	for ( i in { submit: true, change: true, focusin: true }) {
		eventName = "on" + i;

		if ( !(support[ i + "Bubbles" ] = eventName in window) ) {
			// Beware of CSP restrictions (https://developer.mozilla.org/en/Security/CSP)
			div.setAttribute( eventName, "t" );
			support[ i + "Bubbles" ] = div.attributes[ eventName ].expando === false;
		}
	}

	// Null elements to avoid leaks in IE.
	div = null;
})();


var rformElems = /^(?:input|select|textarea)$/i,
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu)|click/,
	rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)$/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {
		var tmp, events, t, handleObjIn,
			special, eventHandle, handleObj,
			handlers, type, namespaces, origType,
			elemData = jQuery._data( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !(events = elemData.events) ) {
			events = elemData.events = {};
		}
		if ( !(eventHandle = elemData.handle) ) {
			eventHandle = elemData.handle = function( e ) {
				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && (!e || jQuery.event.triggered !== e.type) ?
					jQuery.event.dispatch.apply( eventHandle.elem, arguments ) :
					undefined;
			};
			// Add elem as a property of the handle fn to prevent a memory leak
			// with IE non-native events
			eventHandle.elem = elem;
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnotwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[t] ) || [];
			type = origType = tmp[1];
			namespaces = ( tmp[2] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend({
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join(".")
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !(handlers = events[ type ]) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener/attachEvent if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					// Bind the global event handler to the element
					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle, false );

					} else if ( elem.attachEvent ) {
						elem.attachEvent( "on" + type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

		// Nullify elem to prevent memory leaks in IE
		elem = null;
	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {
		var j, handleObj, tmp,
			origCount, t, events,
			special, handlers, type,
			namespaces, origType,
			elemData = jQuery.hasData( elem ) && jQuery._data( elem );

		if ( !elemData || !(events = elemData.events) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnotwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[t] ) || [];
			type = origType = tmp[1];
			namespaces = ( tmp[2] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[2] && new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			delete elemData.handle;

			// removeData also checks for emptiness and clears the expando if empty
			// so use it instead of delete
			jQuery._removeData( elem, "events" );
		}
	},

	trigger: function( event, data, elem, onlyHandlers ) {
		var handle, ontype, cur,
			bubbleType, special, tmp, i,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split(".") : [];

		cur = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf(".") >= 0 ) {
			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split(".");
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf(":") < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join(".");
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === (elem.ownerDocument || document) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( (cur = eventPath[i++]) && !event.isPropagationStopped() ) {

			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( jQuery._data( cur, "events" ) || {} )[ event.type ] &&
				jQuery._data( cur, "handle" );

			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && jQuery.acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( (!special._default || special._default.apply( eventPath.pop(), data ) === false) &&
				jQuery.acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name name as the event.
				// Can't use an .isFunction() check here because IE6/7 fails that test.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && elem[ type ] && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					try {
						elem[ type ]();
					} catch ( e ) {
						// IE<9 dies on focus/blur to hidden element (#1486,#12518)
						// only reproducible on winXP IE8 native, not IE9 in IE8 mode
					}
					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	dispatch: function( event ) {

		// Make a writable jQuery.Event from the native event object
		event = jQuery.event.fix( event );

		var i, ret, handleObj, matched, j,
			handlerQueue = [],
			args = slice.call( arguments ),
			handlers = ( jQuery._data( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[0] = event;
		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( (matched = handlerQueue[ i++ ]) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( (handleObj = matched.handlers[ j++ ]) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or
				// 2) have namespace(s) a subset or equal to those in the bound event
				// (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( (jQuery.event.special[ handleObj.origType ] || {}).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( (event.result = ret) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var sel, handleObj, matches, i,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		// Black-hole SVG <use> instance trees (#13180)
		// Avoid non-left-click bubbling in Firefox (#3861)
		if ( delegateCount && cur.nodeType && (!event.button || event.type !== "click") ) {

			/* jshint eqeqeq: false */
			for ( ; cur != this; cur = cur.parentNode || this ) {
				/* jshint eqeqeq: true */

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && (cur.disabled !== true || event.type !== "click") ) {
					matches = [];
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matches[ sel ] === undefined ) {
							matches[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) >= 0 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matches[ sel ] ) {
							matches.push( handleObj );
						}
					}
					if ( matches.length ) {
						handlerQueue.push({ elem: cur, handlers: matches });
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		if ( delegateCount < handlers.length ) {
			handlerQueue.push({ elem: this, handlers: handlers.slice( delegateCount ) });
		}

		return handlerQueue;
	},

	fix: function( event ) {
		if ( event[ jQuery.expando ] ) {
			return event;
		}

		// Create a writable copy of the event object and normalize some properties
		var i, prop, copy,
			type = event.type,
			originalEvent = event,
			fixHook = this.fixHooks[ type ];

		if ( !fixHook ) {
			this.fixHooks[ type ] = fixHook =
				rmouseEvent.test( type ) ? this.mouseHooks :
				rkeyEvent.test( type ) ? this.keyHooks :
				{};
		}
		copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;

		event = new jQuery.Event( originalEvent );

		i = copy.length;
		while ( i-- ) {
			prop = copy[ i ];
			event[ prop ] = originalEvent[ prop ];
		}

		// Support: IE<9
		// Fix target property (#1925)
		if ( !event.target ) {
			event.target = originalEvent.srcElement || document;
		}

		// Support: Chrome 23+, Safari?
		// Target should not be a text node (#504, #13143)
		if ( event.target.nodeType === 3 ) {
			event.target = event.target.parentNode;
		}

		// Support: IE<9
		// For mouse/key events, metaKey==false if it's undefined (#3368, #11328)
		event.metaKey = !!event.metaKey;

		return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
	},

	// Includes some event props shared by KeyEvent and MouseEvent
	props: ( "altKey bubbles cancelable ctrlKey currentTarget eventPhase " +
		"metaKey relatedTarget shiftKey target timeStamp view which" ).split(" "),

	fixHooks: {},

	keyHooks: {
		props: "char charCode key keyCode".split(" "),
		filter: function( event, original ) {

			// Add which for key events
			if ( event.which == null ) {
				event.which = original.charCode != null ? original.charCode : original.keyCode;
			}

			return event;
		}
	},

	mouseHooks: {
		props: ( "button buttons clientX clientY fromElement offsetX offsetY " +
			"pageX pageY screenX screenY toElement" ).split(" "),
		filter: function( event, original ) {
			var body, eventDoc, doc,
				button = original.button,
				fromElement = original.fromElement;

			// Calculate pageX/Y if missing and clientX/Y available
			if ( event.pageX == null && original.clientX != null ) {
				eventDoc = event.target.ownerDocument || document;
				doc = eventDoc.documentElement;
				body = eventDoc.body;

				event.pageX = original.clientX +
					( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) -
					( doc && doc.clientLeft || body && body.clientLeft || 0 );
				event.pageY = original.clientY +
					( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) -
					( doc && doc.clientTop  || body && body.clientTop  || 0 );
			}

			// Add relatedTarget, if necessary
			if ( !event.relatedTarget && fromElement ) {
				event.relatedTarget = fromElement === event.target ?
					original.toElement :
					fromElement;
			}

			// Add which for click: 1 === left; 2 === middle; 3 === right
			// Note: button is not normalized, so don't use it
			if ( !event.which && button !== undefined ) {
				event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
			}

			return event;
		}
	},

	special: {
		load: {
			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {
			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					try {
						this.focus();
						return false;
					} catch ( e ) {
						// Support: IE<9
						// If we error on focus to hidden element (#1486, #12518),
						// let .trigger() run the handlers
					}
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {
			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( jQuery.nodeName( this, "input" ) && this.type === "checkbox" && this.click ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return jQuery.nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	},

	simulate: function( type, elem, event, bubble ) {
		// Piggyback on a donor event to simulate a different one.
		// Fake originalEvent to avoid donor's stopPropagation, but if the
		// simulated event prevents default then we do the same on the donor.
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true,
				originalEvent: {}
			}
		);
		if ( bubble ) {
			jQuery.event.trigger( e, null, elem );
		} else {
			jQuery.event.dispatch.call( elem, e );
		}
		if ( e.isDefaultPrevented() ) {
			event.preventDefault();
		}
	}
};

jQuery.removeEvent = document.removeEventListener ?
	function( elem, type, handle ) {
		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle, false );
		}
	} :
	function( elem, type, handle ) {
		var name = "on" + type;

		if ( elem.detachEvent ) {

			// #8545, #7054, preventing memory leaks for custom events in IE6-8
			// detachEvent needed property on element, by name of that event,
			// to properly expose it to GC
			if ( typeof elem[ name ] === "undefined" ) {
				elem[ name ] = null;
			}

			elem.detachEvent( name, handle );
		}
	};

jQuery.Event = function( src, props ) {
	// Allow instantiation without the 'new' keyword
	if ( !(this instanceof jQuery.Event) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&
				// Support: IE < 9, Android < 4.0
				src.returnValue === false ?
			returnTrue :
			returnFalse;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;
		if ( !e ) {
			return;
		}

		// If preventDefault exists, run it on the original event
		if ( e.preventDefault ) {
			e.preventDefault();

		// Support: IE
		// Otherwise set the returnValue property of the original event to false
		} else {
			e.returnValue = false;
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;
		if ( !e ) {
			return;
		}
		// If stopPropagation exists, run it on the original event
		if ( e.stopPropagation ) {
			e.stopPropagation();
		}

		// Support: IE
		// Set the cancelBubble property of the original event to true
		e.cancelBubble = true;
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && e.stopImmediatePropagation ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Create mouseenter/leave events using mouseover/out and event-time checks
jQuery.each({
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mousenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || (related !== target && !jQuery.contains( target, related )) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
});

// IE submit delegation
if ( !support.submitBubbles ) {

	jQuery.event.special.submit = {
		setup: function() {
			// Only need this for delegated form submit events
			if ( jQuery.nodeName( this, "form" ) ) {
				return false;
			}

			// Lazy-add a submit handler when a descendant form may potentially be submitted
			jQuery.event.add( this, "click._submit keypress._submit", function( e ) {
				// Node name check avoids a VML-related crash in IE (#9807)
				var elem = e.target,
					form = jQuery.nodeName( elem, "input" ) || jQuery.nodeName( elem, "button" ) ?
						elem.form :
						undefined;

				if ( form && !jQuery._data( form, "submitBubbles" ) ) {
					jQuery.event.add( form, "submit._submit", function( event ) {
						event._submitBubble = true;
					});
					jQuery._data( form, "submitBubbles", true );
				}
			});
			// return undefined since we don't need an event listener
		},

		postDispatch: function( event ) {
			// If form was submitted by the user, bubble the event up the tree
			if ( event._submitBubble ) {
				delete event._submitBubble;
				if ( this.parentNode && !event.isTrigger ) {
					jQuery.event.simulate( "submit", this.parentNode, event, true );
				}
			}
		},

		teardown: function() {
			// Only need this for delegated form submit events
			if ( jQuery.nodeName( this, "form" ) ) {
				return false;
			}

			// Remove delegated handlers; cleanData eventually reaps submit handlers attached above
			jQuery.event.remove( this, "._submit" );
		}
	};
}

// IE change delegation and checkbox/radio fix
if ( !support.changeBubbles ) {

	jQuery.event.special.change = {

		setup: function() {

			if ( rformElems.test( this.nodeName ) ) {
				// IE doesn't fire change on a check/radio until blur; trigger it on click
				// after a propertychange. Eat the blur-change in special.change.handle.
				// This still fires onchange a second time for check/radio after blur.
				if ( this.type === "checkbox" || this.type === "radio" ) {
					jQuery.event.add( this, "propertychange._change", function( event ) {
						if ( event.originalEvent.propertyName === "checked" ) {
							this._justChanged = true;
						}
					});
					jQuery.event.add( this, "click._change", function( event ) {
						if ( this._justChanged && !event.isTrigger ) {
							this._justChanged = false;
						}
						// Allow triggered, simulated change events (#11500)
						jQuery.event.simulate( "change", this, event, true );
					});
				}
				return false;
			}
			// Delegated event; lazy-add a change handler on descendant inputs
			jQuery.event.add( this, "beforeactivate._change", function( e ) {
				var elem = e.target;

				if ( rformElems.test( elem.nodeName ) && !jQuery._data( elem, "changeBubbles" ) ) {
					jQuery.event.add( elem, "change._change", function( event ) {
						if ( this.parentNode && !event.isSimulated && !event.isTrigger ) {
							jQuery.event.simulate( "change", this.parentNode, event, true );
						}
					});
					jQuery._data( elem, "changeBubbles", true );
				}
			});
		},

		handle: function( event ) {
			var elem = event.target;

			// Swallow native change events from checkbox/radio, we already triggered them above
			if ( this !== elem || event.isSimulated || event.isTrigger ||
				(elem.type !== "radio" && elem.type !== "checkbox") ) {

				return event.handleObj.handler.apply( this, arguments );
			}
		},

		teardown: function() {
			jQuery.event.remove( this, "._change" );

			return !rformElems.test( this.nodeName );
		}
	};
}

// Create "bubbling" focus and blur events
if ( !support.focusinBubbles ) {
	jQuery.each({ focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ), true );
			};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = jQuery._data( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				jQuery._data( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = jQuery._data( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					jQuery._removeData( doc, fix );
				} else {
					jQuery._data( doc, fix, attaches );
				}
			}
		};
	});
}

jQuery.fn.extend({

	on: function( types, selector, data, fn, /*INTERNAL*/ one ) {
		var type, origFn;

		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {
			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) {
				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for ( type in types ) {
				this.on( type, selector, data, types[ type ], one );
			}
			return this;
		}

		if ( data == null && fn == null ) {
			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {
				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {
				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return this;
		}

		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {
				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};
			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return this.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		});
	},
	one: function( types, selector, data, fn ) {
		return this.on( types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {
			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {
			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {
			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each(function() {
			jQuery.event.remove( this, types, fn, selector );
		});
	},

	trigger: function( type, data ) {
		return this.each(function() {
			jQuery.event.trigger( type, data, this );
		});
	},
	triggerHandler: function( type, data ) {
		var elem = this[0];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
});


function createSafeFragment( document ) {
	var list = nodeNames.split( "|" ),
		safeFrag = document.createDocumentFragment();

	if ( safeFrag.createElement ) {
		while ( list.length ) {
			safeFrag.createElement(
				list.pop()
			);
		}
	}
	return safeFrag;
}

var nodeNames = "abbr|article|aside|audio|bdi|canvas|data|datalist|" +
		"details|dialog|figcaption|figure|footer|header|hgroup|main|" +
		"mark|meter|nav|output|picture|progress|section|summary|template|time|video",
	rinlinejQuery = / jQuery\d+="(?:null|\d+)"/g,
	rnoshimcache = new RegExp("<(?:" + nodeNames + ")[\\s/>]", "i"),
	rleadingWhitespace = /^\s+/,
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
	rtagName = /<([\w:]+)/,
	rtbody = /<tbody/i,
	rhtml = /<|&#?\w+;/,
	rnoInnerhtml = /<(?:script|style|link)/i,
	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptType = /^$|\/(?:java|ecma)script/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,

	// We have to close these tags to support XHTML (#13200)
	wrapMap = {
		option: [ 1, "<select multiple='multiple'>", "</select>" ],
		legend: [ 1, "<fieldset>", "</fieldset>" ],
		area: [ 1, "<map>", "</map>" ],
		param: [ 1, "<object>", "</object>" ],
		thead: [ 1, "<table>", "</table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		col: [ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

		// IE6-8 can't serialize link, script, style, or any html5 (NoScope) tags,
		// unless wrapped in a div with non-breaking characters in front of it.
		_default: support.htmlSerialize ? [ 0, "", "" ] : [ 1, "X<div>", "</div>"  ]
	},
	safeFragment = createSafeFragment( document ),
	fragmentDiv = safeFragment.appendChild( document.createElement("div") );

wrapMap.optgroup = wrapMap.option;
wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

function getAll( context, tag ) {
	var elems, elem,
		i = 0,
		found = typeof context.getElementsByTagName !== "undefined" ?
			context.getElementsByTagName( tag || "*" ) :
			typeof context.querySelectorAll !== "undefined" ?
				context.querySelectorAll( tag || "*" ) :
				undefined;

	if ( !found ) {
		for ( found = [], elems = context.childNodes || context; (elem = elems[i]) != null; i++ ) {
			if ( !tag || jQuery.nodeName( elem, tag ) ) {
				found.push( elem );
			} else {
				jQuery.merge( found, getAll( elem, tag ) );
			}
		}
	}

	return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
		jQuery.merge( [ context ], found ) :
		found;
}

// Used in buildFragment, fixes the defaultChecked property
function fixDefaultChecked( elem ) {
	if ( rcheckableType.test( elem.type ) ) {
		elem.defaultChecked = elem.checked;
	}
}

// Support: IE<8
// Manipulating tables requires a tbody
function manipulationTarget( elem, content ) {
	return jQuery.nodeName( elem, "table" ) &&
		jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ?

		elem.getElementsByTagName("tbody")[0] ||
			elem.appendChild( elem.ownerDocument.createElement("tbody") ) :
		elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = (jQuery.find.attr( elem, "type" ) !== null) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	var match = rscriptTypeMasked.exec( elem.type );
	if ( match ) {
		elem.type = match[1];
	} else {
		elem.removeAttribute("type");
	}
	return elem;
}

// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var elem,
		i = 0;
	for ( ; (elem = elems[i]) != null; i++ ) {
		jQuery._data(
			elem,
			"globalEval",
			!refElements || jQuery._data( refElements[i], "globalEval" )
		);
	}
}

function cloneCopyEvent( src, dest ) {

	if ( dest.nodeType !== 1 || !jQuery.hasData( src ) ) {
		return;
	}

	var type, i, l,
		oldData = jQuery._data( src ),
		curData = jQuery._data( dest, oldData ),
		events = oldData.events;

	if ( events ) {
		delete curData.handle;
		curData.events = {};

		for ( type in events ) {
			for ( i = 0, l = events[ type ].length; i < l; i++ ) {
				jQuery.event.add( dest, type, events[ type ][ i ] );
			}
		}
	}

	// make the cloned public data object a copy from the original
	if ( curData.data ) {
		curData.data = jQuery.extend( {}, curData.data );
	}
}

function fixCloneNodeIssues( src, dest ) {
	var nodeName, e, data;

	// We do not need to do anything for non-Elements
	if ( dest.nodeType !== 1 ) {
		return;
	}

	nodeName = dest.nodeName.toLowerCase();

	// IE6-8 copies events bound via attachEvent when using cloneNode.
	if ( !support.noCloneEvent && dest[ jQuery.expando ] ) {
		data = jQuery._data( dest );

		for ( e in data.events ) {
			jQuery.removeEvent( dest, e, data.handle );
		}

		// Event data gets referenced instead of copied if the expando gets copied too
		dest.removeAttribute( jQuery.expando );
	}

	// IE blanks contents when cloning scripts, and tries to evaluate newly-set text
	if ( nodeName === "script" && dest.text !== src.text ) {
		disableScript( dest ).text = src.text;
		restoreScript( dest );

	// IE6-10 improperly clones children of object elements using classid.
	// IE10 throws NoModificationAllowedError if parent is null, #12132.
	} else if ( nodeName === "object" ) {
		if ( dest.parentNode ) {
			dest.outerHTML = src.outerHTML;
		}

		// This path appears unavoidable for IE9. When cloning an object
		// element in IE9, the outerHTML strategy above is not sufficient.
		// If the src has innerHTML and the destination does not,
		// copy the src.innerHTML into the dest.innerHTML. #10324
		if ( support.html5Clone && ( src.innerHTML && !jQuery.trim(dest.innerHTML) ) ) {
			dest.innerHTML = src.innerHTML;
		}

	} else if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		// IE6-8 fails to persist the checked state of a cloned checkbox
		// or radio button. Worse, IE6-7 fail to give the cloned element
		// a checked appearance if the defaultChecked value isn't also set

		dest.defaultChecked = dest.checked = src.checked;

		// IE6-7 get confused and end up setting the value of a cloned
		// checkbox/radio button to an empty string instead of "on"
		if ( dest.value !== src.value ) {
			dest.value = src.value;
		}

	// IE6-8 fails to return the selected option to the default selected
	// state when cloning options
	} else if ( nodeName === "option" ) {
		dest.defaultSelected = dest.selected = src.defaultSelected;

	// IE6-8 fails to set the defaultValue to the correct value when
	// cloning other types of input fields
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

jQuery.extend({
	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var destElements, node, clone, i, srcElements,
			inPage = jQuery.contains( elem.ownerDocument, elem );

		if ( support.html5Clone || jQuery.isXMLDoc(elem) ||
			!rnoshimcache.test( "<" + elem.nodeName + ">" ) ) {

			clone = elem.cloneNode( true );

		// IE<=8 does not properly clone detached, unknown element nodes
		} else {
			fragmentDiv.innerHTML = elem.outerHTML;
			fragmentDiv.removeChild( clone = fragmentDiv.firstChild );
		}

		if ( (!support.noCloneEvent || !support.noCloneChecked) &&
				(elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem) ) {

			// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			// Fix all IE cloning issues
			for ( i = 0; (node = srcElements[i]) != null; ++i ) {
				// Ensure that the destination node is not null; Fixes #9587
				if ( destElements[i] ) {
					fixCloneNodeIssues( node, destElements[i] );
				}
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0; (node = srcElements[i]) != null; i++ ) {
					cloneCopyEvent( node, destElements[i] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		destElements = srcElements = node = null;

		// Return the cloned set
		return clone;
	},

	buildFragment: function( elems, context, scripts, selection ) {
		var j, elem, contains,
			tmp, tag, tbody, wrap,
			l = elems.length,

			// Ensure a safe fragment
			safe = createSafeFragment( context ),

			nodes = [],
			i = 0;

		for ( ; i < l; i++ ) {
			elem = elems[ i ];

			if ( elem || elem === 0 ) {

				// Add nodes directly
				if ( jQuery.type( elem ) === "object" ) {
					jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

				// Convert non-html into a text node
				} else if ( !rhtml.test( elem ) ) {
					nodes.push( context.createTextNode( elem ) );

				// Convert html into DOM nodes
				} else {
					tmp = tmp || safe.appendChild( context.createElement("div") );

					// Deserialize a standard representation
					tag = (rtagName.exec( elem ) || [ "", "" ])[ 1 ].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;

					tmp.innerHTML = wrap[1] + elem.replace( rxhtmlTag, "<$1></$2>" ) + wrap[2];

					// Descend through wrappers to the right content
					j = wrap[0];
					while ( j-- ) {
						tmp = tmp.lastChild;
					}

					// Manually add leading whitespace removed by IE
					if ( !support.leadingWhitespace && rleadingWhitespace.test( elem ) ) {
						nodes.push( context.createTextNode( rleadingWhitespace.exec( elem )[0] ) );
					}

					// Remove IE's autoinserted <tbody> from table fragments
					if ( !support.tbody ) {

						// String was a <table>, *may* have spurious <tbody>
						elem = tag === "table" && !rtbody.test( elem ) ?
							tmp.firstChild :

							// String was a bare <thead> or <tfoot>
							wrap[1] === "<table>" && !rtbody.test( elem ) ?
								tmp :
								0;

						j = elem && elem.childNodes.length;
						while ( j-- ) {
							if ( jQuery.nodeName( (tbody = elem.childNodes[j]), "tbody" ) &&
								!tbody.childNodes.length ) {

								elem.removeChild( tbody );
							}
						}
					}

					jQuery.merge( nodes, tmp.childNodes );

					// Fix #12392 for WebKit and IE > 9
					tmp.textContent = "";

					// Fix #12392 for oldIE
					while ( tmp.firstChild ) {
						tmp.removeChild( tmp.firstChild );
					}

					// Remember the top-level container for proper cleanup
					tmp = safe.lastChild;
				}
			}
		}

		// Fix #11356: Clear elements from fragment
		if ( tmp ) {
			safe.removeChild( tmp );
		}

		// Reset defaultChecked for any radios and checkboxes
		// about to be appended to the DOM in IE 6/7 (#8060)
		if ( !support.appendChecked ) {
			jQuery.grep( getAll( nodes, "input" ), fixDefaultChecked );
		}

		i = 0;
		while ( (elem = nodes[ i++ ]) ) {

			// #4087 - If origin and destination elements are the same, and this is
			// that element, do not do anything
			if ( selection && jQuery.inArray( elem, selection ) !== -1 ) {
				continue;
			}

			contains = jQuery.contains( elem.ownerDocument, elem );

			// Append to fragment
			tmp = getAll( safe.appendChild( elem ), "script" );

			// Preserve script evaluation history
			if ( contains ) {
				setGlobalEval( tmp );
			}

			// Capture executables
			if ( scripts ) {
				j = 0;
				while ( (elem = tmp[ j++ ]) ) {
					if ( rscriptType.test( elem.type || "" ) ) {
						scripts.push( elem );
					}
				}
			}
		}

		tmp = null;

		return safe;
	},

	cleanData: function( elems, /* internal */ acceptData ) {
		var elem, type, id, data,
			i = 0,
			internalKey = jQuery.expando,
			cache = jQuery.cache,
			deleteExpando = support.deleteExpando,
			special = jQuery.event.special;

		for ( ; (elem = elems[i]) != null; i++ ) {
			if ( acceptData || jQuery.acceptData( elem ) ) {

				id = elem[ internalKey ];
				data = id && cache[ id ];

				if ( data ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Remove cache only if it was not already removed by jQuery.event.remove
					if ( cache[ id ] ) {

						delete cache[ id ];

						// IE does not allow us to delete expando properties from nodes,
						// nor does it have a removeAttribute function on Document nodes;
						// we must handle all of these cases
						if ( deleteExpando ) {
							delete elem[ internalKey ];

						} else if ( typeof elem.removeAttribute !== "undefined" ) {
							elem.removeAttribute( internalKey );

						} else {
							elem[ internalKey ] = null;
						}

						deletedIds.push( id );
					}
				}
			}
		}
	}
});

jQuery.fn.extend({
	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().append(
					( this[0] && this[0].ownerDocument || document ).createTextNode( value )
				);
		}, null, value, arguments.length );
	},

	append: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		});
	},

	prepend: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		});
	},

	before: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		});
	},

	after: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		});
	},

	remove: function( selector, keepData /* Internal Use Only */ ) {
		var elem,
			elems = selector ? jQuery.filter( selector, this ) : this,
			i = 0;

		for ( ; (elem = elems[i]) != null; i++ ) {

			if ( !keepData && elem.nodeType === 1 ) {
				jQuery.cleanData( getAll( elem ) );
			}

			if ( elem.parentNode ) {
				if ( keepData && jQuery.contains( elem.ownerDocument, elem ) ) {
					setGlobalEval( getAll( elem, "script" ) );
				}
				elem.parentNode.removeChild( elem );
			}
		}

		return this;
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; (elem = this[i]) != null; i++ ) {
			// Remove element nodes and prevent memory leaks
			if ( elem.nodeType === 1 ) {
				jQuery.cleanData( getAll( elem, false ) );
			}

			// Remove any remaining nodes
			while ( elem.firstChild ) {
				elem.removeChild( elem.firstChild );
			}

			// If this is a select, ensure that it displays empty (#12336)
			// Support: IE<9
			if ( elem.options && jQuery.nodeName( elem, "select" ) ) {
				elem.options.length = 0;
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map(function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		});
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined ) {
				return elem.nodeType === 1 ?
					elem.innerHTML.replace( rinlinejQuery, "" ) :
					undefined;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				( support.htmlSerialize || !rnoshimcache.test( value )  ) &&
				( support.leadingWhitespace || !rleadingWhitespace.test( value ) ) &&
				!wrapMap[ (rtagName.exec( value ) || [ "", "" ])[ 1 ].toLowerCase() ] ) {

				value = value.replace( rxhtmlTag, "<$1></$2>" );

				try {
					for (; i < l; i++ ) {
						// Remove element nodes and prevent memory leaks
						elem = this[i] || {};
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var arg = arguments[ 0 ];

		// Make the changes, replacing each context element with the new content
		this.domManip( arguments, function( elem ) {
			arg = this.parentNode;

			jQuery.cleanData( getAll( this ) );

			if ( arg ) {
				arg.replaceChild( elem, this );
			}
		});

		// Force removal if there was no new content (e.g., from empty arguments)
		return arg && (arg.length || arg.nodeType) ? this : this.remove();
	},

	detach: function( selector ) {
		return this.remove( selector, true );
	},

	domManip: function( args, callback ) {

		// Flatten any nested arrays
		args = concat.apply( [], args );

		var first, node, hasScripts,
			scripts, doc, fragment,
			i = 0,
			l = this.length,
			set = this,
			iNoClone = l - 1,
			value = args[0],
			isFunction = jQuery.isFunction( value );

		// We can't cloneNode fragments that contain checked, in WebKit
		if ( isFunction ||
				( l > 1 && typeof value === "string" &&
					!support.checkClone && rchecked.test( value ) ) ) {
			return this.each(function( index ) {
				var self = set.eq( index );
				if ( isFunction ) {
					args[0] = value.call( this, index, self.html() );
				}
				self.domManip( args, callback );
			});
		}

		if ( l ) {
			fragment = jQuery.buildFragment( args, this[ 0 ].ownerDocument, false, this );
			first = fragment.firstChild;

			if ( fragment.childNodes.length === 1 ) {
				fragment = first;
			}

			if ( first ) {
				scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
				hasScripts = scripts.length;

				// Use the original fragment for the last item
				// instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for ( ; i < l; i++ ) {
					node = fragment;

					if ( i !== iNoClone ) {
						node = jQuery.clone( node, true, true );

						// Keep references to cloned scripts for later restoration
						if ( hasScripts ) {
							jQuery.merge( scripts, getAll( node, "script" ) );
						}
					}

					callback.call( this[i], node, i );
				}

				if ( hasScripts ) {
					doc = scripts[ scripts.length - 1 ].ownerDocument;

					// Reenable scripts
					jQuery.map( scripts, restoreScript );

					// Evaluate executable scripts on first document insertion
					for ( i = 0; i < hasScripts; i++ ) {
						node = scripts[ i ];
						if ( rscriptType.test( node.type || "" ) &&
							!jQuery._data( node, "globalEval" ) &&
							jQuery.contains( doc, node ) ) {

							if ( node.src ) {
								// Optional AJAX dependency, but won't run scripts if not present
								if ( jQuery._evalUrl ) {
									jQuery._evalUrl( node.src );
								}
							} else {
								jQuery.globalEval(
									( node.text || node.textContent || node.innerHTML || "" )
										.replace( rcleanScript, "" )
								);
							}
						}
					}
				}

				// Fix #11809: Avoid leaking memory
				fragment = first = null;
			}
		}

		return this;
	}
});

jQuery.each({
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			i = 0,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone(true);
			jQuery( insert[i] )[ original ]( elems );

			// Modern browsers can apply jQuery collections as arrays, but oldIE needs a .get()
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
});


// Based off of the plugin by Clint Helfers, with permission.
// http://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = setTimeout( next, time );
		hooks.stop = function() {
			clearTimeout( timeout );
		};
	});
};


(function() {
	// Minified: var a,b,c,d,e
	var input, div, select, a, opt;

	// Setup
	div = document.createElement( "div" );
	div.setAttribute( "className", "t" );
	div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
	a = div.getElementsByTagName("a")[ 0 ];

	// First batch of tests.
	select = document.createElement("select");
	opt = select.appendChild( document.createElement("option") );
	input = div.getElementsByTagName("input")[ 0 ];

	a.style.cssText = "top:1px";

	// Test setAttribute on camelCase class.
	// If it works, we need attrFixes when doing get/setAttribute (ie6/7)
	support.getSetAttribute = div.className !== "t";

	// Get the style information from getAttribute
	// (IE uses .cssText instead)
	support.style = /top/.test( a.getAttribute("style") );

	// Make sure that URLs aren't manipulated
	// (IE normalizes it by default)
	support.hrefNormalized = a.getAttribute("href") === "/a";

	// Check the default checkbox/radio value ("" on WebKit; "on" elsewhere)
	support.checkOn = !!input.value;

	// Make sure that a selected-by-default option has a working selected property.
	// (WebKit defaults to false instead of true, IE too, if it's in an optgroup)
	support.optSelected = opt.selected;

	// Tests for enctype support on a form (#6743)
	support.enctype = !!document.createElement("form").enctype;

	// Make sure that the options inside disabled selects aren't marked as disabled
	// (WebKit marks them as disabled)
	select.disabled = true;
	support.optDisabled = !opt.disabled;

	// Support: IE8 only
	// Check if we can trust getAttribute("value")
	input = document.createElement( "input" );
	input.setAttribute( "value", "" );
	support.input = input.getAttribute( "value" ) === "";

	// Check if an input maintains its value after becoming a radio
	input.value = "t";
	input.setAttribute( "type", "radio" );
	support.radioValue = input.value === "t";
})();


var rreturn = /\r/g;

jQuery.fn.extend({
	val: function( value ) {
		var hooks, ret, isFunction,
			elem = this[0];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks && "get" in hooks && (ret = hooks.get( elem, "value" )) !== undefined ) {
					return ret;
				}

				ret = elem.value;

				return typeof ret === "string" ?
					// handle most common string cases
					ret.replace(rreturn, "") :
					// handle cases where value is null/undef or number
					ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each(function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";
			} else if ( typeof val === "number" ) {
				val += "";
			} else if ( jQuery.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				});
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !("set" in hooks) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		});
	}
});

jQuery.extend({
	valHooks: {
		option: {
			get: function( elem ) {
				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :
					// Support: IE10-11+
					// option.text throws exceptions (#14686, #14858)
					jQuery.trim( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one" || index < 0,
					values = one ? null : [],
					max = one ? index + 1 : options.length,
					i = index < 0 ?
						max :
						one ? index : 0;

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// oldIE doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&
							// Don't return options that are disabled or in a disabled optgroup
							( support.optDisabled ?
								!option.disabled :
								option.getAttribute("disabled") === null ) &&
							( !option.parentNode.disabled ||
								!jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					if ( jQuery.inArray( jQuery.valHooks.option.get( option ), values ) >= 0 ) {

						// Support: IE6
						// When new option element is added to select box we need to
						// force reflow of newly added node in order to workaround delay
						// of initialization properties
						try {
							option.selected = optionSet = true;

						} catch ( _ ) {

							// Will be executed only in IE6
							option.scrollHeight;
						}

					} else {
						option.selected = false;
					}
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}

				return options;
			}
		}
	}
});

// Radios and checkboxes getter/setter
jQuery.each([ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( jQuery.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery(elem).val(), value ) >= 0 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			// Support: Webkit
			// "" is returned instead of "on" if a value isn't specified
			return elem.getAttribute("value") === null ? "on" : elem.value;
		};
	}
});




var nodeHook, boolHook,
	attrHandle = jQuery.expr.attrHandle,
	ruseDefault = /^(?:checked|selected)$/i,
	getSetAttribute = support.getSetAttribute,
	getSetInput = support.input;

jQuery.fn.extend({
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each(function() {
			jQuery.removeAttr( this, name );
		});
	}
});

jQuery.extend({
	attr: function( elem, name, value ) {
		var hooks, ret,
			nType = elem.nodeType;

		// don't get/set attributes on text, comment and attribute nodes
		if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// All attributes are lowercase
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			name = name.toLowerCase();
			hooks = jQuery.attrHooks[ name ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : nodeHook );
		}

		if ( value !== undefined ) {

			if ( value === null ) {
				jQuery.removeAttr( elem, name );

			} else if ( hooks && "set" in hooks &&
				(ret = hooks.set( elem, value, name )) !== undefined ) {

				return ret;

			} else {
				elem.setAttribute( name, value + "" );
				return value;
			}

		} else if ( hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ) {
			return ret;

		} else {
			ret = jQuery.find.attr( elem, name );

			// Non-existent attributes return null, we normalize to undefined
			return ret == null ?
				undefined :
				ret;
		}
	},

	removeAttr: function( elem, value ) {
		var name, propName,
			i = 0,
			attrNames = value && value.match( rnotwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( (name = attrNames[i++]) ) {
				propName = jQuery.propFix[ name ] || name;

				// Boolean attributes get special treatment (#10870)
				if ( jQuery.expr.match.bool.test( name ) ) {
					// Set corresponding property to false
					if ( getSetInput && getSetAttribute || !ruseDefault.test( name ) ) {
						elem[ propName ] = false;
					// Support: IE<9
					// Also clear defaultChecked/defaultSelected (if appropriate)
					} else {
						elem[ jQuery.camelCase( "default-" + name ) ] =
							elem[ propName ] = false;
					}

				// See #9699 for explanation of this approach (setting first, then removal)
				} else {
					jQuery.attr( elem, name, "" );
				}

				elem.removeAttribute( getSetAttribute ? name : propName );
			}
		}
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" && jQuery.nodeName(elem, "input") ) {
					// Setting the type on a radio button after the value resets the value in IE6-9
					// Reset value to default in case type is set after value during creation
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	}
});

// Hook for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {
			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else if ( getSetInput && getSetAttribute || !ruseDefault.test( name ) ) {
			// IE<8 needs the *property* name
			elem.setAttribute( !getSetAttribute && jQuery.propFix[ name ] || name, name );

		// Use defaultChecked and defaultSelected for oldIE
		} else {
			elem[ jQuery.camelCase( "default-" + name ) ] = elem[ name ] = true;
		}

		return name;
	}
};

// Retrieve booleans specially
jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {

	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = getSetInput && getSetAttribute || !ruseDefault.test( name ) ?
		function( elem, name, isXML ) {
			var ret, handle;
			if ( !isXML ) {
				// Avoid an infinite loop by temporarily removing this function from the getter
				handle = attrHandle[ name ];
				attrHandle[ name ] = ret;
				ret = getter( elem, name, isXML ) != null ?
					name.toLowerCase() :
					null;
				attrHandle[ name ] = handle;
			}
			return ret;
		} :
		function( elem, name, isXML ) {
			if ( !isXML ) {
				return elem[ jQuery.camelCase( "default-" + name ) ] ?
					name.toLowerCase() :
					null;
			}
		};
});

// fix oldIE attroperties
if ( !getSetInput || !getSetAttribute ) {
	jQuery.attrHooks.value = {
		set: function( elem, value, name ) {
			if ( jQuery.nodeName( elem, "input" ) ) {
				// Does not return so that setAttribute is also used
				elem.defaultValue = value;
			} else {
				// Use nodeHook if defined (#1954); otherwise setAttribute is fine
				return nodeHook && nodeHook.set( elem, value, name );
			}
		}
	};
}

// IE6/7 do not support getting/setting some attributes with get/setAttribute
if ( !getSetAttribute ) {

	// Use this for any attribute in IE6/7
	// This fixes almost every IE6/7 issue
	nodeHook = {
		set: function( elem, value, name ) {
			// Set the existing or create a new attribute node
			var ret = elem.getAttributeNode( name );
			if ( !ret ) {
				elem.setAttributeNode(
					(ret = elem.ownerDocument.createAttribute( name ))
				);
			}

			ret.value = value += "";

			// Break association with cloned elements by also using setAttribute (#9646)
			if ( name === "value" || value === elem.getAttribute( name ) ) {
				return value;
			}
		}
	};

	// Some attributes are constructed with empty-string values when not defined
	attrHandle.id = attrHandle.name = attrHandle.coords =
		function( elem, name, isXML ) {
			var ret;
			if ( !isXML ) {
				return (ret = elem.getAttributeNode( name )) && ret.value !== "" ?
					ret.value :
					null;
			}
		};

	// Fixing value retrieval on a button requires this module
	jQuery.valHooks.button = {
		get: function( elem, name ) {
			var ret = elem.getAttributeNode( name );
			if ( ret && ret.specified ) {
				return ret.value;
			}
		},
		set: nodeHook.set
	};

	// Set contenteditable to false on removals(#10429)
	// Setting to empty string throws an error as an invalid value
	jQuery.attrHooks.contenteditable = {
		set: function( elem, value, name ) {
			nodeHook.set( elem, value === "" ? false : value, name );
		}
	};

	// Set width and height to auto instead of 0 on empty string( Bug #8150 )
	// This is for removals
	jQuery.each([ "width", "height" ], function( i, name ) {
		jQuery.attrHooks[ name ] = {
			set: function( elem, value ) {
				if ( value === "" ) {
					elem.setAttribute( name, "auto" );
					return value;
				}
			}
		};
	});
}

if ( !support.style ) {
	jQuery.attrHooks.style = {
		get: function( elem ) {
			// Return undefined in the case of empty string
			// Note: IE uppercases css property names, but if we were to .toLowerCase()
			// .cssText, that would destroy case senstitivity in URL's, like in "background"
			return elem.style.cssText || undefined;
		},
		set: function( elem, value ) {
			return ( elem.style.cssText = value + "" );
		}
	};
}




var rfocusable = /^(?:input|select|textarea|button|object)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend({
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		name = jQuery.propFix[ name ] || name;
		return this.each(function() {
			// try/catch handles cases where IE balks (such as removing a property on window)
			try {
				this[ name ] = undefined;
				delete this[ name ];
			} catch ( e ) {}
		});
	}
});

jQuery.extend({
	propFix: {
		"for": "htmlFor",
		"class": "className"
	},

	prop: function( elem, name, value ) {
		var ret, hooks, notxml,
			nType = elem.nodeType;

		// don't get/set properties on text, comment and attribute nodes
		if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		notxml = nType !== 1 || !jQuery.isXMLDoc( elem );

		if ( notxml ) {
			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			return hooks && "set" in hooks &&
				(ret = hooks.set( elem, value, name )) !== undefined ?
					ret :
					( elem[ name ] = value );

		} else {
			return hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ?
				ret :
				elem[ name ];
		}
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				return tabindex ?
					parseInt( tabindex, 10 ) :
					rfocusable.test( elem.nodeName ) ||
						rclickable.test( elem.nodeName ) && elem.href ?
							0 :
							-1;
			}
		}
	}
});

// Some attributes require a special call on IE
// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !support.hrefNormalized ) {
	// href/src property should get the full normalized URL (#10299/#12915)
	jQuery.each([ "href", "src" ], function( i, name ) {
		jQuery.propHooks[ name ] = {
			get: function( elem ) {
				return elem.getAttribute( name, 4 );
			}
		};
	});
}

// Support: Safari, IE9+
// mis-reports the default selected property of an option
// Accessing the parent's selectedIndex property fixes it
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {
			var parent = elem.parentNode;

			if ( parent ) {
				parent.selectedIndex;

				// Make sure that it also works with optgroups, see #5701
				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
			return null;
		}
	};
}

jQuery.each([
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
});

// IE6/7 call enctype encoding
if ( !support.enctype ) {
	jQuery.propFix.enctype = "encoding";
}




var rclass = /[\t\r\n\f]/g;

jQuery.fn.extend({
	addClass: function( value ) {
		var classes, elem, cur, clazz, j, finalValue,
			i = 0,
			len = this.length,
			proceed = typeof value === "string" && value;

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( j ) {
				jQuery( this ).addClass( value.call( this, j, this.className ) );
			});
		}

		if ( proceed ) {
			// The disjunction here is for better compressibility (see removeClass)
			classes = ( value || "" ).match( rnotwhite ) || [];

			for ( ; i < len; i++ ) {
				elem = this[ i ];
				cur = elem.nodeType === 1 && ( elem.className ?
					( " " + elem.className + " " ).replace( rclass, " " ) :
					" "
				);

				if ( cur ) {
					j = 0;
					while ( (clazz = classes[j++]) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// only assign if different to avoid unneeded rendering.
					finalValue = jQuery.trim( cur );
					if ( elem.className !== finalValue ) {
						elem.className = finalValue;
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, clazz, j, finalValue,
			i = 0,
			len = this.length,
			proceed = arguments.length === 0 || typeof value === "string" && value;

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( j ) {
				jQuery( this ).removeClass( value.call( this, j, this.className ) );
			});
		}
		if ( proceed ) {
			classes = ( value || "" ).match( rnotwhite ) || [];

			for ( ; i < len; i++ ) {
				elem = this[ i ];
				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( elem.className ?
					( " " + elem.className + " " ).replace( rclass, " " ) :
					""
				);

				if ( cur ) {
					j = 0;
					while ( (clazz = classes[j++]) ) {
						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) >= 0 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// only assign if different to avoid unneeded rendering.
					finalValue = value ? jQuery.trim( cur ) : "";
					if ( elem.className !== finalValue ) {
						elem.className = finalValue;
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value;

		if ( typeof stateVal === "boolean" && type === "string" ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( i ) {
				jQuery( this ).toggleClass(
					value.call(this, i, this.className, stateVal), stateVal
				);
			});
		}

		return this.each(function() {
			if ( type === "string" ) {
				// toggle individual class names
				var className,
					i = 0,
					self = jQuery( this ),
					classNames = value.match( rnotwhite ) || [];

				while ( (className = classNames[ i++ ]) ) {
					// check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( type === "undefined" || type === "boolean" ) {
				if ( this.className ) {
					// store className if set
					jQuery._data( this, "__className__", this.className );
				}

				// If the element has a class name or if we're passed "false",
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				this.className = this.className || value === false ?
					"" :
					jQuery._data( this, "__className__" ) || "";
			}
		});
	},

	hasClass: function( selector ) {
		var className = " " + selector + " ",
			i = 0,
			l = this.length;
		for ( ; i < l; i++ ) {
			if ( this[i].nodeType === 1 &&
				(" " + this[i].className + " ").replace(rclass, " ").indexOf( className ) >= 0 ) {

				return true;
			}
		}

		return false;
	}
});




// Return jQuery for attributes-only inclusion
var nonce = jQuery.now();

var rquery = (/\?/);



var rvalidtokens = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;

jQuery.parseJSON = function( data ) {
	// Attempt to parse using the native JSON parser first
	if ( window.JSON && window.JSON.parse ) {
		// Support: Android 2.3
		// Workaround failure to string-cast null input
		return window.JSON.parse( data + "" );
	}

	var requireNonComma,
		depth = null,
		str = jQuery.trim( data + "" );

	// Guard against invalid (and possibly dangerous) input by ensuring that nothing remains
	// after removing valid tokens
	return str && !jQuery.trim( str.replace( rvalidtokens, function( token, comma, open, close ) {

		// Force termination if we see a misplaced comma
		if ( requireNonComma && comma ) {
			depth = 0;
		}

		// Perform no more replacements after returning to outermost depth
		if ( depth === 0 ) {
			return token;
		}

		// Commas must not follow "[", "{", or ","
		requireNonComma = open || comma;

		// Determine new depth
		// array/object open ("[" or "{"): depth += true - false (increment)
		// array/object close ("]" or "}"): depth += false - true (decrement)
		// other cases ("," or primitive): depth += true - true (numeric cast)
		depth += !close - !open;

		// Remove this token
		return "";
	}) ) ?
		( Function( "return " + str ) )() :
		jQuery.error( "Invalid JSON: " + data );
};


// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml, tmp;
	if ( !data || typeof data !== "string" ) {
		return null;
	}
	try {
		if ( window.DOMParser ) { // Standard
			tmp = new DOMParser();
			xml = tmp.parseFromString( data, "text/xml" );
		} else { // IE
			xml = new ActiveXObject( "Microsoft.XMLDOM" );
			xml.async = "false";
			xml.loadXML( data );
		}
	} catch ( e ) {
		xml = undefined;
	}
	if ( !xml || !xml.documentElement || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	// Document location
	ajaxLocParts,
	ajaxLocation,

	rhash = /#.*$/,
	rts = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, // IE leaves an \r character at EOL
	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,
	rurl = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat("*");

// Support: IE<8
// #8138, IE may throw an exception when accessing
// a field from window.location if document.domain has been set
try {
	ajaxLocation = location.href;
} catch ( e ) {
	// Use the href attribute of an A element
	// since IE will modify it given document.location
	ajaxLocation = document.createElement( "a" );
	ajaxLocation.href = "";
	ajaxLocation = ajaxLocation.href;
}

// Segment location into parts
ajaxLocParts = rurl.exec( ajaxLocation.toLowerCase() ) || [];

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];

		if ( jQuery.isFunction( func ) ) {
			// For each dataType in the dataTypeExpression
			while ( (dataType = dataTypes[i++]) ) {
				// Prepend if requested
				if ( dataType.charAt( 0 ) === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					(structure[ dataType ] = structure[ dataType ] || []).unshift( func );

				// Otherwise append
				} else {
					(structure[ dataType ] = structure[ dataType ] || []).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		});
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var deep, key,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || (deep = {}) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {
	var firstDataType, ct, finalDataType, type,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {
		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[0] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}
		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},
		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {
								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s[ "throws" ] ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend({

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: ajaxLocation,
		type: "GET",
		isLocal: rlocalProtocol.test( ajaxLocParts[ 1 ] ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",
		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /xml/,
			html: /html/,
			json: /json/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": jQuery.parseJSON,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var // Cross-domain detection vars
			parts,
			// Loop variable
			i,
			// URL without anti-cache param
			cacheURL,
			// Response headers as string
			responseHeadersString,
			// timeout handle
			timeoutTimer,

			// To know if global events are to be dispatched
			fireGlobals,

			transport,
			// Response headers
			responseHeaders,
			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),
			// Callbacks context
			callbackContext = s.context || s,
			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,
			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks("once memory"),
			// Status-dependent callbacks
			statusCode = s.statusCode || {},
			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},
			// The jqXHR state
			state = 0,
			// Default abort message
			strAbort = "canceled",
			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( state === 2 ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( (match = rheaders.exec( responseHeadersString )) ) {
								responseHeaders[ match[1].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return state === 2 ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					var lname = name.toLowerCase();
					if ( !state ) {
						name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( !state ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( state < 2 ) {
							for ( code in map ) {
								// Lazy-add the new callback in a way that preserves old ones
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						} else {
							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR ).complete = completeDeferred.add;
		jqXHR.success = jqXHR.done;
		jqXHR.error = jqXHR.fail;

		// Remove hash character (#7531: and string promotion)
		// Add protocol if not provided (#5866: IE7 issue with protocol-less urls)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || ajaxLocation ) + "" )
			.replace( rhash, "" )
			.replace( rprotocol, ajaxLocParts[ 1 ] + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];

		// A cross-domain request is in order when we have a protocol:host:port mismatch
		if ( s.crossDomain == null ) {
			parts = rurl.exec( s.url.toLowerCase() );
			s.crossDomain = !!( parts &&
				( parts[ 1 ] !== ajaxLocParts[ 1 ] || parts[ 2 ] !== ajaxLocParts[ 2 ] ||
					( parts[ 3 ] || ( parts[ 1 ] === "http:" ? "80" : "443" ) ) !==
						( ajaxLocParts[ 3 ] || ( ajaxLocParts[ 1 ] === "http:" ? "80" : "443" ) ) )
			);
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( state === 2 ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger("ajaxStart");
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		cacheURL = s.url;

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// If data is available, append data to url
			if ( s.data ) {
				cacheURL = ( s.url += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data );
				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add anti-cache in url if needed
			if ( s.cache === false ) {
				s.url = rts.test( cacheURL ) ?

					// If there is already a '_' parameter, set its value
					cacheURL.replace( rts, "$1_=" + nonce++ ) :

					// Otherwise add one to the end
					cacheURL + ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + nonce++;
			}
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[0] ] ?
				s.accepts[ s.dataTypes[0] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		for ( i in { success: 1, error: 1, complete: 1 } ) {
			jqXHR[ i ]( s[ i ] );
		}

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( state === 2 ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = setTimeout(function() {
					jqXHR.abort("timeout");
				}, s.timeout );
			}

			try {
				state = 1;
				transport.send( requestHeaders, done );
			} catch ( e ) {
				// Propagate exception as error if not done
				if ( state < 2 ) {
					done( -1, e );
				// Simply rethrow otherwise
				} else {
					throw e;
				}
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Called once
			if ( state === 2 ) {
				return;
			}

			// State is "done" now
			state = 2;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader("Last-Modified");
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader("etag");
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {
				// We extract error from statusText
				// then normalize statusText and status for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );
				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger("ajaxStop");
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
});

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {
		// shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		return jQuery.ajax({
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		});
	};
});


jQuery._evalUrl = function( url ) {
	return jQuery.ajax({
		url: url,
		type: "GET",
		dataType: "script",
		async: false,
		global: false,
		"throws": true
	});
};


var r20 = /%20/g,
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( jQuery.isArray( obj ) ) {
		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {
				// Treat each array item as a scalar.
				add( prefix, v );

			} else {
				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		});

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {
		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {
		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, value ) {
			// If value is a function, invoke it and return its value
			value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
			s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
		};

	// Set traditional to true for jQuery <= 1.3.2 behavior.
	if ( traditional === undefined ) {
		traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {
		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		});

	} else {
		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" ).replace( r20, "+" );
};

jQuery.fn.extend({
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map(function() {
			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		})
		.filter(function() {
			var type = this.type;
			// Use .is(":disabled") so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		})
		.map(function( i, elem ) {
			var val = jQuery( this ).val();

			return val == null ?
				null :
				jQuery.isArray( val ) ?
					jQuery.map( val, function( val ) {
						return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
					}) :
					{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		}).get();
	}
});


// Create the request object
// (This is still attached to ajaxSettings for backward compatibility)
jQuery.ajaxSettings.xhr = window.ActiveXObject !== undefined ?
	// Support: IE6+
	function() {

		// XHR cannot access local files, always use ActiveX for that case
		return !this.isLocal &&

			// Support: IE7-8
			// oldIE XHR does not support non-RFC2616 methods (#13240)
			// See http://msdn.microsoft.com/en-us/library/ie/ms536648(v=vs.85).aspx
			// and http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9
			// Although this check for six methods instead of eight
			// since IE also does not support "trace" and "connect"
			/^(get|post|head|put|delete|options)$/i.test( this.type ) &&

			createStandardXHR() || createActiveXHR();
	} :
	// For all other browsers, use the standard XMLHttpRequest object
	createStandardXHR;

var xhrId = 0,
	xhrCallbacks = {},
	xhrSupported = jQuery.ajaxSettings.xhr();

// Support: IE<10
// Open requests must be manually aborted on unload (#5280)
// See https://support.microsoft.com/kb/2856746 for more info
if ( window.attachEvent ) {
	window.attachEvent( "onunload", function() {
		for ( var key in xhrCallbacks ) {
			xhrCallbacks[ key ]( undefined, true );
		}
	});
}

// Determine support properties
support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
xhrSupported = support.ajax = !!xhrSupported;

// Create transport if the browser can provide an xhr
if ( xhrSupported ) {

	jQuery.ajaxTransport(function( options ) {
		// Cross domain only allowed if supported through XMLHttpRequest
		if ( !options.crossDomain || support.cors ) {

			var callback;

			return {
				send: function( headers, complete ) {
					var i,
						xhr = options.xhr(),
						id = ++xhrId;

					// Open the socket
					xhr.open(
						options.type,
						options.url,
						options.async,
						options.username,
						options.password
					);

					// Apply custom fields if provided
					if ( options.xhrFields ) {
						for ( i in options.xhrFields ) {
							xhr[ i ] = options.xhrFields[ i ];
						}
					}

					// Override mime type if needed
					if ( options.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( options.mimeType );
					}

					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !options.crossDomain && !headers["X-Requested-With"] ) {
						headers["X-Requested-With"] = "XMLHttpRequest";
					}

					// Set headers
					for ( i in headers ) {
						// Support: IE<9
						// IE's ActiveXObject throws a 'Type Mismatch' exception when setting
						// request header to a null-value.
						//
						// To keep consistent with other XHR implementations, cast the value
						// to string and ignore `undefined`.
						if ( headers[ i ] !== undefined ) {
							xhr.setRequestHeader( i, headers[ i ] + "" );
						}
					}

					// Do send the request
					// This may raise an exception which is actually
					// handled in jQuery.ajax (so no try/catch here)
					xhr.send( ( options.hasContent && options.data ) || null );

					// Listener
					callback = function( _, isAbort ) {
						var status, statusText, responses;

						// Was never called and is aborted or complete
						if ( callback && ( isAbort || xhr.readyState === 4 ) ) {
							// Clean up
							delete xhrCallbacks[ id ];
							callback = undefined;
							xhr.onreadystatechange = jQuery.noop;

							// Abort manually if needed
							if ( isAbort ) {
								if ( xhr.readyState !== 4 ) {
									xhr.abort();
								}
							} else {
								responses = {};
								status = xhr.status;

								// Support: IE<10
								// Accessing binary-data responseText throws an exception
								// (#11426)
								if ( typeof xhr.responseText === "string" ) {
									responses.text = xhr.responseText;
								}

								// Firefox throws an exception when accessing
								// statusText for faulty cross-domain requests
								try {
									statusText = xhr.statusText;
								} catch ( e ) {
									// We normalize with Webkit giving an empty statusText
									statusText = "";
								}

								// Filter status for non standard behaviors

								// If the request is local and we have data: assume a success
								// (success with no data won't get notified, that's the best we
								// can do given current implementations)
								if ( !status && options.isLocal && !options.crossDomain ) {
									status = responses.text ? 200 : 404;
								// IE - #1450: sometimes returns 1223 when it should be 204
								} else if ( status === 1223 ) {
									status = 204;
								}
							}
						}

						// Call complete if needed
						if ( responses ) {
							complete( status, statusText, responses, xhr.getAllResponseHeaders() );
						}
					};

					if ( !options.async ) {
						// if we're in sync mode we fire the callback
						callback();
					} else if ( xhr.readyState === 4 ) {
						// (IE6 & IE7) if it's in cache and has been
						// retrieved directly we need to fire the callback
						setTimeout( callback );
					} else {
						// Add to the list of active xhr callbacks
						xhr.onreadystatechange = xhrCallbacks[ id ] = callback;
					}
				},

				abort: function() {
					if ( callback ) {
						callback( undefined, true );
					}
				}
			};
		}
	});
}

// Functions to create xhrs
function createStandardXHR() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
}

function createActiveXHR() {
	try {
		return new window.ActiveXObject( "Microsoft.XMLHTTP" );
	} catch ( e ) {}
}




// Install script dataType
jQuery.ajaxSetup({
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /(?:java|ecma)script/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
});

// Handle cache's special case and global
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
		s.global = false;
	}
});

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function(s) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {

		var script,
			head = document.head || jQuery("head")[0] || document.documentElement;

		return {

			send: function( _, callback ) {

				script = document.createElement("script");

				script.async = true;

				if ( s.scriptCharset ) {
					script.charset = s.scriptCharset;
				}

				script.src = s.url;

				// Attach handlers for all browsers
				script.onload = script.onreadystatechange = function( _, isAbort ) {

					if ( isAbort || !script.readyState || /loaded|complete/.test( script.readyState ) ) {

						// Handle memory leak in IE
						script.onload = script.onreadystatechange = null;

						// Remove the script
						if ( script.parentNode ) {
							script.parentNode.removeChild( script );
						}

						// Dereference the script
						script = null;

						// Callback if not abort
						if ( !isAbort ) {
							callback( 200, "success" );
						}
					}
				};

				// Circumvent IE6 bugs with base elements (#2709 and #4378) by prepending
				// Use native DOM manipulation to avoid our domManip AJAX trickery
				head.insertBefore( script, head.firstChild );
			},

			abort: function() {
				if ( script ) {
					script.onload( undefined, true );
				}
			}
		};
	}
});




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup({
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
});

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				!( s.contentType || "" ).indexOf("application/x-www-form-urlencoded") &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters["script json"] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always(function() {
			// Restore preexisting value
			window[ callbackName ] = overwritten;

			// Save back as free
			if ( s[ callbackName ] ) {
				// make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		});

		// Delegate to script
		return "script";
	}
});




// data: string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( !data || typeof data !== "string" ) {
		return null;
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}
	context = context || document;

	var parsed = rsingleTag.exec( data ),
		scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[1] ) ];
	}

	parsed = jQuery.buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


// Keep a copy of the old load method
var _load = jQuery.fn.load;

/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	if ( typeof url !== "string" && _load ) {
		return _load.apply( this, arguments );
	}

	var selector, response, type,
		self = this,
		off = url.indexOf(" ");

	if ( off >= 0 ) {
		selector = jQuery.trim( url.slice( off, url.length ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( jQuery.isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax({
			url: url,

			// if "type" variable is undefined, then "GET" method will be used
			type: type,
			dataType: "html",
			data: params
		}).done(function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery("<div>").append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		}).complete( callback && function( jqXHR, status ) {
			self.each( callback, response || [ jqXHR.responseText, status, jqXHR ] );
		});
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each([
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
});




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( typeof define === "function" && define.amd ) {
	define( "jquery-ajax", [ ], function() {
		return jQuery;
	});
}




var
	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in
// AMD (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( typeof noGlobal === "undefined" ) {
	window.jQueryAjax = window.$AJ = jQuery;
}




return jQuery;


}));

var GlobalBroadcaster = function() {
    var MAX_PRIORITY = 10, MIN_PRIORITY = 1, topics = {}, subUid = -1;

    function unsubscribeFromTopic(token) {
        var m, i, j;
        for (m in topics) {
            if (topics[m] && topics.hasOwnProperty(m)) {
                for (i = 0, j = topics[m].length; i < j; i++) {
                    if (topics[m][i].token === token) {
                        topics[m].splice(i, 1);
                        return token;
                    }
                }
            }
        }
        return false;
    }

    function subscribeToTopic(topic, func, priority, temporary) {
        var token, prio = MAX_PRIORITY, temp = false;

        if (typeof topic !== 'string') {
            throw new Error("First parameter must be a string topic name.");
        }

        if (typeof func !== 'function') {
            throw new Error("Second parameter must be a function.");
        }

        if (typeof priority !== 'undefined') {
            if (typeof priority !== 'number') {
                throw new Error("Priority must be a number.");
            }
            else {
                if (priority > MAX_PRIORITY ||
                        priority < MIN_PRIORITY) {
                    throw new Error("Priority must be between 1-10.");
                }
                else {
                    prio = priority;
                }
            }
        }

        if (temporary === true) {
            temp = temporary;
        }

        if (!topics[topic]) {
            topics[topic] = [];
        }

        token = (++subUid).toString();
        topics[topic].push({
            token: token,
            prio: prio,
            func: func,
            temp: temp
        });

        topics[topic].sort(function(a, b) {
            return parseFloat(b.prio) - parseFloat(a.prio);
        });

        return token;
    }

    function publishTopic(topic, args) {
        var subscribers, len, _args, _topic;

        if (arguments.length === 0) {
            throw new Error("First parameter must be a string topic name.");
        }

        _args = Array.prototype.slice.call(arguments);
        _topic = _args.shift();

        subscribers = topics[_topic];
        len = subscribers ? subscribers.length : 0;
        while (len--) {
            subscribers[len].func.apply(null, _args);
            if (subscribers[len].temp) {
                unsubscribeFromTopic(subscribers[len].token);
            }
        }
    }

    /*
     * 
     * Publish events of interest
     * with a specific topic name and arguments
     * such as the data to pass along
     * 
     * @param {string} topic - Topic name.
     * @param {...*} [args] - arguments.
     * 
     * @returns {undefined}
     */
    this.publish = publishTopic;

    /*
     * 
     * Subscribe to events of interest
     * with a specific topic name and a
     * callback function, to be executed
     * when the topic/event is observed.
     * Default priority 10.
     * Priority must be between 1-10.
     * Functions with lower priority 
     * will be executed first. 
     * 
     * @param {string} topic - Topic name.
     * @param {type} func - function to be executed when the topic/event is observed
     * @param {number} [priority] - function with higher priority will be executed first
     * @param {boolean} [temporary] - if set to true, subscriber will unsubcribe automatically after first execution.
     * 
     * @returns {string} token - reference to subscription
     */
    this.subscribe = subscribeToTopic;

    /*
     * 
     * Unsubscribe from a specific
     * topic, based on a tokenized reference
     * to the subscription
     * 
     * @param {string} token - reference to subscription
     * 
     * @returns {false|string} - returns token if successfull,
     * otherwise returns false. 
     */
    this.unsubscribe = unsubscribeFromTopic;
};

var globalBroadcaster = new GlobalBroadcaster();
if (__testonly__) { __testonly__.GlobalBroadcaster = GlobalBroadcaster; }
var CONSTANTS = {
    "WEBRTC": {
        "PLUGIN_ID": "fcsPlugin",
        "MEDIA_STATE": {
            NOT_FOUND: "notfound",
            SEND_RECEIVE: "sendrecv",
            SEND_ONLY: "sendonly",
            RECEIVE_ONLY: "recvonly",
            INACTIVE: "inactive"
        },
        "PLUGIN_MODE": {
            WEBRTC: "webrtc", // 2.1 Enabler Plugin
            LEGACY: "legacy", // 1.2 Disabler Plugin
            LEGACYH264: "legacyh264", // 1.3 Disabler Plugin with H264
            AUTO: "auto"          // Native For Chrome Browser and 2.1 Enabler Plugin for other Browsers
        },
        "RTC_SIGNALING_STATE": {
            STABLE: "stable",
            HAVE_LOCAL_OFFER: "have-local-offer",
            HAVE_REMOTE_OFFER: "have-remote-offer",
            HAVE_LOCAL_PRANSWER: "have-local-pranswer",
            HAVE_REMOTE_PRANSWER: "have-remote-pranswer",
            CLOSED: "closed"
        },
        "RTC_SDP_TYPE": {
            "OFFER": "offer",
            "ANSWER": "answer",
            "PRANSWER": "pranswer"
        }
    },
    "STRING": {
        "NEW_LINE": "\n",
        "CARRIAGE_RETURN": "\r",
        "VIDEO" : "video",
        "AUDIO" : "audio"
    },
    "SDP" : {
        "A_LINE" : "a=",
        "M_LINE" : "m=",
        "CRYPTO" : "crypto",
        "FINGERPRINT" : "fingerprint",
        "ICE_UFRAG": "ice-ufrag:",
        "ICE_PWD": "ice-pwd:",
        "NACK": "nack",
        "NACKPLI": "nack pli"
    },
    "HTTP_METHOD" : {
        "GET" : "GET",
        "POST" : "POST",
        "PUT" : "PUT",
        "DELETE" : "DELETE",
        "OPTIONS" : "OPTIONS"
    },
    "WEBSOCKET": {
        "PROTOCOL": {
            "SECURE": "wss",
            "NONSECURE": "ws"
        },
        "DEFAULT_PORT": "8581",
        "STATUS": {
            "OPENED": 1,
            "ALREADY_OPENED": 2,
            "CREATE_ERROR": 3,
            "CONNECTION_ERROR": 4,
            "NOT_FOUND": 5,
            "CONNECTION_CLOSED": 6
        }
    },
    "COLLABORATION": {
        "GUEST_SUFFIX": "-guest"
    },
    "EVENT": {
        "XHR_REQUEST_NOT_INITIALIZED" : "XHR_REQUEST_NOT_INITIALIZED",
        "DEVICE_SUBSCRIPTION_STARTED": "DEVICE_SUBSCRIPTION_STARTED",
        "DEVICE_SUBSCRIPTION_ENDED": "DEVICE_SUBSCRIPTION_ENDED",
        "CONNECTION_REESTABLISHED": "CONNECTION_REESTABLISHED",
        "CONNECTION_LOST": "CONNECTION_LOST",
        "TOKEN_AUTH_STARTED": "TOKEN_AUTH_STARTED",
        "BASIC_AUTH_STARTED": "BASIC_AUTH_STARTED",
        "TOKEN_NOT_FOUND": "TOKEN_NOT_FOUND",
        "SESSION_EXPIRED": "SESSION_EXPIRED",
        "TURN_CREDENTIALS_ESTABLISHED": "TURN_CREDENTIALS_ESTABLISHED",
        "NOTIFICATION_CHANNEL_LOST": "NOTIFICATION_CHANNEL_LOST"
    }
};
if (__testonly__) { __testonly__.CONSTANTS = CONSTANTS; }
var JQrestful = function() {

    var ajaxSetuped = false,
            DEFAULT_LONPOLLING_TOLERANS = 30000,
            DEFAULT_AJAX_TIMEOUT = 40000,
            XHR_READY_STATE = {
                REQUEST_NOT_INITIALIZED: 0
            };

    function getLogger() {
        return logManager.getLogger("jQrestful");
    }

    function composeAjaxRequestResponseLog(context, jqXHR, errorThrown, data) {
        var responseLog = {type: context.type,
            url: context.url,
            dataType: context.dataType,
            async: context.async,
            jsonp: context.jsonp,
            crossDomain: context.crossDomain,
            timeout: context.timeout};
        if (data) {
            responseLog.data = data;
        }
        if (errorThrown) {
            responseLog.errorThrown = errorThrown;
        }
        if (jqXHR) {
            responseLog.state = jqXHR.state();
            responseLog.status = jqXHR.status;
            responseLog.statusText = jqXHR.statusText;
            responseLog.responseText = jqXHR.responseText;
            responseLog.readyState = jqXHR.readyState;
        }
        return responseLog;
    }

function parseError(x, e) {
        var returnResult, statusCode;
        getLogger().error("parseError:'" + e + "' Status:'" + x.status + "' ResponseText:'" + x.responseText + "'");

        if(x.responseText !== undefined && x.responseText.search("statusCode") !== -1){
            if (JSON.parse(x.responseText).subscribeResponse !== undefined){
                statusCode = JSON.parse(x.responseText).subscribeResponse.statusCode;
            } else if (JSON.parse(x.responseText).authorizationResponse !== undefined) {
                statusCode = JSON.parse(x.responseText).authorizationResponse.statusCode;
            }
        }
                
        statusCode = statusCode ? statusCode : x.status;

        switch (statusCode) {
            case 401:
                returnResult = fcs.Errors.AUTH;
                break;
            case 403:
                returnResult = fcs.Errors.INCORRECT_LOGIN_PASS;
                break;
            case 19:
                returnResult = fcs.Errors.LOGIN_LIMIT_CLIENT;
                break;
            case 20:
                returnResult = fcs.Errors.LOGIN_LIMIT_TABLET;
                break;
            case 44:
                returnResult = fcs.Errors.FORCE_LOGOUT_ERROR;
                break;
            case 46:
                returnResult = fcs.Errors.TOKEN_NOT_FOUND;
                break;
            case 47:
                returnResult = fcs.Errors.SESSION_EXPIRED;
                break;
            default:
                returnResult = fcs.Errors.NETWORK;
        }
        return returnResult;
    }
    
    // TODO tolga: remove parseError when all of the responseTypes are added
    function parseErrorStatusCode(x, e, responseType){
        getLogger().error("parseErrorStatusCode:'" + e + "' Status:'" + x.status + "' ResponseText:'" + x.responseText + "'");
        
        if(x.responseText !== undefined 
            && x.responseText.search("statusCode") !== -1 
            && JSON.parse(x.responseText)[responseType] !== undefined) {
            
            return JSON.parse(x.responseText)[responseType].statusCode;
        }
        
        return (x.status === 401 || x.status === 403) ? x.status:400;
    }
    

    /**
    * @ignore
    */
    this.call = function(method, callParams, successHandler, errorHandler, successParser, errorParser, responseType, header) {
        var parsedData, dataType = "json", timeout = DEFAULT_AJAX_TIMEOUT,
                url = callParams.url, resourceString,
                logger = getLogger(),
                xhr, ajaxHandler;
        if (callParams || callParams.data) {
            parsedData = callParams.data;
        }
        
        ajaxHandler = fcsConfig.useInternalJquery ? window.$AJ : window.$;

        if (fcsConfig.polling) {
            timeout = fcsConfig.polling * 1000;
            if (fcsConfig.longpollingTolerans) {
                timeout = timeout + fcsConfig.longpollingTolerans;
            }
            else {
                timeout = timeout + DEFAULT_LONPOLLING_TOLERANS;
            }
        }

        if (url.split("/rest/version/")[1]) {
            // extracting rest resource from url.
            // ".../rest/version/<ver>/<user/anonymous>/<userName>/restResource/..."
            resourceString = url.split("/rest/version/")[1].split("/")[3];
            if (!resourceString) {
                // rest resource string not found, get last string in the url
                resourceString = url.substring(url.lastIndexOf("/") + 1, url.length);
            }
            // remove "?" if exists
            resourceString = resourceString.split("?")[0];

            if (parsedData) {
                logger.info("Send ajax request: " + resourceString, parsedData);
            }
            else {
                logger.info("Send ajax request: " + resourceString);
            }
        }

        ajaxHandler.ajaxSetup({dataFilter: function(data, type) {
                if (type === "json" && data === "") {
                    data = null;
                }
                return data;
            }});

        xhr = ajaxHandler.ajax({
            type: method,
            url: url,
            cache: true,
            headers : header,
            data: parsedData,
            dataType: dataType,
            async: fcs.isAsync() === false ? false : true,
            jsonp: false,
            crossDomain: fcsConfig.cors ? fcsConfig.cors : false,
            timeout: timeout
        }).done(function onAjaxSuccess(val, textStatus, jqXHR) {
            logger.info("ajax success: " + textStatus + " " + jqXHR.status + " " + jqXHR.statusText,
                    composeAjaxRequestResponseLog(this, jqXHR, undefined, val));
            var parsed_data = val;
            if (successParser && typeof successParser === 'function') {
                parsed_data = successParser(val);
            }
            if (successHandler && typeof successHandler === 'function') {
                successHandler(parsed_data);
            }

        }).fail(function onAjaxFailure(jqXHR, textStatus, errorThrown) {
            logger.error("ajax error: " + textStatus + " " + jqXHR.status + " " + jqXHR.statusText,
                    composeAjaxRequestResponseLog(this, jqXHR, errorThrown));
            if (jqXHR.status === 410) {
                logger.error("410 Gone received");
                utils.callFunctionIfExist(fcs.notification.onGoneReceived);
                return;
            }

            if (jqXHR.status === 0 && jqXHR.statusText === "abort") {
                logger.trace("Ajax request aborted internally. not calling failure callback");
                return;
            }

            if (jqXHR.readyState === XHR_READY_STATE.REQUEST_NOT_INITIALIZED) {
                globalBroadcaster.publish(CONSTANTS.EVENT.XHR_REQUEST_NOT_INITIALIZED);
                logger.debug("Ajax request cannot be sent, this is a connection problem.");
            }
            
             if (errorHandler && typeof errorHandler === 'function') {
                 //TODO after unit tests moved to addressbook class, responseType parameter should be removed
                if (responseType === "addressBookResponse") {
                    errorHandler(parseErrorStatusCode(jqXHR, textStatus, responseType));
                }
                else {
                    if (errorParser && typeof errorParser === 'function') {
                        errorHandler(errorParser(jqXHR, textStatus));
                    } else {
                        errorHandler(parseError(jqXHR, textStatus));
                    }
                }
            }
            else {
                logger.trace("Error handler is not defined or not a function");
            }
        });

        return xhr;
    };
};

var jQueryAdapter = new JQrestful();
var JqrestfullManager = function() {

    var REQUEST_TYPE_PUT = "PUT",
            REQUEST_TYPE_POST = "POST",
            REQUEST_TYPE_GET = "GET",
            REQUEST_TYPE_DELETE = "DELETE",username, password, session;

    function getLogger() {
        return logManager.getLogger("JqrestfullManager");
    }

    function onSubscriptionStarted(data) {
        session = data.session;
    }
    
    // In order to delete previous session
    function onSubscriptionEnded() {
        session = null;
    }

    function onTokenAuth(data) {
        username = data.username;
    }

    function onBasicAuth(data) {
        username = data.username;
        password = data.password;
    }

    function manipulateHeader(header) {
        if (!header) {
            header = {};
        }
        if (!header.Accept) {
            header.Accept = "application/json";
        }
        if (!header['Content-Type']) {
            header['Content-Type'] = "application/json";
        }
        //Check whether auth or basic auth
        if (session) {
            header['x-session'] = session;
            delete header.Authorization;
        } else {
            if (username && password) {
                header.Authorization = "basic " + window.btoa(username + ":" + password);
            }
            delete header['x-session'];
        }
        return header;
    }

    //TODO: requestTimeout, synchronous parameters should be refactored.
    //TODO: Header parameter should be  the first one. This would be corrected in refactor
    function sendRequest(method, callParams, successHandler, errorHandler, successParser, errorParser, responseType, header) {
        var failureHandler = function(statusCode) {
            if (statusCode === fcs.Errors.TOKEN_NOT_FOUND) {
                globalBroadcaster.publish(CONSTANTS.EVENT.TOKEN_NOT_FOUND);
                session = null;
            } else if (statusCode === fcs.Errors.SESSION_EXPIRED){
                globalBroadcaster.publish(CONSTANTS.EVENT.SESSION_EXPIRED);
                session = null;
            }

            if (errorHandler && typeof errorHandler === 'function') {
                errorHandler(statusCode);
            }
        };
        return jQueryAdapter.call(method, callParams, successHandler, failureHandler, successParser, errorParser, responseType, header);
    }

    function sendPostRequestTokenAuth(callParams, successHandler, errorHandler, successParser, errorParser, responseType, header, token) {
        if (!header) {
            header = {};
        }
        if (!header.Accept) {
            header.Accept = "application/json";
        }
        if (!header['Content-Type']) {
            header['Content-Type'] = "application/json";
        }
        //Check whether auth or basic auth
        if (header['x-session']) {
            delete header['x-session'];
        }
        if (header.Authorization) {
            delete header.Authorization;
        }
        if (!header['x-token']) {
            header['x-token'] = token;
        }
        return sendRequest(REQUEST_TYPE_POST, callParams, successHandler, errorHandler, successParser, errorParser, responseType, header);
    }

    this.call = function(method, callParams, successHandler, errorHandler, successParser, errorParser, responseType, header) {
        header = manipulateHeader(header);
        
        if (callParams || callParams.data) {
            callParams.data = JSON.stringify(callParams.data);
        }
        
        return sendRequest(method, callParams, successHandler, errorHandler, successParser, errorParser, responseType, header);
    };

    this.sendPostRequest = function(callParams, successHandler, errorHandler, successParser, errorParser, responseType, header, token) {
        
        if (callParams || callParams.data) {
            callParams.data = JSON.stringify(callParams.data);
        }
        
        if (token) {
            return sendPostRequestTokenAuth(callParams, successHandler, errorHandler, successParser, errorParser, responseType, header, token);
        } else {
            header = manipulateHeader(header);
            return sendRequest(REQUEST_TYPE_POST, callParams, successHandler, errorHandler, successParser, errorParser, responseType, header);
        }
    };

    this.sendGetRequest = function(callParams, successHandler, errorHandler, successParser, errorParser, responseType, header) {
        header = manipulateHeader(header);        
        return sendRequest(REQUEST_TYPE_GET, callParams, successHandler, errorHandler, successParser, errorParser, responseType, header);
    };

    this.sendDeleteRequest = function(callParams, successHandler, errorHandler, successParser, errorParser, responseType, header) {
        header = manipulateHeader(header);
        
        if (callParams || callParams.data) {
            callParams.data = JSON.stringify(callParams.data);
        }
        
        return sendRequest(REQUEST_TYPE_DELETE, callParams, successHandler, errorHandler, successParser, errorParser, responseType, header);
    };

    this.sendPutRequest = function(callParams, successHandler, errorHandler, successParser, errorParser, responseType, header) {
        header = manipulateHeader(header);
        
        if (callParams || callParams.data) {
            callParams.data = JSON.stringify(callParams.data);
        }
        
        return sendRequest(REQUEST_TYPE_PUT, callParams, successHandler, errorHandler, successParser, errorParser, responseType, header);
    };

    globalBroadcaster.subscribe(CONSTANTS.EVENT.TOKEN_AUTH_STARTED, onTokenAuth, 9);
    globalBroadcaster.subscribe(CONSTANTS.EVENT.BASIC_AUTH_STARTED, onBasicAuth, 10);
    globalBroadcaster.subscribe(CONSTANTS.EVENT.DEVICE_SUBSCRIPTION_STARTED, onSubscriptionStarted);
    globalBroadcaster.subscribe(CONSTANTS.EVENT.DEVICE_SUBSCRIPTION_ENDED, onSubscriptionEnded);

    if (__testonly__) { this.manipulateHeader = manipulateHeader; }
    if (__testonly__) { this.setSession = function(value) { session = value; }; }
    if (__testonly__) { this.setUsernamePassword = function(user, pass) { username = user; password = pass; }; }
};

var server = new JqrestfullManager();
var fcsConfig = {
    polling: 30,
    useInternalJquery: true
};


var un = null, pw = null, connected = true, tkn = null;

function getDomain() {
    return un.split('@')[1];
}

function getUser() {
    return un;
}

function getUserPassword() {
    return pw;
}

function getUserToken() {
    return tkn;
}

function getVersion() {
    return "3.0.4";
}

function isConnected() {
    return connected;
}

function setConnected(connectionStatus) {
    connected = connectionStatus === true ? true : false;
}

/**
* @name fcs
* @namespace
*/
var Core = function() {

    var dev = null, pluginVer = null, services = {}, async = true;

    /**
     * This function returns value of async paramater of $.ajax requests
     * 
     * @name fcs.isAsync
     * @function
     * @returns {Boolean} true/false
     * @since 3.0.0
     *
     * @example
     * fcs.isAsync();
     */
    this.isAsync = function() {
        return async;
    };

    /**
     * This function sets async option of $.ajax() requests.
     * If It is set to false, ajax requests will be sent synchronously
     * otherwise ajax requests will be sent asynchronously.
     * 
     * @name fcs.setAsync
     * @function
     * @param {Boolean} value
     * @return {Boolean} true/false
     * @since 3.0.0
     *
     * @example
     * fcs.setAsync(false);
     */
    this.setAsync = function(value) {
        async = value;
    };

    /**
     * This function returns username of authenticated user in user@domain format.
     *
     * @name fcs.getUser
     * @function
     * @returns {string} Username of current user
     * @since 3.0.0
     *
     * @example
     * fcs.getUser();
     */
    this.getUser = getUser;
    
     /**
     * This function returns password of authenticated user
     *
     * @name fcs.getUserPassword
     * @function
     * @returns {string} Password of current user
     * @since 3.0.0
     *
     * @example
     * fcs.getUserPassword();
     */
    this.getUserPassword = getUserPassword;

    /**
     * This function returns current domain name of authenticated user
     *
     * @name fcs.getDomain
     * @function
     * @returns {string} Current domain name
     * @since 3.0.0
     *
     * @example
     * fcs.getDomain();
     */
    this.getDomain = getDomain;
    
    /**
     * This function returns the version of the JSL-API
     * 
     * @name fcs.getVersion
     * @function
     * @returns {string} Version of the JSL-API
     * @since 3.0.0
     * 
     * @example 
     * fcs.getVersion(); 
     */
    this.getVersion = getVersion;
    
    /**
     * This fucntion returns current device.
     *
     * @name fcs.getDevice
     * @function
     * @returns {string} Device specified for communicating with the server
     * @since 3.0.0
     *
     * @example
     * fcs.getDevice();
     */
    this.getDevice = function() {
        return dev;
    };

    /**
     * This function sets the user as authentication mode and cancels device authentication (if such exists),
     * as user and device modes are mutually exclusive.
     *
     * @name fcs.setUserAuth
     * @function
     * @param {string} The user to be used for communicating with the server
     * @param {string} The password to be used for communicating with the server
     * 
     * @since 3.0.0
     *
     * @example
     * fcs.setUserAuth("Username", "Password");
     */
    this.setUserAuth = function(user, password) {
        un = user;
        pw = password;
        dev = null;
        globalBroadcaster.publish(CONSTANTS.EVENT.BASIC_AUTH_STARTED, {'username' : user, 'password': password});
    };
    
    /**
     * This function sets the user as token mode authentication and cancels user authentication or/and device authentication (if such exists),
     * token authentication has priority over other authentications
     *
     * @name fcs.setTokenAuth
     * @function
     * @param {string} The user to be used for communicating with the server
     * @param {string} The token to be used for communicating with the server
     * 
     * @since 3.0.0
     *
     * @example
     * fcs.setTokenAuth("Username", "Token");
     */
    this.setTokenAuth = function(user, token){
        un = user;
        tkn = token;
        globalBroadcaster.publish(CONSTANTS.EVENT.TOKEN_AUTH_STARTED, {'username' : user, 'token': token});
    };

    /**
     * This function sets the device as authentication mode and cancels user authentication (if such exists),
     * as user and device modes are mutually exclusive.
     *
     * @name fcs.setDeviceAuth
     * @function
     * @since 3.0.0
     * @param {string} deviceID The device to be used for communicating with the server
     *
     * @example
     * fcs.setDeviceAuth("DeviceID");
     */
    this.setDeviceAuth = function(deviceID) {
        dev = deviceID;
        un = null;
    };

    /**
     * List of Authentication Types.
     * @see setDeviceAuth
     * @see setUserAuth
     * @name AuthenticationType
     * @property {number} USER User authentication
     * @property {number} DEVICE Device authentication
     * @readonly
     * @memberOf fcs
     */
    this.AuthenticationType = {
        USER: 1,
        DEVICE: 2
    };

    /**
     * List of Error Types
     *
     * @name fcs.Errors
     * @property {number} NETWORK Network failures
     * @property {number} AUTH Authentication / Authorization failures
     * @property {number} STATE Invalid state
     * @property {number} PRIV Privilege failures
     * @property {number} CONV_SUBS Conversation service subscription failures
     * @property {number} UNKNOWN Unknown failures
     * @property {number} LOGIN_LIMIT Login limit exceeded
     * @property {number} INCORRECT_LOGIN_PASS Incorrect identifier
     * @property {number} INVALID_LOGIN Invalid username
     * @property {number} TOKEN_NOT_FOUND Token provided is not valid
     * @property {number} SESSION_EXPIRED Session generated from token is expired
     * @property {number} VIDEO_SESSION_NOT_AVAILABLE Video Session is not available
     * @property {number} PENDING_REQUEST There is a pending request.
     * @readonly
     * @memberOf fcs
     * @example 
     * if (e === fcs.Errors.AUTH) 
     * {
     *     console.log("Authentication error occured")
     * }
     */
    this.Errors = {
        NETWORK: 1,
        AUTH: 2,
        STATE: 3,
        PRIV: 4,
        CONV_SUBS: 5,
        UNKNOWN: 9,
        LOGIN_LIMIT_CLIENT: 10,
        INCORRECT_LOGIN_PASS: 11,
        INVALID_LOGIN: 12,
        FORCE_LOGOUT_ERROR : 13, // smartoffice2.0 specific
        LOGIN_LIMIT_TABLET: 14, // smartoffice2.0 specific
        TOKEN_NOT_FOUND: 15,
        SESSION_EXPIRED: 16,
        VIDEO_SESSION_NOT_AVAILABLE: 17,
        PENDING_REQUEST: 18
    };

    /**
     * This function is used to set up JSL library
     *
     * @name fcs.setup
     * @function
     * @param {object} configParams Object containing parameters to be configured
     * @param {fcs.notification.NotificationTypes} [configParams.notificationType] The notification type to be used. Defauts to: LONGPOLLING
     * @param {string} [configParams.restUrl] The URL of REST server http://ip:port. Defaults to an absolute url : /rest
     * @param {string} [configParams.restPort] The port of REST server http://ip:port. 
     * @param {string} [configParams.polling] Polling time value in seconds. Default is 30.
     * @param {string} [configParams.expires] Expire time value in miliseconds. Default is 3600.
     * @param {string} [configParams.screenSharingMaxWidth] Defines maximum witdh of screen sharing option.
     * @param {string} [configParams.websocketProtocol] Determines if the websocketProtocol is secure or non-secure. Default is non-secure, which is "ws".
     * @param {string} [configParams.websocketIP] Holds the websocket connection's IP adress.
     * @param {string} [configParams.websocketPort] Holds the websocket connection's port value. By defult, it is 8581.
     * @param {string} [configParams.codecsToRemove] Audio codesc to be removed.
     * @param {string} [configParams.callAuditTimer] Audit time value for calls.
     * @param {string} [configParams.cors] True if Cross-Origin Request Sharing supported.
     * @param {string} [configParams.services] Defines the enabled services for client. Ex: CallControl, IM, call, conversation 
     * @param {string} [configParams.sipware] Necessary URL for SIP connection.
     * @param {string} [configParams.protocol] HTTP protocol to be used. Ex: Http, Https
     * @param {string} [configParams.clientIp] The client IP address for SNMP triggers
     * @param {string} [configParams.serverProvidedTurnCredentials] Provide TURN server credentials from server or not.
     * @param {number} [configParams.iceCandidateCollectionTimeoutInterval] When provided (in milliseconds), ice candidate collection assumed to be completed if at least one candidate is received within the interval.
     * @since 3.0.0
     * @example
     *
     * fcs.setup(
     *   {
     *       notificationType: fcs.notification.NotificationTypes.SNMP,
     *       clientIp: 'IP Address',
     *       restUrl: "http://ip:port"
     *   }
     * );
     */
    this.setup = function(configParams) {
        var param;
        for (param in configParams) {
            if (configParams.hasOwnProperty(param)) {
                fcsConfig[param] = configParams[param];
            }
        }
    };

    /**
     * This function sets version of plugin
     *
     * @name fcs.setPluginVersion
     * @function
     * @param {string} version
     * @since 3.0.0
     * @example
     * 
     * fcs.setPluginVersion(version);
     */
    this.setPluginVersion = function(version) {
        pluginVer = version;
    };

    /**
     * This function returns version of plugin
     *
     * @name fcs.getPluginVersion
     * @function
     * @returns {String} Version of Current Plugin
     * @since 3.0.0
     * @example
     * 
     * fcs.getPluginVersion();
     */
    this.getPluginVersion = function() {
        return pluginVer;
    };

    /**
     * This function returns assigned services of authenticated user.
     *
     * @name fcs.getServices
     * @function
     * @returns {object} The assigned services of authenticated user
     * @since 3.0.0
     * @example
     * 
     * fcs.getServices();
     */
    this.getServices = function() {
        return services;
    };

    /**
     * This function assigns determined services to current user
     *
     * @name fcs.setServices
     * @function
     * @param {array} serviceParam The list of assigned services for the user
     * @since 3.0.0
     * @example
     * fcs.setServices(["CallControl", "RestfulClient"]);
     */
    this.setServices = function(serviceParam) {
        var i;
        // for each element in serviceParam array, we create the service with value "true" in "services" object
        if (serviceParam) {
            for (i = 0; i < serviceParam.length; i++) {
                switch (serviceParam[i]) {
                    case "CallDisplay":
                        services.callDisplay = true;
                        break;
                    case "CallDisposition":
                        services.callDisposition = true;
                        break;
                    case "RestfulClient":
                        services.restfulClient = true;
                        break;
                    case "call":
                    case "CallControl":
                        services.callControl = true;
                        break;
                    case "CallMe":
                        services.callMe = true;
                        break;
                    case "Directory":
                        services.directory = true;
                        break;
                    case "ClickToCall":
                        services.clickToCall = true;
                        break;
                    case "Presence":
                        services.presence = true;
                        break;
                    case "AddressBook":
                        services.contacts = true;
                        break;
                    case "CallLog":
                        services.history = true;
                        break;
                    case "Custom":
                        services.custom = true;
                        break;
                    case "IM":
                        services.IM = true;
                        break;
                    case "Route":
                        services.routes = true;
                        break;
                    case "Collaboration":
                        services.collab = true;
                        break;
                    case "conversation":
                    case "Conversation":
                        services.conversation = true;
                        break;
                    default:
                        break;
                }
            }
        }
    };
    
    /**
     * This function deletes subscription of authenticated user and clear other  user related resources
     * 
     * @deprecated use fcs.notification.stop
     * @name fcs.clearResources
     * @function
     * @param {type} done Function to be executed when process done
     * @param {type} clearUserCredentials True if remove the user credentials from local storage
     * @param {type} synchronous
     * @since 3.0.0
     * @example
     * fcs.clearResources();
     *
     */
    this.clearResources = function(done, clearUserCredentials, synchronous) {
        fcs.setAsync(false);
        fcs.notification.stop(function() {
            //onsuccess
            window.localStorage.removeItem("SubscriptionStamp");
        }, function() {
            //onfailure, can be used in the future
        }, true);
        if (clearUserCredentials) {
            window.localStorage.removeItem("USERNAME");
            window.localStorage.removeItem("PASSWORD");
        }
        if (typeof done === 'function') {
            done();
        }
    };
    
    this.getUserLocale = function(onSuccess, onFailure) {
        server.sendGetRequest({
                "url":getWAMUrl(1, "/localization", false)
            },
            function (data) {
                utils.callFunctionIfExist(onSuccess, data);
            },
            onFailure
        );        
    };
    
    
    /**
     * Returns network connectivity status.
     * 
     * @name fcs.isConnected
     * @function
     * 
     * @returns {Boolean}, true if connection is up otherwise false.
     */
    this.isConnected = isConnected;

}, fcs;

fcs = new Core();

window.fcs = fcs;
fcs.fcsConfig = fcsConfig;
/**
 * 
 * LogManager provides javascript logging framework.<br />
 * 
 * <br />The logging level strategy is as follows:<br />
 * 
 * <br />DEBUG: Used for development and detailed debugging logs<br />
 * INFO: Messages that provide information about the high level flow<br />
 * through. Contain basic information about the actions being performed<br />
 * by the user and/or the system<br />
 * WARN: Things that shouldn't happen but don't have any immediate effect, and should be flagged<br />
 * ERROR: Errors and Exceptions<br />
 * FATAL: Anything that causes the system to enter into an unstable and unusable state<br />
 * 
 * 
 * @name logManager
 * @namespace
 * @memberOf fcs
 * 
 * @version 3.0.4
 * @since 3.0.0
 * 
 */
var LogManager = function() {
    var loggers = {},
            enabled = false,
            Level = {
        OFF: "OFF",
        FATAL: "FATAL",
        ERROR: "ERROR",
        WARN: "WARN",
        INFO: "INFO",
        DEBUG: "DEBUG",
        TRACE: "TRACE",
        ALL: "ALL"
    }, _logHandler = null;

    function getNotificationId() {
        return notificationManager ? notificationManager.getNotificationId() : null;
    }

    /**
     * 
     * Log object.
     * 
     * @typedef {Object} logObject
     * @readonly
     * @since 3.0.0
     * 
     * @property {String}  user - the user registered to fcs library.
     * @property {String}  timestamp - the time stamp of the log.
     * @property {String}  logger - the name of the logger.
     * @property {String}  level - the level of message.
     * @property {?String} notificationId - the notification channnel id used by fcs library.
     * @property {String}  message -  the message string.
     * @property {Object}  args - the arguments.
     * 
     */

    /**
     * 
     * Log handler function.
     *
     * @typedef {function} logHandler
     * @param {string} loggerName Name of the logger
     * @param {string} level Level of message
     * @param {logObject} logObject Log object
     * @since 3.0.0
     */

    /**
     * 
     * Initializes logging using user-provided log handler.
     * @name initLogging
     * @since 3.0.0
     * @function
     * @memberOf fcs.logManager
     * 
     * @param {logHandler} logHandler, Function that will receive log entries
     * @param {boolean} enableDebug, Flag defining whether debugging should be enabled or not
     * @returns {undefined}
     * 
     * @example
     * 
     * function jslLogHandler(loggerName, level, logObject) {
     *     var LOG_LEVEL = fcs.logManager.Level,
     *         msg = logObject.timestamp + " - " + loggerName + " - " + level + " - " + logObject.message;
     *     
     *     switch(level) {
     *         case LOG_LEVEL.DEBUG:
     *             window.console.debug(msg, logObject.args);
     *             break;
     *         case LOG_LEVEL.INFO:
     *             window.console.info(msg, logObject.args);
     *             break;
     *         case LOG_LEVEL.ERROR:
     *             window.console.error(msg, logObject.args);
     *             break;
     *             default:
     *             window.console.log(msg, logObject.args);
     *     }
     * }
     * 
     * fcs.logManager.initLogging(jslLogHandler, true);
     */
    this.initLogging = function(logHandler, enableDebug) {
        if (!logHandler || typeof logHandler !== 'function') {
            return false;
        }
        _logHandler = logHandler;
        enabled = enableDebug === true ? true : false;
        return true;
    };

    /**
     * 
     * Enumerates all possible log levels.
     * @name Level
     * @enum {string}
     * @since 3.0.0
     * @readonly
     * @memberOf fcs.logManager
     * @property {string} [OFF=OFF] string representation of the Off level.
     * @property {string} [FATAL=FATAL]  string representation of the Fatal level.
     * @property {string} [ERROR=ERROR] string representation of the Error level.
     * @property {string} [WARN=WARN] string representation of the Warn level.
     * @property {string} [INFO=INFO] string representation of the Info level.
     * @property {string} [DEBUG=DEBUG] string representation of the Debug level.
     * @property {string} [TRACE=TRACE] string representation of the Trace level.
     * @property {string} [ALL=ALL] string representation of the All level.
     */
    this.Level = Level;

    /**
     * Returns true or false depending on whether logging is enabled.
     * 
     * @name isEnabled
     * @function
     * @memberOf fcs.logManager
     * 
     * @returns {Boolean} 
     * @since 3.0.0
     * 
     * @example
     * 
     * fcs.logManager.isEnabled();
     * 
     */
    this.isEnabled = function() {
        return enabled;
    };

    function Logger(loggerName) {
        var name = loggerName;

        this.getName = function() {
            return name;
        };

        function log(level, message, argument) {
            if (enabled) {
                var logObject = {};

                logObject.user = getUser();
                logObject.timestamp = new Date().getTime();
                logObject.logger = name;
                logObject.level = level;
                logObject.notificationId = getNotificationId();
                logObject.message = message;
                logObject.args = argument;


                if (_logHandler) {
                    try {
                        _logHandler(logObject.logger, logObject.level, logObject);
                    }
                    catch (e) {
                        return undefined;
                    }
                }
            }
            return false;
        }

        this.trace = function trace(msg, argument) {
            return log(Level.TRACE, msg, argument);
        };

        this.debug = function debug(msg, argument) {
            return log(Level.DEBUG, msg, argument);
        };

        this.info = function info(msg, argument) {
            return log(Level.INFO, msg, argument);
        };

        this.warn = function warn(msg, argument) {
            return log(Level.WARN, msg, argument);
        };

        this.error = function error(msg, argument) {
            return log(Level.ERROR, msg, argument);
        };

        this.fatal = function fatal(msg, argument) {
            return log(Level.FATAL, msg, argument);
        };
    }

    this.getLogger = function(loggerName) {
        var logger, _loggerName;
        _loggerName = loggerName ? loggerName.trim().length !== 0 ? loggerName : "Default" : "Default";
        if (loggers[_loggerName]) {
            logger = loggers[_loggerName];
        }
        else {
            logger = new Logger(_loggerName);
            loggers[logger.getName()] = logger;
        }

        return logger;
    };
};

if (__testonly__) { __testonly__.LogManager = LogManager; }
var logManager = new LogManager();
fcs.logManager = logManager;
function getUrl(){
        var url = "";

        if(!fcsConfig.protocol || !fcsConfig.restUrl || !fcsConfig.restPort) {
            return url;
        }        
        return url + fcsConfig.protocol + "://" + fcsConfig.restUrl + ":" + fcsConfig.restPort;
    }

    function getWAMUrl(version, url, authNeeded){
        if (authNeeded === false) {
            // Authentcation is not needed.
            return getUrl() + "/rest/version/" + (version?version:"latest") + url;            
        } else {
            // Authentcation is needed for the rest request
            if(fcs.notification){
                return getUrl() + "/rest/version/" + (version?version:"latest") + (fcs.notification.isAnonymous() ? "/anonymous/" : "/user/" ) + fcs.getUser() + url;
            }
            else{
                return getUrl() + "/rest/version/" + (version?version:"latest") + "/user/" + fcs.getUser() + url;
            }              
        }
    }    
        
    
    function getSipwareUrl(){
        var url;
        if(fcsConfig.sipware){
            return fcsConfig.sipware + "/WebBroker/connections/";
        }
        return url;
    }  
    
    function getAbsolutePath() {
        var loc = window.location, pathName = loc.pathname.substring(0, loc.pathname.lastIndexOf('/') + 1);
        return loc.href.substring(0, loc.href.length - ((loc.pathname + loc.search + loc.hash).length - pathName.length));
    }

var CookieStorage = function() {
    // Get an object that holds all cookies
    var cookies = (function() {
        var cookies = {},
            all = document.cookie,
            list,
            i = 0,
            cookie, firstEq, name, value;
        if (all === "") {
            return cookies;
        }            
        
        list = all.split("; "); // Split into individual name=value pairs
        
        for(; i < list.length; i += 1) {
            cookie = list[i];
            firstEq = cookie.indexOf("="); // Find the first = sign
            name = cookie.substring(0, firstEq); // Get cookie name
            value = cookie.substring(firstEq+1); // Get cookie value
            value = decodeURIComponent(value); // Decode the value
            
            cookies[name] = value;
        }
        return cookies;
    }()),
    
    // Collect the cookie names in an array
    keys = [],
    key;
    for(key in cookies) {
        if(cookies.hasOwnProperty(key)){
            keys.push(key);
        }
       
    }
    // Public API
    this.length = keys.length;

    
    // Return the name of the nth cookie, or null if n is out of range
    this.key = function(n) {
        if (n < 0 || n >= keys.length) {
            return null;
        }            
        
        return keys[n];
    };

    // Return the value of the named cookie, or null.
    this.getItem = function(name) {
        if (arguments.length !== 1) {
            throw new Error("Provide one argument");
        }
        
        return cookies[name] || null;
    };

    this.setItem = function(key, value) {
        if (arguments.length !== 2) {
           throw new Error("Provide two arguments");
        }
        
        if (cookies[key] === undefined) { // If no existing cookie with this name
            keys.push(key);
            this.length++;
        }
        
        cookies[key] = value;
        
        var cookie = key + "=" + encodeURIComponent(value),
        today = new Date(),
        expiry = new Date(today.getTime() + 30 * 24 * 3600 * 1000);    
        // Add cookie attributes to that string
        
        cookie += "; max-age=" + expiry;
        
        
        cookie += "; path=/";
                    
        // Set the cookie through the document.cookie property
        document.cookie = cookie;
    };
    
    // Remove the specified cookie
    this.removeItem = function(key) {
        if (arguments.length !== 1) {
            throw new Error("Provide one argument");
        }
        
        var i = 0, max;
        if (cookies[key] === undefined) { // If it doesn't exist, do nothing
            return;
        }
            
        // Delete the cookie from our internal set of cookies
        delete cookies[key];
        
        // And remove the key from the array of names, too.        
        for(max = keys.length; i < max; i += 1) {
            if (keys[i] === key) { // When we find the one we want
                keys.splice(i,1); // Remove it from the array.
                break;
            }
        }
        this.length--; // Decrement cookie length
        
        // Actually delete the cookie
        document.cookie = key + "=; max-age=0";
    };
    
    // Remove all cookies
    this.clear = function() {
        var i = 0;
        for(; i < keys.length; i++) {
            document.cookie = keys[i] + "=; max-age=0";
        }
        
        // Reset our internal state
        cookies = {};
        keys = [];
        this.length = 0;
    };
};
var cache = (typeof window.localStorage !== 'undefined') ? window.localStorage : new CookieStorage();
window.cache = cache;
var Utils = function() {
    var logger = logManager.getLogger("utils");

    this.getProperty = function(obj, property) {
        return ((typeof obj[property]) === 'undefined') ? null : obj[property];
    };

    this.callFunctionIfExist = function() {
        var args = Array.prototype.slice.call(arguments), func;
        func = args.shift();
        if (typeof (func) === 'function') {
            try {
                func.apply(null, args);
                return true;
            }
            catch (e) {
                logger.error("Exception occured:\n" + e.stack);
                return undefined;
            }
        }
        else {
            logger.info("Not a function:" + func);
            return -1;
        }
    };

    this.s4 = function() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    };

    this.extend = function(target, object) {
        var prop;
        for (prop in object) {
            if (object.hasOwnProperty(prop)) {
                target[prop] = object[prop];
            }
        }
        return target;
    };

    this.compose = function(base, extendme) {
        var prop;
        for (prop in base) {
            if (typeof base[prop] === 'function' && !extendme[prop]) {
                extendme[prop] = base[prop].bind(base);
            }
        }
    };

    this.getTimestamp = function() {
        return new Date().getTime();
    };

    function getPropertyValueIfExistsInObject(object, key) {
        var objId, retVal;
        if (object) {
            for (objId in object) {
                if (object.hasOwnProperty(objId)) {
                    if (objId === key) {
                        retVal = object[objId];
                    }
                    else if (typeof object[objId] === "object") {
                        retVal = getPropertyValueIfExistsInObject(object[objId], key);
                    }
                    if (retVal) {
                        break;
                    }
                }
            }
            return retVal;
        }
    }

    this.getPropertyValueIfExistsInObject = getPropertyValueIfExistsInObject;

    this.Queue = function() {

        var items;

        this.enqueue = function(item) {
            if (typeof(items) === 'undefined') {
                items = [];
            }
            items.push(item);
        };

        this.dequeue = function() {
            return items.shift();
        };

        this.peek = function() {
            return items[0];
        };

        this.size = function() {
            return typeof(items)==='undefined' ? 0 : items.length;
        };
    };

    this.getQueue = function(){
        return new this.Queue();
    };

};
var utils = new Utils();

/**
 * Function.prototype.bind function not supported in phantom.js (used for unit test specs),
 * this fix, provides support for this function.
 * 
 * TODO: This function should be checked in new release of phantom.js and 
 * should be removed if not necessary anymore
 */
if (!Function.prototype.bind) {
  Function.prototype.bind = function(oThis) {
    if (typeof this !== 'function') {
      // closest thing possible to the ECMAScript 5
      // internal IsCallable function
      throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
    }

    var aArgs   = Array.prototype.slice.call(arguments, 1),
        fToBind = this,
        FNOP    = function() {},
        FBound  = function() {
          return fToBind.apply(this instanceof FNOP && oThis
                 ? this
                 : oThis,
                 aArgs.concat(Array.prototype.slice.call(arguments)));
        };

    FNOP.prototype = this.prototype;
    FBound.prototype = new FNOP();

    return FBound;
  };
}

if (__testonly__) { __testonly__.UtilsQueue = utils.Queue;} 

var SDPParser = function() {
    var logger = logManager.getLogger("sdpParser"),
            self, mediaDescriptions, sessionDescription,
            nl = "\n", lf = "\r";

    this.init = function(sdpData) {
        self = this;
        self.sessionDescription = {};
        self.mediaDescriptions = [];
        self.sdp = sdpData;
        self.parseSDP();
        self.setSessionDescriptionAttributes();
        self.setMediaDescriptionsAttributes();
    };


    this.parseSDP = function() { 
        var descriptions = [], index = 1, mediaDescription;
        descriptions = self.sdp.split(/^(?=m=)/m);
        self.sessionDescription.data = descriptions[0];
        for (index; index < descriptions.length; index++) {
            mediaDescription = {};
            mediaDescription.data = descriptions[index];
            self.mediaDescriptions.push(mediaDescription);
        }
    };

    this.setSessionDescriptionAttributes = function() {
        var line = 0, sessionDescriptions = self.sessionDescription.data.split(/\r\n|\r|\n/), connectionData;

        for (line; line < sessionDescriptions.length; line++) {
            if ((sessionDescriptions[line].match("^e="))) {
                self.sessionDescription.email = sessionDescriptions[line].split('=')[1];
            }
            else if ((sessionDescriptions[line].match("^c="))) {
                connectionData = sessionDescriptions[line].split('=')[1];
                self.sessionDescription.connection = connectionData;
                self.sessionDescription.ip = connectionData.split(' ')[2];
            }
        }
    };

    this.setMediaDescriptionsAttributes = function() {
        var line = 0, mediaDescriptionIndex, mediaDescriptionAttributes, mediaData, connectionData;

        for (mediaDescriptionIndex in self.mediaDescriptions) {
            if (self.mediaDescriptions.hasOwnProperty(mediaDescriptionIndex)) {
                mediaDescriptionAttributes = self.mediaDescriptions[mediaDescriptionIndex].data.split(/\r\n|\r|\n/);
                this.mediaDescriptions[mediaDescriptionIndex].direction = "sendrecv";
                for (line in mediaDescriptionAttributes) {
                    if (mediaDescriptionAttributes.hasOwnProperty(line)) {
                        //direction default sendrcv setle
                        if ((mediaDescriptionAttributes[line].match("^m="))) {
                            mediaData = mediaDescriptionAttributes[line].split('=')[1];
                            self.mediaDescriptions[mediaDescriptionIndex].media = mediaData;
                            self.mediaDescriptions[mediaDescriptionIndex].port = mediaData.split(' ')[1];
                        }
                        else if ((mediaDescriptionAttributes[line].match("^a=sendrecv")) || (mediaDescriptionAttributes[line].match("^a=sendonly")) || (mediaDescriptionAttributes[line].match("^a=recvonly")) || (mediaDescriptionAttributes[line].match("^a=inactive"))) {
                            self.mediaDescriptions[mediaDescriptionIndex].direction = mediaDescriptionAttributes[line].split('=')[1];
                        }
                        else if ((mediaDescriptionAttributes[line].match("^c="))) {
                            connectionData = mediaDescriptionAttributes[line].split('=')[1];
                            self.mediaDescriptions[mediaDescriptionIndex].connection = connectionData;
                            self.mediaDescriptions[mediaDescriptionIndex].ip = connectionData.split(' ')[2];
                        }
                    }
                }
            }
        }

    };

    this.isHold = function(isRemote) {
        var isHold = false, ip, media_index = 0, mediaDesc, direction;
        for (media_index in self.mediaDescriptions) {
            if (self.mediaDescriptions.hasOwnProperty(media_index)) {
                mediaDesc = this.mediaDescriptions[media_index];
                if (mediaDesc.ip) {
                    ip = mediaDesc.ip;
                }
                else {
                    if (self.sessionDescription.ip) {
                        ip = self.sessionDescription.ip;
                    }
                }

                if (mediaDesc.port !== 0) {
                    if ((mediaDesc.direction === "inactive") || 
                        ( (mediaDesc.direction === "sendonly") && isRemote) || 
                        ( (mediaDesc.direction === "recvonly") && !isRemote) || 
                        (ip === "0.0.0.0") ) {
                        isHold = true;
                    }
                    else {
                        isHold = false;
                        break;
                    }
                }
            }
        }
        return isHold;
    };

    this.isRemoteHold = function() {
        return this.isHold(true);
    };
    
    this.isLocalHold = function() {
        return this.isHold(false);
    };
    
    this.getSessionDescription = function() {
        return self.sessionDescription;
    };

    this.getMediaDescriptions = function() {
        return self.mediaDescriptions;
    };

    this.isSdpHas = function(pSdp, type) {
        var result = false;

        if (pSdp.indexOf(CONSTANTS.SDP.M_LINE + type) !== -1) {
            result = true;
            return result;
        }

        return result;
    };

    this.isSdpHasAudio = function(pSdp) {
        return this.isSdpHas(pSdp, CONSTANTS.STRING.AUDIO);
    };

    this.isSdpHasVideo = function(pSdp) {
        return this.isSdpHas(pSdp, CONSTANTS.STRING.VIDEO);
    };

    this.isSdpHasMediaWithExpectedPort = function(pSdp, type, port) {
        return pSdp.indexOf(CONSTANTS.SDP.M_LINE + type + " " + port) !== -1;
    };

    this.isSdpHasAudioWithZeroPort = function(pSdp) {
        return this.isSdpHasMediaWithExpectedPort(pSdp, CONSTANTS.STRING.AUDIO, 0);
    };

    this.isSdpHasVideoWithZeroPort = function(pSdp) {
        return this.isSdpHasMediaWithExpectedPort(pSdp, CONSTANTS.STRING.VIDEO, 0);
    };

    this.isSdpHasAudioWithOnePort = function(pSdp) {
        return this.isSdpHasMediaWithExpectedPort(pSdp, CONSTANTS.STRING.AUDIO, 1);
    };

    this.isSdpHasVideoWithOnePort = function(pSdp) {
        return this.isSdpHasMediaWithExpectedPort(pSdp, CONSTANTS.STRING.VIDEO, 1);
    };

    this.isSdpHasAudioWithNinePort = function(pSdp) {
        return this.isSdpHasMediaWithExpectedPort(pSdp, CONSTANTS.STRING.AUDIO, 9);
    };

    this.isSdpHasVideoWithNinePort = function(pSdp) {
        return this.isSdpHasMediaWithExpectedPort(pSdp, CONSTANTS.STRING.VIDEO, 9);
    };

    this.replaceZeroVideoPortWithOne = function(pSdp) {
        if (this.isSdpHasVideoWithZeroPort(pSdp)) {
            pSdp = pSdp.replace(CONSTANTS.SDP.M_LINE + CONSTANTS.STRING.VIDEO + " 0 ", CONSTANTS.SDP.M_LINE + CONSTANTS.STRING.VIDEO + " 1 ");
        }
        return pSdp;
    };

    this.getSdpDirection = function(pSdp, type) {
        var substr = "", descriptions = [], index,
                direction = CONSTANTS.WEBRTC.MEDIA_STATE.INACTIVE, logmsg;

        logmsg = function(state) {
            logger.info("getSdpDirection: type= " + type + " state= " + state);
        };

        if (!this.isSdpHas(pSdp, type)) {
            logmsg(direction);
            return direction;
        }

        if (this.isSdpHasMediaWithExpectedPort(pSdp, type, 0)) {
            // return if media port is 0
            logmsg(direction);
            return direction;
        }

        descriptions = pSdp.split(/^(?=m=)/m);
        for (index = 0; index < descriptions.length; index++) {
            substr = descriptions[index];
            if (substr.indexOf(CONSTANTS.SDP.M_LINE + type) !== -1) {
                if (substr.indexOf(CONSTANTS.SDP.A_LINE + CONSTANTS.WEBRTC.MEDIA_STATE.SEND_RECEIVE) !== -1) {
                    direction = CONSTANTS.WEBRTC.MEDIA_STATE.SEND_RECEIVE;
                    logmsg(direction);
                    return direction;
                } else if (substr.indexOf(CONSTANTS.SDP.A_LINE + CONSTANTS.WEBRTC.MEDIA_STATE.SEND_ONLY) !== -1) {
                    direction = CONSTANTS.WEBRTC.MEDIA_STATE.SEND_ONLY;
                    logmsg(direction);
                    return direction;
                } else if (substr.indexOf(CONSTANTS.SDP.A_LINE + CONSTANTS.WEBRTC.MEDIA_STATE.RECEIVE_ONLY) !== -1) {
                    direction = CONSTANTS.WEBRTC.MEDIA_STATE.RECEIVE_ONLY;
                    logmsg(direction);
                    return direction;
                } else if (substr.indexOf(CONSTANTS.SDP.A_LINE + CONSTANTS.WEBRTC.MEDIA_STATE.INACTIVE) !== -1) {
                    logmsg(direction);
                    return direction;
                }
                direction = CONSTANTS.WEBRTC.MEDIA_STATE.SEND_RECEIVE;
                return direction;
            }
        }
        direction = CONSTANTS.WEBRTC.MEDIA_STATE.NOT_FOUND;
        logmsg(direction);
        return direction;
    };

    this.getAudioSdpDirection = function(pSdp) {
        return this.getSdpDirection(pSdp, CONSTANTS.STRING.AUDIO);
    };

    this.getVideoSdpDirection = function(pSdp) {
        return this.getSdpDirection(pSdp, CONSTANTS.STRING.VIDEO);
    };

    this.isAudioSdpDirectionInactive = function(pSdp) {
        return this.getAudioSdpDirection(pSdp) === CONSTANTS.WEBRTC.MEDIA_STATE.INACTIVE;
    };

    this.isAudioSdpDirectionSendrecv = function(pSdp) {
        return this.getAudioSdpDirection(pSdp) === CONSTANTS.WEBRTC.MEDIA_STATE.SEND_RECEIVE;
    };

    this.isAudioSdpDirectionSendonly = function(pSdp) {
        return this.getAudioSdpDirection(pSdp) === CONSTANTS.WEBRTC.MEDIA_STATE.SEND_ONLY;
    };

    this.isAudioSdpDirectionRecvonly = function(pSdp) {
        return this.getAudioSdpDirection(pSdp) === CONSTANTS.WEBRTC.MEDIA_STATE.RECEIVE_ONLY;
    };

    this.isSdpContainsAudioDirection = function(pSdp) {
        return this.getAudioSdpDirection(pSdp) !== CONSTANTS.WEBRTC.MEDIA_STATE.NOT_FOUND;
    };

    this.isVideoSdpDirectionInactive = function(pSdp) {
        return this.getVideoSdpDirection(pSdp) === CONSTANTS.WEBRTC.MEDIA_STATE.INACTIVE;
    };

    this.isVideoSdpDirectionSendrecv = function(pSdp) {
        return this.getVideoSdpDirection(pSdp) === CONSTANTS.WEBRTC.MEDIA_STATE.SEND_RECEIVE;
    };

    this.isVideoSdpDirectionSendonly = function(pSdp) {
        return this.getVideoSdpDirection(pSdp) === CONSTANTS.WEBRTC.MEDIA_STATE.SEND_ONLY;
    };

    this.isVideoSdpDirectionRecvonly = function(pSdp) {
        return this.getVideoSdpDirection(pSdp) === CONSTANTS.WEBRTC.MEDIA_STATE.RECEIVE_ONLY;
    };

    this.isSdpContainsVideoDirection = function(pSdp) {
        return this.getVideoSdpDirection(pSdp) !== CONSTANTS.WEBRTC.MEDIA_STATE.NOT_FOUND;
    };

    this.changeDirection = function(pSdp, directionBefore, directionAfter, type) {
        var sdp = "", substr, descriptions = [], index,
                msg = "changeDirection: before= " + directionBefore + " after= " + directionAfter;

        if (directionBefore === directionAfter) {
            //no need to change direction
            return pSdp;
        }

        if (type === undefined || type === null) {
            logger.info(msg + " for all media types");
        } else if (directionBefore !== this.getSdpDirection(pSdp, type)) {
            //Ignore changing the direction if the "directionBefore" and existing directions do not match
            return pSdp;
        } else {
            logger.info(msg + " type= " + type);
        }

        descriptions = pSdp.split(/^(?=m=)/m);
        for (index = 0; index < descriptions.length; index++) {
            substr = descriptions[index];
            if (type === undefined || type === null || substr.indexOf(CONSTANTS.SDP.M_LINE + type) !== -1) {
                substr = substr.replace(CONSTANTS.SDP.A_LINE + directionBefore, CONSTANTS.SDP.A_LINE + directionAfter);
            }
            sdp = sdp + substr;
        }

        return sdp;
    };

    this.updateSdpDirection = function(pSdp, type, direction) {
        logger.info("updateSdpDirection: type= " + type + " direction= " + direction);
        var beforeDirection = this.getSdpDirection(pSdp, type);
        return this.changeDirection(pSdp, beforeDirection, direction, type);
    };

    this.updateAudioSdpDirection = function(pSdp, direction) {
        logger.info("updateSdpDirection: type= " + CONSTANTS.STRING.AUDIO + " direction= " + direction);
        var beforeDirection = this.getSdpDirection(pSdp, CONSTANTS.STRING.AUDIO);
        return this.changeDirection(pSdp, beforeDirection, direction, CONSTANTS.STRING.AUDIO);
    };

    this.updateVideoSdpDirection = function(pSdp, direction) {
        logger.info("updateSdpDirection: type= " + CONSTANTS.STRING.VIDEO + " direction= " + direction);
        var beforeDirection = this.getSdpDirection(pSdp, CONSTANTS.STRING.VIDEO);
        return this.changeDirection(pSdp, beforeDirection, direction, CONSTANTS.STRING.VIDEO);
    };

    this.updateAudioSdpDirectionToInactive = function(pSdp) {
        return this.updateAudioSdpDirection(pSdp, CONSTANTS.WEBRTC.MEDIA_STATE.INACTIVE);
    };

    this.updateVideoSdpDirectionToInactive = function(pSdp) {
        return this.updateVideoSdpDirection(pSdp, CONSTANTS.WEBRTC.MEDIA_STATE.INACTIVE);
    };

    this.isSdpHasDirection = function(pSdp) {
        var sr_indx, so_indx, ro_indx, in_indx;
        sr_indx = pSdp.indexOf(CONSTANTS.SDP.A_LINE + CONSTANTS.WEBRTC.MEDIA_STATE.SEND_RECEIVE, 0);
        so_indx = pSdp.indexOf(CONSTANTS.SDP.A_LINE + CONSTANTS.WEBRTC.MEDIA_STATE.SEND_ONLY, 0);
        ro_indx = pSdp.indexOf(CONSTANTS.SDP.A_LINE + CONSTANTS.WEBRTC.MEDIA_STATE.RECEIVE_ONLY, 0);
        in_indx = pSdp.indexOf(CONSTANTS.SDP.A_LINE + CONSTANTS.WEBRTC.MEDIA_STATE.INACTIVE, 0);
        return (sr_indx + 1) + (so_indx + 1) + (ro_indx + 1) + (in_indx + 1) === 0 ? false : true;
    };

    this.isSdpEnabled = function(pSdp, type) {
        var direction, msg = "isSdpEnabled for type " + type + ": ", result = false;

        if (this.isSdpHasMediaWithExpectedPort(pSdp, type, 0)) {
            // return if media port is 0
            logger.info(msg + result);
            return result;
        }
        if (type === CONSTANTS.STRING.VIDEO) {
            direction = this.getVideoSdpDirection(pSdp);
            if (direction === CONSTANTS.WEBRTC.MEDIA_STATE.RECEIVE_ONLY || direction === CONSTANTS.WEBRTC.MEDIA_STATE.INACTIVE) {
                logger.info(msg + result);
                return result;
            }
        }
        if (this.isSdpHas(pSdp, type)) {
            result = true;
        }
        logger.info(msg + result);
        return result;
    };

    this.isAudioSdpEnabled = function(pSdp) {
        return this.isSdpEnabled(pSdp, CONSTANTS.STRING.AUDIO);
    };

    this.isVideoSdpEnabled = function(pSdp) {
        return this.isSdpEnabled(pSdp, CONSTANTS.STRING.VIDEO);
    };

    this.isSdpVideoReceiveEnabled = function(pSdp) {
        var direction, msg = "isSdpVideoReceiveEnabled: ", result = false;

        if (pSdp.indexOf(CONSTANTS.SDP.M_LINE + CONSTANTS.STRING.VIDEO + " 0") !== -1) {
            logger.info(msg + result);
            return result;
        }

        direction = this.getVideoSdpDirection(pSdp);
        if (direction === CONSTANTS.WEBRTC.MEDIA_STATE.SEND_ONLY || direction === CONSTANTS.WEBRTC.MEDIA_STATE.INACTIVE) {
            logger.info(msg + result);
            return result;
        }

        if (pSdp.indexOf(CONSTANTS.SDP.M_LINE + CONSTANTS.STRING.VIDEO) !== -1) {
            result = true;
            logger.info(msg + result);
            return result;
        }

        logger.info(msg + result);
        return result;
    };

    this.updateH264Level = function(pSdp) {
        var sdp = "", substr = "", descriptions = [], index, reg = /\r\n|\r|\n/m, video_arr, i, new_substr = "", elm, elm_array;

        descriptions = pSdp.split(/^(?=m=)/m);
        for (index = 0; index < descriptions.length; index++) {
            substr = descriptions[index];
            if (substr.indexOf(CONSTANTS.SDP.M_LINE + CONSTANTS.STRING.VIDEO) !== -1) {
                video_arr = substr.split(reg);
                for (i = 0; i < video_arr.length; i++) {
                    elm = video_arr[i];
                    if (elm && elm.indexOf("a=rtpmap:") !== -1 && elm.indexOf("H264") !== -1) {
                        elm_array = elm.split(/\:| /m);
                        elm = elm + CONSTANTS.STRING.CARRIAGE_RETURN + CONSTANTS.STRING.NEW_LINE;
                        elm = elm + "a=fmtp:" + elm_array[1] + " profile-level-id=428014;";
                        elm = elm + CONSTANTS.STRING.CARRIAGE_RETURN + CONSTANTS.STRING.NEW_LINE;
                        // Workaround for issue 1603.
                    } else if (elm && elm !== "") {
                        elm = elm + CONSTANTS.STRING.CARRIAGE_RETURN + CONSTANTS.STRING.NEW_LINE;
                    }
                    new_substr = new_substr + elm;
                }
                substr = new_substr;
            }
            sdp = sdp + substr;
        }
        return sdp;
    };

    this.isSdpVideoCandidateEnabled = function(pSdp) {
        var msg = "isSdpVideoCandidateEnabled: ", result = false;

        if (this.isSdpHasVideoWithZeroPort(pSdp)) {
            logger.info(msg + result);
            return result;
        } else if (this.isVideoSdpDirectionInactive(pSdp)) {
            logger.info(msg + result);
            return result;
        } else if (!this.isSdpHasVideo(pSdp)) {
            result = true;
            logger.info(msg + result);
            return true;
        }

        logger.info(msg + result);
        return result;
    };

    this.deleteFingerprintFromSdp = function(sdp, isDtlsEnabled) {
        if (isDtlsEnabled) {
            return sdp;
        }
        while (sdp.indexOf("a=fingerprint:") !== -1) {
            sdp = sdp.replace(/(a=fingerprint:[\w\W]*?(:\r|\n))/, "");
        }
        return sdp;
    };

    this.deleteCryptoFromSdp = function(sdp, isDtlsEnabled) {
        if (!isDtlsEnabled) {
            return sdp;
        }
        while (sdp.indexOf("a=crypto:") !== -1) {
            sdp = sdp.replace(/(a=crypto:[\w\W]*?(:\r|\n))/, "");
        }
        return sdp;
    };

    this.deleteCryptoZeroFromSdp = function(sdp) {
        while (sdp.indexOf("a=crypto:0") !== -1) {
            sdp = sdp.replace(/(a=crypto:0[\w\W]*?(:\r|\n))/, "");
        }
        return sdp;
    };
    
    /*
     * performVP8RTCPParameterWorkaround: this function will handle missing VP8 RTCP params mostly observed in plugin configuration
     * It will do nothing and work correctly, when plugin webrtc base is upgraded to Chrome 37
     * check for "ccm fir".   If not exists, add "a=rtcp-fb:* ccm fir",
     * check for "nack pli".  If not exists, add "a=rtcp-fb:* nack pli",
     * check for "nack".      If not exists, add "a=rtcp-fb:* nack",
     * check for "goog-remb". If not exists, add "a=rtcp-fb:* goog-remb",
     * @param {type} pSdp
     */
    this.performVP8RTCPParameterWorkaround = function(pSdp) {
        var splitArray, newSdp, tempSdp, vp8PayloadType;
        
        if(pSdp.indexOf("VP8/90000") === -1) { //TODO
            return pSdp;            
        }
        
        vp8PayloadType = this.getVP8PayloadType(pSdp); //TODO

        tempSdp = pSdp.replace("a=rtcp-fb:" + vp8PayloadType + " nack pli", 
                               "a=rtcp-fb:" + vp8PayloadType + " no_ack_pli");  //It will use to identify nack pli 
        
        tempSdp = tempSdp.replace("a=rtcp-fb:" + vp8PayloadType + " nack", 
                                  "a=rtcp-fb:" + vp8PayloadType + " none_ack");  //It will use to identify nack
        
        splitArray = pSdp.split("VP8/90000");
        
        if(splitArray.length <= 1){
            return pSdp;
        }
        
        newSdp = splitArray[0] + "VP8/90000";
        if(pSdp.indexOf("a=rtcp-fb:" + vp8PayloadType + " ccm fir") === -1) {
            logger.debug("performVP8RTCPParameterWorkaround : Adding a=rtcp-fb:" + vp8PayloadType + " ccm fir");
            newSdp = newSdp + "\r\na=rtcp-fb:" + vp8PayloadType + " ccm fir";
        }
        if(tempSdp.indexOf("a=rtcp-fb:" + vp8PayloadType + " no_ack_pli") === -1) {
            logger.debug("performVP8RTCPParameterWorkaround : Adding a=rtcp-fb:" + vp8PayloadType + " nack pli");
            newSdp = newSdp + "\r\na=rtcp-fb:" + vp8PayloadType + " nack pli";
        }
        if(tempSdp.indexOf("a=rtcp-fb:" + vp8PayloadType + " none_ack") === -1) {
            logger.debug("performVP8RTCPParameterWorkaround : Adding a=rtcp-fb:" + vp8PayloadType + " nack");
            newSdp = newSdp + "\r\na=rtcp-fb:" + vp8PayloadType + " nack";
        }
        if(pSdp.indexOf("a=rtcp-fb:" + vp8PayloadType + " goog-remb") === -1) {
            logger.debug("performVP8RTCPParameterWorkaround : Adding a=rtcp-fb:" + vp8PayloadType + " goog-remb");
            newSdp = newSdp + "\r\na=rtcp-fb:" + vp8PayloadType + " goog-remb";
        }

        pSdp = newSdp + splitArray[1];
        return pSdp;
    };
    
    /*
     * updateAudioCodec: removes codecs listed in config file from codec list. Required for DTMF until the bug is fixed.
     * @param {type} pSdp
     */
    this.updateAudioCodec = function(pSdp) {
        var sdp = "", substr = "", descriptions = [], index, reg = /\r\n|\r|\n/m, audio_arr, i, new_substr = "", elm,
                remcodec, regExpCodec, codecsToRemove = [], j, remrtpmap;

        remrtpmap = "";
        descriptions = pSdp.split(/^(?=m=)/m);
        for (index = 0; index < descriptions.length; index++) {
            substr = descriptions[index];
            if (this.isSdpHasAudio(substr)) {
                audio_arr = substr.split(reg);
                for (i = 0; i < audio_arr.length; i++) {
                    elm = audio_arr[i];
                    if (elm && this.isSdpHasAudio(elm)) {
                        // remove audio codecs given in config file from m=audio line
                        codecsToRemove = fcsConfig.codecsToRemove;
                        if (codecsToRemove !== undefined) {
                            for (j = 0; j < codecsToRemove.length; j++) {
                                remcodec = codecsToRemove[j];
                                regExpCodec = new RegExp(" " + remcodec, "g");
                                elm = elm.replace(regExpCodec, "");

                                if (j !== 0) {
                                    remrtpmap = remrtpmap + "|";
                                }
                                remrtpmap = remrtpmap + remcodec;
                            }
                        }
                        elm = elm + lf + nl;
                        // Workaround for issue 1603.
                    } else if (elm && elm.indexOf("a=fmtp") !== -1) {
                        elm = elm.replace(/a=fmtp[\w\W]*/, "");
                    } else if (elm && elm !== "") {
                        elm = elm + lf + nl;
                    }
                    new_substr = new_substr + elm;
                }
                substr = new_substr;
            }
            sdp = sdp + substr;
        }
        // remove rtpmap of removed codecs
        if (remrtpmap !== "") {
            regExpCodec = new RegExp("a=rtpmap:(?:" + remrtpmap + ").*\r\n", "g");
            sdp = sdp.replace(regExpCodec, "");
        }
        return sdp;
    };
    
    /*
     * removeAudioCodec: removes given codec type from sdp.
     * @param {type} pSdp
     * @param {type} codecToRemove
     */
    this.removeAudioCodec = function(pSdp, codecToRemove) {
        var sdp = "", substr = "", descriptions = [], index, reg = /\r\n|\r|\n/m, audio_arr, i, 
            new_substr = "", elm, elm2, regExpCodec;

        descriptions = pSdp.split(/^(?=m=)/m);
        for (index = 0; index < descriptions.length; index++) {
            substr = descriptions[index];
            if (this.isSdpHasAudio(substr)) {
                audio_arr = substr.split(reg);
                for (i = 0; i < audio_arr.length; i++) {
                    elm = audio_arr[i];
                    if (elm && this.isSdpHasAudio(elm)) {
                        // remove given audio codec from m=audio line
                        regExpCodec = new RegExp(" " + codecToRemove + "($| )", "m");
                        elm2 = audio_arr[i].split(/RTP[\w\W]*/);
                        elm = elm.replace(/(\m=audio+)\s(\w+)/, "");
                        elm = elm.trim();
                        elm = elm.replace(regExpCodec, " ");
                        elm = elm2[0] +elm + lf + nl;
                        // Workaround for issue 1603.
                    } else if (elm && elm.indexOf("a=fmtp:" + codecToRemove) !== -1) {
                        elm = elm.replace(/a=fmtp[\w\W]*/, "");
                    } else if (elm && elm.indexOf("a=rtpmap:" + codecToRemove) !== -1) {
                        elm = elm.replace(/a=rtpmap[\w\W]*/, "");
                    } else if (elm && elm.indexOf("a=rtcp-fb:" + codecToRemove) !== -1) {
                        elm = elm.replace(/a=rtcp-fb[\w\W]*/, "");
                    } else if (elm && elm !== "") {
                        elm = elm + lf + nl;
                    }
                    new_substr = new_substr + elm;
                }
                substr = new_substr;
            }
            sdp = sdp + substr;
        }
        return sdp;
    };
    
    /*
     * removeRTXCodec: this function will remove rtx video codec
     */
    this.removeRTXCodec = function(pSdp) {
        var rtxPayloadType,vp8SSRC, rtxSSRC;

        vp8SSRC = this.getVp8Ssrc(pSdp);
        logger.debug("vp8SSRC = " + vp8SSRC);

        rtxSSRC = this.getRtxSsrc(pSdp);
        logger.debug("rtxSSRC = " + rtxSSRC);

        pSdp = this.removeSsrcId(pSdp,rtxSSRC);

        pSdp = pSdp.replace(/(a=ssrc-group:FID[\w\W]*?(:\r|\n))/g, "");

        if(pSdp.indexOf("rtx/90000") === -1) {
            return pSdp;
        }

        rtxPayloadType = this.getRTXPayloadType(pSdp);
        
        logger.debug("removeRTXCodec : Removing rtx video codec " + rtxPayloadType);
        pSdp = this.removeVideoCodec(pSdp, rtxPayloadType);

        return pSdp;
    };

    this.getVp8Ssrc = function(pSdp) {
        var splitArray, ssrcGroupArray, ssrcArray, i, reg = /\r\n|\r|\n/m;

        if (pSdp.indexOf("a=ssrc-group:FID ") === -1) {
            return -1;
        }

        splitArray = pSdp.split("a=ssrc-group:FID ");
        ssrcGroupArray = splitArray[1].split(reg);
        ssrcArray = ssrcGroupArray[0].split(" ");

        for (i = 0; i < ssrcArray.length; i++) {
            logger.debug("ssrcArray[" + i + "] : " + ssrcArray[i]);
        }

        return ssrcArray[0];
    };

    this.getRtxSsrc = function(pSdp) {
        var splitArray, ssrcGroupArray, ssrcArray, i, reg = /\r\n|\r|\n/m;

        if (pSdp.indexOf("a=ssrc-group:FID ") === -1) {
            return -1;
        }

        splitArray = pSdp.split("a=ssrc-group:FID ");
        ssrcGroupArray = splitArray[1].split(reg);
        ssrcArray = ssrcGroupArray[0].split(" ");

        for (i = 0; i < ssrcArray.length; i++) {
            logger.debug("ssrcArray[" + i + "] : " + ssrcArray[i]);
        }

        return ssrcArray[1];
    };

    /*
     * removeSsrcId: removes given SSRC ID from sdp.
     */
    this.removeSsrcId = function(pSdp, ssrcId) {
        var sdp = "", reg = /\r\n|\r|\n/m, ssrc_arr, i, new_substr = "", elm;

        ssrc_arr = pSdp.split(reg);
        for (i = 0; i < ssrc_arr.length; i++) {
            elm = ssrc_arr[i];
            if (elm && elm.indexOf("a=ssrc:" + ssrcId) !== -1) {
                elm = elm.replace(/a=ssrc:[\w\W]*/, "");
            } else if (elm && elm !== "") {
                elm = elm + lf + nl;
            }
            new_substr = new_substr + elm;
        }
        sdp = new_substr;

        return sdp;
    };

    /*
     * removeG722Codec: this function will remove G722 audio codec
     * @param {type} pSdp
     */
    this.removeG722Codec = function(pSdp) {
        /* 
        *   this function is added because of chrome-v39 bug.
        *   need to be checked with chrome-v40.
        *   should be deleted if not needed.
        */
       /* var g722PayloadType;

        if ((pSdp.indexOf("G722/8000") === -1) && (pSdp.indexOf("G722/16000") === -1)) {
            return pSdp;
        }

        g722PayloadType = this.getG7228000PayloadType(pSdp);

        if (g722PayloadType !== -1) {
            logger.debug("removeG722Codec : Removing G722/8000 video codec " + g722PayloadType);
            pSdp = this.removeAudioCodec(pSdp, g722PayloadType);
        }
        g722PayloadType = this.getG72216000PayloadType(pSdp);
        if (g722PayloadType !== -1) {
            logger.debug("removeG722Codec : Removing G722/16000 video codec " + g722PayloadType);
            pSdp = this.removeAudioCodec(pSdp, g722PayloadType);
        }
        */
        return pSdp;
    };
    
    /*
     * setMediaActPass - use it to adjust offer sdp
     * @param {type} sdp
     */
    this.setMediaActPass = function(sdp, isDtlsEnabled) {
        if (!isDtlsEnabled) {
            return sdp;
        }
        logger.debug("setMediaActPass: ");
        while (sdp.indexOf("a=setup:active") !== -1) {
            logger.debug("a=setup:active to a=setup:actpass");
            sdp = sdp.replace("a=setup:active", "a=setup:actpass");
        }
        while (sdp.indexOf("a=setup:passive") !== -1) {
            logger.debug("a=setup:passive to a=setup:actpass");
            sdp = sdp.replace("a=setup:passive", "a=setup:actpass");
        }
        return sdp;
    };

    this.fixLocalTelephoneEventPayloadType = function(call, pSdp) {
        var newSdp;

        call.localTelephoneEvent8000PayloadType = this.getTelephoneEventCode(pSdp, "8000", call.localTelephoneEvent8000PayloadType);
        call.localTelephoneEvent16000PayloadType = this.getTelephoneEventCode(pSdp, "16000", call.localTelephoneEvent16000PayloadType);

        newSdp = this.fixTelephoneEventPayloadType(pSdp, "8000", call.localTelephoneEvent8000PayloadType);
        newSdp = this.fixTelephoneEventPayloadType(newSdp, "16000", call.localTelephoneEvent16000PayloadType);

        return newSdp;
    };

    this.fixRemoteTelephoneEventPayloadType = function(call, pSdp) {
        var newSdp;

        call.remoteTelephoneEvent8000PayloadType = this.getTelephoneEventCode(pSdp, "8000", call.remoteTelephoneEvent8000PayloadType);
        call.remoteTelephoneEvent16000PayloadType = this.getTelephoneEventCode(pSdp, "16000", call.remoteTelephoneEvent16000PayloadType);

        newSdp = this.fixTelephoneEventPayloadType(pSdp, "8000", call.remoteTelephoneEvent8000PayloadType);
        newSdp = this.fixTelephoneEventPayloadType(newSdp, "16000", call.remoteTelephoneEvent16000PayloadType);

        return newSdp;
    };

    this.getTelephoneEventCode = function(pSdp, rate, oldCode) {
        var telephoneEventPayloadType;
            
        if(this.isSdpHasTelephoneEvent(pSdp, rate)) {
            telephoneEventPayloadType = this.getTelephoneEventPayloadType(pSdp,rate);
            if (!oldCode) {
                return telephoneEventPayloadType;
            } else {
                return oldCode;
            }
        }
        
        return null;
    };
    
    /*
     * Replaces telephone event code in pSdp with the oldCode 
     * This is needed for WebRTC engine compatibility
     * Ex: Negotitation is firstly done with 126, but then the call server sends an offer with 96
     * @param {type} pSdp
     * @param {type} rate
     * @param {type} oldCode
     */
    this.fixTelephoneEventPayloadType = function(pSdp, rate, oldCode) {
        var telephoneEventPayloadType, newSdp;
            
        if(this.isSdpHasTelephoneEvent(pSdp, rate)) {
            telephoneEventPayloadType = this.getTelephoneEventPayloadType(pSdp,rate);
            if (!oldCode) {
                oldCode = telephoneEventPayloadType;
            } else if (oldCode !== telephoneEventPayloadType) {
                newSdp = this.replaceTelephoneEventPayloadType(pSdp, oldCode, telephoneEventPayloadType);
                return newSdp;
            }
        }
        
        return pSdp;
    };

    this.getTelephoneEventPayloadType = function(pSdp,rate) {
        return this.getPayloadTypeOf("telephone-event/" + rate,pSdp);
    };
    
    this.getPayloadTypeOf = function(codecString,pSdp) {
        var splitArray, rtpmapArray, payloadTypeArray;
        
        if(pSdp.indexOf(codecString) === -1) {
            return -1;            
        }

        splitArray = pSdp.split(codecString);
        rtpmapArray = splitArray[0].split("a=rtpmap:");
        payloadTypeArray = rtpmapArray[rtpmapArray.length-1].split(" ");

        logger.debug("getPayloadTypeOf(" + codecString + ") = " + payloadTypeArray[0]);
        
        return payloadTypeArray[0];
    };
    
    /*
     * Replaces new telephone event code in pSdp with the oldCode 
     * This is needed for WebRTC engine compatibility
     * If an offer has a different telephone event code than what is already negotiated in that session, webrtc engine gives error
     * Ex: Negotitation is firstly done with 126, but then the call server sends an offer with 96
     * @param {type} pSdp
     * @param {type} oldCode
     * @param {type} newCode
     */
    this.replaceTelephoneEventPayloadType = function(pSdp, oldCode, newCode) {
        var finalsdp, regex, matches, tempAudioLine, descriptions, index, substr, partialsdp = "", number = "";        

        if (!pSdp || (pSdp.indexOf("telephone-event") === -1)) {
            return pSdp;
        }

        regex = /^\.*(a=rtpmap:)(\d*)( telephone-event[ \w+ ]*[ \/+ ]*[ \w+ ]*)\r\n?/m;
        
        /* example: matches= ["a=rtpmap:96 telephone-event/8000\r\n", "a=rtpmap:", "96", " telephone-event/8000"] */
        
        if (oldCode === newCode) { // telephone event has not changed
            // nothing has changed, return without any changes
            return pSdp;
        }
        
        // telephone event has changed
        finalsdp = pSdp;
        
        // replace rtpmap
        regex = new RegExp("^\\.*a=rtpmap:" + newCode + " telephone-event[ \\/+ ]*([ \\w+ ]*)\\r\n", "m");
        matches = finalsdp.match(regex);
        if (matches !== null && matches.length >= 2 && matches[1] !== "") {
            number = matches[1];
        } else {
            number = 8000;
        }
        finalsdp = finalsdp.replace(regex,'a=rtpmap:' + oldCode + ' telephone-event/' + number + '\r\n');
        
        // replace audio line
        regex = new RegExp("^\\.*(m=audio )[ \\w+ ]*[ \\/+ ]*[ \\w+ ]*( " + newCode + ")", "mg");
        matches = finalsdp.match(regex);
        
        if (matches !== null && matches.length >= 1 && matches[0] !== "") {
            tempAudioLine = matches[0];
            tempAudioLine = tempAudioLine.replace(newCode, oldCode);
            finalsdp = finalsdp.replace(regex, tempAudioLine);
        }
           
        // replace fmtp
        // only audio section needs to be considered, do not change video section
        descriptions = finalsdp.split(/^(?=m=)/m);
        for (index = 0; index < descriptions.length; index++) {
            substr = descriptions[index];
            if (this.isSdpHasAudio(substr)) {
                regex = new RegExp("^\\.*a=fmtp:" + newCode, "mg");
                substr = substr.replace(regex, 'a=fmtp:' + oldCode);
            }
            partialsdp = partialsdp + substr;
        }
        if (partialsdp !== "") {
            finalsdp = partialsdp;  
        }
        logger.debug("replaceTelephoneEventPayloadType: newcode " + newCode + " is replaced with oldcode " + oldCode);
        return finalsdp;    
    };

    /*
     * Replaces opus codec in pSdp with the default codec number 109
     * (TODO: get the codec from config.json)
     * This is needed for trancoder enabled peer-to-peer scenarios
     * transcoder only accepts opus codec that it offers
     * @param {type} pSdp
     */
    this.replaceOpusCodec = function (pSdp) {
        var regex, matches, tempAudioLine, oldCodecNumber = "",
            defaultCodecNumber = 109, descriptions, index, substr, partialsdp = "";

        if (!pSdp || (pSdp.indexOf("opus") === -1)) {
            return pSdp;
        }

        regex = /^\.*(a=rtpmap:)(\d*)( opus)/m;
        /* example: matches= ["a=rtpmap:109 opus/48000/2\r\n", "a=rtpmap:", "111", " opus/48000/2"] */

        matches = pSdp.match(regex);
        if (matches !== null && matches.length >= 3 && matches[2] !== "") {
            oldCodecNumber = matches[2];
        }
        else {
            logger.warn("sdp has opus without codec number");
        }
        // replace rtpmap
        pSdp = pSdp.replace(regex, 'a=rtpmap:' + defaultCodecNumber + ' opus');

        // replace audio line
        regex = new RegExp("^\\.*(m=audio )[ \\w+ ]*[ \\/+ ]*[ \\w+ ]*( " + oldCodecNumber + ")", "mg");
        matches = pSdp.match(regex);

        if (matches !== null && matches.length >= 1 && matches[0] !== "") {
            tempAudioLine = matches[0];
            tempAudioLine = tempAudioLine.replace(oldCodecNumber, defaultCodecNumber);
            pSdp = pSdp.replace(regex, tempAudioLine);
        }

        // replace fmtp
        // only audio section needs to be considered, do not change video section
        descriptions = pSdp.split(/^(?=m=)/m);
        for (index = 0; index < descriptions.length; index++) {
            substr = descriptions[index];
            if (this.isSdpHasAudio(substr)) {
                regex = new RegExp("^\\.*a=fmtp:" + oldCodecNumber, "mg");
                substr = substr.replace(regex, 'a=fmtp:' + defaultCodecNumber);
            }
            partialsdp = partialsdp + substr;
        }
        if (partialsdp !== "") {
            pSdp = partialsdp;
        }
        logger.debug("replaceOpusCodec: new codec= " + defaultCodecNumber);
        return pSdp;
    };

    this.getG7228000PayloadType = function(pSdp) {
        return this.getPayloadTypeOf("G722/8000",pSdp);
    };
    
    this.getVP8PayloadType = function(pSdp) {
        return this.getPayloadTypeOf("VP8/90000",pSdp);
    };
    
    this.getG72216000PayloadType = function(pSdp) {
        return this.getPayloadTypeOf("G722/16000",pSdp);
    };

    this.getRTXPayloadType = function(pSdp) {
        return this.getPayloadTypeOf("rtx/90000", pSdp);
    };

    this.isSdpHasTelephoneEvent = function(pSdp, rate){
        return pSdp.indexOf("telephone-event/" + rate) !== -1;
    };
    
    this.isSdpHasVP8Codec = function(pSdp){
        return pSdp.indexOf("VP8/90000") !== -1;
    };
    
    this.performG722ParameterWorkaround = function(pSdp) {
       /* var g722PayloadType;
        
        if(pSdp.indexOf("G722/8000") === -1) {
            return pSdp;            
        }
        
        g722PayloadType = this.getG7228000PayloadType(pSdp);
        
        pSdp = pSdp.replace("a=rtpmap:" + g722PayloadType + " G722/8000", 
                            "a=rtpmap:" + g722PayloadType + " G722/16000"); 
        */
        return pSdp;
    };
    
    /*
     * checkSupportedVideoCodecs 
     * 
     * checks video codec support status and remove video m-line if no supported video codec is available
     * @param {type} pSdp
     * @param {type} localOfferSdp
     */
    this.checkSupportedVideoCodecs = function(pSdp, localOfferSdp) {
        var newSdp;
        if (this.isVideoCodecsSupported(pSdp)) {
            return pSdp;
        } else {
            if (localOfferSdp) {
                newSdp = this.removeAllVideoCodecs(pSdp);
                newSdp = this.addVP8Codec(newSdp, localOfferSdp);
                newSdp = this.updateSdpVideoPort(newSdp, false);
                newSdp = this.performVideoPortZeroWorkaround(newSdp);
            } else {
                //******************************************************
                //Changing video port to 0 when there is no supported  
                //video codecs is not working in webrtc library
                //******************************************************
                if (!this.isSdpHasVP8Codec(pSdp)) {
                    if (pSdp.indexOf(CONSTANTS.SDP.M_LINE + CONSTANTS.STRING.VIDEO + " 0 ", 0) !== -1) {
                        newSdp = this.addVP8Codec(pSdp, newSdp);
                    } else {
                        //this is required for PCC and meetme with video
                        newSdp = this.updateSdpVideoPort(pSdp, false);
                        newSdp = this.addVP8Codec(newSdp, newSdp);
                    }
                } else {
                    newSdp = this.removeVideoDescription(pSdp);      //this is required for PCC and meetme with video
                }
            }

            return newSdp;
        }
    };
    
    /*
     * isVideoCodecsSupported: this function checks supported video codecs are listed in m=video line
     * Supported video codecs are :
     *      VP8     default supported codec
     *      H264    if plugin_mode is webrtch264 or legacyh264
     *      @param {type} pSdp
     */
    this.isVideoCodecsSupported = function(pSdp) {
        
        if(this.isSdpHasVP8Codec(pSdp)) {
            return true;            
        }

        return false;
    };

    this.removeAllVideoCodecs = function(pSdp) {
        var regex, matches, codecs, newSdp, index;
        
        regex = new RegExp("^\\.*(m=video )(\\d*)( RTP/SAVPF )([ \\w+ ]*[ \\/+ ]*[ \\w+ ])\\r\n", "m");

        newSdp = pSdp;
        matches = newSdp.match(regex);
        
        if (matches !== null && matches.length >= 5 && matches[0] !== "") {
            codecs = matches[4].split(" ");
            for (index = 0; index < codecs.length; index++) {
                logger.debug("codec[" + index + "] : " + codecs[index]);
                newSdp = this.removeVideoCodec(newSdp, codecs[index]);
            }
        }
        
        return newSdp;
    };
    
    /*
     * removeVideoCodec: removes given codec type from sdp.
     * @param {type} pSdp
     * @param {type} codecToRemove
     */
    this.removeVideoCodec = function(pSdp, codecToRemove) {
        var sdp = "", substr = "", descriptions = [], index, reg = /\r\n|\r|\n/m, video_arr, i, 
            new_substr = "", elm, regExpCodec;

        descriptions = pSdp.split(/^(?=m=)/m);
        for (index = 0; index < descriptions.length; index++) {
            substr = descriptions[index];
            if (this.isSdpHasVideo(substr)) {
                video_arr = substr.split(reg);
                for (i = 0; i < video_arr.length; i++) {
                    elm = video_arr[i];
                    if (elm && this.isSdpHasVideo(elm)) {
                        // remove given video codec from m=video line
                        regExpCodec = new RegExp(" " + codecToRemove, "g");
                        elm = elm.replace(regExpCodec, "");
                        elm = elm + lf + nl;
                        // Workaround for issue 1603.
                    } else if (elm && elm.indexOf("a=fmtp:" + codecToRemove) !== -1) {
                        elm = elm.replace(/a=fmtp[\w\W]*/, "");
                    } else if (elm && elm.indexOf("a=rtpmap:" + codecToRemove) !== -1) {
                        elm = elm.replace(/a=rtpmap[\w\W]*/, "");
                    } else if (elm && elm.indexOf("a=rtcp-fb:" + codecToRemove) !== -1) {
                        elm = elm.replace(/a=rtcp-fb[\w\W]*/, "");
                    } else if (elm && elm !== "") {
                        elm = elm + lf + nl;
                    }
                    new_substr = new_substr + elm;
                }
                substr = new_substr;
            }
            sdp = sdp + substr;
        }
        return sdp;
    };
    
    /*
     * addVP8Codec: adds missing VP8 Codec 
     * @param {type} pSdp
     * @param {type} offerSdp
     */
    this.addVP8Codec = function(pSdp, offerSdp) {
        var sdp = "", substr="",descriptions=[],index, 
            reg = /\r\n|\r|\n/m, video_arr, i, new_substr = "", 
            vp8PayloadType, codecType, elm,
            videoUFRAGParam, videoPWDParam, ice_ufrag, ice_pwd;

        if(this.isSdpHasVP8Codec(pSdp)) {
            return pSdp;            
        }
        
        descriptions= pSdp.split(/^(?=m=)/m);
        for(index=0;index<descriptions.length;index++){
            substr = descriptions[index];
            if(this.isSdpHasVideo(substr)){
                if (offerSdp && 
                    this.isSdpHasVideo(offerSdp) &&
                    this.isSdpHasVP8Codec(offerSdp)) {
                        vp8PayloadType = this.getVP8PayloadType(offerSdp);
                        if (substr.indexOf("a=rtpmap:" + vp8PayloadType) !== -1) {
                            this.removeSdpLineContainingText(substr,"a=rtpmap:" + vp8PayloadType);
                        }
                } else {
                    codecType = 100;
                    while (substr.indexOf("a=rtpmap:" + codecType) !== -1) {
                        codecType = codecType + 1;
                    }
                    vp8PayloadType = codecType;
                }
                video_arr = substr.split(reg);
                for(i=0;i<video_arr.length;i++){
                    elm = video_arr[i];
                    if (elm && this.isSdpHasVideo(elm)) {
                        if (elm.indexOf(vp8PayloadType) === -1) {
                            elm = elm + " " + vp8PayloadType;
                        }
                        elm = elm  + lf + nl + "a=rtpmap:" + vp8PayloadType + " VP8/90000" + lf + nl;
                    } else if (elm && elm !== "") {
                        elm = elm + lf + nl;
                    }
                    new_substr = new_substr + elm;
                }
                substr = new_substr;
            }
            sdp = sdp + substr;
        }

        videoUFRAGParam = this.checkICEParams(sdp, "video", CONSTANTS.SDP.ICE_UFRAG);
	if(videoUFRAGParam < 2){
            ice_ufrag = this.getICEParams(sdp, CONSTANTS.SDP.ICE_UFRAG, false);
            if (ice_ufrag) {
                sdp = this.restoreICEParams(sdp, "video", CONSTANTS.SDP.ICE_UFRAG, ice_ufrag);
            }
	}
	videoPWDParam = this.checkICEParams(sdp, "video", CONSTANTS.SDP.ICE_PWD);
	if(videoPWDParam < 2){
            ice_pwd = this.getICEParams(sdp, CONSTANTS.SDP.ICE_PWD, false);
            if (ice_pwd) {
                sdp = this.restoreICEParams(sdp, "video", CONSTANTS.SDP.ICE_PWD, ice_pwd);
            }
	} 

        return this.performVP8RTCPParameterWorkaround(sdp);
    };

    this.removeSdpLineContainingText = function(pSdp, containing_text) {
        var i,
            splitArray = pSdp.split(nl);

        pSdp = splitArray[0] + nl;
        for (i = 1; i < splitArray.length - 1; i++) {
            if (splitArray[i].indexOf(containing_text) !== -1) {
                logger.debug("removed line which contains " + containing_text);
            }
            else {
                pSdp += splitArray[i] + nl;
            }
        }
        return pSdp;
    };
    
    this.removeVideoDescription = function(pSdp) {
        var sdp = "", substr="", descriptions=[], index;

        descriptions= pSdp.split(/^(?=m=)/m);
        for(index=0;index<descriptions.length;index++){
            substr = descriptions[index];
            if(!this.isSdpHasVideo(substr)){
                sdp = sdp + substr;
            } else {
                logger.debug("removeVideoDescription : m=video description removed");
            }
        }
        return sdp;
    };
    
    /*
     * updateSdpVideoPort
     * @param {type} pSdp
     * @param {type} status
     */
    this.updateSdpVideoPort = function(pSdp, status) {
        var r_sdp, port_text;

        logger.debug("updateSdpVideoPort: status= " + status);
        
        r_sdp = pSdp;

        if (status) {
            port_text = CONSTANTS.SDP.M_LINE + CONSTANTS.STRING.VIDEO + " 1";
        }
        else {
            port_text = CONSTANTS.SDP.M_LINE + CONSTANTS.STRING.VIDEO + " 0";
            r_sdp = this.updateSdpDirection(r_sdp, CONSTANTS.STRING.VIDEO, CONSTANTS.WEBRTC.MEDIA_STATE.INACTIVE);
        }
        
        if (this.isSdpHasVideo(r_sdp)) {
            r_sdp = r_sdp.replace(/m=video [0-9]+/, port_text);
        }

        return r_sdp;
    };

    /*
     * performVideoPortZeroWorkaround - apply this when term side sends an answer with video port 0
     * @param {type} pSdp
     */
    this.performVideoPortZeroWorkaround = function(pSdp) {

        if (!this.isSdpHasVideoWithZeroPort(pSdp)) {
            return pSdp;
        }
        pSdp = this.addSdpMissingCryptoLine (pSdp);
        pSdp = this.replaceZeroVideoPortWithOne(pSdp);

        //chrome38 fix
        pSdp = this.updateVideoSdpDirectionToInactive(pSdp);

        return pSdp;
    };
    
    // Issue      : Meetme conference failed due to a webrtc bug
    //              When video is sent in SDP with 0 without a=crypto line(SDES) in SDP,
    //              hold scenario for meetme failed.
    // Workaround : Add dummy a=crypto or a=fingerprint line to solve the issue with a workaround
    // Note       : fingerprint(DTLS enabled) may still fails on meetme. This is known issue as below:
    //              https://code.google.com/p/webrtc/issues/detail?id=2316
    //              Check with Chrome 37
    this.addSdpMissingCryptoLine = function(sdp) {
        var mediaSplit, audioLines, cryptLine = null, reg = /\r\n|\r|\n/m, i;

        // If there is no "m=video 0" line, sdp should not be modified
        if (sdp.indexOf(CONSTANTS.SDP.M_LINE + CONSTANTS.STRING.VIDEO + " 0 ", 0) === -1) {
            return sdp;
        }
        
        mediaSplit = sdp.split(CONSTANTS.SDP.M_LINE + CONSTANTS.STRING.VIDEO);

        audioLines = mediaSplit[0].split(reg);
        for (i = 0; i < audioLines.length; i++) {
            if ((audioLines[i].indexOf(CONSTANTS.SDP.A_LINE + CONSTANTS.SDP.CRYPTO) !== -1) || (audioLines[i].indexOf(CONSTANTS.SDP.A_LINE + CONSTANTS.SDP.FINGERPRINT) !== -1)) {
                cryptLine = audioLines[i];
                break;
            }
        }

        if (cryptLine === null) {
            return sdp;
        }

        if (mediaSplit[0].indexOf(CONSTANTS.SDP.A_LINE + CONSTANTS.SDP.CRYPTO) !== -1) {
            if (mediaSplit[1].indexOf(CONSTANTS.SDP.A_LINE + CONSTANTS.SDP.CRYPTO, 0) === -1) {
                mediaSplit[1] += cryptLine + "\n";
                logger.debug("addSdpMissingCryptoLine : crypto line is added : " + cryptLine);
            }
        } else if (mediaSplit[0].indexOf(CONSTANTS.SDP.A_LINE + CONSTANTS.SDP.FINGERPRINT, 0) !== -1) {
            if (mediaSplit[1].indexOf(CONSTANTS.SDP.A_LINE + CONSTANTS.SDP.FINGERPRINT, 0) === -1) {
                //DTLS is enabled, even adding fingerprint line in SDP,
                //meetme scenario fails. This is known issue and followed
                //by webrtc for DTLS enabled scenarios :
                //https://code.google.com/p/webrtc/issues/detail?id=2316
                mediaSplit[1] += cryptLine + "\na=setup:passive\n";
                logger.debug("addSdpMissingCryptoLine : dtls lines are added : " + cryptLine + "and a=setup:passive");
                logger.debug("dtls enabled: known issue by webrtc may be fixed! Check it");
            }
        }
        sdp = mediaSplit.join(CONSTANTS.SDP.M_LINE + CONSTANTS.STRING.VIDEO);
        return sdp;
    };
    
    this.checkICEParams = function(pSdp, mediaType, type) {
	var parse1, parse2;
 
	parse1 = pSdp.split('m=video');
	if(parse1.length < 2){
		return 0;
	}

        switch (type) {
            case CONSTANTS.SDP.ICE_UFRAG:
                if(mediaType === "audio"){
			parse2 = parse1[0].split('a=ice-ufrag:');
		}else{
			parse2 = parse1[1].split('a=ice-ufrag:');
		}
                break; 
            case CONSTANTS.SDP.ICE_PWD:            
		if(mediaType === "audio"){
			parse2 = parse1[0].split('a=ice-pwd:');
		}else{
			parse2 = parse1[1].split('a=ice-pwd:');
		}
                break;			 
            default:
                return 0;
	}	
	
        return parse2.length;   
    };
    
    this.getICEParams = function(pSdp, type, isVideo) {
        var parse1, parse2, parse3, param;
 
        switch (type) {
            case CONSTANTS.SDP.ICE_UFRAG:
                parse1 = pSdp.split('a=ice-ufrag:');
                break; 
            case CONSTANTS.SDP.ICE_PWD:
                parse1 = pSdp.split('a=ice-pwd:');
                break;   
            default:
                return undefined;
        }

        if(isVideo){
            if(parse1[2] !== undefined) { /*"....a=ice-....a=ice-...."*/
                parse2 = parse1[2];
                parse3 = parse2.split('a=');
                param = parse3[0];
                return param; /*return video ice params*/    
            } else {
                return undefined;
            }   
        } else {
            if(parse1[1] !== undefined) { /*"....a=ice-....a=ice-...."*/
                parse2 = parse1[1];
                parse3 = parse2.split('a=');
                param = parse3[0];
                return param;     
            } else {
                return undefined;
            }              
        }
    };
    
    this.restoreICEParams = function(pSdp, mediaType, type, new_value) {
        var sdp = "", substr, index, parse1;
 
        parse1 = pSdp.split('m=video');
	if(parse1.length < 2){
            return pSdp;
	}
                
        for (index = 0; index < parse1.length; index++) 
        {
            substr = parse1[index];
            if(index === 0) 
            {                                                
                if(mediaType === "audio"){
			substr = substr + 'a=' + type + new_value;
		}
		sdp = sdp + substr;
            } 
            if(index === 1) 
            {                                                
                if(mediaType === "video"){
			substr = substr + 'a=' + type + new_value;
		}
		sdp = sdp + 'm=video' + substr;
            }			
        }		
        return sdp;
    };

    this.updateICEParams = function (pSdp, type, new_value) {
        var sdp = "", subsdp = "", substr, index, num,
                parse1, parse2, parse3, param=null;
 
        switch(type)
        {
            case CONSTANTS.SDP.ICE_UFRAG:
                parse1 = pSdp.split('a=ice-ufrag:');
                break; 
            case CONSTANTS.SDP.ICE_PWD:
                parse1 = pSdp.split('a=ice-pwd:');
                break;   
            default: 
                return pSdp;
        }
                
        for (index = 0; index < parse1.length; index++) 
        {
            substr = parse1[index];
            if (index === 2) 
            {               
                parse2 = substr.split('a=');
                
                for (num = 0; num < parse2.length; num++) 
                {
                    parse3 = parse2[num];
                    if(num===0)
                    {    
                        parse2[num]= new_value;
                        subsdp = subsdp + parse2[num];
                    }else
                    {    
                        subsdp = subsdp + 'a=' + parse2[num];
                    }
                }               
                substr = subsdp;
                sdp = sdp + substr;
            }else
            {    
                sdp = sdp + substr + 'a=' + type;
            }
        }              
        return sdp;
    };

    this.checkIceParamsLengths = function(newSdp, oldSdp) {
        var ice_ufrag, ice_pwd;
        ice_ufrag = this.getICEParams(newSdp, CONSTANTS.SDP.ICE_UFRAG, true);
        ice_pwd = this.getICEParams(newSdp, CONSTANTS.SDP.ICE_PWD, true);

        if (ice_ufrag && ice_ufrag.length < 4) { /*RFC 5245 the ice-ufrag attribute can be 4 to 256 bytes long*/
            ice_ufrag = this.getICEParams(oldSdp, CONSTANTS.SDP.ICE_UFRAG, true);
            if (ice_ufrag) {
                newSdp = this.updateICEParams(newSdp, CONSTANTS.SDP.ICE_UFRAG, ice_ufrag);
            }
        }

        if (ice_pwd && ice_pwd.length < 22) { /*RFC 5245 the ice-pwd attribute can be 22 to 256 bytes long*/
            ice_pwd = this.getICEParams(oldSdp, CONSTANTS.SDP.ICE_PWD, true);
            if (ice_pwd < 22) {
                newSdp = this.updateICEParams(newSdp, CONSTANTS.SDP.ICE_PWD, ice_pwd);
            }
        }
        return newSdp;
    };
    
    /*
     * isSdpVideoSendEnabled
     * @param {type} pSdp
     */
    this.isSdpVideoSendEnabled = function(pSdp) {
        var direction, 
            msg = "isSdpVideoSendEnabled: ", 
            result = false;

        if (!this.isSdpEnabled(pSdp, CONSTANTS.STRING.VIDEO)) {
            logger.debug(msg + result);
            return result;
        }

        direction = this.getSdpDirectionLogging(pSdp, CONSTANTS.STRING.VIDEO, false);
        if (direction === CONSTANTS.WEBRTC.MEDIA_STATE.SEND_RECEIVE ||
            direction === CONSTANTS.WEBRTC.MEDIA_STATE.SEND_ONLY) {
            result = true;
            logger.debug(msg + result);
            return result;
        }

        logger.debug(msg + result);
        return result;
    };
    
    this.getSdpDirectionLogging = function(pSdp, type, logging) {
        var substr = "", descriptions = [], index,
            direction = CONSTANTS.WEBRTC.MEDIA_STATE.INACTIVE, logmsg;

        logmsg = function(state) {
            if (logging) {
                logger.debug("getSdpDirection: type= " + type + " state= " + state);
            }
        };

        if (pSdp.indexOf(CONSTANTS.SDP.M_LINE + type) === -1) {
            logmsg(direction);
            return direction;
        }

        if (pSdp.indexOf(CONSTANTS.SDP.M_LINE + type + " 0") !== -1) {
            logmsg(direction);
            return direction;
        }

        descriptions = pSdp.split(/^(?=m=)/m);
        for (index = 0; index < descriptions.length; index++) {
            substr = descriptions[index];
            if (substr.indexOf(CONSTANTS.SDP.M_LINE + type) !== -1) {
                if (substr.indexOf(CONSTANTS.SDP.A_LINE + CONSTANTS.WEBRTC.MEDIA_STATE.SEND_RECEIVE) !== -1) {
                    direction = CONSTANTS.WEBRTC.MEDIA_STATE.SEND_RECEIVE;
                    logmsg(direction);
                    return direction;
                } else if (substr.indexOf(CONSTANTS.SDP.A_LINE + CONSTANTS.WEBRTC.MEDIA_STATE.SEND_ONLY) !== -1) {
                    direction = CONSTANTS.WEBRTC.MEDIA_STATE.SEND_ONLY;
                    logmsg(direction);
                    return direction;
                } else if (substr.indexOf(CONSTANTS.SDP.A_LINE + CONSTANTS.WEBRTC.MEDIA_STATE.RECEIVE_ONLY) !== -1) {
                    direction = CONSTANTS.WEBRTC.MEDIA_STATE.RECEIVE_ONLY;
                    logmsg(direction);
                    return direction;
                } else if (substr.indexOf(CONSTANTS.SDP.A_LINE + CONSTANTS.WEBRTC.MEDIA_STATE.INACTIVE) !== -1) {
                    logmsg(direction);
                    return direction;
                }
                direction = CONSTANTS.WEBRTC.MEDIA_STATE.SEND_RECEIVE;
                return direction;
            }
        }
        direction = CONSTANTS.WEBRTC.MEDIA_STATE.NOT_FOUND;
        logmsg(direction);
        return direction;
    };
    
    /*
     * remove only video ssrc from the sdp
     * this is a workaround to hear audio in a peer-to-peer call
     * @param {type} pSdp
     */
    this.deleteInactiveVideoSsrc = function(pSdp) {
        var videoSdp = [];

        if (this.isSdpHas(pSdp, CONSTANTS.STRING.VIDEO)) {
            videoSdp = pSdp.split(CONSTANTS.SDP.M_LINE + CONSTANTS.STRING.VIDEO);
            if (videoSdp[1] !== null) {
                videoSdp[1] = this.deleteSsrcFromSdp(videoSdp[1]);
            }
        } else {
            return pSdp;
        }
        return videoSdp[0] + CONSTANTS.SDP.M_LINE + CONSTANTS.STRING.VIDEO + videoSdp[1];
    };
    
    /*
     * deleteSsrcFromSdp - delete ssrc from the sdp, use it when there is video continuity issue
     * @param {type} sdp
     */
    this.deleteSsrcFromSdp = function(sdp) {
        while (sdp.indexOf("a=ssrc") !== -1) {
            sdp = sdp.replace(/(a=ssrc[\w\W]*?(:\r|\n))/, "");
        }
        return sdp;
    };
    
    /*
     * setMediaPassive - use it to adjust answer sdp
     * @param {type} sdp
     */
    this.setMediaPassive = function(sdp, isDtlsEnabled) {
        if (!isDtlsEnabled) {
            return sdp;
        }
        logger.debug("setMediaPassive: ");
        while (sdp.indexOf("a=setup:actpass") !== -1) {
            logger.debug("a=setup:actpass to a=setup:passive");
            sdp = sdp.replace("a=setup:actpass", "a=setup:passive");
        }
        return sdp;
    };

    /*
     * This is a transcoder bug that only happens on native webrtc.
     * We can remove it once it's fixed.
     * This function will remove one of the lines if there are two
     * concecutive same lines that contains "nack pli"
     * TODO tolga remove once this issue is fixed
     */
    this.removeSdpPli = function(pSdp) {
        var i, splitArray = pSdp.split(nl);

        pSdp = splitArray[0] + nl;
        for (i = 1; i < splitArray.length - 1; i++) {
            if (splitArray[i - 1] === splitArray[i] && splitArray[i].indexOf(CONSTANTS.SDP.NACKPLI) !== -1) {
                logger.debug("removed extra nack pli line");
            }
            else {
                pSdp += splitArray[i] + nl;
            }
        }
        return pSdp;
    };

    /*
     * performVP8BandwidthWorkaround: this function will remove following lines which causes
     * webrtc failed to process error on Chrome Beta with PCC call. will be soon observed on Chrome stable.
     * check for "b=AS:0".        If exists, remove,
     */
    this.performVP8BandwidthWorkaround = function(pSdp) {
        if (!this.isSdpHasVP8Codec(pSdp)) {
            return pSdp;
        }

        if (pSdp.indexOf("b=AS:0") !== -1) {
            logger.debug("performVP8BandwidthWorkaround : Removing b=AS:0");
            pSdp = this.removeSdpLineContainingText(pSdp, "b=AS:0");
        }

        return pSdp;
    };
    
    /*
     * 
     * @param {type} pSdp
     * @param {type} oSdp
     * @returns pSdp
     */
    this.checkAndRestoreICEParams = function(pSdp, oSdp) {
        var audioUFRAGParam, audioPWDParam, videoUFRAGParam, videoPWDParam, ice_ufrag, ice_pwd;

        audioUFRAGParam = this.checkICEParams(pSdp, CONSTANTS.STRING.AUDIO, CONSTANTS.SDP.ICE_UFRAG);
        if (audioUFRAGParam < 2) {
            ice_ufrag = this.getICEParams(oSdp, CONSTANTS.SDP.ICE_UFRAG, false);
            if (ice_ufrag) {
                pSdp = this.restoreICEParams(pSdp, CONSTANTS.STRING.AUDIO, CONSTANTS.SDP.ICE_UFRAG, ice_ufrag);
            }
        }
        audioPWDParam = this.checkICEParams(pSdp, CONSTANTS.STRING.AUDIO, CONSTANTS.SDP.ICE_PWD);
        if (audioPWDParam < 2) {
            ice_pwd = this.getICEParams(oSdp, CONSTANTS.SDP.ICE_PWD, false);
            if (ice_pwd) {
                pSdp = this.restoreICEParams(pSdp, CONSTANTS.STRING.AUDIO, CONSTANTS.SDP.ICE_PWD, ice_pwd);
            }
        }
        videoUFRAGParam = this.checkICEParams(pSdp, CONSTANTS.STRING.VIDEO, CONSTANTS.SDP.ICE_UFRAG);
        if (videoUFRAGParam < 2) {
            ice_ufrag = this.getICEParams(oSdp, CONSTANTS.SDP.ICE_UFRAG, false);
            if (ice_ufrag) {
                pSdp = this.restoreICEParams(pSdp, CONSTANTS.STRING.VIDEO, CONSTANTS.SDP.ICE_UFRAG, ice_ufrag);
            }
        }
        videoPWDParam = this.checkICEParams(pSdp, CONSTANTS.STRING.VIDEO, CONSTANTS.SDP.ICE_PWD);
        if (videoPWDParam < 2) {
            ice_pwd = this.getICEParams(oSdp, CONSTANTS.SDP.ICE_PWD, false);
            if (ice_pwd) {
                pSdp = this.restoreICEParams(pSdp, CONSTANTS.STRING.VIDEO, CONSTANTS.SDP.ICE_PWD, ice_pwd);
            }
        }
        return pSdp;
    };
    
    this.incrementVersion = function(psdp) {
        var oline=[], newoline ="", index, version, regExpCodec, arr=[];
        logger.debug(" incrementVersion");

        // o=- 937770930552268055 2 IN IP4 127.0.0.1
        oline = psdp.match('o=(?:.+?[\\s.,;]+){2}([^\\s.,;]+)'); // get the 3rd

        version = oline[1];
        version = +version; // convert to int
        version = version + 1;

        arr = oline[0].split(" ");
        arr[arr.length - 1] = version; // set new version to last element
        for (index = 0; index < arr.length; index++) {
            if (index !== 0) {
                newoline = newoline + " ";
            }
            newoline = newoline + arr[index];
        }

        regExpCodec = new RegExp(oline[0], "g");
        psdp = psdp.replace(regExpCodec, newoline);

        return psdp;
    };
    
    /*
     * escalateSdpDirection for type:audio or video
     * @param {type} pSdp
     * @param {type} type
     */
    this.escalateSdpDirection = function(pSdp, type) {
        var direction = this.getSdpDirectionLogging(pSdp, type, false);
        logger.debug("escalateSdpDirection: type= " + type + " direction= " + direction);
        if (direction === CONSTANTS.WEBRTC.MEDIA_STATE.RECEIVE_ONLY) {
            return this.changeDirection(pSdp, direction, CONSTANTS.WEBRTC.MEDIA_STATE.SEND_RECEIVE, type);
        } else if (direction === CONSTANTS.WEBRTC.MEDIA_STATE.INACTIVE) {
            return this.changeDirection(pSdp, direction, CONSTANTS.WEBRTC.MEDIA_STATE.SEND_ONLY, type);
        }
        return pSdp;
    };
    
    /*
     * deescalateSdpDirection for type:audio or video
     * @param {type} pSdp
     * @param {type} type
     */
    this.deescalateSdpDirection = function(pSdp, type) {
        var direction = this.getSdpDirectionLogging(pSdp, type, false);
        logger.debug("deescalateSdpDirection: type= " + type + " direction= " + direction);
        if (direction === CONSTANTS.WEBRTC.MEDIA_STATE.SEND_RECEIVE) {
            return this.changeDirection(pSdp, direction, CONSTANTS.WEBRTC.MEDIA_STATE.RECEIVE_ONLY, type);
        } else if (direction === CONSTANTS.WEBRTC.MEDIA_STATE.SEND_ONLY) {
            return this.changeDirection(pSdp, direction, CONSTANTS.WEBRTC.MEDIA_STATE.INACTIVE, type);
        }
        return pSdp;
    };

    this.isIceLite = function(pSdp) {
        if (pSdp && pSdp.indexOf("a=ice-lite") !== -1) {
            return true;
        }
        return false;
    };

    /*
     * Updates the version in tosdp with the one retrieved from fromsdp with incrementing
     *
     */
    this.updateVersion = function(fromsdp, tosdp) {
        var fromOline = [], toOline = [], newoline = "", index, version, regExpCodec, arr = [];

        logger.debug(" updateVersion called...");

        // o=- 937770930552268055 2 IN IP4 127.0.0.1
        fromOline = fromsdp.match('o=(?:.+?[\\s.,;]+){2}([^\\s.,;]+)'); // get the 3rd
        toOline = tosdp.match('o=(?:.+?[\\s.,;]+){2}([^\\s.,;]+)'); // get the 3rd

        if (fromOline) {
            version = fromOline[1];
        } else {
            logger.warn("updateVersion called with wrong fromSdp!!");
            return tosdp;
        }

        version = +version; // convert to int
        version = version + 1;

        logger.debug(" updateVersion fromVersion incremented: " + version);

        arr = toOline[0].split(" ");
        arr[arr.length - 1] = version; // set new version to last element
        for (index = 0; index < arr.length; index++) {
            if (index !== 0) {
                newoline = newoline + " ";
            }
            newoline = newoline + arr[index];
        }

        regExpCodec = new RegExp(toOline[0], "g");
        tosdp = tosdp.replace(regExpCodec, newoline);

        return tosdp;
    };

    // TODO: Method below assumes to receive only one video m-line, need to correct this logic.
    this.copyCandidatesToTheNewLocalSdp = function(oldSdp, newSdp) {
        var oldSplitSdp = [], newSplitSdp = [], oldVideoSdp, newVideoSdp,
                oldAudioSdp, newAudioSdp;

        oldSplitSdp = oldSdp.split(CONSTANTS.SDP.M_LINE + CONSTANTS.STRING.VIDEO);
        newSplitSdp = newSdp.split(CONSTANTS.SDP.M_LINE + CONSTANTS.STRING.VIDEO);

        oldAudioSdp = oldSplitSdp[0];
        oldVideoSdp = oldSplitSdp[1] !== undefined ? CONSTANTS.SDP.M_LINE + CONSTANTS.STRING.VIDEO + oldSplitSdp[1] : undefined;
        newAudioSdp = newSplitSdp[0];
        newVideoSdp = newSplitSdp[1] !== undefined ? CONSTANTS.SDP.M_LINE + CONSTANTS.STRING.VIDEO + newSplitSdp[1] : undefined;

        newAudioSdp = this.copyCandidates(oldAudioSdp, newAudioSdp);

        if (oldVideoSdp !== undefined && newVideoSdp !== undefined) {
            newVideoSdp = this.copyCandidates(oldVideoSdp, newVideoSdp);
        }

        if (newVideoSdp !== undefined) {
            return newAudioSdp + newVideoSdp;
        }
        else {
            return newAudioSdp;
        }
    };

    this.copyCandidates = function(oldSdp, newSdp) {
        var mediaLines, reg = /\r\n|\r|\n/m, i, port;

        mediaLines = oldSdp.split(reg);

        for (i = 0; i < mediaLines.length; i++) {
            if (mediaLines[i].indexOf("a=candidate") !== -1 && newSdp.indexOf(("a=candidate") === -1)) {
                newSdp += mediaLines[i] + "\r\n";
            } else if (mediaLines[i].indexOf("c=IN") !== -1 && newSdp.indexOf(("c=IN IP4 0.0.0.0") !== -1)) {
                newSdp = newSdp.replace(/(c=[\w\W]*?(:\r|\n))/, mediaLines[i] + "\r\n");
            } else if ((mediaLines[i].indexOf("m=audio") !== -1) &&
                       (newSdp.indexOf(CONSTANTS.SDP.M_LINE + CONSTANTS.STRING.AUDIO + " 1 ") !== -1 ||
                        newSdp.indexOf(CONSTANTS.SDP.M_LINE + CONSTANTS.STRING.AUDIO + " 9 ") !== -1)) {
                port = mediaLines[i].split(" ")[1];

                newSdp = newSdp.replace(/m=audio \d/, CONSTANTS.SDP.M_LINE + CONSTANTS.STRING.AUDIO + " " + port);
            } else if ((mediaLines[i].indexOf("m=video") !== -1) &&
                       (newSdp.indexOf(CONSTANTS.SDP.M_LINE + CONSTANTS.STRING.VIDEO + " 1 ") !== -1 ||
                        newSdp.indexOf(CONSTANTS.SDP.M_LINE + CONSTANTS.STRING.VIDEO + " 9 ") !== -1)) {
                port = mediaLines[i].split(" ")[1];

                newSdp = newSdp.replace(/m=video \d/, CONSTANTS.SDP.M_LINE + CONSTANTS.STRING.VIDEO + " " + port);
            }
        }
        return newSdp;
    };
    
    /*
     * getSdpFromObject
     * There is a webrtc bug in Plugin. 
     * sendrecv direction changed to recvonly for offer type sdps
     * This function is the workaround solution to get the correct sdp from the object
     * until webrtc bug in plugin is fixed.
     */
    this.getSdpFromObject = function(oSdp) {
        var sdp;
        sdp = oSdp.sdp;
        
        sdp = this.updateAudioSdpDirection(sdp, oSdp.audioDirection);
        sdp = this.updateVideoSdpDirection(sdp, oSdp.videoDirection);
        
        return sdp;
    };
    
    /*
     * deleteGoogleIceFromSdp - delete google-ice option from the sdp
     */
    this.deleteGoogleIceFromSdp = function(sdp) {
        sdp = sdp.replace(/(a=ice-options:google-ice[\w\W]*?(:\r|\n))/g, "");
        return sdp;
    };

    this.respondToRemoteSdpDirections = function(localSdp, remoteSdp) {
        localSdp = this.respondToRemoteMediaSdpDirection(localSdp, remoteSdp, CONSTANTS.STRING.AUDIO);
        localSdp = this.respondToRemoteMediaSdpDirection(localSdp, remoteSdp, CONSTANTS.STRING.VIDEO);

        return localSdp;
    };

    this.respondToRemoteMediaSdpDirection = function(localSdp, remoteSdp, type) {
        var remoteDirection;

        if (this.isSdpHas(remoteSdp, type)) {
            remoteDirection = this.getSdpDirection(remoteSdp, type);

            if (remoteDirection === CONSTANTS.WEBRTC.MEDIA_STATE.SEND_ONLY) {
                logger.debug(type + " sendonly -> recvonly");
                localSdp = this.updateSdpDirection(localSdp, type, CONSTANTS.WEBRTC.MEDIA_STATE.RECEIVE_ONLY);
            }
            else if (remoteDirection === CONSTANTS.WEBRTC.MEDIA_STATE.RECEIVE_ONLY) {
                logger.debug(type + " recvonly -> sendonly");
                localSdp = this.updateSdpDirection(localSdp, type, CONSTANTS.WEBRTC.MEDIA_STATE.SEND_ONLY);
            }
            else if (remoteDirection === CONSTANTS.WEBRTC.MEDIA_STATE.SEND_RECEIVE) {
                logger.debug(type + " sendrecv -> sendrecv");
                localSdp = this.updateSdpDirection(localSdp, type, CONSTANTS.WEBRTC.MEDIA_STATE.SEND_RECEIVE);
            }
            else if (remoteDirection === CONSTANTS.WEBRTC.MEDIA_STATE.INACTIVE) {
                logger.debug(type + " inactive -> inactive");
                localSdp = this.updateSdpDirection(localSdp, type, CONSTANTS.WEBRTC.MEDIA_STATE.INACTIVE);
            }
        }
        return localSdp;
    };

    this.isMediaPortReady = function(pSdp) {
        if (!this.isSdpHasAudioWithOnePort(pSdp) &&
            !this.isSdpHasAudioWithNinePort(pSdp)) {
            if (this.isSdpHasVideo(pSdp)) {
                if (!this.isSdpHasVideoWithOnePort(pSdp) &&
                    !this.isSdpHasVideoWithNinePort(pSdp)) {
                    return true;
                }
            }
            else {
                return true;
            }
        }
        return false;
    };

    // spidr sends both fingerprint and crypto at incoming call to the term side
    // delete the unnecessary one before setting remote description
    this.deleteFingerprintOrCrypto = function(sdp, isDtlsEnabled) {
        if (!sdp) {
            return sdp;
        }
        if (sdp.indexOf("a=crypto:") === -1 || sdp.indexOf("a=fingerprint:") === -1) {
            return sdp;
        }
        sdp = this.deleteCryptoFromSdp(sdp, isDtlsEnabled);
        sdp = this.deleteFingerprintFromSdp(sdp, isDtlsEnabled);

        return sdp;
    };
};

var sdpParser = new SDPParser();

if (__testonly__) { __testonly__.SDPParser = SDPParser; }
var ConnectivityService = function() {

    var CONNECTION_URL = "/rest/version/latest/isAlive";

    this.checkConnectivity = function(onSuccess, onFailure) {
        server.sendGetRequest({
                    url: getUrl() + CONNECTION_URL + "?" + utils.getTimestamp()
                }, onSuccess,
                onFailure);
    };

};
var connectivityService = new ConnectivityService();

var ConnectivityManager = function() {
    var logger = logManager.getLogger("connectivityManager"),
            PRIORITY = 1,
            DEFAULT_INTERVAL_VALUE = 10000,
            isConnected = true, connectivityTimer,
            connectivityHandler = null;

    function stopCheckConnectivityTimer() {
        logger.info("check connectivity timer is stopped.");
        clearInterval(connectivityTimer);
    }

    function onCheckConnectivitySuccess() {
        if (!isConnected) {
            isConnected = true;
            setConnected(isConnected);
            logger.trace("Connectivity re-established...");
            globalBroadcaster.publish(CONSTANTS.EVENT.CONNECTION_REESTABLISHED);
        }
    }

    function onCheckConnectivityFailure() {
        if (isConnected) {
            isConnected = false;
            setConnected(isConnected);
            logger.trace("Connectivity is lost...");
            globalBroadcaster.publish(CONSTANTS.EVENT.CONNECTION_LOST);
        }
    }

    function checkConnectivity() {
        try {
            connectivityHandler();
        }
        catch (e) {
            logger.trace("Exception occured while executing connecitivy handler: ", e);
        }
        connectivityService.checkConnectivity(onCheckConnectivitySuccess, onCheckConnectivityFailure);
    }


    function initConnectivityCheck(message) {
        var intervalValue = DEFAULT_INTERVAL_VALUE,
                handler = message.connectivity ? message.connectivity.handler : null,
                interval = message.connectivity ? message.connectivity.interval : null;
        if (handler && typeof handler === 'function') {
            connectivityHandler = handler;
        }

        if (interval) {
            intervalValue = interval;
        }

        stopCheckConnectivityTimer();
        connectivityTimer = setInterval(checkConnectivity, intervalValue);
    }

    globalBroadcaster.subscribe(CONSTANTS.EVENT.DEVICE_SUBSCRIPTION_STARTED, initConnectivityCheck, PRIORITY);
    globalBroadcaster.subscribe(CONSTANTS.EVENT.DEVICE_SUBSCRIPTION_ENDED, stopCheckConnectivityTimer, PRIORITY);
    globalBroadcaster.subscribe(CONSTANTS.EVENT.XHR_REQUEST_NOT_INITIALIZED, onCheckConnectivityFailure, PRIORITY);

};
var connectivityManager = new ConnectivityManager();

var WebRtcAdaptorModel = function() {
    var self = this, dtlsEnabled = false, iceServerUrl = "",
            containers = {video: "",
                localVideo: "",
                remoteVideo: "",
                defaultVideo: ""},
            mediaConstraints = {
                audio: false,
                video: false
            },
            mediaSources = {
                video: {
                    available: false,
                    width: "320",
                    height: "240"
                },
                audio: {
                    available: false
                }
            },
            initialized = false,
            rtcLibrary = {},
            language,
            localStream,
            logLevel = 4,
            peerCount = 0,
            pluginEnabled = false,
            h264Enabled = false;
    
    self.getH264Enabled = function (){
        return h264Enabled;
    };
    
    self.setH264Enabled = function (enabled){
        h264Enabled = enabled;
    };

    self.getIceServerUrl = function() {
        return iceServerUrl;
    };

    self.setIceServerUrl = function(url) {
        iceServerUrl = url;
    };

    self.isDtlsEnabled = function() {
        return dtlsEnabled;
    };

    self.setDtlsEnabled = function(enabled) {
        dtlsEnabled = enabled;
    };

    self.getVideoContainer = function() {
        return containers.video;
    };

    self.setVideoContainer = function(container) {
        containers.video = container;
    };

    self.getLocalVideoContainer = function() {
        return containers.localVideo;
    };

    self.setLocalVideoContainer = function(container) {
        containers.localVideo = container;
    };

    self.getRemoteVideoContainer = function() {
        return containers.remoteVideo;
    };

    self.setRemoteVideoContainer = function(container) {
        containers.remoteVideo = container;
    };

    self.getDefaultVideoContainer = function() {
        return containers.defaultVideo;
    };

    self.setDefaultVideoContainer = function(container) {
        containers.defaultVideo = container;
    };

    self.isInitialized = function() {
        return initialized;
    };

    self.setInitialized = function(value) {
        initialized = value === true ? true : false;
    };

    self.getRtcLibrary = function() {
        return rtcLibrary;
    };

    self.setRtcLibrary = function(library) {
        rtcLibrary = library;
    };

    self.getLocalStream = function() {
        return localStream;
    };

    self.setLocalStream = function(stream) {
        localStream = stream;
    };

    self.getLogLevel = function() {
        return logLevel;
    };

    self.setLogLevel = function(level) {
        logLevel = level;
    };

    self.getLanguage = function() {
        return language;
    };

    self.setLanguage = function(lang) {
        language = lang;
    };

    self.getMediaAudio = function() {
        return mediaConstraints.audio;
    };

    self.setMediaAudio = function(_audio) {
        mediaConstraints.audio = _audio;
    };

    self.getMediaVideo = function() {
        return mediaConstraints.video;
    };

    self.setMediaVideo = function(_video) {
        mediaConstraints.video = _video;
    };

    self.getVideoWidth = function() {
        return mediaSources.video.width;
    };

    self.setVideoWidth = function(_videoWidth) {
        mediaSources.video.width = _videoWidth;
    };

    self.getVideoHeight = function() {
        return mediaSources.video.height;
    };

    self.setVideoHeight = function(_videoHeight) {
        mediaSources.video.height = _videoHeight;
    };

    self.getVideoSourceAvailable = function() {
        return mediaSources.video.available;
    };

    self.setVideoSourceAvailable = function(_videoSourceAvailable) {
        mediaSources.video.available = _videoSourceAvailable;
    };

    self.getAudioSourceAvailable = function() {
        return mediaSources.audio.available;
    };

    self.setAudioSourceAvailable = function(_audioSourceAvailable) {
        mediaSources.audio.available = _audioSourceAvailable;
    };

    self.getPeerCount = function() {
        return peerCount;
    };

    self.setPeerCount = function(_peerCount) {
        peerCount = _peerCount;
    };

    self.isPluginEnabled = function() {
        return pluginEnabled;
    };

    self.setPluginEnabled = function(_isPluginEnabled) {
        pluginEnabled = _isPluginEnabled;
    };
};
if (__testonly__) { __testonly__.WebRtcAdaptorModel = WebRtcAdaptorModel; }
var WebRtcChromeAdaptorModel = function() {
    var self = this;
};
WebRtcChromeAdaptorModel.prototype = new WebRtcAdaptorModel();
if (__testonly__) { __testonly__.WebRtcChromeAdaptorModel = WebRtcChromeAdaptorModel; }
var WebRtcFirefoxAdaptorModel = function() {
    var self = this;
};
WebRtcFirefoxAdaptorModel.prototype = new WebRtcAdaptorModel();
if (__testonly__) { __testonly__.WebRtcFirefoxAdaptorModel = WebRtcFirefoxAdaptorModel; }
var WebRtcPluginAdaptorModel = function() {
    var self = this,
        //this variable will be always set by a plugin adaptor.
        pluginVersion={
            major:               0,
            minor:               0,

            min_revision:        0,
            min_build:           0,

            current_revision:    0,
            current_build:       0
        };
    
    self.getPluginVersion = function() {
        return pluginVersion;
    };

    self.setPluginVersion = function(version) {
        pluginVersion = version;
    };
};
WebRtcPluginAdaptorModel.prototype = new WebRtcAdaptorModel();
if (__testonly__) { __testonly__.WebRtcPluginAdaptorModel = WebRtcPluginAdaptorModel; }
var webRtcLibraryDecoratorImpl = function(target, _super) {
    var libraryObjWrapper = {};
    
    libraryObjWrapper.getUserMedia = target.getUserMedia;
    libraryObjWrapper.showSettingsWindow = target.showSettingsWindow;
    libraryObjWrapper.getURLFromStream = target.getURLFromStream;
    libraryObjWrapper.createRTCSessionDescription = function(type, sdp) {
        return target.createSessionDescription(type, sdp);
    };

    libraryObjWrapper.createRTCIceCandidate = function(candidate, type, number) {
        return target.createIceCandidate(candidate, type, number);
    };

    libraryObjWrapper.createRTCPeerConnection = function(stunturn, constraints) {
        return target.createPeerConnection(stunturn, constraints);
    };

    libraryObjWrapper.setLang = function(lang) {
        target.language = lang || "en";
    };

    libraryObjWrapper.checkMediaSourceAvailability = function(callback) {
        utils.callFunctionIfExist(callback, {videoSourceAvailable: (target.getVideoDeviceNames().length > 0) ? true : false,
            audioSourceAvailable: (target.getAudioOutDeviceNames().length > 0) ? true : false});
    };

    libraryObjWrapper.get_audioInDeviceCount = function() {
        return target.getAudioInDeviceNames().length;
    };

    libraryObjWrapper.get_audioOutDeviceCount = function() {
        return target.getAudioOutDeviceNames().length;
    };

    libraryObjWrapper.get_videoDeviceCount = function() {
        return target.getVideoDeviceNames().length;
    };

    libraryObjWrapper.set_logSeverityLevel = function(level) {
        target.logSeverityLevel = level;
        return true;
    };

    libraryObjWrapper.get_logSeverityLevel = function() {
        return target.logSeverityLevel;
    };

    libraryObjWrapper.setType = function(applicationType) {
        target.type = applicationType;
    };

    libraryObjWrapper.getType = function() {
        return target.type;
    };

    libraryObjWrapper.getVersion = function() {
        return target.version;
    };

    libraryObjWrapper.getCurrentPluginVersionObject = function() {
        var splittedPluginVersion = target.version.split("."),
                currentPluginVersion;

        currentPluginVersion = {
            major: parseInt(splittedPluginVersion[0], 10),
            minor: parseInt(splittedPluginVersion[1], 10),
            revision: parseInt(splittedPluginVersion[2], 10),
            build: parseInt(splittedPluginVersion[3], 10)
        };
        return currentPluginVersion;
    };
    
    return libraryObjWrapper;
};

var webRtcLibraryDecorator = function(target, _super) {
    return webRtcLibraryDecoratorImpl(target || {}, _super);
};

if (__testonly__) { __testonly__.webRtcLibraryDecorator = webRtcLibraryDecorator; }



var webRtcLibraryFirefoxDecoratorImpl = function(target, _super, _window, _navigator) {
    _super(target);

    target.getUserMedia = function(constraints, successCallback, failureCallback) {
        _navigator.mozGetUserMedia(constraints, successCallback, failureCallback);
    };

    target.showSettingsWindow = function() {
        return;
    };

    target.createRTCSessionDescription = function(type, sdp) {
        return new _window.mozRTCSessionDescription({"type": type, "sdp": sdp});
    };

    target.createRTCIceCandidate = function(candidate) {
        return  new _window.mozRTCIceCandidate(candidate);
    };

    target.getURLFromStream = function(stream) {
        return _window.URL.createObjectURL(stream);
    };

    target.createRTCPeerConnection = function(stunturn, constraints) {
        return new _window.mozRTCPeerConnection(stunturn, constraints);
    };

    target.checkMediaSourceAvailability = function(callback) {
        // Since _window.MediaStreamTrack.getSources or an equal method is not defined in Firefox Native,
        // sources set as true by default. This should be changed if method or workaround about getting sources provided.
        var videoSourceAvailable = true, audioSourceAvailable = true;
        utils.callFunctionIfExist(callback, {videoSourceAvailable: videoSourceAvailable, 
            audioSourceAvailable: audioSourceAvailable});
    };

    target.get_audioInDeviceCount = function() {
        return 1;   // Use right method for Firefox Native
    };

    target.get_audioOutDeviceCount = function() {
        return 1;   // Use right method for Firefox Native
    };

    target.get_videoDeviceCount = function() {
        return 1;   // Use right method for Firefox Native
    };

    target.set_logSeverityLevel = function() {
        return false; // Not Applicable for Firefox Native
    };

    target.get_logSeverityLevel = function() {
        return; // Not Applicable for Firefox Native
    };
};

var webRtcLibraryFirefoxDecorator = function(target, _super, _window, _navigator) {
    webRtcLibraryFirefoxDecoratorImpl(target || {},
            _super || webRtcLibraryDecorator,
            _window || window,
            _navigator || navigator);
};

if (__testonly__) { __testonly__.webRtcLibraryFirefoxDecorator = webRtcLibraryFirefoxDecorator; }
var webRtcLibraryChromeDecoratorImpl = function(target, _super, _window, _navigator) {
    _super(target);

    target.getUserMedia = function(constraints, successCallback, failureCallback) {
        _navigator.webkitGetUserMedia(constraints, successCallback, failureCallback);
    };

    target.showSettingsWindow = function() {
        return;
    };

    target.createRTCSessionDescription = function(type, sdp) {
        return new _window.RTCSessionDescription({"type": type, "sdp": sdp});
    };

    target.createRTCIceCandidate = function(candidate) {
        return  new _window.RTCIceCandidate(candidate);
    };

    target.getURLFromStream = function(stream){
        return _window.URL.createObjectURL(stream);
    };

    target.createRTCPeerConnection = function(stunturn, constraints) {
        return new _window.webkitRTCPeerConnection(stunturn, constraints);
    };

    target.checkMediaSourceAvailability = function(callback) {
        var i, listOfNativeMediaStream, videoSourceAvailable, audioSourceAvailable;
        listOfNativeMediaStream = _window.MediaStreamTrack;
        if (typeof listOfNativeMediaStream !== 'undefined') {
            listOfNativeMediaStream.getSources(function(mediaSources) {
                for (i = 0; i < mediaSources.length; i++) {
                    if (mediaSources[i].kind === "video") {
                        // Video source is available such as webcam
                        videoSourceAvailable = true;
                    } else if (mediaSources[i].kind === "audio") {
                        // audio source is available such as mic
                        audioSourceAvailable = true;
                    }
                }
                utils.callFunctionIfExist(callback, {videoSourceAvailable: videoSourceAvailable,
                    audioSourceAvailable: audioSourceAvailable});
            });
        }
    };

    target.get_audioInDeviceCount = function() {
        return 1;   // Use right method for Chrome Native
    };

    target.get_audioOutDeviceCount = function() {
        return 1;   // Use right method for Chrome Native
    };

    target.get_videoDeviceCount = function() {
        return 1;   // Use right method for Chrome Native
    };

    target.set_logSeverityLevel = function() {
        return false; // Not Applicable for Chrome Native
    };

    target.get_logSeverityLevel = function() {
        return; // Not Applicable for Chrome Native
    };
};

var webRtcLibraryChromeDecorator = function(target, _super, _window, _navigator) {
    webRtcLibraryChromeDecoratorImpl(target || {},
            _super || webRtcLibraryDecorator,
            _window || window,
            _navigator || navigator);
};

if (__testonly__) { __testonly__.webRtcLibraryChromeDecorator = webRtcLibraryChromeDecorator; }
var WebRtcAdaptorImpl = function(_super, _decorator, _model, _logManager) {
    var self = this, logger = _logManager.getLogger("WebRtcAdaptorImpl");

    logger.debug('WebRtcAdaptor initializing');

    utils.compose(_model, self);

    /*
     * performNativeReconnectWorkaround - workaround to be used when IP interface changed
     */
    self.performReconnectWorkaround = function(call, onSuccess, onFailure) {
        var peer = call.peer, localSdp, localDescObj, localAudioDirection, localVideoDirection;

        logger.debug("performReconnectWorkaround:" + call.id);

        localSdp = sdpParser.deleteGoogleIceFromSdp(peer.localDescription.sdp);
        localAudioDirection = sdpParser.getAudioSdpDirection(localSdp);
        localVideoDirection = sdpParser.getVideoSdpDirection(localSdp);

        if (self.createNewPeerForCall(call))
        {
            peer = call.peer;
        }

        peer.createOffer(
                function prwCreateOfferSuccessCallback(oSdp) {
                    oSdp.sdp = sdpParser.updateAudioSdpDirection(oSdp.sdp, localAudioDirection);
                    oSdp.sdp = sdpParser.updateVideoSdpDirection(oSdp.sdp, localVideoDirection);

                    oSdp.sdp = sdpParser.deleteCryptoZeroFromSdp(oSdp.sdp);
                    oSdp.sdp = sdpParser.performVP8RTCPParameterWorkaround(oSdp.sdp);
                    oSdp.sdp = sdpParser.updateAudioCodec(oSdp.sdp);
                    oSdp.sdp = sdpParser.removeG722Codec(oSdp.sdp);
                    oSdp.sdp = sdpParser.deleteCryptoFromSdp(oSdp.sdp, self.isDtlsEnabled());
                    oSdp.sdp = sdpParser.setMediaActPass(oSdp.sdp, self.isDtlsEnabled());
                    oSdp.sdp = sdpParser.fixLocalTelephoneEventPayloadType(call, oSdp.sdp);
                    oSdp.sdp = sdpParser.replaceOpusCodec(oSdp.sdp);
                    oSdp.sdp = sdpParser.updateVersion(localSdp, oSdp.sdp);

                    localDescObj = self.getRtcLibrary().createRTCSessionDescription(CONSTANTS.WEBRTC.RTC_SDP_TYPE.OFFER, oSdp.sdp);
                    peer.setLocalDescription(
                            localDescObj,
                            function prwSetLocalDescriptionSuccessCallback() {
                                logger.debug("performReconnectWorkaround: setLocalDescription success" + call.id);
                            },
                            function prwSetLocalDescriptionFailureCallback(e) {
                                logger.debug("performReconnectWorkaround: setLocalDescription failed!!" + e + call.id);
                                utils.callFunctionIfExist(onFailure);
                            });
                },
                function prwCreateOfferFailureCallback(e) {
                    logger.error("performReconnectWorkaround: createOffer failed!! " + e);
                    utils.callFunctionIfExist(onFailure);
                },
                {
                    'mandatory': {
                        'OfferToReceiveAudio': self.getMediaAudio(),
                        'OfferToReceiveVideo': self.getMediaVideo()
                    }
                });
    };

    // Native implementation lies on webRtcAdaptor.js
    self.getLocalAudioTrack = function(peer) {
        logger.debug("getLocalAudioTrack");
        var audioTracks;

        /*
         * ABE-832: On MAC OS, Safari browser version 6.1 doesn't recognize array 
         * indices of integer type. Therefore, all [0] calls are changed to ["0"].
         * All other browser types function correctly with both integer and string
         * indices.
         */

        if(peer.localStreams && peer.localStreams["0"].audioTracks) {
            if (peer.localStreams["0"].audioTracks.length > 0) {
                return peer.localStreams["0"].audioTracks["0"];
            }
        }
        else if (peer.getLocalStreams) {
            audioTracks = peer.getLocalStreams()["0"].getAudioTracks();
            if(audioTracks && audioTracks.length > 0) {
                return audioTracks["0"];
            }
        }

        return null;
    };

    // Native implementation lies on webRtcAdaptor.js
    self.getLocalVideoTrack = function(peer) {
        logger.debug("getLocalVideoTrack");
        var streams;

        /*
         * ABE-832: On MAC OS, Safari browser version 6.1 doesn't recognize array 
         * indices of integer type. Therefore, all [0] calls are changed to ["0"].
         * All other browser types function correctly with both integer and string
         * indices.
         */

        if(peer.localStreams && peer.localStreams["0"].videoTracks) {
            if (peer.localStreams["0"].videoTracks.length > 0) {
                return peer.localStreams["0"].videoTracks["0"];
            }
        }
        else if (peer.getLocalStreams) {
            streams = peer.getLocalStreams();
            if(streams && streams["0"].getVideoTracks() && streams["0"].getVideoTracks().length > 0) {
                return streams["0"].getVideoTracks()["0"];
            }
        }

        return null;
    };

    /*
     * Native implementation lies on webRtcAdaptor.js
     * Mutes audio and video tracks (to be used during Hold)
     *
     * @ignore
     * @name rtc.mute
     * @function
     * @param {Object} call internalCall
     * @param {boolean} mute true to mute, false to unmute
     */
    self.muteOnHold = function(call, mute) {
        var localAudioTrack, localVideoTrack;

        logger.info("Mute on Hold called, mute=" + mute);
        if (!self.isInitialized()) {
            logger.warn("Plugin is not installed");
            return;
        }

        if (!call.peer) {
            return;
        }

        localAudioTrack = self.getLocalAudioTrack(call.peer);
        if (localAudioTrack) {
            localAudioTrack.enabled = !mute;
            call.audioMuted = mute;
        }

        localVideoTrack = self.getLocalVideoTrack(call.peer);
        if (localVideoTrack) {
            localVideoTrack.enabled = !mute;
            call.videoMuted = mute;
        }
    };

    /*
     * Native implementation lies on webRtcAdaptor.js
     * performNativeOrigAudioWorkaround - orig side can't hear audio when term side didn't start with video
     */
    self.performOrigAudioWorkaround = function(call, onSuccess, onFail) {
        logger.debug("Workaround for orig side to hear audio");

        call.sdp = sdpParser.setMediaPassive(call.sdp, self.isDtlsEnabled());

        call.peer.setRemoteDescription(
                self.getRtcLibrary().createRTCSessionDescription(CONSTANTS.WEBRTC.RTC_SDP_TYPE.ANSWER, call.sdp), function() {
            logger.debug("performNativeOrigAudioWorkaround: setRemoteDescription success");
            utils.callFunctionIfExist(onSuccess);
        }, function(e) {
            logger.debug("performNativeOrigAudioWorkaround: setRemoteDescription failed: " + e);
            utils.callFunctionIfExist(onFail);
        });
    };

    /*
     * Native implementation lies on webRtcAdaptor.js
     * restoreActualSdp - local and remote sdp's were manipulated to play audio. restore them here.
     */
    self.restoreActualSdp = function(call, onSuccess, onFail, localVideoDirection, remoteVideoDirection) {
        logger.debug("Restore manipulated local and remote sdp's");
        var newLocalSdp = call.peer.localDescription.sdp;
        newLocalSdp = sdpParser.updateSdpDirection(newLocalSdp, CONSTANTS.STRING.VIDEO, localVideoDirection);

        newLocalSdp = sdpParser.setMediaActPass(newLocalSdp, self.isDtlsEnabled());
        call.sdp = sdpParser.setMediaPassive(call.sdp, self.isDtlsEnabled());

        newLocalSdp = sdpParser.fixLocalTelephoneEventPayloadType(call, newLocalSdp);

        // set local sdp with original direction
        call.peer.setLocalDescription(
                self.getRtcLibrary().createRTCSessionDescription(CONSTANTS.WEBRTC.RTC_SDP_TYPE.OFFER, newLocalSdp), function() {
            logger.debug("restoreNativeActualSdp: setLocalDescription success");
            // restore actual remote sdp
            call.sdp = sdpParser.changeDirection(call.sdp, CONSTANTS.WEBRTC.MEDIA_STATE.SEND_ONLY, remoteVideoDirection, CONSTANTS.STRING.VIDEO);
            call.sdp = sdpParser.changeDirection(call.sdp, CONSTANTS.WEBRTC.MEDIA_STATE.SEND_ONLY, CONSTANTS.WEBRTC.MEDIA_STATE.SEND_RECEIVE, CONSTANTS.STRING.VIDEO);

            // this is required just before setRemoteDescription
            webRtcAdaptorUtils.callSetReceiveVideo(call);

            call.peer.setRemoteDescription(
                    self.getRtcLibrary().createRTCSessionDescription(CONSTANTS.WEBRTC.RTC_SDP_TYPE.ANSWER, call.sdp), function() {
                logger.debug("restoreNativeActualSdp: setRemoteDescription success");
                utils.callFunctionIfExist(onSuccess);
            }, function(e) {
                logger.debug("restoreNativeActualSdp: setRemoteDescription failed: " + e);
                utils.callFunctionIfExist(onFail);
            });
        }, function(e) {
            logger.debug("restoreNativeActualSdp: setLocalDescription failed: " + e);
            utils.callFunctionIfExist(onFail);
        });
    };

    // Native implementation lies on webRtcAdaptor.js
    self.setMediaSources = function(mediaSourceInfo) {
        if (mediaSourceInfo) {
            self.setVideoSourceAvailable(mediaSourceInfo.videoSourceAvailable);
            self.setAudioSourceAvailable(mediaSourceInfo.audioSourceAvailable);
        }
    };
    // Native implementation lies on webRtcAdaptor.js
    // initNativeMedia
    self.initMedia = function(onSuccess, onFailure, options) {
        self.setInitialized(true);
        _decorator(self.getRtcLibrary());
        self.getRtcLibrary().checkMediaSourceAvailability(function mediaSourceCallback(mediaSourceInfo) {
            self.setMediaSources(mediaSourceInfo);
        });
        
        if(options) {
            if (options.localVideoContainer) {
                self.setLocalVideoContainer(options.localVideoContainer);
            }

            if (options.remoteVideoContainer) {
                self.setRemoteVideoContainer(options.remoteVideoContainer);
            }

            if (options.videoContainer) {
                self.setDefaultVideoContainer(options.videoContainer);
            }
        }
        
        onSuccess();
    };

    /*
     * Native implementation lies on webRtcAdaptor.js
     * Add Candidates
     * @ignore
     * @param {type} call
     */
    self.addCandidates = function(call) {
        var ma_indx, mv_indx, ma_str = "", mv_str = "", c_indx, candidate, arr, i, reg = /\r\n|\r|\n/;

        ma_indx = call.sdp.indexOf(CONSTANTS.SDP.M_LINE + CONSTANTS.STRING.AUDIO, 0);
        mv_indx = call.sdp.indexOf(CONSTANTS.SDP.M_LINE + CONSTANTS.STRING.VIDEO, 0);

        if(ma_indx !== -1 && mv_indx !== -1) {
            if(ma_indx < mv_indx) {
                ma_str = call.sdp.substring(ma_indx, mv_indx);
                mv_str = call.sdp.substring(mv_indx);
            } else {
                mv_str = call.sdp.substring(mv_indx, ma_indx);
                ma_str = call.sdp.substring(ma_indx);
            }
        } else if(ma_indx !== -1) {
            ma_str = call.sdp.substring(ma_indx);
        } else if(mv_indx !== -1) {
            mv_str = call.sdp.substring(mv_indx);
        }

        if (ma_str !== "") {
            c_indx = ma_str.indexOf("a=candidate", 0);
            if (c_indx !== -1) {
                ma_str = ma_str.substring(c_indx);
                arr = ma_str.split(reg);
                i = 0;
                while (arr[i] && arr[i].indexOf("a=candidate") !== -1) {
                    candidate = self.getRtcLibrary().createRTCIceCandidate({sdpMLineIndex: 0, candidate: arr[i]});
                    call.peer.addIceCandidate(candidate);
                    i++;
                }
            }
        }

        if (mv_str !== "") {
            c_indx = mv_str.indexOf("a=candidate", 0);
            if (c_indx !== -1) {
                mv_str = mv_str.substring(c_indx);
                arr = mv_str.split(reg);
                i = 0;
                while (arr[i] && arr[i].indexOf("a=candidate") !== -1) {
                    candidate = self.getRtcLibrary().createRTCIceCandidate({sdpMLineIndex: 1, candidate: arr[i]});
                    call.peer.addIceCandidate(candidate);
                    i++;
                }

            }
        }
    };

    /*
     * Native implementation lies on webRtcAdaptor.js
     * performNativeVideoStartWorkaround - term side cannot see orig's video
     */
    self.performVideoStartWorkaround = function(call, onSuccess, onFail) {
        var peer = call.peer, remoteAudioState, remoteVideoState, callSdpWithNoSsrc;

        logger.debug("Workaround to play video");

        call.sdp = sdpParser.addSdpMissingCryptoLine(call.sdp);

        remoteAudioState = sdpParser.getAudioSdpDirection(call.sdp);
        remoteVideoState = sdpParser.getVideoSdpDirection(call.sdp);

        call.sdp = sdpParser.updateAudioSdpDirectionToInactive(call.sdp);
        call.sdp = sdpParser.updateVideoSdpDirectionToInactive(call.sdp);

        call.sdp = sdpParser.setMediaActPass(call.sdp, self.isDtlsEnabled());

        // In Peer-Peer call, in order to remove remote stream properly,
        // ssrc lines should be deleted so that workaround below will
        // first remove the remote stream and then re-add it according to
        // actuall call sdp.
        // In Non Peer-Peer call, ther is no ssrc line in sdp so it is safe
        // to keep method below.
        callSdpWithNoSsrc = sdpParser.deleteSsrcFromSdp(call.sdp);

        peer.setRemoteDescription(
                self.getRtcLibrary().createRTCSessionDescription(CONSTANTS.WEBRTC.RTC_SDP_TYPE.OFFER, callSdpWithNoSsrc),
                function pvswFirstSetRemoteDescriptionSuccessCallback() {
                    logger.debug("performVideoStartWorkaround: first setRemoteDescription success");

                    // restore original values
                    call.sdp = sdpParser.updateAudioSdpDirection(call.sdp, remoteAudioState);
                    call.sdp = sdpParser.updateVideoSdpDirection(call.sdp, remoteVideoState);

                    peer.setRemoteDescription(
                            self.getRtcLibrary().createRTCSessionDescription(CONSTANTS.WEBRTC.RTC_SDP_TYPE.OFFER, call.sdp),
                            function pvswSecondSetRemoteDescriptionSuccessCallback() {
                                logger.debug("performVideoStartWorkaround: second setRemoteDescription success");
                                peer.createAnswer(
                                        function pvswCreateAnswerSuccessCallback(obj) {
                                            if (remoteAudioState === CONSTANTS.WEBRTC.MEDIA_STATE.INACTIVE) {
                                                obj.sdp = sdpParser.updateAudioSdpDirectionToInactive(obj.sdp);
                                            }

                                            if (remoteVideoState === CONSTANTS.WEBRTC.MEDIA_STATE.INACTIVE) {
                                                obj.sdp = sdpParser.updateVideoSdpDirectionToInactive(obj.sdp);
                                            } else if (webRtcAdaptorUtils.callCanLocalSendVideo(call)) {
                                                obj.sdp = sdpParser.updateVideoSdpDirection(obj.sdp, CONSTANTS.WEBRTC.MEDIA_STATE.SEND_RECEIVE);
                                            } else {
                                                obj.sdp = sdpParser.updateVideoSdpDirection(obj.sdp, CONSTANTS.WEBRTC.MEDIA_STATE.RECEIVE_ONLY);
                                            }

                                            obj.sdp = sdpParser.performVP8RTCPParameterWorkaround(obj.sdp);
                                            self.fireOnStreamAddedEvent(call);

                                            obj.sdp = sdpParser.checkAndRestoreICEParams(obj.sdp, call.sdp);

                                            obj.sdp = sdpParser.setMediaPassive(obj.sdp, self.isDtlsEnabled());

                                            obj.sdp = sdpParser.fixLocalTelephoneEventPayloadType(call, obj.sdp);

                                            peer.setLocalDescription(
                                                    self.getRtcLibrary().createRTCSessionDescription(CONSTANTS.WEBRTC.RTC_SDP_TYPE.ANSWER, obj.sdp),
                                                    function pvswSetLocalDescriptionSuccessCallback() {
                                                        logger.debug("performVideoStartWorkaround: setlocalDescription success");
                                                        utils.callFunctionIfExist(onSuccess);
                                                    },
                                                    function pvswSetLocalDescriptionFailureCallback(e) {
                                                        logger.debug("performVideoStartWorkaround: setlocalDescription failed!!" + e);
                                                        utils.callFunctionIfExist(onFail, "performVideoStartWorkaround: setlocalDescription failed!!");
                                                    });
                                        },
                                        function pvswCreateAnswerFailureCallback(e) {
                                            logger.debug("performVideoStartWorkaround: createAnswer failed!! " + e);
                                            utils.callFunctionIfExist(onFail, "Session cannot be created");
                                        },
                                        {
                                            'mandatory': {
                                                'OfferToReceiveAudio': self.getMediaAudio(),
                                                'OfferToReceiveVideo': self.getMediaVideo()
                                            }
                                        });
                            },
                            function pvswSecondSetRemoteDescriptionFailureCallback(e) {
                                logger.debug("performVideoStartWorkaround: second setRemoteDescription failed!!" + e);
                                utils.callFunctionIfExist(onFail, "performVideoStartWorkaround: second setRemoteDescription failed!!");
                            });
                },
                function pvswFirstSetRemoteDescriptionFailureCallback(e) {
                    logger.debug("performVideoStartWorkaround: first setRemoteDescription failed!!" + e);
                    utils.callFunctionIfExist(onFail, "performVideoStartWorkaround: first setRemoteDescription failed!!");
                });
    };

    /*
     * Native implementation lies on webRtcAdaptor.js
     */
    self.getUserMedia = function(onSuccess, onFailure) {
        self.getRtcLibrary().checkMediaSourceAvailability(function mediaSourceCallback(mediaSourceInfo) {
            var video_constraints;
            self.setMediaSources(mediaSourceInfo);
            if (self.getMediaVideo() && self.getVideoSourceAvailable()) {
                video_constraints = {
                    mandatory: {
                        //"minFrameRate": "30",
                        "maxWidth": self.getVideoWidth(),
                        "maxHeight": self.getVideoHeight(),
                        "minWidth": self.getVideoWidth(),
                        "minHeight": self.getVideoHeight()}
                };
            } else {
                video_constraints = false;
            }

            self.getRtcLibrary().getUserMedia({
                audio: self.getMediaAudio(),
                video: video_constraints
            }, function getUserMediaSuccessCallback(stream) {
                var mediaInfo;
                logger.debug("user has granted access to local media.");
                self.setLocalStream(stream);

                self.setInitialized(true);
                mediaInfo = {
                    "audio": self.getMediaAudio(),
                    "video": self.getMediaVideo()
                };
                utils.callFunctionIfExist(onSuccess, mediaInfo);
            }, function getUserMediaFailureCallback(error) {
                logger.debug("Failed to get access to local media. Error code was " + error.code);
                utils.callFunctionIfExist(onFailure, fcs.call.MediaErrors.NOT_ALLOWED);
            });
        });
    };

    // createNativeOffer, Native implementation lies on webRtcAdaptor.js
    self.createOffer = function (call, successCallback, failureCallback, sendInitialVideo) {
        logger.debug("createOffer: sendInitialVideo= " + sendInitialVideo + " state= " + call.peer.signalingState);
        var peer = call.peer;

        peer.addStream(self.getLocalStream());
        call.localStream = self.getLocalStream();

        peer.createOffer(
                function createOfferSuccessCallback(oSdp) {
                    sendInitialVideo = sendInitialVideo && self.getVideoSourceAvailable();
                    if (sendInitialVideo) {
                        oSdp.sdp = sdpParser.updateVideoSdpDirection(oSdp.sdp, CONSTANTS.WEBRTC.MEDIA_STATE.SEND_RECEIVE);
                    } else {
                        oSdp.sdp = sdpParser.updateVideoSdpDirection(oSdp.sdp, CONSTANTS.WEBRTC.MEDIA_STATE.RECEIVE_ONLY);
                    }

                    oSdp.sdp = sdpParser.deleteCryptoZeroFromSdp(oSdp.sdp);

                    oSdp.sdp = sdpParser.performVP8RTCPParameterWorkaround(oSdp.sdp);
                    oSdp.sdp = sdpParser.updateAudioCodec(oSdp.sdp);
                    oSdp.sdp = sdpParser.removeG722Codec(oSdp.sdp);

                    oSdp.sdp = sdpParser.deleteCryptoFromSdp(oSdp.sdp, self.isDtlsEnabled());
                    oSdp.sdp = sdpParser.setMediaActPass(oSdp.sdp, self.isDtlsEnabled());

                    oSdp.sdp = sdpParser.fixLocalTelephoneEventPayloadType(call, oSdp.sdp);
                    oSdp.sdp = sdpParser.replaceOpusCodec(oSdp.sdp);

                    peer.setLocalDescription(
                            self.getRtcLibrary().createRTCSessionDescription(CONSTANTS.WEBRTC.RTC_SDP_TYPE.OFFER, oSdp.sdp),
                            function createOfferSetLocalDescriptionSuccessCallback() {
                                //Due to stun requests, successCallback will be called by onNativeIceCandidate()
                                webRtcAdaptorUtils.setLocalStreamVideoSendStatus(call, sendInitialVideo);
                            }
                    , function createOfferSetLocalDescriptionFailureCallback(error) {
                        logger.error("createOffer: setLocalDescription failed : " + error);
                        utils.callFunctionIfExist(failureCallback, "createOffer: setLocalDescription failed");
                    });
                }, function createOfferFailureCallback(e) {
            logger.error("createOffer: createOffer failed!! " + e);
            utils.callFunctionIfExist(failureCallback);
        },
                {
                    'mandatory': {
                        'OfferToReceiveAudio': self.getMediaAudio(),
                        'OfferToReceiveVideo': self.getMediaVideo()
                    }
                });
    };

    /**
     *  Native implementation lies on webRtcAdaptor.js
     *  createNativeAnswer to be used when native webrtc is enabled.
     *  @param {type} call
     *  @param {type} successCallback
     *  @param {type} failureCallback
     *  @param {type} isVideoEnabled
     */
    self.createAnswer = function(call, successCallback, failureCallback, isVideoEnabled) {
        logger.debug("createAnswer: isVideoEnabled= " + isVideoEnabled + " state= " + call.peer.signalingState);
        var peer = call.peer;

        peer.addStream(self.getLocalStream());
        call.localStream = self.getLocalStream();
        call.sdp = sdpParser.removeG722Codec(call.sdp);
        call.sdp = sdpParser.performG722ParameterWorkaround(call.sdp);
        call.sdp = sdpParser.performVP8RTCPParameterWorkaround(call.sdp);
        call.sdp = sdpParser.checkSupportedVideoCodecs(call.sdp, null);
        call.sdp = sdpParser.fixRemoteTelephoneEventPayloadType(call, call.sdp);
        call.sdp = sdpParser.changeDirection(call.sdp, CONSTANTS.WEBRTC.MEDIA_STATE.INACTIVE, CONSTANTS.WEBRTC.MEDIA_STATE.SEND_RECEIVE, CONSTANTS.STRING.AUDIO);
        call.sdp = sdpParser.setMediaActPass(call.sdp, self.isDtlsEnabled());
        call.sdp = sdpParser.deleteFingerprintOrCrypto(call.sdp, self.isDtlsEnabled());

        if (!sdpParser.isSdpVideoSendEnabled(call.sdp)) {
            // delete ssrc only from video, keep audio ssrc to hear audio
            call.sdp = sdpParser.deleteInactiveVideoSsrc(call.sdp);
        }
        peer.setRemoteDescription(
                self.getRtcLibrary().createRTCSessionDescription(CONSTANTS.WEBRTC.RTC_SDP_TYPE.OFFER, call.sdp),
            function createAnswerSetRemoteDescriptionSuccessCallback(){
                    webRtcAdaptorUtils.callSetReceiveVideo(call);
                    self.addCandidates(call);
                    call.remoteVideoState = sdpParser.getSdpDirection(call.sdp, CONSTANTS.STRING.VIDEO);

                    peer.createAnswer(
                            function(oSdp) {
                                isVideoEnabled = isVideoEnabled && self.getVideoSourceAvailable() && sdpParser.isSdpHasVideo(call.sdp);
                                webRtcAdaptorUtils.setLocalStreamVideoSendStatus(call, isVideoEnabled);

                                if (isVideoEnabled) {
                                    if (sdpParser.isSdpVideoSendEnabled(call.sdp)) {
                                        oSdp.sdp = sdpParser.updateSdpDirection(oSdp.sdp, CONSTANTS.STRING.VIDEO, CONSTANTS.WEBRTC.MEDIA_STATE.SEND_RECEIVE);
                                    } else {
                                        oSdp.sdp = sdpParser.updateSdpDirection(oSdp.sdp, CONSTANTS.STRING.VIDEO, CONSTANTS.WEBRTC.MEDIA_STATE.SEND_ONLY);
                                    }
                                } else {
                                    if (sdpParser.isSdpVideoSendEnabled(call.sdp)) {
                                        oSdp.sdp = sdpParser.updateSdpDirection(oSdp.sdp, CONSTANTS.STRING.VIDEO, CONSTANTS.WEBRTC.MEDIA_STATE.RECEIVE_ONLY);
                                    } else {
                                        oSdp.sdp = sdpParser.updateSdpDirection(oSdp.sdp, CONSTANTS.STRING.VIDEO, CONSTANTS.WEBRTC.MEDIA_STATE.INACTIVE);
                                    }
                                }

                                oSdp.sdp = sdpParser.performVP8RTCPParameterWorkaround(oSdp.sdp);
                                self.muteOnHold(call, false);

                                oSdp.sdp = sdpParser.setMediaPassive(oSdp.sdp, self.isDtlsEnabled());

                                oSdp.sdp = sdpParser.fixLocalTelephoneEventPayloadType(call, oSdp.sdp);

                                peer.setLocalDescription(
                                        self.getRtcLibrary().createRTCSessionDescription(CONSTANTS.WEBRTC.RTC_SDP_TYPE.ANSWER, oSdp.sdp),
                                        function createAnswerSetLocalDescriptionSuccessCallback(){
                                            //Due to stun requests, successCallback will be called by onNativeIceCandidate()
                                            call.videoOfferSent = sdpParser.isSdpHasVideo(oSdp.sdp);
                                        },
                                        function createAnswerSetLocalDescriptionFailureCallback(e) {
                                            logger.error("createAnswer: setLocalDescription failed : " + e);
                                            utils.callFunctionIfExist(failureCallback, "createNativeAnswer setLocalDescription failed");
                                        });
                            },
                            function createAnswerFailureCallback(e){
                                logger.error("createAnswer: failed!! Error: " + e);
                                utils.callFunctionIfExist(failureCallback, "Session cannot be created");
                            },
                            {
                                'mandatory': {
                                    'OfferToReceiveAudio': self.getMediaAudio(),
                                    'OfferToReceiveVideo': self.getMediaVideo()
                                }
                            });
                },
                function createAnswerSetRemoteDescriptionFailureCallback(e){
                    logger.error("createAnswer: setremotedescription failed!! Error: " + e);
                });
    };

    /*
     * Native implementation lies on webRtcAdaptor.js
     * createNativeUpdate to be used when the video start or stop
     */
    self.createUpdate = function(call, successCallback, failureCallback, isVideoStart) {
        logger.debug("createUpdate: isVideoStart= " + isVideoStart + " state= " + call.peer.signalingState);
        var localSdp, isIceLite;

        call.stableRemoteSdp = call.peer.remoteDescription.sdp;
        call.stableLocalSdp = call.peer.localDescription.sdp;

        localSdp = call.peer.localDescription.sdp;
        isIceLite = call.isIceLite;
        localSdp = sdpParser.fixLocalTelephoneEventPayloadType(call, localSdp);
        localSdp = sdpParser.incrementVersion(localSdp);
        localSdp = sdpParser.setMediaActPass(localSdp, self.isDtlsEnabled());
        webRtcAdaptorUtils.setLocalStreamVideoSendStatus(call, isVideoStart);

        // for ice-lite scenario:
        // if there is no video m-line in the localSdp, create new offer to start the video
        // if there is video m-line and video is allocated for the first time, only replace the stream
        // for peer-to-peer scenario:
        // if video is allocated for the first time, create new offer

        if (isIceLite) {
            if (sdpParser.isSdpHasVideo(localSdp)) {
                self.createUpdateWithSetLocalDescription(call, successCallback, failureCallback, isVideoStart, localSdp);
            } else {
                self.createUpdateWithCreateOffer(call, successCallback, failureCallback, isVideoStart, localSdp, isIceLite);
            }
        } else {
            if (call.videoOfferSent) {
                self.createUpdateWithSetLocalDescription(call, successCallback, failureCallback, isVideoStart, localSdp);
            } else {
                self.createUpdateWithCreateOffer(call, successCallback, failureCallback, isVideoStart, localSdp, isIceLite);
            }
        }
    };

    /*
     * Reverts RTC engine's state
     */
    self.revertRtcState = function(call, successCallback, failureCallback) {
        var peer = call.peer, obj, localSdp = call.stableLocalSdp,
                remoteSdp = call.stableRemoteSdp,
                rtcState = peer.signalingState;
        remoteSdp = sdpParser.deleteGoogleIceFromSdp(remoteSdp);
        switch (rtcState) {
            case CONSTANTS.WEBRTC.RTC_SIGNALING_STATE.STABLE:
            case CONSTANTS.WEBRTC.RTC_SIGNALING_STATE.HAVE_LOCAL_OFFER:
                localSdp = sdpParser.setMediaActPass(localSdp, self.isDtlsEnabled());
                obj = self.getRtcLibrary().createRTCSessionDescription(CONSTANTS.WEBRTC.RTC_SDP_TYPE.OFFER, localSdp);
                peer.setLocalDescription(obj,
                        function revertRtcStateLocalDescriptionSuccessCallback() {
                            logger.debug("revertRtcState[stable|local_offer]: setLocalDescription success");
                            remoteSdp = sdpParser.setMediaPassive(remoteSdp, self.isDtlsEnabled());
                            obj = self.getRtcLibrary().createRTCSessionDescription(CONSTANTS.WEBRTC.RTC_SDP_TYPE.ANSWER, remoteSdp);
                            peer.setRemoteDescription(obj,
                                    function revertRtcStateRemoteDescriptionSuccessCallback() {
                                        logger.debug("revertRtcState[stable|local_offer]: setRemoteDescription success");
                                        utils.callFunctionIfExist(successCallback, call);
                                    }, function revertRtcStateRemoteDescriptionFailureCallback(error) {
                                        logger.error("revertRtcState[stable|local_offer]: setRemoteDescription failed: " + error);
                                        utils.callFunctionIfExist(failureCallback, call);
                            });
                        },
                        function revertRtcStateLocalDescriptionFailureCallback(error) {
                            logger.error("revertRtcState[stable|local_offer]: setLocalDescription failed: " + error);
                            utils.callFunctionIfExist(failureCallback, call);
                        });
                break;
            case CONSTANTS.WEBRTC.RTC_SIGNALING_STATE.HAVE_REMOTE_OFFER:
                remoteSdp = sdpParser.setMediaActPass(remoteSdp, self.isDtlsEnabled());
                obj = self.getRtcLibrary().createRTCSessionDescription(CONSTANTS.WEBRTC.RTC_SDP_TYPE.OFFER, remoteSdp);
                peer.setRemoteDescription(obj,
                        function revertRtcStateRemoteDescriptionSuccessCallback() {
                            logger.debug("revertRtcState[remote_offer]: setLocalDescription success");
                            localSdp = sdpParser.setMediaPassive(localSdp, self.isDtlsEnabled());
                            obj = self.getRtcLibrary().createRTCSessionDescription(CONSTANTS.WEBRTC.RTC_SDP_TYPE.ANSWER, localSdp);
                            peer.setLocalDescription(obj,
                                    function revertRtcStateLocalDescriptionSuccessCallback() {
                                        logger.debug("revertRtcState[remote_offer]: setRemoteDescription success");
                                        utils.callFunctionIfExist(successCallback, call);
                                    }, function revertRtcStateLocalDescriptionFailureCallback(error) {
                                logger.error("revertRtcState[remote_offer]: setRemoteDescription failed: " + error);
                                utils.callFunctionIfExist(failureCallback, call);
                            });
                        },
                        function revertRtcStateRemoteDescriptionFailureCallback(error) {
                            logger.error("revertRtcState[remote_offer]: setLocalDescription failed: " + error);
                            utils.callFunctionIfExist(failureCallback, call);
                        });
                break;
            default:
                logger.debug("revertRtcState: not applicible for state: " + rtcState);
        }
    };

    /*
     * Native implementation lies on webRtcAdaptor.js
     * createNativeHoldUpdate to be used when native webrtc is enabled
     */
    self.createHoldUpdate = function(call, hold, remote_hold_status, successCallback, failureCallback) {
        logger.debug("createHoldUpdate: local hold= " + hold + " remote hold= " + remote_hold_status + " state= " + call.peer.signalingState);
        var peer = call.peer,
                audioDirection,
                videoDirection,
                localSdp,
                externalSdp,
                tempSdp,
                muteCall,
                obj;

        call.stableRemoteSdp = peer.remoteDescription.sdp;
        call.stableLocalSdp = peer.localDescription.sdp;

        tempSdp = sdpParser.incrementVersion(call.peer.localDescription.sdp);

        tempSdp = sdpParser.setMediaActPass(tempSdp, self.isDtlsEnabled());

        //two sdp-s are created here
        //one is to be used by rest-request (externalSdp)
        //one is to set the audio-video direction of the local call (localSdp)
        //this is needed in order to adapt to the rfc (needs sendrecv to sendonly transition) 
        //and to the plugin (needs inactive to mute audio and video connection)
        externalSdp = tempSdp;
        localSdp = tempSdp;

        if(hold || remote_hold_status){
            audioDirection = sdpParser.getAudioSdpDirection(externalSdp);
            if (audioDirection === CONSTANTS.WEBRTC.MEDIA_STATE.SEND_RECEIVE) {
                externalSdp = sdpParser.updateAudioSdpDirection(externalSdp, CONSTANTS.WEBRTC.MEDIA_STATE.SEND_ONLY);
            } else {
                if (!hold && remote_hold_status) {
                    externalSdp = sdpParser.updateAudioSdpDirection(externalSdp, CONSTANTS.WEBRTC.MEDIA_STATE.SEND_RECEIVE);
                } else {
                    externalSdp = sdpParser.updateAudioSdpDirectionToInactive(externalSdp);
                }
            }
            videoDirection = sdpParser.getVideoSdpDirection(externalSdp);
            if (videoDirection === CONSTANTS.WEBRTC.MEDIA_STATE.SEND_RECEIVE) {
                externalSdp = sdpParser.updateVideoSdpDirection(externalSdp, CONSTANTS.WEBRTC.MEDIA_STATE.SEND_ONLY);
            } else {
                if (!hold && remote_hold_status) {
                    externalSdp = sdpParser.updateVideoSdpDirection(externalSdp, CONSTANTS.WEBRTC.MEDIA_STATE.SEND_RECEIVE);
                } else {
                    externalSdp = sdpParser.updateVideoSdpDirectionToInactive(externalSdp);
                }
            }
            localSdp = sdpParser.updateAudioSdpDirectionToInactive(externalSdp);
            localSdp = sdpParser.updateVideoSdpDirectionToInactive(localSdp);
            muteCall = true;
        } else {
            externalSdp = sdpParser.updateAudioSdpDirection(externalSdp, CONSTANTS.WEBRTC.MEDIA_STATE.SEND_RECEIVE);
            if (webRtcAdaptorUtils.callCanLocalSendVideo(call)) {
                externalSdp = sdpParser.updateVideoSdpDirection(externalSdp, CONSTANTS.WEBRTC.MEDIA_STATE.SEND_RECEIVE);
            } else {
                externalSdp = sdpParser.updateVideoSdpDirection(externalSdp, CONSTANTS.WEBRTC.MEDIA_STATE.RECEIVE_ONLY);
            }

            localSdp = externalSdp;
            muteCall = false;
        }

        localSdp = sdpParser.fixLocalTelephoneEventPayloadType(call, localSdp);

        obj = self.getRtcLibrary().createRTCSessionDescription(CONSTANTS.WEBRTC.RTC_SDP_TYPE.OFFER, localSdp);

        peer.setLocalDescription(obj,
                function createHoldUpdateSetLocalDescriptionSuccessCallback() {
                    logger.debug("createHoldUpdate: setLocalDescription success");
                    self.muteOnHold(call, muteCall);
                    utils.callFunctionIfExist(successCallback, externalSdp);
                },
                function createHoldUpdateSetLocalDescriptionFailureCallback(error){
                    logger.error("createHoldUpdate: setLocalDescription failed: " + error);
                    utils.callFunctionIfExist(failureCallback);
                });
    };

    self.createReOffer = function(call, successCallback, failureCallback, iceRestart) {
        var peer = call.peer, offerSdp;
        peer.createOffer(
                function processSlowStartCreateOfferSuccessCallback(oSdp) {
                    oSdp.sdp = sdpParser.deleteCryptoZeroFromSdp(oSdp.sdp);
                    oSdp.sdp = sdpParser.performVP8RTCPParameterWorkaround(oSdp.sdp);
                    oSdp.sdp = sdpParser.updateAudioCodec(oSdp.sdp);
                    oSdp.sdp = sdpParser.removeG722Codec(oSdp.sdp);
                    oSdp.sdp = sdpParser.deleteCryptoFromSdp(oSdp.sdp, self.isDtlsEnabled());
                    oSdp.sdp = sdpParser.setMediaActPass(oSdp.sdp, self.isDtlsEnabled());
                    oSdp.sdp = sdpParser.fixLocalTelephoneEventPayloadType(call, oSdp.sdp);
                    oSdp.sdp = sdpParser.replaceOpusCodec(oSdp.sdp);

                    offerSdp = self.getRtcLibrary().createRTCSessionDescription(CONSTANTS.WEBRTC.RTC_SDP_TYPE.OFFER, oSdp.sdp);
                    peer.setLocalDescription(
                            offerSdp,
                            function processSlowStartSetLocalDescriptionSuccessCallback() {
                                logger.debug("create ReOffer setLocalDescription success");
                                if (sdpParser.isMediaPortReady(oSdp.sdp)) {
                                    utils.callFunctionIfExist(successCallback, oSdp.sdp);
                                    call.successCallback = null;
                                }
                            },
                            function processSlowStartSetLocalDescriptionFailureCallback(error) {
                                utils.callFunctionIfExist(failureCallback, "create ReOffer setLocalDescription failed: " + error);
                            });
                },
                function processSlowStartCreateOfferFailureCallback(error) {
                    logger.error("create ReOffer failed!! " + error);
                    utils.callFunctionIfExist(failureCallback);
                },
                {
                    'mandatory': {
                        'OfferToReceiveAudio': self.getMediaAudio(),
                        'OfferToReceiveVideo': self.getMediaVideo(),
                        'IceRestart': iceRestart
                    }
                });
    };

    // Native implementation lies on webRtcAdaptor.js
    // processNativeHold
    self.processHold = function(call, hold, local_hold_status, successCallback, failureCallback) {
        logger.debug("processHold: local hold= " + local_hold_status + " remote hold= " + hold + " state= " + call.peer.signalingState);
        var peer = call.peer, updateSdp, audioDirection, videoDirection,
                peerRemoteSdp, peerLocalSdp, inactiveRemoteSdp, newPeerCreated = false;

        call.stableRemoteSdp = peer.remoteDescription.sdp;
        call.stableLocalSdp = peer.localDescription.sdp;

        if (!local_hold_status && !hold) {
            self.muteOnHold(call, false);
        }

        call.sdp = sdpParser.checkSupportedVideoCodecs(call.sdp, null);
        call.sdp = sdpParser.performVideoPortZeroWorkaround(call.sdp);
        call.sdp = sdpParser.checkAndRestoreICEParams(call.sdp, call.peer.localDescription.sdp);
        call.sdp = sdpParser.removeG722Codec(call.sdp);
        call.sdp = sdpParser.performG722ParameterWorkaround(call.sdp);
        call.sdp = sdpParser.performVP8RTCPParameterWorkaround(call.sdp);
        call.sdp = sdpParser.fixRemoteTelephoneEventPayloadType(call, call.sdp);
        call.sdp = sdpParser.performVP8BandwidthWorkaround(call.sdp);

        call.sdp = sdpParser.setMediaActPass(call.sdp, self.isDtlsEnabled());

        // is this necessary?, if so below code should be revised,
        // it will not change directions in the sdp
//        if (!sdpParser.isSdpContainsAudioDirection(call.sdp) &&
//                !sdpParser.isSdpContainsVideoDirection(call.sdp)) {
//            if (hold || local_hold_status) {
//                logger.debug("processHold: call.sdp has no direction so setting as inactive for " + (hold ? "remote hold" : "remote unhold with local hold"));
//                call.sdp = sdpParser.updateAudioSdpDirectionToInactive(call.sdp);
//                call.sdp = sdpParser.updateVideoSdpDirectionToInactive(call.sdp);
//            } else {
//                logger.debug("processHold: call.sdp has no direction so setting as sendrecv for unhold");
//                call.sdp = sdpParser.updateAudioSdpDirection(call.sdp, CONSTANTS.WEBRTC.MEDIA_STATE.SEND_RECEIVE);
//                call.sdp = sdpParser.updateVideoSdpDirection(call.sdp, CONSTANTS.WEBRTC.MEDIA_STATE.SEND_RECEIVE);
//            }
//        }

        audioDirection = sdpParser.getAudioSdpDirection(call.sdp);
        videoDirection = sdpParser.getVideoSdpDirection(call.sdp);

        peerRemoteSdp = call.prevRemoteSdp;
        peerLocalSdp = peer.localDescription.sdp;
        updateSdp = self.getRtcLibrary().createRTCSessionDescription(CONSTANTS.WEBRTC.RTC_SDP_TYPE.OFFER, call.sdp);
        inactiveRemoteSdp = self.getRtcLibrary().createRTCSessionDescription(CONSTANTS.WEBRTC.RTC_SDP_TYPE.OFFER, updateSdp.sdp);

        inactiveRemoteSdp.sdp = sdpParser.updateAudioSdpDirectionToInactive(inactiveRemoteSdp.sdp); // chrome38 fix
        inactiveRemoteSdp.sdp = sdpParser.updateVideoSdpDirectionToInactive(inactiveRemoteSdp.sdp); // chrome38 fix

        //call.sdp is given because of plugin crash
        if (self.createNewPeerForCallIfIceChangedInRemoteSdp(call, call.sdp, peerRemoteSdp)) {
            peer = call.peer;
            newPeerCreated = true;
        }
        inactiveRemoteSdp.sdp = sdpParser.deleteSsrcFromSdp(inactiveRemoteSdp.sdp);

        // 1st setRemoteDescription to make webrtc remove the audio and/or video streams
        // 2nd setRemote will add the audio stream back so that services like MOH can work
        // This code will also run in UnHold scenario, and it will remove & add video stream
        peer.setRemoteDescription(
                inactiveRemoteSdp,
                function processHoldSetFirstRemoteDescriptionSuccessCallback() {
                    updateSdp.sdp = sdpParser.updateAudioSdpDirection(updateSdp.sdp, CONSTANTS.WEBRTC.MEDIA_STATE.SEND_RECEIVE);
                    //updateSdp.sdp = updateSdpDirection(updateSdp.sdp, video, videoDirection);

                    if (sdpParser.getVideoSdpDirection(updateSdp.sdp) === CONSTANTS.WEBRTC.MEDIA_STATE.INACTIVE ||
                            sdpParser.getVideoSdpDirection(updateSdp.sdp) === CONSTANTS.WEBRTC.MEDIA_STATE.RECEIVE_ONLY)
                    {
                        updateSdp.sdp = sdpParser.deleteInactiveVideoSsrc(updateSdp.sdp);
                    }
                    peer.setRemoteDescription(
                            updateSdp,
                            function processHoldSetSecondRemoteDescriptionSuccessCallback() {
                                if (!hold && !local_hold_status && (videoDirection === CONSTANTS.WEBRTC.MEDIA_STATE.INACTIVE)) {
                                    call.remoteVideoState = CONSTANTS.WEBRTC.MEDIA_STATE.RECEIVE_ONLY;
                                } else{
                                    call.remoteVideoState = sdpParser.getVideoSdpDirection(updateSdp.sdp);
                                }
                                //check if remote party sends video
                                webRtcAdaptorUtils.callSetReceiveVideo(call);
                                peer.createAnswer(
                                    function processHoldCreateAnswerSuccessCallback(obj){
                                            logger.debug("processHold: isSdpEnabled audio= " + sdpParser.isAudioSdpEnabled(obj.sdp));
                                            logger.debug("processHold: isSdpEnabled video= " + sdpParser.isVideoSdpEnabled(obj.sdp));

                                            if (hold) {
                                                logger.debug("processHold: Remote HOLD");

                                                obj.sdp = sdpParser.respondToRemoteSdpDirections(obj.sdp, call.sdp);

                                                // is this necessary?, if so below code should be revised,
                                                // it will not change directions in the sdp
//                                if ((sr_indx + 1) + (so_indx + 1) + (ro_indx + 1) + (in_indx + 1) === 0) {
//                                    logger.debug("processNativeHold: no direction detected so setting as inactive");
//                                    obj.sdp = updateSdpDirection(obj.sdp, audio, MediaStates.INACTIVE);
//                                    obj.sdp = updateSdpDirection(obj.sdp, video, MediaStates.INACTIVE);
//                                }
                                            } else if (!local_hold_status) {
                                                logger.debug("processHold: Remote UNHOLD: direction left as it is");

                                                if (webRtcAdaptorUtils.callCanLocalSendVideo(call)) {
                                                    if (sdpParser.isSdpVideoSendEnabled(call.sdp)) {
                                                        obj.sdp = sdpParser.updateVideoSdpDirection(obj.sdp, CONSTANTS.WEBRTC.MEDIA_STATE.SEND_RECEIVE);
                                                    } else {
                                                        if (videoDirection === CONSTANTS.WEBRTC.MEDIA_STATE.INACTIVE) {
                                                            obj.sdp = sdpParser.updateVideoSdpDirection(obj.sdp, CONSTANTS.WEBRTC.MEDIA_STATE.INACTIVE);
                                                        }
                                                        else {
                                                            obj.sdp = sdpParser.updateVideoSdpDirection(obj.sdp, CONSTANTS.WEBRTC.MEDIA_STATE.SEND_ONLY);
                                                        }
                                                    }
                                                } else {
                                                    if (sdpParser.isSdpVideoSendEnabled(call.sdp)) {
                                                        obj.sdp = sdpParser.updateVideoSdpDirection(obj.sdp, CONSTANTS.WEBRTC.MEDIA_STATE.RECEIVE_ONLY);
                                                    } else {
                                                        obj.sdp = sdpParser.updateVideoSdpDirection(obj.sdp, CONSTANTS.WEBRTC.MEDIA_STATE.INACTIVE);
                                                    }
                                                }
                                                //change audio's direction to sendrecv for ssl attendees in a 3wc
                                                obj.sdp = sdpParser.changeDirection(obj.sdp, CONSTANTS.WEBRTC.MEDIA_STATE.RECEIVE_ONLY, CONSTANTS.WEBRTC.MEDIA_STATE.SEND_RECEIVE, CONSTANTS.STRING.AUDIO);
                                            } else if (local_hold_status && !hold) {
                                                logger.debug("processHold: Remote UNHOLD on local hold");

                                                if (audioDirection === CONSTANTS.WEBRTC.MEDIA_STATE.INACTIVE) {
                                                    obj.sdp = sdpParser.updateAudioSdpDirectionToInactive(obj.sdp);
                                                } else {
                                                    obj.sdp = sdpParser.updateAudioSdpDirection(obj.sdp, CONSTANTS.WEBRTC.MEDIA_STATE.SEND_ONLY);
                                                }

                                                if (webRtcAdaptorUtils.callCanLocalSendVideo(call)) {
                                                    obj.sdp = sdpParser.updateVideoSdpDirection(obj.sdp, CONSTANTS.WEBRTC.MEDIA_STATE.SEND_ONLY);
                                                } else {
                                                    obj.sdp = sdpParser.updateVideoSdpDirectionToInactive(obj.sdp);
                                                }
                                            }

                                            obj.sdp = sdpParser.performVP8RTCPParameterWorkaround(obj.sdp);
                                            obj.sdp = sdpParser.updateVersion(peerLocalSdp, obj.sdp);
                                            obj.sdp = sdpParser.checkIceParamsLengths(obj.sdp, updateSdp.sdp);
                                            obj.sdp = sdpParser.fixLocalTelephoneEventPayloadType(call, obj.sdp);

                                            if (newPeerCreated) {
                                                obj.sdp = sdpParser.copyCandidatesToTheNewLocalSdp(peerLocalSdp, obj.sdp);
                                                newPeerCreated = false;
                                            }
                                            call.answer = obj.sdp;       // ABE-1328

                                            peer.setLocalDescription(
                                                    obj,
                                                    function processHoldSetLocalDescriptionSuccessCallback() {
                                                        if (sdpParser.isMediaPortReady(obj.sdp)) {
                                                            utils.callFunctionIfExist(successCallback, obj.sdp);
                                                            call.successCallback = null;
                                                            call.answer = null;
                                                        }
                                                    },
                                                    function processHoldSetLocalDescriptionFailureCallback(e) {
                                                        logger.debug("processHold: setLocalDescription failed!! " + e);
                                                        utils.callFunctionIfExist(failureCallback, "Session cannot be created");
                                                        call.answer = null;       // ABE-1328
                                                    });
                                        },
                                        function processHoldCreateAnswerFailureCallback(e){
                                            logger.debug("processHold: createAnswer failed!!: " + e);
                                            utils.callFunctionIfExist(failureCallback, "Session cannot be created");
                                        },
                                        {
                                            'mandatory': {
                                                'OfferToReceiveAudio': self.getMediaAudio(),
                                                'OfferToReceiveVideo': self.getMediaVideo()
                                            }
                                        });
                            },
                            function processHoldSetSecondRemoteDescriptionFailureCallback(e) {
                                logger.debug("processHold: second setRemoteDescription failed!! " + e);
                                utils.callFunctionIfExist(failureCallback, "Session cannot be created");
                            });
                },
                function processHoldSetFirstRemoteDescriptionFailureCallback(e) {
                    logger.debug("processHold: first setRemoteDescription failed!! " + e);
                    utils.callFunctionIfExist(failureCallback, "Session cannot be created");
                });
    };

    // Native implementation lies on webRtcAdaptor.js
    // processNativeUpdate
    self.processUpdate = function(call, successCallback, failureCallback, local_hold_status) {
        logger.debug("processUpdate: state= " + call.peer.signalingState);
        var peer = call.peer, remoteAudioState, remoteVideoState, remoteVideoDirection, callSdpWithNoSsrc,
                remoteDescObj, localDescObj, peerRemoteSdp, peerLocalSdp, newPeerCreated;

        call.stableRemoteSdp = peer.remoteDescription.sdp;
        call.stableLocalSdp = peer.localDescription.sdp;

        call.sdp = sdpParser.addSdpMissingCryptoLine(call.sdp); // Meetme workaround        
        call.sdp = sdpParser.removeSdpPli(call.sdp);
        call.sdp = sdpParser.removeG722Codec(call.sdp);
        call.sdp = sdpParser.performG722ParameterWorkaround(call.sdp);
        call.sdp = sdpParser.performVP8RTCPParameterWorkaround(call.sdp);
        call.sdp = sdpParser.fixRemoteTelephoneEventPayloadType(call, call.sdp);
        call.sdp = sdpParser.checkAndRestoreICEParams(call.sdp, call.peer.localDescription.sdp);

        remoteVideoDirection = sdpParser.getVideoSdpDirection(call.sdp);

        self.setMediaVideo(sdpParser.isSdpHasVideo(call.sdp));
        if (remoteVideoDirection === CONSTANTS.WEBRTC.MEDIA_STATE.INACTIVE &&
                call.currentState === "COMPLETED")
        {
            switch(call.remoteVideoState){
                case CONSTANTS.WEBRTC.MEDIA_STATE.INACTIVE:
                    call.sdp = sdpParser.updateVideoSdpDirection(call.sdp, CONSTANTS.WEBRTC.MEDIA_STATE.SEND_RECEIVE);
                    break;
                case CONSTANTS.WEBRTC.MEDIA_STATE.RECEIVE_ONLY:
                    call.sdp = sdpParser.updateVideoSdpDirection(call.sdp, CONSTANTS.WEBRTC.MEDIA_STATE.SEND_RECEIVE);
                    break;
                case CONSTANTS.WEBRTC.MEDIA_STATE.SEND_RECEIVE:
                    call.sdp = sdpParser.updateVideoSdpDirection(call.sdp, CONSTANTS.WEBRTC.MEDIA_STATE.RECEIVE_ONLY);
                    break;
            }
        }

        if (local_hold_status) {
            call.sdp = sdpParser.updateAudioSdpDirectionToInactive(call.sdp);
            call.sdp = sdpParser.updateVideoSdpDirectionToInactive(call.sdp);
        }

        call.sdp = sdpParser.changeDirection(call.sdp, CONSTANTS.WEBRTC.MEDIA_STATE.SEND_ONLY, CONSTANTS.WEBRTC.MEDIA_STATE.SEND_RECEIVE, CONSTANTS.STRING.VIDEO);
        webRtcAdaptorUtils.callSetReceiveVideo(call);

        if (peer.signalingState === CONSTANTS.WEBRTC.RTC_SIGNALING_STATE.HAVE_LOCAL_OFFER) {
            //if we are here we have been to createUpdate before this

            call.sdp = sdpParser.checkSupportedVideoCodecs(call.sdp, call.peer.localDescription.sdp);
            call.sdp = sdpParser.setMediaPassive(call.sdp, self.isDtlsEnabled());
            remoteDescObj = self.getRtcLibrary().createRTCSessionDescription(CONSTANTS.WEBRTC.RTC_SDP_TYPE.ANSWER, call.sdp);

            peer.setRemoteDescription(
                    remoteDescObj,
                    function processUpdateSetRemoteDescriptionSuccessCallback() {
                        call.remoteVideoState = sdpParser.getVideoSdpDirection(call.sdp);
                        self.addCandidates(call);
                        utils.callFunctionIfExist(successCallback, call.sdp);
                        call.successCallback = null;
                    },
                    function processUpdateSetRemoteDescriptionFailureCallback(e) {
                        logger.debug("processUpdate: setRemoteDescription failed!!" + e);
                        utils.callFunctionIfExist(failureCallback, "processUpdate: setRemoteDescription failed!!");
                    });
        } else {
            call.sdp = sdpParser.checkSupportedVideoCodecs(call.sdp, null);
            //this part is a work-around for webrtc bug
            //set remote description with inactive media lines first.
            //then set remote description with original media lines.

            //keep original values of remote audio and video states
            remoteAudioState = sdpParser.getAudioSdpDirection(call.sdp);
            remoteVideoState = sdpParser.getVideoSdpDirection(call.sdp);

            //set media lines with inactive state for workaround
            call.sdp = sdpParser.updateAudioSdpDirectionToInactive(call.sdp);
            call.sdp = sdpParser.updateVideoSdpDirectionToInactive(call.sdp);

            //This is highly required for meetme on DTLS
            call.sdp = sdpParser.setMediaActPass(call.sdp, self.isDtlsEnabled());

            // delete all ssrc lines from the sdp before setting first remote description
            // set second remote description with all ssrc lines included
            if (remoteVideoState === CONSTANTS.WEBRTC.MEDIA_STATE.INACTIVE ||
                    remoteVideoState === CONSTANTS.WEBRTC.MEDIA_STATE.RECEIVE_ONLY)
            {
                call.sdp = sdpParser.deleteInactiveVideoSsrc(call.sdp);
            }

            peerRemoteSdp = self.getRtcLibrary().createRTCSessionDescription(CONSTANTS.WEBRTC.RTC_SDP_TYPE.OFFER, call.prevRemoteSdp);
            peerLocalSdp = peer.localDescription.sdp;

            if (self.createNewPeerForCallIfIceChangedInRemoteSdp(call, call.sdp, peerRemoteSdp.sdp)) {
                peer = call.peer;
                newPeerCreated = true;
            }

            callSdpWithNoSsrc = sdpParser.deleteSsrcFromSdp(call.sdp);
            remoteDescObj = self.getRtcLibrary().createRTCSessionDescription(CONSTANTS.WEBRTC.RTC_SDP_TYPE.OFFER, callSdpWithNoSsrc);

            peer.setRemoteDescription(
                    remoteDescObj,
                    function processUpdateWorkaroundSetRemoteDescriptionSuccessCallback() {
                        logger.debug("processUpdate: workaround setRemoteDescription success");

                        //restore original values
                        call.sdp = sdpParser.updateAudioSdpDirection(call.sdp, remoteAudioState);
                        call.sdp = sdpParser.updateVideoSdpDirection(call.sdp, remoteVideoState);

                        remoteDescObj = self.getRtcLibrary().createRTCSessionDescription(CONSTANTS.WEBRTC.RTC_SDP_TYPE.OFFER, call.sdp);
                        peer.setRemoteDescription(
                                remoteDescObj,
                                function processUpdateSetRemoteDescriptionSuccessCallback() {
                                    logger.debug("processUpdate: setRemoteDescription success");
                                    call.remoteVideoState = sdpParser.getVideoSdpDirection(call.sdp);
                                    self.addCandidates(call);

                                    peer.createAnswer(
                                            function processUpdateCreateAnswerSuccessCallback(obj) {
                                                logger.debug("processUpdate: isSdpEnabled audio= " + sdpParser.isAudioSdpEnabled(obj.sdp));
                                                logger.debug("processUpdate: isSdpEnabled video= " + sdpParser.isVideoSdpEnabled(obj.sdp));

                                                if (remoteAudioState === CONSTANTS.WEBRTC.MEDIA_STATE.INACTIVE) {
                                                    obj.sdp = sdpParser.updateAudioSdpDirectionToInactive(obj.sdp);
                                                }

                                                if (call.remoteVideoState === CONSTANTS.WEBRTC.MEDIA_STATE.INACTIVE) {
                                                    obj.sdp = sdpParser.updateVideoSdpDirectionToInactive(obj.sdp);
                                                } else if (webRtcAdaptorUtils.callCanLocalSendVideo(call)) {
                                                    obj.sdp = sdpParser.updateVideoSdpDirection(obj.sdp, CONSTANTS.WEBRTC.MEDIA_STATE.SEND_RECEIVE);
                                                } else {
                                                    obj.sdp = sdpParser.updateVideoSdpDirection(obj.sdp, CONSTANTS.WEBRTC.MEDIA_STATE.RECEIVE_ONLY);
                                                }
                                                obj.sdp = sdpParser.performVP8RTCPParameterWorkaround(obj.sdp);
                                                obj.sdp = sdpParser.updateVersion(peerLocalSdp, obj.sdp);
                                                obj.sdp = sdpParser.fixLocalTelephoneEventPayloadType(call, obj.sdp);

                                                self.fireOnStreamAddedEvent(call);

                                                obj.sdp = sdpParser.checkIceParamsLengths(obj.sdp, remoteDescObj.sdp);
                                                obj.sdp = sdpParser.setMediaPassive(obj.sdp, self.isDtlsEnabled());

                                                if (newPeerCreated) {
                                                    obj.sdp = sdpParser.copyCandidatesToTheNewLocalSdp(peerLocalSdp, obj.sdp);
                                                    newPeerCreated = false;
                                                }
                                                localDescObj = self.getRtcLibrary().createRTCSessionDescription(CONSTANTS.WEBRTC.RTC_SDP_TYPE.ANSWER, obj.sdp);

                                                peer.setLocalDescription(
                                                        localDescObj,
                                                        function processUpdateSetLocalDescriptionSuccessCallback() {
                                                            if (sdpParser.isMediaPortReady(obj.sdp)) {
                                                                logger.debug("processUpdate: setlocalDescription success");
                                                                utils.callFunctionIfExist(successCallback, obj.sdp);
                                                                call.successCallback = null;
                                                            }
                                                        },
                                                        function processUpdateSetLocalDescriptionSuccessCallback(e) {
                                                            logger.debug("processUpdate: setlocalDescription failed!!" + e);
                                                            utils.callFunctionIfExist(failureCallback, "processUpdate: setlocalDescription failed!!");
                                                        });
                                            },
                                            function processUpdateCreateAnswerFailureCallback(e) {
                                                logger.debug("processUpdate: createAnswer failed!! " + e);
                                                utils.callFunctionIfExist(failureCallback, "Session cannot be created");
                                            },
                                            {
                                                'mandatory': {
                                                    'OfferToReceiveAudio': self.getMediaAudio(),
                                                    'OfferToReceiveVideo': self.getMediaVideo()
                                                }
                                            });
                                },
                                function processUpdateSetRemoteDescriptionSuccessCallback(e) {
                                    logger.debug("processUpdate: setRemoteDescription failed!!" + e);
                                    utils.callFunctionIfExist(failureCallback, "processUpdate: setRemoteDescription failed!!");
                                });
                    },
                    function processUpdateWorkaroundSetRemoteDescriptionSuccessCallback(e) {
                        logger.debug("processUpdate: workaround setRemoteDescription failed!!" + e);
                        utils.callFunctionIfExist(failureCallback, "processUpdate: workaround setRemoteDescription failed!!");
                    });
        }
    };

    // Native implementation lies on webRtcAdaptor.js
    // processNativeAnswer
    self.processAnswer = function(call, onSuccess, onFail) {
        logger.debug("processAnswer: state= " + call.peer.signalingState);
        var restoreSdpOnSuccess, audioWorkaroundOnSuccess, onSuccessAfterWorkarounds,
                remoteVideoDirection, localVideoDirection,
                peer = call.peer;

        onSuccessAfterWorkarounds = function() {
            call.remoteVideoState = sdpParser.getVideoSdpDirection(call.sdp);
            call.videoOfferSent = sdpParser.isSdpHasVideo(call.sdp);
            self.addCandidates(call);
            utils.callFunctionIfExist(onSuccess);
        };

        call.sdp = sdpParser.checkSupportedVideoCodecs(call.sdp, peer.localDescription.sdp);
        call.sdp = sdpParser.performVideoPortZeroWorkaround(call.sdp);
        call.sdp = sdpParser.removeSdpPli(call.sdp);
        call.sdp = sdpParser.removeG722Codec(call.sdp);
        call.sdp = sdpParser.performG722ParameterWorkaround(call.sdp);
        call.sdp = sdpParser.performVP8RTCPParameterWorkaround(call.sdp);
        call.sdp = sdpParser.performVP8BandwidthWorkaround(call.sdp);
        call.sdp = sdpParser.fixRemoteTelephoneEventPayloadType(call, call.sdp);

        webRtcAdaptorUtils.callSetReceiveVideo(call);

        remoteVideoDirection = sdpParser.getVideoSdpDirection(call.sdp);
        localVideoDirection = sdpParser.getVideoSdpDirection(call.peer.localDescription.sdp);

        // this is needed for buggy webrtc api. when term answers with video to audio only call
        // this scenario does not work without converting to sendrecv
        logger.debug("processAnswer: ice-lite: do remote video escalation");
        call.sdp = sdpParser.changeDirection(call.sdp, CONSTANTS.WEBRTC.MEDIA_STATE.SEND_ONLY, CONSTANTS.WEBRTC.MEDIA_STATE.SEND_RECEIVE);

        if (localVideoDirection === CONSTANTS.WEBRTC.MEDIA_STATE.RECEIVE_ONLY &&
                (remoteVideoDirection === CONSTANTS.WEBRTC.MEDIA_STATE.INACTIVE || remoteVideoDirection === CONSTANTS.WEBRTC.MEDIA_STATE.RECEIVE_ONLY)) {

            // delete ssrc only from video, keep audio ssrc to hear audio
            call.sdp = sdpParser.deleteInactiveVideoSsrc(call.sdp);

            // Audio <--> Audio : apply workaround step 1

            self.performOrigAudioWorkaround(call, onSuccessAfterWorkarounds, onFail);

        } else if (localVideoDirection === CONSTANTS.WEBRTC.MEDIA_STATE.SEND_RECEIVE &&
                (remoteVideoDirection === CONSTANTS.WEBRTC.MEDIA_STATE.RECEIVE_ONLY || remoteVideoDirection === CONSTANTS.WEBRTC.MEDIA_STATE.INACTIVE)) {

            // delete ssrc only from video, keep audio ssrc to hear audio
            call.sdp = sdpParser.deleteInactiveVideoSsrc(call.sdp);

            // Audio-Video <--> Audio : apply workaround step 1 & 2

            audioWorkaroundOnSuccess = function() {
                self.restoreActualSdp(call, onSuccessAfterWorkarounds, onFail, localVideoDirection, remoteVideoDirection);
            };

            //self.performOrigAudioWorkaround(call, audioWorkaroundOnSuccess, onFail);
            self.performOrigAudioWorkaround(call, onSuccessAfterWorkarounds, onFail);

        } else if (localVideoDirection === CONSTANTS.WEBRTC.MEDIA_STATE.RECEIVE_ONLY &&
                (remoteVideoDirection === CONSTANTS.WEBRTC.MEDIA_STATE.SEND_ONLY || remoteVideoDirection === CONSTANTS.WEBRTC.MEDIA_STATE.SEND_RECEIVE)) {

            // Audio  <--> Audio-Video

            restoreSdpOnSuccess = function() {
                self.performVideoStartWorkaround(call, onSuccessAfterWorkarounds, onFail);
            };

            audioWorkaroundOnSuccess = function() {
                self.restoreActualSdp(call, restoreSdpOnSuccess, onFail, localVideoDirection, remoteVideoDirection);
            };

            //self.performOrigAudioWorkaround(call, audioWorkaroundOnSuccess, onFail);
            self.performOrigAudioWorkaround(call, restoreSdpOnSuccess, onFail);

        } else {

            // Audio-Video <--> Audio-Video
            // there is remote video, no need for orig side workaround

            call.sdp = sdpParser.setMediaPassive(call.sdp, self.isDtlsEnabled());

            peer.setRemoteDescription(
                    self.getRtcLibrary().createRTCSessionDescription(CONSTANTS.WEBRTC.RTC_SDP_TYPE.ANSWER, call.sdp),
                    function processAnswerSetRemoteDescriptionSuccessCallback() {
                        logger.debug("processAnswer: setRemoteDescription success");
                        onSuccessAfterWorkarounds();
                    },
                    function processAnswerSetRemoteDescriptionFailureCallback(e) {
                        logger.debug("processAnswer: setRemoteDescription failed: " + e);
                        utils.callFunctionIfExist(onFail);
                    });
        }

    };

    // Native implementation lies on webRtcAdaptor.js
    // processNativePreAnswer
    self.processPreAnswer = function(call) {
        logger.debug("processPreAnswer: state= " + call.peer.signalingState);
        var peer = call.peer, remoteDesc;

        call.sdp = sdpParser.checkSupportedVideoCodecs(call.sdp, call.peer.localDescription.sdp);
        call.sdp = sdpParser.removeG722Codec(call.sdp);
        call.sdp = sdpParser.performG722ParameterWorkaround(call.sdp);
        call.sdp = sdpParser.performVP8RTCPParameterWorkaround(call.sdp);
        call.sdp = sdpParser.fixRemoteTelephoneEventPayloadType(call, call.sdp);

        webRtcAdaptorUtils.callSetReceiveVideo(call);
        remoteDesc = self.getRtcLibrary().createRTCSessionDescription(CONSTANTS.WEBRTC.RTC_SDP_TYPE.ANSWER, call.sdp);
        self.addCandidates(call);
        peer.setRemoteDescription(
                remoteDesc,
                function processPreAnswerSetRemoteDescriptionSuccessCallback(){
                    call.remoteVideoState = sdpParser.getVideoSdpDirection(call.sdp);
                    logger.debug("processPreAnswer: setRemoteDescription success");
                },
                function processPreAnswerSetRemoteDescriptionFailureCallback(e) {
                    logger.debug("processPreAnswer: setRemoteDescription failed: " + e );
                });
    };

    // Native implementation lies on webRtcAdaptor.js
    // processNativeRespond
    self.processRespond = function(call, onSuccess, onFail, isJoin) {
        var remoteVideoDirection, callSdpWithNoSsrc, remoteDescObj,
                peer = call.peer;
        logger.debug("processRespond: state= " + call.peer.signalingState);

        call.sdp = sdpParser.checkSupportedVideoCodecs(call.sdp, peer.localDescription.sdp);
        call.sdp = sdpParser.removeSdpPli(call.sdp);
        call.sdp = sdpParser.removeG722Codec(call.sdp);
        call.sdp = sdpParser.performG722ParameterWorkaround(call.sdp);
        call.sdp = sdpParser.performVP8RTCPParameterWorkaround(call.sdp);
        call.sdp = sdpParser.performVP8BandwidthWorkaround(call.sdp);
        call.sdp = sdpParser.fixRemoteTelephoneEventPayloadType(call, call.sdp);

        remoteVideoDirection = sdpParser.getVideoSdpDirection(call.sdp);
        webRtcAdaptorUtils.callSetReceiveVideo(call);

        if ((remoteVideoDirection === CONSTANTS.WEBRTC.MEDIA_STATE.INACTIVE) && (call.currentState === "COMPLETED"))
        {
            switch(call.remoteVideoState){
                case CONSTANTS.WEBRTC.MEDIA_STATE.INACTIVE:
                    call.sdp = sdpParser.updateVideoSdpDirection(call.sdp, CONSTANTS.WEBRTC.MEDIA_STATE.RECEIVE_ONLY);
                    break;
                case CONSTANTS.WEBRTC.MEDIA_STATE.RECEIVE_ONLY:
                    call.sdp = sdpParser.updateVideoSdpDirection(call.sdp, CONSTANTS.WEBRTC.MEDIA_STATE.RECEIVE_ONLY);
                    break;
            }
        }
        call.remoteVideoState = sdpParser.getVideoSdpDirection(call.sdp);
        call.sdp = sdpParser.changeDirection(call.sdp, CONSTANTS.WEBRTC.MEDIA_STATE.SEND_ONLY, CONSTANTS.WEBRTC.MEDIA_STATE.SEND_RECEIVE, CONSTANTS.STRING.VIDEO);

        if (isJoin) {
            call.sdp = sdpParser.changeDirection(call.sdp, CONSTANTS.WEBRTC.MEDIA_STATE.RECEIVE_ONLY, CONSTANTS.WEBRTC.MEDIA_STATE.SEND_RECEIVE, CONSTANTS.STRING.AUDIO);
            self.muteOnHold(call, false);
        }

        if (call.peer.signalingState === CONSTANTS.WEBRTC.RTC_SIGNALING_STATE.STABLE) {
            //if we are in stable state we should not change remotedescription
            utils.callFunctionIfExist(onSuccess);
            return;
        }

        call.sdp = sdpParser.setMediaPassive(call.sdp, self.isDtlsEnabled());
        // delete all ssrc lines from the sdp before setting first remote description
        // set second remote description with all ssrc lines included

        if (sdpParser.getVideoSdpDirection(call.sdp) === CONSTANTS.WEBRTC.MEDIA_STATE.INACTIVE ||
                sdpParser.getVideoSdpDirection(call.sdp) === CONSTANTS.WEBRTC.MEDIA_STATE.RECEIVE_ONLY)
        {
            call.sdp = sdpParser.deleteInactiveVideoSsrc(call.sdp);
        }
        callSdpWithNoSsrc = sdpParser.deleteSsrcFromSdp(call.sdp);
        remoteDescObj = self.getRtcLibrary().createRTCSessionDescription(CONSTANTS.WEBRTC.RTC_SDP_TYPE.ANSWER, callSdpWithNoSsrc);

        peer.setRemoteDescription(
                remoteDescObj,
                function processRespondSetRemoteDescriptionSuccessCallback() {
                    logger.debug("processRespond: setRemoteDescription success");
                    var onSuccessAfterWorkarounds = function() {
                        call.remoteVideoState = sdpParser.getVideoSdpDirection(call.sdp);
                        call.videoOfferSent = true;
                        self.addCandidates(call);
                        utils.callFunctionIfExist(onSuccess);
                    };
                    self.performVideoStartWorkaround(call, onSuccessAfterWorkarounds, onFail);
                },
                function processRespondSetRemoteDescriptionSuccessCallback(e) {
                    logger.debug("processRespond: setRemoteDescription failed: " + e);
                    utils.callFunctionIfExist(onFail);
                });
    };

    /*
     * Native implementation lies on webRtcAdaptor.js
     * processNativeHoldRespond
     */
    self.processHoldRespond = function(call, onSuccess, onFailure, isJoin) {
        var remoteAudioDirection,
            remoteVideoDirection,
            localVideoDirection,
            onSuccessAfterWorkaround,
            localHoldFlag = false,
            remoteHoldFlag = false,
            obj;

        onSuccessAfterWorkaround = function() {
            //call.remoteVideoState = getSdpDirection(call.sdp, video);
            self.addCandidates(call);
            utils.callFunctionIfExist(onSuccess);
        };

        logger.debug("processHoldRespond: state= " + call.peer.signalingState + " call.currentState= " + call.currentState);

        call.sdp = sdpParser.checkSupportedVideoCodecs(call.sdp, call.peer.localDescription.sdp);
        call.sdp = sdpParser.removeSdpPli(call.sdp);
        call.sdp = sdpParser.removeG722Codec(call.sdp);
        call.sdp = sdpParser.performG722ParameterWorkaround(call.sdp);
        call.sdp = sdpParser.performVP8RTCPParameterWorkaround(call.sdp);
        call.sdp = sdpParser.performVP8BandwidthWorkaround(call.sdp);
        call.sdp = sdpParser.fixRemoteTelephoneEventPayloadType(call, call.sdp);

        sdpParser.init(call.sdp);
        remoteHoldFlag = sdpParser.isRemoteHold();

        localHoldFlag = (call.currentState === "LOCAL_HOLD");

        remoteAudioDirection = sdpParser.getAudioSdpDirection(call.sdp);
        remoteVideoDirection = sdpParser.getVideoSdpDirection(call.sdp);

        call.remoteVideoState = remoteVideoDirection;

        localVideoDirection = sdpParser.getVideoSdpDirection(call.peer.localDescription.sdp);

        logger.debug("processHoldRespond: localHold= " + localHoldFlag + " remoteHold= " + remoteHoldFlag);

        /* Required for MOH - start */
        if (remoteHoldFlag === false) {
            if ((remoteAudioDirection === CONSTANTS.WEBRTC.MEDIA_STATE.SEND_RECEIVE) && (call.currentState === "REMOTE_HOLD")) {
                logger.debug("set current web state to COMPLETED");
                call.previousState = call.currentState;
                call.currentState = "COMPLETED";
            }
        } else {
            if (call.currentState === "COMPLETED") {
                logger.debug("set current web state to REMOTE_HOLD");
                call.previousState = call.currentState;
                call.currentState = "REMOTE_HOLD";
            }
        }

        if (localHoldFlag || remoteHoldFlag) {
            logger.debug("processHoldRespond: " + call.currentState + " : video -> inactive");
            call.sdp = sdpParser.updateVideoSdpDirection(call.sdp, CONSTANTS.WEBRTC.MEDIA_STATE.INACTIVE);
        }

        if ((remoteVideoDirection === CONSTANTS.WEBRTC.MEDIA_STATE.INACTIVE) && (call.currentState === "COMPLETED")) {
            logger.debug("processHoldRespond: video inactive -> recvonly");
            call.sdp = sdpParser.updateVideoSdpDirection(call.sdp, CONSTANTS.WEBRTC.MEDIA_STATE.RECEIVE_ONLY);
        }
        /* Required for MOH - end */

        if (isJoin) {
            self.muteOnHold(call, false);
        }

        // this is required just before setRemoteDescription
        webRtcAdaptorUtils.callSetReceiveVideo(call);

        if (call.peer.signalingState === CONSTANTS.WEBRTC.RTC_SIGNALING_STATE.STABLE) {
            //if we are in stable state we should not change remotedescription
            utils.callFunctionIfExist(onSuccess);
            return;
        }

        call.sdp = sdpParser.setMediaPassive(call.sdp, self.isDtlsEnabled());

        // this is required for displaying remote video when direction is send only
        call.sdp = sdpParser.changeDirection(call.sdp, CONSTANTS.WEBRTC.MEDIA_STATE.SEND_ONLY, CONSTANTS.WEBRTC.MEDIA_STATE.SEND_RECEIVE);
        if (sdpParser.getVideoSdpDirection(call.sdp) === CONSTANTS.WEBRTC.MEDIA_STATE.INACTIVE ||
                sdpParser.getVideoSdpDirection(call.sdp) === CONSTANTS.WEBRTC.MEDIA_STATE.RECEIVE_ONLY)
        {
            call.sdp = sdpParser.deleteInactiveVideoSsrc(call.sdp);
        }

        obj = self.getRtcLibrary().createRTCSessionDescription(CONSTANTS.WEBRTC.RTC_SDP_TYPE.ANSWER, call.sdp);

        call.peer.setRemoteDescription(obj,
                function processHoldRespondSetRemoteDescriptionSuccessCallback() {
                    logger.debug("processHoldRespond: setRemoteDescription typeAns success");
                    if (remoteAudioDirection === CONSTANTS.WEBRTC.MEDIA_STATE.INACTIVE ||
                        remoteAudioDirection === CONSTANTS.WEBRTC.MEDIA_STATE.RECEIVE_ONLY) {
                        onSuccessAfterWorkaround();
                    } else {
                        self.performVideoStartWorkaround(call, onSuccessAfterWorkaround, onFailure);
                    }
                },
                function processHoldRespondSetRemoteDescriptionFailureCallback(e) {
                    logger.debug("processHoldRespond: setRemoteDescription typeAns failed: " + e);
                    utils.callFunctionIfExist(onFailure);
                });
    };

    // Native implementation lies on webRtcAdaptor.js
    self.processRemoteOfferOnLocalHold = function(call, successCallback, failureCallback) {
        logger.info("processRemoteOfferOnLocalHold");
        if (call.peer) {
            utils.callFunctionIfExist(successCallback, call.peer.localDescription.sdp);
        }
        else {
            utils.callFunctionIfExist(failureCallback, "we dont have a peer object somehow");
        }
    };

    /*
     * Native implementation lies on webRtcAdaptor.js
     * process the end call that was received
     *
     * @ignore
     * @name rtc.processEnd.stop
     */
    self.processEnd = function(call) {
        if (call.peer) {
            logger.info("close peer connection " + call.id);
            // void close()
            if (call.peer) {
                call.peer.close();
            }
            if(call.localStream) {
                call.localStream.stop();
                call.localStream = null;
            }

            if (self.getDefaultVideoContainer()) {
                if(self.getDefaultVideoContainer().firstElementChild) {
                    self.disposeStreamRenderer(self.getDefaultVideoContainer().firstElementChild);
                }
            } else if (self.getRemoteVideoContainer()) {
                self.disposeStreamRenderer(self.getRemoteVideoContainer());
            }

            self.setPeerCount(self.getPeerCount() - 1);
            if(self.getPeerCount() <=0) {
                if(self.getLocalStream() && self.getLocalStream().stop) {
                    self.getLocalStream().stop();
                    if (self.getDefaultVideoContainer()) {
                        self.disposeStreamRenderer(self.getDefaultVideoContainer().lastElementChild);
                    } else if(self.getLocalVideoContainer()) {
                        self.disposeStreamRenderer(self.getLocalVideoContainer());
                    }
                }
                self.setLocalStream(null);
            }
        }

    };

    self.createUpdateWithSetLocalDescription = function(call, successCallback, failureCallback, isVideoStart, localSdp) {
        var peer = call.peer, localDesc;
        logger.debug("set local description to start the video");

        if (!call.isVideoSourceAllowed) {
            self.replaceLocalStream(call);
        }
        if (self.getLocalVideoTrack(call.peer)) {
            self.getLocalVideoTrack(call.peer).enabled = isVideoStart;
        }
        if (isVideoStart) {
            localSdp = sdpParser.updateSdpDirection(localSdp, CONSTANTS.STRING.VIDEO, CONSTANTS.WEBRTC.MEDIA_STATE.SEND_RECEIVE);
        } else {
            localSdp = sdpParser.deescalateSdpDirection(localSdp, CONSTANTS.STRING.VIDEO);
        }

        localDesc = self.getRtcLibrary().createRTCSessionDescription(CONSTANTS.WEBRTC.RTC_SDP_TYPE.OFFER, localSdp);

        peer.setLocalDescription(localDesc,
            function createUpdateSetLocalDescriptionSuccessCallback() {
                //since the candidates are same we can call the successCallback
                logger.debug("createUpdate: setLocalDescription success ");
                utils.callFunctionIfExist(successCallback, localDesc.sdp);
            },
            function createUpdateSetLocalDescriptionFailureCallback(e) {
                logger.error("createUpdate: setLocalDescription failed : " + e);
                utils.callFunctionIfExist(failureCallback);
            });
    };

    self.createUpdateWithCreateOffer = function(call, successCallback, failureCallback, isVideoStart, localSdp, isIceLite) {
        var peer = call.peer, localDesc;
        logger.debug("create new offer to start the video: isIceLite = " + isIceLite);

        self.replaceLocalStream(call);
        self.setMediaVideo(sdpParser.isSdpHasVideo(localSdp));
        peer.createOffer(
            function createUpdateCreateOfferSuccessCallback(obj) {
                isVideoStart = isVideoStart && self.getVideoSourceAvailable();
                if (isVideoStart) {
                    obj.sdp = sdpParser.updateVideoSdpDirection(obj.sdp, CONSTANTS.WEBRTC.MEDIA_STATE.SEND_RECEIVE);
                } else {
                    obj.sdp = sdpParser.updateVideoSdpDirection(obj.sdp, CONSTANTS.WEBRTC.MEDIA_STATE.RECEIVE_ONLY);
                }

                obj.sdp = sdpParser.performVP8RTCPParameterWorkaround(obj.sdp);
                obj.sdp = sdpParser.setMediaActPass(obj.sdp, self.isDtlsEnabled());
                obj.sdp = sdpParser.fixLocalTelephoneEventPayloadType(call, obj.sdp);
                obj.sdp = sdpParser.replaceOpusCodec(obj.sdp);
                obj.sdp = sdpParser.deleteCryptoZeroFromSdp(obj.sdp);
                obj.sdp = sdpParser.updateAudioCodec(obj.sdp);
                obj.sdp = sdpParser.removeG722Codec(obj.sdp);
                obj.sdp = sdpParser.deleteCryptoFromSdp(obj.sdp, self.isDtlsEnabled());

                localDesc = self.getRtcLibrary().createRTCSessionDescription(CONSTANTS.WEBRTC.RTC_SDP_TYPE.OFFER, obj.sdp);

                peer.setLocalDescription(localDesc,
                    function createUpdateCreateOfferSetLocalDescriptionSuccessCallback() {
                        //since the candidates have changed we will call the successCallback at onNativeIceCandidate
                        //utils.callFunctionIfExist(successCallback);
                        logger.debug("createUpdate: createOffer setLocalDescription success ");
                        webRtcAdaptorUtils.setLocalStreamVideoSendStatus(call, isVideoStart);
                    },
                    function crateUpdateCreateOfferSetLocalDescriptionFailureCallback(e) {
                        logger.debug("createUpdate: createOffer setLocalDescription failed: " + e);
                        utils.callFunctionIfExist(failureCallback);
                    });
            },
            function createUpdateCrateOfferFailureCallback(e) {
                logger.debug("createUpdate: createOffer failed!!: " + e);
                failureCallback();
            },
            {
                'mandatory': {
                    'OfferToReceiveAudio': self.getMediaAudio(),
                    'OfferToReceiveVideo': self.getMediaVideo(),
                    'IceRestart': !isIceLite
                }
            }
        );

    };

    // Native implementation lies on webRtcAdaptor.js
    self.onSessionConnecting = function(call, message) {
        logger.debug("onSessionConnecting");
    };

    // Native implementation lies on webRtcAdaptor.js
    self.onSessionOpened = function(call, message) {
        logger.debug("onSessionOpened");
    };

    // Native implementation lies on webRtcAdaptor.js
    self.onSignalingStateChange = function(call, event) {
        //TODO may need to move the state changes for webrtc here
        logger.debug("Signalling state changed: state= " + event.srcElement.signalingState);
    };

    // Native implementation lies on webRtcAdaptor.js
    self.useDefaultRenderer = function(streamUrl, local) {
        var videoContainer;

        if (self.getDefaultVideoContainer() && self.getDefaultVideoContainer().children.length === 0) {
            //Create divs for the remote and local
            self.getDefaultVideoContainer().innerHTML = "<div style='height:100%;width:100%'></div><div style='position:absolute;bottom:10px;right:10px;height:30%; width:30%;'></div>";
        }

        if (local) {
            if(self.getLocalVideoContainer()){
                videoContainer = self.getLocalVideoContainer();
            } else {
                videoContainer = self.getDefaultVideoContainer().lastElementChild;
            }
        } else {
            if(self.getRemoteVideoContainer()){
                videoContainer = self.getRemoteVideoContainer();
            } else {
                videoContainer = self.getDefaultVideoContainer().firstElementChild;
            }
        }
        self.createStreamRenderer(streamUrl, videoContainer, {muted: local});
    };

    // Native implementation lies on webRtcAdaptor.js
    self.createStreamRenderer = function(streamUrl, container, options){
        var renderer;

        if(!streamUrl || !container){
            return;
        }

        container.innerHTML = "";
        renderer = document.createElement('video');
        renderer.src = streamUrl;

        renderer.style.width = "100%";
        renderer.style.height = "100%";

        renderer.autoplay = "true";

        if (options) {
            if (options.muted) {
                renderer.muted = "true";
            }
        }

        container.appendChild(renderer);
        return renderer;
    };

    // Native implementation lies on webRtcAdaptor.js
    self.onRemoteStreamAdded = function(call, event) {
        var streamUrl;
        logger.debug("onRemoteStreamAdded");
        if (event.stream) {
            streamUrl = self.getRtcLibrary().getURLFromStream(event.stream);
            //TODO Is this neccessary?
            if (event.stream.getVideoTracks()) {
                logger.info("Accessed Video Track");
            }
            if (streamUrl) {
                logger.debug("onRemoteStreamAdded: " + streamUrl);
                if (self.getDefaultVideoContainer()) {
                    self.useDefaultRenderer(streamUrl, false);
                } else if (self.getRemoteVideoContainer()) {
                    self.createStreamRenderer(streamUrl, self.getRemoteVideoContainer());
                } else {
                    self.fireOnStreamAddedEvent(call, streamUrl);
                }
            }
        }
    };

    // Native implementation lies on webRtcAdaptor.js
    self.fireOnStreamAddedEvent = function(call, streamUrl) {
        if (call && call.call && call.call.onStreamAdded) {
            webRtcAdaptorUtils.callSetReceiveVideo(call);
            utils.callFunctionIfExist(call.call.onStreamAdded, streamUrl);
        }
    };

    // Native implementation lies on webRtcAdaptor.js
    self.onRemoteStreamRemoved = function(call, event) {
        logger.debug("onRemoteStreamRemoved");

        //Ersan - Multiple Call Plugin Issue Tries
        //
        //event.stream.stop();
        //if (defaultVideoContainer) {
        //    if(defaultVideoContainer.firstElementChild) {
        //        disposeStreamRenderer(defaultVideoContainer.firstElementChild);
        //    }
        //} else if (remoteVideoContainer) {
        //    disposeStreamRenderer(remoteVideoContainer);
        //}
    };

    // Native implementation lies on webRtcAdaptor.js
    self.clearIceCandidateCollectionTimer = function(call) {
        //This method wasn't implemented in webrtc.js
        clearTimeout(call.iceCandidateCollectionTimer);
        call.iceCandidateCollectionTimer = null;
    };

    // Native implementation lies on webRtcAdaptor.js
    self.onIceCandidate = function(call, event) {
        var sdp;
        if(event.candidate === null) {
            self.clearIceCandidateCollectionTimer(call);
            if(call.successCallback) {
                logger.debug("Null candidate received, invoking successCallback.");
                sdp = call.peer.localDescription.sdp;
                call.successCallback(sdp);
                call.successCallback = null;
            }
        } else {
            call.iceCandidateReceived = true;
            logger.debug("ICE candidate received: sdpMLineIndex = " + event.candidate.sdpMLineIndex
                    + ", candidate = " + event.candidate.candidate + " for call : " + call.id);
        }
    };

    // Native implementation lies on webRtcAdaptor.js
    self.onIceComplete = function(call) {
        var  sdp;
        logger.debug("All ICE candidates received for call : " + call.id);
        self.clearIceCandidateCollectionTimer(call);

        if(call.successCallback) {
            if(call.offer) {
                sdp = call.offer.sdp;
                sdp = sdp.replace("s=","s=genband");
                call.offer = null;      // ABE-1328
            } else if(call.answer) {
                sdp = call.answer.sdp;
                call.answer = null;     // ABE-1328
            }

            sdp = sdpParser.updateH264Level(sdp);

            logger.debug("onIceComplete sdp : " + sdp);

            call.successCallback(sdp);
            call.successCallback = null;
        }
    };

    // Native implementation lies on webRtcAdaptor.js
    self.iceCandidateCollectionTimeoutHandler = function(call) {
        var sdp = call.peer.localDescription.sdp;
        self.clearIceCandidateCollectionTimer(call);

        // set timeout if there is no ice candidate available or 
        // when audio, video port assignment isn't complete
        if ((sdpParser.isSdpHasAudio(sdp) && sdpParser.isSdpHasAudioWithZeroPort(sdp)) ||
                (sdpParser.isSdpHasVideo(sdp) && sdpParser.isSdpHasVideoWithZeroPort(sdp))) {
            logger.debug("Re-setting ice candidate collection timeout: " + fcsConfig.iceCandidateCollectionTimeoutInterval);
            call.iceCandidateCollectionTimer = setTimeout(function() {
                self.iceCandidateCollectionTimeoutHandler(call);
            }, fcsConfig.iceCandidateCollectionTimeoutInterval);
            return;
        }

        if (call.successCallback) {
            logger.debug("Ice candidate collection interrupted after given timeout, invoking successCallback.");
            call.successCallback(sdp);
            call.successCallback = null;
        }
    };

    // Native implementation lies on webRtcAdaptor.js
    self.setupIceCandidateCollectionTimer = function(call) {
        if (fcsConfig.iceCandidateCollectionTimeoutInterval) {
            if (!call.iceCandidateCollectionTimer) {
                logger.debug("Setting ice candidate collection timeout: " + fcsConfig.iceCandidateCollectionTimeoutInterval);
                call.iceCandidateCollectionTimer = setTimeout(function() {
                    self.iceCandidateCollectionTimeoutHandler(call);
                }, fcsConfig.iceCandidateCollectionTimeoutInterval);
            } else {
                logger.trace("Ice candidate collection timer exists.");
            }
        }
    };

    self.oniceconnectionstatechange = function(call, event) {
        logger.debug("ICE connection state change : " + event.currentTarget.iceConnectionState);
        if (call.peer.iceConnectionState === "failed") {
            utils.callFunctionIfExist(call.onIceStateFailure, call);
        }
    };

    // Native implementation lies on webRtcAdaptor.js
    self.createPeer = function(call, onSuccess, onFailure) {
        try {
            var pc, constraints, i, servers = [], iceServerUrl = self.getIceServerUrl(), stunturn;
            if (iceServerUrl instanceof Array) {
                for(i = 0; i<iceServerUrl.length; i++) {
                    servers[i] = iceServerUrl[i];
                }
            } else if (iceServerUrl === null ||  iceServerUrl === ""){
                servers = [];
            } else {
                servers[0] = iceServerUrl;
            }
            stunturn = {iceServers:servers};

            constraints = {"optional": [{"DtlsSrtpKeyAgreement": self.isDtlsEnabled()}]};
            pc = self.getRtcLibrary().createRTCPeerConnection(stunturn, constraints);

            self.setPeerCount(self.getPeerCount() + 1);
            call.peer = pc;

            pc.onconnecting = function(event){
                self.onSessionConnecting(call, event);
            };
            pc.onopen = function(event){
                self.onSessionOpened(call, event);
            };
            pc.onsignalingstatechange = function(event){
                self.onSignalingStateChange(call, event);
            };
            pc.onaddstream = function(event){
                self.onRemoteStreamAdded(call, event);
            };
            pc.onremovestream = function(event){
                self.onRemoteStreamRemoved(call, event);
            };
            pc.onicecandidate = function(event){
                self.setupIceCandidateCollectionTimer(call);
                self.onIceCandidate(call, event);
            };
            pc.onicecomplete = function(){
                self.onIceComplete(call);
            };
            pc.oniceconnectionstatechange = function (event) {
                self.oniceconnectionstatechange(call, event);
            };
            logger.info("create PeerConnection successfully.");
            onSuccess(call);
        } catch(err) {
            logger.error("Failed to create PeerConnection, exception: " + err.message);
            onFailure();
        }
    };

    self.createNewPeerForCall = function(call) {
        var isNewPeerCreated = false, peerCount = self.getPeerCount();
        if (call.peer) {
            call.peer.close();
            self.setPeerCount(peerCount - 1);
        }

        logger.trace("Creating new peer for call: " + call.id);
        self.createPeer(call, function createPeerSuccessCallback() {
            logger.trace("New peer has created for call: " + call.id);
            call.peer.addStream(self.getLocalStream());
            isNewPeerCreated = true;
        }, function createPeerFailureCallback() {
            logger.error("New peer creation has failed!: " + call.id);
        });
        return isNewPeerCreated;
    };

    // Native implementation lies on webRtcAdaptor.js
    self.createNewPeerForCallIfIceChangedInRemoteSdp = function(call, newSdp, oldSdp) {
        var hasNewSdpContainsIceLite = sdpParser.isIceLite(newSdp),
                hasOldSdpContainsIceLite = sdpParser.isIceLite(oldSdp),
                isNewPeerCreated = false;

        // In Peer-Peer call, ice-iceLite change indicates
        // a new peer connection with different ip.
        // As for now, webrtc cannot handle ip change
        // without creating a peer.
        // For ex: Peer-Peer call and MoH.
        //
        // In Non Peer-Peer call, ice-iceLite change does
        // not occur so existing peer object will be used.

        if (hasNewSdpContainsIceLite !== hasOldSdpContainsIceLite) {
            logger.trace("Ice - Ice-Lite change detected in call: " + call.id);
            return self.createNewPeerForCall(call);
        }

        return isNewPeerCreated;
    };

    /*
     *TODO It is weird that this returns empty array in native
     * Native implementation lies on webRtcAdaptor.js
     */
    self.getRemoteVideoResolutions = function() {
        return [];
    };

    /*
     *TODO It is weird that this returns empty array in native
     * Native implementation lies on webRtcAdaptor.js
     */
    self.getLocalVideoResolutions = function() {
        return [];
    };

    // Native implementation lies on webRtcAdaptor.js
    self.refreshVideoRenderer = function() {
        return;
    };

    // Native implementation lies on webRtcAdaptor.js
    self.sendIntraFrame = function() {
        return;
    };

    // Native implementation lies on webRtcAdaptor.js
    self.sendBlackFrame = function() {
        return;
    };

    // Native implementation lies on webRtcAdaptor.js
    // TODO is this function really necessary?
    self.fireOnLocalStreamAddedEvent = function(call) {
        if (call && call.call && call.call.onLocalStreamAdded) {
            utils.callFunctionIfExist(call.call.onLocalStreamAdded);
        }
    };

    //This function is called internally when we make a new call or hold/unhold scenario
    // Native implementation lies on webRtcAdaptor.js
    self.addLocalStream = function(internalCall) {
        var streamUrl, fireEvent = false;
        logger.debug("addLocalStream");

        if (internalCall.localStream) {
            if (webRtcAdaptorUtils.callCanLocalSendVideo(internalCall)) {
                streamUrl = self.getRtcLibrary().getURLFromStream(internalCall.localStream);

                if (streamUrl) {
                    logger.debug("addLocalStream: " + streamUrl);
                    if (self.getDefaultVideoContainer()) {
                        self.useDefaultRenderer(streamUrl, true);
                    } else if (self.getLocalVideoContainer()) {
                        self.createStreamRenderer(streamUrl, self.getLocalVideoContainer(), {muted: true});
                    } else {
                        internalCall.call.localStreamURL = streamUrl;
                    }
                    fireEvent = true;
                }
            } else {
                if (self.getDefaultVideoContainer()) {
                    if(self.getDefaultVideoContainer().lastElementChild) {
                        self.disposeStreamRenderer(self.getDefaultVideoContainer().lastElementChild);
                        fireEvent = true;
                    }
                } else if (self.getLocalVideoContainer()) {
                    self.disposeStreamRenderer(self.getLocalVideoContainer());
                    fireEvent = true;
                }
            }

            if (fireEvent) {
                self.fireOnLocalStreamAddedEvent(internalCall);
            }
        }
    };

    // Native implementation lies on webRtcAdaptor.js
    self.replaceLocalStream = function(internalCall) {
        logger.debug("replaceLocalStream");
        if (internalCall.peer.getLocalStreams().length > 0) {
            internalCall.peer.removeStream(internalCall.peer.getLocalStreams()[0]);
        }
        internalCall.peer.addStream(self.getLocalStream());
        internalCall.localStream = self.getLocalStream();
    };

    // Native implementation lies on webRtcAdaptor.js
    self.disposeStreamRenderer = function(container){
        if(container){
            container.innerHTML = "";
        }
    };

    /**
     * Send DTMF tone
     * Native implementation lies on webRtcAdaptor.js
     *
     * @ignore
     * @name rtc.sendDTMF
     * @function
     * @param {Object} call internalCall
     * @param {String} tone DTMF tone
     */
    self.sendDTMF = function (call, tone) {
        logger.info("sending DTMF tone : " + tone);

        if(!call.dtmfSender) {
            var localAudioTrack = self.getLocalAudioTrack(call.peer);
            if(!localAudioTrack) {
                return;
            }
            call.dtmfSender = call.peer.createDTMFSender(localAudioTrack);
            if(!call.dtmfSender) {
                return;
            }
        }

        if (call.dtmfSender.canInsertDTMF === true) {
            call.dtmfSender.insertDTMF(tone, 400);
        }
        else {
            logger.error("Failed to execute 'insertDTMF' on 'RTCDTMFSender': The 'canInsertDTMF' attribute is false: this sender cannot send DTMF");
        }
    };

    logger.debug('WebRtcAdaptor initialized');
};

var WebRtcAdaptor = function(_super, _decorator, _model) {
    return new WebRtcAdaptorImpl(_super, _decorator, _model, logManager);
};

if (__testonly__) { __testonly__.WebRtcAdaptor = WebRtcAdaptor; }

var WebRtcPluginAdaptorImpl = function(_super, _decorator, _model, _logManager) {
    var self = this,
            logger = _logManager.getLogger("WebRtcPluginAdaptorImpl");

    logger.debug('WebRtcPluginAdaptor initializing');

    utils.compose(_super, self);
    utils.compose(_model, self);

    self.setPluginEnabled(true);

    // Enabler implementation lies on webRtcPluginAdaptor.js
    // initEnablerMedia
    self.initMedia = function(onSuccess, onFailure, options) {
        var mainContainer = document.body,
                rtcPlugin = {},
                verifyPlugin = true,
                mediaErrors = fcs.call.MediaErrors,
                onloadParam,
                size = "1px",
                pluginid = "fcsPlugin",
                applicationType = "application/x-gcfwenabler",
                configuredPluginVersion = self.getPluginVersion(),
                currentPluginVersion,
                currentPluginVersionString;

        logger.debug("Configured plugin version: " + configuredPluginVersion.major + "." + configuredPluginVersion.minor + "." + configuredPluginVersion.current_revision);

        if(options) {
            if (options.localVideoContainer) {
                self.setLocalVideoContainer(options.localVideoContainer);
            }

            if (options.remoteVideoContainer) {
                self.setRemoteVideoContainer(options.remoteVideoContainer);
            }

            if (options.videoContainer) {
                self.setDefaultVideoContainer(options.videoContainer);
            }

            if (options.pluginLogLevel) {
                self.setLogLevel(options.pluginLogLevel);
            }

            if (options.language) {
                self.setLanguage(options.language);
            }
        }
        //Callback for when the plugin is loaded
        self.onFCSPLoaded = function() {

            self.setRtcLibrary(_decorator(rtcPlugin));
            self.getRtcLibrary().checkMediaSourceAvailability(function mediaSourceCallback(mediaSourceInfo) {
                self.setMediaSources(mediaSourceInfo);
            });

            currentPluginVersion = self.getRtcLibrary().getCurrentPluginVersionObject();
            currentPluginVersionString = self.getRtcLibrary().getVersion();
            // prevent multiple init calls
            if (self.isInitialized() || !verifyPlugin) {
                return;
            }
            verifyPlugin = false;
            logger.debug("Plugin callback");

            fcs.setPluginVersion(currentPluginVersionString);
            logger.debug("Installed plugin version: " + currentPluginVersionString);

            if ((currentPluginVersionString.length < 1) ||
                    (currentPluginVersion.major !== configuredPluginVersion.major ||
                            currentPluginVersion.minor !== configuredPluginVersion.minor) ||
                    (currentPluginVersion.revision < configuredPluginVersion.min_revision) ||
                    (currentPluginVersion.revision === configuredPluginVersion.min_revision &&
                 currentPluginVersion.build < configuredPluginVersion.min_build) ) {

                logger.debug("Plugin version not supported");
                utils.callFunctionIfExist(onFailure, mediaErrors.WRONG_VERSION);
            } else {
                self.setInitialized(true);
                if ((currentPluginVersion.revision < configuredPluginVersion.current_revision) ||
                        (currentPluginVersion.revision === configuredPluginVersion.current_revision &&
                     currentPluginVersion.build < configuredPluginVersion.current_build) ) {

                    logger.debug("New plugin version warning");
                    utils.callFunctionIfExist(onFailure, mediaErrors.NEW_VERSION_WARNING);
                } else {
                    utils.callFunctionIfExist(onSuccess,
                                               { "pluginVersion": rtcPlugin.version } );
                }

                self.getRtcLibrary().setLang(self.getLanguage());
            }

            self.setLocalStream(null);
            self.getRtcLibrary().checkMediaSourceAvailability();
        };

        // only check if the function exists, not its type, because in IE it is "object" (host object)
        if (typeof mainContainer.appendChild === 'undefined') {
            logger.debug("Could not inject plugin in container");
            utils.callFunctionIfExist(onFailure, mediaErrors.OPTIONS);
            return;
        }

        rtcPlugin = document.createElement('object');
        onloadParam = document.createElement('param');
        onloadParam.setAttribute("name", "onload");
        onloadParam.setAttribute("value", "onFCSPLoaded");
        rtcPlugin.appendChild(onloadParam);

        rtcPlugin.id = pluginid;
        rtcPlugin.width = rtcPlugin.height = size;

        // Order matters for the following:
        // For IE you need to append first so the dom is available when IE loads the plugin, which happens when the type is set.
        // For FF you need to set the type and then append or the plugin won't load.
        // Chrome seems happy either way.
        try {
            if (navigator.appName === 'Microsoft Internet Explorer') {
                mainContainer.appendChild(rtcPlugin);
                rtcPlugin.type = applicationType;
            } else {
                rtcPlugin.type = applicationType;
                mainContainer.appendChild(rtcPlugin);
            }
        } catch (e) {
            verifyPlugin = false;
            utils.callFunctionIfExist(onFailure, mediaErrors.NOT_FOUND);
        }

        if (verifyPlugin) {
            if (typeof document.getElementById(pluginid).createPeerConnection !== 'undefined') {
                self.onFCSPLoaded();
            } else {
                //if the plugin is not initialized within 7 sec fail
                setTimeout(function() {
                    // for createPeerConnection, only check if it exists. It is "function" in FireFox and "object" in Chrome and IE
                    if (!self.isInitialized()) {
                        if (typeof document.getElementById(pluginid).createPeerConnection === 'undefined') {
                            utils.callFunctionIfExist(onFailure, mediaErrors.NOT_FOUND);
                        } else {
                            self.onFCSPLoaded();
                        }
                    }
                }, 7000);
            }
        }
    };

    // Enabler implementation lies on webRtcPluginAdaptor.js
    self.getUserMedia = function(onSuccess, onFailure) {
        self.getRtcLibrary().checkMediaSourceAvailability(function getUserMediaCallback(mediaSourceInfo) {
            var video_constraints, mediaInfo;
            logger.debug("Plugin version:" + self.getRtcLibrary().version);
            if (mediaSourceInfo) {
                self.setVideoSourceAvailable(mediaSourceInfo.videoSourceAvailable);
                self.setAudioSourceAvailable(mediaSourceInfo.audioSourceAvailable);
            }
            if (self.getMediaVideo() && self.getVideoSourceAvailable()) {
                video_constraints = {
                    mandatory: {
                        "maxWidth": self.getVideoWidth(),
                        "maxHeight": self.getVideoHeight()
                    }
                };
            } else {
                video_constraints = false;
            }

            if (mediaSourceInfo) {
                if (mediaSourceInfo.localStream) {
                    mediaInfo = {
                        "audio": self.getMediaAudio(),
                        "video": self.getMediaVideo() && self.getVideoSourceAvailable()
                    };
                    utils.callFunctionIfExist(onSuccess, mediaInfo);
                    return;
                }
            }

            self.getRtcLibrary().getUserMedia({
                audio: self.getMediaAudio(),
                video: video_constraints
            }, function getUserMediaSuccessCallback(stream) {
                logger.debug("user has granted access to local media.");
                self.setLocalStream(stream);

                self.setInitialized(true);
                mediaInfo = {
                    "audio": self.getMediaAudio(),
                    "video": self.getMediaVideo() && self.getVideoSourceAvailable()
                };
                utils.callFunctionIfExist(onSuccess, mediaInfo);
            }, function getUserMediaFailureCallback(error) {
                logger.debug("Failed to get access to local media. Error code was " + error.code);
                utils.callFunctionIfExist(onFailure, fcs.call.MediaErrors.NOT_ALLOWED);
            });
        });
    };


    /*
     * Add Candidates
     * Enabler implementation lies on webRtcPluginAdaptor.js
     * @param {type} call
     */
    self.addCandidates = function(call) {
        var ma_indx, mv_indx, ma_str = "", mv_str = "", c_indx, candidate, arr, i, reg = /\r\n|\r|\n/;

        ma_indx = call.sdp.indexOf(CONSTANTS.SDP.M_LINE + CONSTANTS.STRING.AUDIO, 0);
        mv_indx = call.sdp.indexOf(CONSTANTS.SDP.M_LINE + CONSTANTS.STRING.VIDEO, 0);

        if (ma_indx !== -1 && mv_indx !== -1) {
            if (ma_indx < mv_indx) {
                ma_str = call.sdp.substring(ma_indx, mv_indx);
                mv_str = call.sdp.substring(mv_indx);
            } else {
                mv_str = call.sdp.substring(mv_indx, ma_indx);
                ma_str = call.sdp.substring(ma_indx);
            }
        } else if (ma_indx !== -1) {
            ma_str = call.sdp.substring(ma_indx);
        } else if (mv_indx !== -1) {
            mv_str = call.sdp.substring(mv_indx);
        }

        if (ma_str !== "") {
            c_indx = ma_str.indexOf("a=candidate", 0);
            if (c_indx !== -1) {
                ma_str = ma_str.substring(c_indx);
                arr = ma_str.split(reg);
                i = 0;
                while (arr[i] && arr[i].indexOf("a=candidate") !== -1) {
                    candidate = self.getRtcLibrary().createRTCIceCandidate(arr[i], CONSTANTS.STRING.AUDIO, 0);
                    call.peer.addIceCandidate(candidate);
                    i++;
                }
            }
        }

        if (mv_str !== "") {
            c_indx = mv_str.indexOf("a=candidate", 0);
            if (c_indx !== -1) {
                mv_str = mv_str.substring(c_indx);
                arr = mv_str.split(reg);
                i = 0;
                while (arr[i] && arr[i].indexOf("a=candidate") !== -1) {
                    candidate = self.getRtcLibrary().createRTCIceCandidate(arr[i], CONSTANTS.STRING.VIDEO, 1);
                    call.peer.addIceCandidate(candidate);
                    i++;
                }

            }
        }
    };

    /*
     * Enabler implementation lies on webRtcPluginAdaptor.js
     * createEnablerOffer to be used when the enabler plugin is enabled.
     */
    self.createOffer = function(call, successCallback, failureCallback, sendInitialVideo) {
        logger.debug("createOffer: sendInitialVideo= " + sendInitialVideo + " state= " + call.peer.signalingState);
        var peer = call.peer, newSdp;

        peer.addStream(self.getLocalStream());
        call.localStream = self.getLocalStream();

        peer.createOffer(function createOfferSuccessCallback(oSdp) {
            sendInitialVideo = sendInitialVideo && self.getVideoSourceAvailable();
            newSdp = sdpParser.getSdpFromObject(oSdp);
            oSdp = null;
            if(sendInitialVideo){
                newSdp = sdpParser.updateVideoSdpDirection(newSdp, CONSTANTS.WEBRTC.MEDIA_STATE.SEND_RECEIVE);
            } else {
                newSdp = sdpParser.updateVideoSdpDirection(newSdp, CONSTANTS.WEBRTC.MEDIA_STATE.RECEIVE_ONLY);
            }

            newSdp = sdpParser.deleteCryptoZeroFromSdp(newSdp);
            newSdp = sdpParser.performVP8RTCPParameterWorkaround(newSdp);
            newSdp = sdpParser.updateAudioCodec(newSdp);
            newSdp = sdpParser.removeG722Codec(newSdp);

            newSdp = sdpParser.deleteCryptoFromSdp(newSdp, self.isDtlsEnabled());
            newSdp = sdpParser.setMediaActPass(newSdp, self.isDtlsEnabled());

            newSdp = sdpParser.fixLocalTelephoneEventPayloadType(call, newSdp);
            newSdp = sdpParser.replaceOpusCodec(newSdp);

            self.muteOnHold(call,false);
            call.offer = self.getRtcLibrary().createRTCSessionDescription(CONSTANTS.WEBRTC.RTC_SDP_TYPE.OFFER, newSdp);
            peer.setLocalDescription(
                    call.offer,
                function createOfferSetLocalDescriptionSuccessCallback(){
                        //Due to stun requests, successCallback will be called by onNativeIceCandidate()
                        webRtcAdaptorUtils.setLocalStreamVideoSendStatus(call, sendInitialVideo);
                    },
                    function createOfferSetLocalDescriptionFailureCallback(error) {
                        logger.error("createOffer: setLocalDescription failed : " + error);
                        utils.callFunctionIfExist(failureCallback, "createOffer: setLocalDescription failed");
                    }
            );

        },function createOfferFailureCallback(error){
            logger.error("createOffer: createOffer failed!! " + error);
            utils.callFunctionIfExist(failureCallback);
        },
                {
                    'mandatory': {
                'OfferToReceiveAudio':self.getMediaAudio(),
                'OfferToReceiveVideo':self.getMediaVideo()
                    }
                });
    };

    /*
     * createEnablerAnswer to be used when the enabler plugin is enabled
     * Enabler implementation lies on webRtcPluginAdaptor.js
     */
    self.createAnswer = function(call, successCallback, failureCallback, isVideoEnabled) {
        logger.debug("createAnswer: isVideoEnabled= " + isVideoEnabled + " state= " + call.peer.signalingState);
        var peer = call.peer, newSdp, newOffer;

        call.sdp = sdpParser.performVP8RTCPParameterWorkaround(call.sdp);
        call.sdp = sdpParser.checkSupportedVideoCodecs(call.sdp, null);
        call.sdp = sdpParser.removeRTXCodec(call.sdp);
        call.sdp = sdpParser.removeG722Codec(call.sdp);
        call.sdp = sdpParser.performG722ParameterWorkaround(call.sdp);
        call.sdp = sdpParser.fixRemoteTelephoneEventPayloadType(call, call.sdp);
        call.sdp = sdpParser.changeDirection(call.sdp, CONSTANTS.WEBRTC.MEDIA_STATE.INACTIVE, CONSTANTS.WEBRTC.MEDIA_STATE.SEND_RECEIVE, CONSTANTS.STRING.AUDIO);
        call.sdp = sdpParser.setMediaActPass(call.sdp, self.isDtlsEnabled());
        call.sdp = sdpParser.deleteFingerprintOrCrypto(call.sdp, self.isDtlsEnabled());

        if (!sdpParser.isSdpVideoSendEnabled(call.sdp)) {
            // delete ssrc only from video, keep audio ssrc to hear audio
            call.sdp = sdpParser.deleteInactiveVideoSsrc(call.sdp);
        }

        peer.setRemoteDescription(
                self.getRtcLibrary().createRTCSessionDescription(CONSTANTS.WEBRTC.RTC_SDP_TYPE.OFFER, call.sdp),
                function createAnswerSetRemoteDescriptionSuccessCallback(){
                    peer.addStream(self.getLocalStream());
                    call.localStream = self.getLocalStream();
                    call.remoteVideoState = sdpParser.getVideoSdpDirection(call.sdp);

                    webRtcAdaptorUtils.callSetReceiveVideo(call);
                    self.addCandidates(call);

                    // set answer SDP to localDescriptor for the offer
                    peer.createAnswer(peer.remoteDescription,
                            function createAnswerSuccessCallback(oSdp) {
                                newSdp = sdpParser.getSdpFromObject(oSdp);
                                oSdp = null;
                                isVideoEnabled = isVideoEnabled && self.getVideoSourceAvailable() && sdpParser.isSdpHasVideo(call.sdp);
                                webRtcAdaptorUtils.setLocalStreamVideoSendStatus(call, isVideoEnabled);

                                if (isVideoEnabled) {
                                    if (sdpParser.isSdpVideoSendEnabled(call.sdp)) {
                                        newSdp = sdpParser.updateVideoSdpDirection(newSdp, CONSTANTS.WEBRTC.MEDIA_STATE.SEND_RECEIVE);
                                    } else {
                                        newSdp = sdpParser.updateVideoSdpDirection(newSdp, CONSTANTS.WEBRTC.MEDIA_STATE.SEND_ONLY);
                                    }
                                } else {
                                    if (sdpParser.isSdpVideoSendEnabled(call.sdp)) {
                                        newSdp = sdpParser.updateVideoSdpDirection(newSdp, CONSTANTS.WEBRTC.MEDIA_STATE.RECEIVE_ONLY);
                                    } else {
                                        newSdp = sdpParser.updateVideoSdpDirection(newSdp, CONSTANTS.WEBRTC.MEDIA_STATE.INACTIVE);
                                    }
                                }

                                logger.debug("doAnswer(plugin) - isSdpEnabled audio : " + sdpParser.isAudioSdpEnabled(newSdp));
                                logger.debug("doAnswer(plugin) - isSdpEnabled video : " + sdpParser.isVideoSdpEnabled(newSdp));

                                if (sdpParser.isSdpHasAudio(newSdp) || sdpParser.isSdpHasVideo(newSdp)) {
                                    newSdp = sdpParser.performVP8RTCPParameterWorkaround(newSdp);

                                    newSdp = sdpParser.setMediaPassive(newSdp, self.isDtlsEnabled());

                                    newSdp = sdpParser.fixLocalTelephoneEventPayloadType(call, newSdp);

                                    newOffer = self.getRtcLibrary().createRTCSessionDescription(CONSTANTS.WEBRTC.RTC_SDP_TYPE.ANSWER, newSdp);
                                    call.answer = newOffer;
                                    self.muteOnHold(call, false);
                                    peer.setLocalDescription(newOffer,
                                            function createAnswerSetLocalDescriptionSuccessCallback() {
                                                //Due to stun requests, successCallback will be called by onNativeIceCandidate()
                                                call.videoOfferSent = sdpParser.isSdpHasVideo(newSdp);
                                            },
                                            function createAnswerSetLocalDescriptionFailureCallback(e) {
                                                logger.error("createAnswer: setLocalDescription failed : " + e);
                                                utils.callFunctionIfExist(failureCallback, "createAnswer setLocalDescription failed");
                                            });
                                } else {
                                    logger.error("createrAnswer: createAnswer failed!!");
                                    utils.callFunctionIfExist(failureCallback, "No codec negotiation");
                                }
                            }, function createAnswerFailureCallback(e) {
                        logger.error("createAnswer: failed!!" + e);
                        utils.callFunctionIfExist(failureCallback, "Session cannot be created ");
                    },
                            {
                                'mandatory': {
                                    'OfferToReceiveAudio': self.getMediaAudio(),
                                    'OfferToReceiveVideo': self.getMediaVideo()
                                }
                            });
                }
            , function createAnswerSetRemoteDescriptionFailureCallback(e){
                logger.error("createAnswer setRemoteDescription failed : " + e);
            });
    };

    /*
     * Enabler implementation lies on webRtcPluginAdaptor.js
     * createEnablerUpdate to be used when the video start or stop
     */
    self.createUpdate = function(call, successCallback, failureCallback, isVideoStart) {
        logger.debug("createEnablerUpdate: isVideoStart= " + isVideoStart + " state= " + call.peer.signalingState);
        var localSdp, isIceLite;

        call.stableRemoteSdp = call.peer.remoteDescription.sdp;
        call.stableLocalSdp = call.peer.localDescription.sdp;
        
        localSdp = sdpParser.getSdpFromObject(call.peer.localDescription);
        isIceLite = call.isIceLite;
        localSdp = sdpParser.incrementVersion(localSdp);
        localSdp = sdpParser.deleteCryptoFromSdp(localSdp, self.isDtlsEnabled());
        localSdp = sdpParser.setMediaActPass(localSdp, self.isDtlsEnabled());
        localSdp = sdpParser.fixLocalTelephoneEventPayloadType(call, localSdp);
        webRtcAdaptorUtils.setLocalStreamVideoSendStatus(call, isVideoStart);

        // for ice-lite scenario:
        // if there is no video m-line in the localSdp, create new offer to start the video
        // if there is video m-line and video is allocated for the first time, only replace the stream
        // for peer-to-peer scenario:
        // if video is allocated for the first time, create new offer

        if (isIceLite) {
            if (sdpParser.isSdpHasVideo(localSdp)) {
                self.createUpdateWithSetLocalDescription(call, successCallback, failureCallback, isVideoStart, localSdp);
            } else {
                self.createUpdateWithCreateOffer(call, successCallback, failureCallback, isVideoStart, localSdp, isIceLite);
            }
        } else {
            if (call.videoOfferSent) {
                self.createUpdateWithSetLocalDescription(call, successCallback, failureCallback, isVideoStart, localSdp);
            } else {
                self.createUpdateWithCreateOffer(call, successCallback, failureCallback, isVideoStart, localSdp, isIceLite);
            }
        }
    };

    /*
     * Enabler implementation lies on webRtcPluginAdaptor.js
     * createEnablerHoldUpdate to be used when the enabler plugin is enabled
     */
    self.createHoldUpdate = function(call, hold, remote_hold_status, successCallback, failureCallback) {
        logger.debug("createHoldUpdate: local hold= " + hold + " remote hold= " + remote_hold_status + " state= " + call.peer.signalingState);
        var peer = call.peer,
                audioDirection,
                videoDirection,
                localSdp,
                externalSdp,
                tempSdp,
                successSdp,
                muteCall,
                obj;
                
        call.stableRemoteSdp = peer.remoteDescription.sdp;
        call.stableLocalSdp = peer.localDescription.sdp;

        tempSdp = sdpParser.incrementVersion(call.peer.localDescription.sdp);

        tempSdp = sdpParser.setMediaActPass(tempSdp, self.isDtlsEnabled());

        //two sdp-s are created here
        //one is to be used by rest-request (externalSdp)
        //one is to set the audio-video direction of the local call (localSdp)
        //this is needed in order to adapt to the rfc (needs sendrecv to sendonly transition) 
        //and to the plugin (needs inactive to mute audio and video connection)
        externalSdp = tempSdp;
        localSdp = tempSdp;

        if (hold || remote_hold_status) {
            audioDirection = sdpParser.getAudioSdpDirection(externalSdp);
            if (audioDirection === CONSTANTS.WEBRTC.MEDIA_STATE.SEND_RECEIVE) {
                externalSdp = sdpParser.updateAudioSdpDirection(externalSdp, CONSTANTS.WEBRTC.MEDIA_STATE.SEND_ONLY);
            } else {
                if (!hold && remote_hold_status) {
                    externalSdp = sdpParser.updateAudioSdpDirection(externalSdp, CONSTANTS.WEBRTC.MEDIA_STATE.SEND_RECEIVE);
                } else {
                    externalSdp = sdpParser.updateAudioSdpDirection(externalSdp, CONSTANTS.WEBRTC.MEDIA_STATE.INACTIVE);
                }
            }
            videoDirection = sdpParser.getVideoSdpDirection(externalSdp);
            if (videoDirection === CONSTANTS.WEBRTC.MEDIA_STATE.SEND_RECEIVE) {
                externalSdp = sdpParser.updateVideoSdpDirection(externalSdp, CONSTANTS.WEBRTC.MEDIA_STATE.SEND_ONLY);
            } else {
                if (!hold && remote_hold_status) {
                    externalSdp = sdpParser.updateVideoSdpDirection(externalSdp, CONSTANTS.WEBRTC.MEDIA_STATE.SEND_RECEIVE);
                } else {
                    externalSdp = sdpParser.updateVideoSdpDirection(externalSdp, CONSTANTS.WEBRTC.MEDIA_STATE.INACTIVE);
                }
            }
            localSdp = sdpParser.updateAudioSdpDirection(externalSdp, CONSTANTS.WEBRTC.MEDIA_STATE.INACTIVE);
            localSdp = sdpParser.updateVideoSdpDirection(localSdp, CONSTANTS.WEBRTC.MEDIA_STATE.INACTIVE);
            muteCall = true;

            //Ersan - Multiple Call Plugin Issue Tries
            //
            //localStream.stop();

            //if (defaultVideoContainer) {
            //    if(defaultVideoContainer.lastElementChild) {
            //        disposeStreamRenderer(defaultVideoContainer.lastElementChild);
            //    }
            //} else if (localVideoContainer) {
            //    disposeStreamRenderer(localVideoContainer);
            //}

        } else {
            externalSdp = sdpParser.updateAudioSdpDirection(externalSdp, CONSTANTS.WEBRTC.MEDIA_STATE.SEND_RECEIVE);
            if (webRtcAdaptorUtils.callCanLocalSendVideo(call)) {
                externalSdp = sdpParser.updateVideoSdpDirection(externalSdp, CONSTANTS.WEBRTC.MEDIA_STATE.SEND_RECEIVE);
                webRtcAdaptorUtils.setLocalStreamVideoSendStatus(call, true);
                //addLocalStream(call);     //Ersan - Multiple Call Plugin Issue Tries
            } else {
                externalSdp = sdpParser.updateVideoSdpDirection(externalSdp, CONSTANTS.WEBRTC.MEDIA_STATE.RECEIVE_ONLY);
                webRtcAdaptorUtils.setLocalStreamVideoSendStatus(call, false);
            }
            localSdp = externalSdp;
            muteCall = false;
        }

        localSdp = sdpParser.fixLocalTelephoneEventPayloadType(call, localSdp);

        obj = self.getRtcLibrary().createRTCSessionDescription(CONSTANTS.WEBRTC.RTC_SDP_TYPE.OFFER, localSdp);

        peer.setLocalDescription(obj,
                function createHoldUpdateSetLocalDescriptionSuccessCallback() {
                    logger.debug("createHoldUpdate: setLocalDescription success");
                    successSdp = sdpParser.updateH264Level(externalSdp);
                    self.muteOnHold(call, muteCall);
                    utils.callFunctionIfExist(successCallback, externalSdp);
                },
                function createHoldUpdateSetLocalDescriptionFailureCallback(e) {
                    logger.error("createHoldUpdate: setLocalDescription failed : " + e);
                    utils.callFunctionIfExist(failureCallback);
                }
        );
    };

    /*
     * Enabler implementation lies on webRtcPluginAdaptor.js
     * processEnabler30Update to be used when the enabler plugin is enabled. (based on processEnabler30Update)
     */
    self.processUpdate = function(call, successCallback, failureCallback, local_hold_status) {
        logger.debug("processUpdate: state= " + call.peer.signalingState);
        var peer = call.peer, localSdp, successSdp, remoteAudioState, remoteVideoState, newPeerCreated = false, peerRemoteSdp,
                remoteDescObj, peerLocalSdp, remoteVideoDirection, callSdpWithNoSsrc;
        
        call.stableRemoteSdp = peer.remoteDescription.sdp;
        call.stableLocalSdp = peer.localDescription.sdp;

        // Meetme workaround. This workaround is added into native function
        call.sdp = sdpParser.addSdpMissingCryptoLine(call.sdp);
        call.sdp = sdpParser.removeSdpPli(call.sdp);
        call.sdp = sdpParser.removeG722Codec(call.sdp);
        call.sdp = sdpParser.performG722ParameterWorkaround(call.sdp);
        call.sdp = sdpParser.performVP8RTCPParameterWorkaround(call.sdp);
        call.sdp = sdpParser.removeRTXCodec(call.sdp);
        call.sdp = sdpParser.fixRemoteTelephoneEventPayloadType(call, call.sdp);
        call.sdp = sdpParser.checkAndRestoreICEParams(call.sdp, call.peer.localDescription.sdp);

        remoteVideoDirection = sdpParser.getVideoSdpDirection(call.sdp);

        self.setMediaVideo(sdpParser.isSdpHasVideo(call.sdp));
        if ((remoteVideoDirection === CONSTANTS.WEBRTC.MEDIA_STATE.INACTIVE) &&
                (call.currentState === "COMPLETED"))
        {
            switch (call.remoteVideoState) {
                case CONSTANTS.WEBRTC.MEDIA_STATE.INACTIVE:
                    call.sdp = sdpParser.updateVideoSdpDirection(call.sdp, CONSTANTS.WEBRTC.MEDIA_STATE.SEND_RECEIVE);
                    break;
                case CONSTANTS.WEBRTC.MEDIA_STATE.RECEIVE_ONLY:
                    call.sdp = sdpParser.updateVideoSdpDirection(call.sdp, CONSTANTS.WEBRTC.MEDIA_STATE.SEND_RECEIVE);
                    break;
                case CONSTANTS.WEBRTC.MEDIA_STATE.SEND_RECEIVE:
                    call.sdp = sdpParser.updateVideoSdpDirection(call.sdp, CONSTANTS.WEBRTC.MEDIA_STATE.RECEIVE_ONLY);
                    break;
            }
        }

        if (local_hold_status) {
            call.sdp = sdpParser.updateAudioSdpDirectionToInactive(call.sdp);
            call.sdp = sdpParser.updateVideoSdpDirectionToInactive(call.sdp);
        }

        call.sdp = sdpParser.changeDirection(call.sdp, CONSTANTS.WEBRTC.MEDIA_STATE.SEND_ONLY, CONSTANTS.WEBRTC.MEDIA_STATE.SEND_RECEIVE, CONSTANTS.STRING.VIDEO);
        webRtcAdaptorUtils.callSetReceiveVideo(call);

        if (peer.signalingState === CONSTANTS.WEBRTC.RTC_SIGNALING_STATE.HAVE_LOCAL_OFFER) {
            call.sdp = sdpParser.checkSupportedVideoCodecs(call.sdp, sdpParser.getSdpFromObject(call.peer.localDescription));

            call.sdp = sdpParser.setMediaPassive(call.sdp, self.isDtlsEnabled());

            remoteDescObj = self.getRtcLibrary().createRTCSessionDescription(CONSTANTS.WEBRTC.RTC_SDP_TYPE.ANSWER, call.sdp);
            peer.setRemoteDescription(
                    remoteDescObj,
                    function processUpdateSetRemoteDescriptionSuccessCallback() {
                        call.remoteVideoState = sdpParser.getVideoSdpDirection(call.sdp);
                        self.addCandidates(call);
                        utils.callFunctionIfExist(successCallback, call.sdp);
                        call.successCallback = null;
                    },
                    function processUpdateSetRemoteDescriptionFailureCallback(e) {
                        logger.debug("processUpdate: setRemoteDescription failed!!" + e);
                        utils.callFunctionIfExist(failureCallback, "processUpdate: setRemoteDescription failed!!");
                    });
        } else {
            call.sdp = sdpParser.checkSupportedVideoCodecs(call.sdp, null);
            //this part is a work-around for webrtc bug
            //set remote description with inactive media lines first.
            //then set remote description with original media lines.

            //keep original values of remote audio and video states
            remoteAudioState = sdpParser.getAudioSdpDirection(call.sdp);
            remoteVideoState = sdpParser.getVideoSdpDirection(call.sdp);

            if (sdpParser.getVideoSdpDirection(call.sdp) === CONSTANTS.WEBRTC.MEDIA_STATE.INACTIVE ||
                    sdpParser.getVideoSdpDirection(call.sdp) === CONSTANTS.WEBRTC.MEDIA_STATE.RECEIVE_ONLY)
            {
                call.sdp = sdpParser.deleteInactiveVideoSsrc(call.sdp);
            }
            //set media lines with sendonly state for work-around
            call.sdp = sdpParser.updateAudioSdpDirectionToInactive(call.sdp);
            call.sdp = sdpParser.updateVideoSdpDirectionToInactive(call.sdp);

            call.sdp = sdpParser.setMediaActPass(call.sdp, self.isDtlsEnabled());
            // delete all ssrc lines from the sdp before setting first remote description
            // set second remote description with all ssrc lines included
            peerRemoteSdp = self.getRtcLibrary().createRTCSessionDescription(CONSTANTS.WEBRTC.RTC_SDP_TYPE.OFFER, call.prevRemoteSdp);
            peerLocalSdp = peer.localDescription.sdp;

            if (self.createNewPeerForCallIfIceChangedInRemoteSdp(call, call.sdp, call.prevRemoteSdp)) {
                peer = call.peer;
                newPeerCreated = true;
            }
            callSdpWithNoSsrc = sdpParser.deleteSsrcFromSdp(call.sdp);

            remoteDescObj = self.getRtcLibrary().createRTCSessionDescription(CONSTANTS.WEBRTC.RTC_SDP_TYPE.OFFER, callSdpWithNoSsrc);
            peer.setRemoteDescription(remoteDescObj,
                    function processUpdateWorkaroundSetRemoteDescriptionSuccessCallback() {
                        logger.debug("processUpdate: workaround setRemoteDescription success");

                        //restore original values
                        call.sdp = sdpParser.updateAudioSdpDirection(call.sdp, remoteAudioState);
                        call.sdp = sdpParser.updateVideoSdpDirection(call.sdp, remoteVideoState);

                        remoteDescObj = self.getRtcLibrary().createRTCSessionDescription(CONSTANTS.WEBRTC.RTC_SDP_TYPE.OFFER, call.sdp);

                        peer.setRemoteDescription(remoteDescObj,
                                function processUpdateSetRemoteDescriptionSuccessCallback() {
                                    logger.debug("processUpdate: setRemoteDescription success");
                                    call.remoteVideoState = sdpParser.getVideoSdpDirection(call.sdp);
                                    self.addCandidates(call);

                                    peer.createAnswer(peer.remoteDescription,
                                            function processUpdateCreateAnswerSuccessCallback(obj) {
                                                logger.debug("processUpdate: isSdpEnabled audio= " + sdpParser.isAudioSdpEnabled(obj.sdp));
                                                logger.debug("processUpdate: isSdpEnabled video= " + sdpParser.isVideoSdpEnabled(obj.sdp));

                                                if (sdpParser.isAudioSdpEnabled(obj.sdp) || sdpParser.isVideoSdpEnabled(obj.sdp)) {
                                                    if (sdpParser.getAudioSdpDirection(call.sdp) === CONSTANTS.WEBRTC.MEDIA_STATE.SEND_ONLY) {
                                                        logger.debug("processUpdate: audio sendonly -> recvonly");
                                                        obj.audioDirection = CONSTANTS.WEBRTC.MEDIA_STATE.RECEIVE_ONLY;
                                                    }

                                                    if (sdpParser.getAudioSdpDirection(call.sdp) === CONSTANTS.WEBRTC.MEDIA_STATE.INACTIVE) {
                                                        obj.audioDirection = CONSTANTS.WEBRTC.MEDIA_STATE.INACTIVE;
                                                    }

                                                    if (sdpParser.getVideoSdpDirection(call.sdp) === CONSTANTS.WEBRTC.MEDIA_STATE.INACTIVE) {
                                                        obj.videoDirection = CONSTANTS.WEBRTC.MEDIA_STATE.INACTIVE;
                                                    }

                                                    if (sdpParser.getVideoSdpDirection(call.sdp) === CONSTANTS.WEBRTC.MEDIA_STATE.RECEIVE_ONLY) {
                                                        if (webRtcAdaptorUtils.callCanLocalSendVideo(call)) {
                                                            obj.videoDirection = CONSTANTS.WEBRTC.MEDIA_STATE.SEND_ONLY;
                                                        } else {
                                                            obj.videoDirection = CONSTANTS.WEBRTC.MEDIA_STATE.INACTIVE;
                                                        }
                                                    } else if (webRtcAdaptorUtils.callCanLocalSendVideo(call)) {
                                                        obj.videoDirection = CONSTANTS.WEBRTC.MEDIA_STATE.SEND_RECEIVE;
                                                    } else {
                                                        obj.videoDirection = CONSTANTS.WEBRTC.MEDIA_STATE.RECEIVE_ONLY;
                                                    }

                                                    //TODO: Since there is no setter method for obj.sdp from the plugin side,
                                                    //      we create a temporary local variable and pass obj.sdp's value into it.
                                                    //      Rewrite the below part of code when the setter method is applied to the plugin side
                                                    localSdp = sdpParser.getSdpFromObject(obj);
                                                    obj = null;
                                                    localSdp = sdpParser.updateVersion(peerLocalSdp, localSdp);
                                                    localSdp = sdpParser.performVP8RTCPParameterWorkaround(localSdp);

                                                    localSdp = sdpParser.checkIceParamsLengths(localSdp, call.sdp);
                                                    localSdp = sdpParser.setMediaPassive(localSdp, self.isDtlsEnabled());

                                                    localSdp = sdpParser.fixLocalTelephoneEventPayloadType(call, localSdp);
                                                    if (newPeerCreated) {
                                                        localSdp = sdpParser.copyCandidatesToTheNewLocalSdp(peerLocalSdp, localSdp);
                                                        newPeerCreated = false;
                                                    }

                                                    call.answer = self.getRtcLibrary().createRTCSessionDescription(CONSTANTS.WEBRTC.RTC_SDP_TYPE.ANSWER, localSdp);

                                                    peer.setLocalDescription(call.answer,
                                                            function processUpdateSetLocalDescriptionSuccessCallback() {
                                                                if (sdpParser.isMediaPortReady(localSdp)) {
                                                                    logger.debug("processUpdate: setLocalDescription success");
                                                                    successSdp = sdpParser.updateH264Level(localSdp);

                                                                    if (local_hold_status) {
                                                                        successSdp = sdpParser.updateAudioSdpDirection(successSdp, CONSTANTS.WEBRTC.MEDIA_STATE.INACTIVE);
                                                                        successSdp = sdpParser.updateVideoSdpDirection(successSdp, CONSTANTS.WEBRTC.MEDIA_STATE.INACTIVE);
                                                                    }

                                                                    utils.callFunctionIfExist(successCallback, successSdp);
                                                                    call.successCallback = null;
                                                                    call.answer = null;     // ABE-1328
                                                                }
                                                            },
                                                            function processUpdateSetLocalDescriptionFailureCallback(e) {
                                                                logger.debug("processUpdate: setLocalDescription failed: " + e);
                                                                utils.callFunctionIfExist(failureCallback, "processUpdate: setlocalDescription failed!!");
                                                                call.answer = null;     // ABE-1328
                                                            });
                                                } else {
                                                    logger.debug("processUpdate: createAnswer failed!!");
                                                    utils.callFunctionIfExist(failureCallback, "No codec negotiation");

                                                }
                                            },
                                            function processUpdateCreateAnswerFailureCallback(e) {
                                                logger.debug("processUpdate: createAnswer failed!! " + e);
                                                utils.callFunctionIfExist(failureCallback, "Session cannot be created");
                                            },
                                            {
                                                'mandatory': {
                                                    'OfferToReceiveAudio': self.getMediaAudio(),
                                                    'OfferToReceiveVideo': self.getMediaVideo()
                                                }
                                            }
                                    );
                                },
                                function processUpdateSetRemoteDescriptionSuccessCallback(e) {
                                    logger.debug("processUpdate: setRemoteDescription failed: " + e);
                                    utils.callFunctionIfExist(failureCallback, "processUpdate: setRemoteDescription failed!!");
                                });
                    },
                    function processUpdateWorkaroundSetRemoteDescriptionFailureCallback(e) {
                        logger.debug("processUpdate: workaround setRemoteDescription failed!!" + e);
                        utils.callFunctionIfExist(failureCallback, "processUpdate: workaround setRemoteDescription failed!!");
                    }
            );
        }
    };

    /*
     * Enabler implementation lies on webRtcPluginAdaptor.js
     * processEnabler30Answer to be used when the enabler plugin is enabled
     */
    self.processAnswer = function(call, onSuccess, onFail) {
        logger.debug("processAnswer: state= " + call.peer.signalingState);

        var restoreSdpOnSuccess, audioWorkaroundOnSuccess, onSuccessAfterWorkarounds,
                remoteVideoDirection, localVideoDirection;

        onSuccessAfterWorkarounds = function() {
            call.remoteVideoState = sdpParser.getVideoSdpDirection(call.sdp);
            call.videoOfferSent = sdpParser.isSdpHasVideo(call.sdp);
            self.addCandidates(call);
            utils.callFunctionIfExist(onSuccess);
        };

        call.sdp = sdpParser.checkSupportedVideoCodecs(call.sdp, sdpParser.getSdpFromObject(call.peer.localDescription));
        call.sdp = sdpParser.performVideoPortZeroWorkaround(call.sdp);
        call.sdp = sdpParser.removeSdpPli(call.sdp);
        call.sdp = sdpParser.removeG722Codec(call.sdp);
        call.sdp = sdpParser.performG722ParameterWorkaround(call.sdp);
        call.sdp = sdpParser.performVP8RTCPParameterWorkaround(call.sdp);
        call.sdp = sdpParser.performVP8BandwidthWorkaround(call.sdp);
        call.sdp = sdpParser.removeRTXCodec(call.sdp);
        call.sdp = sdpParser.fixRemoteTelephoneEventPayloadType(call, call.sdp);

        webRtcAdaptorUtils.callSetReceiveVideo(call);

        remoteVideoDirection = sdpParser.getVideoSdpDirection(call.sdp);
        localVideoDirection = sdpParser.getVideoSdpDirection(sdpParser.getSdpFromObject(call.peer.localDescription));

        // this is needed for buggy webrtc api. when term answers with video to audio only call
        // this scenario does not work without converting to sendrecv
        logger.debug("processAnswer: ice-lite: do remote video escalation");
        call.sdp = sdpParser.changeDirection(call.sdp, CONSTANTS.WEBRTC.MEDIA_STATE.SEND_ONLY, CONSTANTS.WEBRTC.MEDIA_STATE.SEND_RECEIVE);

        if (localVideoDirection === CONSTANTS.WEBRTC.MEDIA_STATE.RECEIVE_ONLY &&
                (remoteVideoDirection === CONSTANTS.WEBRTC.MEDIA_STATE.INACTIVE || remoteVideoDirection === CONSTANTS.WEBRTC.MEDIA_STATE.RECEIVE_ONLY)) {

            // Audio <--> Audio : apply workaround step 1

            // delete ssrc only from video, keep audio ssrc to hear audio
            call.sdp = sdpParser.deleteInactiveVideoSsrc(call.sdp);

            self.performOrigAudioWorkaround(call, onSuccessAfterWorkarounds, onFail);

        } else if (localVideoDirection === CONSTANTS.WEBRTC.MEDIA_STATE.SEND_RECEIVE &&
                (remoteVideoDirection === CONSTANTS.WEBRTC.MEDIA_STATE.RECEIVE_ONLY || remoteVideoDirection === CONSTANTS.WEBRTC.MEDIA_STATE.INACTIVE)) {

            // delete ssrc only from video, keep audio ssrc to hear audio
            call.sdp = sdpParser.deleteInactiveVideoSsrc(call.sdp);
            // Audio-Video <--> Audio : apply workaround step 1 & 2

            audioWorkaroundOnSuccess = function() {
                self.restoreActualSdp(call, onSuccessAfterWorkarounds, onFail, localVideoDirection, remoteVideoDirection);
            };

            //performEnablerOrigAudioWorkaround(call, audioWorkaroundOnSuccess, onFail);
            self.performOrigAudioWorkaround(call, onSuccessAfterWorkarounds, onFail);

        } else if (localVideoDirection === CONSTANTS.WEBRTC.MEDIA_STATE.RECEIVE_ONLY &&
                (remoteVideoDirection === CONSTANTS.WEBRTC.MEDIA_STATE.SEND_ONLY || remoteVideoDirection === CONSTANTS.WEBRTC.MEDIA_STATE.SEND_RECEIVE)) {

            // Audio  <--> Audio-Video

            restoreSdpOnSuccess = function() {
                self.performVideoStartWorkaround(call, onSuccessAfterWorkarounds, onFail);
            };

            audioWorkaroundOnSuccess = function() {
                self.restoreActualSdp(call, restoreSdpOnSuccess, onFail, localVideoDirection, remoteVideoDirection);
            };

            //performEnablerOrigAudioWorkaround(call, audioWorkaroundOnSuccess, onFail);
            self.performOrigAudioWorkaround(call, restoreSdpOnSuccess, onFail);

        } else {

            // Audio-Video <--> Audio-Video
            // there is remote video, no need for orig side workaround

            call.sdp = sdpParser.setMediaPassive(call.sdp, self.isDtlsEnabled());

            call.peer.setRemoteDescription(
                    self.getRtcLibrary().createRTCSessionDescription(CONSTANTS.WEBRTC.RTC_SDP_TYPE.ANSWER, call.sdp),
                    function() {
                        logger.debug("processAnswer: setRemoteDescription success");
                        utils.callFunctionIfExist(onSuccessAfterWorkarounds);
                    },
                    function(e) {
                        logger.debug("processAnswer: setRemoteDescription failed: " + e);
                        utils.callFunctionIfExist(onFail);
                    });
        }
    };

    /*
     * Enabler implementation lies on webRtcPluginAdaptor.js
     * performEnablerOrigAudioWorkaround - orig side can't hear audio when term side didn't start with video
     */
    self.performOrigAudioWorkaround = function(call, onSuccess, onFail) {
        logger.debug("Workaround for orig side to hear audio");

        call.sdp = sdpParser.setMediaPassive(call.sdp, self.isDtlsEnabled());

        call.peer.setRemoteDescription(
                self.getRtcLibrary().createRTCSessionDescription(CONSTANTS.WEBRTC.RTC_SDP_TYPE.ANSWER, call.sdp), function() {
            logger.debug("performNativeOrigAudioWorkaround: setRemoteDescription success");
            utils.callFunctionIfExist(onSuccess);
        }, function(e) {
            logger.debug("performNativeOrigAudioWorkaround: setRemoteDescription failed: " + e);
            utils.callFunctionIfExist(onFail);
        });
    };

    /*
     * Enabler implementation lies on webRtcPluginAdaptor.js
     * restoreActualSdp - local and remote sdp's were manipulated to play audio. restore them here.
     */
    self.restoreActualSdp = function(call, onSuccess, onFail, localVideoDirection, remoteVideoDirection) {
        logger.debug("Restore manipulated local and remote sdp's");
        var newLocalSdp = sdpParser.getSdpFromObject(call.peer.localDescription);
        newLocalSdp = sdpParser.updateSdpDirection(newLocalSdp, CONSTANTS.STRING.VIDEO, localVideoDirection);

        newLocalSdp = sdpParser.setMediaActPass(newLocalSdp, self.isDtlsEnabled());
        call.sdp = sdpParser.setMediaPassive(call.sdp, self.isDtlsEnabled());

        newLocalSdp = sdpParser.fixLocalTelephoneEventPayloadType(call, newLocalSdp);

        // set local sdp with original direction
        call.peer.setLocalDescription(
                self.getRtcLibrary().createRTCSessionDescription(CONSTANTS.WEBRTC.RTC_SDP_TYPE.OFFER, newLocalSdp), function() {
            logger.debug("restoreActualSdp: setLocalDescription success");
            // restore actual remote sdp
            call.sdp = sdpParser.changeDirection(call.sdp, CONSTANTS.WEBRTC.RTC_SDP_TYPE.SEND_ONLY, remoteVideoDirection, CONSTANTS.STRING.VIDEO);
            call.sdp = sdpParser.changeDirection(call.sdp, CONSTANTS.WEBRTC.RTC_SDP_TYPE.SEND_ONLY, CONSTANTS.WEBRTC.RTC_SDP_TYPE.SEND_RECEIVE, CONSTANTS.STRING.VIDEO);

            // this is required just before setRemoteDescription
            webRtcAdaptorUtils.callSetReceiveVideo(call);

            call.peer.setRemoteDescription(
                    self.getRtcLibrary().createRTCSessionDescription(CONSTANTS.WEBRTC.RTC_SDP_TYPE.ANSWER, call.sdp), function() {
                logger.debug("restoreActualSdp: setRemoteDescription success");
                utils.callFunctionIfExist(onSuccess);
            }, function(e) {
                logger.debug("restoreActualSdp: setRemoteDescription failed: " + e);
                utils.callFunctionIfExist(onFail);
            });
        }, function(e) {
            logger.debug("restoreActualSdp: setLocalDescription failed: " + e);
            utils.callFunctionIfExist(onFail);
        });
    };

    /*
     * Enabler implementation lies on webRtcPluginAdaptor.js
     * performEnablerVideoStartWorkaround - term side cannot see orig's video
     */
    self.performVideoStartWorkaround = function(call, onSuccess, onFail) {
        var peer = call.peer, remoteAudioState, remoteVideoState,
                callSdpWithNoSsrc;

        logger.debug("Workaround to play video");

        call.sdp = sdpParser.addSdpMissingCryptoLine(call.sdp);

        remoteAudioState = sdpParser.getSdpDirectionLogging(call.sdp, CONSTANTS.STRING.AUDIO, false);
        remoteVideoState = sdpParser.getSdpDirectionLogging(call.sdp, CONSTANTS.STRING.VIDEO, false);

        call.sdp = sdpParser.updateSdpDirection(call.sdp, CONSTANTS.STRING.AUDIO, CONSTANTS.WEBRTC.MEDIA_STATE.INACTIVE);
        call.sdp = sdpParser.updateSdpDirection(call.sdp, CONSTANTS.STRING.VIDEO, CONSTANTS.WEBRTC.MEDIA_STATE.INACTIVE);

        call.sdp = sdpParser.setMediaActPass(call.sdp, self.isDtlsEnabled());

        callSdpWithNoSsrc = sdpParser.deleteSsrcFromSdp(call.sdp);

        peer.setRemoteDescription(
                self.getRtcLibrary().createRTCSessionDescription(CONSTANTS.WEBRTC.RTC_SDP_TYPE.OFFER, callSdpWithNoSsrc), function() {
            logger.debug("performVideoStartWorkaround: first setRemoteDescription success");

            // restore original values
            call.sdp = sdpParser.updateSdpDirection(call.sdp, CONSTANTS.STRING.AUDIO, remoteAudioState);
            call.sdp = sdpParser.updateSdpDirection(call.sdp, CONSTANTS.STRING.VIDEO, remoteVideoState);

            peer.setRemoteDescription(
                    self.getRtcLibrary().createRTCSessionDescription(CONSTANTS.WEBRTC.RTC_SDP_TYPE.OFFER, call.sdp), function() {
                logger.debug("performVideoStartWorkaround: second setRemoteDescription success");
                peer.createAnswer(peer.remoteDescription, function(obj) {
                    var localSdp = sdpParser.getSdpFromObject(obj);

                    if (sdpParser.getSdpDirectionLogging(call.sdp, CONSTANTS.STRING.AUDIO, false) === CONSTANTS.WEBRTC.MEDIA_STATE.INACTIVE) {
                        localSdp = sdpParser.updateSdpDirection(localSdp, CONSTANTS.STRING.AUDIO, CONSTANTS.WEBRTC.MEDIA_STATE.INACTIVE);
                    }

                    if (call.remoteVideoState === CONSTANTS.WEBRTC.MEDIA_STATE.INACTIVE) {
                        localSdp = sdpParser.updateSdpDirection(localSdp, CONSTANTS.STRING.VIDEO, CONSTANTS.WEBRTC.MEDIA_STATE.INACTIVE);
                    } else if (webRtcAdaptorUtils.callCanLocalSendVideo(call)) {
                        localSdp = sdpParser.updateSdpDirection(localSdp, CONSTANTS.STRING.VIDEO, CONSTANTS.WEBRTC.MEDIA_STATE.SEND_RECEIVE);
                    } else {
                        localSdp = sdpParser.updateSdpDirection(localSdp, CONSTANTS.STRING.VIDEO, CONSTANTS.WEBRTC.MEDIA_STATE.RECEIVE_ONLY);
                    }

                    localSdp = sdpParser.performVP8RTCPParameterWorkaround(localSdp);
                    self.fireOnStreamAddedEvent(call);

                    localSdp = sdpParser.checkAndRestoreICEParams(localSdp, call.sdp);

                    localSdp = sdpParser.setMediaPassive(localSdp, self.isDtlsEnabled());

                    localSdp = sdpParser.fixLocalTelephoneEventPayloadType(call, localSdp);

                    peer.setLocalDescription(
                            self.getRtcLibrary().createRTCSessionDescription(CONSTANTS.WEBRTC.RTC_SDP_TYPE.ANSWER, localSdp), function() {
                        logger.debug("performVideoStartWorkaround: setlocalDescription success");
                        utils.callFunctionIfExist(onSuccess);
                    }, function(e) {
                        logger.debug("performVideoStartWorkaround: setlocalDescription failed!!" + e);
                        utils.callFunctionIfExist(onFail, "performVideoStartWorkaround: setlocalDescription failed!!");
                    });
                }, function(e) {
                    logger.debug("performVideoStartWorkaround: createAnswer failed!! " + e);
                    utils.callFunctionIfExist(onFail, "Session cannot be created");
                }, {
                    'mandatory': {
                        'OfferToReceiveAudio': self.getMediaAudio(),
                        'OfferToReceiveVideo': self.getMediaVideo()
                    }
                });
            }, function(e) {
                logger.debug("performVideoStartWorkaround: second setRemoteDescription failed!!" + e);
                utils.callFunctionIfExist(onFail, "performVideoStartWorkaround: second setRemoteDescription failed!!");
            });
        }, function(e) {
            logger.debug("performVideoStartWorkaround: first setRemoteDescription failed!!" + e);
            utils.callFunctionIfExist(onFail, "performVideoStartWorkaround: first setRemoteDescription failed!!");
        });
    };

    /*
     * Enabler implementation lies on webRtcPluginAdaptor.js
     * processPreAnswer to be used when the enabler plugin is enabled
     */
    self.processPreAnswer = function(call) {
        var ans;

        logger.debug("processPreAnswer: state= " + call.peer.signalingState);

        call.sdp = sdpParser.checkSupportedVideoCodecs(call.sdp, sdpParser.getSdpFromObject(call.peer.localDescription));
        call.sdp = sdpParser.removeG722Codec(call.sdp);
        call.sdp = sdpParser.performG722ParameterWorkaround(call.sdp);
        call.sdp = sdpParser.performVP8RTCPParameterWorkaround(call.sdp);
        call.sdp = sdpParser.removeRTXCodec(call.sdp);
        call.sdp = sdpParser.fixRemoteTelephoneEventPayloadType(call, call.sdp);

        webRtcAdaptorUtils.callSetReceiveVideo(call);

        self.addCandidates(call);
        ans = self.getRtcLibrary().createRTCSessionDescription(CONSTANTS.WEBRTC.RTC_SDP_TYPE.PRANSWER, call.sdp);

        call.peer.setRemoteDescription(ans,
                function processPreAnswerSetRemoteDescriptionSuccessCallback() {
                    call.remoteVideoState = sdpParser.getVideoSdpDirection(call.sdp);
                    logger.debug("processPreAnswer: setRemoteDescription success");
                },
                function processPreAnswerSetRemoteDescriptionFailureCallback(e) {
                    logger.debug("processPreAnswer: setRemoteDescription failed: " + e);
                });
    };

    /*
     * Enabler implementation lies on webRtcPluginAdaptor.js
     * processEnablerRespond
     */
    self.processRespond = function(call, onSuccess, onFailure, isJoin) {
        var remoteVideoDirection;

        logger.debug("processRespond: state= " + call.peer.signalingState);

        call.sdp = sdpParser.checkSupportedVideoCodecs(call.sdp, sdpParser.getSdpFromObject(call.peer.localDescription));
        call.sdp = sdpParser.removeSdpPli(call.sdp);
        call.sdp = sdpParser.removeG722Codec(call.sdp);
        call.sdp = sdpParser.performG722ParameterWorkaround(call.sdp);
        call.sdp = sdpParser.performVP8RTCPParameterWorkaround(call.sdp);
        call.sdp = sdpParser.performVP8BandwidthWorkaround(call.sdp);
        call.sdp = sdpParser.removeRTXCodec(call.sdp);
        call.sdp = sdpParser.fixRemoteTelephoneEventPayloadType(call, call.sdp);

        remoteVideoDirection = sdpParser.getVideoSdpDirection(call.sdp);

        webRtcAdaptorUtils.callSetReceiveVideo(call);

        if ((remoteVideoDirection === CONSTANTS.WEBRTC.MEDIA_STATE.INACTIVE) && (call.currentState === "COMPLETED"))
        {
            switch (call.remoteVideoState) {
                case CONSTANTS.WEBRTC.MEDIA_STATE.INACTIVE:
                    call.sdp = sdpParser.updateSdpDirection(call.sdp, CONSTANTS.STRING.VIDEO, CONSTANTS.WEBRTC.MEDIA_STATE.RECEIVE_ONLY);
                    break;
                case CONSTANTS.WEBRTC.MEDIA_STATE.RECEIVE_ONLY:
                    call.sdp = sdpParser.updateSdpDirection(call.sdp, CONSTANTS.STRING.VIDEO, CONSTANTS.WEBRTC.MEDIA_STATE.RECEIVE_ONLY);
                    break;
            }
        }

        call.remoteVideoState = sdpParser.getVideoSdpDirection(call.sdp);
        call.sdp = sdpParser.changeDirection(call.sdp, CONSTANTS.WEBRTC.MEDIA_STATE.SEND_ONLY, CONSTANTS.WEBRTC.MEDIA_STATE.SEND_RECEIVE, CONSTANTS.STRING.VIDEO);
        if (isJoin) {
            call.sdp = sdpParser.changeDirection(call.sdp, CONSTANTS.WEBRTC.MEDIA_STATE.RECEIVE_ONLY, CONSTANTS.WEBRTC.MEDIA_STATE.SEND_RECEIVE, CONSTANTS.STRING.AUDIO);
            self.muteOnHold(call, false);
        }

        if (call.peer.signalingState === CONSTANTS.WEBRTC.RTC_SIGNALING_STATE.STABLE) {
            //if we are in stable state we should not change remotedescription
            utils.callFunctionIfExist(onSuccess);
            return;
        }

        call.sdp = sdpParser.setMediaPassive(call.sdp, self.isDtlsEnabled());

        if (sdpParser.getVideoSdpDirection(call.sdp) === CONSTANTS.WEBRTC.MEDIA_STATE.INACTIVE ||
                sdpParser.getVideoSdpDirection(call.sdp) === CONSTANTS.WEBRTC.MEDIA_STATE.RECEIVE_ONLY)
        {
            call.sdp = sdpParser.deleteInactiveVideoSsrc(call.sdp);
        }

        call.peer.setRemoteDescription(
                self.getRtcLibrary().createRTCSessionDescription(CONSTANTS.WEBRTC.RTC_SDP_TYPE.ANSWER, call.sdp),
                function() {
                    logger.debug("processRespond: setRemoteDescription success");
                    var onSuccessAfterWorkaround = function() {
                        call.remoteVideoState = sdpParser.getVideoSdpDirection(call.sdp);
                        call.videoOfferSent = true;
                        self.addCandidates(call);
                        utils.callFunctionIfExist(onSuccess);
                    };
                    // utils.callFunctionIfExist(onSuccessAfterWorkaround);
                    self.performVideoStartWorkaround(call, onSuccessAfterWorkaround, onFailure);
                },
                function(e) {
                    logger.debug("processRespond: setRemoteDescription failed: " + e);
                    utils.callFunctionIfExist(onFailure);
                });
    };

    self.createReOffer = function(call, successCallback, failureCallback, iceRestart) {
        var peer = call.peer, newSdp, successSdp, answerSdp;
        peer.createOffer(
                function processSlowStartCreateOfferSuccessCallback(oSdp) {
                    newSdp = sdpParser.getSdpFromObject(oSdp);
                    oSdp = null;

                    newSdp = sdpParser.deleteCryptoZeroFromSdp(newSdp);
                    newSdp = sdpParser.performVP8RTCPParameterWorkaround(newSdp);
                    newSdp = sdpParser.updateAudioCodec(newSdp);
                    newSdp = sdpParser.removeG722Codec(newSdp);
                    newSdp = sdpParser.deleteCryptoFromSdp(newSdp, self.isDtlsEnabled());
                    newSdp = sdpParser.setMediaActPass(newSdp, self.isDtlsEnabled());
                    newSdp = sdpParser.fixLocalTelephoneEventPayloadType(call, newSdp);
                    newSdp = sdpParser.replaceOpusCodec(newSdp);

                    answerSdp = self.getRtcLibrary().createRTCSessionDescription(CONSTANTS.WEBRTC.RTC_SDP_TYPE.OFFER, newSdp);
                    call.offer = answerSdp;

                    peer.setLocalDescription(
                            answerSdp,
                            function processSlowStartSetLocalDescriptionSuccessCallback() {
                                logger.debug("create ReOffer setLocalDescription success");
                                successSdp = sdpParser.getSdpFromObject(answerSdp);
                                if (sdpParser.isMediaPortReady(successSdp)) {
                                    if (call.successCallback) {
                                        utils.callFunctionIfExist(successCallback, successSdp);
                                        call.successCallback = null;
                                        call.offer = null;
                                        call.answer = null;
                                    }
                                }
                            },
                            function processSlowStartSetLocalDescriptionFailureCallback(error) {
                                utils.callFunctionIfExist(failureCallback, "screate ReOffer setLocalDescription failed: " + error);
                            });
                },
                function processSlowStartCreateOfferFailureCallback(error) {
                    logger.error("create ReOffer failed!! " + error);
                    utils.callFunctionIfExist(failureCallback);
                },
                {
                    'mandatory': {
                        'OfferToReceiveAudio': self.getMediaAudio(),
                        'OfferToReceiveVideo': self.getMediaVideo(),
                        IceRestart: iceRestart
                    }
                });
    };

    /*
     * Enabler implementation lies on webRtcPluginAdaptor.js
     * processEnablerHold to be used when the enabler plugin 30 is enabled.
     */
    self.processHold = function(call, hold, local_hold_status, successCallback, failureCallback) {
        logger.debug("processHold: local hold= " + local_hold_status + " remote hold= " + hold + " state= " + call.peer.signalingState);
        var peer = call.peer, updateSdp, audioDirection, videoDirection, answerSdp,
                successSdp, peerRemoteSdp, prevRemoteSdp, peerLocalSdp, localSdp, newPeerCreated = false;
        
        call.stableRemoteSdp = peer.remoteDescription.sdp;
        call.stableLocalSdp = peer.localDescription.sdp;

        if (!local_hold_status && !hold) {
            self.muteOnHold(call, false);
        }

        call.sdp = sdpParser.checkSupportedVideoCodecs(call.sdp, null);
        call.sdp = sdpParser.performVideoPortZeroWorkaround(call.sdp);
        call.sdp = sdpParser.checkAndRestoreICEParams(call.sdp, sdpParser.getSdpFromObject(call.peer.localDescription));
        call.sdp = sdpParser.removeG722Codec(call.sdp);
        call.sdp = sdpParser.performG722ParameterWorkaround(call.sdp);
        call.sdp = sdpParser.performVP8RTCPParameterWorkaround(call.sdp);
        call.sdp = sdpParser.fixRemoteTelephoneEventPayloadType(call, call.sdp);
        call.sdp = sdpParser.performVP8BandwidthWorkaround(call.sdp);

        call.sdp = sdpParser.setMediaActPass(call.sdp, self.isDtlsEnabled());

        // is this necessary?, if so below code should be revised,
        // as it is not changing directions in the sdp
//        if (!sdpParser.isSdpContainsAudioDirection(call.sdp) &&
//                !sdpParser.isSdpContainsVideoDirection(call.sdp)) {
//            if (hold || local_hold_status) {
//                logger.debug("processHold: call.sdp has no direction so setting as inactive for " + (hold ? "remote hold" : "remote unhold with local hold"));
//                call.sdp = sdpParser.updateAudioSdpDirectionToInactive(call.sdp);
//                call.sdp = sdpParser.updateVideoSdpDirectionToInactive(call.sdp);
//            } else {
//                logger.debug("processHold: call.sdp has no direction so setting as sendrecv for unhold");
//                call.sdp = sdpParser.updateAudioSdpDirection(call.sdp, CONSTANTS.WEBRTC.MEDIA_STATE.SEND_RECEIVE);
//                call.sdp = sdpParser.updateVideoSdpDirection(call.sdp, CONSTANTS.WEBRTC.MEDIA_STATE.SEND_RECEIVE);
//            }
//        }

        audioDirection = sdpParser.getAudioSdpDirection(call.sdp);
        videoDirection = sdpParser.getVideoSdpDirection(call.sdp);

        updateSdp = self.getRtcLibrary().createRTCSessionDescription(CONSTANTS.WEBRTC.RTC_SDP_TYPE.OFFER, call.sdp);
        peerLocalSdp = sdpParser.getSdpFromObject(peer.localDescription);
        prevRemoteSdp = sdpParser.deleteSsrcFromSdp(call.prevRemoteSdp);
        peerRemoteSdp = self.getRtcLibrary().createRTCSessionDescription(CONSTANTS.WEBRTC.RTC_SDP_TYPE.OFFER, sdpParser.getSdpFromObject(updateSdp));
        peerRemoteSdp.audioDirection = CONSTANTS.WEBRTC.MEDIA_STATE.INACTIVE;    //Chrome38 fix
        peerRemoteSdp.videoDirection = CONSTANTS.WEBRTC.MEDIA_STATE.INACTIVE;    //Chrome38 fix

        //call.sdp is given below because of plugin crash
        if (self.createNewPeerForCallIfIceChangedInRemoteSdp(call, call.sdp, call.prevRemoteSdp)) {
            peer = call.peer;
            newPeerCreated = true;
        }
        //peerRemoteSdp.sdp = sdpParser.deleteSsrcFromSdp(peerRemoteSdp.sdp);

                function processHoldSetFirstRemoteDescriptionSuccessCallback() {
                    updateSdp.audioDirection = CONSTANTS.WEBRTC.MEDIA_STATE.SEND_RECEIVE;
                    //updateSdp.videoDirection = videoDirection;

                    if (sdpParser.getVideoSdpDirection(updateSdp.sdp) === CONSTANTS.WEBRTC.MEDIA_STATE.INACTIVE ||
                        sdpParser.getVideoSdpDirection(updateSdp.sdp) === CONSTANTS.WEBRTC.MEDIA_STATE.RECEIVE_ONLY)
                    {
                        updateSdp.sdp = sdpParser.deleteInactiveVideoSsrc(updateSdp.sdp);
                    }
                    peer.setRemoteDescription(
                            updateSdp,
                            function processHoldSetSecondRemoteDescriptionSuccessCallback() {
                                if (!hold && !local_hold_status && (videoDirection === CONSTANTS.WEBRTC.MEDIA_STATE.INACTIVE)) {
                                    call.remoteVideoState = CONSTANTS.WEBRTC.MEDIA_STATE.RECEIVE_ONLY;
                                } else {
                                    call.remoteVideoState = updateSdp.videoDirection;
                                }
                                //check if remote party sends video
                                webRtcAdaptorUtils.callSetReceiveVideo(call);
                                peer.createAnswer(
                                        peer.remoteDescription,
                                        function processHoldCreateAnswerSuccessCallback(obj) {
                                            localSdp = sdpParser.getSdpFromObject(obj);
                                            logger.debug("processHold: isSdpEnabled audio= " + sdpParser.isAudioSdpEnabled(obj.sdp));
                                            logger.debug("processHold: isSdpEnabled video= " + sdpParser.isVideoSdpEnabled(obj.sdp));
                                            obj = null;

                                            if (hold) {
                                                logger.debug("processHold: Remote HOLD");

                                                localSdp = sdpParser.respondToRemoteSdpDirections(localSdp, call.sdp);

                                                // is this necessary?, if so below code should be revised,
                                                // as it is not changing directions in the sdp
//                                if ((sr_indx + 1) + (so_indx + 1) + (ro_indx + 1) + (in_indx + 1) === 0) {
//                                    logger.debug("processNativeHold: no direction detected so setting as inactive");
//                                    obj.sdp = updateSdpDirection(obj.sdp, audio, MEDIA_STATE.INACTIVE);
//                                    obj.sdp = updateSdpDirection(obj.sdp, video, MEDIA_STATE.INACTIVE);
//                                }
                                            } else if (!local_hold_status) {
                                                logger.debug("processHold: Remote UNHOLD: direction left as it is");

                                                if (webRtcAdaptorUtils.callCanLocalSendVideo(call)) {
                                                    if (sdpParser.isSdpVideoSendEnabled(call.sdp)) {
                                                        localSdp = sdpParser.updateVideoSdpDirection(localSdp, CONSTANTS.WEBRTC.MEDIA_STATE.SEND_RECEIVE);
                                                    } else {
                                                        if (videoDirection === CONSTANTS.WEBRTC.MEDIA_STATE.INACTIVE) {
                                                            localSdp = sdpParser.updateVideoSdpDirection(localSdp, CONSTANTS.WEBRTC.MEDIA_STATE.INACTIVE);
                                                        }
                                                        else {
                                                            localSdp = sdpParser.updateVideoSdpDirection(localSdp, CONSTANTS.WEBRTC.MEDIA_STATE.SEND_ONLY);
                                                        }
                                                    }
                                                } else {
                                                    if (sdpParser.isSdpVideoSendEnabled(call.sdp)) {
                                                        localSdp = sdpParser.updateVideoSdpDirection(localSdp, CONSTANTS.WEBRTC.MEDIA_STATE.RECEIVE_ONLY);
                                                    } else {
                                                        localSdp = sdpParser.updateVideoSdpDirection(localSdp, CONSTANTS.WEBRTC.MEDIA_STATE.INACTIVE);
                                                    }
                                                }
                                                //change audio's direction to sendrecv for ssl attendees in a 3wc
                                                localSdp = sdpParser.changeDirection(localSdp, CONSTANTS.WEBRTC.MEDIA_STATE.RECEIVE_ONLY, CONSTANTS.WEBRTC.MEDIA_STATE.SEND_RECEIVE, CONSTANTS.STRING.AUDIO);
                                            } else if (local_hold_status && !hold) {
                                                logger.debug("processHold: Remote UNHOLD on local hold");

                                                if (audioDirection === CONSTANTS.WEBRTC.MEDIA_STATE.INACTIVE) {
                                                    localSdp = sdpParser.updateAudioSdpDirectionToInactive(localSdp);
                                                } else {
                                                    localSdp = sdpParser.updateAudioSdpDirection(localSdp, CONSTANTS.WEBRTC.MEDIA_STATE.SEND_ONLY);
                                                }

                                                if (webRtcAdaptorUtils.callCanLocalSendVideo(call)) {
                                                    localSdp = sdpParser.updateVideoSdpDirection(localSdp, CONSTANTS.WEBRTC.MEDIA_STATE.SEND_ONLY);
                                                } else {
                                                    localSdp = sdpParser.updateVideoSdpDirectionToInactive(localSdp);
                                                }
                                            }

                                            localSdp = sdpParser.performVP8RTCPParameterWorkaround(localSdp);
                                            localSdp = sdpParser.updateVersion(peerLocalSdp, localSdp);
                                            localSdp = sdpParser.checkIceParamsLengths(localSdp, updateSdp.sdp);
                                            localSdp = sdpParser.fixLocalTelephoneEventPayloadType(call, localSdp);

                                            // is this necessary? missing in native side.
                                            localSdp = sdpParser.setMediaPassive(localSdp, self.isDtlsEnabled());

                                            localSdp = sdpParser.updateH264Level(localSdp);

                                            if (newPeerCreated) {
                                                localSdp = sdpParser.copyCandidatesToTheNewLocalSdp(peerLocalSdp, localSdp);
                                                newPeerCreated = false;
                                                call.offer = self.getRtcLibrary().createRTCSessionDescription(CONSTANTS.WEBRTC.RTC_SDP_TYPE.OFFER, peerLocalSdp);
                                            }
                                            answerSdp = self.getRtcLibrary().createRTCSessionDescription(CONSTANTS.WEBRTC.RTC_SDP_TYPE.ANSWER, localSdp);
                                            call.answer = answerSdp;       // ABE-1328

                                            peer.setLocalDescription(
                                                    answerSdp,
                                                    function processHoldSetLocalDescriptionSuccessCallback() {
                                                        successSdp = sdpParser.getSdpFromObject(answerSdp);
                                                        if (sdpParser.isMediaPortReady(successSdp)) {
                                                            if (call.successCallback) {
                                                                utils.callFunctionIfExist(successCallback, successSdp);
                                                                call.successCallback = null;
                                                                call.offer = null;
                                                                call.answer = null;
                                                            }
                                                        }
                                                    },
                                                    function processHoldSetLocalDescriptionFailureCallback(e) {
                                                        logger.debug("processHold: setLocalDescription failed!! " + e);
                                                        utils.callFunctionIfExist(failureCallback, "Session cannot be created");
                                                        call.answer = null;       // ABE-1328
                                                    });
                                        },
                                        function processHoldCreateAnswerFailureCallback(e) {
                                            logger.debug("processHold: createAnswer failed!!: " + e);
                                            utils.callFunctionIfExist(failureCallback, "Session cannot be created");
                                        },
                                        {
                                            'mandatory': {
                                                'OfferToReceiveAudio': self.getMediaAudio(),
                                                'OfferToReceiveVideo': self.getMediaVideo()
                                            }
                                        });
                            },
                            function processHoldSetSecondRemoteDescriptionFailureCallback(e) {
                                logger.debug("processHold: second setRemoteDescription failed!! " + e);
                                utils.callFunctionIfExist(failureCallback, "Session cannot be created");
                            });
                }
                
                function processHoldSetFirstRemoteDescriptionFailureCallback(e) {
                    logger.debug("processHold: first setRemoteDescription failed!! " + e);
                    utils.callFunctionIfExist(failureCallback, "Session cannot be created");
                }
                
        // 1st setRemoteDescription to make webrtc remove the audio and/or video streams
        // 2nd setRemote will add the audio stream back so that services like MOH can work
        // This code will also run in UnHold scenario, and it will remove & add video stream
        if (newPeerCreated) {
            processHoldSetFirstRemoteDescriptionSuccessCallback();
        } else {
            peer.setRemoteDescription(
                peerRemoteSdp,
                processHoldSetFirstRemoteDescriptionSuccessCallback,
                processHoldSetFirstRemoteDescriptionFailureCallback
            );
        }
    };

    /*
     * Enabler implementation lies on webRtcPluginAdaptor.js
     * processHoldRespond to be used when the enabler plugin is enabled
     */
    self.processHoldRespond = function(call, onSuccess, onFailure, isJoin) {
        var remoteAudioDirection,
            remoteVideoDirection,
            localHoldFlag = false,
            remoteHoldFlag = false;

        logger.debug("processHoldRespond: state= " + call.peer.signalingState + " call.currentState= " + call.currentState);

        call.sdp = sdpParser.checkSupportedVideoCodecs(call.sdp, sdpParser.getSdpFromObject(call.peer.localDescription));
        call.sdp = sdpParser.removeRTXCodec(call.sdp);
        call.sdp = sdpParser.fixRemoteTelephoneEventPayloadType(call, call.sdp);
        call.sdp = sdpParser.removeG722Codec(call.sdp);
        call.sdp = sdpParser.performG722ParameterWorkaround(call.sdp);
        call.sdp = sdpParser.performVP8BandwidthWorkaround(call.sdp);

        sdpParser.init(call.sdp);
        remoteHoldFlag = sdpParser.isRemoteHold();

        localHoldFlag = (call.currentState === "LOCAL_HOLD");

        remoteAudioDirection = sdpParser.getAudioSdpDirection(call.sdp);
        remoteVideoDirection = sdpParser.getVideoSdpDirection(call.sdp);

        logger.debug("processHoldRespond: localHold= " + localHoldFlag + " remoteHold= " + remoteHoldFlag);

        /* Required for MOH - start */
        if (remoteHoldFlag === false) {
            if ((remoteAudioDirection === CONSTANTS.WEBRTC.MEDIA_STATE.SEND_RECEIVE) && (call.currentState === "REMOTE_HOLD")) {
                call.previousState = call.currentState;
                call.currentState = "COMPLETED";
            }
        } else {
            if (call.currentState === "COMPLETED") {
                call.previousState = call.currentState;
                call.currentState = "REMOTE_HOLD";
            }
        }

        if (localHoldFlag || remoteHoldFlag) {
            logger.debug("processHoldRespond: " + call.currentState + " : video -> inactive");
            call.sdp = sdpParser.updateSdpDirection(call.sdp, CONSTANTS.STRING.VIDEO, CONSTANTS.WEBRTC.MEDIA_STATE.INACTIVE);
        }

        if ((remoteVideoDirection === CONSTANTS.WEBRTC.MEDIA_STATE.INACTIVE) && (call.currentState === "COMPLETED")) {
            logger.debug("processHoldRespond: video inactive -> recvonly");
            call.sdp = sdpParser.updateSdpDirection(call.sdp, CONSTANTS.STRING.VIDEO, CONSTANTS.WEBRTC.MEDIA_STATE.RECEIVE_ONLY);
        }
        /* Required for MOH - end */

        self.processRespond(call, onSuccess, onFailure, isJoin);
    };

    self.createUpdateWithSetLocalDescription = function(call, successCallback, failureCallback, isVideoStart, localSdp) {
        var peer = call.peer, localDesc, successSdp;
        logger.debug("set local description to start the video");

        if (!call.isVideoSourceAllowed) {
            self.replaceLocalStream(call);
        }
        if (self.getLocalVideoTrack(call.peer)) {
            self.getLocalVideoTrack(call.peer).enabled = isVideoStart;
        }
        
        localDesc = self.getRtcLibrary().createRTCSessionDescription(CONSTANTS.WEBRTC.RTC_SDP_TYPE.OFFER, localSdp);
        if (isVideoStart) {
            localDesc.videoDirection = CONSTANTS.WEBRTC.MEDIA_STATE.SEND_RECEIVE;
        } else {
            localDesc.videoDirection = CONSTANTS.WEBRTC.MEDIA_STATE.RECEIVE_ONLY;
        }

        peer.setLocalDescription(localDesc,
            function createUpdateSetLocalDescriptionSuccessCallback() {
                //since the candidates are same we can call the successCallback
                logger.debug("createUpdate: setLocalDescription success ");
                successSdp = sdpParser.updateH264Level(sdpParser.getSdpFromObject(localDesc));
                utils.callFunctionIfExist(successCallback, successSdp);
                call.successCallback = null;
            },
            function createUpdateSetLocalDescriptionFailureCallback(e) {
                logger.error("createUpdate: setLocalDescription failed : " + e);
                utils.callFunctionIfExist(failureCallback);
            });
    };

    self.createUpdateWithCreateOffer = function(call, successCallback, failureCallback, isVideoStart, localSdp, isIceLite) {
        var peer = call.peer, newSdp;
        logger.debug("create new offer to start the video: isIceLite = " + isIceLite);

        self.replaceLocalStream(call);
        self.setMediaVideo(sdpParser.isSdpHasVideo(localSdp));
        peer.createOffer(
            function createUpdateCreateOfferSuccessCallback(obj) {
                isVideoStart = isVideoStart && self.getVideoSourceAvailable();
                if (isVideoStart) {
                    obj.videoDirection = CONSTANTS.WEBRTC.MEDIA_STATE.SEND_RECEIVE;
                } else {
                    obj.videoDirection = CONSTANTS.WEBRTC.MEDIA_STATE.RECEIVE_ONLY;
                }

                newSdp = sdpParser.performVP8RTCPParameterWorkaround(sdpParser.getSdpFromObject(obj));
                obj = null;
                newSdp = sdpParser.updateH264Level(newSdp);
                newSdp = sdpParser.deleteCryptoZeroFromSdp(newSdp);
                newSdp = sdpParser.performVP8RTCPParameterWorkaround(newSdp);
                newSdp = sdpParser.updateAudioCodec(newSdp);
                newSdp = sdpParser.removeG722Codec(newSdp);
                newSdp = sdpParser.deleteCryptoFromSdp(newSdp, self.isDtlsEnabled());
                newSdp = sdpParser.setMediaActPass(newSdp, self.isDtlsEnabled());
                newSdp = sdpParser.fixLocalTelephoneEventPayloadType(call, newSdp);
                newSdp = sdpParser.replaceOpusCodec(newSdp);

                call.offer = self.getRtcLibrary().createRTCSessionDescription(CONSTANTS.WEBRTC.RTC_SDP_TYPE.OFFER, newSdp);

                peer.setLocalDescription(call.offer,
                    function createUpdateCreateOfferSetLocalDescriptionSuccessCallback() {
                        //since the candidates have changed we will call the successCallback at onEnablerIceCandidate
                        //utils.callFunctionIfExist(successCallback);
                        logger.debug("createUpdate: createOffer setLocalDescription success ");
                        webRtcAdaptorUtils.setLocalStreamVideoSendStatus(call, isVideoStart);
                    },
                    function crateUpdateCreateOfferSetLocalDescriptionFailureCallback(e) {
                        logger.debug("createUpdate: createOffer setLocalDescription failed: " + e);
                        utils.callFunctionIfExist(failureCallback);
                    });
            },
            function createUpdateCrateOfferFailureCallback(e) {
                logger.debug("createUpdate: createOffer failed!!: " + e);
                failureCallback();
            },
            {
                'mandatory': {
                    'OfferToReceiveAudio': self.getMediaAudio(),
                    'OfferToReceiveVideo': self.getMediaVideo(),
                    'IceRestart': !isIceLite
                }
            }
        );

    };

    // Enabler implementation lies on webRtcPluginAdaptor.js
    self.createPeer = function(call, onsuccess, onfailure) {
        try {
            var pc, constraints, i, servers = [], iceServerUrl = self.getIceServerUrl(), stunturn;
            if (iceServerUrl instanceof Array) {
                for (i = 0; i < iceServerUrl.length; i++) {
                    servers[i] = iceServerUrl[i];
                }
            } else if (iceServerUrl === null || iceServerUrl === "") {
                servers = [];
            } else {
                servers[0] = iceServerUrl;
            }
            stunturn = {iceServers: servers};

            constraints = {"optional": {"DtlsSrtpKeyAgreement": self.isDtlsEnabled()}};
            pc = self.getRtcLibrary().createRTCPeerConnection(stunturn, constraints);

            self.setPeerCount(self.getPeerCount() + 1);
            call.peer = pc;

            pc.onconnecting = function(event) {
                self.onSessionConnecting(call, event);
            };
            pc.onopen = function(event) {
                self.onSessionOpened(call, event);
            };
            pc.onsignalingstatechange = function(event) {
                self.onSignalingStateChange(call, event);
            };
            pc.onaddstream = function(event) {
                self.onRemoteStreamAdded(call, event);
            };
            pc.onremovestream = function(event) {
                self.onRemoteStreamRemoved(call, event);
            };
            pc.onicecandidate = function(event) {
                self.setupIceCandidateCollectionTimer(call);
                self.onIceCandidate(call, event);
            };
            pc.onicecomplete = function() {
                self.onIceComplete(call);
            };
            pc.oniceconnectionstatechange = function (event) {
                self.oniceconnectionstatechange(call, event);
            };

            logger.info("create PeerConnection successfully.");
            utils.callFunctionIfExist(onsuccess);
        } catch (err) {
            logger.error("Failed to create PeerConnection, exception: " + err.message);
            utils.callFunctionIfExist(onfailure);
        }
    };

    self.createNewPeerForCall = function(call) {
        var isNewPeerCreated = false, peerCount = self.getPeerCount();
        if (call.peer) {
            call.peer.close();
            self.setPeerCount(peerCount - 1);
        }

        logger.trace("Creating new peer for call: " + call.id);
        self.createPeer(call, function createPeerSuccessCallback() {
            logger.trace("New peer has created for call: " + call.id);
            call.peer.addStream(self.getLocalStream());
            isNewPeerCreated = true;
        }, function createPeerFailureCallback() {
            logger.error("New peer creation has failed!: " + call.id);
        });
        return isNewPeerCreated;
    };

    self.createNewPeerForCallIfIceChangedInRemoteSdp = function(call, newSdp, oldSdp) {
        var hasNewSdpContainsIceLite = sdpParser.isIceLite(newSdp),
                hasOldSdpContainsIceLite = sdpParser.isIceLite(oldSdp),
                isNewPeerCreated = false;

        // In Peer-Peer call, ice-iceLite change indicates
        // a new peer connection with different ip.
        // As for now, webrtc cannot handle ip change
        // without creating a peer.
        // For ex: Peer-Peer call and MoH.
        //
        // In Non Peer-Peer call, ice-iceLite change does
        // not occur so existing peer object will be used.

        if (hasNewSdpContainsIceLite !== hasOldSdpContainsIceLite) {
            logger.trace("Ice - Ice-Lite change detected in call: " + call.id);
            return self.createNewPeerForCall(call);
        }

        return isNewPeerCreated;
    };

    //Enabler implementation lies on webRtcPluginAdaptor.js
    self.onRemoteStreamAdded = function(call, event) {
        var streamUrl;
        logger.debug("onRemoteStreamAdded");
        if (event.stream) {
            streamUrl = self.getRtcLibrary().getURLFromStream(event.stream);
            if (streamUrl) {
                logger.debug("onRemoteStreamAdded: " + streamUrl);
                if (self.getDefaultVideoContainer()) {
                    self.useDefaultRenderer(streamUrl, false);
                } else if (self.getRemoteVideoContainer()) {
                    self.createStreamRenderer(streamUrl, self.getRemoteVideoContainer());
                } else {
                    self.fireOnStreamAddedEvent(call, streamUrl);
                }
            }
        }
    };

    self.iceCandidateCollectionTimeoutHandler = function(call) {
        var sdp = call.peer.localDescription.sdp;
        self.clearIceCandidateCollectionTimer(call);

        // set timeout if there is no ice candidate available or 
        // when audio, video port assignment isn't complete
        if ((sdpParser.isSdpHasAudio(sdp) && sdpParser.isSdpHasAudioWithZeroPort(sdp)) ||
                (sdpParser.isSdpHasVideo(sdp) && sdpParser.isSdpHasVideoWithZeroPort(sdp))) {
            logger.debug("Re-setting ice candidate collection timeout: " + fcsConfig.iceCandidateCollectionTimeoutInterval);
            call.iceCandidateCollectionTimer = setTimeout(function() {
                self.iceCandidateCollectionTimeoutHandler(call);
            }, fcsConfig.iceCandidateCollectionTimeoutInterval);
            return;
        }

        if (call.successCallback) {
            logger.debug("Ice candidate collection interrupted after given timeout, invoking successCallback.");

            sdp = sdpParser.updateH264Level(sdp);

            call.successCallback(sdp);
            call.successCallback = null;
        }
    };

    self.setupIceCandidateCollectionTimer = function(call) {
        if (fcsConfig.iceCandidateCollectionTimeoutInterval) {
            if (!call.iceCandidateCollectionTimer) {
                logger.debug("Setting ice candidate collection timeout: " + fcsConfig.iceCandidateCollectionTimeoutInterval);
                call.iceCandidateCollectionTimer = setTimeout(function() {
                    self.iceCandidateCollectionTimeoutHandler(call);
                }, fcsConfig.iceCandidateCollectionTimeoutInterval);
            } else {
                logger.trace("Ice candidate collection timer exists.");
            }
        }
    };

    /*
     * Enabler implementation lies on webRtcPluginAdaptor.js
     * onIceCandidate to be called when the enabler plugin is enabled
     */
    self.onIceCandidate = function(call, event) {
        var sdp;
        if (event.candidate === null) {
            if (call.successCallback) {
                logger.debug("All ICE candidates received for call : " + call.id);

                sdp = sdpParser.getSdpFromObject(call.peer.localDescription);
                //sdp = sdp.replace("s=","s=genband");
                sdp = sdpParser.updateH264Level(sdp);

                call.successCallback(sdp);
                call.successCallback = null;
            }
        } else {
            call.iceCandidateReceived = true;
            logger.debug("ICE candidate received : sdpMLineIndex = " + event.candidate.sdpMLineIndex
                    + ", candidate = " + event.candidate.candidate + " for call : " + call.id);
        }
    };

    /* 
     * Gets remote video resolutions with the order below
     * remoteVideoHeight-remoteVideoWidth
     * 
     * Enabler implementation lies on webRtcPluginAdaptor.js
     */
    self.getRemoteVideoResolutions = function() {
        var remoteResolution = [],
            remoteVideoHeight,
            remoteVideoWidth;

        if (self.getRemoteVideoContainer()) {
            if (!self.getRemoteVideoContainer().firstChild) {
                return remoteResolution;
            }

            remoteVideoHeight = self.getRemoteVideoContainer().firstChild.videoHeight;
            remoteVideoWidth = self.getRemoteVideoContainer().firstChild.videoWidth;

        } else {
            if (!self.getDefaultVideoContainer().firstElementChild.firstChild) {
                return remoteResolution;
            }

            remoteVideoHeight = self.getDefaultVideoContainer().firstElementChild.firstChild.videoHeight;
            remoteVideoWidth = self.getDefaultVideoContainer().firstElementChild.firstChild.videoWidth;
        }

        logger.debug("remote video resolutions of plugin webrtc...");
        logger.debug("remoteVideoWidth  : " + remoteVideoWidth);
        logger.debug("remoteVideoHeight : " + remoteVideoHeight);

        remoteResolution.push(remoteVideoHeight);
        remoteResolution.push(remoteVideoWidth);

        self.getLocalVideoResolutions();

        return remoteResolution;
    };

    /* 
     * Gets local video resolutions with the order below
     * localVideoHeight-localVideoWidth
     * 
     * Enabler implementation lies on webRtcPluginAdaptor.js
     */
    self.getLocalVideoResolutions = function() {
        var localResolution = [],
            localVideoHeight,
            localVideoWidth;

        if (self.getLocalVideoContainer()) {
            if (!self.getLocalVideoContainer().firstChild) {
                return localResolution;
            }

            localVideoHeight = self.getLocalVideoContainer().firstChild.videoHeight;
            localVideoWidth = self.getLocalVideoContainer().firstChild.videoWidth;

        } else {
            if (!self.getDefaultVideoContainer().lastElementChild.firstChild) {
                return localResolution;
            }

            localVideoHeight = self.getDefaultVideoContainer().lastElementChild.firstChild.videoHeight;
            localVideoWidth = self.getDefaultVideoContainer().lastElementChild.firstChild.videoWidth;
        }

        logger.debug("local video resolutions of plugin webrtc...");
        logger.debug("localVideoWidth  : " + localVideoWidth);
        logger.debug("localVideoHeight : " + localVideoHeight);

        localResolution.push(localVideoHeight);
        localResolution.push(localVideoWidth);

        return localResolution;
    };

    // Enabler implementation lies on webRtcPluginAdaptor.js
    self.useDefaultRenderer = function(streamUrl, local) {
        var videoContainer;

        if (self.getDefaultVideoContainer() && self.getDefaultVideoContainer().children.length === 0) {
            //Create divs for the remote and local
            self.getDefaultVideoContainer().innerHTML = "<div style='height:100%;width:100%'></div><div style='position:absolute;bottom:10px;right:10px;height:30%; width:30%;'></div>";
        }

        if (local) {
            if (self.getLocalVideoContainer()) {
                videoContainer = self.getLocalVideoContainer();
            } else {
                videoContainer = self.getDefaultVideoContainer().lastElementChild;
            }
        } else {
            if (self.getRemoteVideoContainer()) {
                videoContainer = self.getRemoteVideoContainer();
            } else {
                videoContainer = self.getDefaultVideoContainer().firstElementChild;
            }
        }
        self.createStreamRenderer(streamUrl, videoContainer, {muted: local});
    };

    // Enabler implementation lies on webRtcPluginAdaptor.js
    self.createStreamRenderer = function(streamUrl, container, options) {
        var renderer;

        if (!streamUrl || !container) {
            return;
        }

        container.innerHTML = "<object width='100%' height='100%' type='application/x-gcfwenabler-video'><param name='autoplay' value='true' /><param name='videosrc' value='" + streamUrl + "' /></object>";

        return renderer;
    };

    //This function is called internally when we make a new call or hold/unhold scenario
    // Enabler implementation lies on webRtcPluginAdaptor.js
    self.addLocalStream = function(internalCall) {
        var streamUrl, fireEvent = false;
        logger.debug("addLocalStream");

        if (internalCall.localStream) {
            if (webRtcAdaptorUtils.callCanLocalSendVideo(internalCall)) {
                streamUrl = self.getRtcLibrary().getURLFromStream(internalCall.localStream);

                if (streamUrl) {
                    logger.debug("addLocalStream: " + streamUrl);
                    if (self.getDefaultVideoContainer()) {
                        self.useDefaultRenderer(streamUrl, true);
                    } else if (self.getLocalVideoContainer()) {
                        self.createStreamRenderer(streamUrl, self.getLocalVideoContainer(), {muted: true});
                    } else {
                        internalCall.call.localStreamURL = streamUrl;
                    }
                    fireEvent = true;
                }
            } else {
                if (self.getDefaultVideoContainer()) {
                    if (self.getDefaultVideoContainer().lastElementChild) {
                        self.disposeStreamRenderer(self.getDefaultVideoContainer().lastElementChild);
                        fireEvent = true;
                    }
                } else if (self.getLocalVideoContainer()) {
                    self.disposeStreamRenderer(self.getLocalVideoContainer());
                    fireEvent = true;
                }
            }

            if (fireEvent) {
                self.fireOnLocalStreamAddedEvent(internalCall);
            }
        }
    };

    // Enabler implementation lies on webRtcPluginAdaptor.js
    self.replaceLocalStream = function(internalCall) {
        logger.debug("replaceLocalStream");
        if (internalCall.peer.localStreams.length > 0) {
            internalCall.peer.removeStream(internalCall.peer.localStreams[0]);
        }
        internalCall.peer.addStream(self.getLocalStream());
        internalCall.localStream = self.getLocalStream();
    };

    // Enabler implementation lies on webRtcPluginAdaptor.js
    self.sendIntraFrame = function(call) {
        if (!call.peer) {
            return;
        }

        if (webRtcAdaptorUtils.callCanLocalSendVideo(call)) {
            call.peer.sendIntraFrame();
        } else {
            call.peer.sendBlackFrame();
        }
    };

    // Enabler implementation lies on webRtcPluginAdaptor.js
    self.sendBlackFrame = function(call) {
        if (!call.peer) {
            return;
        }
        call.peer.sendBlackFrame();
    };
    
    // Enabler implementation lies on webRtcPluginAdaptor.js
    self.performReconnectWorkaround = function(call, onSuccess, onFailure) {
        // this function is native only
        // it will do nothing for plugin side
        utils.callFunctionIfExist(onFailure);
    };
    
    logger.debug('WebRtcPluginAdaptor initialized');
};

var WebRtcPluginAdaptor = function(_super, _decorator, _model) {
    var decorator = _decorator || webRtcLibraryDecorator,
            model = _model || new WebRtcPluginAdaptorModel();
    return new WebRtcPluginAdaptorImpl(_super ||
            new WebRtcAdaptor({}, decorator, model),
            decorator,
            model,
            logManager);
};

if (__testonly__) {
    __testonly__.WebRtcPluginAdaptor = WebRtcPluginAdaptor;
}

var WebRtcPluginv21AdaptorImpl = function(_super, _decorator, _model, _logManager) {
    var self = this,
        webRtcPlugin21Version = {
            major: 2,
            minor: 1,

            min_revision: 343,
            min_build: 0,

            current_revision: 376,
            current_build: 0
        }, logger = _logManager.getLogger("WebRtcPluginv21AdaptorImpl");
    logger.debug('WebRtcPluginv21Adaptor initializing');

    utils.compose(_super, self);
    utils.compose(_model, self);

    self.setPluginVersion(webRtcPlugin21Version);
    logger.debug('WebRtcPluginv21Adaptor initialized');
};

var WebRtcPluginv21Adaptor = function(_super, _decorator, _model) {
    var decorator = _decorator || webRtcLibraryDecorator,
            model = _model || new WebRtcPluginAdaptorModel();
    return new WebRtcPluginv21AdaptorImpl(_super ||
            new WebRtcPluginAdaptor(undefined, decorator, model),
            decorator, 
            model,
            logManager);
};

if (__testonly__) { __testonly__.WebRtcPluginv21Adaptor = WebRtcPluginv21Adaptor; }
var WebRtcPluginv22AdaptorImpl = function(_super, _decorator, _model, _logManager) {
    var self = this,
        webRtcPlugin22Version = {
            major: 2,
            minor: 2,

            min_revision: 477,
            min_build: 0,

            current_revision: 477,
            current_build: 0
        }, logger = _logManager.getLogger("WebRtcPluginv22AdaptorImpl");
    logger.debug('WebRtcPluginv22Adaptor initializing');

    utils.compose(_super, self);
    utils.compose(_model, self);

    self.setPluginVersion(webRtcPlugin22Version);
    logger.debug('WebRtcPluginv22Adaptor initialized');
};

var WebRtcPluginv22Adaptor = function(_super, _decorator, _model) {
    var decorator = _decorator || webRtcLibraryDecorator,
            model = _model || new WebRtcPluginAdaptorModel();
    return new WebRtcPluginv22AdaptorImpl(_super ||
            new WebRtcPluginAdaptor(undefined, decorator, model),
            decorator, 
            model,
            logManager);
};

if (__testonly__) { __testonly__.WebRtcPluginv22Adaptor = WebRtcPluginv22Adaptor; }
var WebRtcPluginv30AdaptorImpl = function(_super, _decorator, _model, _logManager) {
    var self = this,
        webRtcPlugin30Version = {
            major: 3,
            minor: 0,

            min_revision: 476,
            min_build: 0,

            current_revision: 476,
            current_build: 0
        }, logger = _logManager.getLogger("WebRtcPluginv30AdaptorImpl");
    logger.debug('WebRtcPluginv30Adaptor initializing');
    
    utils.compose(_super, self);
    utils.compose(_model, self);

    self.setPluginVersion(webRtcPlugin30Version);
    logger.debug('WebRtcPluginv30Adaptor initialized');
};

var WebRtcPluginv30Adaptor = function(_super, _decorator, _model) {
    var decorator = _decorator || webRtcLibraryDecorator,
            model = _model || new WebRtcPluginAdaptorModel();
    return new WebRtcPluginv30AdaptorImpl(_super ||
            new WebRtcPluginAdaptor(undefined, decorator, model),
            decorator, 
            model,
            logManager);
};

if (__testonly__) { __testonly__.WebRtcPluginv30Adaptor = WebRtcPluginv30Adaptor; }
var WebRtcChromeAdaptorImpl = function(_super, _decorator, _model, _logManager) {
    var self = this, logger = _logManager.getLogger("WebRtcChromeAdaptorImpl");
    logger.debug('WebRtcChromeAdaptor initializing');

    utils.compose(_super, self);
    logger.debug('WebRtcChromeAdaptor initialized');
};

var WebRtcChromeAdaptor = function(_super, _decorator, _model) {
    var decorator = _decorator || webRtcLibraryChromeDecorator,
            model = _model || new WebRtcChromeAdaptorModel();
    return new WebRtcChromeAdaptorImpl(_super ||
            new WebRtcAdaptor({}, decorator, model),
            decorator,
            model,
            logManager);
};

if (__testonly__) { __testonly__.WebRtcChromeAdaptor = WebRtcChromeAdaptor; }
var WebRtcFirefoxAdaptorImpl = function(_super, _decorator, _model, _logManager) {
    var self = this, logger = _logManager.getLogger("WebRtcFirefoxAdaptorImpl");
    logger.debug('WebRtcFirefoxAdaptor initializing');

    utils.compose(_super, self);
    logger.debug('WebRtcFirefoxAdaptor initialized');
};

var WebRtcFirefoxAdaptor = function(_super, _decorator, _model) {
    var decorator = _decorator || webRtcLibraryFirefoxDecorator,
            model = _model || new WebRtcFirefoxAdaptorModel();
    return new WebRtcFirefoxAdaptorImpl(_super ||
            new WebRtcAdaptor({}, decorator, model),
            decorator, 
            model,
            logManager);
};

if (__testonly__) { __testonly__.WebRtcFirefoxAdaptor = WebRtcFirefoxAdaptor; }
var WebRtcAdaptorFactory = function(_window, _navigator, _logManager, _WebRtcPluginv21Adaptor, _WebRtcPluginv22Adaptor, _WebRtcPluginv30Adaptor, _WebRtcChromeAdaptor, _WebRtcFirefoxAdaptor) {
    var logger = _logManager.getLogger("WebRtcAdaptorFactory"),
    NAVIGATOR_TYPES = {CHROME: "chrome", FIREFOX: "firefox", "PLUGIN": "plugin"},
    PLUGIN_MODES = {
        WEBRTCH264: "webrtch264", // 3.0 Enabler Plugin
        WEBRTC22: "webrtc22", // 2.2 Enabler Plugin
        WEBRTC21: "webrtc21", // 2.1 Enabler Plugin
        WEBRTC: "webrtc", // Default Enabler Plugin
        AUTO: "auto", // Native For Chrome Browser and Default Enabler Plugin for other Browsers
        AUTO21: "auto21", // Native For Chrome Browser and Default Enabler Plugin for other Browsers
        AUTO22: "auto22", // Native For Chrome Browser and Default Enabler Plugin for other Browsers
        AUTOH264: "autoh264", // Native For Chrome Browser and 3.0 Enabler Plugin for other Browsers
        AUTOFIREFOX: "autofirefox" // Native For Chrome AND Firefox Browser and Enabler Plugin for other Browsers
     },
     DEFAULT_RTC_PLUGIN_MODE = PLUGIN_MODES.WEBRTC22,
     DEFAULT_RTC_ADAPTOR = _WebRtcPluginv22Adaptor,
     PLUGIN_MODE_LOOKUP_TABLE = {
        chrome: {webrtc: DEFAULT_RTC_PLUGIN_MODE,
                autofirefox: PLUGIN_MODES.AUTO,
                autoh264: PLUGIN_MODES.AUTO,
                webrtch264: PLUGIN_MODES.WEBRTCH264},
        firefox: {webrtc: DEFAULT_RTC_PLUGIN_MODE,
                auto: DEFAULT_RTC_PLUGIN_MODE,
                auto21: PLUGIN_MODES.WEBRTC21,
                auto22: PLUGIN_MODES.WEBRTC22,
                autoh264: PLUGIN_MODES.WEBRTCH264,
                autofirefox: PLUGIN_MODES.AUTO
                },
         plugin: {auto: DEFAULT_RTC_PLUGIN_MODE,
             auto21: PLUGIN_MODES.WEBRTC21,
             auto22: PLUGIN_MODES.WEBRTC22,
             autoh264: PLUGIN_MODES.WEBRTCH264,
             autofirefox: DEFAULT_RTC_PLUGIN_MODE,
             webrtc: DEFAULT_RTC_PLUGIN_MODE}},
    ADAPTOR_LOOKUP_TABLE = {
        chrome: {auto: _WebRtcChromeAdaptor,
            autoh264: _WebRtcChromeAdaptor,
            webrtc21: _WebRtcPluginv21Adaptor,
            webrtc22: _WebRtcPluginv22Adaptor,
            webrtch264: _WebRtcPluginv30Adaptor},
        firefox: {auto: _WebRtcFirefoxAdaptor,
            webrtc21: _WebRtcPluginv21Adaptor,
            webrtc22: _WebRtcPluginv22Adaptor,
            webrtch264: _WebRtcPluginv30Adaptor},
        plugin: {webrtc21: _WebRtcPluginv21Adaptor,
            webrtc22: _WebRtcPluginv22Adaptor,
            webrtch264: _WebRtcPluginv30Adaptor}
    }, pluginMode;

    function getNavigatorType() {
        if (_navigator.webkitGetUserMedia) {
            return NAVIGATOR_TYPES.CHROME;
        }
        else if (_navigator.mozGetUserMedia) {
            return NAVIGATOR_TYPES.FIREFOX;
        }
        else {
            return NAVIGATOR_TYPES.PLUGIN;
        }
    }


    function identifyPluginMode(options) {
        var i;

        if (!options || !options.pluginMode) {
            return PLUGIN_MODES.AUTO;
        }

        for(i in PLUGIN_MODES) {
            if (PLUGIN_MODES[i] === options.pluginMode) {
                return PLUGIN_MODES[i];
            }
        }

        return PLUGIN_MODES.AUTO;
    }

    function getPluginMode(options, navigatorType) {
        var pluginMode = identifyPluginMode(options);

        return PLUGIN_MODE_LOOKUP_TABLE[navigatorType][pluginMode] || pluginMode;
    }
    

    this.getWebRtcAdaptor = function(options) {
        var Adaptor, navigatorType = getNavigatorType();

        pluginMode = getPluginMode(options, navigatorType);

        Adaptor = ADAPTOR_LOOKUP_TABLE[navigatorType][pluginMode];

        if (!Adaptor) {
            // This seems unnecessary, still keeping it just in case of a weird 
            // condition
            logger.debug("Invalid Plugin Mode Detected, Treated as WEBRTC");
            pluginMode = DEFAULT_RTC_PLUGIN_MODE;
            Adaptor = DEFAULT_RTC_ADAPTOR;
        }

        logger.debug("Adaptor initializing from " + navigatorType + " browser and " + pluginMode + " plugIn mode");
        _window.pluginMode = pluginMode;
        return new Adaptor();
    };

    this.getPluginModes = function() {
        return PLUGIN_MODES;
    };

    this.getDefaultRtcPluginMode = function() {
        return DEFAULT_RTC_PLUGIN_MODE;
    };

    this.getDefaultRtcAdaptor = function() {
        return DEFAULT_RTC_ADAPTOR;
    };
};

var webRtcAdaptorFactory = new WebRtcAdaptorFactory(window,
        navigator,
        logManager,
        WebRtcPluginv21Adaptor,
        WebRtcPluginv22Adaptor,
        WebRtcPluginv30Adaptor,
        WebRtcChromeAdaptor,
        WebRtcFirefoxAdaptor);
if (__testonly__) { __testonly__.WebRtcAdaptorFactory = WebRtcAdaptorFactory; }
var WebRtcManager = function(_webRtcAdaptorFactory, _logManager, _globalBroadcaster, _navigator) {
    var self = this, rtcAdaptor, turnCredentials,
            logger = _logManager.getLogger("WebRtcManager");

    function onTurnServerCredentialsAcquired(credentials) {
        turnCredentials = credentials;
    }

    /*
     * addTurnCredentialsToUrl to be used when there is an active Turn Server, 
     * to replace it's credentials
     */
    function addTurnCredentialsToUrl(iceServerUrl) {
        var i, serverType;
        if (iceServerUrl instanceof Array) {
            for (i = 0; i < iceServerUrl.length; i++) {
                serverType = iceServerUrl[i].url.substring(0, iceServerUrl[i].url.indexOf(':'));
                if (serverType === 'turn' || serverType === 'turns') {
                    iceServerUrl[i].credential = turnCredentials.credential;
                    iceServerUrl[i].username = turnCredentials.username;
                }
            }
        }
        return iceServerUrl;
    }

    self.initMedia = function(onSuccess, onFailure, options) {
        var iceServerUrl = "";
        logger.info("Initializing media for call");
        rtcAdaptor = _webRtcAdaptorFactory.getWebRtcAdaptor(options);

        if (options) {
            if (options.iceserver) {
                iceServerUrl = options.iceserver;
                if (turnCredentials) {
                    iceServerUrl = addTurnCredentialsToUrl(iceServerUrl);
                }
                rtcAdaptor.setIceServerUrl(iceServerUrl);
            }
            if (options.webrtcdtls) {
                rtcAdaptor.setDtlsEnabled(options.webrtcdtls);
            }        
        }

        rtcAdaptor.initMedia(onSuccess, onFailure, options);
    };

    self.getUserMedia = function(onSuccess, onFailure, options) {
        var videoResolutionArray;
        logger.info("getting user media for call: started - userAgent: " + _navigator.userAgent);

        if (options) {
            if (options.audio !== undefined) {
                rtcAdaptor.setMediaAudio(options.audio);
            }
            if (options.video !== undefined) {
                rtcAdaptor.setMediaVideo(options.video);
            }

            if (options.videoResolution) {
                // First element of array will be Width and second element will be Height
                videoResolutionArray = options.videoResolution.split("x");
                if (videoResolutionArray[0] && videoResolutionArray[1]) {
                    rtcAdaptor.setVideoWidth(videoResolutionArray[0]);
                    rtcAdaptor.setVideoHeight(videoResolutionArray[1]);
                }
            }
        }

        rtcAdaptor.getUserMedia(onSuccess, onFailure);
    };

    self.createOffer = function (call, successCallback, failureCallback, sendInitialVideo) {
        logger.info("create offer SDP: sendInitialVideo= " + sendInitialVideo);

        call.successCallback = successCallback;
        call.failureCallback = failureCallback;

        if (!call.peer) {
            rtcAdaptor.createPeer(call,
                function createPeerSuccessCallback() {},
                function createPeerFailureCallback() {
                    utils.callFunctionIfExist(failureCallback, 2);
                }
            );
        }
        rtcAdaptor.createOffer(call, successCallback, failureCallback, sendInitialVideo);
    };

    self.createAnswer = function(call, successCallback, failureCallback, isVideoEnabled) {
        logger.info("creating answer SDP: callid= " + call.id);
        logger.info("creating answer SDP: isVideoEnabled= " + isVideoEnabled);

        call.successCallback = successCallback;
        call.failureCallback = failureCallback;

        if (!call.peer) {
            rtcAdaptor.createPeer(call,
                    function createPeerSuccessCallback() {},
                    function createPeerFailureCallback() {
                        utils.callFunctionIfExist(failureCallback, 2);
                    }
            );
        }
        rtcAdaptor.createAnswer(call, successCallback, failureCallback, isVideoEnabled);
    };

    self.processAnswer = function(call, successCallback, failureCallback) {
        if (call.peer) {
            rtcAdaptor.processAnswer(call, successCallback, failureCallback);
        }
    };

    self.processRespond = function(call, onSuccess, onFailure, isJoin){
        if (call.peer) {
            rtcAdaptor.processRespond(call, onSuccess, onFailure, isJoin);
        }
    };

    self.createUpdate = function(call, successCallback, failureCallback, isVideoStart){
        logger.info("createUpdate: isVideoStart= " + isVideoStart);

        call.successCallback = successCallback;
        call.failureCallback = failureCallback;

        if(call.peer){
            rtcAdaptor.createUpdate(call, successCallback, failureCallback, isVideoStart);
        }
    };

    self.processUpdate = function(call, successCallback, failureCallback, local_hold_status) {
        logger.info("processUpdate: local_hold_status:" + local_hold_status);

        call.successCallback = successCallback;
        call.failureCallback = failureCallback;

        if (call.peer) {
            rtcAdaptor.processUpdate(call, successCallback, failureCallback, local_hold_status);
        }
    };

    self.createReOffer = function(call, successCallback, failureCallback, iceRestart) {
        call.successCallback = successCallback;
        call.failureCallback = failureCallback;

        if (call.peer) {
            rtcAdaptor.createReOffer(call, successCallback, failureCallback, iceRestart);
        }
    };

    self.createHoldUpdate = function(call, hold, remote_hold_status, successCallback, failureCallback){
        logger.info("create hold update local hold= " + hold + " remote hold= " + remote_hold_status);
        if(call.peer){
            rtcAdaptor.createHoldUpdate(call, hold, remote_hold_status, successCallback, failureCallback);
        }
    };
    
    self.processRemoteOfferOnLocalHold = function(call, successCallback, failureCallback) {
        if(call.peer){
            rtcAdaptor.processRemoteOfferOnLocalHold(call, successCallback, failureCallback);
        }
    };
    
    self.processEnd = function(call){
        if(call.peer){
            rtcAdaptor.processEnd(call);
        }
    };

    self.processHold = function(call, hold, local_hold_status, successCallback, failureCallback) {
        logger.info("processHold: local hold= " + local_hold_status + " remote hold= " + hold);

        if (call.peer) {
            call.successCallback = successCallback;
            rtcAdaptor.processHold(call, hold, local_hold_status, successCallback, failureCallback);
        }
    };

    self.processHoldRespond = function(call, onSuccess, onFailure, isJoin){
        logger.info("Processing response to hold offer sent");

        if(call.peer){
            rtcAdaptor.processHoldRespond(call, onSuccess, onFailure, isJoin);
        }
    };
    
    self.processPreAnswer = function(call){
        logger.info("processing preanswer from the offer we sent");
        
        if(call.peer){
            rtcAdaptor.processPreAnswer(call);
        }
        
    };

    self.revertRtcState = function(call, successCallback, failureCallback) {
        rtcAdaptor.revertRtcState(call, successCallback, failureCallback);
    };

    self.getRemoteVideoResolutions = function() {
        return rtcAdaptor.getRemoteVideoResolutions();
    };
    
    self.getLocalVideoResolutions = function() {
        return rtcAdaptor.getLocalVideoResolutions();
    };
    
    self.isAudioSourceAvailable = function() {
        return rtcAdaptor.getAudioSourceAvailable();
    };
    
    self.isVideoSourceAvailable = function() {
        return rtcAdaptor.getVideoSourceAvailable();
    };
    
    self.refreshVideoRenderer = function() {
        rtcAdaptor.refreshVideoRenderer();
    };
    
    self.performReconnectWorkaround = function(call, successCallback) {
        call.successCallback = successCallback;
        rtcAdaptor.performReconnectWorkaround(call);
    };
    
    self.sendIntraFrame = function(internalCall) {
        rtcAdaptor.sendIntraFrame(internalCall);
    };
    
    self.sendBlackFrame = function(internalCall) {
        rtcAdaptor.sendBlackFrame(internalCall);
    };
    
    self.getLocalAudioTrack = function(peer) {
        return rtcAdaptor.getLocalAudioTrack(peer);
    };
    
    self.addLocalStream = function(call) {
        rtcAdaptor.addLocalStream(call);
    };
    
    self.isPluginEnabled = function() {
        return rtcAdaptor.isPluginEnabled();
    };
    
    self.sendDTMF = function(call, tone){
        rtcAdaptor.sendDTMF(call, tone);
    };
    
    self.showSettingsWindow = function(){
        rtcAdaptor.getRtcLibrary().showSettingsWindow();
    };

    _globalBroadcaster.subscribe(CONSTANTS.EVENT.TURN_CREDENTIALS_ESTABLISHED, onTurnServerCredentialsAcquired);
    if (__testonly__) { self.setRtcLibrary = function(_rtcLibrary) { rtcAdaptor = _rtcLibrary; }; } 
};

var webRtcManager = new WebRtcManager(webRtcAdaptorFactory, logManager, globalBroadcaster, navigator);
if (__testonly__) { __testonly__.WebRtcManager = WebRtcManager; }
var WebRtcAdaptorUtils = function (){
    
    var logger = logManager.getLogger("webRtcAdaptorUtils");
    
    /**
     * Sets call local stream video send status
     * Previous name of this method was "callSetLocalSendVideo" This message will be deleted.
     * @param {type} call
     * @param {type} status
     */
    this.setLocalStreamVideoSendStatus = function(call, status) {
        logger.debug("setLocalStreamVideoSendStatus= " + status);
        if (call.call) {
            call.call.setSendVideo(status);
        }
        call.peer.showLocalVideo = status;
    };
    
    // TODO: Optimize and refactor this method
    // setReceiveVideo = setReceiveRemoteVideo = setShowRemoteVideoContainer
    // setReceivingVideo = setSendLocalVideo = setShowLocalVideoContainer
    this.callSetReceiveVideo = function(call) {
        var status = sdpParser.getVideoSdpDirection(call.sdp);
        logger.debug("callSetReceiveVideo: status= " + status);
        call.call.setReceiveVideo(sdpParser.isSdpVideoSendEnabled(call.sdp));
        call.call.setReceivingVideo(sdpParser.isSdpVideoReceiveEnabled(call.sdp));
    };

    /**
     * Indicates call local stream video send status
     * @param {type} call
     * @returns true/false
     */
    this.callCanLocalSendVideo = function(call) {
        return call.call.canSendVideo();
    };
};

var webRtcAdaptorUtils = new WebRtcAdaptorUtils();
var Notification = function() {
    /**
     * Called on receipt of a 410 GONE message
     *
     * @name fcs.notification.onGoneReceived
     * @event
     * 
     * @since 3.0.0
     * 
     * @example 
     * var goneReceived = function(data){
     *    // do something here
     * };
     * 
     * fcs.notification.onGoneReceived = goneReceived;
     */
    
    /**
     * Manages a user's subscriptions to remote notifications.  A user may subscribe to specific
     * event types (calls, instant messages, presence updates) using SNMP or long polling.
     *
     * Note that call/im/presence event handlers must be assigned in other objects before calling
     * notificationSubscribe/extendNotificationSubscription.
     *
     * @name notification
     * @namespace
     * @memberOf fcs
     * 
     * @version 3.0.4
     * @since 3.0.0
     *
     * @see fcs.config.notificationType
     * @see fcs.im.onReceived
     * @see fcs.call.onReceived
     * @see fcs.presence.onReceived
     *
     */

    /**
     * Enum for notification types.
     *
     * @name NotificationTypes
     * @property {string} LONGPOLLING Long polling type
     * @property {string} WEBSOCKET WebSocket type
     * @readonly
     * @memberOf fcs.notification
     */
    
    /**
     * Boolean for anonymous users.
     * Used by rest requests to determine some parameters at URL and body).
     *
     * @name isAnonymous
     * @return isAnonymous true if the user is anonymous
     * @since 3.0.0
     * @memberOf fcs.notification
     */
    
    /**
     * Unsubscribe from getting notifications
     *
     * @name fcs.notification.stop
     * @param {function} onSuccess Success callback
     * @param {function} onFailure Failure callback
     * @param {boolean} synchronous Determines if the operation is sync or async
     * @function
     * @since 3.0.0
     * @example
     * fcs.notification.stop(
     * //Success callback
     * function(){
     *     window.console.log("Notification system is stopped successfully!!")
     * },
     * //Failure callback
     * function(){
     *     window.console.log("Something Wrong Here!!!")
     * },
     * // synchronous
     * false
     * );
     */
    
    /**
     * Subscribe and fetch the notifications <BR />
     * NOTE: Before subscribing, you have to set handlers for received notification. Only handlers registered before starting the notification will receive events.
     * @name fcs.notification.start
     * @param {function} onSuccess Success callback
     * @param {function} onFailure Failure callback
     * @param {boolean} anonymous Is this an anonymous
     * @param {string} cachePrefix Prefix of the cache key to be used (this allows for multiple subscriptions)
     * @param {string} forceLogout Kills the session of the oldest device.(For more information : User Guide Demo Examples in Api Doc ) 
     * @function
     * 
     * @since 3.0.0
     * 
     * @example
     * 
     * //Sets up connection and notification types
     * fcs.setup({
     *        "restUrl": "&lt;rest_url&gt;",
     *        "restPort": "rest_port",
     *        "websocketIP": "&lt;websocket_ip&gt;",
     *        "websocketPort": "&lt;websocket_port&gt;",
     *        "notificationType": "websocket",
     *        "callAuditTimer": "30000",
     *        "clientControlled" : true,
     *        "protocol" : "http",
     *        "serverProvidedTurnCredentials": "false"
     *});
     * 
     * // Login
     * // User must login SPiDR to be able to receive and make calls
     * // Login includes authentication and subscription steps. After logging in you can receive notifications
     * // Provide username and password to the setUserAuth method
     * var incomingCall,outgoingCall;
     * fcs.setUserAuth("user@somedomain.com","password");
     * fcs.notification.start(function(){
     *       //Initialize media
     *       fcs.call.initMedia(function(){},function(){},{
     *                 "pluginLogLevel" : 2,
     *                 "videoContainer" : "",
     *                 "pluginMode" : "auto",
     *                 "iceserver" : [{"url":"stun:206.165.51.23:3478"}]
     *             });
     *       fcs.call.onReceived = function(call) {
     *       //Handle incoming notifications here (incomingCall, callEnd, etc.)
     *       //window.alert("incoming call");
     *       //call.onStateChange(state);
     *       //call.onStreamAdded(streamURL);
     *       incomingCall=call;
     *     }
     * },
     * function(){
     * window.console.log("Something Wrong Here!!!")
     * },
     * false,false,false
     * );
     * 
     */
    
    /**
     * Sets the notification error handler.
     *
     * @name fcs.notification.setOnError
     * @param {function(error)} callback The failure callback to be called.
     * @function
     * @since 3.0.0
     */

    /**
     * Sets the notification success handler.
     *
     * @name fcs.notification.setOnSuccess
     * @param {function} callback The success callback to be called.
     * @function
     * @since 3.0.0
     */

    /**
     * Sets the connection lost handler.
     *
     * @name fcs.notification.setOnConnectionLost
     * @function
     * @since 3.0.0
     */
    
    /**
     * Sets the connection established handler.
     *
     * @name fcs.notification.setOnConnectionEstablished
     * @function
     * @since 3.0.0
     */
    
    /**
     * Will be used by external triggers to fetch notifications.
     *
     * @name fcs.notification.trigger
     * @function
     * @since 3.0.0
     * @example
     *
     * fcs.notification.start();
     *
     * //Native code received SNMP Trigger so retrieve the notification
     *
     * fcs.notification.trigger();
     *
     */
};

var NotificationCallBacks = {};
/* 
 * Finite State machine that defines state transition of basic call model.
 * State machine fires events during state transitions. 
 * Components should register to FSM  in order to receive transition events 
 * 
 */

var CallFSM = function(_logManager) {
    
    this.CallFSMState = {
        INIT: "INIT",
        RINGING: "RINGING",
        TRYING: "TRYING",
        ANSWERING : "ANSWERING",
        COMPLETED: "COMPLETED",
        RINGING_SLOW: "RINGING_SLOW",
        LOCAL_HOLD: "LOCAL_HOLD",
        LOCAL_HOLDING: "LOCAL_HOLDING",
        LOCAL_UNHOLDING: "LOCAL_UNHOLDING",
        LOCAL_VIDEO_STOP_START: "LOCAL_VIDEO_STOP_START",
        REMOTE_OFFER: "REMOTE_OFFER",
        REMOTE_HOLD: "REMOTE_HOLD",
        REMOTE_HOLDING: "REMOTE_HOLDING",
        REMOTE_UNHOLDING: "REMOTE_UNHOLDING",
        BOTH_HOLD: "BOTH_HOLD",
        JOINING: "JOINING",
        PROVISIONRECEIVED: "PROVISIONRECEIVED",
        REFER: "REFER",
        TRANSFERING: "TRANSFERING",
        LOCAL_SLOW_START_OFFER: "LOCAL_SLOW_START_OFFER",
        LOCAL_REOFFER: "LOCAL_REOFFER"
    };
    
    //CallFSM returns TransferEvent after state change
    this.TransferEvent = {
        unknownNotification_fsm: "unknownNotification_fsm",
        ignoredNotification_fsm: "ignoredNotification_fsm",
        callStart_fsm: "callStart_fsm",
        callReceived_fsm: "callReceived_fsm",
        answer_fsm: "answer_fsm",
        reject_GUI: "reject_GUI",
        callCompleted_fsm: "callCompleted_fsm",
        noAnswer_fsm: "noAnswer_fsm",
        localEnd_fsm: "localEnd_fsm",
        remoteEnd_fsm: "remoteEnd_fsm",
        answeringRingingSlow_fsm: "answeringRingingSlow_fsm",
        callCompletedAnswering_fsm: "callCompletedAnswering_fsm",
        localHold_fsm: "localHold_fsm",
        localHolding_fsm: "localHolding_fsm",
        remoteHold_fsm: "remoteHold_fsm",
        remoteHolding_fsm: "remoteHolding_fsm",
        localUnHold_fsm: "localUnHold_fsm",
        localUnHolding_fsm: "localUnHolding_fsm",
        remoteUnHold_fsm: "remoteUnHold_fsm",
        remoteUnHolding_fsm: "remoteUnHolding_fsm",
        localVideoStopStart_fsm: "localVideoStopStart_fsm",
        remoteOffer_fsm: "remoteOffer_fsm",
        joining_fsm: "joining_fsm",
        sessionComplete_fsm: "sessionComplete_fsm",
        joiningSuccess_fsm: "joiningSuccess_fsm",
        sessionFail_fsm: "sessionFail_fsm",
        ringing_fsm: "ringing_fsm",
        respondCallUpdate_fsm: "respondCallUpdate_fsm",
        remoteCallUpdate_fsm: "remoteCallUpdate_fsm",
        preCallResponse_fsm: "preCallResponse_fsm",
        forward_fsm: "forward_fsm",
        refer_fsm: "refer_fsm",
        accepted_fsm: "accepted_fsm",
        transfering_fsm: "transfering_fsm",
        transferSuccess_fsm: "transferSuccess_fsm",
        transferFail_fsm: "transferFail_fsm",
        respondCallHoldUpdate_fsm: "respondCallHoldUpdate_fsm",
        remoteOfferDuringLocalHold_fsm: "remoteOfferDuringHold_fsm",
        renegotiationCompleted_fsm: "renegotiationCompleted_fsm",
        slowStartOfferDuringRemoteHold_fsm : "slowStartOfferDuringRemoteHold_fsm",
        slowStartOfferDuringOnCall_fsm: "slowStartOfferDuringOnCall_fsm",
        stateReverted_fsm: "stateReverted_fsm",
        glareCondition_fsm: "glareCondition_fsm",
        sendReInvite_fsm: "sendReInvite_fsm",
        slowStartOfferProcessed_fsm : "slowStartOfferProcessed_fsm",
        performReconnectWorkaround_fsm: "performReconnectWorkaround_fsm"
    };
    
    //CallFSM receives NotificationEvent
    this.NotificationEvent = {
        callStart_GUI: "callStart_GUI",
        callNotify: "callNotify",
        ringing_Notify: "ringing_Notify",
        answer_GUI: "answer_GUI",
        end_GUI: "end_GUI",
        respondCallUpdate_Notify: "respondCallUpdate_Notify",
        respondCallUpdate_glareCondition_Notify: "respondCallUpdate_glareCondition_Notify",
        callCompleted_fsm: "callCompleted_fsm",
        callEnd_Notify: "callEnd_Notify",
        callNotify_noSDP: "callNotify_noSDP",
        startCallUpdate_slowStart_Notify: "startCallUpdate_slowStart_Notify",
        startCallUpdate_remoteHold_Notify: "startCallUpdate_remoteHold_Notify",
        startCallUpdate_remoteOffer_Notify: "startCallUpdate_remoteOffer_Notify",
        joining_Notify: "joining_Notify",
        sessionComplete_Notify: "sessionComplete_Notify",
        joiningSuccess_Notify: "joiningSuccess_Notify",
        sessionFail_Notify: "sessionFail_Notify",
        hold_GUI: "hold_GUI",
        unhold_GUI: "unhold_GUI",
        videoStopStart_GUI: "videoStopStart_GUI",
        sessionProgress: "sessionProgress",
        callCancel_Notify: "callCancel_Notify",
        forward_GUI: "forward_GUI",
        refer_JSL: "refer_JSL",
        accepted_Notify: "accepted_Notify",
        transfering: "transfering",
        requestFailure_JSL: "requestFailure_JSL",
        webrtcFailure_JSL: "webrtcFailure_JSL",
        remoteOfferProcessed_JSL: "remoteOfferProcessed_JSL",
        remoteHoldProcessed_JSL: "remoteHoldProcessed_JSL",
        remoteUnHoldProcessed_JSL: "remoteUnHoldProcessed_JSL",
        slowStartOfferProcessed_JSL: "slowStartOfferProcessed_JSL",
        performReconnectWorkaround_JSL: "performReconnectWorkaround_JSL",
        sendReInvite_JSL: "sendReInvite_JSL"
    };
    var self = this, logger = _logManager.getLogger("callFsm");
    
    function FSM (call, event, onSuccess, onFailure) {
        //TODO move sessionProgress somewhere else?
        var sessionProgress = "sessionProgress", 
                callState = self.getCurrentState(call);
        switch (callState) {
            case self.CallFSMState.INIT:
                switch (event) {
                    case self.NotificationEvent.callStart_GUI:
                        call.currentState = self.CallFSMState.TRYING;
                        onSuccess(call, self.TransferEvent.callStart_fsm);
                        break;
                    case self.NotificationEvent.callNotify:
                        call.currentState = self.CallFSMState.RINGING;
                        onSuccess(call, self.TransferEvent.callReceived_fsm);
                        break;
                    case self.NotificationEvent.callNotify_noSDP:
                        call.currentState = self.CallFSMState.RINGING_SLOW;
                        onSuccess(call, self.TransferEvent.callReceived_fsm);
                        break;
                    case self.NotificationEvent.joiningSuccess_Notify:
                        call.currentState = self.CallFSMState.PROVISIONRECEIVED;
                        onSuccess(call, self.TransferEvent.joiningSuccess_fsm);
                        break;
                    default:
                        onFailure(call, self.TransferEvent.unknownNotification_fsm);
                        break;     
                }
                break;
            case self.CallFSMState.RINGING:
                switch (event) {
                    case self.NotificationEvent.answer_GUI:
                        call.currentState = self.CallFSMState.COMPLETED;
                        onSuccess(call, self.TransferEvent.answer_fsm);
                        break;
                    case self.NotificationEvent.end_GUI:
                        call.currentState = self.CallFSMState.INIT;
                        onSuccess(call, self.TransferEvent.reject_GUI);
                        break;
                    case self.NotificationEvent.callNotify_noSDP:
                        call.currentState = self.CallFSMState.RINGING_SLOW;
                        onSuccess(call, self.TransferEvent.callReceived_fsm);
                        break;
                    case self.NotificationEvent.callEnd_Notify:
                    case self.NotificationEvent.callCancel_Notify:
                        call.currentState = self.CallFSMState.INIT;
                        onSuccess(call, self.TransferEvent.remoteEnd_fsm);
                        break;
                    case self.NotificationEvent.forward_GUI:
                        call.currentState = self.CallFSMState.INIT;
                        onSuccess(call, self.TransferEvent.forward_fsm);
                        break;                        
                    default:
                        onFailure(call, self.TransferEvent.unknownNotification_fsm);
                        break;      
                }
                break;
            case self.CallFSMState.RINGING_SLOW:
                switch (event) {
                    case self.NotificationEvent.answer_GUI:
                        call.currentState = self.CallFSMState.ANSWERING;
                        onSuccess(call, self.TransferEvent.answerRingingSlow_fsm);
                        break;
                    case self.NotificationEvent.end_GUI:
                        call.currentState = self.CallFSMState.INIT;
                        onSuccess(call, self.TransferEvent.reject_GUI);
                        break;
                    case self.NotificationEvent.callEnd_Notify:
                    case self.NotificationEvent.callCancel_Notify:
                        call.currentState = self.CallFSMState.INIT;
                        onSuccess(call, self.TransferEvent.remoteEnd_fsm);
                        break;
                    case self.NotificationEvent.forward_GUI:
                        call.currentState = self.CallFSMState.INIT;
                        onSuccess(call, self.TransferEvent.forward_fsm);
                        break;        
                    default:
                        onFailure(call, self.TransferEvent.unknownNotification_fsm);
                        break; 
                }
                break;
            case self.CallFSMState.ANSWERING:
                switch (event) {
                    case self.NotificationEvent.respondCallUpdate_Notify:
                        call.currentState = self.CallFSMState.COMPLETED;
                        onSuccess(call, self.TransferEvent.callCompletedAnswering_fsm);
                        break;
                    case self.NotificationEvent.end_GUI:
                        call.currentState = self.CallFSMState.INIT;
                        onSuccess(call, self.TransferEvent.localEnd_fsm);
                        break;
                    case self.NotificationEvent.callEnd_Notify:
                        call.currentState = self.CallFSMState.INIT;
                        onSuccess(call, self.TransferEvent.remoteEnd_fsm);
                        break;
                    default:
                        onFailure(call, self.TransferEvent.unknownNotification_fsm);
                        break; 
                }
                break;
            case self.CallFSMState.TRYING:
                switch (event) {
                    case self.NotificationEvent.sessionProgress:
                    case sessionProgress:
                        call.currentState = self.CallFSMState.PROVISIONRECEIVED;
                        onSuccess(call, self.TransferEvent.preCallResponse_fsm);
                        break;
                    case self.NotificationEvent.ringing_Notify:
                        call.currentState = self.CallFSMState.PROVISIONRECEIVED;
                        onSuccess(call, self.TransferEvent.ringing_fsm);
                        break;
                    case self.NotificationEvent.end_GUI:
                        call.currentState = self.CallFSMState.INIT;
                        onSuccess(call, self.TransferEvent.localEnd_fsm);
                        break;
                    case self.NotificationEvent.callEnd_Notify:
                        call.currentState = self.CallFSMState.INIT;
                        onSuccess(call, self.TransferEvent.noAnswer_fsm);
                        break;
                    case self.NotificationEvent.respondCallUpdate_Notify:
                        call.currentState = self.CallFSMState.COMPLETED;
                        onSuccess(call, self.TransferEvent.callCompleted_fsm);
                        break;
                    default:
                        onFailure(call, self.TransferEvent.unknownNotification_fsm);
                        break;                            
                }
                break;
            case self.CallFSMState.PROVISIONRECEIVED:
                switch (event) {
                    case self.NotificationEvent.respondCallUpdate_Notify:
                        call.currentState = self.CallFSMState.COMPLETED;
                        onSuccess(call, self.TransferEvent.callCompleted_fsm);
                        break;
                    case self.NotificationEvent.end_GUI:
                        call.currentState = self.CallFSMState.INIT;
                        onSuccess(call, self.TransferEvent.localEnd_fsm);
                        break;
                    case self.NotificationEvent.callEnd_Notify:
                        call.currentState = self.CallFSMState.INIT;
                        onSuccess(call, self.TransferEvent.remoteEnd_fsm);
                        break;                        
                    case self.NotificationEvent.ringing_Notify:
                        onSuccess(call, self.TransferEvent.ringing_fsm);
                        break;
                    case self.NotificationEvent.sessionProgress:
                    case sessionProgress:
                        onSuccess(call, self.TransferEvent.preCallResponse_fsm);
                        break;                        
                    default:
                        onFailure(call, self.TransferEvent.unknownNotification_fsm);
                        break;
                }
                break;
            case self.CallFSMState.COMPLETED:
                switch (event) {
                    case self.NotificationEvent.end_GUI:
                        call.currentState = self.CallFSMState.INIT;
                        onSuccess(call, self.TransferEvent.localEnd_fsm);
                        break;
                    case self.NotificationEvent.callEnd_Notify:
                        call.currentState = self.CallFSMState.INIT;
                        onSuccess(call, self.TransferEvent.remoteEnd_fsm);
                        break;
                    case self.NotificationEvent.startCallUpdate_remoteHold_Notify:
                        call.previousState = call.currentState;
                        call.currentState=self.CallFSMState.REMOTE_HOLDING;
                        onSuccess(call,self.TransferEvent.remoteHolding_fsm);
                        break;
                    case self.NotificationEvent.startCallUpdate_slowStart_Notify:
                        call.previousState = call.currentState;
                        call.currentState=self.CallFSMState.LOCAL_SLOW_START_OFFER;
                        onSuccess(call,self.TransferEvent.slowStartOfferDuringOnCall_fsm);    
                        break;
                    case self.NotificationEvent.hold_GUI:
                        call.previousState = call.currentState;
                        call.currentState=self.CallFSMState.LOCAL_HOLDING;
                        onSuccess(call,self.TransferEvent.localHolding_fsm);
                        break;
                    case self.NotificationEvent.videoStopStart_GUI:
                        call.previousState = call.currentState;
                        call.currentState=self.CallFSMState.LOCAL_VIDEO_STOP_START;
                        onSuccess(call,self.TransferEvent.localVideoStopStart_fsm);
                        break;
                    case self.NotificationEvent.startCallUpdate_remoteOffer_Notify:
                        call.previousState = call.currentState;
                        call.currentState=self.CallFSMState.REMOTE_OFFER;
                        onSuccess(call,self.TransferEvent.remoteOffer_fsm);
                        break;
                    case self.NotificationEvent.transfering:
                        call.previousState = call.currentState;
                        call.currentState = self.CallFSMState.TRANSFERING;
                        onSuccess(call, self.TransferEvent.transfering_fsm);
                        break;
                    case self.NotificationEvent.callCancel_Notify:
                        onSuccess(call, self.TransferEvent.ignoredNotification_fsm);
                        break;
                    case self.NotificationEvent.performReconnectWorkaround_JSL:
                        call.previousState = call.currentState;
                        call.currentState=self.CallFSMState.LOCAL_REOFFER;
                        onSuccess(call,self.TransferEvent.performReconnectWorkaround_fsm);
                        break;
                    case self.NotificationEvent.sendReInvite_JSL:
                        call.previousState = call.currentState;
                        call.currentState=self.CallFSMState.LOCAL_REOFFER;
                        onSuccess(call,self.TransferEvent.sendReInvite_fsm);
                        break;
                    default:
                        onFailure(call, self.TransferEvent.unknownNotification_fsm);
                        break;
                }
                break;
            case self.CallFSMState.LOCAL_REOFFER:
                switch (event) {
                    case self.NotificationEvent.end_GUI:
                        call.currentState = self.CallFSMState.INIT;
                        onSuccess(call, self.TransferEvent.localEnd_fsm);
                        break;
                    case self.NotificationEvent.callEnd_Notify:
                        call.currentState = self.CallFSMState.INIT;
                        onSuccess(call, self.TransferEvent.remoteEnd_fsm);
                        break;
                    case self.NotificationEvent.respondCallUpdate_Notify:
                        call.currentState=call.previousState;
                        onSuccess(call,self.TransferEvent.respondCallUpdate_fsm);
                        break;
                    case self.NotificationEvent.webrtcFailure_JSL:
                    case self.NotificationEvent.requestFailure_JSL:
                        call.currentState=call.previousState;
                        onSuccess(call, self.TransferEvent.stateReverted_fsm);
                        break;
                    default:
                        onFailure(call, self.TransferEvent.unknownNotification_fsm);
                        break;
                }
                break;
            case self.CallFSMState.REMOTE_OFFER:
                switch (event) {
                    case self.NotificationEvent.end_GUI:
                        call.currentState = self.CallFSMState.INIT;
                        onSuccess(call, self.TransferEvent.localEnd_fsm);
                        break;
                    case self.NotificationEvent.callEnd_Notify:
                        call.currentState = self.CallFSMState.INIT;
                        onSuccess(call, self.TransferEvent.remoteEnd_fsm);
                        break;
                    case self.NotificationEvent.remoteOfferProcessed_JSL:
                        call.currentState=call.previousState;
                        onSuccess(call,self.TransferEvent.renegotiationCompleted_fsm);
                        break;
                    case self.NotificationEvent.requestFailure_JSL:
                    case self.NotificationEvent.webrtcFailure_JSL:
                        call.currentState=call.previousState;
                        onSuccess(call, self.TransferEvent.stateReverted_fsm);
                        break;
                    default:
                        onFailure(call, self.TransferEvent.unknownNotification_fsm);
                        break;
                }
                break;
            case self.CallFSMState.LOCAL_VIDEO_STOP_START:
                switch (event) {
                    case self.NotificationEvent.end_GUI:
                        call.currentState = self.CallFSMState.INIT;
                        onSuccess(call, self.TransferEvent.localEnd_fsm);
                        break;
                    case self.NotificationEvent.callEnd_Notify:
                        call.currentState = self.CallFSMState.INIT;
                        onSuccess(call, self.TransferEvent.remoteEnd_fsm);
                        break;
                    case self.NotificationEvent.respondCallUpdate_Notify:
                        call.currentState=call.previousState;
                        onSuccess(call,self.TransferEvent.respondCallUpdate_fsm);
                        break;
                    case self.NotificationEvent.requestFailure_JSL:
                    case self.NotificationEvent.webrtcFailure_JSL:
                        call.currentState=call.previousState;
                        onSuccess(call, self.TransferEvent.stateReverted_fsm);
                        break;
                    case self.NotificationEvent.respondCallUpdate_glareCondition_Notify:
                        call.currentState=call.previousState;
                        onSuccess(call, self.TransferEvent.glareCondition_fsm);
                       break;
                    default:
                        onFailure(call, self.TransferEvent.unknownNotification_fsm);
                        break;
                }
                break;
            case self.CallFSMState.LOCAL_HOLDING:
                switch (event) {
                    case self.NotificationEvent.end_GUI:
                        call.currentState = self.CallFSMState.INIT;
                        onSuccess(call, self.TransferEvent.localEnd_fsm);
                        break;
                    case self.NotificationEvent.callEnd_Notify:
                        call.currentState = self.CallFSMState.INIT;
                        onSuccess(call, self.TransferEvent.remoteEnd_fsm);
                        break;
                    case self.NotificationEvent.respondCallUpdate_Notify:
                        call.currentState = self.CallFSMState.LOCAL_HOLD;
                        if (call.previousState === self.CallFSMState.REMOTE_HOLD) {
                            call.currentState=self.CallFSMState.BOTH_HOLD;
                        }
                        call.previousState = callState;
                        onSuccess(call,self.TransferEvent.respondCallHoldUpdate_fsm);
                        break;
                    case self.NotificationEvent.requestFailure_JSL:
                    case self.NotificationEvent.webrtcFailure_JSL:
                        call.currentState=call.previousState;
                        onSuccess(call, self.TransferEvent.stateReverted_fsm);
                        break;
                    case self.NotificationEvent.respondCallUpdate_glareCondition_Notify:
                        call.currentState=call.previousState;
                        onSuccess(call, self.TransferEvent.glareCondition_fsm);
                       break;
                    default:
                        onFailure(call, self.TransferEvent.unknownNotification_fsm);
                        break;
                }
                break;
            case self.CallFSMState.LOCAL_UNHOLDING:
                switch (event) {
                    case self.NotificationEvent.end_GUI:
                        call.currentState = self.CallFSMState.INIT;
                        onSuccess(call, self.TransferEvent.localEnd_fsm);
                        break;
                    case self.NotificationEvent.callEnd_Notify:
                        call.currentState = self.CallFSMState.INIT;
                        onSuccess(call, self.TransferEvent.remoteEnd_fsm);
                        break;
                    case self.NotificationEvent.respondCallUpdate_Notify:
                        call.currentState = self.CallFSMState.COMPLETED;
                        if (call.previousState === self.CallFSMState.BOTH_HOLD) {
                            call.currentState=self.CallFSMState.REMOTE_HOLD;
                        }
                        call.previousState = callState;
                        onSuccess(call,self.TransferEvent.respondCallHoldUpdate_fsm);
                        break;
                    case self.NotificationEvent.requestFailure_JSL:
                    case self.NotificationEvent.webrtcFailure_JSL:
                        call.currentState=call.previousState;
                        onSuccess(call, self.TransferEvent.stateReverted_fsm);
                        break;
                    case self.NotificationEvent.respondCallUpdate_glareCondition_Notify:
                        call.currentState=call.previousState;
                        onSuccess(call, self.TransferEvent.glareCondition_fsm);
                       break;
                    default:
                        onFailure(call, self.TransferEvent.unknownNotification_fsm);
                        break;
                }
                break;
            case self.CallFSMState.LOCAL_HOLD:
                switch (event) {
                    case self.NotificationEvent.end_GUI:
                        call.currentState = self.CallFSMState.INIT;
                        onSuccess(call, self.TransferEvent.localEnd_fsm);
                        break;
                    case self.NotificationEvent.callEnd_Notify:
                        call.currentState = self.CallFSMState.INIT;
                        onSuccess(call, self.TransferEvent.remoteEnd_fsm);
                        break;
                    case self.NotificationEvent.startCallUpdate_remoteHold_Notify:
                        call.previousState = call.currentState;
                        call.currentState = self.CallFSMState.REMOTE_HOLDING;
                        onSuccess(call, self.TransferEvent.remoteHolding_fsm);
                        break;
                    case self.NotificationEvent.startCallUpdate_remoteOffer_Notify:
                        onSuccess(call, self.TransferEvent.remoteOfferDuringLocalHold_fsm);
                        break;
                    case self.NotificationEvent.unhold_GUI:
                        call.previousState = call.currentState;
                        call.currentState=self.CallFSMState.LOCAL_UNHOLDING;
                        onSuccess(call,self.TransferEvent.localUnHolding_fsm);
                        break;
                    case self.NotificationEvent.joining_Notify:
                        call.previousState = call.currentState;
                        call.currentState=self.CallFSMState.JOINING;
                        onSuccess(call,self.TransferEvent.joining_fsm);
                        break;
                    case self.NotificationEvent.transfering:
                        call.previousState = call.currentState;
                        call.currentState = self.CallFSMState.TRANSFERING;
                        onSuccess(call, self.TransferEvent.transfering_fsm);
                        break;
                    case self.NotificationEvent.performReconnectWorkaround_JSL:
                        call.previousState = call.currentState;
                        call.currentState=self.CallFSMState.LOCAL_REOFFER;
                        onSuccess(call,self.TransferEvent.performReconnectWorkaround_fsm);
                        break;
                    default:
                        onFailure(call, self.TransferEvent.unknownNotification_fsm);
                        break;
                }
                break;
            case self.CallFSMState.REMOTE_HOLDING:
                switch (event) {
                    case self.NotificationEvent.end_GUI:
                        call.currentState = self.CallFSMState.INIT;
                        onSuccess(call, self.TransferEvent.localEnd_fsm);
                        break;
                    case self.NotificationEvent.callEnd_Notify:
                        call.currentState = self.CallFSMState.INIT;
                        onSuccess(call, self.TransferEvent.remoteEnd_fsm);
                        break;
                    case self.NotificationEvent.remoteHoldProcessed_JSL:
                        call.currentState = self.CallFSMState.REMOTE_HOLD;
                        if (call.previousState === self.CallFSMState.LOCAL_HOLD) {
                            call.currentState=self.CallFSMState.BOTH_HOLD;
                        }
                        call.previousState = callState;
                        onSuccess(call,self.TransferEvent.remoteHold_fsm);
                        break;
                    case self.NotificationEvent.requestFailure_JSL:
                    case self.NotificationEvent.webrtcFailure_JSL:
                        call.currentState=call.previousState;
                        onSuccess(call, self.TransferEvent.stateReverted_fsm);
                        break;
                    default:
                        onFailure(call, self.TransferEvent.unknownNotification_fsm);
                        break;
                }
                break;
            case self.CallFSMState.REMOTE_UNHOLDING:
                switch (event) {
                    case self.NotificationEvent.end_GUI:
                        call.currentState = self.CallFSMState.INIT;
                        onSuccess(call, self.TransferEvent.localEnd_fsm);
                        break;
                    case self.NotificationEvent.callEnd_Notify:
                        call.currentState = self.CallFSMState.INIT;
                        onSuccess(call, self.TransferEvent.remoteEnd_fsm);
                        break;
                    case self.NotificationEvent.remoteUnHoldProcessed_JSL:
                        call.currentState = self.CallFSMState.COMPLETED;
                        if (call.previousState === self.CallFSMState.BOTH_HOLD) {
                            call.currentState=self.CallFSMState.LOCAL_HOLD;
                        }
                        call.previousState = callState;
                        onSuccess(call,self.TransferEvent.remoteUnHold_fsm);
                        break;
                    case self.NotificationEvent.requestFailure_JSL:
                    case self.NotificationEvent.webrtcFailure_JSL:
                        call.currentState=call.previousState;
                        onSuccess(call, self.TransferEvent.stateReverted_fsm);
                        break;
                    default:
                        onFailure(call, self.TransferEvent.unknownNotification_fsm);
                        break;
                }
                break;
            case self.CallFSMState.REMOTE_HOLD:
                switch (event) {
                    case self.NotificationEvent.end_GUI:
                        call.currentState = self.CallFSMState.INIT;
                        onSuccess(call, self.TransferEvent.localEnd_fsm);
                        break;
                    case self.NotificationEvent.callEnd_Notify:
                        call.currentState = self.CallFSMState.INIT;
                        onSuccess(call, self.TransferEvent.remoteEnd_fsm);
                        break;
                    case self.NotificationEvent.startCallUpdate_remoteHold_Notify:
                        call.previousState = call.currentState;
                        call.currentState = self.CallFSMState.REMOTE_HOLDING;
                        onSuccess(call, self.TransferEvent.remoteHolding_fsm);
                        break;
                    case self.NotificationEvent.startCallUpdate_remoteOffer_Notify:
                        call.previousState = call.currentState;
                        call.currentState = self.CallFSMState.REMOTE_UNHOLDING;
                        onSuccess(call, self.TransferEvent.remoteUnHolding_fsm);
                        break;
                    case self.NotificationEvent.startCallUpdate_slowStart_Notify:
                        call.previousState = call.currentState;
                        call.currentState=self.CallFSMState.LOCAL_SLOW_START_OFFER;
                        onSuccess(call,self.TransferEvent.slowStartOfferDuringRemoteHold_fsm);    
                        break;
                    case self.NotificationEvent.hold_GUI:
                        call.previousState = call.currentState;
                        call.currentState=self.CallFSMState.LOCAL_HOLDING;
                        onSuccess(call,self.TransferEvent.localHolding_fsm);
                        break;
                    case self.NotificationEvent.joining_Notify:
                        call.previousState = call.currentState;
                        call.currentState=self.CallFSMState.JOINING;
                        onSuccess(call,self.TransferEvent.joining_fsm);
                        break;
                    case self.NotificationEvent.performReconnectWorkaround_JSL:
                        call.previousState = call.currentState;
                        call.currentState=self.CallFSMState.LOCAL_REOFFER;
                        onSuccess(call,self.TransferEvent.performReconnectWorkaround_fsm);
                        break;
                    default:
                        onFailure(call, self.TransferEvent.unknownNotification_fsm);
                        break;   
                }
                break;
            case self.CallFSMState.BOTH_HOLD:
                switch (event) {
                    case self.NotificationEvent.end_GUI:
                        call.currentState = self.CallFSMState.INIT;
                        onSuccess(call, self.TransferEvent.localEnd_fsm);
                        break;
                    case self.NotificationEvent.callEnd_Notify:
                        call.currentState = self.CallFSMState.INIT;
                        onSuccess(call, self.TransferEvent.remoteEnd_fsm);
                        break;
                    case self.NotificationEvent.startCallUpdate_remoteHold_Notify:
                    case self.NotificationEvent.startCallUpdate_remoteOffer_Notify:
                        call.previousState = call.currentState;
                        call.currentState = self.CallFSMState.REMOTE_UNHOLDING;
                        onSuccess(call, self.TransferEvent.remoteUnHolding_fsm);
                        break;
                    case self.NotificationEvent.unhold_GUI:
                        call.previousState = call.currentState;
                        call.currentState=self.CallFSMState.LOCAL_UNHOLDING;
                        onSuccess(call,self.TransferEvent.localUnHolding_fsm);
                        break;
                    case self.NotificationEvent.joining_Notify:
                        call.previousState = call.currentState;
                        call.currentState=self.CallFSMState.JOINING;
                        onSuccess(call,self.TransferEvent.joining_fsm);
                        break;
                    case self.NotificationEvent.transfering:
                        call.previousState = call.currentState;
                        call.currentState = self.CallFSMState.TRANSFERING;
                        onSuccess(call, self.TransferEvent.transfering_fsm);
                        break;
                    case self.NotificationEvent.performReconnectWorkaround_JSL:
                        call.previousState = call.currentState;
                        call.currentState=self.CallFSMState.LOCAL_REOFFER;
                        onSuccess(call,self.TransferEvent.performReconnectWorkaround_fsm);
                        break;
                    default:
                        onFailure(call, self.TransferEvent.unknownNotification_fsm);
                        break;  
                }
                break;
            case self.CallFSMState.LOCAL_SLOW_START_OFFER:
                switch (event) {
                    case self.NotificationEvent.end_GUI:
                        call.currentState = self.CallFSMState.INIT;
                        onSuccess(call, self.TransferEvent.localEnd_fsm);
                        break;
                    case self.NotificationEvent.callEnd_Notify:
                        call.currentState = self.CallFSMState.INIT;
                        onSuccess(call, self.TransferEvent.remoteEnd_fsm);
                        break;
                    case self.NotificationEvent.respondCallUpdate_Notify:
                        call.previousState = call.currentState;
                        call.currentState=self.CallFSMState.COMPLETED;
                        onSuccess(call,self.TransferEvent.respondCallUpdate_fsm);
                        break;
                    case self.NotificationEvent.requestFailure_JSL:
                    case self.NotificationEvent.webrtcFailure_JSL:
                        call.currentState=call.previousState;
                        onSuccess(call, self.TransferEvent.stateReverted_fsm);
                        break;
                    case self.NotificationEvent.slowStartOfferProcessed_JSL:
                        onSuccess(call, self.TransferEvent.slowStartOfferProcessed_fsm);
                    break;
                    default:
                        onFailure(call, self.TransferEvent.unknownNotification_fsm);
                        break;
                }
                break;
            case self.CallFSMState.JOINING:
                switch (event) {
                    case self.NotificationEvent.end_GUI:
                        call.currentState = self.CallFSMState.INIT;
                        onSuccess(call, self.TransferEvent.localEnd_fsm);
                        break;
                    case self.NotificationEvent.callEnd_Notify:
                        call.currentState = self.CallFSMState.INIT;
                        onSuccess(call, self.TransferEvent.remoteEnd_fsm);
                        break;
                    case self.NotificationEvent.sessionComplete_Notify:
                        call.currentState = self.CallFSMState.INIT;
                        onSuccess(call, self.TransferEvent.sessionComplete_fsm);
                        break;
                    case self.NotificationEvent.sessionFail_Notify:
                        call.currentState = call.previousState;
                        onSuccess(call, self.TransferEvent.sessionFail_fsm);
                        break;
                    case self.NotificationEvent.refer_JSL:
                        call.currentState = self.CallFSMState.REFER;
                        onSuccess(call, self.TransferEvent.refer_fsm);
                        break;
                    default:
                        onFailure(call, self.TransferEvent.unknownNotification_fsm);
                        break;       
                }
                break;
            case self.CallFSMState.REFER:
                switch (event) {
                    case self.NotificationEvent.end_GUI:
                        call.currentState = self.CallFSMState.INIT;
                        onSuccess(call, self.TransferEvent.localEnd_fsm);
                        break;
                    case self.NotificationEvent.callEnd_Notify:
                        call.currentState = self.CallFSMState.INIT;
                        onSuccess(call, self.TransferEvent.remoteEnd_fsm);
                        break;   
                    case self.NotificationEvent.sessionComplete_Notify:
                        call.currentState = self.CallFSMState.INIT;
                        onSuccess(call, self.TransferEvent.sessionComplete_fsm);
                        break;
                    case self.NotificationEvent.sessionFail_Notify:
                        call.currentState = call.previousState;
                        onSuccess(call, self.TransferEvent.sessionFail_fsm);
                        break;  
                    //TODO Tolga - talk with lale
                    case self.NotificationEvent.accepted_Notify:
                        onSuccess(call, self.TransferEvent.accepted_fsm);                        
                        break; 
                    default:
                        onFailure(call, self.TransferEvent.unknownNotification_fsm);
                        break;       
                }
                break;
           case self.CallFSMState.TRANSFERING:
                switch (event) {
                    case self.NotificationEvent.end_GUI:
                        call.currentState = self.CallFSMState.INIT;
                        onSuccess(call, self.TransferEvent.localEnd_fsm);
                        break;
                    case self.NotificationEvent.callEnd_Notify:
                        call.currentState = self.CallFSMState.INIT;
                        onSuccess(call, self.TransferEvent.remoteEnd_fsm);
                        break;   
                    case self.NotificationEvent.sessionComplete_Notify:
                        call.currentState = self.CallFSMState.INIT;
                        onSuccess(call, self.TransferEvent.transferSuccess_fsm);
                        break;
                    case self.NotificationEvent.sessionFail_Notify:
                        call.currentState = call.previousState;
                        onSuccess(call, self.TransferEvent.transferFail_fsm);
                        break;  
                        //TODO this notification is consumed for now - it is there for completeness
                    case self.NotificationEvent.accepted_Notify:
                        onSuccess(call, self.TransferEvent.accepted_fsm);
                        break;
                    case self.NotificationEvent.startCallUpdate_slowStart_Notify:
                    case self.NotificationEvent.startCallUpdate_remoteHold_Notify:
                    case self.NotificationEvent.startCallUpdate_remoteOffer_Notify:
                        // Some client send hold during transfer
                        onSuccess(call, self.TransferEvent.remoteCallUpdate_fsm);
                        break;
                    default:
                        onFailure(call, self.TransferEvent.unknownNotification_fsm);
                        break;       
                }
                break;
        }
    }

    self.getCurrentState = function(call){
        return (call.currentState ? call.currentState : self.CallFSMState.INIT);
    };

    this.handleEvent = function(call, event, handler) {
        var initialCallState;
        if (call) {
            initialCallState = self.getCurrentState(call);
            logger.info("FSM received NotificationEvent: " + event + " @ " +
                    initialCallState + " state" + ". Call Id: " + call.id);

            FSM(call, event,
                function(call, transferEvent) {
                    logger.debug("FSM handleEvent successful. (Call FSM) State Passed from " +
                            initialCallState + " to " +
                            self.getCurrentState(call) + ". TransferEvent: " +
                            transferEvent + ". Call Id: " + call.id);
                    handler(call, transferEvent);
                },
                function(call, transferEvent) {
                    logger.error("FSM handleEvent failure: " + transferEvent +
                            " @ " + self.getCurrentState(call) + ". Call Id: " +
                            call.id);
                    handler(call, transferEvent);
                });
        }
    };
};
    
var callFSM = new CallFSM(logManager);

if (__testonly__) { __testonly__.CallFSM = CallFSM; }

var CallControlService = function() {

    var logger = logManager.getLogger("callControlService");

    function addNotificationChannel(data){
        if(fcs.notification.isAnonymous() && window.cache.getItem("NotificationId")) {
            data.callMeRequest.notifyChannelId = window.cache.getItem("NotificationId");
        }
    }
    
    function errorParser(jqXHR){
        if (jqXHR && jqXHR.responseText) {
            return JSON.parse(jqXHR.responseText).callControlResponse;
        }
    }

    this.startCall = function(from, to, sdp, onSuccess, onFailure, convID) {

        logger.info("Call Start Function: " + from + " --> " + to);
        logger.info("Call Start Function: sdp : " + sdp);

        // response of the startCall contains callid/sessionData
        // callMe and callControl returns same response but object types have different namse
        function parseCallStart(data){
            var callid, response = fcs.notification.isAnonymous() ? data.callMeResponse:data.callControlResponse;
            if(response){
                callid = response.sessionData;
            }
            return callid;
        }

        function dataType() {
            var data;
            if (fcs.notification.isAnonymous()) {
                data = {
                    "callMeRequest":
                    {
                        "type":"callStart",
                        "from": from,
                        "to": to,
                        "sdp": sdp
                    }
                };
            }
            else {
                data = {
                    "callControlRequest":
                    {
                        "type":"callStart",
                        "from": from,
                        "to": to,
                        "sdp": sdp
                    }
                };
            }
            return data;
        }

        var data = dataType();
        addNotificationChannel(data);

        if(convID) {
            data.callControlRequest.conversation = "convid="+convID;
        }

        server.sendPostRequest({
            "url": getWAMUrl(1, fcs.notification.isAnonymous() ? "/callMe" : "/callControl"),
            "data": data
        },
        onSuccess,
        onFailure,
        parseCallStart,
        errorParser
        );
    };

    this.audit = function(callid, onSuccess, onFailure){
        var data;

           if (fcs.notification.isAnonymous()) {
                data = {
                    "callMeRequest":
                    {
                        "type":"audit"
                    }
                };
            }
            else {
                data = {
                    "callControlRequest":
                    {
                        "type":"audit"
                    }
                };
            }

        server.sendPutRequest({
            "url": getWAMUrl(1, fcs.notification.isAnonymous() ? "/callme/callSessions/" : "/callControl/callSessions/") + callid,
            "data": data
        }, onSuccess, onFailure, null, errorParser);
    };

    this.hold = function(callid , sdp , onSuccess , onFailure){
        logger.info("Hold Function : sdp : " + sdp);
        var data = {
            "callControlRequest":
            {
                "type":"startCallUpdate",
                "sdp": sdp
            }
        };

        server.sendPutRequest({
            "url": getWAMUrl(1, "/callControl/callSessions/" + callid),
            "data": data
        }, onSuccess, onFailure, null, errorParser);
    };

    this.unhold = function(callid , sdp , onSuccess , onFailure){
        logger.info("UnHold Function : sdp : " + sdp);
        var data = {
            "callControlRequest":
            {
                "type":"startCallUpdate",
                "sdp": sdp
            }
        };
        server.sendPutRequest({
            "url": getWAMUrl(1, "/callControl/callSessions/" + callid),
            "data": data
        }, onSuccess, onFailure, null, errorParser);
    };

    this.reinvite = function(callid , sdp , onSuccess , onFailure){
        logger.info("reinvite Function : sdp : " + sdp);

        var data = {
            "callControlRequest":
            {
                "type":"startCallUpdate",
                "sdp": sdp
            }
        };

        server.sendPutRequest({
            "url": getWAMUrl(1, "/callControl/callSessions/" + callid),
            "data": data
        }, onSuccess, onFailure, null, errorParser);
    };

    this.respondCallUpdate = function(callid , sdp , onSuccess , onFailure){
        logger.info("Respond Call Update Function : sdp : " + sdp);
        var data = {
            "callControlRequest":
            {
                "type":"respondCallUpdate",
                "sdp": sdp
            }
        };
        server.sendPutRequest({
            "url": getWAMUrl(1, "/callControl/callSessions/" + callid),
            "data": data
        }, onSuccess, onFailure, null, errorParser);
    };

    this.join = function (firstSessionData , secondSessionData , sdp , onSuccess , onFailure){
        logger.info("Join Function : sdp : " + sdp);
        function parseJoin(data){
            var callid, response = data.callControlResponse;

            if(response){
                callid = response.sessionData;
            }

            return callid;
        }

        var data = {
            "callControlRequest":
            {
                "type":"join",
                "firstSessionData":firstSessionData,
                "secondSessionData":secondSessionData,
                "sdp": sdp
            }
        };

        if(fcsConfig.clientControlled === "true") {
            data.callControlRequest.clientControlled = "true";
        }


        server.sendPostRequest({
            "url": getWAMUrl(1, "/callControl/"),
            "data": data
        },
        onSuccess,
        onFailure,
        parseJoin,
        errorParser
        );
    };

    this.refer = function(callid, referTo, referredBy, onSuccess , onFailure){
        logger.info("Refer Function : refer to: " + referTo);
        var data = {
            "callControlRequest":
            {
                "type": "refer",
                "from": referredBy,
                "to": referTo
            }
        };

        server.sendPutRequest({
            "url": getWAMUrl(1, "/callControl/callSessions/" + callid),
            "data": data
        }, onSuccess, onFailure, null, errorParser);
    };

    function makeCallControlRequest(type, callid , sdp, onSuccess, onFailure) {
        logger.info("makeCallControlRequest Function : sdp : " + sdp);
        var data = {
            "callControlRequest":{
                "type": type,
                "sdp": sdp
            }
        };

        server.sendPutRequest({
            "url": getWAMUrl(1, "/callControl/callSessions/" + callid),
            "data": data
        }, onSuccess, onFailure, null, errorParser);
    }

    function makeCallControlEndRequest(callid, onSuccess, onFailure) {
        logger.info("makeCallControlEndRequest Function: " + callid);

        server.sendDeleteRequest({
            "url": getWAMUrl(1, fcs.notification.isAnonymous() ? "/callMe/callSessions/" : "/callControl/callSessions/") + callid,
            "data":{}
        },
        onSuccess,
        onFailure,
        null,
        errorParser
        );
    }

    this.endCall = function(callid, onSuccess, onFailure) {
        logger.info("endCall Function: " + callid);
        makeCallControlEndRequest(callid, onSuccess, onFailure, null, errorParser);
    };

    this.answerCall = function(callid, sdp, onSuccess, onFailure) {
        logger.info("Answer Call Function : sdp : " + sdp);
        makeCallControlRequest("callAnswer", callid, sdp, onSuccess, onFailure, null, errorParser);
    };

    function makeRequest(action, sessionData, onSuccess, onFailure, address) {
        logger.info("makeRequest Function with action : " + action);
        var data = {
            "callDispositionRequest":{
                "action": action,
                "sessionData": sessionData
            }
        };
        if(address){
            data.callDispositionRequest.address = address;
        }
        server.sendPostRequest({
            "url": getWAMUrl(1, "/calldisposition"),
            "data":data
        },
        onSuccess,
        onFailure,
        null,
        errorParser
        );
    }

    this.reject = function(callid, onSuccess, onFailure) {
        var dummy;
        logger.info("Reject Function: " + callid);
        makeRequest("reject", callid, onSuccess, onFailure, dummy, errorParser);
    };


    this.forward = function(callid, address , onSuccess, onFailure) {
        logger.info("Forward Function : address: " + address);
        makeRequest("forward", callid, onSuccess, onFailure, address);
    };

   this.transfer = function(callid , address , onSuccess , onFailure){
        logger.info("Call Transfer Function : target address: " + address);
        var data = {
            "callControlRequest":
            {
                "type":"transfer",
                "address": address
            }
        };

        server.sendPutRequest({
            "url": getWAMUrl(1, "/callControl/callSessions/" + callid),
            "data": data
        }, onSuccess, onFailure, null, errorParser);
    };
};

var callControlService = new CallControlService();
var CallManager = function(_webRtcManager, _callFSM, _callControlService,_sdpParser, _logManager) {

    /* AUDIT_KICKOFF_TIMEOUT is the interval we use to kickoff call audit after the call is setup. 
     * The timeout is there to ensure we do not hit call setup race conditions when we try to kickoff the call audit */
    var calls = {}, logger = _logManager.getLogger("callManager"),
            AUDIT_KICKOFF_TIMEOUT = 3000, isReconnected = false,
            fsmNotificationEvent = _callFSM.NotificationEvent,
            fsmState = _callFSM.CallFSMState,
            self = this, isQueueEnabled = true,
            NOTIFICATION_STATE =
            {
                BUSY: 0,
                IDLE: 1
            }, CALL_STATES =
            {
                IN_CALL: 0,
                ON_HOLD: 1,
                RINGING: 2,
                ENDED: 3,
                REJECTED: 4,
                OUTGOING: 5,
                INCOMING: 6,
                ANSWERING: 7,
                JOINED: 8,
                RENEGOTIATION: 9,
                TRANSFERRED: 10,
                ON_REMOTE_HOLD: 11
            }, CALL_HOLD_STATES =
            {
                LOCAL_HOLD: 0,
                REMOTE_HOLD: 1,
                BOTH_HOLD: 2
            };

    function parseAddress(address, contact) {

        if (address.indexOf("sip:", 0) > -1) {
            address = address.replace("sip:", "");
        }
        var displayName = "";
        if (contact === undefined || contact === null) {
            return (address.indexOf("@", 0) > -1) ? "sip:" + address : address;
        }
        if (contact.firstName && contact.firstName !== "") {
            displayName += contact.firstName;
        }
        if (contact.lastName && contact.lastName !== "") {
            if (displayName === "") {
                displayName += contact.lastName;
            }
            else {
                displayName += " " + contact.lastName;
            }
        }
        if (displayName === "") {
            return (address.indexOf("@", 0) > -1) ? "sip:" + address : address;
        }
        return displayName + "<" + ((address.indexOf("@", 0) > -1) ? "sip:" + address : address) + ">";
    }

    /*
     * When connection re-establishes sets isReconnected flag true
     */
    function onConnectionLost() {
        isReconnected = true;
    }
    
    /*
     * clear call resources
     * clear long call audit
     * clear webrtc resources
     * triger web part
     *
     * @param call call object
     * @param state state that will be returned to web part
     */
    function clearResources(call) {
        if (call.call) {
            call.call.clearAuditTimer();
        }
        if (call.pendingRequestTimer) {
            clearTimeout(call.pendingRequestTimer);
        }
        //clear webRTC resources
        _webRtcManager.processEnd(call);
        //clear call object
        delete calls[call.id];
    }

    function setNotificationStateOfCallToBusy(internalCall) {
        logger.debug("Setting notification state to BUSY for call: " + internalCall.id);
        internalCall.notificationState = NOTIFICATION_STATE.BUSY;
    }

    function setNotificationStateOfCallToIdle(internalCall) {
        logger.debug("Setting notification state to IDLE for call: " + internalCall.id);
        internalCall.notificationState = NOTIFICATION_STATE.IDLE;
    }

    function isNotificationStateOfCallBusy(internalCall) {
        return internalCall.notificationState === NOTIFICATION_STATE.BUSY;
    }

    function triggerQueue(call) {
        if (!isQueueEnabled) {
            return;
        }
        logger.debug("NOTIFICATION_QUEUE: Process completed, notification queue state changed to IDLE");
        setNotificationStateOfCallToIdle(call);
        if (call.call.notificationQueue.size() > 0) {
            logger.debug("NOTIFICATION_QUEUE: New notification found in queue, processing it!");
            var notificationObj = call.call.notificationQueue.dequeue();
            self.onNotificationEvent(notificationObj.type, notificationObj.sessionParams);
        }
    }

    function onSubscriptionReEstablished() {
        var id, internalCall;
        if (isReconnected) {
            isReconnected = false;
            for (id in calls) {
                if (calls.hasOwnProperty(id)) {
                    internalCall = calls[id];
                    if (internalCall && _callFSM.getCurrentState(internalCall) !== fsmState.RINGING) {
                        setNotificationStateOfCallToBusy(internalCall);
                        self.delegateToCallFSM(internalCall, fsmNotificationEvent.performReconnectWorkaround_JSL);
                    }
                    else {
                        // If call signalingState is not stable, this call on ringing state. Call will be ended.
                        // Send 0 to delete the call
                        internalCall.call.onStateChange(CALL_STATES.ENDED, 0);
                        clearResources(internalCall);
                    }
                }
            }
        }
    }

    self.CALL_STATES = CALL_STATES;
    self.CALL_HOLD_STATES = CALL_HOLD_STATES;

    self.initMedia = function(onSuccess, onFailure, options) {
        _webRtcManager.initMedia(onSuccess, onFailure, options);
    };

    self.set_logSeverityLevel = function(level) {
        _webRtcManager.set_logSeverityLevel(level);
    };

    self.enable_logCallback = function() {
        _webRtcManager.enable_logCallback();
    };

    self.disable_logCallback = function() {
        _webRtcManager.disable_logCallback();
    };

    self.get_audioInDeviceCount = function() {
        _webRtcManager.get_audioInDeviceCount();
    };

    self.get_audioOutDeviceCount = function() {
        _webRtcManager.get_audioOutDeviceCount();
    };

    self.get_videoDeviceCount = function() {
        _webRtcManager.get_videoDeviceCount();
    };

    self.getUserMedia = function(onSuccess, onFailure, options) {
        _webRtcManager.getUserMedia(onSuccess, onFailure, options);
    };

    self.showSettingsWindow = function(onSuccess, onFailure, options) {
        _webRtcManager.showSettingsWindow(onSuccess, onFailure, options);
    };

    self.getVideoResolutions = function() {
        _webRtcManager.getVideoResolutions();
    };

    self.createStreamRenderer = function(streamId, container, options) {
        return _webRtcManager.createStreamRenderer(streamId, container, options);
    };

    self.disposeStreamRenderer = function(container) {
        _webRtcManager.disposeStreamRenderer(container);
    };

    self.isPluginEnabled = function() {
        return _webRtcManager.isPluginEnabled();
    };

    self.hasGotCalls = function() {
        var callid, internalCall;
        for (callid in calls) {
            if (calls.hasOwnProperty(callid)) {
                internalCall = calls[callid];
                if (internalCall) {
                    logger.info("has got call - id: " + callid + " - state: " + _callFSM.getCurrentState(internalCall));
                    return true;
                }
            }
        }
        return false;
    };

    self.getCalls = function() {
        return calls;
    };

    self.sendIntraFrame = function(callid) {
        var internalCall = calls[callid];
        if (internalCall) {
            _webRtcManager.sendIntraFrame(internalCall);
        }
    };

    self.sendBlackFrame = function(callid) {
        var internalCall = calls[callid];
        if (internalCall) {
            _webRtcManager.sendBlackFrame(internalCall);
        }
    };

    self.delegateToCallFSM = function(call, stateMessage) {
        _callFSM.handleEvent(call, stateMessage, self.onStateChange);
    };
    
    self.answer = function(callid, onSuccess, onFailure, isVideoEnabled, videoQuality) {
        var internalCall = calls[callid],
                videoNegotationAvailable = self.isVideoNegotationAvailable(callid);

        if (internalCall) {           
            // check if term side tries to answer an audio only call with video
            if (videoNegotationAvailable === false && isVideoEnabled === true) {
                logger.error("[callManager.answer] Video Session Not Available Error ");
                utils.callFunctionIfExist(onFailure, fcs.Errors.VIDEO_SESSION_NOT_AVAILABLE);
                return;
            }
            
            internalCall.onIceStateFailure = function(sdp) {
                self.onIceStateFailure(internalCall, sdp);
            };
            
            if (internalCall.sdp) {
                //check with the state machine if the current state would accept an answer.
                if (_callFSM.getCurrentState(internalCall) !== fsmState.RINGING) {
                    utils.callFunctionIfExist(onFailure, fcs.Errors.STATE);
                }
                else {
                    self.getUserMedia(function(mediaInfo) {
                        internalCall.isVideoSourceAllowed = mediaInfo.video;
                        _webRtcManager.createAnswer(
                                internalCall,
                                function(sdp) {
                                    logger.info("[callManager.answer : sdp ]" + sdp);
                                    //change call state
                                    self.delegateToCallFSM(internalCall, fsmNotificationEvent.answer_GUI);
                                    //send answer call
                                    _callControlService.answerCall(
                                            internalCall.id,
                                            sdp,
                                            function() {
                                                //TODO: is this necessary
                                                _webRtcManager.addLocalStream(internalCall);
                                                utils.callFunctionIfExist(onSuccess);
                                            },
                                            onFailure);
                                },
                                function(errStr) {
                                    logger.error("[callManager.answer] Error : " + errStr);
                                    //Change state when the call have failed
                                    //This will trigger send reject
                                    self.delegateToCallFSM(internalCall, fsmNotificationEvent.end_GUI);
                                },
                                isVideoEnabled);
                    }, function(e) {
                        utils.callFunctionIfExist(onFailure, e);
                    },
                            {
                                "audio": true,
                                "video": videoNegotationAvailable ? true : false,
                                "audioIndex": 0,
                                "videoIndex": videoNegotationAvailable ? 0 : -1,
                                "videoResolution": videoQuality
                            });
                }
            }
            else {
                if (_callFSM.getCurrentState(internalCall) !== fsmState.RINGING_SLOW) {
                    utils.callFunctionIfExist(onFailure, fcs.Errors.STATE);
                }
                else {
                    self.getUserMedia(function(mediaInfo) {
                        internalCall.isVideoSourceAllowed = mediaInfo.video;
                        _webRtcManager.createOffer(internalCall, function(sdp) {
                            internalCall.sdp = sdp;
                            self.delegateToCallFSM(internalCall, fsmNotificationEvent.answer_GUI);
                            _callControlService.answerCall(internalCall.id, sdp, onSuccess, onFailure);
                        }, function() {
                            self.delegateToCallFSM(internalCall, fsmNotificationEvent.end_GUI);
                        },
                                isVideoEnabled);
                    }, function(e) {
                        utils.callFunctionIfExist(onFailure, e);
                    },
                            {
                                "audio": true,
                                "video": videoNegotationAvailable ? true : false,
                                "audioIndex": 0,
                                "videoIndex": videoNegotationAvailable ? 0 : -1,
                                "videoResolution": videoQuality
                            });

                }
            }
        }
    };

    self.getIncomingCallById = function(callid) {
        var call = null, cachedCall, internalCall;

        cachedCall = JSON.parse(cache.getItem(callid));
        if (cachedCall) {

            call = new fcs.call.IncomingCall(callid, {reject: cachedCall.optionReject, forward: cachedCall.optionForward, answer: cachedCall.optionAnswer});

            call.setReceiveVideo(_sdpParser.isSdpHasVideo(cachedCall.sdp));

            call.remoteConversationId = cachedCall.remoteConversationId;

            call.callerNumber = cachedCall.callerNumber;
            call.callerName = cachedCall.callerName;
            call.calleeNumber = cachedCall.calleeNumber;
            call.primaryContact = cachedCall.primaryContact;

            internalCall = {
                "call": call,
                "sdp": cachedCall.sdp,
                "id": callid
            };

            internalCall.onIceStateFailure = function(sdp) {
                self.onIceStateFailure(internalCall, sdp);
            };

            calls[callid] = internalCall;

            self.delegateToCallFSM(internalCall, fsmNotificationEvent.callNotify);
        }

        return call;
    };

    function cacheCall(internalCall) {
        var callToCache = {
            "sdp": internalCall.sdp,
            "remoteConversationId": internalCall.call.remoteConversationId,
            "callerNumber": internalCall.call.callerNumber,
            "callerName": internalCall.call.callerName,
            "calleeNumber": internalCall.call.calleeNumber,
            "primaryContact": internalCall.call.primaryContact,
            "optionReject": internalCall.call.canReject(),
            "optionForward": internalCall.call.canForward(),
            "optionAnswer": internalCall.call.canAnswer()
        };

        cache.setItem(internalCall.id, JSON.stringify(callToCache));
    }

    self.start = function(from, contact, to, onSuccess, onFailure, isVideoEnabled, sendInitialVideo, videoQuality, convID) {
        var internalCall = {};

        logger.info("start call... from: " + from
                + " contact: " + JSON.stringify(contact)
                + " to: " + to
                + " isVideoEnabled: " + isVideoEnabled
                + " sendInitialVideo: " + sendInitialVideo
                + " videoQuality: " + videoQuality
                + " convID: " + convID);

        self.getUserMedia(function(mediaInfo) {
            internalCall.isVideoSourceAllowed = mediaInfo.video;
            _webRtcManager.createOffer(internalCall,
                    function(sdp) {
                        logger.info("[callManager.start : sdp ]" + sdp);

                        internalCall.sdp = sdp;
                        _callControlService.startCall(
                                parseAddress(from, contact),
                                parseAddress(to),
                                sdp,
                                function(callid) {

                                    internalCall.call = new fcs.call.OutgoingCall(callid);
                                    internalCall.id = callid;

                                    internalCall.onIceStateFailure = function(sdp) {
                                        self.onIceStateFailure(internalCall, sdp);
                                    };

                                    self.delegateToCallFSM(internalCall, fsmNotificationEvent.callStart_GUI);
                                    calls[callid] = internalCall;
                                    internalCall.call.setSendVideo(sendInitialVideo);
                                    //TODO: is this necessary
                                    _webRtcManager.addLocalStream(internalCall);
                                    utils.callFunctionIfExist(onSuccess, internalCall.call);
                                },
                                function(e) {
                                    //TODO: update call state
                                    utils.callFunctionIfExist(onFailure, e);
                                },
                                convID
                                );
                    }, function(e) {
                logger.error("doOffer failed: " + e);
                utils.callFunctionIfExist(onFailure, e);
            },
                    sendInitialVideo
                    );
        }, function() {
            utils.callFunctionIfExist(onFailure);
        },
                {
                    "audio": true,
                    "video": isVideoEnabled ? true : false,
                    "audioIndex": 0,
                    "videoIndex": isVideoEnabled ? 0 : -1,
                    "videoResolution": videoQuality
                }
        );

    };
    self.reject = function(callid, onSuccess, onFailure) {
        var internalCall = calls[callid];
        if (!internalCall) {
            utils.callFunctionIfExist(onFailure, fcs.Errors.STATE);
            return;
        }

        _callControlService.reject(callid, function() {
            self.delegateToCallFSM(internalCall, fsmNotificationEvent.end_GUI);
            utils.callFunctionIfExist(onSuccess);
        },
                function() {
                    utils.callFunctionIfExist(onFailure);
                });

    };

    self.ignore = function(callid, onSuccess, onFailure) {
        var internalCall = calls[callid];
        if (!internalCall) {
            utils.callFunctionIfExist(onFailure, fcs.Errors.STATE);
            return;
        }

        self.delegateToCallFSM(internalCall, fsmNotificationEvent.end_GUI);
        utils.callFunctionIfExist(onSuccess);
    };
    self.forward = function(callid, address, onSuccess, onFailure) {
        var internalCall = calls[callid];
        if (!internalCall) {
            utils.callFunctionIfExist(onFailure, fcs.Errors.STATE);
            return;
        }

        _callControlService.forward(callid, address, function() {
            self.delegateToCallFSM(internalCall, fsmNotificationEvent.forward_GUI);
            utils.callFunctionIfExist(onSuccess);
        },
                function() {
                    utils.callFunctionIfExist(onFailure);
                });
    };

    function handleFailure(internalCall, failureHandler, failureEvent, retry) {
        setNotificationStateOfCallToBusy(internalCall);
        _webRtcManager.revertRtcState(internalCall, triggerQueue, triggerQueue);

        if (failureEvent) {
            self.delegateToCallFSM(internalCall, failureEvent);
        }

        if (retry && retry.timeout) {
            internalCall.pendingRequestTimer = setTimeout(function() {
                internalCall.pendingRequestTimer = null;
                retry.args.push(true);
                retry.handler.apply(null, retry.args);
            }, retry.timeout * 1000);
        }
        else {
            if (failureHandler) {
                utils.callFunctionIfExist(failureHandler);
            }
        }
    }

    function handleRequestFailure(internalCall, failureHandler, retry) {
        handleFailure(internalCall, failureHandler,
                fsmNotificationEvent.requestFailure_JSL, retry);
    }

    function handleWebrtcFailure(internalCall, failureHandler) {
        handleFailure(internalCall, failureHandler,
                fsmNotificationEvent.webrtcFailure_JSL);
    }

    self.hold = function(callid, onSuccess, onFailure, isAutoRetried) {
        var internalCall = calls[callid], currentCallState;
        if (!internalCall) {
            utils.callFunctionIfExist(onFailure, fcs.Errors.STATE);
            return;
        }

        if (isNotificationStateOfCallBusy(internalCall)){
            if (isAutoRetried) {
                utils.callFunctionIfExist(onFailure, fcs.Errors.NETWORK);
            }
            else {
                utils.callFunctionIfExist(onFailure, fcs.Errors.STATE);
            }
            return;
        }

        currentCallState = _callFSM.getCurrentState(internalCall);

        if (currentCallState !== fsmState.COMPLETED &&
                currentCallState !== fsmState.REMOTE_HOLD) {
            if (isAutoRetried) {
                utils.callFunctionIfExist(onFailure, fcs.Errors.NETWORK);
            }
            else {
                utils.callFunctionIfExist(onFailure, fcs.Errors.STATE);
            }
            return;
        }

        if (internalCall.pendingRequestTimer) {
            utils.callFunctionIfExist(onFailure, fcs.Errors.PENDING_REQUEST);
            return;
        }

        internalCall.lastUpdateRequest = {handler: self.hold,
            args: [callid, onSuccess, onFailure]};

        setNotificationStateOfCallToBusy(internalCall);

        self.delegateToCallFSM(internalCall, fsmNotificationEvent.hold_GUI);
        _webRtcManager.createHoldUpdate(internalCall,
                true,
                (currentCallState === fsmState.REMOTE_HOLD),
                function(sdp) {
                    logger.debug("[callManager.hold->createHoldUpdate : sdp ]" + sdp);
                    _callControlService.hold(internalCall.id, sdp,
                            function() {
                                setNotificationStateOfCallToIdle(internalCall);
                                internalCall.call.setHold(true);
                                internalCall.call.setHoldState(currentCallState);
                                utils.callFunctionIfExist(onSuccess);
                            },
                            function(err) {
                                handleRequestFailure(internalCall, onFailure,
                                        {handler: self.hold,
                                            args: [callid, onSuccess, onFailure],
                                            timeout: err.retryAfter});
                            });
                },
                function() {
                    handleWebrtcFailure(internalCall, onFailure);
                });

    };

    self.unhold = function(callid, onSuccess, onFailure, isAutoRetried) {
        var internalCall = calls[callid], currentCallState;

        if (!internalCall) {
            utils.callFunctionIfExist(onFailure, fcs.Errors.STATE);
            return;
        }

        if (isNotificationStateOfCallBusy(internalCall)){
            if (isAutoRetried) {
                utils.callFunctionIfExist(onFailure, fcs.Errors.NETWORK);
            }
            else {
                utils.callFunctionIfExist(onFailure, fcs.Errors.STATE);
            }
            return;
        }

        currentCallState = _callFSM.getCurrentState(internalCall);

        if (currentCallState !== fsmState.LOCAL_HOLD &&
                currentCallState !== fsmState.BOTH_HOLD) {
            if (isAutoRetried) {
                utils.callFunctionIfExist(onFailure, fcs.Errors.NETWORK);
            }
            else {
                utils.callFunctionIfExist(onFailure, fcs.Errors.STATE);
            }
            return;
        }

        if (internalCall.pendingRequestTimer) {
            utils.callFunctionIfExist(onFailure, fcs.Errors.PENDING_REQUEST);
            return;
        }

        internalCall.lastUpdateRequest = {handler: self.unhold,
            args: [callid, onSuccess, onFailure]};

        setNotificationStateOfCallToBusy(internalCall);

        self.delegateToCallFSM(internalCall, fsmNotificationEvent.unhold_GUI);
        _webRtcManager.createHoldUpdate(internalCall, false,
                (currentCallState === fsmState.BOTH_HOLD),
                function(sdp) {
                    logger.debug("[callManager.unhold->createHoldUpdate : sdp ]" + sdp);
                    _callControlService.unhold(internalCall.id, sdp,
                            function() {
                                setNotificationStateOfCallToIdle(internalCall);
                                internalCall.call.setHold(false);
                                internalCall.call.setHoldState(currentCallState);
                                //TODO: is this necessary
                                _webRtcManager.addLocalStream(internalCall);
                                utils.callFunctionIfExist(onSuccess);
                            },
                            function(err) {
                                handleRequestFailure(internalCall, onFailure,
                                        {handler: self.unhold,
                                            args: [callid, onSuccess, onFailure],
                                            timeout: err.retryAfter});
                            });
                },
                function() {
                    handleWebrtcFailure(internalCall, onFailure);
                });
    };

    self.directTransfer = function(callid, address, onSuccess, onFailure) {
        var internalCall = calls[callid], currentCallState;

        if (!internalCall) {
            utils.callFunctionIfExist(onFailure, fcs.Errors.STATE);
            return;
        }

        currentCallState = _callFSM.getCurrentState(internalCall);
        if (currentCallState === fsmState.LOCAL_HOLD
                || currentCallState === fsmState.COMPLETED
                || currentCallState === fsmState.BOTH_HOLD)
        {
            //TODO: force localhold - if the user is not on hold
            logger.info("[callManager.directTransfer->sendTransfer : transfer target ]" + address);
            _callControlService.transfer(internalCall.id, address, function() {
                self.delegateToCallFSM(internalCall, fsmNotificationEvent.transfering);
                logger.info("[callManager.directTransfer->sentTransfer : transfer target ]" + address);
            }, onFailure);
        } else {
            logger.error("directTransfer call is not in correct state: " + currentCallState);
        }
    };


    self.videoStopStart = function(callid, onSuccess, onFailure, isVideoStart, videoQuality, isAutoRetried) {
        var internalCall = calls[callid], sdp, videoSourceAllowed,
                currentCallState,
                createUpdate;

        createUpdate = function() {
            self.delegateToCallFSM(internalCall, fsmNotificationEvent.videoStopStart_GUI);
            _webRtcManager.createUpdate(
                    internalCall,
                    function(sdp) {
                        internalCall.isVideoSourceAllowed = videoSourceAllowed;
                        _callControlService.reinvite(internalCall.id, sdp,
                                function() {
                                    setNotificationStateOfCallToIdle(internalCall);
                                    //TODO: is this necessary
                                    _webRtcManager.addLocalStream(internalCall);
                                    utils.callFunctionIfExist(onSuccess);
                                },
                                function(err) {
                                    handleRequestFailure(internalCall, onFailure,
                                            {handler: self.videoStopStart,
                                                args: [callid, onSuccess, onFailure, isVideoStart, videoQuality],
                                                timeout: err.retryAfter
                                            });
                                }
                        );
                    },
                    function() {
                        logger.error("reinvite->createUpdate : sdp " + sdp);
                        handleWebrtcFailure(internalCall, onFailure);
                    },
                    isVideoStart
                    );
        };

        if (!internalCall) {
            utils.callFunctionIfExist(onFailure, fcs.Errors.STATE);
            return;
        }

        if (isNotificationStateOfCallBusy(internalCall)){
            if (isAutoRetried) {
                utils.callFunctionIfExist(onFailure, fcs.Errors.NETWORK);
            }
            else {
                utils.callFunctionIfExist(onFailure, fcs.Errors.STATE);
            }
            return;
        }

        currentCallState = _callFSM.getCurrentState(internalCall);
        if (currentCallState !== fsmState.COMPLETED) {
            if (isAutoRetried) {
                utils.callFunctionIfExist(onFailure, fcs.Errors.NETWORK);
            }
            else {
                utils.callFunctionIfExist(onFailure, fcs.Errors.STATE);
            }
            return;
        }

        if (internalCall.pendingRequestTimer) {
            utils.callFunctionIfExist(onFailure, fcs.Errors.PENDING_REQUEST);
            return;
        }

        internalCall.lastUpdateRequest = {handler: self.videoStopStart,
            args: [callid, onSuccess, onFailure, isVideoStart]};

        setNotificationStateOfCallToBusy(internalCall);

        if (!internalCall.isVideoSourceAllowed && isVideoStart) {
            self.getUserMedia(function(mediaInfo) {
                videoSourceAllowed = mediaInfo.video;
                createUpdate();
            }, function() {
                utils.callFunctionIfExist(onFailure);
            }, {
                "audio": true,
                "video": true,
                "audioIndex": 0,
                "videoIndex": 0,
                "videoResolution": videoQuality
            });
        } else {
            // avoiding videoSourceAllowed to return undefined if video source is allowed before
            videoSourceAllowed = true;
            createUpdate();
        }
    };

    self.mute = function(callid, mute) {
        var call = calls[callid], localAudioTrack;

        if (call) {
            if (!call.peer) {
                return;
            }
            logger.info("mute " + mute);
            localAudioTrack = _webRtcManager.getLocalAudioTrack(call.peer);
            if (localAudioTrack) {
                localAudioTrack.enabled = !mute;
                call.audioMuted = mute;
            }
        }
    };

    self.sendDTMF = function(callid, tone) {
        var internalCall = calls[callid];

        if (internalCall) {
            _webRtcManager.sendDTMF(internalCall, tone);
        }
    };

    self.join = function(callid1, callid2, onSuccess, onFailure) {
        var internalCall1 = calls[callid1],
                internalCall2 = calls[callid2],
                newInternalCall = {},
                isVideoEnabled = true,
                currentCallState1,
                currentCallState2;

        if ((internalCall1) && (internalCall2)) {
            currentCallState1 = _callFSM.getCurrentState(internalCall1);
            currentCallState2 = _callFSM.getCurrentState(internalCall2);
            if ((currentCallState1 === fsmState.LOCAL_HOLD
                    || currentCallState1 === fsmState.REMOTE_HOLD
                    || currentCallState1 === fsmState.BOTH_HOLD)
                    && (currentCallState2 === fsmState.LOCAL_HOLD
                    || currentCallState2 === fsmState.REMOTE_HOLD
                    || currentCallState2 === fsmState.BOTH_HOLD)) {

                self.getUserMedia(function() {
                    _webRtcManager.createOffer(newInternalCall,
                            function(sdp) {
                                logger.info("join->doOffer : sdp " + sdp);
                                newInternalCall.sdp = sdp;
                                _callControlService.join(
                                        internalCall1.id,
                                        internalCall2.id,
                                        sdp,
                                        function(callid) {

                                            newInternalCall.call = new fcs.call.OutgoingCall(callid);
                                            newInternalCall.id = callid;

                                            newInternalCall.onIceStateFailure = function(sdp) {
                                                self.onIceStateFailure(newInternalCall, sdp);
                                            };

                                            // refer will be handled by client. We are going to need callID of partyB and partyC
                                            if (fcsConfig.clientControlled === "true") {
                                                newInternalCall.isReferer = true;
                                                newInternalCall.refer1ID = internalCall1.id;
                                                newInternalCall.refer2ID = internalCall2.id;
                                            }

                                            self.delegateToCallFSM(internalCall1, fsmNotificationEvent.joining_Notify);
                                            self.delegateToCallFSM(internalCall2, fsmNotificationEvent.joining_Notify);
                                            self.delegateToCallFSM(newInternalCall, fsmNotificationEvent.joiningSuccess_Notify);
                                            calls[callid] = newInternalCall;

                                            utils.callFunctionIfExist(onSuccess, newInternalCall.call);
                                        }, function() {
                                    logger.error("callControlService.join Failed!! sdp " + sdp);
                                    utils.callFunctionIfExist(onFailure);
                                });
                            }, function() {
                        logger.error("doOffer Failed!!");
                        utils.callFunctionIfExist(onFailure);
                    }, false);
                }, function() {
                    utils.callFunctionIfExist(onFailure);
                }, {
                    "audio": true,
                    "video": isVideoEnabled ? true : false,
                    "audioIndex": 0,
                    "videoIndex": isVideoEnabled ? 0 : -1
                });
            }
        }
    };

    self.transfer = function(callid, address, onSuccess, onFailure) {

    };

    self.end = function(callid, onSuccess) {
        var internalCall = calls[callid];
        if (internalCall) {
            //check with the state machine if the current state would accept an endCall.
            if (_callFSM.getCurrentState(internalCall) === fsmState.INIT) {
                logger.error("Cannot end call in INIT callstate :" + fcs.Errors.STATE);
            } else {
                //send the end call to webrtc abstraction, change call state
                //this will trigger the send endcall or reject call
                self.delegateToCallFSM(internalCall, fsmNotificationEvent.end_GUI);

                clearResources(internalCall);
                utils.callFunctionIfExist(onSuccess);
            }
        }

    };

    self.incomingCall = function(call, sdp) {

        logger.info("incomingCall : sdp = " + sdp);
        var internalCall = {
            "call": call,
            "sdp": sdp,
            "id": call.getId()
        };
        logger.info("incomingCall: " + call.getId());

        if (fcsConfig.continuity && call.canAnswer()) {
            cacheCall(internalCall);
        }

        calls[call.getId()] = internalCall;
        call.isIceLite = _sdpParser.isIceLite(sdp);
        self.delegateToCallFSM(internalCall, fsmNotificationEvent.callNotify);
    };


    self.updateCall = function() {
    };

    self.onNotificationEvent = function(type, sessionParams) {
        var callid = sessionParams.sessionData,
                statusCode = sessionParams.statusCode,
                reasonText = sessionParams.reasonText,
                sdp = sessionParams.sdp,
                referTo = sessionParams.referTo,
                referredBy = sessionParams.referredBy,
                retryAfter = sessionParams.retryAfter;

        logger.debug("Notification received " + type + " callid:" + callid);
        logger.debug("onNotificationEvent : sdp " + sdp);
        if (calls[callid]) {
            if(isQueueEnabled && isNotificationStateOfCallBusy(calls[callid])){
                logger.debug("NOTIFICATION_QUEUE: notification state is busy, adding process to the queue!");
                calls[callid].call.notificationQueue.enqueue({
                    type: type,
                    sessionParams: sessionParams
                });
                logger.debug("NOTIFICATION_QUEUE: queue size is now " + calls[callid].call.notificationQueue.size());
                return;
            }

            if(isQueueEnabled){
                setNotificationStateOfCallToBusy(calls[callid]);
            }

            if (sdp) {
                calls[callid].prevRemoteSdp = calls[callid].sdp;
                sdp = _sdpParser.deleteGoogleIceFromSdp(sdp);
                calls[callid].sdp = sdp;
            }
            if (referTo && referredBy) {
                calls[callid].referTo = referTo;
                calls[callid].referredBy = referredBy;
            }
            calls[callid].isIceLite = _sdpParser.isIceLite(sdp);
            calls[callid].retryAfter = retryAfter;
            calls[callid].statusCode = statusCode;
            calls[callid].reasonText = reasonText;
        }
        self.delegateToCallFSM(calls[callid], type);
    };
    
    self.onStateChange = function(call, event) {
        var callStates = CALL_STATES,
                transferEvent = _callFSM.TransferEvent,
                i, isJoin, isLocalHold, auditTimerDelay, startAuditTimer;

        calls[call.id] = call;
        
        
        function triggerCallState(state, doNotTriggerQueue) {
            logger.debug("triggerCallState:  state =   " + state + "    call.statusCode =  " + call.statusCode + "   call.reasonText =  " + call.reasonText);
            call.call.callState = state;
            utils.callFunctionIfExist(call.call.onStateChange, state, call.statusCode, call.reasonText);
            if (!doNotTriggerQueue) {
                triggerQueue(call);
            }
        }

        function triggerCallStateWithoutQueue(state) {
            triggerCallState(state, true);
        }

        auditTimerDelay = function() {
            setTimeout(function() {
                if (fcs.isConnected()) {
                    _callControlService.audit(call.id, function() {
                        logger.info("Audit kicked off: Success for: " + call.id);
                    }, function() {
                        logger.error("Audit: Fail for: " + call.id);
                        // no need to end the call after audit fail
                        // clearResources(call);
                        // triggerCallState(callStates.ENDED);
                    });
                }
            }, AUDIT_KICKOFF_TIMEOUT);
        };

        startAuditTimer = function() {
            call.call.setAuditTimer(function() {
                if (fcs.isConnected()) {
                    _callControlService.audit(call.id, function() {
                        logger.info("Audit: Success for: " + call.id);
                    }, function() {
                        logger.error("Audit: Fail for: " + call.id);
                        // no need to end the call after audit fail
                        // clearResources(call);
                        // triggerCallState(callStates.ENDED);
                        triggerQueue(call);
                    });
                }
            });
        };

        logger.info("Transfer Event: " + event + ". callId: " + call.id);
        switch (event) {
            case transferEvent.callStart_fsm:
            case transferEvent.localHolding_fsm:
            case transferEvent.localUnHolding_fsm:
            case transferEvent.localVideoStopStart_fsm:
            case transferEvent.slowStartOfferProcessed_fsm:
            case transferEvent.joiningSuccess_fsm:
                break;
            case transferEvent.ignoredNotification_fsm:
            case transferEvent.answeringRingingSlow_fsm:
            case transferEvent.transfering_fsm:
            case transferEvent.localHold_fsm:
            case transferEvent.localUnHold_fsm:
                triggerQueue(call);
                break;
            case transferEvent.ringing_fsm:
                triggerCallState(callStates.RINGING);
                break;
            case transferEvent.callReceived_fsm:
                if (!(call.sdp)) {
                    self.delegateToCallFSM(call, fsmNotificationEvent.callNotify_noSDP);
                }
                triggerCallState(callStates.INCOMING);
                break;
            case transferEvent.answer_fsm:
                auditTimerDelay();
                startAuditTimer();
                break;
            case transferEvent.answerRingingSlow_fsm:
                triggerQueue(call);
                break;
            case transferEvent.reject_GUI:
                clearResources(call);
                break;
            case transferEvent.sessionComplete_fsm:
                _callControlService.endCall(call.id, function() {
                    logger.info("callControlService.endCall successful. callId: " + call.id);
                }, function() {
                    logger.error("callControlService.endCall FAILED!!.callId: " + call.id);
                });
                clearResources(call);
                triggerCallState(callStates.JOINED);
                break;
            case transferEvent.sessionFail_fsm:
                triggerCallState(callStates.ON_HOLD);
                break;
            case transferEvent.callCompleted_fsm:
                //startCall case: this is place where we must
                //have already got the remote sdp so need to let webrtc
                //process answer with latest sdp
                auditTimerDelay();
                _webRtcManager.processAnswer(call, function() {
                    startAuditTimer();
                    triggerCallState(callStates.IN_CALL);
                }, function() {
                    clearResources(call);
                    triggerCallState(callStates.ENDED);
                });

                //if client is handling the refers, we need to trigger the refers for partyB and partyC from referer
                if (call.isReferer) {
                    for (i in calls) {
                        if (calls.hasOwnProperty(i)) {
                            if (calls[i] && (calls[i].id === call.refer1ID || calls[i].id === call.refer2ID)) {
                                calls[i].referCall(call.referTo, call.referredBy);
                            }
                        }
                    }
                }
                break;
            case transferEvent.noAnswer_fsm:
                clearResources(call);
                triggerCallState(callStates.ENDED);
                break;
            case transferEvent.localEnd_fsm:
                _callControlService.endCall(call.id, function() {
                    logger.info("CallControlService endCall successful. callId: " + call.id);
                }, function() {
                    logger.error("Cannot callControlService endCall. callId: " + call.id);
                });
                break;
            case transferEvent.callCompletedAnswering_fsm:
                logger.info("callManager: Call Completed Answering Event. callId: " + call.id);
                _webRtcManager.processAnswer(call, function() {
                    triggerCallState(callStates.IN_CALL);
                    auditTimerDelay();
                    startAuditTimer();
                }, function() {
                    clearResources(call);
                    triggerCallState(callStates.ENDED);
                });
                break;
            case transferEvent.remoteEnd_fsm:
                //clear webRTC resources
                clearResources(call);
                triggerCallState(callStates.ENDED);
                break;
            case transferEvent.remoteHold_fsm:
                call.call.setHold(true);
                call.call.setHoldState(_callFSM.getCurrentState(call));
                switch (_callFSM.getCurrentState(call)) {
                    case fsmState.REMOTE_HOLD:
                        triggerCallState(callStates.ON_REMOTE_HOLD);
                        break;
                    case fsmState.BOTH_HOLD:
                        triggerCallState(callStates.ON_HOLD);
                        break;
                    default:
                        triggerQueue(call);
                        break;
                }
                break;
            case transferEvent.remoteUnHold_fsm:
                call.call.setHold(false);
                call.call.setHoldState(_callFSM.getCurrentState(call));
                switch (_callFSM.getCurrentState(call)) {
                    case fsmState.LOCAL_HOLD:
                        triggerCallState(callStates.ON_HOLD);
                        break;
                    case fsmState.COMPLETED:
                        triggerCallState(callStates.IN_CALL);
                        break;
                    default:
                        triggerQueue(call);
                        break;
                }
                break;
            case transferEvent.remoteHolding_fsm:
                isLocalHold = (_callFSM.getCurrentState(call) === fsmState.LOCAL_HOLD) || (_callFSM.getCurrentState(call) === fsmState.BOTH_HOLD);
                _webRtcManager.processHold(call, true, isLocalHold, function(sdp) {
                    logger.info("[callManager.onStateChange.transferEvent.remoteHold_fsm->processHold : sdp ]" + sdp);
                    _callControlService.respondCallUpdate(call.id, sdp, function() {
                        logger.info("Remote Hold Transfer Event Successful. callId: " + call.id);
                        self.delegateToCallFSM(call, fsmNotificationEvent.remoteHoldProcessed_JSL);
                    }, function(errorStr) {
                        logger.error("Remote Hold Transfer Event FAILED!! - " + errorStr);
                        handleRequestFailure(call);
                    });
                }, function(errorStr) {
                    logger.error("Remote Hold FAILED!! - " + errorStr);
                    handleWebrtcFailure(call);
                });
                break;
            case transferEvent.remoteOfferDuringLocalHold_fsm:
                _webRtcManager.processRemoteOfferOnLocalHold(call, function(sdp) {
                    logger.info("onStateChange.transferEvent.remoteOfferDuringLocalHold_fsm : sdp " + sdp);
                    _callControlService.respondCallUpdate(call.id, sdp, function() {
                        logger.info("Remote Offer During Local Hold Transfer Event successful. callId: " + call.id);
                        triggerQueue(call);
                    }, function(errorStr) {
                        handleRequestFailure(call);
                        logger.error("Remote Offer During Local Hold  Transfer Event FAILED!! - " + errorStr);
                    });
                }, function(errorStr) {
                    logger.error("Remote Offer During Local Hold FAILED!! - " + errorStr);
                    handleWebrtcFailure(call);
                });
                break;
            case transferEvent.slowStartOfferDuringOnCall_fsm:
            case transferEvent.slowStartOfferDuringRemoteHold_fsm:
                _webRtcManager.createReOffer(call, function(sdp) {
                    logger.info("onStateChange.transferEvent.createReOffer: sdp " + sdp);
                    _callControlService.respondCallUpdate(call.id, sdp, function() {
                        logger.info("Slow Start Offer respondCallUpdate successful. callId: " + call.id);
                        self.delegateToCallFSM(call, fsmNotificationEvent.slowStartOfferProcessed_JSL);
                        triggerQueue(call);
                    }, function(errorStr) {
                        logger.error("Slow Start Offer respondCallUpdate FAILED!! - " + errorStr);
                        handleRequestFailure(call);
                    });
                }, function(errorStr) {
                    logger.error("Slow Start Offer createReOffer FAILED!! - " + errorStr);
                    handleWebrtcFailure(call);
                }, true);
                break;
            case transferEvent.sendReInvite_fsm:
                _webRtcManager.createReOffer(call, function(sdp) {
                    logger.info("onStateChange.transferEvent.createReOffer : sdp " + sdp);
                    _callControlService.reinvite(call.id, sdp, function() {
                        setNotificationStateOfCallToIdle(call);
                        logger.info("callControlService.reinvite successful. callId: " + call.id);
                    }, function() {
                        self.delegateToCallFSM(call, fsmNotificationEvent.requestFailure_JSL);
                    });
                }, function(errorStr) {
                    handleWebrtcFailure(call);
                }, true);
                break;
            case transferEvent.performReconnectWorkaround_fsm:
                _webRtcManager.performReconnectWorkaround(call, function performReconnectWorkaroundSuccessCallback(sdp)
                {
                    logger.info("onStateChange.transferEvent.performReconnectWorkaround : sdp " + sdp);
                    _callControlService.reinvite(call.id, sdp, function reInviteSuccessCallback() {
                        setNotificationStateOfCallToIdle(call);
                        _webRtcManager.addLocalStream(call);
                        logger.info("callControlService.reinvite successful. callId: " + call.id);
                    }, function() {
                        self.delegateToCallFSM(call, fsmNotificationEvent.requestFailure_JSL);
                    });
                }, function(errorStr) {
                    handleWebrtcFailure(call);
                });
                break;
            case transferEvent.remoteUnHolding_fsm:
                isLocalHold = (call.previousState === fsmState.LOCAL_HOLD) || (call.previousState === fsmState.BOTH_HOLD);
                _webRtcManager.processHold(call, false, isLocalHold, function(sdp) {
                    logger.info("onStateChange.transferEvent.remoteUnHold_fsm->processHold : sdp " + sdp);
                    _callControlService.respondCallUpdate(call.id, sdp, function() {
                        logger.info("Remote UnHold Transfer Event successful. callId: " + call.id);
                        self.delegateToCallFSM(call, fsmNotificationEvent.remoteUnHoldProcessed_JSL);
                    }, function(errorStr) {
                        logger.error("Remote UnHold Transfer Event FAILED!! - " + errorStr);
                        handleRequestFailure(call);
                    });
                }, function(errorStr) {
                    logger.error("Remote UnHold FAILED!! - " + errorStr);
                    handleWebrtcFailure(call);
                });
                break;
            case transferEvent.renegotiationCompleted_fsm:
                triggerCallState(callStates.RENEGOTIATION);
            break;
            case transferEvent.remoteOffer_fsm:
            case transferEvent.remoteCallUpdate_fsm:
                _webRtcManager.processUpdate(call, function(sdp) {
                    logger.info("onStateChange.transferEvent.remoteCallUpdate_fsm->processUpdate : sdp " + sdp);
                    _callControlService.respondCallUpdate(call.id, sdp, function() {
                        logger.info("Remote Call Update Transfer Event Successful. callId: " + call.id);
                        self.delegateToCallFSM(call, fsmNotificationEvent.remoteOfferProcessed_JSL);
                    }, function(errorStr) {
                        logger.error("Remote Call Update Transfer Event FAILED!! - " + errorStr);
                        handleRequestFailure(call);
                    });
                }, function(errorStr) {
                    logger.error("Remote Call Update FAILED!! - " + errorStr);
                    handleWebrtcFailure(call);
                }, call.currentState === fsmState.LOCAL_HOLD ? true : false);
                break;
            case transferEvent.respondCallHoldUpdate_fsm:
                isJoin = call.call.getJoin();
                _webRtcManager.processHoldRespond(call, function() {
                    logger.info("Respond Call Hold Update Event Successful. callId: " + call.id);
                    call.call.setHold(true);
                    call.call.setHoldState(_callFSM.getCurrentState(call));
                    switch (_callFSM.getCurrentState(call)) {
                        case fsmState.REMOTE_HOLD:
                            triggerCallState(callStates.ON_REMOTE_HOLD);
                            break;
                        case fsmState.LOCAL_HOLD:
                        case fsmState.BOTH_HOLD:
                            triggerCallState(callStates.ON_HOLD);
                            break;
                        case fsmState.COMPLETED:
                            call.call.setHold(false);
                            call.call.setHoldState(null);
                            triggerCallState(callStates.IN_CALL);
                            break;
                    }
                    //triggerCallState(callStates.RENEGOTIATION);
                }, function(e) {
                    logger.error("Respond Call Hold Update Event FAILED: " + e);
                    triggerQueue(call);
                }, isJoin);

                //enable clicking
                call.call.setButtonDisabler(false);
                call.call.clearBtnTimeout();

                if (isJoin === true) {
                    call.call.onJoin();
                }

                break;
            case transferEvent.respondCallUpdate_fsm:
                isJoin = call.call.getJoin();

                //enable clicking
                call.call.setButtonDisabler(false);
                call.call.clearBtnTimeout();

                //If this is a join call we need to send join request
                //onJoin() function is created at callController.js
                if (isJoin === true) {
                    _webRtcManager.processRespond(call, function() {
                        logger.info("Respond Call Update Event Successful. callId: " + call.id);
                        triggerCallState(callStates.RENEGOTIATION);
                    }, function(e) {
                        logger.error("Respond Call Update Event FAILED: " + e);
                        triggerQueue(call);
                    }, isJoin);

                    call.call.onJoin();
                } else {
                    _webRtcManager.processRespond(call, function() {
                        logger.info("Respond Call Update Event Successful. callId: " + call.id);
                        triggerCallState(callStates.IN_CALL);
                    }, function(e) {
                        logger.error("Respond Call Update Event FAILED: " + e);
                        triggerQueue(call);
                    }, isJoin);
                }
                break;
            case transferEvent.preCallResponse_fsm:
                _webRtcManager.processPreAnswer(call);
                triggerCallState(callStates.RINGING);
                break;
            case transferEvent.forward_fsm:
                clearResources(call);
                break;
            case transferEvent.joining_fsm:
                //if client is handling the refers from referer we need to trigger the refers for partyB and partyC
                if (fcsConfig.clientControlled === "true") {
                    call.referCall = function(referTo, referredBy) {
                        _callControlService.refer(call.id, referTo, referredBy, function() {
                            logger.info("Joining Event Successful. callId: " + call.id);
                            self.delegateToCallFSM(call, fsmNotificationEvent.refer_JSL);
                        }, function(errorStr) {
                            logger.error("Joining Event FAILED!!" + errorStr);
                        });
                    };
                }
                triggerQueue(call);
                break;
            case transferEvent.transferSuccess_fsm:
                _callControlService.endCall(call.id, function() {
                    logger.info("callControlService.endCall successful. callId: " + call.id);
                }, function() {
                    logger.error("callControlService.endCall FAILED!! callId: " + call.id);
                });
                clearResources(call);
                triggerCallState(callStates.TRANSFERRED);
                logger.info("endCall successful. callId: " + call.id);
                break;
            case transferEvent.transferFail_fsm:
                triggerCallState(callStates.ON_HOLD);
                break;
            case transferEvent.stateReverted_fsm:
                //enable clicking
                call.call.setButtonDisabler(false);
                call.call.clearBtnTimeout();
                
                call.call.setHold(false);
                call.call.setHoldState(null);

                switch (_callFSM.getCurrentState(call)) {
                    case fsmState.REMOTE_HOLD:
                        call.call.setHold(true);
                        call.call.setHoldState(_callFSM.getCurrentState(call));
                        triggerCallStateWithoutQueue(callStates.ON_REMOTE_HOLD);
                        break;
                    case fsmState.BOTH_HOLD:
                        call.call.setHold(true);
                        call.call.setHoldState(_callFSM.getCurrentState(call));
                        triggerCallStateWithoutQueue(callStates.ON_HOLD);
                        break;
                    case fsmState.LOCAL_HOLD:
                        call.call.setHold(true);
                        call.call.setHoldState(_callFSM.getCurrentState(call));
                        triggerCallStateWithoutQueue(callStates.ON_HOLD);
                        break;
                    case fsmState.COMPLETED:
                        triggerCallStateWithoutQueue(callStates.IN_CALL);
                        break;
                    default:
                        logger.error("CANNOT REVERT THE STATE: " + _callFSM.getCurrentState(call) + ". callId: " + call.id);
                        break;
                }
                break;
            case transferEvent.glareCondition_fsm:
                handleFailure(call, null, null, {
                    handler: call.lastUpdateRequest.handler,
                    args: call.lastUpdateRequest.args,
                    timeout: call.retryAfter});
                break;
            default:
                logger.error("Undefined transition event: " + event + " for " + call.id);
                triggerQueue(call);
                break;

        }

    };

    self.refreshVideoRenderer = function(callid) {
        var internalCall = calls[callid];
        if (internalCall) {
            _webRtcManager.refreshVideoRenderer(internalCall);
        }
    };

    self.hasVideoDevice = function() {
        return _webRtcManager.isVideoSourceAvailable();
    };

    self.hasAudioDevice = function() {
        return _webRtcManager.isAudioSourceAvailable();
    };

    self.getLocalVideoResolutions = function() {
        return _webRtcManager.getLocalVideoResolutions();
    };

    self.getRemoteVideoResolutions = function() {
        return _webRtcManager.getRemoteVideoResolutions();
    };

    self.isCallMuted = function(callid) {
        var call = calls[callid];
        if (call && call.audioMuted) {
            return call.audioMuted;
        }
        return false;
    };

    self.isVideoNegotationAvailable = function(callid) {
        var call = calls[callid];
        if (call.sdp){
            return _sdpParser.isSdpHasVideo(call.sdp);
        } else {
            return false;
        }
    };

    self.onIceStateFailure = function(internalCall) {
        if (internalCall) {
            setNotificationStateOfCallToBusy(internalCall);
            self.delegateToCallFSM(internalCall, fsmNotificationEvent.sendReInvite_JSL);
        }
    };

    self.getHoldStateOfCall = function(callid) {
        var internalCall = calls[callid];
        if (internalCall) {
            return CALL_HOLD_STATES[_callFSM.getCurrentState(internalCall)];
        }
        return undefined;
    };

    NotificationCallBacks.call = function handleIncomingCall(data) {
        // disabling the notifications for verizon demo
        if (!fcs.notification.isAnonymous()) {
            var sdp, actions, params, calls, remoteConversationId,
                    call = null,
                    callid = null,
                    options = {},
                    callParams = data.callNotificationParams,
                    dispositionParams = data.callDispositionParams,
                    sessionParams = data.sessionParams;

            //Since session also include disposition use it as default
            params = sessionParams ? sessionParams : (dispositionParams ? dispositionParams : null);
            logger.info("params: " + params);

            if (params) {
                actions = params.actions;
                logger.info("actions: " + actions);
                if (params.sessionData) {
                    callid = params.sessionData;
                    calls = self.getCalls();
                    if (calls[callid] !== undefined) {
                        logger.info("call already exists: " + callid);
                        return;
                    }
                    logger.info("sessionData: " + callid);
                }
                if (actions) {
                    options.reject = (actions.indexOf("reject", 0) > -1);
                    options.forward = (actions.indexOf("forward", 0) > -1);
                    options.answer = (actions.indexOf("answer", 0) > -1);
                }
                if (params.sdp) {
                    sdp = params.sdp;
                }
                if (params.conversation) {
                    remoteConversationId = params.conversation;
                }
            }

            call = new fcs.call.IncomingCall(callid, options);
            if (remoteConversationId && remoteConversationId.indexOf("convid=") > -1) {
                call.remoteConversationId = remoteConversationId.split("convid=")[1].split(",")[0];
            }
            call.callerNumber = utils.getProperty(callParams, 'callerDisplayNumber');
            call.callerName = utils.getProperty(callParams, 'callerName');
            call.calleeNumber = utils.getProperty(callParams, 'calleeDisplayNumber');
            call.primaryContact = utils.getProperty(callParams, 'primaryContact');
            if (call.primaryContact) {
                call.primaryContact = call.primaryContact.split(";")[0];
            }

            //create the call in the state machine
            self.incomingCall(call, sdp);

            //notify the callback
            utils.callFunctionIfExist(fcs.call.onReceived, call);
        }
    };

    function handleCallControlNotification(type, data) {
        var sessionParams = data.sessionParams;
        logger.info("CallControl notification received " + type + " sessionData:" + sessionParams.sessionData);
        if (sessionParams.referTo) {
            logger.info("CallControl notification received: " + "referTo:" + sessionParams.referTo + " referredBy: " + sessionParams.referredBy);
        }
        if (sessionParams) {
            self.onNotificationEvent(type, sessionParams);
        }
    }

    NotificationCallBacks.ringing = function(data) {
        handleCallControlNotification(fsmNotificationEvent.ringing_Notify, data);
    };

    NotificationCallBacks.sessionProgress = function(data) {
        //We are discarding the sessionProgress if the SDP is empty
        if (data.sessionParams.sdp !== "") {
            handleCallControlNotification(fsmNotificationEvent.sessionProgress, data);
        }
        else {
            logger.info("Warning: SDP of sessionProgress is empty.");
        }
    };

    NotificationCallBacks.startCallUpdate = function handleStartCallUpdateNotification(data) {
        var sdp = data.sessionParams.sdp,
                notificationEvent = fsmNotificationEvent.startCallUpdate_slowStart_Notify;
        if (sdp) {
            _sdpParser.init(sdp);
            if (_sdpParser.isRemoteHold()) {
                notificationEvent = fsmNotificationEvent.startCallUpdate_remoteHold_Notify;
            }
            else {
                notificationEvent = fsmNotificationEvent.startCallUpdate_remoteOffer_Notify;
            }
        }
        handleCallControlNotification(notificationEvent, data);
    };

    NotificationCallBacks.respondCallUpdate = function handleRespondCallUpdateNotification(data) {
        if (data.sessionParams && data.sessionParams.retryAfter) {
            handleCallControlNotification(fsmNotificationEvent.respondCallUpdate_glareCondition_Notify, data);
        }
        else {
            handleCallControlNotification(fsmNotificationEvent.respondCallUpdate_Notify, data);
        }
    };

    NotificationCallBacks.sessionComplete = function handleSssionCompleteNotification(data) {
        handleCallControlNotification(fsmNotificationEvent.sessionComplete_Notify, data);
    };

    NotificationCallBacks.sessionFail = function handleSessionFailNotification(data) {
        handleCallControlNotification(fsmNotificationEvent.sessionFail_Notify, data);
    };

    NotificationCallBacks.callEnd = function handleCallEndNotification(data) {
        handleCallControlNotification(fsmNotificationEvent.callEnd_Notify, data);
    };

    NotificationCallBacks.trying = function handleTryingNotification(data) {
        handleCallControlNotification(fsmNotificationEvent.trying_Notify, data);
    };

    NotificationCallBacks.callCancel = function handleCallCancelNotification(data) {
        handleCallControlNotification(fsmNotificationEvent.callCancel_Notify, data);
    };

    NotificationCallBacks.accepted = function handleAcceptedNotification(data) {
        handleCallControlNotification(fsmNotificationEvent.accepted_Notify, data);
    };

    globalBroadcaster.subscribe(CONSTANTS.EVENT.DEVICE_SUBSCRIPTION_STARTED, onSubscriptionReEstablished);
    globalBroadcaster.subscribe(CONSTANTS.EVENT.CONNECTION_REESTABLISHED, onConnectionLost);
    globalBroadcaster.subscribe(CONSTANTS.EVENT.NOTIFICATION_CHANNEL_LOST, onConnectionLost);
    if (__testonly__) { self.setCalls = function(_calls){ calls=_calls;}; }
};
var callManager = new CallManager(webRtcManager, callFSM, callControlService, sdpParser, logManager);
//will be removed
fcs.callManager = callManager;
//TODO define a testonly setCalls method
if (__testonly__) { __testonly__.CallManager = CallManager; }

/**
* Provides access to a user's call log.
* 
* @name calllog
* @namespace
* @memberOf fcs
* 
* @version 3.0.4
* @since 3.0.0
*/
var Calllog = function(){

   /**
    * Enum for the type of call log.
    * @name CallTypes
    * @enum {number}
    * @since 3.0.0
    * @readonly
    * @memberOf fcs.calllog
    * @property {number} [INCOMING=0] Incoming call.
    * @property {number} [MISSED=1] Missed call.
    * @property {number} [OUTGOING=2] Outgoing call.
    */
    this.CallTypes = {
        
        INCOMING: 0,
        
        MISSED: 1,
        
        OUTGOING: 2
    };

   /**
    * Retrieves the list of call logs from the server.
    *
    * @name fcs.calllog.retrieve
    * @function
    * @since 3.0.0
    * @param {function} onSuccess The onSuccess({@link Array.<fcs.calllog.Entry>}) callback to be called
    * @param {function} onFailure The onFailure({@link fcs.Errors}) callback to be called
    * @param {number} [startIndex=0] starting offset within the list of log records (records before this offset will not be returned)
    * @param {number} [count=100] The number of the log records to be returned
    * 
    * @example
    * var onSuccess = function(data){
    *    var i = 0;
    *    for (i in data) {
    *       window.console.log("call log record id: " + data[i].id + " entry: ", data);
    *    }
    * };
    * var onError = function (err) {
    *   //do something here
    * };
    * 
    * fcs.calllog.retrieve(onSuccess, onError);
    * OR
    * fcs.calllog.retrieve(onSuccess, onError, 10);
    * OR
    * fcs.calllog.retrieve(onSuccess, onError, 10, 50);
    */
   

   /**
    * Deletes a call log from the server.
    *
    * @name fcs.calllog.remove
    * @function
    * @since 3.0.0
    * @param {string} calllogid The id of the call log to be deleted
    * @param {function} onSuccess The onSuccess() callback to be called
    * @param {function} onFailure The onFailure({@link fcs.Errors}) callback to be called
    * 
    * @example
    * var onSuccess = function(){
    *    //do something here
    * };
    * var onError = function (err) {
    *   //do something here
    * };
    * 
    * fcs.calllog.remove("calllogid", onSuccess, onError);
    */

   /**
    * Clears the entire call log from the server.
    *
    * @name fcs.calllog.removeAll
    * @function
    * @since 3.0.0
    * @param {function} onSuccess The onSuccess() callback to be called
    * @param {function} onFailure The onFailure({@link fcs.Errors}) callback to be called
    * 
    * @example
    * var onSuccess = function(){
    *    //do something here
    * };
    * var onError = function (err) {
    *   //do something here
    * };
    * 
    * fcs.calllog.removeAll( onSuccess, onError);
    */

   /**
    * @name Entry
    * @class
    * @memberOf fcs.calllog
    * @version 3.0.4
    * @since 3.0.0
    */
    this.Entry = function(){};

   /**
    * Unique record id of log.
    * 
    * @name fcs.calllog.Entry#id
    * @field
    * @since 3.0.0
    * @type {String}
    */

   /**
    * Display number of caller.
    * 
    * @name fcs.calllog.Entry#address
    * @field
    * @since 3.0.0
    * @type {String}
    */

   /**
    * Name of caller.
    * 
    * @name fcs.calllog.Entry#name
    * @field
    * @since 3.0.0
    * @type {String}
    */

   /**
    * Duration of call.
    * 
    * @name fcs.calllog.Entry#duration
    * @field
    * @since 3.0.0
    * @type {String}
    */

   /**
    * Start time of call.
    * 
    * @name fcs.calllog.Entry#startTime
    * @field
    * @since 3.0.0
    * @type {Date}
    */

   /**
    * Type of call.
    * 
    * @name fcs.calllog.Entry#type
    * @field
    * @since 3.0.0
    * @type {fcs.calllog.CallTypes}
    */
};
var Calllogimpl = function() {

    var clUrl = "/logHistory",
        lrUrl = "/logRecord/",
        callTypes = {},
        callTypesEnum = this.CallTypes,
        DEFAULT_START_INDEX = 0,
        DEFAULT_COUNT = 100;
        
    callTypes.incoming = callTypesEnum.INCOMING;
    callTypes.outgoing = callTypesEnum.OUTGOING;
    callTypes.missed = callTypesEnum.MISSED;

    function parseData(data) {
        var i, logs = [], log, params, type, date;
        if(data && data.logHistory && data.logHistory.logItems){
            for(i=0; i < data.logHistory.logItems.length;i++){
                params = data.logHistory.logItems[i].params;
                log =  new fcs.calllog.Entry(params);                    
                
                log.id = utils.getProperty(params, 'recordId');
                log.address = utils.getProperty(params, 'callerDisplayNumber');
                log.name = utils.getProperty(params, 'callerName');
                log.duration = utils.getProperty(params, 'duration');
                
                // convert string timestamp to Date object
                date = parseInt(params.startTime, 10);
                log.startTime = isNaN(date) ? null : new Date(date);
                
                // convert wam value to fcs.calllog.CallTypes value
                log.type = null;
                type = utils.getProperty(params, 'direction');                
                if(type !== null && callTypes[type] !== undefined){
                    log.type = callTypes[type];
                }
                
                logs.push(log);
            }
            // We need to sort *logs array to view call logs in descending time order inside CallLogTab 
            logs = logs.sort(function(a,b){return b.startTime - a.startTime;});
        }
        
        return logs;
    }

    function composeRetreiveData(startIndex, count) {
        var data = {startIndex: DEFAULT_START_INDEX,
            count: DEFAULT_COUNT};

        if (startIndex) {
            if (startIndex.trim) {
                startIndex.trim();
            }

            if (isFinite(startIndex) && startIndex >= 0 && startIndex !== "") {
                data.startIndex = startIndex;
            }
        }

        if (count) {
            if (count.trim) {
                count.trim();
            }

            if (isFinite(count) && count >= 0 && count !== "") {
                data.count = count;
            }
        }

        return data;
    }

    this.retrieve = function(onSuccess, onFailure, startIndex, count) {
        server.sendGetRequest({
                url: getWAMUrl(1, clUrl),
                "data": composeRetreiveData(startIndex, count)
            },
            onSuccess,
            onFailure,
            parseData
        );
        
    };
    
    this.retrievePartial = function(startIndex, count, onSuccess, onFailure) {
        server.sendGetRequest({
                url: getWAMUrl(1, clUrl),
                "data": composeRetreiveData(startIndex, count)
            },
            onSuccess,
            onFailure,
            parseData
        );
        
    };

    this.removeAll = function(onSuccess, onFailure) {
        
        server.sendDeleteRequest({
                url: getWAMUrl(1, clUrl)
            },
            onSuccess,
            onFailure
        );
    };

    this.remove = function(calllogid,onSuccess, onFailure) {

        server.sendDeleteRequest({
                url: getWAMUrl(1, lrUrl + calllogid)
            },
            onSuccess,
            onFailure
        );
    };
};

Calllogimpl.prototype = new Calllog();

fcs.calllog = new Calllogimpl();
    
var Addressbookimpl = function() {

    this.retrieve = function(parseData, onSuccess, onFailure) {
        server.sendGetRequest({
                    url: getWAMUrl(1, "/addressbook")
                },
                onSuccess,
                onFailure,
                parseData,
                undefined,
                "addressBookResponse");
    };

    this.searchDirectory = function(criteria, searchType, parseData, onSuccess, onFailure) {

        server.sendGetRequest({
                    "url": getWAMUrl(1, "/directory"),
                    "data": {"criteria": criteria, "criteriaType": searchType}
                },
                onSuccess,
                onFailure,
                parseData);
    };
};

var addressbookService = new Addressbookimpl();

var AddressbookManager = function() {
    var SearchType = {
        FIRSTNAME: 0,
        LASTNAME: 1,
        NAME: 2,
        PHONENUMBER: 3,
        USERNAME: 4,
        NA: 5
    }, Entry = function() {
    }, searchTypes = {};

    searchTypes[SearchType.FIRSTNAME] = "1";
    searchTypes[SearchType.LASTNAME] = "2";
    searchTypes[SearchType.NAME] = "3";
    searchTypes[SearchType.PHONENUMBER] = "4";
    searchTypes[SearchType.USERNAME] = "5";
    searchTypes[SearchType.NA] = "-1";

    function parseData(result) {
        var i, entries = [], entry, params, items;
        if (result) {
            if (result.directory) {
                items = result.directory.directoryItems;
            } else if (result.addressBookResponse) {
                items = result.addressBookResponse.addressBookEntries;
            }

            if (items) {
                for (i = 0; i < items.length; i++) {
                    params = items[i];
                    entry = new Entry();

                    entry.id = utils.getProperty(params, 'entryId');
                    entry.nickname = utils.getProperty(params, 'nickname');
                    entry.primaryContact = utils.getProperty(params, 'primaryContact');
                    entry.firstName = utils.getProperty(params, 'firstName');
                    entry.lastName = utils.getProperty(params, 'lastName');
                    entry.photoUrl = utils.getProperty(params, 'photoUrl');
                    entry.email = utils.getProperty(params, 'emailAddress');
                    entry.homePhone = utils.getProperty(params, 'homePhone');
                    entry.mobilePhone = utils.getProperty(params, 'mobilePhone');
                    entry.workPhone = utils.getProperty(params, params.workPhone ? 'workPhone' : 'businessPhone');
                    entry.friendStatus = utils.getProperty(params, 'friendStatus');
                    entry.accessCode = utils.getProperty(params, 'conferenceURL');
                    if (!entry.friendStatus) {
                        entry.friendStatus = false;
                    }
                    entry.fax = utils.getProperty(params, 'fax');
                    entry.pager = utils.getProperty(params, 'pager');

                    entries.push(entry);
                }
            }
        }

        return entries;
    }
    
    this.Entry = Entry;

    this.SearchType = SearchType;

    this.retrieve = function(onSuccess, onFailure) {
        addressbookService.retrieve(parseData, onSuccess, onFailure);
    };

    this.searchDirectory = function(criteria, searchType, onSuccess, onFailure) {
        var type = (searchTypes[searchType] === undefined) ? "-1" : searchTypes[searchType];
        addressbookService.searchDirectory(criteria, type, parseData, onSuccess, onFailure);
    };
    
};

var addressbookManager = new AddressbookManager();
/**
 * Addressbook and directory.
 * 
 * @name addressbook
 * @namespace
 * @memberOf fcs
 * @version 3.0.4
 * @since 3.0.0
 */
var Addressbook = function() {

    /**
     * Addressbook entry.
     * 
     * @typedef {Object} AddressbookEntry
     * @readonly
     * 
     * @property {?String}  entryId - Unique identifier for the entry.
     * @property {?String}  nickname - Name of the user as it will appear for a personal contact.
     * @property {?String}  primaryContact - User's primary contact number (this should be the prefered number for contacting the user).
     * @property {?String}  firstName - First name of the user.
     * @property {?String}  lastName - Last name of the user.
     * @property {?String}  photoUrl - URL from which to retrieve the picture of the user.
     * @property {?String}  emailAddress - Email address of the user.
     * @property {?String}  homePhone - Home phone number for the user.
     * @property {?String}  mobilePhone - Mobile phone number for the user.
     * @property {?String}  workPhone - Work phone number for the user.
     * @property {!boolean} friendStatus - Friend status of the user.
     * @property {?String}  fax - Fax number of the user.
     * @property {?String}  pager - Pager number of the user.
     * 
     */
    this.Entry = addressbookManager.Entry;

    /**
     * Enum for the search criteria filter used in directory searches.
     * 
     * @name SearchType
     * @readonly
     * @memberOf fcs.addressbook
     * @enum {number}
     * @since 3.0.0
     * 
     * @property {number} FIRSTNAME Search by first name
     * @property {number} LASTNAME Search by last name
     * @property {number} NAME Search by name
     * @property {number} PHONENUMBER Search by phone number
     * @property {number} USERNAME Search by username
     * @property {number} NA Not applicable
     */
    this.SearchType = addressbookManager.SearchType;

    /**
     * Success callback for addressbook retreive/search request.
     *
     * @callback addressbookRequestSuccess
     * @param {Array.<AddressbookEntry>} responseMessage
     */

    /**
     * Failure callback for addressbook retreive/search request.
     *
     * @callback addressbookRequestFailure
     * @param {fcs.Errors} responseCode
     */

    /**
     * Retrieves the list of address book entries from the server
     * and executes the success callback on completion or failure 
     * callback on error.
     * 
     * @name retrieve
     * @function
     * @since 3.0.0
     * @memberOf fcs.addressbook
     * 
     * @param {addressbookRequestSuccess} success callback function
     * @param {addressbookRequestFailure} failure callback function
     * 
     * @example
     * var onSuccess = function(entryArray){
     *    var index;
     *    for (index in entryArray) {
     *      console.log(entryArray[index].nickname +", " + entryArray[index].primaryContact);
     *    }
     * };
     * 
     * var onError = function (err) {
     *   console.log(err);
     * };
     * 
     * fcs.addressbook.retrieve(onSuccess, onError);
     * 
     */
    this.retrieve = addressbookManager.retrieve;

    /**
     * Searches the directory.
     * 
     * @name searchDirectory
     * @function
     * @since 3.0.0
     * @memberOf fcs.addressbook
     * 
     * @param {string} criteria The string to search in the directory
     * @param {fcs.addressbook.SearchType} searchType The criteria (filter) to be applied to the search
     * @param {addressbookRequestSuccess} success callback function
     * @param {addressbookRequestFailure} failure callback function
     * 
     * @example
     * var onSuccess = function(entryArray){
     *     var index;
     *     for (index in entryArray) {
     *         console.log(entryArray[index].firstName + ", " + entryArray[index].lastName);
     *     }
     * };
     * var onError = function (err) {
     *   console.log(err);
     * };
     * 
     * fcs.addressbook.searchDirectory("Michael", fcs.addressbook.SearchType.FIRSTNAME, onSuccess, onError);
     */
    this.searchDirectory = addressbookManager.searchDirectory;
};

fcs.addressbook = new Addressbook();

var CallTriggerService = function() {
    var logger = logManager.getLogger("callTriggerService");
    this.clickToCall = function(callingParty, calledParty, onSuccess, onFailure) {
        var data = {
            "clickToCallRequest":
            {
                "callingParty": callingParty,
                "calledParty": calledParty
            }
        };
        server.sendPostRequest({
            "url": getWAMUrl(1, "/clicktocall"),
            "data": data
        },
        onSuccess,
        onFailure
        );
    };
    
    this.getIMRN = function(realm, source, destination, onSuccess, onFailure) {
        logger.info("(Wam Call) getIMRN Function ");

        function parseIMRNResponse(IMRNdata) {
            var receivedIMRN;
            if (IMRNdata && IMRNdata.imrnResponse) {
                receivedIMRN = utils.getProperty(IMRNdata.imrnResponse, 'imrn');
            }
            return receivedIMRN;
        }
        
        if(destination.match('@')){            
         if(destination.split(':')[0]!=="sip"){
            destination = "sip:" + destination;
            }
        }
        
        var data = {
            "imrnRequest":{
                "realm": realm,
                "sourceAddress": source,
                "destinationAddress": destination
            }
        };
        server.sendPostRequest({
            "url": getWAMUrl(1, "/imrn"),
            "data": data
        },
        onSuccess,
        onFailure,
        parseIMRNResponse
        );
    };
    
};


var callTriggerService = new CallTriggerService();
var CallTrigger = function() {
    
    this.clickToCall = callTriggerService.clickToCall;
    
    this.getIMRN = callTriggerService.getIMRN;
    
};

fcs.call = new CallTrigger();

/**
* Call related resources (IMRN, Click To Call, Call Disposition).
*
* @name call
* @namespace
* @memberOf fcs
* 
* @version 3.0.4
* @since 3.0.0
*/

var Call = function() {

    var videoDeviceStatus = true,notificationState;
    
   /**
    * This field provides the state of local video status like "recvonly", "sendrecv", "sendrecv" etc.
    *
    * @name fcs.call.localVideoState
    * @field
    * @type {number}
    * @since 3.0.0
    */
    this.localVideoState = 0;

   /**
    * This field provides the state of remote video status like "recvonly", "sendrecv", "sendrecv" etc.
    *
    * @name fcs.call.remoteVideoState
    * @field
    * @since 3.0.0
    * @type {number}
    */
    this.remoteVideoState = 0;

    /**
    * Sets the handler for received call notifications.
    *
    * @name onReceived
    * @event
    * @since 3.0.0
    * @memberOf fcs.call
    * @param {fcs.call.Call} call The call object
    *
    * @example
    * // This function listens received calls
    * function callReceived(call) {                    
    *    console.log("There is an incomming call...");                    
    *
    *    //This function listens call state changes in JSL API level 
    *    call.onStateChange = function(state) {
    *        onStateChange(call, state);
    *    };
    *
    *    //This function listens media streams in JSL API level
    *    call.onStreamAdded = function(streamURL) {
    *        // Remote Video is turned on by the other end of the call
    *        // Stream URL of Remote Video stream is passed into this function
    *        onStreamAdded(streamURL);
    *    };
    *    
    *    // Answering the incomming call
    *    call.answer(onAnswer, onFailure, isVideoAnswer);
    * }
    *
    * fcs.call.onReceived = callReceived;
    */
    this.onReceived = null;

    /**
    * Initialize the media components in order to provide real time communication.
    * When using FCS Plug-in with audio only the plugin will be added as an hidden object to root of the document.
    * When using FCS Plug-in with both audio and video, the object will be added to the videoContainer.
    *
    * @name fcs.call.initMedia
    * @function
    * @since 3.0.0
    * @param {function} [onSuccess] The onSuccess() to be called when the media have been successfully acquired
    * @param {function} [onFailure] The onFailure({@link fcs.call.MediaErrors}) to be called when media could not be aquired
    * @param {object} [options] The options used for initialization
    * @param {string} [options.type="plugin"] The type of media to use (for future use with webRTC)
    * @param {string} [options.pluginLogLevel="2"] The log level of webrtc plugin
    * @param {object} [options.videoContainer] html node in which to inject the video (deprecated)
    * @param {object} [options.removeVideoContainer] html node in which to inject the video
    * @param {object} [options.localVideoContainer] html node in which to inject the preview of the user camera
    * @param {object} [options.iceserver] ice server ip address ex: [{"url" : "stun:206.165.51.23:3478"}]
    * @param {object} [options.pluginMode=LEGACY] use downloaded plugin which disables webrtc capabilities of browser if avaliable
    * @param {object} [options.pluginMode=WEBRTC] use downloaded plugin which overrides webrtc capabilities of browser if avaliable
    * @param {object} [options.pluginMode=AUTO] use webrtc capabilities of browser if avaliable otherwise force user to download plugin
    * @param {object} [options.webrtcdtls=FALSE] webrtc disabled
    * @param {object} [options.webrtcdtls=TRUE] webrtc enabled
    * @param {object} [options.language="en"] language setting of the plugin
    *
    * @example
    * // Media options
    * var mediaOptions = {
    *    "notificationType": "websocket",
    *    "pluginMode": "auto",
    *    "iceserver": [{"url":"stun:206.165.51.69:3478"}],
    *                 [{"url":"turn:206.165.51.69:3478",
    *                   "credential":""}]
    *    "webrtcdtls": false,
    *    "language": "fr"
    * };                  
    *
    * // Initializing media
    * fcs.call.initMedia(
    *    function() {
    *        console.log("Media was initialized successfully!");
    *    }, 
    *    function(error) {
    *       switch(error) {
    *            case fcs.call.MediaErrors.WRONG_VERSION : // Alert
    *                console.log("Media Plugin Version Not Supported");
    *                break;
    *
    *            case fcs.call.MediaErrors.NEW_VERSION_WARNING : //Warning
    *                console.log("New Plugin Version is available");
    *                break;
    *
    *            case fcs.call.MediaErrors.NOT_INITIALIZED : // Alert             
    *                console.log("Media couldn't be initialized");
    *                break;
    *
    *            case fcs.call.MediaErrors.NOT_FOUND : // Alert
    *                console.log("Plugin couldn't be found!");
    *                break;
    *        }
    *    }, 
    *    mediaOptions
    * );  
    */

    this.initMedia = callManager.initMedia;

    /**
    * Starts a call.
    *
    * @name fcs.call.startCall
    * @function
    * @since 3.0.0
    * @param {string} from The caller's address (e.g. SIP URI) used to establish the call
    * @param {object} [contact] Contains users firstName and lastName
    * @param {string} [contact.firstName="John"] First Name of the user
    * @param {string} [contact.lastName="Doe"] Last Name of the user
    * @param {string} to The callee's address (e.g. SIP URI) used to establish the call
    * @param {function} onSuccess The onSuccess({@link fcs.call.OutgoingCall}) callback function to be called<
    * @param {function} onFailure The onFailure({@link fcs.Errors}) callback function to be called
    * @param {boolean} [isVideoEnabled] This will add m=video to SDP
    * @param {boolean} [sendInitialVideo] In order to make video call set this to true
    * @param {string} [videoQuality] Sets the quality of video
    * @param {string} convID This parameter will only used by smart office clients.
    *
    * @example
    * // Make Voice Call
    * // Start a voice call to the uri indicated with "to" argument
    * // Login is a prerequisite for making calls
    * // contact is an object with two fields contact.firstName and contact.lastName that specifies caller info
    * fcs.call.startCall(fcs.getUser(), contact, to,
    *      function(outgoingCall){
    *                //get callid for your web app to be used later for handling popup windows
    *                var callId = outgoingCall.getId();
    * 
    *                outgoingCall.onStateChange = function(state,statusCode){
    *                //Add statusCode that returned from the server property to the call
    *                outgoingCall.statusCode = statusCode;
    *                //Put your web app code to handle call state change like ringing, onCall ...etc.
    *	    };
    *       
    *       outgoingCall.onStreamAdded = function(streamURL){
    *           // Setting up source (src tag) of remote video container
    *           $("#remoteVideo").attr("src", streamURL);
    *       };
    *    },
    *    function(){
    *       //put your web app failure handling code
    *       window.alert("CALL_FAILED");
    *    },
    *    false, false);    
    *     
    */

    this.startCall = callManager.start;

    /**
    * Sets log severity level for Webrtc Plugin (not used for native webrtc)
    * 5 levels(sensitive:0, verbose:1, info:2, warning:3, error:4)
    * 
    * @name callManager.set_logSeverityLevel
    * @function
    * @since 3.0.0
    */

    this.set_logSeverityLevel = callManager.set_logSeverityLevel;
    
    /**
    * Enables log callback for Webrtc Plugin (not used for native webrtc)
    *
    * @name callManager.enable_logCallback
    * @function
    * @since 3.0.0
    */

    this.enable_logCallback = callManager.enable_logCallback;

    /**
    * Disables log callback for Webrtc Plugin (not used for native webrtc)
    *
    * @name callManager.disable_logCallback
    * @function
    * @since 3.0.0
    */

    this.disable_logCallback = callManager.disable_logCallback;
   
    /**
    * Gets audioInDeviceCount
    *
    * @name fcs.call.get_audioInDeviceCount
    * @function
    * @since 3.0.0
    */

    this.get_audioInDeviceCount = callManager.get_audioInDeviceCount;

    /**
    * Gets audioOutDeviceCount
    *
    * @name fcs.call.get_autioOutDeviceCount
    * @function
    * @since 3.0.0
    */

    this.get_audioOutDeviceCount = callManager.get_audioOutDeviceCount;

    /**
    * Gets videoDeviceCount
    *
    * @name fcs.call.get_videoDeviceCount
    * @function
    * @since 3.0.0
    */

    this.get_videoDeviceCount = callManager.get_videoDeviceCount;

    /**
    * Gets Video Device availability status
    * Only works with PLUGIN
    * @deprecated 
    * @name fcs.call.initVideoDeviceStatus
    * @function
    * @since 3.0.0
    */
    this.initVideoDeviceStatus = function() {
        videoDeviceStatus = callManager.hasVideoDevice;
    };

    /**
    * Returns Video Device(Camera) availability
    * @name fcs.call.hasVideoDevice
    * @function
    * @since 3.0.0
    * @example 
    * if(fcs.call.hasVideoDevice()){
    *     // If there is a video device available, show local video container 
    *     callView.toggleLocalVideo(true);
    * }
    */
    this.hasVideoDevice = callManager.hasVideoDevice;
    
    /**
    * Returns Audio Device(Microphone) availability
    * @name fcs.call.hasAudioDevice
    * @function
    * @since 3.0.0
    * @example 
    * if(!fcs.call.hasAudioDevice()){
    *     window.alert("There is no available audio source!");
    * }
    */
    this.hasAudioDevice = callManager.hasAudioDevice;    
   

    /**
    * Gets User Media functionality for plugin
    * Only works with PLUGIN
    *
    * @name fcs.call.getUserMedia
    * @function
    * @since 3.0.0
    * @example 
    * fcs.call.getUserMedia(
    *    function(mediaInfo){
    *        window.console.log("media initialized. mediaInfo: " + JSON.stringify(mediaInfo));
    *    },
    *    function(err){
    *        window.console.log("media initialization error " + err);
    *    },
    *    {
    *        "audio": true,
    *        "video": true,
    *        "audioIndex":0, 
    *        "videoIndex":0
    *    }
    * );
    */

    this.getUserMedia = callManager.getUserMedia;

    /**
    * Shows device settings Window
    * Only works with PLUGIN
    *
    * @name fcs.call.showSettingsWindow
    * @function
    * @since 3.0.0
    * @example 
    * $("#device_settings_button").click(function() {
    *    fcs.call.showSettingsWindow();
    * });   
    */

    this.showSettingsWindow = callManager.showSettingsWindow;
    
    /**
    * Gets local and remote video resolutions with the order below
    * remoteVideoHeight-remoteVideoWidth
    * Only works with PLUGIN
    *
    * @deprecated 
    * @name fcs.call.getVideoResolutions
    * @function
    * @since 3.0.0
    */

    this.getVideoResolutions = callManager.getVideoResolutions;    

    /**
    * Gets local video resolutions with the order below
    * localVideoHeight-localVideoWidth
    * Only works with PLUGIN
    *
    * @name fcs.call.getLocalVideoResolutions
    * @function
    * @since 3.0.0
    * @example
    * var pluginLocalVideoResolution = fcs.call.getLocalVideoResolutions();
    * var localVideoHeight = pluginLocalVideoResolution[0];
    * var localVideoWidth = pluginLocalVideoResolution[1];
    * console.log("Local Video Dimensions: " + localVideoWidth + "," + localVideoHeight);
    */

    this.getLocalVideoResolutions = callManager.getLocalVideoResolutions;

    /**
    * Gets remote video resolutions with the order below
    * remoteVideoHeight-remoteVideoWidth
    * Only works with PLUGIN
    *
    * @name fcs.call.getRemoteVideoResolutions
    * @function
    * @since 3.0.0
    * @example 
    * var pluginRemoteVideoResolution = fcs.call.getRemoteVideoResolutions();
    * var remoteVideoHeight = pluginRemoteVideoResolution[0];
    * var remoteVideoWidth = pluginRemoteVideoResolution[1];
    * console.log("Remote Video Dimensions: " + remoteVideoWidth + "," + remoteVideoHeight);
    */

    this.getRemoteVideoResolutions = callManager.getRemoteVideoResolutions;

    /**
    * Shows if plugin is enabled.
    * Only works with PLUGIN
    *
    * @name fcs.call.isPluginEnabled
    * @function
    * @since 3.0.0
    * @example
    * if(fcs.call.isPluginEnabled()) {
    *     $("#device_settings_details").show();
    * }
    */

    this.isPluginEnabled = callManager.isPluginEnabled;

    this.hasGotCalls = callManager.hasGotCalls;

    /**
    * Retrived a call by Id.
    * 
    * This function allow to retrive a call which was cached by the call continuation feature.
    *
    * @name fcs.call.getIncomingCallById
    * @function
    * @since 3.0.0
    * @param {string} from The id of the incoming call
    * @returns {fcs.call.IncomingCall}
    *     
    */
    this.getIncomingCallById = function(id) {
        return callManager.getIncomingCallById(id);
    };
    
    /**
    * Create a renderer for an audio/video stream
    *
    * @name fcs.call.createStreamRenderer
    * @function
    * @since 3.0.0
    * @param {string} streamUrl The url of the stream 
    * @param {object} container The DOM node into which to create the renderer (the content of the node will be cleared)
    * @param {object} options The options to be used for the renderer
    * @returns {Object} renderer Renderer object 
    *     
    */
    this.createStreamRenderer = callManager.createStreamRenderer;
    
    /**
    * Discpose of a previously created renderer
    *
    * @name fcs.call.disposeStreamRenderer
    * @function
    * @since 3.0.0 
    * @param {object} container The DOM node into which the renderer was previously created
    */
    this.disposeStreamRenderer = callManager.disposeStreamRenderer;
    
    /**
    * States of the Call.
    * @name States
    * @enum {number}
    * @since 3.0.0
    * @readonly
    * @memberOf fcs.call
    * @property {number} [IN_CALL=0] The call has been established.
    * @property {number} [ON_HOLD=1] The call has been put on hold.
    * @property {number} [RINGING=2] The outgoing call is ringing.
    * @property {number} [ENDED=3] The call has been terminated.
    * @property {number} [REJECTED=4] The outgoing call request has been rejected by the other party.
    * @property {number} [OUTGOING=5] The outgoing call request has been sent but no response have been received yet.
    * @property {number} [INCOMING=6] The incoming call has been received but has not been answered yet.
    * @property {number} [ANSWERING=7] The incoming call has been answered but the call as not been establish yet.
    * @property {number} [JOINED=8] The call is joined.
    * @property {number} [RENEGOTIATION=9] The call is re-established.
    * @property {number} [TRANSFERRED=10] The call is treansffered to a third party
    * @property {number} [ON_REMOTE_HOLD=11] The call has been put on hold remotely.
    */
    this.States = callManager.CALL_STATES;

    /**
    * Hold states of the Call.
    * @name HoldStates
    * @enum {number}
    * @since 3.0.0
    * @readonly
    * @memberOf fcs.call
    * @property {number} [LOCAL_HOLD=0] The call has been put on hold locally.
    * @property {number} [REMOTE_HOLD=1] The call has been put on hold remotely.
    * @property {number} [BOTH_HOLD=2] he call has been put on both locally and remotely.
    */
    this.HoldStates = callManager.CALL_HOLD_STATES;

    /**
    * Type of media initialization errors.
    * @name MediaErrors
    * @enum {number}
    * @since 3.0.0
    * @readonly
    * @memberOf fcs.call
    * @property {number} [NOT_FOUND=1] No media source available.
    * @property {number} [NOT_ALLOWED=2] User did not allow media use.
    * @property {number} [OPTIONS=3] Missing or wrong use of options.
    * @property {number} [WRONG_VERSION=4] The version of the plugin is not supported.
    * @property {number} [NOT_INITIALIZED=5] The media is not initialized.
    * @property {number} [NEW_VERSION_WARNING=6] New plugin version is available.
    */
    this.MediaErrors = {

        NOT_FOUND: 1,

        NOT_ALLOWED: 2,

        OPTIONS: 3,

        WRONG_VERSION: 4,

        NOT_INITIALIZED: 5,

        NEW_VERSION_WARNING: 6
    };

    /**
    * Call a party through a client device using the Click To Call service.
    *
    * @name fcs.call.clickToCall
    * @function
    * @since 3.0.0
    * @param {string} callingParty The caller's address (e.g. SIP) used to establish the call 
    * @param {string} calledParty The callee's address (e.g. SIP) used to establish the call
    * @param {function} onSuccess The onSuccess() callback to be called
    * @param {function} onFailure The onFailure({@link fcs.Errors}) callback to be called
    * 
    * @example
    * var onSuccess = function(){
    *    //do something here
    * };
    * var onError = function (err) {
    *   //do something here
    * };
    * 
    * fcs.call.clickToCall("user1@test.com", "user2@test.com", onSuccess, onError);
    */
   
   /**
    * Provide the user with a routable PSTN number as a result of an IMRN allocation request.
    *
    * @name fcs.call.getIMRN
    * @function
    * @param {string} realm The pool of numbers from which IMRN will be allocated
    * @param {string} source The URI of the individual placing the call
    * @param {string} destination The URI of the individual receiving the call
    * @param {function} onSuccess The onSuccess() callback to be called
    * @param {function} onFailure The onFailure({@link fcs.Errors}) callback to be called
    */

    /**
     * Call is super class of {@link fcs.call.IncomingCall} and {@link fcs.call.OutgoingCall}
     *
     * @name Call
     * @class
     * @since 3.0.0
     * @memberOf fcs.call
     * @param {String} callid Unique identifier for the call
     * @version 3.0.4
     * @since 3.0.0
     */
    this.Call = function(callid){};

    /**
    * When an incoming call is received, {@link fcs.call.event:onReceived} handler will be invoked.
    *
    * @name IncomingCall
    * @class
    * @since 3.0.0
    * @memberOf fcs.call
    * @augments fcs.call.Call
    * @param {String} callid Unique identifier for the call
    * @param {Object} data options
    * @param {Boolean} data.reject can reject. This is a call disposition option.
    * @param {Boolean} data.forward can forward. This is a call disposition option.
    * @param {Boolean} data.answer can answer. This is a call disposition option.
    * @version 3.0.4
    * @since 3.0.0
    */
    this.IncomingCall = function(callid, data){
        var id = callid, options = data, self = this, sendVideo = true, receiveVideo = true, receivingVideo = false, isJoin = false, onJoin, buttonDisabler = false, btnTimeout,
        auditTimer, isHold = false, holdState = null;

        this.notificationQueue = new utils.Queue();

        /**
         * Sets the handler for listening local video stream ready event.
         *
         * @name fcs.call.IncomingCall#onLocalStreamAdded
         * @function
         * @since 3.0.0.1
         *
         **/
        this.onLocalStreamAdded = null;

        /**
         * Sets the handler for listening remote video stream ready event.
         *
         * @name fcs.call.IncomingCall#onStreamAdded
         * 
         * @function
         * @since 2.0.0
         * @param {?String} streamUrl remote video streamUrl
         * 
         **/
        this.onStreamAdded = null;

        /**
       * @name fcs.call.IncomingCall#calleeNumber
       * @field
       * @since 3.0.0
       * @type {String}
       *
       * @example
       *
       * When an incoming call is received, {@link fcs.call.event:onReceived} handler will be invoked.
       *
       * var incomingCall = {};
       * fcs.call.onReceived = function(call) {
       *    incomingCall = call;
       * };
       *
       * incomingCall.calleeNumber;
       */

        /**
       * @name fcs.call.IncomingCall#callerNumber
       * @field
       * @since 3.0.0
       * @type {String}
       *
       * @example
       *
       * When an incoming call is received, {@link fcs.call.event:onReceived} handler will be invoked.
       *
       * var incomingCall = {};
       * fcs.call.onReceived = function(call) {
       *    incomingCall = call;
       * };
       *
       * incomingCall.callerNumber;
       */

        /**
       * @name fcs.call.IncomingCall#callerName
       * @field
       * @since 3.0.0
       * @type {String}
       *
       * @example
       *
       * When an incoming call is received, {@link fcs.call.event:onReceived} handler will be invoked.
       *
       * var incomingCall = {};
       * fcs.call.onReceived = function(call) {
       *    incomingCall = call;
       * };
       *
       * incomingCall.callerName;
       */
      
        /**
       * @name fcs.call.IncomingCall#primaryContact
       * @field
       * @since 3.0.0
       * @type {String}
       *
       * @example
       *
       * When an incoming call is received, {@link fcs.call.event:onReceived} handler will be invoked.
       *
       * var incomingCall = {};
       * fcs.call.onReceived = function(call) {
       *    incomingCall = call;
       * };
       *
       * incomingCall.primaryContact;
       */
      

        /**
         * Puts the speaker into mute.
         *
         * @name fcs.call.IncomingCall#mute
         * @function
         * @since 3.0.0
         *
         * @example
         *
         * When an incoming call is received, {@link fcs.call.event:onReceived} handler will be invoked.
         *
         * var incomingCall = {};
         * fcs.call.onReceived = function(call) {
         *    incomingCall = call;
         * };
         *
         * incomingCall.mute();
         */
        this.mute = function(){
            callManager.mute(id, true);
        };

        /**
         * Puts the speaker into unmute.
         *
         * @name fcs.call.IncomingCall#unmute
         * @function
         * @since 3.0.0
         *
         * @example
         *
         * When an incoming call is received, {@link fcs.call.event:onReceived} handler will be invoked.
         *
         * var incomingCall = {};
         * fcs.call.onReceived = function(call) {
         *    incomingCall = call;
         * };
         *
         * incomingCall.unmute();
         */
        this.unmute = function(){
            callManager.mute(id, false);
        };

        /**
         * Answers the call.
         * @name fcs.call.IncomingCall#answer
         * @function
         * @since 3.0.0
         * @param {function} onSuccess The onSuccess() callback function to be called
         * @param {function} onFailure The onFailure({@link fcs.Errors}) callback function to be called
         * @param {boolean} [isVideoEnabled] Start call with video or not
         * @param {String} [videoQuality] Video quality 
         *
         * @example
         *
         * When an incoming call is received, {@link fcs.call.event:onReceived} handler will be invoked.
         *
         * var incomingCall = {};
         * fcs.call.onReceived = function(call) {
         *    incomingCall = call;
         * };
         *
         * var onSuccess = function(){
         *    //do something here
         * };
         * var onError = function (err) {
         *   //do something here
         * };
         *
         * incomingCall.answer(onSuccess, onFailure, true, "1280x720");
         */
        this.answer = function(onSuccess, onFailure, isVideoEnabled, videoQuality){
            if(options.answer){
                callManager.answer(id, onSuccess, onFailure, isVideoEnabled, videoQuality);
            } else {
                onFailure();
            }
        };

        /**
         * Rejects the call
         *
         * @name fcs.call.IncomingCall#reject
         * @function
         * @since 3.0.0
         * @param {function} onSuccess The onSuccess() callback function to be called
         * @param {function} onFailure The onFailure({@link fcs.Errors}) callback function to be called
         *
         * @example
         *
         * When an incoming call is received, {@link fcs.call.event:onReceived} handler will be invoked.
         *
         * var incomingCall = {};
         * fcs.call.onReceived = function(call) {
         *    incomingCall = call;
         * };
         *
         * var onSuccess = function(){
         *    //do something here
         * };
         * var onError = function (err) {
         *   //do something here
         * };
         *
         * incomingCall.reject(onSuccess, onFailure);
         */
        this.reject = function(onSuccess, onFailure) {
            if(options.reject){
                callManager.reject(id, onSuccess, onFailure);
            } else {
                onFailure();
            }
        };

        /**
         * Ignores the call. Client will not send any rest request for this one. Ignore is on client side only.
         *
         * @name fcs.call.IncomingCall#ignore
         * @function
         * @since 3.0.0
         * @param {function} onSuccess The onSuccess() callback function to be called
         * @param {function} onFailure The onFailure({@link fcs.Errors}) callback function to be called
         *
         * @example
         *
         * When an incoming call is received, {@link fcs.call.event:onReceived} handler will be invoked.
         *
         * var incomingCall = {};
         * fcs.call.onReceived = function(call) {
         *    incomingCall = call;
         * };
         *
         * var onSuccess = function(){
         *    //do something here
         * };
         * var onError = function (err) {
         *   //do something here
         * };
         *
         * incomingCall.ignore(onSuccess, onFailure);
         */
        this.ignore = function(onSuccess, onFailure) {
            callManager.ignore(id, onSuccess, onFailure);
        };

        /**
         * Forwards the call.
         *
         * @name fcs.call.IncomingCall#forward
         * @function
         * @since 3.0.0
         * @param {string} address The address where the call is transferred (e.g. SIP URI)
         * @param {function} onSuccess The onSuccess() callback function to be called
         * @param {function} onFailure The onFailure({@link fcs.Errors}) callback function to be called
         *
         * @example
         *
         * When an incoming call is received, {@link fcs.call.event:onReceived} handler will be invoked.
         *
         * var incomingCall = {};
         * fcs.call.onReceived = function(call) {
         *    incomingCall = call;
         * };
         *
         * var onSuccess = function(){
         *    //do something here
         * };
         * var onError = function (err) {
         *   //do something here
         * };
         *
         * incomingCall.forward("user1@test.com", onSuccess, onFailure);
         */
        this.forward = function(address, onSuccess, onFailure) {
            if(options.forward){
                callManager.forward(id, address, onSuccess, onFailure);
            } else {
                onFailure();
            }
        };

        /**
         *
         * Checks the incoming call if it has reject option.
         *
         * @name fcs.call.IncomingCall#canReject
         * @function
         * @since 3.0.0
         * @returns {Boolean}
         *
         * @example
         *
         * When an incoming call is received, {@link fcs.call.event:onReceived} handler will be invoked.
         *
         * var incomingCall = {};
         * fcs.call.onReceived = function(call) {
         *    incomingCall = call;
         * };
         *
         * incomingCall.canReject();
         */
        this.canReject = function(){
            return options.reject === true;
        };

        /**
         *
         * Checks the incoming call if it has forward option.
         *
         * @name fcs.call.IncomingCall#canForward
         * @function
         * @since 3.0.0
         * @returns {Boolean}
         *
         * @example
         *
         * When an incoming call is received, {@link fcs.call.event:onReceived} handler will be invoked.
         *
         * var incomingCall = {};
         * fcs.call.onReceived = function(call) {
         *    incomingCall = call;
         * };
         *
         * incomingCall.canForward();
         */
        this.canForward = function(){
            return options.forward === true;
        };

        /**
         * Checks the incoming call if it has answer option.
         *
         * @name fcs.call.IncomingCall#canAnswer
         * @function
         * @since 3.0.0
         * @returns {Boolean}
         *
         * @example
         *
         * When an incoming call is received, {@link fcs.call.event:onReceived} handler will be invoked.
         *
         * var incomingCall = {};
         * fcs.call.onReceived = function(call) {
         *    incomingCall = call;
         * };
         *
         * incomingCall.canAnswer();
         */
        this.canAnswer = function(){
            return options.answer === true;
        };

        /**
         * Are we able to send video.
         * Ex: Client may try to send video but video cam can be unplugged. Returns false in that case
         *
         * @name fcs.call.IncomingCall#canSendVideo
         * @function
         * @since 3.0.0
         * @returns {Boolean}
         *
         * @example
         *
         * When an incoming call is received, {@link fcs.call.event:onReceived} handler will be invoked.
         *
         * var incomingCall = {};
         * fcs.call.onReceived = function(call) {
         *    incomingCall = call;
         * };
         *
         * incomingCall.canSendVideo();
         */
        this.canSendVideo = function(){
            return sendVideo;
        };
              
        /**
         * Are we able to send video. Checks the incoming SDP
         *
         * @name fcs.call.IncomingCall#canReceiveVideo
         * @function
         * @since 3.0.0
         * @returns {Boolean}
         *
         * @example
         *
         * When an incoming call is received, {@link fcs.call.event:onReceived} handler will be invoked.
         *
         * var incomingCall = {};
         * fcs.call.onReceived = function(call) {
         *    incomingCall = call;
         * };
         *
         * incomingCall.canReceiveVideo();
         */
        this.canReceiveVideo = function(){
            return receiveVideo;
        };

        /**
         * Are we able to receive video. Checks the incoming SDP
         *
         * @name fcs.call.IncomingCall#canReceivingVideo
         * @function
         * @since 3.0.0
         * @returns {Boolean}
         *
         * @example
         *
         * When an incoming call is received, {@link fcs.call.event:onReceived} handler will be invoked.
         *
         * var incomingCall = {};
         * fcs.call.onReceived = function(call) {
         *    incomingCall = call;
         * };
         *
         * incomingCall.canReceivingVideo();
         */
        this.canReceivingVideo = function(){
            return receivingVideo;
        };

        /**
         * sets the outgoing video condition.
         *
         * @name fcs.call.IncomingCall#setSendVideo
         * @function
         * @since 3.0.0
         * @param {Boolean} videoSendStatus video send status
         *
         * @example
         *
         * When an incoming call is received, {@link fcs.call.event:onReceived} handler will be invoked.
         *
         * var incomingCall = {};
         * fcs.call.onReceived = function(call) {
         *    incomingCall = call;
         * };
         *
         * incomingCall.setSendVideo(true);
         */
        this.setSendVideo = function(videoSendStatus){
            sendVideo = videoDeviceStatus && videoSendStatus;
        };

        /**
         * sets the outgoing video condition
         *
         * @name fcs.call.IncomingCall#setReceiveVideo
         * @function
         * @since 3.0.0
         * @param {Boolean} videoReceiveStatus video receive status
         *
         * @example
         *
         * When an incoming call is received, {@link fcs.call.event:onReceived} handler will be invoked.
         *
         * var incomingCall = {};
         * fcs.call.onReceived = function(call) {
         *    incomingCall = call;
         * };
         *
         * incomingCall.setReceiveVideo(true);
         */
        this.setReceiveVideo = function(videoReceiveStatus){
            receiveVideo = videoReceiveStatus;
        };

        /**
         * sets the incoming video condition
         *
         * @name fcs.call.IncomingCall#setReceivingVideo
         * @function
         * @since 3.0.0
         * @param {Boolean} isReceiving video receive status
         *
         * @example
         *
         * When an incoming call is received, {@link fcs.call.event:onReceived} handler will be invoked.
         *
         * var incomingCall = {};
         * fcs.call.onReceived = function(call) {
         *    incomingCall = call;
         * };
         *
         * incomingCall.setReceivingVideo(true);
         */
        this.setReceivingVideo = function(isReceiving){
            receivingVideo = isReceiving;
        };

        /**
         * @deprecated Do not use this function, it will be removed on 3.0.5
         *
         * @name fcs.call.IncomingCall#setHold
         * @function
         * @since 3.0.0
         */
        this.setHold = function(hold) {
            isHold = hold;
        };

        /**
         * @deprecated Do not use this function, use call.getHoldState()
         *
         * @name fcs.call.IncomingCall#getHold
         * @function
         * @since 3.0.0
         */
        this.getHold = function() {
            return isHold;
        };

        /**
         * @deprecated Do not use this function,  it will be removed on 3.0.5
         *
         * @name fcs.call.IncomingCall#setHoldState
         * @function
         * @since 3.0.0
         */
        this.setHoldState = function(s) {
            holdState = s;
        }; 
        
         /**
         * Returns hold state of call.
         *
         * @name fcs.call.IncomingCall#getHoldState
         * @function
         * @since 3.0.4
         * @returns {@link fcs.HoldStates} or undefined if call has not been put
         * on hold.
         *
         * @example
         *
         * When an incoming call is received, {@link fcs.call.event:onReceived} handler will be invoked.
         *
         * var incomingCall = {};
         * fcs.call.onReceived = function(call) {
         *    incomingCall = call;
         * };
         *
         * incomingCall.getHoldState();
         */
        this.getHoldState = function() {
            return callManager.getHoldStateOfCall(id);
        };            

        /**
         * Gets call id.
         *
         * @name fcs.call.IncomingCall#getId
         * @function
         * @since 3.0.0
         * @returns {id} Unique identifier for the call
         *
         * @example
         *
         * When an incoming call is received, {@link fcs.call.event:onReceived} handler will be invoked.
         *
         * var incomingCall = {};
         * fcs.call.onReceived = function(call) {
         *    incomingCall = call;
         * };
         *
         * incomingCall.getId();
         */
        this.getId = function(){
            return id;
        };

        /**
         * End the call
         *
         * @name fcs.call.IncomingCall#end
         * @function
         * @since 3.0.0
         * @param {function} onSuccess The onSuccess() callback function to be called
         *
         * @example
         *
         * When an incoming call is received, {@link fcs.call.event:onReceived} handler will be invoked.
         *
         * var incomingCall = {};
         * fcs.call.onReceived = function(call) {
         *    incomingCall = call;
         * };
         *
         * var onSuccess = function(){
         *    //do something here
         * };
         *
         * incomingCall.end(onSuccess);
         */
        this.end = function(onSuccess){
            callManager.end(id, onSuccess);
        };

        /**
          * Holds the call.
          *
          * @name fcs.call.IncomingCall#hold
          * @function
          * @since 3.0.0
          * @param {function} onSuccess The onSuccess() callback function to be called
          * @param {function} onFailure The onFailure({@link fcs.Errors}) callback function to be called
          *
          * @example
          *
          * When an incoming call is received, {@link fcs.call.event:onReceived} handler will be invoked.
          *
          * var incomingCall = {};
          * fcs.call.onReceived = function(call) {
          *    incomingCall = call;
          * };
          *
          * var onSuccess = function(){
          *    //do something here
          * };
          * var onFailure = function(err){
          *    //do something here
          * };
          *
          * incomingCall.hold(onSuccess, onFailure);
          */
        this.hold = function(onSuccess, onFailure){
            callManager.hold(callid, onSuccess, onFailure);
        };

        /**
         * Resume the call.
         *
         * @name fcs.call.IncomingCall#unhold
         * @function
         * @since 3.0.0
         * @param {function} onSuccess The onSuccess() callback function to be called
         * @param {function} onFailure The onFailure({@link fcs.Errors}) callback function to be called
         *
         * @example
         *
         * When an incoming call is received, {@link fcs.call.event:onReceived} handler will be invoked.
         *
         * var incomingCall = {};
         * fcs.call.onReceived = function(call) {
         *    incomingCall = call;
         * };
         *
         * var onSuccess = function(){
         *    //do something here
         * };
         * var onFailure = function(err){
         *    //do something here
         * };
         *
         * incomingCall.unhold(onSuccess, onFailure);
         */
        this.unhold = function(onSuccess,onFailure){
            callManager.unhold(id, onSuccess,onFailure);
        };

        this.directTransfer = function(address,onSuccess,onFailure){
            callManager.directTransfer(id, address, onSuccess,onFailure);
        };

        /**
         * Stop the video for this call after the call is established
         *
         * @name fcs.call.IncomingCall#videoStop
         * @function
         * @since 3.0.0
         * @param {function} onSuccess The onSuccess() callback function to be called
         * @param {function} onFailure The onFailure({@link fcs.Errors}) callback function to be called
         *
         * @example
         *
         * When an incoming call is received, {@link fcs.call.event:onReceived} handler will be invoked.
         *
         * var incomingCall = {};
         * fcs.call.onReceived = function(call) {
         *    incomingCall = call;
         * };
         *
         * var onSuccess = function(){
         *    //do something here
         * };
         * var onFailure = function(err){
         *    //do something here
         * };
         *
         * incomingCall.videoStop(onSuccess, onFailure);
         */
        this.videoStop = function(onSuccess, onFailure){
            callManager.videoStopStart(callid, onSuccess, onFailure, false);
        };

        /**
         * Start the video for this call after the call is established
         *
         * @name fcs.call.IncomingCall#videoStart
         * @function
         * @since 3.0.0
         * @param {function} onSuccess The onSuccess() callback function to be called
         * @param {function} onFailure The onFailure() callback function to be called
         * @param {string} [videoQuality] Sets the quality of video, this parameter will be passed to getUserMedia()
         *                  if the video source is allowed before, this parameter will not be used
         *
         * @example
         *
         * When an incoming call is received, {@link fcs.call.event:onReceived} handler will be invoked.
         *
         * var incomingCall = {};
         * fcs.call.onReceived = function(call) {
         *    incomingCall = call;
         * };
         *
         * var onSuccess = function(){
         *    //do something here
         * };
         * var onFailure = function(err){
         *    //do something here
         * };
         *
         * incomingCall.videoStart(onSuccess, onFailure);
         */
        this.videoStart = function(onSuccess, onFailure, videoQuality){
            callManager.videoStopStart(callid, onSuccess, onFailure, true, videoQuality);
        };

        /**
         * Join 2 calls
         * You need two different calls to establish this functionality.
         * In order to join two calls. both calls must be put in to hold state first.
         * If not call servers will not your request.
         *
         * @name fcs.call.IncomingCall#join
         * @function
         * @since 3.0.0
         * @param {fcs.call.Call} anotherCall Call that we want the current call to be joined to.
         * @param {function} onSuccess The onSuccess({@link fcs.call.Call}) to be called when the call have been joined provide the joined call as parameter
         * @param {function} [onFailure] The onFailure() to be called when media could not be join
         *
         * @example
         *
         * When an incoming call is received, {@link fcs.call.event:onReceived} handler will be invoked.
         *
         * var incomingCall = {};
         * fcs.call.onReceived = function(call) {
         *    incomingCall = call;
         * };
         *
         * And another {@link fcs.call.OutgoingCall} or {@link fcs.call.IncomingCall} is requeired which is going to be joined.
         * var anotherCall; // assume this is previosuly created.
         *
         * var joinOnSuccess = function(joinedCall){
         *    joinedCall // newly created.
         *    //do something here
         * };
         * var joinOnFailure = function(){
         *    //do something here
         * };
         *
         * incomingCall.join(anotherCall, joinOnSuccess, joinOnFailure);
         *
         * When join() is successfuly compeled, joinOnSuccess({@link fcs.call.OutgoingCall}) will be invoked.
         */
        this.join = function(anotherCall, onSuccess, onFailure){
            callManager.join(id, anotherCall.getId(), onSuccess, onFailure);
        };

        /**
         * Send Dual-tone multi-frequency signaling.
         *
         * @name fcs.call.IncomingCall#sendDTMF
         * @function
         * @since 3.0.0
         * @param {String} tone Tone to be send as dtmf.
         *
         * @example
         *
         * When an incoming call is received, {@link fcs.call.event:onReceived} handler will be invoked.
         *
         * var incomingCall = {};
         * fcs.call.onReceived = function(call) {
         *    incomingCall = call;
         * };
         *
         * incomingCall.sendDTMF("0");
         */
        this.sendDTMF = function(tone){
            callManager.sendDTMF(id, tone);
        };

        /**
         * Force the plugin to send a IntraFrame
         * Only used by PLUGIN.
         * This needs to be called when sending video.
         * Solves video freeze issue
         *
         * @name fcs.call.IncomingCall#sendIntraFrame
         * @function
         * @since 3.0.0
         *
         * @example
         *
         * When an incoming call is received, {@link fcs.call.event:onReceived} handler will be invoked.
         *
         * var incomingCall = {};
         * fcs.call.onReceived = function(call) {
         *    incomingCall = call;
         * };
         *
         * incomingCall.sendIntraFrame();
         */
        this.sendIntraFrame = function(){
            if (sendVideo) {
                callManager.sendIntraFrame(id);
            }
        };

        /**
         * Force the plugin to send a BlackFrame
         * Only used by PLUGIN.
         * Some of the SBC's(Session Border Controllers) do not establish one way video.
         * audio only side has to send a blackFrame in order to see the incoming video
         *
         * @name fcs.call.IncomingCall#sendBlackFrame
         * @function
         * @since 3.0.0
         *
         * @example
         *
         * When an incoming call is received, {@link fcs.call.event:onReceived} handler will be invoked.
         *
         * var incomingCall = {};
         * fcs.call.onReceived = function(call) {
         *    incomingCall = call;
         * };
         *
         * incomingCall.sendBlackFrame();
         */
        this.sendBlackFrame = function(){
            callManager.sendBlackFrame(id);
        };
        
        /**
         * Force the plugin to refresh video renderer
         * with this call's remote video stream
         * Only used by PLUGIN.
         *
         * @name fcs.call.IncomingCall#refreshVideoRenderer
         * @function
         * @since 3.0.0
         *
         * @example
         *
         * When an incoming call is received, {@link fcs.call.event:onReceived} handler will be invoked.
         *
         * var incomingCall = {};
         * fcs.call.onReceived = function(call) {
         *    incomingCall = call;
         * };
         *
         * incomingCall.refreshVideoRenderer();
         */
        this.refreshVideoRenderer = function(){
            callManager.refreshVideoRenderer(id);
        };

        /**
         * Returns the call is a join call or not
         * Do not use this function if you really dont need it.
         * This will be handled by the framework
         *
         * @name fcs.call.IncomingCall#getJoin
         * @function
         * @since 3.0.0
         * @returns {Boolean} isJoin
         *
         * @example
         *
         * When an incoming call is received, {@link fcs.call.event:onReceived} handler will be invoked.
         *
         * var incomingCall = {};
         * fcs.call.onReceived = function(call) {
         *    incomingCall = call;
         * };
         *
         * incomingCall.getJoin();
         */
        this.getJoin = function() {
            return isJoin;
        };

        /**
         * Marks the call as a join call or not
         * Do not use this function if you really dont need it.
         * This will be handled by the framework
         *
         * @name fcs.call.IncomingCall#setJoin
         * @function
         * @since 3.0.0
         * @param {String} join
         *
         * @example
         *
         * When an incoming call is received, {@link fcs.call.event:onReceived} handler will be invoked.
         *
         * var incomingCall = {};
         * fcs.call.onReceived = function(call) {
         *    incomingCall = call;
         * };
         *
         * incomingCall.setJoin(true);
         */
        this.setJoin = function (join) {
            isJoin = join;
        };

        /**
         * Returns the button is a disabled or not
         * You may want to disable your buttons while waiting for a response.
         * Ex: this will prevent clicking multiple times for hold button until first hold response is not recieved
         *
         * @name fcs.call.IncomingCall#getButtonDisabler
         * @function
         * @since 3.0.0
         * @returns {Boolean} buttonDisabler
         *
         * @example
         *
         * When an incoming call is received, {@link fcs.call.event:onReceived} handler will be invoked.
         *
         * var incomingCall = {};
         * fcs.call.onReceived = function(call) {
         *    incomingCall = call;
         * };
         *
         * incomingCall.getButtonDisabler();
         */
        this.getButtonDisabler = function() {
            return buttonDisabler;
        };

        /**
         * Disable the button after waiting 4000 milliseconds.
         * You may want to disable your buttons while waiting for a response.
         * Ex: this will prevent clicking multiple times for hold button until first hold response is not recieved
         *
         * @name fcs.call.IncomingCall#setButtonDisabler
         * @function
         * @since 3.0.0
         * @param {Boolean} disable
         *
         * @example
         *
         * When an incoming call is received, {@link fcs.call.event:onReceived} handler will be invoked.
         *
         * var incomingCall = {};
         * fcs.call.onReceived = function(call) {
         *    incomingCall = call;
         * };
         *
         * incomingCall.setButtonDisabler(true);
         */
        this.setButtonDisabler = function(disable) {
            buttonDisabler = disable;
            if(buttonDisabler) {
                btnTimeout = setTimeout( function() {
                    buttonDisabler = false;
                },
                4000 );
            }
        };

        /**
         * Clears the timer set with fcs.call.IncomingCall#setButtonDisabler.
         * You may want to disable your buttons while waiting for a response.
         * Ex: this will prevent clicking multiple times for hold button until first hold response is not recieved
         *
         * @name fcs.call.IncomingCall#clearBtnTimeout
         * @function
         * @since 3.0.0
         *
         * @example
         *
         * When an incoming call is received, {@link fcs.call.event:onReceived} handler will be invoked.
         *
         * var incomingCall = {};
         * fcs.call.onReceived = function(call) {
         *    incomingCall = call;
         * };
         *
         * incomingCall.clearBtnTimeout();
         */
        this.clearBtnTimeout = function() {
            clearTimeout(btnTimeout);
        };


        /**
        * Long call audit
        * Creates a timer after call is established.
        * This timer sends a "PUT" request to server.
        * This will continue until one request fails.
        * Handled by framework. You dont need to call this function
        *
        * @name fcs.call.IncomingCall#setAuditTimer
        * @function
        * @since 3.0.0
        *
        * @example
        *
        * When an incoming call is received, {@link fcs.call.event:onReceived} handler will be invoked.
        * incomingCall.setAuditTimer(audit);
        */
        this.setAuditTimer = function (audit) {
            auditTimer = setInterval(function() {
                audit();
            },
            fcsConfig.callAuditTimer ? fcsConfig.callAuditTimer:30000);
        };


        /**
        * Clears the long call audit prior to clearing all call resources.
        * Handled by framework. you dont need to call this function
        *
        * @name fcs.call.IncomingCall#clearAuditTimer
        * @function
        * @since 3.0.0
        *
        * @example
        *
        * When an incoming call is received, {@link fcs.call.event:onReceived} handler will be invoked.
        */
        this.clearAuditTimer = function() {
            clearInterval(auditTimer);
        };

        this.isCallMuted = function(id) {
            return callManager.isCallMuted(id);
        };

        /**
         * Returns video negotation availability
         * @name fcs.call.IncomingCall#isVideoNegotationAvailable
         * @function
         * @since 3.0.1
         * @example 
         * When an incoming call is received, {@link fcs.call.event:onReceived} handler will be invoked.
         *
         * var incomingCall = {};
         * fcs.call.onReceived = function(call) {
         *    incomingCall = call;
         * };
         *
         * incomingCall.isVideoNegotationAvailable();
         */
        this.isVideoNegotationAvailable = function(id) {
            return callManager.isVideoNegotationAvailable(id);
        };
    };

    this.IncomingCall.prototype = new this.Call();

    /**
    * @name OutgoingCall
    * @class
    * @memberOf fcs.call
    * @augments fcs.call.Call
    * @param {String} callid Unique identifier for the call
    * @version 3.0.4
    * @since 3.0.0
    */
    this.OutgoingCall = function(callid){
        var id = callid, self = this, sendVideo = true, receiveVideo = true, receivingVideo = false, isJoin = false, onJoin, buttonDisabler = false, btnTimeout,
        auditTimer, isHold = false, holdState = null;

        this.notificationQueue = new utils.Queue();

        /**
         * Sets the handler for listening local video stream ready event.
         *
         * @name fcs.call.OutgoingCall#onLocalStreamAdded
         * @function
         * @since 3.0.0.1
         *
         **/
        this.onLocalStreamAdded = null;

        /**
         * Sets the handler for listening remote video stream ready event.
         *
         * @name fcs.call.OutgoingCall#onStreamAdded
         * 
         * @function
         * @since 2.0.0
         * @param {?String} streamUrl remote video streamUrl
         * 
         **/
        this.onStreamAdded = null;

        /**
         * Are we able to send video.
         * Ex: Client may try to send video but video cam can be unplugged. Returns false in that case
         *
         * @name fcs.call.OutgoingCall#canSendVideo
         * @function
         * @since 3.0.0
         * @returns {Boolean}
         *
         * @example
         *
         * A previously created {@link fcs.call.OutgoingCall} is required. {@see {@link fcs.call.startCall}} for more details.
         *
         * var outgoingCall = {};
         * fcs.call.startCall(..., ..., ..., onSuccess(outgoingCall), ..., ...);
         * outgoingCall.canSend();
         */
        this.canSendVideo = function(){
            return sendVideo;
        };
               
        /**
         * Are we able to send video. Checks the incoming SDP
         *
         * @name fcs.call.OutgoingCall#canReceiveVideo
         * @function
         * @since 3.0.0
         * @returns {Boolean}
         *
         * @example
         *
         * A previously created {@link fcs.call.OutgoingCall} is required. {@see {@link fcs.call.startCall}} for more details.
         *
         * var outgoingCall = {};
         * fcs.call.startCall(..., ..., ..., onSuccess(outgoingCall), ..., ...);
         * outgoingCall.canReceiveVideo();
         */
        this.canReceiveVideo = function(){
            return receiveVideo;
        };

        /**
         * Are we able to receive video. Checks the incoming SDP
         *
         * @name fcs.call.OutgoingCall#canReceivingVideo
         * @function
         * @since 3.0.0
         * @returns {Boolean}
         *
         * @example
         *
         * A previously created {@link fcs.call.OutgoingCall} is required. {@see {@link fcs.call.startCall}} for more details.
         *
         * var outgoingCall = {};
         * fcs.call.startCall(..., ..., ..., onSuccess(outgoingCall), ..., ...);
         * outgoingCall.canReceivingVideo();
         */
        this.canReceivingVideo = function(){
            return receivingVideo;
        };

        /**
         * sets the outgoing video condition.
         *
         *
         * @name fcs.call.OutgoingCall#setSendVideo
         * @function
         * @since 3.0.0
         * @param {Boolean} videoSendStatus video send status
         *
         * @example
         *
         * A previously created {@link fcs.call.OutgoingCall} is required. {@see {@link fcs.call.startCall}} for more details.
         *
         * var outgoingCall = {};
         * fcs.call.startCall(..., ..., ..., onSuccess(outgoingCall), ..., ...);
         * outgoingCall.setSendVideo(true);
         */
        this.setSendVideo = function(videoSendStatus){
            sendVideo = videoDeviceStatus && videoSendStatus;
        };

        /**
         * sets the outgoing video condition
         *
         * @name fcs.call.OutgoingCall#setReceiveVideo
         * @function
         * @since 3.0.0
         * @param {Boolean} videoReceiveStatus video receive status
         *
         * @example
         *
         * A previously created {@link fcs.call.OutgoingCall} is required. {@see {@link fcs.call.startCall}} for more details.
         *
         * var outgoingCall = {};
         * fcs.call.startCall(..., ..., ..., onSuccess(outgoingCall), onFail(error), ...);
         * outgoingCall.setReceiveVideo(true);
         */
        this.setReceiveVideo = function(videoReceiveStatus){
            receiveVideo = videoReceiveStatus;
        };

        /**
         * sets the incoming video condition
         *
         * @name fcs.call.OutgoingCall#setReceivingVideo
         * @function
         * @since 3.0.0
         * @param {Boolean} isReceiving video receive status
         *
         * @example
         *
         * A previously created {@link fcs.call.OutgoingCall} is required. {@see {@link fcs.call.startCall}} for more details.
         *
         * var outgoingCall = {};
         * fcs.call.startCall(..., ..., ..., onSuccess(outgoingCall), ..., ...);
         * outgoingCall.isReceiving(true);
         */
        this.setReceivingVideo = function(isReceiving){
            receivingVideo = isReceiving;
        };

        /**
         * @deprecated Do not use this function, it will be removed on 3.0.5
         *
         * @name fcs.call.OutgoingCall#setHold
         * @function
         * @since 3.0.0
         */
        this.setHold = function(hold) {
            isHold = hold;
        };

        /**
         * @deprecated Do not use this function, use call.getHoldState()
         *
         * @name fcs.call.OutgoingCall#getHold
         * @function
         * @since 3.0.0
         */
        this.getHold = function() {
            return isHold;
        };

        /**
         * @deprecated Do not use this function,  it will be removed on 3.0.5
         *
         * @name fcs.call.OutgoingCall#setHoldState
         * @function
         * @since 3.0.0
         */
        this.setHoldState = function(s) {
            holdState = s;
        }; 
        
         /**
         * Returns hold state of call.
         *
         * @name fcs.call.OutgoingCall#getHoldState
         * @function
         * @since 3.0.4
         * @returns {@link fcs.HoldStates} or undefined if call has not been put
         * on hold.
         *
         * @example
         *
         * When an outgoingCall call is received, {@link fcs.call.event:onReceived} handler will be invoked.
         *
         * var outgoingCall = {};
         * fcs.call.startCall(..., ..., ..., onSuccess(outgoingCall), ..., ...);
         *
         * outgoingCall.getHoldState();
         */
        this.getHoldState = function() {
            return callManager.getHoldStateOfCall(id);
        };          

        /**
         * Gets call id.
         *
         * @name fcs.call.OutgoingCall#getId
         * @function
         * @since 3.0.0
         * @returns {id} Unique identifier for the call
         *
         * @example
         *
         * A previously created {@link fcs.call.OutgoingCall} is required. {@see {@link fcs.call.startCall}} for more details.
         *
         * var outgoingCall = {};
         * fcs.call.startCall(..., ..., ..., onSuccess(outgoingCall), ..., ...);
         * outgoingCall.getId();
         */
        this.getId = function(){
            return id;
        };

        /**
         * Force the plugin to send a IntraFrame
         *
         * @name fcs.call.OutgoingCall#sendIntraFrame
         * @function
         * @since 3.0.0
         *
         * @example
         *
         * A previously created {@link fcs.call.OutgoingCall} is required. {@see {@link fcs.call.startCall}} for more details.
         *
         * var outgoingCall = {};
         * fcs.call.startCall(..., ..., ..., onSuccess(outgoingCall), ..., ...);
         * outgoingCall.sendIntraFrame();
         */
        this.sendIntraFrame = function(){
            if (sendVideo) {
                callManager.sendIntraFrame(id);
            }
        };

        /**
         * Force the plugin to send a BlackFrame
         *
         * @name fcs.call.OutgoingCall#sendBlackFrame
         * @function
         * @since 3.0.0
         *
         * @example
         *
         * A previously created {@link fcs.call.OutgoingCall} is required. {@see {@link fcs.call.startCall}} for more details.
         *
         * var outgoingCall = {};
         * fcs.call.startCall(..., ..., ..., onSuccess(outgoingCall), ..., ...);
         * outgoingCall.sendBlackFrame();
         */
        this.sendBlackFrame = function(){
            callManager.sendBlackFrame(id);
        };
        
        /**
         * Force the plugin to refresh video renderer
         * with this call's remote video stream
         *
         * @name fcs.call.OutgoingCall#refreshVideoRenderer
         * @function
         * @since 3.0.0
         *
         * @example
         *
         * A previously created {@link fcs.call.OutgoingCall} is required. {@see {@link fcs.call.startCall}} for more details.
         *
         * var outgoingCall = {};
         * fcs.call.startCall(..., ..., ..., onSuccess(outgoingCall), ..., ...);
         * outgoingCall.refreshVideoRenderer();
         */
        this.refreshVideoRenderer = function(){
                callManager.refreshVideoRenderer(id);
        };

        /**
         * Puts the speaker into mute.
         *
         * @name fcs.call.OutgoingCall#mute
         * @function
         * @since 3.0.0
         *
         * @example
         *
         * A previously created {@link fcs.call.OutgoingCall} is required. {@see {@link fcs.call.startCall}} for more details.
         *
         * var outgoingCall = {};
         * fcs.call.startCall(..., ..., ..., onSuccess(outgoingCall), ..., ...);
         * outgoingCall.mute();
         */
        this.mute = function(){
            callManager.mute(id, true);
        };

        /**
         * Puts the speaker into unmute.
         *
         * @name fcs.call.OutgoingCall#unmute
         * @function
         * @since 3.0.0
         *
         * @example
         *
         * A previously created {@link fcs.call.OutgoingCall} is required. {@see {@link fcs.call.startCall}} for more details.
         *
         * var outgoingCall = {};
         * fcs.call.startCall(..., ..., ..., onSuccess(outgoingCall), ..., ...);
         * outgoingCall.unmute();
         */
        this.unmute = function(){
            callManager.mute(id, false);
        };

        /**
         * End the call
         *
         * @name fcs.call.OutgoingCall#end
         * @param {function} onSuccess The onSuccess() callback function to be called
         * @function
         * @since 3.0.0
         *
         * @example
         *
         * A previously created {@link fcs.call.OutgoingCall} is required. {@see {@link fcs.call.startCall}} for more details.
         *
         * var outgoingCall = {};
         * fcs.call.startCall(..., ..., ..., onSuccess(outgoingCall), ..., ...);
         *
         * var endCallOnSuccess = function(){
         *    //do something here
         * };
         *
         * outgoingCall.end(endCallOnSuccess);
         */
        this.end = function(onSuccess){
            callManager.end(id, onSuccess);
        };

        /**
          * Holds the call.
          * @name fcs.call.OutgoingCall#hold
          * @function
          * @since 3.0.0
          * @param {function} onSuccess The onSuccess() callback function to be called
          * @param {function} onFailure The onFailure({@link fcs.Errors}) callback function to be called
          *
          * @example
          *
          * A previously created {@link fcs.call.OutgoingCall} is required. {@see {@link fcs.call.startCall}} for more details.
          *
          * var outgoingCall = {};
          * fcs.call.startCall(..., ..., ..., onSuccess(outgoingCall), ..., ...);
          *
          * var holdCallOnSuccess = function(){
          *    //do something here
          * };
          * var holdCallOnFailure = function(err){
          *    //do something here
          * };
          *
          * outgoingCall.hold(holdCallOnSuccess, holdCallOnFailure);
          */
        this.hold = function(onSuccess, onFailure){
            callManager.hold(callid, onSuccess, onFailure);
        };

        /**
         * Resume the call.
         * @name fcs.call.OutgoingCall#unhold
         * @function
         * @since 3.0.0
         * @param {function} onSuccess The onSuccess() callback function to be called
         * @param {function} onFailure The onFailure({@link fcs.Errors}) callback function to be called
         *
         * @example
         *
         * A previously created {@link fcs.call.OutgoingCall} is required. {@see {@link fcs.call.startCall}} for more details.
         *
         * var outgoingCall = {};
         * fcs.call.startCall(..., ..., ..., onSuccess(outgoingCall), ..., ...);
         *
         * var unholdCallOnSuccess = function(){
         *    //do something here
         * };
         * var unholdCallOnFailure = function(err){
         *    //do something here
         * };
         *
         * outgoingCall.unhold(unholdCallOnSuccess, unholdCallOnFailure);
         */
        this.unhold = function(onSuccess,onFailure){
            callManager.unhold(id, onSuccess,onFailure);
        };

        this.directTransfer = function(address,onSuccess,onFailure){
            callManager.directTransfer(id, address, onSuccess,onFailure);
        };

        /**
         * Stop the video for this call after the call is established
         *
         * @name fcs.call.OutgoingCall#videoStop
         * @function
         * @since 3.0.0
         * @param {function} [onSuccess] The onSuccess() to be called when the video is stopped<br />
         * function()
         * @param {function} [onFailure] The onFailure() to be called when the video could not be stopped<br />
         * function()
         *
         * @example
         *
         * A previously created {@link fcs.call.OutgoingCall} is required. {@see {@link fcs.call.startCall}} for more details.
         *
         * var outgoingCall = {};
         * fcs.call.startCall(..., ..., ..., onSuccess(outgoingCall), ..., ...);
         *
         * var videoStopOnSuccess = function(){
         *    //do something here
         * };
         * var videoStopOnFailure = function(){
         *    //do something here
         * };
         *
         * outgoingCall.videoStop(videoStopOnSuccess, videoStopOnFailure);
         */
        this.videoStop = function(onSuccess, onFailure){
            callManager.videoStopStart(callid, onSuccess, onFailure, false);
        };

        /**
         * Start the video for this call after the call is established
         *
         * @name fcs.call.OutgoingCall#videoStart
         * @function
         * @since 3.0.0
         * @param {function} [onSuccess] The onSuccess() to be called when the video is started
         * @param {function} [onFailure] The onFailure() to be called when the video could not be started
         * @param {string} [videoQuality] Sets the quality of video, this parameter will be passed to getUserMedia()
         *                  if the video source is allowed before, this parameter will not be used
         *
         * @example
         *
         * A previously created {@link fcs.call.OutgoingCall} is required. {@see {@link fcs.call.startCall}} for more details.
         *
         * var outgoingCall = {};
         * fcs.call.startCall(..., ..., ..., onSuccess(outgoingCall), ..., ...);
         *
         * var videoStartOnSuccess = function(){
         *    //do something here
         * };
         * var videoStartOnFailure = function(){
         *    //do something here
         * };
         *
         * outgoingCall.videoStart(videoStopOnSuccess, videoStopOnFailure);
         */
        this.videoStart = function(onSuccess, onFailure, videoQuality){
            callManager.videoStopStart(callid, onSuccess, onFailure, true, videoQuality);
        };

        /**
         * Join 2 calls
         * You need two different calls to establish this functionality.
         * In order to join two calls. both calls must be put in to hold state first.
         * If not call servers will not your request.
         *
         * @name fcs.call.OutgoingCall#join
         * @function
         * @since 3.0.0
         * @param {fcs.call.Call} anotherCall Call that we want the current call to be joined to.
         * @param {function} onSuccess The onSuccess({@link fcs.call.OutgoingCall}) to be called when the call have been joined provide the joined call as parameter
         * @param {function} [onFailure] The onFailure() to be called when media could not be join
         *
         * @example
         *
         * A previously created {@link fcs.call.OutgoingCall} is required. {@see {@link fcs.call.startCall}} for more details.
         *
         * var outgoingCall = {};
         * fcs.call.startCall(..., ..., ..., onSuccess(outgoingCall), ..., ...);
         *
         * And another {@link fcs.call.OutgoingCall} or {@link fcs.call.IncomingCall} is requeired which is going to be joined.
         * var anotherCall; // assume this is previosuly created.
         *
         * var joinOnSuccess = function(joinedCall){
         *    joinedCall // newly created.
         *    //do something here
         * };
         * var joinOnFailure = function(){
         *    //do something here
         * };
         *
         * outgoingCall.join(anotherCall, joinOnSuccess, joinOnFailure);
         *
         * When join() is successfuly compeled, joinOnSuccess({@link fcs.call.OutgoingCall}) will be invoked.
         */
        this.join = function(anotherCall, onSuccess, onFailure){
            callManager.join(id, anotherCall.getId(), onSuccess, onFailure);
        };

        /**
         * Send Dual-tone multi-frequency signaling.
         *
         * @name fcs.call.OutgoingCall#sendDTMF
         * @function
         * @since 3.0.0
         * @param {String} tone Tone to be send as dtmf.
         *
         * @example
         *
         * A previously created {@link fcs.call.OutgoingCall} is required. {@see {@link fcs.call.startCall}} for more details.
         *
         * var outgoingCall = {};
         * fcs.call.startCall(..., ..., ..., onSuccess(outgoingCall), ..., ...);
         *
         * var videoStartOnSuccess = function(){
         *    //do something here
         * };
         * var videoStartOnFailure = function(){
         *    //do something here
         * };
         *
         * outgoingCall.sendDTMF("0");
         */
        this.sendDTMF = function(tone){
            callManager.sendDTMF(id, tone);
        };

        /**
         * Returns the call is a join call or not
         * Do not use this function if you really dont need it.
         * This will be handled by the framework
         *
         * @name fcs.call.OutgoingCall#getJoin
         * @function
         * @since 3.0.0
         * @returns {Boolean} isJoin
         *
         * @example
         *
         * A previously created {@link fcs.call.OutgoingCall} is required. {@see {@link fcs.call.startCall}} for more details.
         *
         * var outgoingCall = {};
         * fcs.call.startCall(..., ..., ..., onSuccess(outgoingCall), ..., ...);
         *
         * var videoStartOnSuccess = function(){
         *    //do something here
         * };
         * var videoStartOnFailure = function(){
         *    //do something here
         * };
         *
         * outgoingCall.getJoin();
         *
         * This method will return true if the outgoingCall is a previously joined call {@see {@link fcs.call.outgoingCall#join}}.
         */
        this.getJoin = function() {
            return isJoin;
        };

        /**
         * Marks the call as a join call or not
         * Do not use this function if you really dont need it.
         * This will be handled by the framework
         *
         * @name fcs.call.OutgoingCall#setJoin
         * @function
         * @since 3.0.0
         * @param {String} join
         *
         * @example
         *
         * When an outgoing call is received, {@link fcs.call.event:onReceived} handler will be invoked.
         *
         * var outgoingCall = {};
         * fcs.call.onReceived = function(call) {
         *    outgoingCall = call;
         * };
         *
         * outgoingCall.setJoin(true);
         */
        this.setJoin = function (join) {
            isJoin = join;
        };

        /**
         * Returns the button is a disabled or not
         * You may want to disable your buttons while waiting for a response.
         * Ex: this will prevent clicking multiple times for hold button until first hold response is not recieved
         *
         * @name fcs.call.OutgoingCall#getButtonDisabler
         * @function
         * @since 3.0.0
         * @returns {Boolean} buttonDisabler
         *
         * @example
         *
         * When an outgoing call is received, {@link fcs.call.event:onReceived} handler will be invoked.
         *
         * var outgoingCall = {};
         * fcs.call.onReceived = function(call) {
         *    outgoingCall = call;
         * };
         *
         * outgoingCall.getButtonDisabler();
         */
        this.getButtonDisabler = function() {
            return buttonDisabler;
        };

        /**
         * Clears the timer set with fcs.call.IncomingCall#setButtonDisabler.
         * You may want to disable your buttons while waiting for a response.
         * Ex: this will prevent clicking multiple times for hold button until first hold response is not recieved
         *
         * @name fcs.call.OutgoingCall#clearBtnTimeout
         * @function
         * @since 3.0.0
         *
         * @example
         *
         * When an outgoing call is received, {@link fcs.call.event:onReceived} handler will be invoked.
         *
         * var outgoingCall = {};
         * fcs.call.onReceived = function(call) {
         *    outgoingCall = call;
         * };
         *
         * outgoingCall.clearBtnTimeout();
         */
        this.setButtonDisabler = function(disable) {
            buttonDisabler = disable;
            if(buttonDisabler) {
                btnTimeout = setTimeout( function() {
                    buttonDisabler = false;
                },
                4000 );
            }
        };

        /**
         * Clears the timer set with fcs.call.IncomingCall#setButtonDisabler.
         * You may want to disable your buttons while waiting for a response.
         * Ex: this will prevent clicking multiple times for hold button until first hold response is not recieved
         *
         * @name fcs.call.OutgoingCall#clearBtnTimeout
         * @function
         * @since 3.0.0
         *
         * @example
         *
         * When an outgoing call is received, {@link fcs.call.event:onReceived} handler will be invoked.
         *
         * var outgoingCall = {};
         * fcs.call.onReceived = function(call) {
         *    outgoingCall = call;
         * };
         *
         * outgoingcall.clearBtnTimeout();
         */
        this.clearBtnTimeout = function() {
            clearTimeout(btnTimeout);
        };

        /**
        * Long call audit
        * Creates a timer after call is established.
        * This timer sends a "PUT" request to server.
        * This will continue until one request fails.
        * Handled by framework. You dont need to call this function
        *
        * @name fcs.call.OutgoingCall#setAuditTimer
        * @function
        * @since 3.0.0
        *
        * @example
        *
        * When an incoming call is received, {@link fcs.call.event:onReceived} handler will be invoked.
        * incomingCall.setAuditTimer(audit);
        */
        this.setAuditTimer = function (audit) {
            auditTimer = setInterval(function() {
                audit();
            },
            fcsConfig.callAuditTimer ? fcsConfig.callAuditTimer:30000);
        };


        /**
        * Clears the long call audit prior to clearing all call resources.
        * Handled by framework. you dont need to call this function
        *
        * @name fcs.call.OutgoingCall#clearAuditTimer
        * @function
        * @since 3.0.0
        *
        * @example
        *
        * When an outgoing call is received, {@link fcs.call.event:onReceived} handler will be invoked.
        */
        this.clearAuditTimer = function() {
            clearInterval(auditTimer);
        };

        this.isCallMuted = function(id) {
            return callManager.isCallMuted(id);
        };

        /**
         * Returns video negotation availability
         * @name fcs.call.OutgoingCall#isVideoNegotationAvailable
         * @function
         * @since 3.0.1
         * @example 
         * A previously created {@link fcs.call.OutgoingCall} is required. {@see {@link fcs.call.startCall}} for more details.
         *
         * var outgoingCall = {};
         * fcs.call.startCall(..., ..., ..., onSuccess(outgoingCall), ..., ...);
         * outgoingCall.isVideoNegotationAvailable(id);
         */
        this.isVideoNegotationAvailable = function(id) {
            return callManager.isVideoNegotationAvailable(id);
        };
    };

    this.OutgoingCall.prototype = new this.Call();
    if (__testonly__) { this.setNotificationState = function(_notificationState){ this.notificationState=_notificationState;}; }

};

CallTrigger.prototype = new Call();
fcs.call = new CallTrigger();
if (__testonly__) { __testonly__.Call = Call; }
if (__testonly__) { __testonly__.OutgoingCall = fcs.call.OutgoingCall;} 

/**
* Handles receiving of custom messages (Custom).
* 
* @name custom
* @namespace
* @memberOf fcs
* 
* @version 3.0.4
* @since 3.0.0
*/
var Custom = function() {
      
   /**
    * Called on receipt of an instant message
    *
    * @name fcs.custom.onReceived
    * @event
    * @param {fcs.custom.Message} custom Message received
    * @since 3.0.0
    * @example 
    * var messageReceived = function(msg){
    *    // do something here
    * };
    * 
    * fcs.custom.onReceived = messageReceived;
    */
      
};

var CustomImpl = function() {
    this.onReceived = null;
};

CustomImpl.prototype = new Custom();
fcs.custom = new CustomImpl();

NotificationCallBacks.custom = function(data) {
    utils.callFunctionIfExist(fcs.custom.onReceived, data);
};
var NotificationImpl = function() {

    var SUBSCRIPTION_URL = "/subscription",
        CONNECTION_URL = "/rest/version/latest/isAlive",
    SUBSCRITION_KEYS_FOR_ASSIGNED_SERVICES = {
        "CallControl": "call",
        "call" : "call",
        "IM": "IM",
        "Presence": "Presence",
        "custom": "custom",
        "callMe": "callMe",
        "Conversation": "conversation",
        "conversation": "conversation"
    },
    DEFAULT_SERVICES = [SUBSCRITION_KEYS_FOR_ASSIGNED_SERVICES.IM,
                        SUBSCRITION_KEYS_FOR_ASSIGNED_SERVICES.Presence,
                        SUBSCRITION_KEYS_FOR_ASSIGNED_SERVICES.CallControl],
    DEFAULT_ANONYMOUS_SERVICES = [SUBSCRITION_KEYS_FOR_ASSIGNED_SERVICES.callMe],
    DEFAULT_SUBSCRIPTION_EXPIRY_VALUE = 3600;

    function getNotificationType() {
        // if SNMP is set return specific data to be sent to the server
        if(fcsConfig.notificationType === fcs.notification.NotificationTypes.WEBSOCKET && window.WebSocket){
            return {
                notificationType: "WebSocket",
                clientIp: fcsConfig.clientIp
            };
        }
        else {
            fcsConfig.notificationType = "longpolling";
            return {
                notificationType: "LongPolling",
                pollingTimer: fcsConfig.polling
            };
        }
    }

    function composeServicesToSubscribeFromAssignedServices(assignedServices) {
        var i, services = [];
        for (i in SUBSCRITION_KEYS_FOR_ASSIGNED_SERVICES) {
            if (SUBSCRITION_KEYS_FOR_ASSIGNED_SERVICES.hasOwnProperty(i)) {
                if (assignedServices.indexOf(i) !== -1) {
                    services.push(SUBSCRITION_KEYS_FOR_ASSIGNED_SERVICES[i]);
                }
            }
        }

        return services;
    }

    function composeSubscribeRequestData(forceLogout, isSubscribe) {
        var notificationTypeData = getNotificationType(),
        i,
        subscribeRequest;
        
        if (fcs.notification.isAnonymous()) {
            if (!fcsConfig.anonymousServices) {
                fcsConfig.anonymousServices = DEFAULT_ANONYMOUS_SERVICES;
            }
        }
        else {
            if (!fcsConfig.services) {
                fcsConfig.services = DEFAULT_SERVICES;
            }
        }
        
        subscribeRequest = {
                "expires": Math.floor(fcsConfig.expires),
                "service": fcs.notification.isAnonymous() ? composeServicesToSubscribeFromAssignedServices(fcsConfig.anonymousServices) : composeServicesToSubscribeFromAssignedServices(fcsConfig.services),
                "localization": "English_US"
        };
        
        if (isSubscribe && fcsConfig.serverProvidedTurnCredentials) {
            subscribeRequest.useTurn = (fcsConfig.serverProvidedTurnCredentials === true ? true : false);
        }
        
        if (forceLogout === true) {
            subscribeRequest.forceLogOut = "true";
        }
        
        for (i in notificationTypeData) {
            if(notificationTypeData.hasOwnProperty(i)) {
                subscribeRequest[i] = notificationTypeData[i];
            }
        }

        return subscribeRequest;
    }

    this.extendSubscription = function(subscriptionURL, onSuccess, onFailure) {
        if (fcsConfig.expires === 0) {
            fcsConfig.expires = DEFAULT_SUBSCRIPTION_EXPIRY_VALUE;
        }

        server.sendPutRequest(
            {
                url: getUrl() + subscriptionURL,
                data: {"subscribeRequest": composeSubscribeRequestData()}
            },
            function(data) {
                var response = data.subscribeResponse, params = response.subscriptionParams;
                onSuccess(params.notificationChannel, params.assignedService, params.service);
            },
            onFailure
            );
    };

    this.retrieveNotification = function(notificationChannelURL, onSuccess, onFailure) {
        return server.sendGetRequest(
            {
                url: getUrl() + notificationChannelURL
            },
            function(data){
                var type = null, notificationMessage;
                if(data !== null){
                    notificationMessage = data.notificationMessage;
                    if(notificationMessage){
                        type = notificationMessage.eventType;
                    }
                }
                onSuccess(type, notificationMessage);
            }
            ,
            onFailure
            );
    };

    this.subscribe = function(onSuccess, onFailure ,forceLogout, token) {
        var dummy;
        fcsConfig.expires = DEFAULT_SUBSCRIPTION_EXPIRY_VALUE;
        server.sendPostRequest(
        {
            url: getWAMUrl(1, SUBSCRIPTION_URL),
            data: {"subscribeRequest": composeSubscribeRequestData(forceLogout, true)}
        },
        function(data) {
            var response = data.subscribeResponse, params = response.subscriptionParams, turnParams;
            if (params.turnActive === true) {
                if (params.turnCredentials && params.turnCredentials.username && params.turnCredentials.password) {
                    turnParams = {username : params.turnCredentials.username, credential : params.turnCredentials.password};
                    globalBroadcaster.publish(CONSTANTS.EVENT.TURN_CREDENTIALS_ESTABLISHED, turnParams);
                }
            }
            onSuccess(response.subscription,
                params.notificationChannel,
                params.expires,
                params.pollingTimer,
                params.assignedService,
                params.service,
                params.sessionId);
        },
        onFailure, dummy, dummy, dummy, dummy, token
        );
    };

    this.deleteSubscription = function(subscriptionURL, onSuccess, onFailure, synchronous) {
        server.sendDeleteRequest({
            url: getUrl() + subscriptionURL
        },
        onSuccess,
        onFailure
        );
    };
    
    if (__testonly__) { this.composeSubscribeRequestData = composeSubscribeRequestData;}
};

NotificationImpl.prototype = new Notification();

NotificationCallBacks.gone = function(data) {
    notificationManager.onGoneNotificationReceived(data);
};
var NotificationManager = function() {
    var logger = logManager.getLogger("notificationManager"),
            SUBSCRIBEURL = 'SubscriptionUrl',
            NOTIFYURL = 'NotificationUrl',
            NOTIFYID = 'NotificationId',
            SUBSCRIBEEXPIRY = 'SubscriptionExpiry',
            SUBSCRIBEEXTENDINTERVAL = 'SubscriptionExtendInterval',
            USERNAME = 'USERNAME',
            SESSION = 'SESSION',
            NOTIFICATION_EVENTS_QUEUE_MAX_LENGTH = 50,
            NOTIFICATION_EVENTS_QUEUE_CLEARING_AUDIT_INTERVAL = 600,
            CHECK_CONNECTIVITY_INTERVAL = 10000,
            RESTART_SUBSCRIPTION_TIMEOUT = CHECK_CONNECTIVITY_INTERVAL + 1000,
            notificationRetry = 4000,
            WEBSOCKET_CONSTANTS = CONSTANTS.WEBSOCKET,
            notifier = null,
            webSocket = null,
            self = this,
            isAnonymous = false,
            service = new NotificationImpl(),
            // function to be invoked on failure (must be set by the user)
            onNotificationFailure = null,
            onNotificationSuccess = null,
            isNotificationFailureDetected = false,
            extendNotificationSubscription, notificationSuccess, notificationFailure,
            extendNotificationSubscriptionTimer = null,
            webSocketConnect,
            onConnectionLost,
            onConnectionEstablished,
            triggeredFetch = false,
            onSubscriptionSuccess = null,
            onSubscriptionFailure = null,
            notificationEventsQueue = [],
            notificationEventsQueueClearingAuditTimer,
            notificationCachePrefix = "",
            startNotificationTimerAfterConnectionReEstablished,
            restartSubscriptionTimer,
            notificationFailureRestartSubscriptionTimeout,
            lastLongpollingRequest = null,
            originalNotificationType = null,
            token = null,
            session = null;
    
    function onTokenAuth(data){
        token = data.token;
    }
    
    function cancelLastLongpollingRequest() {
        if (lastLongpollingRequest) {
            logger.trace("aborting last long polling request.");
            lastLongpollingRequest.abort();
            lastLongpollingRequest = null;
        }
    }
    
    function onTokenOrSessionError(){
        notifier = null;
        triggeredFetch = false;

        cache.removeItem(notificationCachePrefix + NOTIFYURL);
        cache.removeItem(notificationCachePrefix + NOTIFYID);
        cache.removeItem(notificationCachePrefix + SUBSCRIBEURL);
        cache.removeItem(notificationCachePrefix + SUBSCRIBEEXPIRY);
        cache.removeItem(notificationCachePrefix + SUBSCRIBEEXTENDINTERVAL);
        cache.removeItem(notificationCachePrefix + SESSION);
        this.onGoneNotificationReceived();
        cancelLastLongpollingRequest();
    }
   
    function publishDeviceSubscriptionStartedMessage(message) {
        globalBroadcaster.publish(CONSTANTS.EVENT.DEVICE_SUBSCRIPTION_STARTED, message);
    }

    function publishDeviceSubscriptionEndedMessage() {
        globalBroadcaster.publish(CONSTANTS.EVENT.DEVICE_SUBSCRIPTION_ENDED);
    }

    function notificationEventsQueueClearingAudit() {
        if (notificationEventsQueue.length > 0) {
            var eventIdtoRemove = notificationEventsQueue.shift();
            logger.info("notification events queue clearing audit timer has expired, removing first eventId: " + eventIdtoRemove);
        }
    }

    notificationEventsQueueClearingAuditTimer = setInterval(notificationEventsQueueClearingAudit, NOTIFICATION_EVENTS_QUEUE_CLEARING_AUDIT_INTERVAL * 1000);

    this.NotificationTypes = {
        LONGPOLLING: "longpolling",
        SNMP: "snmp",
        WEBSOCKET: "websocket"
    };

    this.isAnonymous = function() {
        return isAnonymous;
    };

    function getNotificationType() {

        var type;
        for (type in self.NotificationTypes) {
            if (self.NotificationTypes.hasOwnProperty(type)) {
                if (fcsConfig.notificationType === self.NotificationTypes[type]) {
                    return fcsConfig.notificationType;
                }
            }
        }

        return self.NotificationTypes.WEBSOCKET;
    }

    function isNotificationTypeLongPolling() {
        // If user set long polling return true
        return (getNotificationType() === self.NotificationTypes.LONGPOLLING);
    }

    function isNotificationTypeWebSocket() {
        // If user set websocket return true
        return window.WebSocket && (getNotificationType() === self.NotificationTypes.WEBSOCKET);
    }

    function stopRestartSubscriptionTimer() {
        clearTimeout(restartSubscriptionTimer);
        restartSubscriptionTimer = null;
    }

    function restartSubscription(toLP) {
        stopRestartSubscriptionTimer();
        restartSubscriptionTimer = setTimeout(function() {
            if (!fcs.isConnected()) {
                logger.debug("Connection is lost, no need to restart subscription...");
                return;
            }

            logger.debug("Restarting subscription...");
            if (toLP) {
                logger.debug("Switching to Long Polling notification...");
                fcsConfig.notificationType = self.NotificationTypes.LONGPOLLING;
            }

            self.start(onSubscriptionSuccess, onSubscriptionFailure, isAnonymous, undefined, undefined, true);

        }, RESTART_SUBSCRIPTION_TIMEOUT);
    }

    function isWebsocketOpened() {
        if (webSocket && webSocket.readyState === webSocket.OPEN) {
            return true;
        }
        return false;
    }

    function validateWebsocketUrl() {
        if (!isWebsocketOpened()) {
            return false;
        }

        if (!notifier) {
            return false;
        }

        if (!notifier.notificationUrl) {
            return false;
        }

        if (webSocket.url.indexOf(notifier.notificationUrl) === -1) {
            return false;
        }

        return true;
    }

    function websocketConnectionCheck() {
        if (isWebsocketOpened()) {
            webSocket.send("test");
        }
    }

    function fetchNotification() {
        if (notifier) {
            if (lastLongpollingRequest) {
                logger.info("longpolling request exists, no need to trigger new one.");
                return;
            }
            //Fetching Notification
            lastLongpollingRequest = service.retrieveNotification(notifier.notificationUrl, notificationSuccess, notificationFailure);
        }
        else {
            logger.error("notifier is undefined, cannot fetch notification");
        }
    }

    // Handles successfully fetched notification
    notificationSuccess = function(type, data) {
        var eventIdtoRemove;
        if (data && type) {
            logger.info("received notification event:" + type, data);
            if (notificationEventsQueue.indexOf(data.eventId) !== -1) {
                logger.info("previously received notification eventId: " + data.eventId + ", do not execute notification callback function.");
            }
            else {
                logger.info("newly received notification eventId: " + data.eventId);
                notificationEventsQueue.push(data.eventId);
                if (notificationEventsQueue.length === NOTIFICATION_EVENTS_QUEUE_MAX_LENGTH) {
                    eventIdtoRemove = notificationEventsQueue.shift();
                    logger.info("notification events queue is full, remove first eventId: " + eventIdtoRemove);
                }
                utils.callFunctionIfExist(NotificationCallBacks[type], data);
            }
        }

        // if 'Long polling' is used, fetch the notification
        if (isNotificationTypeLongPolling()) {
            lastLongpollingRequest = null;
            fetchNotification();
        }

        if (isNotificationFailureDetected) {
            isNotificationFailureDetected = false;
            utils.callFunctionIfExist(onNotificationSuccess);
        }

    };

    function stopNotificationFailureRestartSubscriptionTimeoutTimer() {
        clearTimeout(notificationFailureRestartSubscriptionTimeout);
        notificationFailureRestartSubscriptionTimeout = null;
    }

    // Handles fail fetched notification
    notificationFailure = function(error) {
        logger.error("received notification error:" + error);
        globalBroadcaster.publish(CONSTANTS.EVENT.NOTIFICATION_CHANNEL_LOST);
        if (!fcs.isConnected()) {
            logger.debug("Connection is lost, no need to handle notification failure...");
            return;
        }

        isNotificationFailureDetected = true;

        // if 'Long polling' is used, fetch the notification
        if (isNotificationTypeLongPolling()) {
            stopNotificationFailureRestartSubscriptionTimeoutTimer();
            notificationFailureRestartSubscriptionTimeout = setTimeout(function() {
                restartSubscription();
            }, notificationRetry);
        }

        utils.callFunctionIfExist(onNotificationFailure, error);
    };

    function websocketDisconnect() {
        if (webSocket) {
            webSocket.onmessage = null;
            webSocket.onopen = null;
            webSocket.onclose = null;
            webSocket.onerror = null;
            if (webSocket.close) {
                webSocket.close();
            }
            webSocket = null;
        }
    }

    webSocketConnect = function(onSuccess, onFailure) {
        var protocolValue = WEBSOCKET_CONSTANTS.PROTOCOL.NONSECURE;

        function callOnSuccess(status) {
            logger.trace("websocket connection created successfully: " + status);
            if (typeof onSuccess === 'function') {
                onSuccess(status);
            }
        }

        function callOnFailure(status) {
            logger.trace("websocket connection failed: " + status);
            // this is just for clearing local web socket variable.
            websocketDisconnect();
            if (typeof onFailure === 'function') {
                onFailure(status);
            }
        }

        if (isWebsocketOpened()) {
            if (validateWebsocketUrl()) {
                logger.info("WebSocket is already opened, no need to open new one.");
                callOnSuccess(WEBSOCKET_CONSTANTS.STATUS.ALREADY_OPENED);
                return;
            }

            logger.error("websocket connection with invalid url is found!");
            websocketDisconnect();
        }
        else {
            // this is just for clearing local web socket variable.
            websocketDisconnect();
        }

        try {
            if (fcsConfig.websocketProtocol) {
                if (fcsConfig.websocketProtocol === WEBSOCKET_CONSTANTS.PROTOCOL.SECURE) {
                    protocolValue = WEBSOCKET_CONSTANTS.PROTOCOL.SECURE;
                }
            }
            webSocket = new window.WebSocket(protocolValue + "://" + (fcsConfig.websocketIP ? fcsConfig.websocketIP : window.location.hostname) + ":" + (fcsConfig.websocketPort ? fcsConfig.websocketPort : WEBSOCKET_CONSTANTS.DEFAULT_PORT) + notifier.notificationUrl);
        }
        catch (exception) {
            logger.error("WebSocket create error: ", exception);
            callOnFailure(WEBSOCKET_CONSTANTS.STATUS.CREATE_ERROR);
            return;
        }

        if (webSocket !== null) {
            webSocket.onmessage = function(event) {
                var data = JSON.parse(event.data), notificationMessage, type;
                if (data) {
                    //logger.info("WebSocket notification event data:" + data);
                    notificationMessage = data.notificationMessage;
                    //logger.info("WebSocket notification event notificationMessage:" + notificationMessage);
                    if (notificationMessage) {
                        type = notificationMessage.eventType;
                        notificationSuccess(type, notificationMessage);
                    }
                }
            };
            webSocket.onopen = function(event) {
                logger.info("WebSocket opened");
                callOnSuccess(WEBSOCKET_CONSTANTS.STATUS.OPENED);
            };
            webSocket.onclose = function(event) {
                logger.info("WebSocket closed");           
                notificationFailure(WEBSOCKET_CONSTANTS.STATUS.CONNECTION_CLOSED);
                callOnFailure(WEBSOCKET_CONSTANTS.STATUS.CONNECTION_CLOSED);
            };
            webSocket.onerror = function(event) {
                logger.error("Error on Web Socket connection.");
                notificationFailure(WEBSOCKET_CONSTANTS.STATUS.CONNECTION_ERROR);
                callOnFailure(WEBSOCKET_CONSTANTS.STATUS.CONNECTION_ERROR);
            };
        }
        else {
            callOnFailure(WEBSOCKET_CONSTANTS.STATUS.NOT_FOUND);
        }
    };

     function onNotificationSubscriptionSuccess() {
        publishDeviceSubscriptionStartedMessage({"connectivity": {
                "handler": websocketConnectionCheck,
                "interval": CHECK_CONNECTIVITY_INTERVAL
            },
            "session": session,
            "notificationId": notifier ? notifier.notificationId : ""
         });
        if (onSubscriptionSuccess) {
            utils.callFunctionIfExist(onSubscriptionSuccess);
            onSubscriptionSuccess = null;
        }
    }

    function onDeviceSubscriptionFailure(err) {
        if (fcs.isConnected()) {
            utils.callFunctionIfExist(onSubscriptionFailure, err);
        }
    }

    function stopExtendNotificationSubscriptionTimer() {
        logger.info("extend notification subscription timer is stopped.");
        clearInterval(extendNotificationSubscriptionTimer);
        extendNotificationSubscriptionTimer = null;
    }
 
    // Subscribe for getting notifications
    function deviceSubscribe(forceLogout) {
        if (!fcs.isConnected()) {
            logger.debug("Connection is lost, no need to subscribe...");
            return;
        }

        logger.debug("Subscribing...");
        service.subscribe(function(subscribeUrl, notificationUrl, exp, poll, assignedService, servicesReceivingNotification, sessionId) {
            token = null;
            fcs.setServices(assignedService);
            fcsConfig.services = assignedService;
            fcsConfig.servicesReceivingNotification = servicesReceivingNotification;

            fcsConfig.polling = poll;
            fcsConfig.expires = exp;
            fcsConfig.extendInterval = exp / 2;
            notifier = {};
            notifier.subscribeUrl = subscribeUrl;
            notifier.notificationUrl = notificationUrl;
            notifier.notificationId = notificationUrl.substr(notificationUrl.lastIndexOf("/") + 1);
            stopExtendNotificationSubscriptionTimer();
            extendNotificationSubscriptionTimer = setInterval(extendNotificationSubscription, fcsConfig.extendInterval * 1000);
            cache.setItem(notificationCachePrefix + NOTIFYURL, notificationUrl);
            cache.setItem(notificationCachePrefix + NOTIFYID, notifier.notificationId);
            cache.setItem(notificationCachePrefix + SUBSCRIBEURL, subscribeUrl);
            cache.setItem(notificationCachePrefix + SUBSCRIBEEXPIRY, fcsConfig.expires);
            cache.setItem(notificationCachePrefix + SUBSCRIBEEXTENDINTERVAL, fcsConfig.extendInterval);
            cache.setItem(notificationCachePrefix + USERNAME, fcs.getUser());
            if (sessionId) {
                session = sessionId;
                cache.setItem(notificationCachePrefix + SESSION, session);
            }

            logger.debug("Subscription successfull - notifier: ", notifier);

            // if 'WebSocket' initialize else 'LongPolling' is used, fetch the notification
            if (isNotificationTypeWebSocket()) {
                webSocketConnect(function () {
                    originalNotificationType = self.NotificationTypes.WEBSOCKET;
                    cancelLastLongpollingRequest();
                    onNotificationSubscriptionSuccess();
                }, function() {
                    restartSubscription(true);
                });
            }
            else {
                originalNotificationType = self.NotificationTypes.LONGPOLLING;
                cancelLastLongpollingRequest();
                onNotificationSubscriptionSuccess();
                fetchNotification();
            }
        }, function(err) {
            logger.error("Subscription is failed - error: " + err);

            onDeviceSubscriptionFailure(err);
        },forceLogout, token);
    }

    function sendExtendSubscriptionRequest() {
        if (!fcs.isConnected()) {
            logger.debug("Connection is lost, no need to extend subscribe...");
            return;
        }

        logger.debug("Extending subscription... - notifier: ", notifier);
        service.extendSubscription(notifier.subscribeUrl, function(notificationChannel, assignedService, servicesReceivingNotification) {
            fcs.setServices(assignedService);
            fcsConfig.services = assignedService;
            fcsConfig.servicesReceivingNotification = servicesReceivingNotification;

            notifier.notificationUrl = notificationChannel;
            cache.setItem(notificationCachePrefix + NOTIFYURL, notificationChannel);

            //we tried to use precached subscription and it succeed start fetching notifications
            stopExtendNotificationSubscriptionTimer();
            extendNotificationSubscriptionTimer = setInterval(extendNotificationSubscription, fcsConfig.extendInterval * 1000);

            logger.debug("Extending subscription successful - notifier: ", notifier);

            // if 'WebSocket' initialize else 'LongPolling' is used, fetch the notification
            if (isNotificationTypeWebSocket()) {
                webSocketConnect(function() {
                    cancelLastLongpollingRequest();
                    onNotificationSubscriptionSuccess();
                }, function() {
                    restartSubscription(true);
                });
            }
            else {
                cancelLastLongpollingRequest();
                fetchNotification();
                onNotificationSubscriptionSuccess();
            }
        }, function(err) {
            logger.error("Extending subscription is failed - error: " + err);
            logger.error("Fail reusing existing subscription, re-subscribing.");
            cancelLastLongpollingRequest();
            deviceSubscribe();
        });
    }

    extendNotificationSubscription = function(onSuccess, onFailure, restarting) {
        if (!fcs.isConnected()) {
            logger.debug("Connection is lost, no need to extend subscribe...");
            return;
        }

        if (onSuccess) {
            onSubscriptionSuccess = onSuccess;
            onSubscriptionFailure = onFailure;
        }

         if (notifier) {
            if (!restarting) {
                if (originalNotificationType === self.NotificationTypes.WEBSOCKET
                        && isNotificationTypeLongPolling()) {
                    logger.trace("original notification type is websocket, try websocket connection again.");
                    notifier.notificationUrl.replace("/notification/", "/websocket/");
                    webSocketConnect(function() {
                        logger.trace("websocket connection created successfully, use websocket from now on.");
                        cache.setItem(notificationCachePrefix + NOTIFYURL, notifier.notificationUrl);
                        fcsConfig.notificationType = self.NotificationTypes.WEBSOCKET;
                        sendExtendSubscriptionRequest();
                    }, function() {
                        logger.trace("websocket connection failed, keep using long polling.");
                        notifier.notificationUrl.replace("/websocket/", "/notification/");
                        sendExtendSubscriptionRequest();
                    });
                }
                else {
                    sendExtendSubscriptionRequest();
                }
            }
            else {
                logger.trace("subscription restart is triggered...");
                sendExtendSubscriptionRequest();
            }
            
        }
        else {
            logger.debug("Cannot reuse existing subscription, re-subscribing.");
            deviceSubscribe();
        }
    };

    this.stop = function(onStopSuccess, onStopFailure, synchronous) {
        if (!fcs.isConnected()) {
            logger.debug("Connection is lost, no need to unsubscribe...");
            return;
        }

        logger.debug("Unsubscribing... - notifier: ", notifier);
        if (notifier) {
            service.deleteSubscription(notifier.subscribeUrl, function() {
                logger.debug("Unsubscription successfull");
                
                stopExtendNotificationSubscriptionTimer();
                publishDeviceSubscriptionEndedMessage();
                cancelLastLongpollingRequest();
                notifier = null;
                triggeredFetch = false;
                
                cache.removeItem(notificationCachePrefix + NOTIFYURL);
                cache.removeItem(notificationCachePrefix + NOTIFYID);
                cache.removeItem(notificationCachePrefix + SUBSCRIBEURL);
                cache.removeItem(notificationCachePrefix + SUBSCRIBEEXPIRY);
                cache.removeItem(notificationCachePrefix + SUBSCRIBEEXTENDINTERVAL);
                cache.removeItem(notificationCachePrefix + SESSION);
                if (typeof onStopSuccess === 'function') {
                    onStopSuccess();
                }
            }, function(err) {
                logger.error("Unsubscribe if failed - error:" + err);
                triggeredFetch = false;
                if (typeof onStopFailure === 'function') {
                    onStopFailure();
                }
            }, synchronous);
        }
        else {
            logger.error("notifier is unknown, cannot send unsubscribe request.");
            triggeredFetch = false;
            if (typeof onStopFailure === 'function') {
                onStopFailure();
            }
        }
    };

    function startNotification(onSuccess, onFailure, anonymous, cachePrefix ,forceLogout, restarting) {
        onSubscriptionSuccess = onSuccess;
        onSubscriptionFailure = onFailure;
        isAnonymous = anonymous;

        if (cachePrefix) {
            notificationCachePrefix = cachePrefix;
        }

        if (!fcs.isConnected()) {
            logger.debug("Connection is lost, no need to subscribe...");
            return;
        }


        logger.debug("start - notification subscription...");

        var nurl = cache.getItem(notificationCachePrefix + NOTIFYURL),
                nid = cache.getItem(notificationCachePrefix + NOTIFYID),
                surl = cache.getItem(notificationCachePrefix + SUBSCRIBEURL),
                exp = cache.getItem(notificationCachePrefix + SUBSCRIBEEXPIRY),
                extendInterval = cache.getItem(notificationCachePrefix + SUBSCRIBEEXTENDINTERVAL),
                user = cache.getItem(notificationCachePrefix + USERNAME);

        logger.debug("start - cached data - nurl: " + nurl +
                " nid: " + nid + " surl: " + surl +
                " exp: " + exp + " extendInterval: " + extendInterval +" user: " + user);

        if (nurl && nid && surl && exp && extendInterval && (fcs.getUser() === user)) {
            notifier = {};
            notifier.subscribeUrl = surl;
            notifier.notificationUrl = nurl;
            notifier.notificationId = nid;
            fcsConfig.expires = exp;
            fcsConfig.extendInterval = extendInterval;
            extendNotificationSubscription(undefined, undefined, restarting);
        }
        else {
            deviceSubscribe(forceLogout);
        }
    }

    this.start = startNotification;

    /**
     * Extending subscription and fetch the notifications
     *
     * @name fcs.notification.extend
     * @function
     */
    this.extend = startNotification;

    function stopStartNotificationTimerAfterConnectionReEstablishedTimer() {
        clearTimeout(startNotificationTimerAfterConnectionReEstablished);
        startNotificationTimerAfterConnectionReEstablished = null;
    }

    function handleConnectionEstablished() {
        var startNotificationTimeout;
        startNotificationTimeout = Math.random() * RESTART_SUBSCRIPTION_TIMEOUT;
        logger.info("starting notification after timeout: " + startNotificationTimeout);
        stopStartNotificationTimerAfterConnectionReEstablishedTimer();
        startNotificationTimerAfterConnectionReEstablished = setTimeout(function() {
            startNotification(onSubscriptionSuccess,
                    onSubscriptionFailure);
            if (fcs.isConnected()) {
                utils.callFunctionIfExist(onConnectionEstablished);
            }
        }, startNotificationTimeout);
    }

    function handleConnectionLost(err) {
        stopExtendNotificationSubscriptionTimer();
        stopStartNotificationTimerAfterConnectionReEstablishedTimer();
        if (isNotificationTypeLongPolling()) {
            cancelLastLongpollingRequest();
        }

        utils.callFunctionIfExist(onConnectionLost);
    }

    this.setOnError = function(callback) {
        onNotificationFailure = callback;
    };

    this.setOnSuccess = function(callback) {
        onNotificationSuccess = callback;
    };

    this.setOnConnectionLost = function(callback) {
        onConnectionLost = callback;
    };

    this.setOnConnectionEstablished = function(callback) {
        onConnectionEstablished = callback;
    };

    this.trigger = function() {
        if (!triggeredFetch) {
            try {
                fetchNotification();
                triggeredFetch = true;
            }
            catch (err) {
                throw err;
            }
        }
    };

    this.onGoneNotificationReceived = function(data) {
        cache.removeItem("USERNAME");
        cache.removeItem("PASSWORD");
        cache.removeItem(notificationCachePrefix + SESSION);
        stopExtendNotificationSubscriptionTimer();
        publishDeviceSubscriptionEndedMessage();
        utils.callFunctionIfExist(fcs.notification.onGoneReceived, data);
    };

    this.getNotificationId = function() {
        if (notifier) {
            return notifier.notificationId;
        }
    };
    
    globalBroadcaster.subscribe(CONSTANTS.EVENT.CONNECTION_REESTABLISHED, handleConnectionEstablished);
    globalBroadcaster.subscribe(CONSTANTS.EVENT.CONNECTION_LOST, handleConnectionLost);
    globalBroadcaster.subscribe(CONSTANTS.EVENT.TOKEN_AUTH_STARTED, onTokenAuth, 10);
    globalBroadcaster.subscribe(CONSTANTS.EVENT.TOKEN_NOT_FOUND, onTokenOrSessionError);
    globalBroadcaster.subscribe(CONSTANTS.EVENT.SESSION_EXPIRED, onTokenOrSessionError);
    
    if (__testonly__) { this.getWebSocket = function() { return webSocket; }; }
    if (__testonly__) { this.webSocketConnect = webSocketConnect; }
    if (__testonly__) { this.websocketDisconnect = websocketDisconnect; }
    if (__testonly__) { this.WEBSOCKET_CONSTANTS = WEBSOCKET_CONSTANTS; }
    if (__testonly__) { this.setNotifier = function(data) { notifier = data; }; }
};
var notificationManager = new NotificationManager();
fcs.notification = notificationManager;

/**
* Groups presence related resources (Presence Update, Presence Watcher)
* 
* @name presence
* @namespace
* @memberOf fcs
* 
* @version 3.0.4
* @since 3.0.0
*/
var Presence = function() {
    
   /**
    * States for presences update requests.
    * 
    * @name State
    * @enum {number}
    * @since 3.0.0
    * @readonly
    * @memberOf fcs.presence
    * @property {number} [CONNECTED=0] The user is currently online
    * @property {number} [UNAVAILABLE=1] The user is currently unavailable
    * @property {number} [AWAY=2] The user is currently away
    * @property {number} [OUT_TO_LUNCH=3] The user is currently out for lunch
    * @property {number} [BUSY=4] The user is currently busy
    * @property {number} [ON_VACATION=5] The user is currently on vacation
    * @property {number} [BE_RIGHT_BACK=6] The user will be right back
    * @property {number} [ON_THE_PHONE=7] The user is on the phone
    * @property {number} [ACTIVE=8] The user is currently active
    * @property {number} [INACTIVE=9] The user is currently inactive
    * @property {number} [PENDING=10] Waiting for user authorization
    * @property {number} [OFFLINE=11] The user is currently offline
    * @property {number} [CONNECTEDNOTE=12] The user is connected and defined a note
    * @property {number} [UNAVAILABLENOTE=13] The user is unavailable and defined a note
    */
    this.State = {
        CONNECTED:       0,
        UNAVAILABLE:     1,
        AWAY:            2,
        OUT_TO_LUNCH:    3,
        BUSY:            4,
        ON_VACATION:     5,
        BE_RIGHT_BACK:   6,
        ON_THE_PHONE:    7,
        ACTIVE:          8,
        INACTIVE:        9,
        PENDING:         10,
        OFFLINE:         11,
        CONNECTEDNOTE:   12,
        UNAVAILABLENOTE: 13
    };

   /**
    * Sends the user's updated status and activity to the server.
    *
    * @name fcs.presence.update
    * @function
    * @param {fcs.presence.State} presenceState The user's presence state    
    * @param {function} onSuccess The onSuccess() callback to be called
    * @param {function} onFailure The onFailure({@link fcs.Errors}) callback to be called
    * @since 3.0.0
    * @example
    * var onSuccess = function(){
    *    //do something here
    * };
    * var onError = function (err) {
    *   //do something here
    * };
    * 
    * fcs.presence.update(fcs.presence.State.BE_RIGHT_BACK, onSuccess, onError );
    */  

   /**
    * Returns the last watched user list
    * 
    * @name fcs.presence.getLastWatchedUserList
    * @function
    * @since 3.0.0
    */
   
   /**
     * Stops the presence watch refresh timer
     * 
     * @name fcs.presence.stopPresenceWatchRefreshTimer
     * @function
     * @since 3.0.0
     */

   /**
    * Starts watching the presence status of users in the provided user list.
    *
    * @name fcs.presence.watch
    * @function
    * @param {Array.<String>} watchedUserList list of users whose status is to be watched    
    * @param {function} onSuccess The onSuccess() callback to be called
    * @param {function} onFailure The onFailure({@link fcs.Errors}) callback to be called
    * @since 3.0.0
    * @example
    * var onSuccess = function(){
    *    //do something here
    * };
    * var onError = function (err) {
    *   //do something here
    * };
    * 
    * fcs.presence.watch(["user1", "user2"], onSuccess, onError );
    */  

   /**
    * Stops watching the presence status of the users in the provided user list.
    *
    * @name fcs.presence.stopwatch
    * @function
    * @param {Array.<String>} unwatchedUserList list of users whose status is to be unwatched    
    * @param {function} onSuccess The onSuccess() callback to be called
    * @param {function} onFailure The onFailure({@link fcs.Errors}) callback to be called
    * @since 3.0.0
    * @example
    * var onSuccess = function(){
    *    //do something here
    * };
    * var onError = function (err) {
    *   //do something here
    * };
    * 
    * fcs.presence.stopwatch(["user1", "user2"], onSuccess, onError ); 
    */  
   
   /**
    * Sends a request to receive a notification for the presence status of the users in the provided user list.<br />
    * For each user in the provided list, {@link fcs.presence.event:onReceived} handler will be invoked.
    *
    * @name fcs.presence.retrieve
    * @function
    * @param {Array.<String>} userList list of users whose status is to be retrieved    
    * @param {function} onSuccess The onSuccess() callback to be called
    * @param {function} onFailure The onFailure({@link fcs.Errors}) callback to be called
    * @since 3.0.0
    * @example
    * var onSuccess = function(){
    *    //do something here
    * };
    * var onError = function (err) {
    *   //do something here
    * };
    * 
    * fcs.presence.retrieve(["user1", "user2"], onSuccess, onError ); 
    */
   
   /**
    * Handler called for when receiving a presence notification
    *
    * @name onReceived
    * @event
    * @memberOf fcs.presence
    * @param {fcs.presence.UpdateEvent} event The presence update event
    * @since 3.0.0
    * @example
    * 
    * fcs.presence.onReceived = function(data) {
    *    //do something here
    * }
    */
   
   
   /**
    * Represents a presence change event
    *
    * @name UpdateEvent
    * @class
    * @memberOf fcs.presence
    * @version 3.0.4
    * @since 3.0.0
    */
   this.UpdateEvent = function(){};
   /**
    * User name of the contact whose presence has changed.
    *
    * @name fcs.presence.UpdateEvent#name
    * @field
    * @type {String}
    * @since 3.0.0
    */

    /**
     * The presence state of the user.
     *
    * @name fcs.presence.UpdateEvent#state
    * @field
    * @type {fcs.presence.State}
    * @since 3.0.0
    */
   
   /**
    * The type of network for this presence.
    *
    * @name fcs.presence.UpdateEvent#type
    * @field
    * @type {String}
    * @since 3.0.0
    */
};
var PRESENCE_URL = "/presence", PRESENCE_WATCHER_URL = "/presenceWatcher", 
    REQUEST_TYPE_WATCH = "watch", REQUEST_TYPE_STOP_WATCH = "stopwatch", REQUEST_TYPE_GET = "get",
    presence = new Presence(),
    PRESENCE_STATE = presence.State,
    STATUS_OPEN = "open",
    STATUS_CLOSED = "closed",
    ACTIVITY_UNKNOWN = "unknown",
    ACTIVITY_AWAY = "away",
    ACTIVITY_LUNCH = "lunch",
    ACTIVITY_BUSY = "busy",
    ACTIVITY_VACATION = "vacation",
    ACTIVITY_ON_THE_PHONE = "on-the-phone",
    ACTIVITY_OTHER = "other",
    NOTE_BE_RIGHT_BACK = "Be Right Back",
    NOTE_OFFLINE = "Offline",
    USERINPUT_ACTIVE = "active",
    USERINPUT_INACTIVE = "inactive";

var PresenceStateParser =  function(){

    var stateRequest = [];
    
    stateRequest[PRESENCE_STATE.CONNECTED] = {status: STATUS_OPEN, activity: ACTIVITY_UNKNOWN};
    stateRequest[PRESENCE_STATE.UNAVAILABLE] = {status: STATUS_CLOSED, activity: ACTIVITY_UNKNOWN};
    stateRequest[PRESENCE_STATE.AWAY] = {status: STATUS_OPEN, activity: ACTIVITY_AWAY};
    stateRequest[PRESENCE_STATE.OUT_TO_LUNCH] = {status: STATUS_OPEN, activity: ACTIVITY_LUNCH};
    stateRequest[PRESENCE_STATE.BUSY] = {status: STATUS_CLOSED, activity: ACTIVITY_BUSY};
    stateRequest[PRESENCE_STATE.ON_VACATION] = {status: STATUS_CLOSED, activity: ACTIVITY_VACATION};
    stateRequest[PRESENCE_STATE.BE_RIGHT_BACK] = {status: STATUS_OPEN, activity: ACTIVITY_OTHER, note: NOTE_BE_RIGHT_BACK};
    stateRequest[PRESENCE_STATE.ON_THE_PHONE] = {status: STATUS_OPEN, activity: ACTIVITY_ON_THE_PHONE};
    stateRequest[PRESENCE_STATE.ACTIVE] = {status: STATUS_OPEN, activity: ACTIVITY_UNKNOWN, userInput: USERINPUT_ACTIVE};
    stateRequest[PRESENCE_STATE.INACTIVE] = {status: STATUS_CLOSED, activity: ACTIVITY_UNKNOWN, userInput: USERINPUT_INACTIVE};
    stateRequest[PRESENCE_STATE.OFFLINE] = {status: STATUS_CLOSED, activity: ACTIVITY_OTHER, note: NOTE_OFFLINE};
    stateRequest[PRESENCE_STATE.CONNECTEDNOTE] = {status: STATUS_OPEN, activity: ACTIVITY_OTHER};
    stateRequest[PRESENCE_STATE.UNAVAILABLENOTE] = {status: STATUS_CLOSED, activity: ACTIVITY_OTHER};
    
    this.getRequestObject = function(presenceState){
        var state = stateRequest[presenceState];
        
        if(state){
            return state;
        } else {
        throw new Error("Invalid Presence State");
        }
    };

    this.getState = function(presence) {
        switch (presence.userInput) {
            case USERINPUT_ACTIVE:
                return PRESENCE_STATE.ACTIVE;
            case USERINPUT_INACTIVE:
                return PRESENCE_STATE.INACTIVE;
        }

        switch (presence.note) {
            case NOTE_BE_RIGHT_BACK:
                return PRESENCE_STATE.BE_RIGHT_BACK;
            case NOTE_OFFLINE:
                return PRESENCE_STATE.OFFLINE;
        }
        if (presence.note) {
            if (presence.status === STATUS_OPEN) {
                return PRESENCE_STATE.CONNECTEDNOTE;
            }
            else {
                return PRESENCE_STATE.UNAVAILABLENOTE;
            }
        }

        switch (presence.activity) {
            case ACTIVITY_AWAY:
                return PRESENCE_STATE.AWAY;
            case ACTIVITY_LUNCH:
                return PRESENCE_STATE.OUT_TO_LUNCH;
            case ACTIVITY_BUSY:
                return PRESENCE_STATE.BUSY;
            case ACTIVITY_VACATION:
                return PRESENCE_STATE.ON_VACATION;
            case ACTIVITY_ON_THE_PHONE:
                return PRESENCE_STATE.ON_THE_PHONE;
            case ACTIVITY_UNKNOWN:
                if (presence.status === STATUS_OPEN) {
                    return PRESENCE_STATE.CONNECTED;
                }
                else {
                    return PRESENCE_STATE.UNAVAILABLE;
                }
        }
        return PRESENCE_STATE.CONNECTED;
    };
};

var presenceStateParser;

var PresenceImpl = function() {
    var lastWatchedUserList = null, subscriptionRefreshTimer = null,
            onPresenceWatchSuccess = null, onPresenceWatchFailure = null,
            logger = logManager.getLogger("presenceService"),
            subscriptionExpiryTimestamp = 0;


    this.getLastWatchedUserList = function () {
        return lastWatchedUserList;
    };

    this.onReceived = null;

    this.update = function(presenceState, onSuccess, onFailure) {

        server.sendPostRequest({
            "url": getWAMUrl(1, PRESENCE_URL),
            "data": {"presenceRequest": presenceStateParser.getRequestObject(presenceState)}
                },
                onSuccess,
                onFailure
        );

    };

    function makeRequest(watchedUserList, onSuccess, onFailure, action) {
        var data = {"presenceWatcherRequest":{"userList": watchedUserList, "action": action}};
        server.sendPostRequest({
                        "url": getWAMUrl(1, PRESENCE_WATCHER_URL),
                        "data": data
                    },
                    onSuccess,
                    onFailure
        );
    }

    function stopSubscriptionRefreshTimer() {
        if (subscriptionRefreshTimer) {
            logger.trace("presence watch timer is stopped: " + subscriptionRefreshTimer);
            clearTimeout(subscriptionRefreshTimer);
            subscriptionRefreshTimer = null;
        }
    }

    function startServiceSubscription(watchedUserList, onSuccess, onFailure) {
        var self = this, currentTimestamp = utils.getTimestamp();

        if (!watchedUserList) {
            if (lastWatchedUserList) {
                logger.trace("watchedUserList is empty, use lastWatchedUserList.");
                watchedUserList = lastWatchedUserList;
            }
            else {
                logger.trace("presence service subscription has not been initialized, do not trigger service subscription.");
                return;
            }
        }

        logger.info("presence service subscription, currentTimestamp: " + currentTimestamp + " expiryTimestamp: " + subscriptionExpiryTimestamp);
        if (currentTimestamp - subscriptionExpiryTimestamp < 0) {
            logger.trace("previous presence service subscription is still valid, do not trigger service subscription.");
            return;
        }

        if (onSuccess) {
            onPresenceWatchSuccess = onSuccess;
        }
        if (onFailure) {
            onPresenceWatchFailure = onFailure;
        }

        logger.info("subscribe presence status of users:", watchedUserList);
        makeRequest(watchedUserList, function(result) {
            var response, expiry;
            if (result) {
                response = result.presenceWatcherResponse;
                if (response) {
                    expiry = response.expiryValue / 2;
                    if (expiry) {
                        subscriptionExpiryTimestamp = utils.getTimestamp() + expiry * 1000;
                        stopSubscriptionRefreshTimer();
                        subscriptionRefreshTimer = setTimeout(function() {
                            self.watch(watchedUserList, null, onPresenceWatchFailure);
                        }, expiry * 1000);
                        logger.trace("presence watch, timer: " + subscriptionRefreshTimer + " expiryTimestamp: " + subscriptionExpiryTimestamp);
                    }
                }
            }
            lastWatchedUserList = watchedUserList;
            if (onPresenceWatchSuccess && typeof onPresenceWatchSuccess === 'function') {
                onPresenceWatchSuccess(result);
            }
        }, onPresenceWatchFailure, REQUEST_TYPE_WATCH);
    }

    this.watch = startServiceSubscription;
    
    this.stopwatch = function(watchedUserList, onSuccess, onFailure) {

        makeRequest(watchedUserList, onSuccess, onFailure, REQUEST_TYPE_STOP_WATCH);
    };


    this.retrieve = function(watchedUserList, onSuccess, onFailure) {

        makeRequest(watchedUserList, onSuccess, onFailure, REQUEST_TYPE_GET);
    };

    function presenceServiceOnSubscriptionStartedHandler() {
        startServiceSubscription(undefined, onPresenceWatchSuccess, onPresenceWatchFailure);
    }

    globalBroadcaster.subscribe(CONSTANTS.EVENT.DEVICE_SUBSCRIPTION_STARTED,
            presenceServiceOnSubscriptionStartedHandler);

    globalBroadcaster.subscribe(CONSTANTS.EVENT.DEVICE_SUBSCRIPTION_ENDED,
            stopSubscriptionRefreshTimer);

};

PresenceImpl.prototype = new Presence();
var presenceService = new PresenceImpl();
fcs.presence = presenceService;

presenceStateParser = new PresenceStateParser();

/*
 * In order to find the users presence client receives 3 parameters from WAM
 * status, activity, note and userInput.
 * status is received in every presence notification and can have two parameters: open and closed
 * For activity and note there can be only one of them in the presence notification.
 * userInput comes with activity but userInput is the  one that decides presence.
 * Presence is decided according to status and activity/note combination
 */
NotificationCallBacks.presenceWatcher = function(data){
    if(!fcs.notification.isAnonymous()) {
        var presence = new fcs.presence.UpdateEvent(), presenceParams = data.presenceWatcherNotificationParams;

        presence.name = utils.getProperty(presenceParams, 'name');
        presence.type = utils.getProperty(presenceParams, 'type');
        presence.status = utils.getProperty(presenceParams, 'status');
        presence.activity = utils.getProperty(presenceParams, 'activity');
        presence.note = utils.getProperty(presenceParams, 'note');
        presence.userInput = utils.getProperty(presenceParams, 'userInput');

        presence.state = presenceStateParser.getState(presence);

        utils.callFunctionIfExist(fcs.presence.onReceived, presence);
        
    }    
};
if ( typeof window.define === "function" && window.define.amd ) {
	define( "fcs", [], function () { return window.fcs; } );
}

})( window );
