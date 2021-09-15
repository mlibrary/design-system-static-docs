import { r as registerInstance, h } from './index-5e49710a.js';

const websiteAlertsCss = ".m-alerts{--color-blue-100:rgb(247, 248, 249);--color-blue-200:rgb(178, 190, 201);--color-blue-300:rgb(76, 103, 129);--color-blue-400:rgb(0, 39, 76);--color-blue-500:rgb(0, 19, 36);--color-maize-100:rgb(255, 249, 230);--color-maize-200:rgb(255, 234, 155);--color-maize-300:rgb(255, 218, 80);--color-maize-400:rgb(255, 203, 5);--color-maize-500:rgb(234, 186, 2);--color-neutral-100:rgb(229, 233, 237);--color-neutral-200:rgb(138, 150, 161);--color-neutral-300:rgb(99, 115, 129);--color-neutral-400:rgb(33, 43, 54);--color-neutral-500:rgb(6, 8, 10);--color-teal-100:rgb(233, 242, 245);--color-teal-200:rgb(167, 205, 219);--color-teal-300:rgb(101, 168, 191);--color-teal-400:rgb(29, 116, 145);--color-teal-500:rgb(16, 102, 132);--color-orange-100:rgb(255, 241, 235);--color-orange-200:rgb(255, 184, 153);--color-orange-300:rgb(255, 138, 88);--color-orange-400:rgb(242, 95, 31);--color-orange-500:rgb(199, 78, 26);--color-pink-100:rgb(252, 235, 235);--color-pink-200:rgb(242, 157, 157);--color-pink-300:rgb(236, 105, 105);--color-pink-400:rgb(217, 56, 56);--color-pink-500:rgb(191, 50, 50);--color-indigo-100:rgb(238, 241, 249);--color-indigo-200:rgb(170, 185, 227);--color-indigo-300:rgb(124, 147, 212);--color-indigo-400:rgb(80, 111, 197);--color-indigo-500:rgb(39, 67, 145);--color-green-100:rgb(234, 248, 238);--color-green-200:rgb(150, 219, 170);--color-green-300:rgb(87, 188, 117);--color-green-400:rgb(32, 168, 72);--color-green-500:rgb(25, 133, 57);--font-base-family:\"Muli\", sans-serif;--font-second-family:\"Crimson Text\", serif;--bold:700;--regular:400;--semibold:600;--line-height-default:1.5;--line-height-heading:1.25;--line-height-page-heading:1.125;--text-base-size:16px;--text-xxx-large:3.5rem;--text-xx-large:2.25rem;--text-x-large:2rem;--text-large:1.75rem;--text-medium:1.5rem;--text-small:1.125rem;--text-x-small:1.125rem;--text-xx-small:1rem;--text-xxx-small:0.875rem;--space-xxx-small:2px;--space-xx-small:4px;--space-x-small:8px;--space-small:12px;--space-medium:16px;--space-large:24px;--space-x-large:32px;--space-xx-large:40px;--space-xxx-large:48px;--space-xxxx-large:64px;--space-xxxxx-large:96px;--z-space-small:rgba(0, 0, 0, 0.2) 0px 2px 8px 0px;--z-space-medium:rgba(0, 0, 0, 0.2) 0px 2px 16px 0px;--opacity-75:0.75;--opacity-50:0.50;--opacity-30:0.30;--radius-default:4px;font-family:var(--font-base-family);line-height:var(--line-height-default);color:var(--color-neutral-400);font-size:16px;}.m-alerts *{box-sizing:border-box}.m-alerts p{margin:0;padding:0}.m-alerts a{color:var(--color-neutral-400)}.m-alerts strong{font-weight:800}.m-alerts *:focus{outline:0;box-shadow:0 0 0 2px var(--color-maize-400), 0 0 0 3px var(--color-neutral-400);border-radius:2px !important}.m-alerts__heading{position:absolute !important;height:1px;width:1px;overflow:hidden;clip:rect(1px 1px 1px 1px);clip:rect(1px, 1px, 1px, 1px)}.m-alert{background:var(--color-orange-300)}.m-alert+.m-alert{border-top:solid 1px var(--color-orange-400)}.m-alert__content{max-width:1280px;margin:0 auto;padding:0 var(--space-medium);display:flex}@media screen and (min-width: 721px){.m-alert__content{padding:0 var(--space-xx-large)}}.m-alert__content m-icon{padding-top:var(--space-small);margin-right:var(--space-small)}.m-alert__html{padding:var(--space-x-small) 0}.m-alert__html p+p{margin-top:var(--space-x-small)}";

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
