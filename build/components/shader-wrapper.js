"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var gl_react_dom_1 = require("gl-react-dom");
var styled_components_1 = require("styled-components");
var layout_1 = require("../components/layout");
var seo_1 = require("../components/seo");
var react_1 = require("react");
var Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"], ["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"])));
var ShaderWrapper = react_1.forwardRef(function (props, ref) { return (React.createElement(layout_1.default, null,
    React.createElement(seo_1.default, { title: props.name }),
    React.createElement(Container, null,
        React.createElement(gl_react_dom_1.Surface, { ref: ref, width: 800, height: 800 }, props.children)))); });
exports.default = ShaderWrapper;
var templateObject_1;
//# sourceMappingURL=shader-wrapper.js.map