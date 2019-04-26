"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exists = function (x) { return Boolean(x); };
exports.defined = function (x) { return typeof x !== 'undefined' && x !== null; };
exports.isString = function (x) { return typeof x === 'string'; };
exports.isNumber = function (x) { return typeof x === 'number'; };
exports.isArray = function (x) { return x.constructor === Array; };
//# sourceMappingURL=variable-evaluation.js.map