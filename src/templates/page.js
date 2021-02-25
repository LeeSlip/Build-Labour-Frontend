import React, { Component } from 'react'
import { graphql } from 'gatsby'
import he from 'he'

import SEO from '../components/seo'

import RenderBlock from '../utils/render-block'

class PageTemplate extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    let page = this.props.data.wordpressPage
    return (
      <>
        <SEO title={he.decode(page.yoast_meta.yoast_wpseo_title)} bodyClass={page.slug} description={page.yoast_meta.yoast_wpseo_metadesc} />
        {page.acf.content_blocks_page && page.acf.content_blocks_page.map((el, i) => {
          return RenderBlock(el.__typename, el, i)
        })}
      </>
    )
  }
}

export const pageQuery = graphql`
    query ($id: String!) {
      wordpressPage(id: {eq: $id}) {
        title
        slug
        yoast_meta {
          yoast_wpseo_title
          yoast_wpseo_metadesc
        }
        acf {
          content_blocks_page {
            __typename
            ... on WordPressAcf_create_profile_banner {
              title
              subheading
              repeater {
                bullets {
                  bullet
                }
                tagline
              }
              button {
                link
                text
              }
            }
            ... on WordPressAcf_main_banner {
              background {
                localFile {
                  childImageSharp {
                    original {
                      src
                    }
                  }
                }
              }
              title
              logo {
                localFile {
                  childImageSharp {
                    original {
                      src
                    }
                  }
                }
              }
              buttons {
                link
                text
              }
              socials {
                link
                image {
                  localFile {
                    childImageSharp {
                      original {
                        src
                      }
                    }
                  }
                }
              }
            }
            ... on WordPressAcf_landing {
              background {
                localFile {
                  childImageSharp {
                    original {
                      src
                    }
                  }
                }
              }
              heading
              subheading
              logo {
                localFile {
                  childImageSharp {
                    original {
                      src
                    }
                  }
                }
              }
              buttons {
                link
                text
              }
              socials {
                link
                image {
                  localFile {
                    childImageSharp {
                      original {
                        src
                      }
                    }
                  }
                }
              }
              repeater {
                image {
                  localFile {
                    childImageSharp {
                      original {
                        src
                      }
                    }
                  }
                }
              }
            }
            ... on WordPressAcf_training_banner {
              background {
                localFile {
                  childImageSharp {
                    original {
                      src
                    }
                  }
                }
              }
              title
              buttons {
                link
                text
              }
            }
            ... on WordPressAcf_page_banner {
              background {
                localFile {
                  childImageSharp {
                    original {
                      src
                    }
                  }
                }
              }
              title
              content
              image {
                localFile {
                  childImageSharp {
                    original {
                      src
                    }
                  }
                }
              }
              buttons {
                text
                link
              }
              slides {
                image {
                  localFile {
                    childImageSharp {
                      original {
                        src
                      }
                    }
                  }
                }
                alt_text
              }
            }
            ... on WordPressAcf_slider {
              background {
                localFile {
                  childImageSharp {
                    original {
                      src
                    }
                  }
                }
              }
              slides {
                image {
                  localFile {
                    childImageSharp {
                      original {
                        src
                      }
                    }
                  }
                }
                link
              }
            }
            ... on WordPressAcf_faq {
              bgColour
              title
              questions {
                title
                answer
              }
            }
            ... on WordPressAcf_features {
              title 
              blocks {
                image {
                  localFile {
                    childImageSharp {
                      original {
                        src
                      }
                    }
                  }
                }
                heading
                content
              }
            }
            ... on WordPressAcf_accordions {
              background {
                localFile {
                  childImageSharp {
                    original {
                      src
                    }
                  }
                }
              }
              worker {
                title
                text
              }
              work {
                title
                text
              }
            }
            ... on WordPressAcf_accordion {
              background {
                localFile {
                  childImageSharp {
                    original {
                      src
                    }
                  }
                }
              }
              question {
                title
                text
              }
            }
            ... on WordPressAcf_content {
              bgcolour
              text
            }
            ... on WordPressAcf_courses {
              title
              courses {
                image {
                  localFile {
                    childImageSharp {
                      original {
                        src
                      }
                    }
                  }
                }
              }
              link_button {
                link
                text
              }
            }
          }
        }
      }
    }
  
`

export default PageTemplate
