'use strict';

const index = require('./index-e68a8c71.js');

/*
 Stencil Client Patch Browser v2.6.0 | MIT Licensed | https://stenciljs.com
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
  return index.bootstrapLazy([["m-chat_6.cjs",[[1,"m-universal-header",{"open":[32],"error":[32],"content":[32]},[[0,"focusout","close"],[8,"keydown","handleKeydown"],[4,"click","handleClick"]]],[1,"m-website-header",{"name":[513],"to":[513],"variant":[1]}],[1,"m-chat",{"open":[32],"online":[32]}],[1,"m-website-alerts",{"status":[32],"alerts":[32]}],[0,"m-logo",{"variant":[1]}],[0,"m-icon",{"name":[1]}]]]], options);
});
