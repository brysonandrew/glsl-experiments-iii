"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var gl_react_1 = require("gl-react");
function createShader(id, onSetShaders) {
    Promise.resolve().then(function () { return require("../shaders/" + id + ".glsl"); }).then(function (x) {
        var _a;
        onSetShaders(gl_react_1.Shaders.create((_a = {},
            _a[id] = {
                frag: gl_react_1.GLSL(templateObject_1 || (templateObject_1 = __makeTemplateObject(["", ""], ["", ""])), x.default),
            },
            _a)));
    });
}
exports.createShader = createShader;
function addExtensionToShader(isReady, canvasRef) {
    if (isReady) {
        var gl = canvasRef.current.glView.canvas.getContext("webgl");
        gl.getExtension("OES_standard_derivatives");
    }
}
exports.addExtensionToShader = addExtensionToShader;
var templateObject_1;
//# sourceMappingURL=shaders.js.map