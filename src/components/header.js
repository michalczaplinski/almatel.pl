import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logotyp from "../images/logotyp.png"
import styled from "styled-components"

const HeaderWrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1rem 1.1rem;
  display: flex;
  justify-content: center;
  margin-bottom: 1.45rem;
  border-bottom: 1px solid #e4e4e4;
`

const Header = ({ children }) => (
  <HeaderWrapper>
    <Link
      to="/"
      style={{
        color: `white`,
        textDecoration: `none`,
      }}
    >
      <img
        src={logotyp}
        alt="logotyp"
        width="200px"
        style={{ marginBottom: 0 }}
      />
    </Link>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
