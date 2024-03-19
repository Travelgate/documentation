#!/bin/bash
# npm install -g docs-to-pdf
npx docs-to-pdf --initialDocURLs="http://localhost:4200/kb/getting-started-with-travelgate/about-us" --contentSelector="article" --paginationSelector="a.pagination-nav__link.pagination-nav__link--next" --excludeSelectors=".margin-vert--xl a,[class^='tocCollapsible'],.breadcrumbs,.theme-edit-this-page" --coverImage="http://localhost:4200/img/logo.svg" --coverTitle="Travelgate KB"
