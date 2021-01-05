

const path = require(`path`)
const slash = require(`slash`)

const pageQuery = `
  {
    allWordpressPage {
      edges {
        node {
          id
          slug
        }
      }
    }
  }
`

const pageTemplate = path.resolve("./src/templates/page.js")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const pages = await graphql(pageQuery)

  pages.data.allWordpressPage.edges.map((edge) => {
    if (edge.node.slug === 'home') {
      createPage({
        path: `/`,
        component: slash(pageTemplate),
        context: {
          id: edge.node.id,
          slug: edge.node.slug,
        },
      })
    } else if (edge.node.slug !== 'test-page') {
      createPage({
        path: `/${edge.node.slug}/`,
        component: slash(pageTemplate),
        context: {
          id: edge.node.id,
          slug: edge.node.slug,
        },
      })
    }
  })
} 