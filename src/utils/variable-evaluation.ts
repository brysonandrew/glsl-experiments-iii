export const exists = (x) => Boolean(x);

export const defined = (x) => typeof x !== 'undefined' && x !== null;

export const isString = (x) => typeof x === 'string';

export const isNumber = (x) => typeof x === 'number';

export const isArray = (x) => x.constructor === Array;
