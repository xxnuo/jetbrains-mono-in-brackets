define(function (require, exports, module) {
    "use strict";

    var ExtensionUtils = brackets.getModule("utils/ExtensionUtils");

    ExtensionUtils.addEmbeddedStyleSheet(`
html, body, input, button, select, textarea, .CodeMirror {
  font-family:'JetBrains Mono','LXGW WenKai GB Screen R','Segoe UI Emoji' !important;
}
:root {
  --sansFontFamily: 'JetBrains Mono','LXGW WenKai GB Screen R','Segoe UI Emoji' !important;
  --font-family-sans-serif: 'JetBrains Mono','LXGW WenKai GB Screen R','Segoe UI Emoji' !important;
  --font-family-monospace: 'JetBrains Mono','LXGW WenKai GB Screen R','Segoe UI Emoji' !important;
}
`);
});
