"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var gl_react_1 = require("gl-react");
var shader = require("../components/shaders/hello-world.glsl");
var shaders = gl_react_1.Shaders.create({
    helloBlue: {
        frag: gl_react_1.GLSL(templateObject_1 || (templateObject_1 = __makeTemplateObject(["", ""], ["", ""])), shader),
    },
});
function HelloBlue() {
    return React.createElement(gl_react_1.Node, { shader: shaders.helloBlue, uniforms: { blue: 0.5 } });
}
var shader_wrapper_1 = require("../components/shader-wrapper");
var HelloWorld = function () { return (React.createElement(shader_wrapper_1.default, { name: "Hello World" },
    React.createElement(HelloBlue, null))); };
exports.default = HelloWorld;
var templateObject_1;
//# sourceMappingURL=hello-world.js.map