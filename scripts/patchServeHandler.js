const fs = require("node:fs");
const serveHandlerPackage = require("serve-handler/package.json");
const serveHandlerPath = require.resolve("serve-handler/src/index.js");

if (serveHandlerPackage.version !== "6.1.7") {
  throw new Error(
    `Expected serve-handler 6.1.7, found ${serveHandlerPackage.version}`,
  );
}

const source = fs.readFileSync(serveHandlerPath, "utf8");
const originalImport = "const minimatch = require('minimatch');";
const patchedImport = "const {minimatch} = require('minimatch');";
const originalCount = source.split(originalImport).length - 1;
const patchedCount = source.split(patchedImport).length - 1;

if (patchedCount === 1 && originalCount === 0) {
  process.exit(0);
}

if (patchedCount !== 0 || originalCount !== 1) {
  throw new Error(
    "Unexpected serve-handler minimatch import; patch not applied",
  );
}

fs.writeFileSync(
  serveHandlerPath,
  source.replace(originalImport, patchedImport),
);
