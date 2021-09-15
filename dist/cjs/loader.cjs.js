'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-2689961f.js');

/*
 Stencil Client Patch Esm v2.5.2 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["m-universal-header.cjs",[[1,"m-universal-header",{"open":[32],"error":[32],"content":[32]},[[0,"focusout","close"],[8,"keydown","handleKeydown"],[4,"click","handleClick"]]]]],["m-logo.cjs",[[0,"m-logo",{"variant":[1]}]]],["m-website-header.cjs",[[1,"m-website-header",{"name":[513],"to":[513],"variant":[1]}]]],["m-chat.cjs",[[1,"m-chat",{"open":[32],"online":[32]}]]],["m-icon.cjs",[[0,"m-icon",{"name":[1]}]]],["m-website-alerts.cjs",[[1,"m-website-alerts",{"status":[32],"alerts":[32]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
