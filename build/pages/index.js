"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var gatsby_1 = require("gatsby");
var layout_1 = require("../components/layout");
var seo_1 = require("../components/seo");
var IndexPage = function () { return (React.createElement(layout_1.default, null,
    React.createElement(seo_1.default, { title: "Home", keywords: ["gatsby", "application", "react"] }),
    React.createElement(gatsby_1.Link, { to: "/hello-world" }, "Hello World"),
    React.createElement(gatsby_1.Link, { to: "/ray-march" }, "Ray March"),
    React.createElement(gatsby_1.Link, { to: "/sparks" }, "Sparks"))); };
exports.default = IndexPage;
//# sourceMappingURL=index.js.map