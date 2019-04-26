"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var gatsby_1 = require("gatsby");
var layout_1 = require("../components/layout");
var image_1 = require("../components/image");
var seo_1 = require("../components/seo");
var IndexPage = function () { return (React.createElement(layout_1.default, null,
    React.createElement(seo_1.default, { title: "Home", keywords: ["gatsby", "application", "react"] }),
    React.createElement("h1", null, "Hi people"),
    React.createElement("p", null, "Welcome to your new Gatsby site."),
    React.createElement("p", null, "Now go build something great."),
    React.createElement("div", { style: { maxWidth: "300px", marginBottom: "1.45rem" } },
        React.createElement(image_1.default, null)),
    React.createElement(gatsby_1.Link, { to: "/page-2/" }, "Go to page 2"))); };
exports.default = IndexPage;
//# sourceMappingURL=i.js.map