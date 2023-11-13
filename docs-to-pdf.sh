#!/bin/bash
# npm install -g docs-to-pdf
npx docs-to-pdf --initialDocURLs="http://localhost:4201/docs/get-started/introduction" --contentSelector="article" --paginationSelector="a.pagination-nav__link.pagination-nav__link--next" --excludeSelectors=".margin-vert--xl a,[class^='tocCollapsible'],.breadcrumbs,.theme-edit-this-page" --coverImage="http://localhost:4201/img/logo.svg" --coverTitle="Travelgate Documentation"
