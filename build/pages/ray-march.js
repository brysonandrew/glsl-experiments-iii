"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var gl_react_1 = require("gl-react");
var gl_react_dom_1 = require("gl-react-dom");
var styled_components_1 = require("styled-components");
var shader = require('../components/shaders/ray-march.glsl');
var layout_1 = require("../components/layout");
var seo_1 = require("../components/seo");
var loop;
var shaders = gl_react_1.Shaders.create({
    rayMarch: {
        frag: gl_react_1.GLSL(templateObject_1 || (templateObject_1 = __makeTemplateObject(["", ""], ["", ""])), shader)
    }
});
var Container = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"], ["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"])));
function RayMarch() {
    var _a = React.useState(0), tick = _a[0], setTick = _a[1];
    var incTick = function (tick) {
        var nextTick = tick + 0.1;
        setTick(nextTick);
        loop = requestAnimationFrame(function () {
            incTick(nextTick);
        });
    };
    React.useEffect(function () {
        incTick(tick);
        return function () { return cancelAnimationFrame(loop); };
    }, []);
    return React.createElement(gl_react_1.Node, { shader: shaders.rayMarch, uniforms: { uResolution: [1, 1], uTime: tick } });
}
var HelloWorld = function () { return (React.createElement(layout_1.default, null,
    React.createElement(seo_1.default, { title: "Ray March" }),
    React.createElement(Container, null,
        React.createElement(gl_react_dom_1.Surface, { width: 500, height: 500 },
            React.createElement(RayMarch, null))))); };
exports.default = HelloWorld;
var templateObject_1, templateObject_2;
//# sourceMappingURL=ray-march.js.map