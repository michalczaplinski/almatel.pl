import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Box from "../../reusecore/src/elements/Box";
import Heading from "../../reusecore/src/elements/Heading";
import Text from "../../reusecore/src/elements/Text";
import Container from "../../common-components/UI/Container";
import ContactSectionWrapper from "./contactSection.style";

const ContactText = styled(Text)`
  font-size: 18;
  color: #343d48cc;
  line-height: 1.2;
`;

const ContactBox = styled(Box)`
  padding-top: 18px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: flex-start;
`;

const ContactSubbox = styled(Box)`
  margin: 20px;
  margin-left: 50px;
  margin-right: 50px;

  display: flex;
  flex-flow: column;
`;

const NewsletterSection = ({
  sectionHeader,
  sectionTitle,
  btnStyle,
  sectionSubTitle
}) => {
  return (
    <ContactSectionWrapper id="contactSection">
      <Container>
        <Box {...sectionHeader}>
          <Heading content="Kontakt" {...sectionTitle} />

          <ContactBox>
            <ContactSubbox style={{ paddingTop: 4 }}>
              <h3 style={{ marginBlockStart: 0, margin: 0 }}>ALMATEL</h3>
              <h4 style={{ marginBlockStart: 0, margin: 0 }}>Spółka Jawna </h4>
            </ContactSubbox>
            <ContactSubbox>
              <a
                href="mailto:biuro@almatel.com?subject=Zapytanie"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ContactText content="biuro@almatel.pl" />
              </a>
              <a href="tel:618681200">
                <ContactText content="(061) 8 681 200" />
              </a>
            </ContactSubbox>
            <ContactSubbox>
              <ContactText content="60-118 Poznań" />
              <ContactText content="ul. Krzywa 9" />
            </ContactSubbox>
          </ContactBox>
        </Box>
      </Container>
    </ContactSectionWrapper>
  );
};

// NewsletterSection style props
NewsletterSection.propTypes = {
  sectionHeader: PropTypes.object,
  sectionTitle: PropTypes.object,
  sectionSubTitle: PropTypes.object
};

// NewsletterSection default style
NewsletterSection.defaultProps = {
  // section header default style
  sectionHeader: {
    mb: "56px"
  },
  // section title default style
  sectionTitle: {
    textAlign: "center",
    fontSize: ["20px", "24px"],
    fontWeight: "400",
    color: "#0f2137",
    letterSpacing: "-0.025em",
    mb: "0"
  },
  // button default style
  btnStyle: {
    minWidth: "152px",
    minHeight: "45px",
    fontSize: "14px",
    fontWeight: "500"
  },
  sectionSubTitle: {
    as: "span",
    display: "block",
    textAlign: "center",
    fontSize: "14px",
    letterSpacing: "0.15em",
    fontWeight: "700",
    color: "#008dd2",
    mb: "10px"
  }
};

export default NewsletterSection;
