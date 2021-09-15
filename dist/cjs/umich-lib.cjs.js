'use strict';

const index = require('./index-2689961f.js');

/*
 Stencil Client Patch Browser v2.5.2 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('umich-lib.cjs.js', document.baseURI).href));
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return index.promiseResolve(opts);
};

patchBrowser().then(options => {
  return index.bootstrapLazy([["m-universal-header.cjs",[[1,"m-universal-header",{"open":[32],"error":[32],"content":[32]},[[0,"focusout","close"],[8,"keydown","handleKeydown"],[4,"click","handleClick"]]]]],["m-logo.cjs",[[0,"m-logo",{"variant":[1]}]]],["m-website-header.cjs",[[1,"m-website-header",{"name":[513],"to":[513],"variant":[1]}]]],["m-chat.cjs",[[1,"m-chat",{"open":[32],"online":[32]}]]],["m-icon.cjs",[[0,"m-icon",{"name":[1]}]]],["m-website-alerts.cjs",[[1,"m-website-alerts",{"status":[32],"alerts":[32]}]]]], options);
});
