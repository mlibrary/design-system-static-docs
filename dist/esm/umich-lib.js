import { p as promiseResolve, b as bootstrapLazy } from './index-202ea9c3.js';

/*
 Stencil Client Patch Browser v2.5.2 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = import.meta.url;
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return promiseResolve(opts);
};

patchBrowser().then(options => {
  return bootstrapLazy([["m-universal-header",[[1,"m-universal-header",{"open":[32],"error":[32],"content":[32]},[[0,"focusout","close"],[8,"keydown","handleKeydown"],[4,"click","handleClick"]]]]],["m-logo",[[0,"m-logo",{"variant":[1]}]]],["m-website-header",[[1,"m-website-header",{"name":[513],"to":[513],"variant":[1]}]]],["m-chat",[[1,"m-chat",{"open":[32],"online":[32]}]]],["m-icon",[[0,"m-icon",{"name":[1]}]]],["m-website-alerts",[[1,"m-website-alerts",{"status":[32],"alerts":[32]}]]]], options);
});
