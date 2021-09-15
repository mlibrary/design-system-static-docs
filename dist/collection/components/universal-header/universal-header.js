import { Component, State, h, Listen } from "@stencil/core";
/**
 * @name Universal Header
 * @description The Universal Header shows users that they are on a U-M Library website and provides a quick and organized way for users to access other library websites.
 * @status production
 * @whenToUse You must use the Universal Header at the top of every page of your website if it hosted with the lib.umich.edu domain.
 * @whenNotToUse If your website is not being hosted on lib.umich.edu.
 * @usedBy
 * - [Library Website](https://www.lib.umich.edu/)
 * - [Library Search](https://search.lib.umich.edu/)
 * - [Design System](https://design-system.lib.umich.edu/)
 * - [Michigan Publishing](https://www.publishing.umich.edu/)
 * @research
 * During Fall 2020 usability testing:
 * - 89% of participants noticed the Universal Header without being prompted.
 * - The label "Explore" matched most expectations and all participants had a positive reaction to the content in the dropdown menu.
 * - The header also helped participants recognize they were on a U-M Library website.
 *
 * [View the research plan (Google Doc)](https://docs.google.com/document/d/1a5NkZEPaNUck3oHngV3cNFNgZ5BVGicCjRVKuDn2YJk/edit?usp=sharing)
 *
 * [View the research findings (Google Slides)](https://docs.google.com/presentation/d/1G4iga9axTpl9xboJ-ydcbN8ZrDh6A3fo18T-HM7ItvM/edit?usp=sharing)
 */
export class UniversalHeader {
  constructor() {
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
      return (h("p", { class: "m-uh__dropdown-error" },
        h("strong", null, "Error"),
        ": We are temporarily having trouble loading our list of library sites. Please try refreshing your page. You can also contact ",
        h("a", { href: "https://www.lib.umich.edu/ask" }, "Ask a Librarian"),
        " ",
        "for help."));
    }
    if (this.content) {
      return [
        h("p", { class: "m-uh__heading" }, "Explore what the library has to offer."),
        h("ul", { class: "m-uh__list-primary" }, this.content.primary.map(item => (h("li", null,
          h("a", { href: item.link, class: "m-uh__item-link" },
            h("span", { class: "m-uh__item-title" }, item.title),
            h("span", { class: "m-uh__item-desc" }, item.description)))))),
        h("ul", { class: "m-uh__list-secondary" }, this.content.secondary.map(item => (h("li", null,
          h("a", { href: item.link, class: "m-uh__item-link" },
            h("span", { class: "m-uh__item-title" }, item.title))))))
      ];
    }
    return h("p", null, "Loading...");
  }
  render() {
    return [
      h("header", { class: "m-uh" },
        h("div", { class: "m-uh__content" },
          h("a", { class: "m-uh__link", href: "https://www.lib.umich.edu/" },
            h("span", { class: "m-uh__link-text" }, "University of Michigan Library"),
            h("span", { class: "m-uh__link-text--small" },
              h("abbr", { title: "University of Michigan" }, "U-M"),
              " Library")),
          h("div", { class: "m-uh__button-container" },
            h("button", { class: "m-uh__button", "aria-expanded": String(this.open), onClick: () => this.toggle() },
              h("span", { class: "m-uh__button-label" }, "Explore"),
              h("div", { "aria-hidden": "true", class: "m-uh__icons" }, this.open ? (h("m-icon", { name: "expand-less" })) : (h("m-icon", { name: "expand-more" })))),
            this.open && (h("div", { class: "m-uh__dropdown", ref: el => (this.dropdown = el) }, this.renderDropdown()))))),
      h("m-website-alerts", null)
    ];
  }
  static get is() { return "m-universal-header"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["universal-header.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["universal-header.css"]
  }; }
  static get states() { return {
    "open": {},
    "error": {},
    "content": {}
  }; }
  static get listeners() { return [{
      "name": "focusout",
      "method": "close",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "keydown",
      "method": "handleKeydown",
      "target": "window",
      "capture": false,
      "passive": false
    }, {
      "name": "click",
      "method": "handleClick",
      "target": "document",
      "capture": false,
      "passive": false
    }]; }
}
