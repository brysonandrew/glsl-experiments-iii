"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var gatsby_1 = require("gatsby");
var layout_1 = require("../components/layout");
var seo_1 = require("../components/seo");
var SecondPage = function () { return (React.createElement(layout_1.default, null,
    React.createElement(seo_1.default, { title: "Page two" }),
    React.createElement("h1", null, "Hi from the second page"),
    React.createElement("p", null, "Welcome to page 2"),
    React.createElement(gatsby_1.Link, { to: "/" }, "Go back to the homepage"))); };
exports.default = SecondPage;
//# sourceMappingURL=page-2.js.map