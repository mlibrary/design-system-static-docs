var __extends=this&&this.__extends||function(){var e=function(t,r){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r))e[r]=t[r]};return e(t,r)};return function(t,r){if(typeof r!=="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");e(t,r);function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}();var __awaiter=this&&this.__awaiter||function(e,t,r,n){function a(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,i){function o(e){try{l(n.next(e))}catch(e){i(e)}}function s(e){try{l(n["throw"](e))}catch(e){i(e)}}function l(e){e.done?r(e.value):a(e.value).then(o,s)}l((n=n.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var r={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,a,i,o;return o={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function s(e){return function(t){return l([e,t])}}function l(o){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,a&&(i=o[0]&2?a["return"]:o[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,o[1])).done)return i;if(a=0,i)o=[o[0]&2,i.value];switch(o[0]){case 0:case 1:i=o;break;case 4:r.label++;return{value:o[1],done:false};case 5:r.label++;a=o[1];o=[0];continue;case 7:o=r.ops.pop();r.trys.pop();continue;default:if(!(i=r.trys,i=i.length>0&&i[i.length-1])&&(o[0]===6||o[0]===2)){r=0;continue}if(o[0]===3&&(!i||o[1]>i[0]&&o[1]<i[3])){r.label=o[1];break}if(o[0]===6&&r.label<i[1]){r.label=i[1];i=o;break}if(i&&r.label<i[2]){r.label=i[2];r.ops.push(o);break}if(i[2])r.ops.pop();r.trys.pop();continue}o=t.call(e,r)}catch(e){o=[6,e];a=0}finally{n=i=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};var __spreadArray=this&&this.__spreadArray||function(e,t){for(var r=0,n=t.length,a=e.length;r<n;r++,a++)e[a]=t[r];return e};var NAMESPACE="umich-lib";var scopeId;var hostTagName;var isSvgMode=false;var queuePending=false;var win=typeof window!=="undefined"?window:{};var doc=win.document||{head:{}};var plt={$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,t,r,n){return e.addEventListener(t,r,n)},rel:function(e,t,r,n){return e.removeEventListener(t,r,n)},ce:function(e,t){return new CustomEvent(e,t)}};var supportsShadow=true;var promiseResolve=function(e){return Promise.resolve(e)};var supportsConstructibleStylesheets=function(){try{new CSSStyleSheet;return typeof(new CSSStyleSheet).replace==="function"}catch(e){}return false}();var addHostEventListeners=function(e,t,r,n){if(r){r.map((function(r){var n=r[0],a=r[1],i=r[2];var o=getHostListenerTarget(e,n);var s=hostListenerProxy(t,i);var l=hostListenerOpts(n);plt.ael(o,a,s,l);(t.$rmListeners$=t.$rmListeners$||[]).push((function(){return plt.rel(o,a,s,l)}))}))}};var hostListenerProxy=function(e,t){return function(r){try{{if(e.$flags$&256){e.$lazyInstance$[t](r)}else{(e.$queuedListeners$=e.$queuedListeners$||[]).push([t,r])}}}catch(e){consoleError(e)}}};var getHostListenerTarget=function(e,t){if(t&4)return doc;if(t&8)return win;return e};var hostListenerOpts=function(e){return(e&2)!==0};var CONTENT_REF_ID="r";var ORG_LOCATION_ID="o";var SLOT_NODE_ID="s";var TEXT_NODE_ID="t";var HYDRATE_ID="s-id";var HYDRATED_STYLE_ID="sty-id";var HYDRATE_CHILD_ID="c-id";var HYDRATED_CSS="{visibility:hidden}.hydrated{visibility:inherit}";var createTime=function(e,t){if(t===void 0){t=""}{return function(){return}}};var uniqueTime=function(e,t){{return function(){return}}};var rootAppliedStyles=new WeakMap;var registerStyle=function(e,t,r){var n=styles.get(e);if(supportsConstructibleStylesheets&&r){n=n||new CSSStyleSheet;n.replace(t)}else{n=t}styles.set(e,n)};var addStyle=function(e,t,r,n){var a=getScopeId(t);var i=styles.get(a);e=e.nodeType===11?e:doc;if(i){if(typeof i==="string"){e=e.head||e;var o=rootAppliedStyles.get(e);var s=void 0;if(!o){rootAppliedStyles.set(e,o=new Set)}if(!o.has(a)){if(e.host&&(s=e.querySelector("["+HYDRATED_STYLE_ID+'="'+a+'"]'))){s.innerHTML=i}else{{s=doc.createElement("style");s.innerHTML=i}e.insertBefore(s,e.querySelector("link"))}if(o){o.add(a)}}}else if(!e.adoptedStyleSheets.includes(i)){e.adoptedStyleSheets=__spreadArray(__spreadArray([],e.adoptedStyleSheets),[i])}}return a};var attachStyles=function(e){var t=e.$cmpMeta$;var r=e.$hostElement$;var n=t.$flags$;var a=createTime("attachStyles",t.$tagName$);var i=addStyle(r.shadowRoot?r.shadowRoot:r.getRootNode(),t);if(n&10){r["s-sc"]=i;r.classList.add(i+"-h")}a()};var getScopeId=function(e,t){return"sc-"+e.$tagName$};var convertScopedToShadow=function(e){return e.replace(/\/\*!@([^\/]+)\*\/[^\{]+\{/g,"$1{")};var EMPTY_OBJ={};var SVG_NS="http://www.w3.org/2000/svg";var HTML_NS="http://www.w3.org/1999/xhtml";var isDef=function(e){return e!=null};var isComplexType=function(e){e=typeof e;return e==="object"||e==="function"};var h=function(e,t){var r=[];for(var n=2;n<arguments.length;n++){r[n-2]=arguments[n]}var a=null;var i=false;var o=false;var s=[];var l=function(t){for(var r=0;r<t.length;r++){a=t[r];if(Array.isArray(a)){l(a)}else if(a!=null&&typeof a!=="boolean"){if(i=typeof e!=="function"&&!isComplexType(a)){a=String(a)}if(i&&o){s[s.length-1].$text$+=a}else{s.push(i?newVNode(null,a):a)}o=i}}};l(r);if(t){{var $=t.className||t.class;if($){t.class=typeof $!=="object"?$:Object.keys($).filter((function(e){return $[e]})).join(" ")}}}if(typeof e==="function"){return e(t===null?{}:t,s,vdomFnUtils)}var u=newVNode(e,null);u.$attrs$=t;if(s.length>0){u.$children$=s}return u};var newVNode=function(e,t){var r={$flags$:0,$tag$:e,$text$:t,$elm$:null,$children$:null};{r.$attrs$=null}return r};var Host={};var isHost=function(e){return e&&e.$tag$===Host};var vdomFnUtils={forEach:function(e,t){return e.map(convertToPublic).forEach(t)},map:function(e,t){return e.map(convertToPublic).map(t).map(convertToPrivate)}};var convertToPublic=function(e){return{vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}};var convertToPrivate=function(e){if(typeof e.vtag==="function"){var t=Object.assign({},e.vattrs);if(e.vkey){t.key=e.vkey}if(e.vname){t.name=e.vname}return h.apply(void 0,__spreadArray([e.vtag,t],e.vchildren||[]))}var r=newVNode(e.vtag,e.vtext);r.$attrs$=e.vattrs;r.$children$=e.vchildren;r.$key$=e.vkey;r.$name$=e.vname;return r};var setAccessor=function(e,t,r,n,a,i){if(r!==n){var o=isMemberInElement(e,t);var s=t.toLowerCase();if(t==="class"){var l=e.classList;var $=parseClassList(r);var u=parseClassList(n);l.remove.apply(l,$.filter((function(e){return e&&!u.includes(e)})));l.add.apply(l,u.filter((function(e){return e&&!$.includes(e)})))}else if(t==="ref"){if(n){n(e)}}else if(!o&&t[0]==="o"&&t[1]==="n"){if(t[2]==="-"){t=t.slice(3)}else if(isMemberInElement(win,s)){t=s.slice(2)}else{t=s[2]+t.slice(3)}if(r){plt.rel(e,t,r,false)}if(n){plt.ael(e,t,n,false)}}else{var c=isComplexType(n);if((o||c&&n!==null)&&!a){try{if(!e.tagName.includes("-")){var f=n==null?"":n;if(t==="list"){o=false}else if(r==null||e[t]!=f){e[t]=f}}else{e[t]=n}}catch(e){}}if(n==null||n===false){if(n!==false||e.getAttribute(t)===""){{e.removeAttribute(t)}}}else if((!o||i&4||a)&&!c){n=n===true?"":n;{e.setAttribute(t,n)}}}}};var parseClassListRegex=/\s/;var parseClassList=function(e){return!e?[]:e.split(parseClassListRegex)};var updateElement=function(e,t,r,n){var a=t.$elm$.nodeType===11&&t.$elm$.host?t.$elm$.host:t.$elm$;var i=e&&e.$attrs$||EMPTY_OBJ;var o=t.$attrs$||EMPTY_OBJ;{for(n in i){if(!(n in o)){setAccessor(a,n,i[n],undefined,r,t.$flags$)}}}for(n in o){setAccessor(a,n,i[n],o[n],r,t.$flags$)}};var createElm=function(e,t,r,n){var a=t.$children$[r];var i=0;var o;var s;if(a.$text$!==null){o=a.$elm$=doc.createTextNode(a.$text$)}else{if(!isSvgMode){isSvgMode=a.$tag$==="svg"}o=a.$elm$=doc.createElementNS(isSvgMode?SVG_NS:HTML_NS,a.$tag$);if(isSvgMode&&a.$tag$==="foreignObject"){isSvgMode=false}{updateElement(null,a,isSvgMode)}if(isDef(scopeId)&&o["s-si"]!==scopeId){o.classList.add(o["s-si"]=scopeId)}if(a.$children$){for(i=0;i<a.$children$.length;++i){s=createElm(e,a,i);if(s){o.appendChild(s)}}}{if(a.$tag$==="svg"){isSvgMode=false}else if(o.tagName==="foreignObject"){isSvgMode=true}}}return o};var addVnodes=function(e,t,r,n,a,i){var o=e;var s;if(o.shadowRoot&&o.tagName===hostTagName){o=o.shadowRoot}for(;a<=i;++a){if(n[a]){s=createElm(null,r,a);if(s){n[a].$elm$=s;o.insertBefore(s,t)}}}};var removeVnodes=function(e,t,r,n,a){for(;t<=r;++t){if(n=e[t]){a=n.$elm$;callNodeRefs(n);a.remove()}}};var updateChildren=function(e,t,r,n){var a=0;var i=0;var o=t.length-1;var s=t[0];var l=t[o];var $=n.length-1;var u=n[0];var c=n[$];var f;while(a<=o&&i<=$){if(s==null){s=t[++a]}else if(l==null){l=t[--o]}else if(u==null){u=n[++i]}else if(c==null){c=n[--$]}else if(isSameVnode(s,u)){patch(s,u);s=t[++a];u=n[++i]}else if(isSameVnode(l,c)){patch(l,c);l=t[--o];c=n[--$]}else if(isSameVnode(s,c)){patch(s,c);e.insertBefore(s.$elm$,l.$elm$.nextSibling);s=t[++a];c=n[--$]}else if(isSameVnode(l,u)){patch(l,u);e.insertBefore(l.$elm$,s.$elm$);l=t[--o];u=n[++i]}else{{f=createElm(t&&t[i],r,i);u=n[++i]}if(f){{s.$elm$.parentNode.insertBefore(f,s.$elm$)}}}}if(a>o){addVnodes(e,n[$+1]==null?null:n[$+1].$elm$,r,n,i,$)}else if(i>$){removeVnodes(t,a,o)}};var isSameVnode=function(e,t){if(e.$tag$===t.$tag$){return true}return false};var patch=function(e,t){var r=t.$elm$=e.$elm$;var n=e.$children$;var a=t.$children$;var i=t.$tag$;var o=t.$text$;if(o===null){{isSvgMode=i==="svg"?true:i==="foreignObject"?false:isSvgMode}{if(i==="slot");else{updateElement(e,t,isSvgMode)}}if(n!==null&&a!==null){updateChildren(r,n,t,a)}else if(a!==null){if(e.$text$!==null){r.textContent=""}addVnodes(r,null,t,a,0,a.length-1)}else if(n!==null){removeVnodes(n,0,n.length-1)}if(isSvgMode&&i==="svg"){isSvgMode=false}}else if(e.$text$!==o){r.data=o}};var callNodeRefs=function(e){{e.$attrs$&&e.$attrs$.ref&&e.$attrs$.ref(null);e.$children$&&e.$children$.map(callNodeRefs)}};var renderVdom=function(e,t){var r=e.$hostElement$;var n=e.$cmpMeta$;var a=e.$vnode$||newVNode(null,null);var i=isHost(t)?t:h(null,null,t);hostTagName=r.tagName;if(n.$attrsToReflect$){i.$attrs$=i.$attrs$||{};n.$attrsToReflect$.map((function(e){var t=e[0],n=e[1];return i.$attrs$[n]=r[t]}))}i.$tag$=null;i.$flags$|=4;e.$vnode$=i;i.$elm$=a.$elm$=r.shadowRoot||r;{scopeId=r["s-sc"]}patch(a,i)};var emitEvent=function(e,t,r){var n=plt.ce(t,r);e.dispatchEvent(n);return n};var attachToAncestor=function(e,t){if(t&&!e.$onRenderResolve$&&t["s-p"]){t["s-p"].push(new Promise((function(t){return e.$onRenderResolve$=t})))}};var scheduleUpdate=function(e,t){{e.$flags$|=16}if(e.$flags$&4){e.$flags$|=512;return}attachToAncestor(e,e.$ancestorComponent$);var r=function(){return dispatchHooks(e,t)};return writeTask(r)};var dispatchHooks=function(e,t){var r=createTime("scheduleUpdate",e.$cmpMeta$.$tagName$);var n=e.$lazyInstance$;var a;if(t){{e.$flags$|=256;if(e.$queuedListeners$){e.$queuedListeners$.map((function(e){var t=e[0],r=e[1];return safeCall(n,t,r)}));e.$queuedListeners$=null}}{a=safeCall(n,"componentWillLoad")}}r();return then(a,(function(){return updateComponent(e,n,t)}))};var updateComponent=function(e,t,r){return __awaiter(void 0,void 0,void 0,(function(){var n,a,i,o,s,l;return __generator(this,(function($){n=e.$hostElement$;a=createTime("update",e.$cmpMeta$.$tagName$);i=n["s-rc"];if(r){attachStyles(e)}o=createTime("render",e.$cmpMeta$.$tagName$);{callRender(e,t)}if(i){i.map((function(e){return e()}));n["s-rc"]=undefined}o();a();{s=n["s-p"];l=function(){return postUpdateComponent(e)};if(s.length===0){l()}else{Promise.all(s).then(l);e.$flags$|=4;s.length=0}}return[2]}))}))};var callRender=function(e,t,r){try{t=t.render();{e.$flags$&=~16}{e.$flags$|=2}{{{renderVdom(e,t)}}}}catch(t){consoleError(t,e.$hostElement$)}return null};var postUpdateComponent=function(e){var t=e.$cmpMeta$.$tagName$;var r=e.$hostElement$;var n=createTime("postUpdate",t);var a=e.$lazyInstance$;var i=e.$ancestorComponent$;if(!(e.$flags$&64)){e.$flags$|=64;{addHydratedFlag(r)}{safeCall(a,"componentDidLoad")}n();{e.$onReadyResolve$(r);if(!i){appDidLoad()}}}else{n()}{if(e.$onRenderResolve$){e.$onRenderResolve$();e.$onRenderResolve$=undefined}if(e.$flags$&512){nextTick((function(){return scheduleUpdate(e,false)}))}e.$flags$&=~(4|512)}};var appDidLoad=function(e){{addHydratedFlag(doc.documentElement)}nextTick((function(){return emitEvent(win,"appload",{detail:{namespace:NAMESPACE}})}))};var safeCall=function(e,t,r){if(e&&e[t]){try{return e[t](r)}catch(e){consoleError(e)}}return undefined};var then=function(e,t){return e&&e.then?e.then(t):t()};var addHydratedFlag=function(e){return e.classList.add("hydrated")};var initializeClientHydrate=function(e,t,r,n){var a=createTime("hydrateClient",t);var i=e.shadowRoot;var o=[];var s=[];var l=i?[]:null;var $=n.$vnode$=newVNode(t,null);if(!plt.$orgLocNodes$){initializeDocumentHydrate(doc.body,plt.$orgLocNodes$=new Map)}e[HYDRATE_ID]=r;e.removeAttribute(HYDRATE_ID);clientHydrate($,o,s,l,e,e,r);o.map((function(e){var r=e.$hostId$+"."+e.$nodeId$;var n=plt.$orgLocNodes$.get(r);var a=e.$elm$;if(n&&supportsShadow&&n["s-en"]===""){n.parentNode.insertBefore(a,n.nextSibling)}if(!i){a["s-hn"]=t;if(n){a["s-ol"]=n;a["s-ol"]["s-nr"]=a}}plt.$orgLocNodes$.delete(r)}));if(i){l.map((function(e){if(e){i.appendChild(e)}}))}a()};var clientHydrate=function(e,t,r,n,a,i,o){var s;var l;var $;var u;if(i.nodeType===1){s=i.getAttribute(HYDRATE_CHILD_ID);if(s){l=s.split(".");if(l[0]===o||l[0]==="0"){$={$flags$:0,$hostId$:l[0],$nodeId$:l[1],$depth$:l[2],$index$:l[3],$tag$:i.tagName.toLowerCase(),$elm$:i,$attrs$:null,$children$:null,$key$:null,$name$:null,$text$:null};t.push($);i.removeAttribute(HYDRATE_CHILD_ID);if(!e.$children$){e.$children$=[]}e.$children$[$.$index$]=$;e=$;if(n&&$.$depth$==="0"){n[$.$index$]=$.$elm$}}}for(u=i.childNodes.length-1;u>=0;u--){clientHydrate(e,t,r,n,a,i.childNodes[u],o)}if(i.shadowRoot){for(u=i.shadowRoot.childNodes.length-1;u>=0;u--){clientHydrate(e,t,r,n,a,i.shadowRoot.childNodes[u],o)}}}else if(i.nodeType===8){l=i.nodeValue.split(".");if(l[1]===o||l[1]==="0"){s=l[0];$={$flags$:0,$hostId$:l[1],$nodeId$:l[2],$depth$:l[3],$index$:l[4],$elm$:i,$attrs$:null,$children$:null,$key$:null,$name$:null,$tag$:null,$text$:null};if(s===TEXT_NODE_ID){$.$elm$=i.nextSibling;if($.$elm$&&$.$elm$.nodeType===3){$.$text$=$.$elm$.textContent;t.push($);i.remove();if(!e.$children$){e.$children$=[]}e.$children$[$.$index$]=$;if(n&&$.$depth$==="0"){n[$.$index$]=$.$elm$}}}else if($.$hostId$===o){if(s===SLOT_NODE_ID){$.$tag$="slot";if(l[5]){i["s-sn"]=$.$name$=l[5]}else{i["s-sn"]=""}i["s-sr"]=true;if(n){$.$elm$=doc.createElement($.$tag$);if($.$name$){$.$elm$.setAttribute("name",$.$name$)}i.parentNode.insertBefore($.$elm$,i);i.remove();if($.$depth$==="0"){n[$.$index$]=$.$elm$}}r.push($);if(!e.$children$){e.$children$=[]}e.$children$[$.$index$]=$}else if(s===CONTENT_REF_ID){if(n){i.remove()}}}}}else if(e&&e.$tag$==="style"){var c=newVNode(null,i.textContent);c.$elm$=i;c.$index$="0";e.$children$=[c]}};var initializeDocumentHydrate=function(e,t){if(e.nodeType===1){var r=0;for(;r<e.childNodes.length;r++){initializeDocumentHydrate(e.childNodes[r],t)}if(e.shadowRoot){for(r=0;r<e.shadowRoot.childNodes.length;r++){initializeDocumentHydrate(e.shadowRoot.childNodes[r],t)}}}else if(e.nodeType===8){var n=e.nodeValue.split(".");if(n[0]===ORG_LOCATION_ID){t.set(n[1]+"."+n[2],e);e.nodeValue="";e["s-en"]=n[3]}}};var parsePropertyValue=function(e,t){if(e!=null&&!isComplexType(e)){if(t&1){return String(e)}return e}return e};var getValue=function(e,t){return getHostRef(e).$instanceValues$.get(t)};var setValue=function(e,t,r,n){var a=getHostRef(e);var i=a.$instanceValues$.get(t);var o=a.$flags$;var s=a.$lazyInstance$;r=parsePropertyValue(r,n.$members$[t][0]);if((!(o&8)||i===undefined)&&r!==i){a.$instanceValues$.set(t,r);if(s){if((o&(2|16))===2){scheduleUpdate(a,false)}}}};var proxyComponent=function(e,t,r){if(t.$members$){var n=Object.entries(t.$members$);var a=e.prototype;n.map((function(e){var n=e[0],i=e[1][0];if(i&31||r&2&&i&32){Object.defineProperty(a,n,{get:function(){return getValue(this,n)},set:function(e){setValue(this,n,e,t)},configurable:true,enumerable:true})}}));if(r&1){var i=new Map;a.attributeChangedCallback=function(e,t,r){var n=this;plt.jmp((function(){var t=i.get(e);n[t]=r===null&&typeof n[t]==="boolean"?false:r}))};e.observedAttributes=n.filter((function(e){var t=e[0],r=e[1];return r[0]&15})).map((function(e){var r=e[0],n=e[1];var a=n[1]||r;i.set(a,r);if(n[0]&512){t.$attrsToReflect$.push([r,a])}return a}))}}return e};var initializeComponent=function(e,t,r,n,a){return __awaiter(void 0,void 0,void 0,(function(){var e,n,i,o,s,l,$;return __generator(this,(function(u){switch(u.label){case 0:if(!((t.$flags$&32)===0))return[3,3];t.$flags$|=32;a=loadModule(r);if(!a.then)return[3,2];e=uniqueTime();return[4,a];case 1:a=u.sent();e();u.label=2;case 2:if(!a.isProxied){proxyComponent(a,r,2);a.isProxied=true}n=createTime("createInstance",r.$tagName$);{t.$flags$|=8}try{new a(t)}catch(e){consoleError(e)}{t.$flags$&=~8}n();if(a.style){i=a.style;o=getScopeId(r);if(!styles.has(o)){s=createTime("registerStyles",r.$tagName$);registerStyle(o,i,!!(r.$flags$&1));s()}}u.label=3;case 3:l=t.$ancestorComponent$;$=function(){return scheduleUpdate(t,true)};if(l&&l["s-rc"]){l["s-rc"].push($)}else{$()}return[2]}}))}))};var connectedCallback=function(e){if((plt.$flags$&1)===0){var t=getHostRef(e);var r=t.$cmpMeta$;var n=createTime("connectedCallback",r.$tagName$);if(!(t.$flags$&1)){t.$flags$|=1;var a=void 0;{a=e.getAttribute(HYDRATE_ID);if(a){if(r.$flags$&1){var i=addStyle(e.shadowRoot,r);e.classList.remove(i+"-h",i+"-s")}initializeClientHydrate(e,r.$tagName$,a,t)}}{var o=e;while(o=o.parentNode||o.host){if(o.nodeType===1&&o.hasAttribute("s-id")&&o["s-p"]||o["s-p"]){attachToAncestor(t,t.$ancestorComponent$=o);break}}}if(r.$members$){Object.entries(r.$members$).map((function(t){var r=t[0],n=t[1][0];if(n&31&&e.hasOwnProperty(r)){var a=e[r];delete e[r];e[r]=a}}))}{initializeComponent(e,t,r)}}else{addHostEventListeners(e,t,r.$listeners$)}n()}};var disconnectedCallback=function(e){if((plt.$flags$&1)===0){var t=getHostRef(e);{if(t.$rmListeners$){t.$rmListeners$.map((function(e){return e()}));t.$rmListeners$=undefined}}}};var bootstrapLazy=function(e,t){if(t===void 0){t={}}var r=createTime();var n=[];var a=t.exclude||[];var i=win.customElements;var o=doc.head;var s=o.querySelector("meta[charset]");var l=doc.createElement("style");var $=[];var u=doc.querySelectorAll("["+HYDRATED_STYLE_ID+"]");var c;var f=true;var d=0;Object.assign(plt,t);plt.$resourcesUrl$=new URL(t.resourcesUrl||"./",doc.baseURI).href;{plt.$flags$|=2}{for(;d<u.length;d++){registerStyle(u[d].getAttribute(HYDRATED_STYLE_ID),convertScopedToShadow(u[d].innerHTML),true)}}e.map((function(e){return e[1].map((function(t){var r={$flags$:t[0],$tagName$:t[1],$members$:t[2],$listeners$:t[3]};{r.$members$=t[2]}{r.$listeners$=t[3]}{r.$attrsToReflect$=[]}var o=r.$tagName$;var s=function(e){__extends(t,e);function t(t){var n=e.call(this,t)||this;t=n;registerHost(t,r);if(r.$flags$&1){{{t.attachShadow({mode:"open"})}}}return n}t.prototype.connectedCallback=function(){var e=this;if(c){clearTimeout(c);c=null}if(f){$.push(this)}else{plt.jmp((function(){return connectedCallback(e)}))}};t.prototype.disconnectedCallback=function(){var e=this;plt.jmp((function(){return disconnectedCallback(e)}))};t.prototype.componentOnReady=function(){return getHostRef(this).$onReadyPromise$};return t}(HTMLElement);r.$lazyBundleId$=e[0];if(!a.includes(o)&&!i.get(o)){n.push(o);i.define(o,proxyComponent(s,r,1))}}))}));{l.innerHTML=n+HYDRATED_CSS;l.setAttribute("data-styles","");o.insertBefore(l,s?s.nextSibling:o.firstChild)}f=false;if($.length){$.map((function(e){return e.connectedCallback()}))}else{{plt.jmp((function(){return c=setTimeout(appDidLoad,30)}))}}r()};var hostRefs=new WeakMap;var getHostRef=function(e){return hostRefs.get(e)};var registerInstance=function(e,t){return hostRefs.set(t.$lazyInstance$=e,t)};var registerHost=function(e,t){var r={$flags$:0,$hostElement$:e,$cmpMeta$:t,$instanceValues$:new Map};{r.$onReadyPromise$=new Promise((function(e){return r.$onReadyResolve$=e}));e["s-p"]=[];e["s-rc"]=[]}addHostEventListeners(e,r,t.$listeners$);return hostRefs.set(e,r)};var isMemberInElement=function(e,t){return t in e};var consoleError=function(e,t){return(0,console.error)(e,t)};var cmpModules=new Map;var loadModule=function(e,t,r){var n=e.$tagName$.replace(/-/g,"_");var a=e.$lazyBundleId$;var i=cmpModules.get(a);if(i){return i[n]}return import("./"+a+".entry.js"+"").then((function(e){{cmpModules.set(a,e)}return e[n]}),consoleError)};var styles=new Map;var queueDomReads=[];var queueDomWrites=[];var queueTask=function(e,t){return function(r){e.push(r);if(!queuePending){queuePending=true;if(t&&plt.$flags$&4){nextTick(flush)}else{plt.raf(flush)}}}};var consume=function(e){for(var t=0;t<e.length;t++){try{e[t](performance.now())}catch(e){consoleError(e)}}e.length=0};var flush=function(){consume(queueDomReads);{consume(queueDomWrites);if(queuePending=queueDomReads.length>0){plt.raf(flush)}}};var nextTick=function(e){return promiseResolve().then(e)};var writeTask=queueTask(queueDomWrites,true);export{Host as H,bootstrapLazy as b,h,promiseResolve as p,registerInstance as r};