"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var layout_1 = require("../components/layout");
var seo_1 = require("../components/seo");
var NotFoundPage = function () { return (React.createElement(layout_1.default, null,
    React.createElement(seo_1.default, { title: "404: Not found" }),
    React.createElement("h1", null, "NOT FOUND"),
    React.createElement("p", null, "You just hit a route that doesn't exist... the sadness."))); };
exports.default = NotFoundPage;
//# sourceMappingURL=4.js.map