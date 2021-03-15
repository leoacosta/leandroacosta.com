/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import styled from "styled-components"
import { rhythm } from "../utils/typography"

const Tagline = styled.p`
  margin: 0;
  display: none;
  // border: 10px solid red;

  // @media (max-width: 700px) {
  //   border: 10px solid green;
  // }
`

const StyledLink = styled(props => <Link {...props} />)`
  box-shadow: none;
`

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <div
            style={{
              display: `flex`,
              alignItems: `center`,
            }}
          >
            <StyledLink to={`/`}>
              <StaticImage
                fixed={data.avatar.childImageSharp.fixed}
                alt={author}
                style={{
                  marginRight: rhythm(1 / 2),
                  marginBottom: 0,
                  minWidth: 50,
                  borderRadius: `100%`,
                }}
                imgStyle={{
                  borderRadius: `50%`,
                }}
              />
            </StyledLink>
            <Tagline>
              Written by <strong>{author}</strong> who lives and works in
              Melbourne, Australia building useful things.
              {` `}
              <a href={`https://twitter.com/${social.twitter}`}>
                You should follow him on Twitter
              </a>
            </Tagline>
          </div>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`

export default Bio
