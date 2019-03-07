const assert = require('assert');

module.exports = (webpackageName) => {
  assert.ok(webpackageName, 'Expected "webpackageName" to be defined.')
  return {
    description: "A simple elementary component.",
    slots: [
      { slotId: "number", type: "number", direction: ["input", "output"] }
    ],
    resources: [
      "element.html"
    ],
    dependencies: [
      { webpackageId: "cubx.core.rte@3.0.0-SNAPSHOT", artifactId: "cubxcomponent" }
    ]
  };
};
