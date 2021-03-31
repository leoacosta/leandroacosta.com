import React from "react";
import { Link } from "gatsby";
import Bio from "./bio";
import styled from "styled-components";
import { rhythm, scale } from "../utils/typography";

const Header = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 25px;
`;

const StyledLink = styled((props) => <Link {...props} />)`
  box-shadow: none;
`;

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props;
    const rootPath = `${__PATH_PREFIX__}/`;
    let header;

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      );
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      );
    }
    return (
      <React.Fragment>
        <Header>
          <Bio />
          <StyledLink to={`/about/`}>About</StyledLink>
        </Header>

        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(24),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >
          <main>{children}</main>
        </div>
        <hr style={{ margin: 0 }} />
        <footer style={{ textAlign: "center", padding: "2rem 1rem" }}>
          Say{" "}
          <a href="https://iamleoacosta.com/wp-content/uploads/2017/08/hello.gif">
            hola
          </a>{" "}
          or check out my code wrangling on{" "}
          <a href="https://codepen.io/iamleoacosta/">CodePen</a>
        </footer>
      </React.Fragment>
    );
  }
}

export default Layout;
