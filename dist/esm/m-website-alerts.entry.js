import { r as registerInstance, h } from './index-202ea9c3.js';

const websiteAlertsCss = ".m-alerts {\n  font-family: var(--font-base-family);\n  line-height: var(--line-height-default);\n  color: var(--color-neutral-400);\n  font-size: 16px;\n\n  & * {\n    box-sizing: border-box;\n  }\n\n  /* Targeted resets */\n  & p {\n    margin: 0;\n    padding: 0;\n  }\n\n  & a {\n    color: var(--color-neutral-400);\n  }\n\n  & strong {\n    font-weight: 800;\n  }\n\n  & *:focus {\n    outline: 0;\n    box-shadow: 0 0 0 2px var(--color-maize-400),\n      0 0 0 3px var(--color-neutral-400);\n    border-radius: 2px !important;\n  }\n}\n\n.m-alerts__heading {\n  /* https://snook.ca/archives/html_and_css/hiding-content-for-accessibility */\n  position: absolute !important;\n  height: 1px;\n  width: 1px;\n  overflow: hidden;\n  clip: rect(1px 1px 1px 1px); /* IE6, IE7 */\n  clip: rect(1px, 1px, 1px, 1px);\n}\n\n.m-alert {\n  background: var(--color-orange-300);\n\n  & + .m-alert {\n    border-top: solid 1px var(--color-orange-400);\n  }\n}\n\n.m-alert__content {\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 0 var(--space-medium);\n\n  @media screen and (min-width: 721px) {\n    padding: 0 var(--space-xx-large);\n  }\n\n  display: flex;\n\n  & m-icon {\n    padding-top: var(--space-small);\n    margin-right: var(--space-small);\n  }\n}\n\n.m-alert__html {\n  padding: var(--space-x-small) 0;\n\n  p + p {\n    margin-top: var(--space-x-small);\n  }\n}\n";

const WebsiteAlerts = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
      return (h("div", { class: "m-alerts", role: "alert" }, h("h2", { class: "m-alerts__heading" }, "Important message", this.alerts.length > 1 ? "s" : ""), this.alerts.map(alert => (h("div", { class: "m-alert" }, h("div", { class: "m-alert__content" }, h("m-icon", { name: "warning" }), h("div", { class: "m-alert__html", innerHTML: alert.html })))))));
    }
    return null;
  }
};
WebsiteAlerts.style = websiteAlertsCss;

export { WebsiteAlerts as m_website_alerts };
