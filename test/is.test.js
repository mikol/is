'use strict';

require('criteria'); /* globals scope, test */

const is = require('../is');

scope('`is.*()` correctly identify values.',
function () {
  test('`[]` is an array.',
  function (must) {
    must.true(() => is.array([]));
  });

  test('`new Array()` is an array.',
  function (must) {
    /* jshint -W053 */
    must.true(() => is.array(new Array()));
    /* jshint +W053 */
  });

  test('`false` is a boolean.',
  function (must) {
    must.true(() => is.boolean(false));
  });

  test('`new Boolean()` is a boolean.',
  function (must) {
    /* jshint -W053 */
    must.true(() => is.boolean(new Boolean()));
    /* jshint +W053 */
  });

  test('`0` is not a boolean.',
  function (must) {
    must.true(() => !is.boolean(0));
  });

  test('`new Date()` is a date.',
  function (must) {
    must.true(() => is.date(new Date()));
  });

  test('`false` is a usable value.',
  function (must) {
    must.true(() => is.def(false));
  });

  test('`Error()` is an Error.',
  function (must) {
    must.true(() => is.error(Error()));
  });

  test('`function () {}` is a function.',
  function (must) {
    must.true(() => is.function(function () {}));
  });

  test('`null` is not a usable value.',
  function (must) {
    must.true(() => is.nil(null));
  });

  test('`undefined` is not a usable value.',
  function (must) {
    must.true(() => is.nil(void 0));
  });

  test('`false` is not an unusable value.',
  function (must) {
    must.true(() => !is.nil(false));
  });

  test('`null` is null.',
  function (must) {
    must.true(() => is.null(null));
  });

  test('`undefined` is not null.',
  function (must) {
    must.true(() => !is.null(undefined));
  });

  test('`0` is a number.',
  function (must) {
    must.true(() => is.number(0));
  });

  test('`new Number(0)` is a number.',
  function (must) {
    /* jshint -W053 */
    must.true(() => is.number(new Number(0)));
    /* jshint +W053 */
  });

  test('`NaN` is not a number.',
  function (must) {
    must.true(() => !is.number(NaN));
  });

  test('`{}` is an object.',
  function (must) {
    must.true(() => is.object({}));
  });

  test('`new Object()` is an object.',
  function (must) {
    /* jshint -W010 */
    must.true(() => is.object(new Object()));
    /* jshint +W010 */
  });

  test('`function () {}` is an object.',
  function (must) {
    must.true(() => is.object(function () {}));
  });

  test('`true` is not an object.',
  function (must) {
    must.true(() => !is.object(true));
  });

  if (typeof Promise !== 'undefined') {
    test('`Promise.resolve()` is a promise.',
    function (must) {
      must.true(() => is.promise(Promise.resolve()));
    });

    test('`Promise.reject()` is a promise.',
    function (must) {
      must.true(() => is.promise(Promise.reject()));
    });

    test('`new Promise(function () {})` is a promise.',
    function (must) {
      must.true(() => is.promise(new Promise(function () {})));
    });

    test('`{then: function () {}}` is not a promise.',
    function (must) {
      must.true(() => !is.promise({then: function () {}}));
    });
  }

  test('`/ /` is a regular expression.',
  function (must) {
    must.true(() => is.regexp(/ /));
  });

  test("`new RegExp('^(.*)$')` is a regular expression.",
  function (must) {
    must.true(() => is.regexp(new RegExp('^(.*)$')));
  });

  test("`'^(.*)$'` is not a regular expression.",
  function (must) {
    must.true(() => !is.regexp('^(.*)$'));
  });

  test("`''` is a string.",
  function (must) {
    must.true(() => is.string(''));
  });

  test("`new String('')` is a string.",
  function (must) {
    /* jshint -W053 */
    must.true(() => is.string(new String('')));
    /* jshint +W053 */
  });

  test('`null` is not a string.',
  function (must) {
    must.true(() => !is.string(null));
  });

  if (typeof Symbol !== 'undefined') {
    test('`Symbol()` is a symbol.',
    function (must) {
      must.true(() => is.symbol(Symbol()));
    });
  }

  if (typeof Promise !== 'undefined') {
    test('`{then: function () {}}` is a thenable.',
    function (must) {
      must.true(() => is.thenable({then: function () {}}));
    });

    test('`Promise.resolve()` is a thenable.',
    function (must) {
      must.true(() => is.thenable(Promise.resolve()));
    });

    test('`Promise.reject()` is a thenable.',
    function (must) {
      must.true(() => is.thenable(Promise.reject()));
    });

    test('`new Promise(function () {})` is a thenable.',
    function (must) {
      must.true(() => is.thenable(new Promise(function () {})));
    });

    test('`{then: true}` is not a thenable.',
    function (must) {
      must.true(() => !is.thenable({then: true}));
    });
  }

  test('`(function () {})()` is undefined.',
  function (must) {
    must.true(() => is.undefined((function () {})()));
  });

  test('`void (0)` is undefined.',
  function (must) {
    must.true(() => is.undefined(void (0)));
  });
});
