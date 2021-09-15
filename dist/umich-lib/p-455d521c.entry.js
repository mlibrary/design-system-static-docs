import{r as a,h as r}from"./p-3b137c6d.js";var e,o=(function(a){
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){var r={}.hasOwnProperty;function e(){for(var a=[],o=0;o<arguments.length;o++){var i=arguments[o];if(i){var t=typeof i;if("string"===t||"number"===t)a.push(i);else if(Array.isArray(i)){if(i.length){var l=e.apply(null,i);l&&a.push(l)}}else if("object"===t)if(i.toString===Object.prototype.toString)for(var c in i)r.call(i,c)&&i[c]&&a.push(c);else a.push(i.toString())}}return a.join(" ")}a.exports?(e.default=e,a.exports=e):window.classNames=e}()}(e={path:undefined,exports:{},require:function(){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}}),e.exports);const i=class{constructor(r){a(this,r),this.open=!1,this.online=!0}toggle(){this.open=!this.open}isOnline(){fetch("https://libraryh3lp-com.proxy.lib.umich.edu/presence/jid/umlibraryaskalibrarian/chat.libraryh3lp.com/text").then((a=>a.text())).then((a=>{this.online="available"===a})).catch((a=>{console.warn("Unable to check Chat online status.",a)}))}componentWillLoad(){this.isOnline(),setInterval(this.isOnline,6e4)}render(){return r("div",{class:o("m-chat",{"m-chat--open":this.open})},r("button",{class:"m-chat__button","aria-expanded":String(this.open),onClick:()=>this.toggle()},r(t,null),r("span",{class:"m-chat__label"},"Ask a Librarian"),r("div",{"aria-hidden":"true",class:"m-chat__icons"},this.open?r("svg",{width:"24px",height:"24px",viewBox:"0 0 24 24",class:"m-chat__close-icon","aria-hidden":"true",focusable:"false"},r("path",{d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"})):r("svg",{width:"24px",height:"24px",viewBox:"0 0 24 24",class:"m-chat__open-icon","aria-hidden":"true",focusable:"false"},r("path",{d:"M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"})))),r("div",{class:"m-chat__window"},this.online?r("iframe",{class:"m-chat__iframe",title:"Ask a Librarian",src:"https://libraryh3lp.com/chat/umlibraryaskalibrarian@chat.libraryh3lp.com?skin=27279"}):r("div",{class:"m-chat__offline"},r("p",{class:"m-chat__offline-msg"},"We're ",r("strong",null,"offline")," right now, but you can"," ",r("a",{href:"https://www.lib.umich.edu/ask-librarian"},"view our hours and more ways to get in touch"),"."))))}};function t(){return r("svg",{height:"24",viewBox:"0 0 24 24",width:"24",class:"m-chat__svg","aria-hidden":"false",focusable:"false"},r("path",{d:"m15.65 15.92v1.88a1.44 1.44 0 0 1 -.43 1 1.37 1.37 0 0 1 -1 .44h-10.3l-2.92 2.96v-13.2a1.39 1.39 0 0 1 .42-1 1.36 1.36 0 0 1 1-.43h5.93v6.9a1.4 1.4 0 0 0 .43 1 1.33 1.33 0 0 0 1 .44z",fill:"#ffcc06"}),r("path",{d:"m21.53 4.24a1.45 1.45 0 0 1 1.47 1.45v13.2l-2.95-2.89h-10.28a1.37 1.37 0 0 1 -1-.44 1.47 1.47 0 0 1 -.42-1v-8.87a1.43 1.43 0 0 1 .42-1 1.39 1.39 0 0 1 1-.42z",fill:"#10284b"}))}i.style=":root{--color-blue-100:rgb(247, 248, 249);--color-blue-200:rgb(178, 190, 201);--color-blue-300:rgb(76, 103, 129);--color-blue-400:rgb(0, 39, 76);--color-blue-500:rgb(0, 19, 36);--color-maize-100:rgb(255, 249, 230);--color-maize-200:rgb(255, 234, 155);--color-maize-300:rgb(255, 218, 80);--color-maize-400:rgb(255, 203, 5);--color-maize-500:rgb(234, 186, 2);--color-neutral-100:rgb(229, 233, 237);--color-neutral-200:rgb(138, 150, 161);--color-neutral-300:rgb(99, 115, 129);--color-neutral-400:rgb(33, 43, 54);--color-neutral-500:rgb(6, 8, 10);--color-teal-100:rgb(233, 242, 245);--color-teal-200:rgb(167, 205, 219);--color-teal-300:rgb(101, 168, 191);--color-teal-400:rgb(29, 116, 145);--color-teal-500:rgb(16, 102, 132);--color-orange-100:rgb(255, 241, 235);--color-orange-200:rgb(255, 184, 153);--color-orange-300:rgb(255, 138, 88);--color-orange-400:rgb(242, 95, 31);--color-orange-500:rgb(199, 78, 26);--color-pink-100:rgb(252, 235, 235);--color-pink-200:rgb(242, 157, 157);--color-pink-300:rgb(236, 105, 105);--color-pink-400:rgb(217, 56, 56);--color-pink-500:rgb(191, 50, 50);--color-indigo-100:rgb(238, 241, 249);--color-indigo-200:rgb(170, 185, 227);--color-indigo-300:rgb(124, 147, 212);--color-indigo-400:rgb(80, 111, 197);--color-indigo-500:rgb(39, 67, 145);--color-green-100:rgb(234, 248, 238);--color-green-200:rgb(150, 219, 170);--color-green-300:rgb(87, 188, 117);--color-green-400:rgb(32, 168, 72);--color-green-500:rgb(25, 133, 57);--font-base-family:'Muli', sans-serif;--font-second-family:'Crimson Text', serif;--bold:700;--regular:400;--semibold:600;--line-height-default:1.5;--line-height-heading:1.25;--line-height-page-heading:1.125;--text-base-size:16px;--text-xxx-large:3.5rem;--text-xx-large:2.25rem;--text-x-large:2rem;--text-large:1.75rem;--text-medium:1.5rem;--text-small:1.125rem;--text-x-small:1.125rem;--text-xx-small:1rem;--text-xxx-small:0.875rem;--space-xxx-small:2px;--space-xx-small:4px;--space-x-small:8px;--space-small:12px;--space-medium:16px;--space-large:24px;--space-x-large:32px;--space-xx-large:40px;--space-xxx-large:48px;--space-xxxx-large:64px;--space-xxxxx-large:96px;--z-space-small:rgba(0, 0, 0, 0.2) 0px 2px 8px 0px;--z-space-medium:rgba(0, 0, 0, 0.2) 0px 2px 16px 0px;--opacity-75:0.75;--opacity-50:0.50;--opacity-30:0.30;--radius-default:4px;--line-length:60ch}:host{--chat-width:calc(var(--space-medium) * 20);font-size:16px}.m-chat{position:fixed;right:4vw;bottom:0;border-radius:2px 2px 0 0;border-top:solid 2px var(--color-maize-400);box-shadow:var(--z-space-medium);width:calc(var(--space-medium) * 14);transition:width 0.25s;max-width:calc(100% - 8vw);background:white;z-index:10000}.m-chat.m-chat--open{width:var(--chat-width)}.m-chat__button{border:none;background:none;outline:0;font-size:var(--font-base-size);color:var(--color-neutral-400);text-align:left;height:39px;width:100%;padding:0 var(--space-medium);display:flex;align-items:center;cursor:pointer;border-radius:2px 2px 0 0;margin-bottom:3px}.m-chat__svg{width:32px;height:32px;flex-shrink:0}.m-chat__icons{line-height:0}.m-chat__button:focus{outline:none;box-shadow:0 0 0 2px var(--color-maize-400), 0 0 0 3px var(--color-neutral-400)}.m-chat__iframe{width:100%;height:100%;border:none}@media only screen and (min-width: 600px){.m-chat__iframe{width:var(--chat-width)}}.m-chat__label{font-family:var(--font-base-family);display:inline-block;width:100%;padding:0 var(--space-small)}.m-chat__button:hover .m-chat__label{text-decoration:underline}.m-chat__window{background:white;max-height:90vh;height:0;opacity:0;overflow:hidden;transition:height 0.25s, opacity 0.25s}.m-chat--open .m-chat__window{opacity:1;height:calc(var(--space-medium) * 24)}.m-chat__offline{line-height:1.5;font-family:var(--font-base-family);padding:0 var(--space-medium)}.m-chat__offline strong{font-weight:700}.m-chat__offline a,.m-chat__offline a:hover{color:var(--color-teal-400)}.m-chat__offline-msg{border-radius:4px;background:var(--color-blue-100);padding:var(--space-medium)}";export{i as m_chat}