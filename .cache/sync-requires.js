const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-templates-page-js": hot(preferDefault(require("/Users/leonslijepcevic/Documents/Build-Labour-Frontend/src/templates/page.js")))
}

