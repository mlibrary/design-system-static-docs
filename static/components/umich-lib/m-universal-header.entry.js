import { r as registerInstance, h } from './index-5e49710a.js';

const universalHeaderCss = ".m-uh{--color-blue-100:rgb(247, 248, 249);--color-blue-200:rgb(178, 190, 201);--color-blue-300:rgb(76, 103, 129);--color-blue-400:rgb(0, 39, 76);--color-blue-500:rgb(0, 19, 36);--color-maize-100:rgb(255, 249, 230);--color-maize-200:rgb(255, 234, 155);--color-maize-300:rgb(255, 218, 80);--color-maize-400:rgb(255, 203, 5);--color-maize-500:rgb(234, 186, 2);--color-neutral-100:rgb(229, 233, 237);--color-neutral-200:rgb(138, 150, 161);--color-neutral-300:rgb(99, 115, 129);--color-neutral-400:rgb(33, 43, 54);--color-neutral-500:rgb(6, 8, 10);--color-teal-100:rgb(233, 242, 245);--color-teal-200:rgb(167, 205, 219);--color-teal-300:rgb(101, 168, 191);--color-teal-400:rgb(29, 116, 145);--color-teal-500:rgb(16, 102, 132);--color-orange-100:rgb(255, 241, 235);--color-orange-200:rgb(255, 184, 153);--color-orange-300:rgb(255, 138, 88);--color-orange-400:rgb(242, 95, 31);--color-orange-500:rgb(199, 78, 26);--color-pink-100:rgb(252, 235, 235);--color-pink-200:rgb(242, 157, 157);--color-pink-300:rgb(236, 105, 105);--color-pink-400:rgb(217, 56, 56);--color-pink-500:rgb(191, 50, 50);--color-indigo-100:rgb(238, 241, 249);--color-indigo-200:rgb(170, 185, 227);--color-indigo-300:rgb(124, 147, 212);--color-indigo-400:rgb(80, 111, 197);--color-indigo-500:rgb(39, 67, 145);--color-green-100:rgb(234, 248, 238);--color-green-200:rgb(150, 219, 170);--color-green-300:rgb(87, 188, 117);--color-green-400:rgb(32, 168, 72);--color-green-500:rgb(25, 133, 57);--font-base-family:\"Muli\", sans-serif;--font-second-family:\"Crimson Text\", serif;--bold:700;--regular:400;--semibold:600;--line-height-default:1.5;--line-height-heading:1.25;--line-height-page-heading:1.125;--text-base-size:16px;--text-xxx-large:3.5rem;--text-xx-large:2.25rem;--text-x-large:2rem;--text-large:1.75rem;--text-medium:1.5rem;--text-small:1.125rem;--text-x-small:1.125rem;--text-xx-small:1rem;--text-xxx-small:0.875rem;--space-xxx-small:2px;--space-xx-small:4px;--space-x-small:8px;--space-small:12px;--space-medium:16px;--space-large:24px;--space-x-large:32px;--space-xx-large:40px;--space-xxx-large:48px;--space-xxxx-large:64px;--space-xxxxx-large:96px;--z-space-small:rgba(0, 0, 0, 0.2) 0px 2px 8px 0px;--z-space-medium:rgba(0, 0, 0, 0.2) 0px 2px 16px 0px;--opacity-75:0.75;--opacity-50:0.50;--opacity-30:0.30;--radius-default:4px;background:var(--color-blue-100);font-family:var(--font-base-family);line-height:var(--line-height-default);font-size:16px}.m-uh *{box-sizing:border-box;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}.m-uh *:focus{outline:0;box-shadow:0 0 0 2px var(--color-maize-400), 0 0 0 3px var(--color-neutral-400);border-radius:2px !important}.m-uh__content{display:flex;justify-content:space-between;max-width:1280px;margin:0 auto;padding:0 var(--space-medium)}@media screen and (min-width: 721px){.m-uh__content{padding:0 var(--space-xx-large)}}.m-uh__button-container{display:inline-block;position:relative}.m-uh__button{border:none;background:none;font-size:var(--font-base-size);color:var(--color-neutral-400);text-align:left;line-height:var(--line-height-default);display:flex;align-items:center;cursor:pointer}.m-uh__button,.m-uh__link{margin:0;text-transform:uppercase;padding:var(--space-x-small);margin:0 calc(var(--space-x-small) * -1);color:var(--color-neutral-300);letter-spacing:1.25px;text-transform:uppercase;font-size:14px;font-weight:var(--bold);font-family:var(--font-base-family)}.m-uh__button:hover .m-uh__button-label,.m-uh__link:hover .m-uh__button-label{text-decoration:underline;text-decoration-thickness:1px}.m-uh__button-label{padding-right:var(--space-xx-small)}.m-uh__link{text-decoration:none;margin-right:var(--space-x-large)}.m-uh__link:hover{text-decoration:underline;text-decoration-thickness:1px}@media screen and (min-width: 721px){.m-uh__link{display:block}}.m-uh__link-text{display:block}@media screen and (max-width: 620px){.m-uh__link-text{display:none}}.m-uh__link-text--small{display:none}@media screen and (max-width: 620px){.m-uh__link-text--small{display:block}}.m-uh__icons{line-height:0}.m-uh__dropdown{position:absolute;right:calc(-1 * var(--space-medium));width:280px;box-shadow:var(--z-space-medium);max-width:calc(100vw - (var(--space-xx-large) * 2));background:white;border-radius:2px;z-index:2}@media screen and (min-width: 721px){.m-uh__dropdown{display:grid;grid-template:\"heading heading\" \"primary secondary\"/1fr 280px;padding:var(--space-medium);width:862px;right:0}}.m-uh__heading{grid-area:heading;margin-top:0;font-size:28px;font-weight:700;margin-bottom:0;padding:var(--space-small) var(--space-medium)}@media screen and (max-width: 720px){.m-uh__heading{display:none}}.m-uh__list-primary,.m-uh__list-secondary{margin:0;padding:0;list-style:none;margin-bottom:var(--space-medium)}@media screen and (max-width: 720px){.m-uh__list-primary,.m-uh__list-secondary{margin:0}.m-uh__list-primary li:not(:last-of-type),.m-uh__list-secondary li:not(:last-of-type){border-bottom:solid 1px var(--color-neutral-100)}}.m-uh__list-primary{grid-area:primary}@media screen and (min-width: 721px){.m-uh__list-primary{border-right:solid 1px var(--color-neutral-100);margin-right:var(--space-medium);padding-right:var(--space-medium)}}.m-uh__list-secondary{grid-area:secondary}@media screen and (max-width: 720px){.m-uh__list-primary{border-bottom:solid 1px var(--color-neutral-100)}}.m-uh__item-link{display:block;color:var(--color-neutral-400);font-weight:var(--semibold);text-decoration:none;padding:var(--space-x-small) var(--space-medium);border-radius:2px}@media screen and (max-width: 720px){.m-uh__item-link{padding:var(--space-small) var(--space-medium)}}@media screen and (max-width: 720px){.m-uh__item-link:hover{border-radius:0;background:var(--color-blue-100)}}.m-uh__item-link:hover .m-uh__item-title,.m-uh__item-link:focus .m-uh__item-title{text-decoration:underline;text-decoration-color:var(--color-teal-400);text-decoration-thickness:2px}.m-uh__item-title{display:block}.m-uh__item-desc{display:none}@media screen and (min-width: 721px){.m-uh__item-desc{display:block;font-weight:400;color:var(--color-neutral-300)}}.m-uh__dropdown-error{padding:0 var(--space-medium)}.m-uh__dropdown-error strong{font-weight:var(--bold)}.m-uh__dropdown-error a{color:var(--color-teal-400)}";

const UniversalHeader = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.open = false;
    this.error = false;
  }
  componentDidLoad() {
    fetch("https://cms.lib.umich.edu/api/universalheader")
      .then(response => response.json())
      .then(data => {
      this.content = {
        primary: data.filter(item => item.level === "1"),
        secondary: data.filter(item => item.level === "2")
      };
    })
      .catch(() => {
      this.error = true;
    });
  }
  close() {
    // Close when focus leaves universal header.
    this.open = false;
  }
  handleKeydown(e) {
    if (e.key === "Escape") {
      this.open = false;
    }
  }
  handleClick(e) {
    // Close on click outside of dropdown.
    if (this.dropdown && !this.dropdown.contains(e.composedPath()[0])) {
      this.open = false;
    }
  }
  toggle() {
    this.open = !this.open;
  }
  renderDropdown() {
    if (this.error) {
      return (h("p", { class: "m-uh__dropdown-error" }, h("strong", null, "Error"), ": We are temporarily having trouble loading our list of library sites. Please try refreshing your page. You can also contact ", h("a", { href: "https://www.lib.umich.edu/ask" }, "Ask a Librarian"), " ", "for help."));
    }
    if (this.content) {
      return [
        h("p", { class: "m-uh__heading" }, "Explore what the library has to offer."),
        h("ul", { class: "m-uh__list-primary" }, this.content.primary.map(item => (h("li", null, h("a", { href: item.link, class: "m-uh__item-link" }, h("span", { class: "m-uh__item-title" }, item.title), h("span", { class: "m-uh__item-desc" }, item.description)))))),
        h("ul", { class: "m-uh__list-secondary" }, this.content.secondary.map(item => (h("li", null, h("a", { href: item.link, class: "m-uh__item-link" }, h("span", { class: "m-uh__item-title" }, item.title))))))
      ];
    }
    return h("p", null, "Loading...");
  }
  render() {
    return [
      h("header", { class: "m-uh" }, h("div", { class: "m-uh__content" }, h("a", { class: "m-uh__link", href: "https://www.lib.umich.edu/" }, h("span", { class: "m-uh__link-text" }, "University of Michigan Library"), h("span", { class: "m-uh__link-text--small" }, h("abbr", { title: "University of Michigan" }, "U-M"), " Library")), h("div", { class: "m-uh__button-container" }, h("button", { class: "m-uh__button", "aria-expanded": String(this.open), onClick: () => this.toggle() }, h("span", { class: "m-uh__button-label" }, "Explore"), h("div", { "aria-hidden": "true", class: "m-uh__icons" }, this.open ? (h("m-icon", { name: "expand-less" })) : (h("m-icon", { name: "expand-more" })))), this.open && (h("div", { class: "m-uh__dropdown", ref: el => (this.dropdown = el) }, this.renderDropdown()))))),
      h("m-website-alerts", null)
    ];
  }
};
UniversalHeader.style = universalHeaderCss;

export { UniversalHeader as m_universal_header };
