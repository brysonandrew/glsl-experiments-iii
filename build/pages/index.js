"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var gatsby_1 = require("gatsby");
var styled_components_1 = require("styled-components");
var layout_1 = require("../components/layout");
var seo_1 = require("../components/seo");
var format_1 = require("../utils/format");
var Item = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  color: #000;\n"], ["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  color: #000;\n"])));
var ITEMS = ["Hello World", "Ray March Gun", "Ray March Sphere", "Sparks", "Bleeding Edge"];
var IndexPage = function () { return (React.createElement(layout_1.default, null,
    React.createElement(seo_1.default, { title: "Home", keywords: ["gatsby", "application", "react"] }),
    ITEMS.map(function (item) { return (React.createElement(Item, { key: item },
        React.createElement(gatsby_1.Link, { to: "/" + format_1.toPath(item) }, item))); }))); };
exports.default = IndexPage;
var templateObject_1;
//# sourceMappingURL=index.js.map