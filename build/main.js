"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vue_1 = require("vue");
const SSR = require("vue-server-renderer");
let renderer = SSR.createRenderer();
let app = new vue_1.default({
    template: "<h1>Hello, World!</h1>"
});
console.log(renderer.renderToString(app));
//# sourceMappingURL=main.js.map