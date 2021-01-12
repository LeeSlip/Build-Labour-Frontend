

const path = require(`path`)
const slash = require(`slash`)

const query = `
  {
    wordpressWpFrontpage {
      wordpress_id
    }
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

  const pages = await graphql(Query)

  pages.data.allWordpressPage.edges.map((edge) => {
    let path = `/${edge.node.slug}/`
    let component = pageTemplate
    if (edge.node.slug === 'test-page') return
    if (pages.data.wordpressWpFrontpage.wordpress_id === edge.node.wordpress_id) {
      path = '/'
    }

    createPage({
      path: path,
      component: slash(component),
      context: {
        id: edge.node.id,
        slug: edge.node.slug,
      },
    })
  })
} 