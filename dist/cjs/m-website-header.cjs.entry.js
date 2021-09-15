'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-2689961f.js');

const websiteHeaderCss = ".visually-hidden{border:0;clip:rect(0 0 0 0);height:auto;margin:0;overflow:hidden;padding:0;position:absolute;width:1px;white-space:nowrap}:host{font-family:var(--font-base-family);line-height:var(--line-height-default);font-size:16px;background:white}:host *{box-sizing:border-box;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}.website-header{background:white}.website-header--dark{background:var(--color-blue-400)}.website-header--dark .website-header__website-name{color:var(--color-blue-100)}.website-header__container{max-width:1280px;margin:0 auto;padding:var(--space-medium)}@media screen and (min-width: 721px){.website-header__container{padding:var(--space-medium) var(--space-xx-large)}}.website-header__inner-container{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap}.website-header__logo-container{display:flex;flex-direction:column}@media screen and (min-width: 721px){.website-header__logo-container{flex-direction:row;align-items:center;justify-content:space-between}.website-header__logo-container .website-header__lib-link{margin-bottom:0}}.website-header__lib-link{margin-right:var(--space-medium);display:inline-block;line-height:0;margin-bottom:var(--space-x-small)}.website-header__website-home-link{display:inline-flex;align-items:center;color:var(--color-neutral-300);text-decoration:none;line-height:0;}.website-header__website-home-link:hover .website-header__website-name{text-decoration:underline}.website-header__website-name{display:block;font-size:var(--text-medium);text-transform:uppercase;line-height:1.1;letter-spacing:0.5px}";

const WebsiteHeader = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /**
     * The URL linked to when you click the website name.
     */
    this.to = "/";
  }
  render() {
    const variant = this.variant === 'dark' ? ' website-header--dark' : '';
    const logoVariant = this.variant === 'dark' ? 'dark' : '';
    return (index.h("header", { class: "website-header" + variant }, index.h("div", { class: "website-header__container" }, index.h("div", { class: "website-header__inner-container" }, index.h("div", { class: "website-header__logo-container" }, index.h("a", { href: "https://www.lib.umich.edu/", class: "website-header__lib-link" }, index.h("span", { class: "visually-hidden" }, "University of Michigan Library"), index.h("m-logo", { variant: logoVariant })), index.h("a", { href: this.to, class: "website-header__website-home-link" }, this.name && (index.h("span", { class: "website-header__website-name" }, this.name)))), index.h("slot", null)))));
  }
};
WebsiteHeader.style = websiteHeaderCss;

exports.m_website_header = WebsiteHeader;
