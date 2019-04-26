"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var gatsby_1 = require("gatsby");
var gatsby_image_1 = require("gatsby-image");
var Image = function () { return (React.createElement(gatsby_1.StaticQuery, { query: gatsby_1.graphql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      query {\n        placeholderImage: file(relativePath: { eq: \"gatsby-astronaut.png\" }) {\n          childImageSharp {\n            fluid(maxWidth: 300) {\n              ...GatsbyImageSharpFluid\n            }\n          }\n        }\n      }\n    "], ["\n      query {\n        placeholderImage: file(relativePath: { eq: \"gatsby-astronaut.png\" }) {\n          childImageSharp {\n            fluid(maxWidth: 300) {\n              ...GatsbyImageSharpFluid\n            }\n          }\n        }\n      }\n    "]))), render: function (data) { return React.createElement(gatsby_image_1.default, { fluid: data.placeholderImage.childImageSharp.fluid }); } })); };
exports.default = Image;
var templateObject_1;
//# sourceMappingURL=im.js.map