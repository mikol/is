(function (context) {
/*jscs:disable validateIndentation*//*jscs:enable validateIndentation*/
// -----------------------------------------------------------------------------

'use strict';

var id = 'is';
var dependencies = ['instance'];

function factory(instance) {
  var stringify = {}.toString.call.bind({}.toString);

  return instance.create(null, {
    /**
     * Determines if `v` is an array.
     *
     * @param {*} v - The value to test.
     *
     * @return {!boolean} `true` if `v` is an array; `false` otherwise.
     */
    array: function isArray(v) {
      return v != null &&
          stringify(v) === '[object Array]';
    },

    /**
     * Determines if `v` is a boolean.
     *
     * @param {*} v - The value to test.
     *
     * @return {!boolean} `true` if `v` is a boolean; `false` otherwise.
     */
    boolean: function isBoolean(v) {
      return v != null &&
          typeof v === 'boolean' || stringify(v) === '[object Boolean]';
    },

    /**
     * Determines if `v` is a date.
     *
     * @param {*} v - The value to test.
     *
     * @return {!boolean} `true` if `v` is a date; `false` otherwise.
     */
    date: function isDate(v) {
      return v != null &&
          stringify(v) === '[object Date]';
    },

    /**
     * Determines if `v` has a meaningful, introspectable value (that is, not
     * the non-value `null` and not the unitialized value `undefined`); the
     * opposite of `is.nil()`.
     *
     * @param {*} v - The value to test.
     *
     * @return {!boolean} `true` if `v` has a meaningful value;
     *     `false` otherwise.
     *
     * @see is.{@link module:is~nil|nil}()
     */
    def: function isDef(v) {
      return v != null;
    },

    /**
     * Determines if `v` is an error.
     *
     * @param {*} v - The value to test.
     *
     * @return {!boolean} `true` if `v` is an error; `false` otherwise.
     */
    error: function isError(v) {
      return v != null &&
          stringify(v) === '[object Error]';
    },

    /**
     * Determines if `v` is a function.
     *
     * @param {*} v - The value to test.
     *
     * @return {!boolean} `true` if `v` is a function; `false` otherwise.
     */
    function: function isFunction(v) {
      return v != null &&
          typeof v === 'function';
    },

    /**
     * Determines if `v` is *not* a usable value (that is, the non-value `null`
     * or the unitialized value `undefined`); the opposite of `is.def()`.
     *
     * @param {*} v - The value to test.
     *
     * @return {!boolean} `true` if `v` is not a usable value;
     *     `false` otherwise.
     *
     * @see is.{@link module:is~def|def}()
     */
    nil: function isNil(v) {
      return v == null;
    },

    /**
     * Determines if `v` is `null`.
     *
     * @param {*} v - The value to test.
     *
     * @return {!boolean} `true` if `v` is `null`; `false` otherwise.
     */
    null: function isNull(v) {
      return v === null;
    },

    /**
     * Determines if `v` is a number.
     *
     * @param {*} v - The value to test.
     *
     * @return {!boolean} `true` if `v` is a number; `false` otherwise.
     */
    number: function isNumber(v) {
      return v != null &&
          !isNaN(v) && stringify(v) === '[object Number]';
    },

    /**
     * Determines if `v` is a non-primitive, non-null type; not `boolean`,
     * `number`, `string`, `null`, or `undefined`, but any other data type that
     * can be extended dynamically with properties and methods such as the
     * primitive wrappers `Boolean`, `Number`, `String`, as well as built-in
     * types like `Array`, `Date`, `Function`, `Object`, `RegExp`, and others.
     *
     * @param {*} v - The value to test.
     *
     * @return {!boolean} `true` if `v` is an object; `false` otherwise.
     */
    object: function isObject(v) {
      if (v != null) {
        var tov = typeof v;
        return tov === 'object' || tov === 'function';
      }

      return false;
    },

    /**
     * Determines if `v` is a Promises/A+ promise instance from the current
     * (i.e., global `Promise` constructor) implementation.
     *
     * @param {*} v - The value to test.
     *
     * @return {!boolean} `true` if `v` is an instance of the current
     *     Promises/A+ implementation; `false` otherwise.
     */
    promise: function isPromise(v) {
      return v != null &&
          v.constructor === Promise.resolve().constructor;
    },

    /**
     * Determines if `v` is a regular expression.
     *
     * @param {*} v - The value to test.
     *
     * @return {!boolean} `true` if `v` is a regular expression; `false`
     *     otherwise.
     */
    regexp: function isRegExp(v) {
      return v != null &&
          stringify(v) === '[object RegExp]';
    },

    /**
     * Determines if `v` is a string.
     *
     * @param {*} v - The value to test.
     *
     * @return {!boolean} `true` if `v` is a string; `false` otherwise.
     */
    string: function isString(v) {
      return v != null &&
          typeof v === 'string' || stringify(v) === '[object String]';
    },

    /**
     * Determines if `v` is a symbol.
     *
     * @param {*} v - The value to test.
     *
     * @return {!boolean} `true` if `v` is a symbol; `false` otherwise.
     */
    symbol: function isSymbol(v) {
      return v != null &&
          typeof v === 'symbol' || stringify(v) === '[object Symbol]';
    },

    /**
     * Determines if `v` exposes a Promises/A+-compliant `then` method.
     *
     * @param {*} v - The value to test.
     *
     * @return {!boolean} `true` if `v` implements a `then` method;
     *     `false` otherwise.
     */
    thenable: function isThenable(v) {
      return v != null && typeof v.then === 'function';
    },

    /**
     * Determines if `v` is `undefined`.
     *
     * @param {*} v The value to test.
     *
     * @return {!boolean} `true` if `v` is `undefined`; `false` otherwise.
     */
    undefined: function isUndefined(v) {
      return v === undefined;
    },
  });

  // TODO: Implement terse aliases?
}

// -----------------------------------------------------------------------------
var x = dependencies.length; var o = 'object';
context = typeof global === o ? global : typeof window === o ? window : context;
if (typeof define === 'function' && define.amd) {
  define(dependencies, function () {
    return factory.apply(context, [].slice.call(arguments));
  });
} else if (typeof module === o && module.exports) {
  for (; x--;) {dependencies[x] = require(dependencies[x]);}
  module.exports = factory.apply(context, dependencies);
} else {
  for (; x--;) {dependencies[x] = context[dependencies[x]];}
  context[id] = factory.apply(context, dependencies);
}
}(this));
