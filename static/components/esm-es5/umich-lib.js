import{p as promiseResolve,b as bootstrapLazy}from"./index-86bb92b4.js";var patchBrowser=function(){var e=import.meta.url;var r={};if(e!==""){r.resourcesUrl=new URL(".",e).href}return promiseResolve(r)};patchBrowser().then((function(e){return bootstrapLazy([["m-chat_6",[[1,"m-universal-header",{open:[32],error:[32],content:[32]},[[0,"focusout","close"],[8,"keydown","handleKeydown"],[4,"click","handleClick"]]],[1,"m-website-header",{name:[513],to:[513],variant:[1]}],[1,"m-chat",{open:[32],online:[32]}],[1,"m-website-alerts",{status:[32],alerts:[32]}],[0,"m-logo",{variant:[1]}],[0,"m-icon",{name:[1]}]]]],e)}));