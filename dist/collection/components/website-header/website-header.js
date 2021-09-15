import { Component, Prop, h } from "@stencil/core";
/**
 * @name Website Header
 * @description The Website Header displays our logo and shows users what U-M Library website that they are using.
 * @status production
 * @whenToUse If your website is hosted on lib.umich.edu.
 * @whenNotToUse If your website requires a more complicated U-M website header then you may need to work with the Design System team or build your own.
 * @slot Children
 * @example
 * <div>
 *   <m-website-header name="Account">
 *     <a href="/">Log in</a>
 *   </m-website-header>
 *
 *   <m-website-header name="Deep Blue Documents" variant="dark">
 *   </m-website-header>
 * </div>
 * @usedBy
 * - [Design System](https://design-system.lib.umich.edu/)
 */
export class WebsiteHeader {
  constructor() {
    /**
     * The URL linked to when you click the website name.
     */
    this.to = "/";
  }
  render() {
    const variant = this.variant === 'dark' ? ' website-header--dark' : '';
    const logoVariant = this.variant === 'dark' ? 'dark' : '';
    return (h("header", { class: "website-header" + variant },
      h("div", { class: "website-header__container" },
        h("div", { class: "website-header__inner-container" },
          h("div", { class: "website-header__logo-container" },
            h("a", { href: "https://www.lib.umich.edu/", class: "website-header__lib-link" },
              h("span", { class: "visually-hidden" }, "University of Michigan Library"),
              h("m-logo", { variant: logoVariant })),
            h("a", { href: this.to, class: "website-header__website-home-link" }, this.name && (h("span", { class: "website-header__website-name" }, this.name)))),
          h("slot", null)))));
  }
  static get is() { return "m-website-header"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["website-header.css"]
  }; }
  static get styleUrls() { return {
    "$": ["website-header.css"]
  }; }
  static get properties() { return {
    "name": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The user-friendly name of the U-M Library website that uses this Header."
      },
      "attribute": "name",
      "reflect": true
    },
    "to": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The URL linked to when you click the website name."
      },
      "attribute": "to",
      "reflect": true,
      "defaultValue": "\"/\""
    },
    "variant": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Optionally set to `dark` for a blue background."
      },
      "attribute": "variant",
      "reflect": false
    }
  }; }
}
