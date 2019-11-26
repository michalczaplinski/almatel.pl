import React, { Fragment } from "react";
import Sticky from "react-stickynode";
import { ThemeProvider } from "styled-components";
import { Modal } from "@redq/reuse-modal";
import { agencyTheme } from "../theme/agency";
import { ResetCSS } from "../assets/css/style";
import { GlobalStyle, AgencyWrapper } from "../style/agency.style";
import Navbar from "../containers/Navbar";
import BannerSection from "../containers/BannerSection";
import FeatureSection from "../containers/FeatureSection";
import AboutUsSection from "../containers/AboutUsSection";
import WorkHistory from "../containers/WorkHistory";
import BlogSection from "../containers/BlogSection";
import TestimonialSection from "../containers/TestimonialSection";
import TeamSection from "../containers/TeamSection";
import VideoSection from "../containers/VideoSection";
import FaqSection from "../containers/FaqSection";
import NewsletterSection from "../containers/NewsletterSection";
import QualitySection from "../containers/QualitySection";
import Footer from "../containers/Footer";
import { DrawerProvider } from "../contexts/DrawerContext";
import "@redq/reuse-modal/es/index.css";
import SEO from "../components/seo";

export default () => {
  return (
    <ThemeProvider theme={agencyTheme}>
      <Fragment>
        <SEO title="Agency" />
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
          <FeatureSection />
          <AboutUsSection />
          <WorkHistory />
          <BlogSection />
          <QualitySection />
          <VideoSection />
          <TestimonialSection />
          <TeamSection />
          <FaqSection />
          <NewsletterSection />
          <Footer />
        </AgencyWrapper>
        {/* End of agency wrapper section */}
      </Fragment>
    </ThemeProvider>
  );
};
