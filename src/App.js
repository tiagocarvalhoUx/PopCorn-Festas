"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var Header_1 = require("./components/Header");
var Hero_1 = require("./components/Hero");
var About_1 = require("./components/About");
var Services_1 = require("./components/Services");
var Gallery_1 = require("./components/Gallery");
var Footer_1 = require("./components/Footer");
var WhatsAppButton_1 = require("./components/WhatsAppButton");
require("./App.css");
var App = function () {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "App", children: [(0, jsx_runtime_1.jsx)(Header_1.default, {}), (0, jsx_runtime_1.jsx)(Hero_1.default, {}), (0, jsx_runtime_1.jsx)(About_1.default, {}), (0, jsx_runtime_1.jsx)(Services_1.default, {}), (0, jsx_runtime_1.jsx)(Gallery_1.default, {}), (0, jsx_runtime_1.jsx)(Footer_1.default, {}), (0, jsx_runtime_1.jsx)(WhatsAppButton_1.default, {})] }));
};
exports.default = App;
