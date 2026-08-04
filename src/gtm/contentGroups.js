/**
 * Maps the current pathname to the { content_group, content_subgroup } pair for
 * the Docs zone, following the IKAUE dataLayer plan (enumerated `docs_*` values).
 *
 * These values are sent in the `gtm.pageview` dataLayer event. The mapping only
 * uses the pathname (query params are ignored) and resolves to two levels.
 */

// Trailing tokens stripped to derive the API "family" used as content_subgroup
// (e.g. "hotel-x-pull-buyers-api" -> "hotel-x", "inventory-push-graphql-api" -> "inventory").
const API_FAMILY_SUFFIXES = new Set([
  "api",
  "graphql",
  "pull",
  "push",
  "buyers",
]);

function normalizeSegments(pathname) {
  return String(pathname || "")
    .split("/")
    .filter(Boolean)
    .map((segment) => {
      try {
        return decodeURIComponent(segment).trim().toLowerCase();
      } catch {
        return segment.trim().toLowerCase();
      }
    });
}

function apiFamily(segment) {
  if (!segment) {
    return null;
  }
  const parts = segment.split("-");
  while (parts.length > 1 && API_FAMILY_SUFFIXES.has(parts[parts.length - 1])) {
    parts.pop();
  }
  return parts.join("-");
}

export function getContentGroups(pathname) {
  const seg = normalizeSegments(pathname);

  // /playground
  if (seg[0] === "playground") {
    return { content_group: "docs_playground", content_subgroup: null };
  }

  // /kb/**
  if (seg[0] === "kb") {
    return { content_group: "docs_kb", content_subgroup: seg[1] || null };
  }

  // /docs/apis/**
  if (seg[0] === "docs" && seg[1] === "apis") {
    if (seg[2] === "for-buyers") {
      return {
        content_group: "docs_apis_buyers",
        content_subgroup: apiFamily(seg[3]),
      };
    }
    if (seg[2] === "for-sellers") {
      return {
        content_group: "docs_apis_sellers",
        content_subgroup: apiFamily(seg[3]),
      };
    }
    // for-buyers-and-sellers and any other /docs/apis subtree
    return { content_group: "docs_general", content_subgroup: null };
  }

  // /docs/** (get-started, security, apps, smart-traffic-apis, ...)
  if (seg[0] === "docs") {
    return { content_group: "docs_general", content_subgroup: seg[1] || null };
  }

  // Home and everything else
  return { content_group: "docs_general", content_subgroup: null };
}
