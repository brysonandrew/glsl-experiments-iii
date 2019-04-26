"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gatsby_1 = require("gatsby");
var React = require("react");
var Header = function (_a) {
    var siteTitle = _a.siteTitle;
    return (React.createElement("header", { style: {
            background: "rebeccapurple",
            marginBottom: "1.45rem",
        } },
        React.createElement("div", { style: {
                margin: "0 auto",
                maxWidth: 960,
                padding: "1.45rem 1.0875rem",
            } },
            React.createElement("h1", { style: { margin: 0 } },
                React.createElement(gatsby_1.Link, { to: "/", style: {
                        color: "white",
                        textDecoration: "none",
                    } }, siteTitle)))));
};
exports.default = Header;
//# sourceMappingURL=head.js.map