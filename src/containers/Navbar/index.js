import React, { useContext } from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import NavbarWrapper from "../../reusecore/src/elements/Navbar";
import Drawer from "../../reusecore/src/elements/Drawer";
import Logo from "../../reusecore/src/elements/UI/Logo";
import HamburgMenu from "../../common-components/HamburgMenu";
import ScrollSpyMenu from "../../common-components/ScrollSpyMenu";
import { Container } from "./navbar.style";
import CopyrightSection from "../CopyrightsSection";

import LogoImage from "../../images/logotyp.png";

import { DrawerContext } from "../../contexts/DrawerContext";

const Navbar = ({ navbarStyle, logoStyle }) => {
  const { state, dispatch } = useContext(DrawerContext);

  // Toggle drawer
  const toggleHandler = () => {
    dispatch({
      type: "TOGGLE"
    });
  };

  const Data = useStaticQuery(graphql`
    query {
      agencyJson {
        menuItems {
          label
          path
          offset
        }
      }
    }
  `);

  return (
    <NavbarWrapper {...navbarStyle}>
      <Container>
        <Logo
          href="#"
          logoSrc={LogoImage}
          title="Agency"
          logoStyle={logoStyle}
        />
        <div style={{ display: "flex", alignItems: "center" }}>
          <Drawer
            width="420px"
            placement="right"
            drawerHandler={<HamburgMenu />}
            open={state.isOpen}
            toggleHandler={toggleHandler}
          >
            <ScrollSpyMenu
              menuItems={Data.agencyJson.menuItems}
              drawerClose={true}
              offset={-100}
            />
            <CopyrightSection />
          </Drawer>
        </div>
      </Container>
    </NavbarWrapper>
  );
};

// Navbar style props
Navbar.propTypes = {
  navbarStyle: PropTypes.object,
  logoStyle: PropTypes.object
};

Navbar.defaultProps = {
  // Default navbar style
  navbarStyle: {
    minHeight: "70px"
  },
  // Default logo size
  logoStyle: {
    width: "128px",
    height: "auto"
  }
};

export default Navbar;
