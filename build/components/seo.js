"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_helmet_1 = require("react-helmet");
var gatsby_1 = require("gatsby");
function SEO(_a) {
    var description = _a.description, lang = _a.lang, meta = _a.meta, keywords = _a.keywords, title = _a.title;
    var site = gatsby_1.useStaticQuery(gatsby_1.graphql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      query {\n        site {\n          siteMetadata {\n            title\n            description\n            author\n          }\n        }\n      }\n    "], ["\n      query {\n        site {\n          siteMetadata {\n            title\n            description\n            author\n          }\n        }\n      }\n    "])))).site;
    var metaDescription = description || site.siteMetadata.description;
    return (React.createElement(react_helmet_1.default, { htmlAttributes: {
            lang: lang,
        }, title: title, titleTemplate: "%s | " + site.siteMetadata.title, meta: [
            {
                name: "description",
                content: metaDescription,
            },
            {
                property: "og:title",
                content: title,
            },
            {
                property: "og:description",
                content: metaDescription,
            },
            {
                property: "og:type",
                content: "website",
            },
            {
                name: "twitter:card",
                content: "summary",
            },
            {
                name: "twitter:creator",
                content: site.siteMetadata.author,
            },
            {
                name: "twitter:title",
                content: title,
            },
            {
                name: "twitter:description",
                content: metaDescription,
            },
        ]
            .concat(keywords.length > 0
            ? {
                name: "keywords",
                content: keywords.join(", "),
            }
            : [])
            .concat(meta) }));
}
SEO["defaultProps"] = {
    lang: "en",
    meta: [],
    keywords: [],
    description: "",
};
exports.default = SEO;
var templateObject_1;
//# sourceMappingURL=seo.js.map