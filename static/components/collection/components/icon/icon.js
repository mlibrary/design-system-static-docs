import { Component, Prop, Host, h } from "@stencil/core";
import icons from "@umich-lib/icons";
/**
 * @name Icon
 * @description For SVG icons.
 * @status internal
 * @private
 */
export class Icon {
  render() {
    const icon = icons[this.name];
    if (!icon) {
      console.log("Unable to find Icon with name: " + this.name);
      return null;
    }
    return h(Host, { innerHTML: icon.svg });
  }
  static get is() { return "m-icon"; }
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
        "text": ""
      },
      "attribute": "name",
      "reflect": false
    }
  }; }
}
