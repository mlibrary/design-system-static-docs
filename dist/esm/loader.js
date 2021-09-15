import { p as promiseResolve, b as bootstrapLazy } from './index-202ea9c3.js';

/*
 Stencil Client Patch Esm v2.5.2 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["m-universal-header",[[1,"m-universal-header",{"open":[32],"error":[32],"content":[32]},[[0,"focusout","close"],[8,"keydown","handleKeydown"],[4,"click","handleClick"]]]]],["m-logo",[[0,"m-logo",{"variant":[1]}]]],["m-website-header",[[1,"m-website-header",{"name":[513],"to":[513],"variant":[1]}]]],["m-chat",[[1,"m-chat",{"open":[32],"online":[32]}]]],["m-icon",[[0,"m-icon",{"name":[1]}]]],["m-website-alerts",[[1,"m-website-alerts",{"status":[32],"alerts":[32]}]]]], options);
  });
};

export { defineCustomElements };
