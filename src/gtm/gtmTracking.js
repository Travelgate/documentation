/**
 * Docusaurus client module that implements the GTM dataLayer tracking for the
 * Docs zone, following the IKAUE dataLayer plan.
 *
 * On the initial load and on every SPA route change it pushes:
 *   1. `gtm.datalayer` (once) with the user/session context.
 *   2. `gtm.pageview` with the virtual page + content_group / content_subgroup.
 *
 * It also pushes the Docs-zone interaction events:
 *   - `aina_open`          when the AINA (kapa) widget modal is opened.
 *   - `docs_edit_interest` when the "Edit this page" link is clicked.
 */

import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";
import { getContentGroups } from "./contentGroups";

function pushToDataLayer(payload) {
  if (typeof window === "undefined") {
    return;
  }
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);
}

function getLoginStatus() {
  try {
    return window.localStorage.getItem("token") ? "logged" : "not_logged";
  } catch {
    return "not_logged";
  }
}

function getPageLang() {
  try {
    return document.documentElement.lang || "en";
  } catch {
    return "en";
  }
}

let userContextPushed = false;
let lastPageViewSignature = null;

function trackPageView(location) {
  const pathname =
    (location && location.pathname) ||
    (typeof window !== "undefined" ? window.location.pathname : "/");
  const search =
    (location && location.search) ||
    (typeof window !== "undefined" ? window.location.search : "");

  // User/session context: pushed once per real page load (SPA), per the
  // guide's `gtm.datalayer` event (without content_group/subgroup).
  if (!userContextPushed) {
    pushToDataLayer({
      event: "gtm.datalayer",
      user_login_status: getLoginStatus(),
      page_lang: getPageLang(),
      http_status: 200,
    });
    userContextPushed = true;
  }

  const { content_group, content_subgroup } = getContentGroups(pathname);
  const virtual_url = pathname + search;
  const signature = `${virtual_url}|${content_group}|${content_subgroup}`;

  // Dedup consecutive identical virtual pageviews.
  if (signature === lastPageViewSignature) {
    return;
  }
  lastPageViewSignature = signature;

  pushToDataLayer({ ecommerce: null });
  pushToDataLayer({
    event: "gtm.pageview",
    virtual_url,
    virtual_status: 200,
    content_group,
    content_subgroup,
  });
}

// Ensures window.Kapa exists as kapa's documented async queue so the handler is
// never lost to a race with the deferred widget bundle: if the bundle hasn't
// loaded yet we register on the queue, which the bundle replays once ready.
function ensureKapaQueue() {
  if (typeof window === "undefined") {
    return null;
  }
  if (typeof window.Kapa !== "function") {
    window.Kapa = function () {
      (window.Kapa.q = window.Kapa.q || []).push(arguments);
    };
  }
  return window.Kapa;
}

// AINA (kapa) modal open -> aina_open. Registration is queued on window.Kapa.q
// and replayed by the deferred widget bundle, so it survives the load race.
function registerAinaOpen() {
  const kapa = ensureKapaQueue();
  if (!kapa) {
    return;
  }
  kapa("onModalOpen", function () {
    pushToDataLayer({ event: "aina_open" });
  });
}

// "Edit this page" click -> docs_edit_interest. Uses a single delegated
// listener so it keeps working across SPA navigations.
function registerEditInterest() {
  if (typeof document === "undefined") {
    return;
  }
  document.addEventListener(
    "click",
    function (event) {
      const target = event.target;
      if (!target || typeof target.closest !== "function") {
        return;
      }
      const editLink = target.closest(
        '.theme-edit-this-page, a[href*="github.com/travelgate/documentation" i]',
      );
      if (editLink) {
        pushToDataLayer({ event: "docs_edit_interest" });
      }
    },
    true,
  );
}

if (ExecutionEnvironment.canUseDOM) {
  registerAinaOpen();
  registerEditInterest();
}

export function onRouteDidUpdate({ location }) {
  trackPageView(location);
}
