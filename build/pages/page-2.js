"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var gatsby_1 = require("gatsby");
var gl_react_1 = require("gl-react");
var gl_react_dom_1 = require("gl-react-dom");
var shaders = gl_react_1.Shaders.create({
    helloBlue: {
        frag: gl_react_1.GLSL(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\nprecision highp float;\nvarying vec2 uv;\nuniform float blue;\nvoid main() {\n  gl_FragColor = vec4(uv.x, uv.y, blue, 1.0);\n}"], ["\nprecision highp float;\nvarying vec2 uv;\nuniform float blue;\nvoid main() {\n  gl_FragColor = vec4(uv.x, uv.y, blue, 1.0);\n}"])))
    }
});
function HelloBlue() {
    return React.createElement(gl_react_1.Node, { shader: shaders.helloBlue, uniforms: { blue: 0.5 } });
}
var layout_1 = require("../components/layout");
var seo_1 = require("../components/seo");
var SecondPage = function () { return (React.createElement(layout_1.default, null,
    React.createElement(seo_1.default, { title: "Page two" }),
    React.createElement("h1", null, "Hi from the second page"),
    React.createElement(gl_react_dom_1.Surface, { width: 300, height: 300 },
        React.createElement(HelloBlue, null)),
    React.createElement(gatsby_1.Link, { to: "/" }, "Go back to the homepage"))); };
exports.default = SecondPage;
var templateObject_1;
//# sourceMappingURL=page-2.js.map