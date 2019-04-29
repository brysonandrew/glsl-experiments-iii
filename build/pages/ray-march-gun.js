"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var gl_react_1 = require("gl-react");
var shader = require("../components/shaders/ray-march-gun.glsl");
var shader_wrapper_1 = require("../components/shader-wrapper");
var loop;
var shaders = gl_react_1.Shaders.create({
    rayMarch: {
        frag: gl_react_1.GLSL(templateObject_1 || (templateObject_1 = __makeTemplateObject(["", ""], ["", ""])), shader),
    },
});
function RayMarchGun() {
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
    return (React.createElement(gl_react_1.Node, { shader: shaders.rayMarch, uniforms: { uResolution: [1, 1], uTime: tick } }));
}
exports.default = (function () { return (React.createElement(shader_wrapper_1.default, { name: "Ray March Gun" },
    React.createElement(RayMarchGun, null))); });
var templateObject_1;
//# sourceMappingURL=ray-march-gun.js.map