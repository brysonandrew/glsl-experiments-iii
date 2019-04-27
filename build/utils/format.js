"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var variable_evaluation_1 = require("./variable-evaluation");
function removeSpaces(x) {
    if (variable_evaluation_1.defined(x)) {
        return x.replace(/\s/g, '');
    }
    else {
        return '';
    }
}
exports.removeSpaces = removeSpaces;
function toPath(name) {
    return name
        .replace(/-/g, '')
        .replace(/\s/g, '-')
        .replace(/[.,]/g, '')
        .toLowerCase();
}
exports.toPath = toPath;
//# sourceMappingURL=format.js.map