import React, { Fragment } from "react";
import Sticky from "react-stickynode";
import { ThemeProvider } from "styled-components";
import { Modal } from "@redq/reuse-modal";
import { agencyTheme } from "../theme/agency";
import { ResetCSS } from "../assets/css/style";
import { GlobalStyle, AgencyWrapper } from "../style/agency.style";
import Navbar from "../containers/Navbar";
import BannerSection from "../containers/BannerSection";
import AboutUsSection from "../containers/AboutUsSection";
import WorkHistory from "../containers/WorkHistory";
// import TestimonialSection from "../containers/TestimonialSection";
import FaqSection from "../containers/FaqSection";
import OfferSection from "../containers/OfferSection";
import ContactSection from "../containers/ContactSection";
import Footer from "../containers/Footer";
import { DrawerProvider } from "../contexts/DrawerContext";
import "@redq/reuse-modal/es/index.css";
import SEO from "../components/seo";

export default () => {
  return (
    <ThemeProvider theme={agencyTheme}>
      <Fragment>
        <SEO lang="pl" />
        <Modal />
        <ResetCSS />
        <GlobalStyle />
        {/* End of agency head section */}
        {/* Start agency wrapper section */}
        <AgencyWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar logoStyle={{ height: 50 }} />
            </DrawerProvider>
          </Sticky>
          <BannerSection />

          <AboutUsSection />
          <OfferSection />
          <WorkHistory />
          <ContactSection />
          <FaqSection />

          <Footer />
        </AgencyWrapper>
        {/* End of agency wrapper section */}
      </Fragment>
    </ThemeProvider>
  );
};
