"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var gl_react_1 = require("gl-react");
var shader_wrapper_1 = require("../components/shader-wrapper");
var shaders_1 = require("../utils/shaders");
var format_1 = require("../utils/format");
var variable_evaluation_1 = require("../utils/variable-evaluation");
var NAME = "Bleeding Edge";
var id = format_1.toPath(NAME);
var loop;
function BleedingEdge() {
    var _a = React.useState(0), tick = _a[0], setTick = _a[1];
    var _b = React.useState(null), shaders = _b[0], setShaders = _b[1];
    var surfaceRef = React.useRef();
    var incTick = function (tick) {
        var nextTick = tick + 0.001;
        setTick(nextTick);
        loop = requestAnimationFrame(function () {
            incTick(nextTick);
        });
    };
    React.useEffect(function () {
        shaders_1.addExtensionToShader(variable_evaluation_1.defined(shaders), surfaceRef);
        shaders_1.createShader(id, setShaders);
        incTick(tick);
        return function () { return cancelAnimationFrame(loop); };
    }, []);
    React.useEffect(function () {
        shaders_1.addExtensionToShader(variable_evaluation_1.defined(shaders), surfaceRef);
    }, [variable_evaluation_1.defined(shaders)]);
    return (React.createElement(shader_wrapper_1.default, { name: NAME, ref: surfaceRef }, variable_evaluation_1.defined(shaders) && (React.createElement(gl_react_1.Node, { shader: shaders[id], uniforms: {
            uTime: tick,
            channel: 'https://i.imgur.com/uTP9Xfr.jpg'
        } }))));
}
exports.default = BleedingEdge;
//# sourceMappingURL=bleeding-edge.js.map