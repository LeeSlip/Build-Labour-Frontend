import React from "react"

import Layout from "../layouts/index"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <section className="404" style={{ marginTop: 150, color: 'white', textAlign: 'center' }}>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist...</p>
  </section>
)

export default NotFoundPage
