

const path = require(`path`)
const slash = require(`slash`)

const pageQuery = `
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

  const pages = await graphql(pageQuery)

  pages.data.allWordpressPage.edges.map((edge) => {
    let path = `/${edge.node.slug}/`
    let component = pageTemplate
    if (edge.node.slug === 'test-page') return
    if (res.data.wordpressWpFrontpage.wordpress_id === edge.node.wordpress_id) {
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