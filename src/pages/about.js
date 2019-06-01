import React from "react"
import Layout from "../components/layout"
import Bio from "../components/bio"
import SEO from "../components/seo"

class About extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="About" />
        <h1>About</h1>
        <p>I’m Leandro Acosta and I do the codes...</p>
        <p>Currently, I’m a Front End Developer at Latitude Financial.</p>
        <Bio />
      </Layout>
    )
  }
}

export default About

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
