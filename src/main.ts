import Vue from "vue";
import * as SSR from "vue-server-renderer";

let renderer = SSR.createRenderer();

let app = new Vue({
  template: "<h1>Hello, World!</h1>"
});

console.log(renderer.renderToString(app));
