// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---src-templates-page-js": () => import("./../../../src/templates/page.js" /* webpackChunkName: "component---src-templates-page-js" */)
}

