import { Component, State, h } from "@stencil/core";
/**
 * @name Website Alerts
 * @description The Website Alerts provide public messages for end-users to be notified about.
 * @status internal
 * @private
 */
export class WebsiteAlerts {
  constructor() {
    this.status = "idle";
  }
  componentWillLoad() {
    const domain = document.domain;
    if (domain.includes("umich.edu")) {
      this.status = "loading";
      fetch("https://staff.lib.umich.edu/api/alerts?now=" + Date.now(), {
        cache: "reload"
      })
        .then(response => response.json())
        .then(result => {
        const alertsThatTargetHost = result.reduce((memo, alert) => {
          const domains = alert.domains.split(", ");
          if (domains.includes(domain)) {
            memo = memo.concat(alert);
          }
          return memo;
        }, []);
        if (alertsThatTargetHost.length > 0) {
          this.alerts = alertsThatTargetHost;
          this.status = "success";
        }
        else {
          this.status = "no-alerts";
        }
      })
        .catch(e => {
        this.status = "error";
        console.warn("Unable to fetch U-M Library Website Alerts.", e);
      });
    }
    else {
      this.status = "invalid-domain";
    }
  }
  render() {
    if (this.status === "success") {
      return (h("div", { class: "m-alerts", role: "alert" },
        h("h2", { class: "m-alerts__heading" },
          "Important message",
          this.alerts.length > 1 ? "s" : ""),
        this.alerts.map(alert => (h("div", { class: "m-alert" },
          h("div", { class: "m-alert__content" },
            h("m-icon", { name: "warning" }),
            h("div", { class: "m-alert__html", innerHTML: alert.html })))))));
    }
    return null;
  }
  static get is() { return "m-website-alerts"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["website-alerts.css"]
  }; }
  static get styleUrls() { return {
    "$": ["website-alerts.css"]
  }; }
  static get states() { return {
    "status": {},
    "alerts": {}
  }; }
}
