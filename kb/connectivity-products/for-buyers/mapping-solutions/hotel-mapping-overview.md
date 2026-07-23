---
sidebar_position: 1
---

# Overview

When connecting to multiple Suppliers through Travelgate, each Supplier uses its own codes for hotels, boards, and rooms. The solutions in this section help you work consistently across all Suppliers — either by standardizing codes at once, or by supplementing your integration with third-party hotel codes and content.

These are two distinct needs with different scopes:

## FastX (Recommended)

**FastX** is Travelgate's built-in solution for the [HotelX API](/docs/apis/for-buyers/hotel-x-pull-buyers-api/quickstart). It eliminates per-Supplier code management by combining two capabilities under a single unified `FASTX` context:

- **Hotels and boards:** mapping — Travelgate aligns each Supplier's hotel and board codes to a shared set of FastX codes.
- **Rooms:** standardization — Travelgate standardizes Supplier room descriptions into a consistent format at search time; this is not code mapping but description standardization.

- It is not a separate API — you keep using HotelX with a standardized `FASTX` context.
- **Mandatory for all new Buyers** from 1 January 2026.
- FastX hotel codes are directly compatible with GIATA's standardized identifiers (listed as `travelgate` in GIATA's system).

For the full product overview, see [FastX Solution Overview](/kb/connectivity-products/for-buyers/hotel-x/fastx-solution).

## GIATA — Third-Party Hotel Code Mapping & Content

**GIATA** offers solutions for Buyers who have an existing commercial agreement with GIATA. These are independent of FastX and address two separate needs:

| Solution | What it provides | Scope | Requirements |
|---|---|---|---|
| [GIATA Multicodes](/kb/connectivity-products/for-buyers/mapping-solutions/giata-multicodes) | GIATA cross-supplier hotel identifiers in the HotelX Hotels Query response | Hotel codes only — boards and rooms not covered | Commercial agreement with GIATA required |
| [GIATA Hotel Directory](/kb/connectivity-products/for-buyers/mapping-solutions/giata-hotel-directory) | Verified hotel content and images for ~35,000 properties, sourced directly from properties | Hotel content | Free of charge |
| GIATA Multilingual Hotel Guide (MHG) | Standardized hotel descriptions in 25 languages + ~1.5M HD images for 87,000+ properties | Hotel content | Commercial agreement with GIATA required |

For details on each solution, see [GIATA Solutions](/kb/connectivity-products/for-buyers/mapping-solutions/giata-solutions).

## Which Solution Fits My Need?

| I need to… | Solution |
|---|---|
| Avoid per-Supplier mapping for hotels and boards | **FastX** |
| Standardize room descriptions across Suppliers | **FastX** |
| Receive GIATA hotel codes in my Hotels Query response | **GIATA Multicodes** |
| Enrich my listings with verified hotel content and images | **GIATA Hotel Directory** |
| Add multilingual hotel descriptions and HD images | **GIATA MHG** |

FastX and GIATA Multicodes can be used together: FastX provides hotel and board mapping (plus room standardization) across all Suppliers, while GIATA Multicodes adds GIATA-specific hotel identifiers on top for Buyers who need them.
