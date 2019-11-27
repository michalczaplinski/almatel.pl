import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import PropTypes from "prop-types";
import Fade from "react-reveal/Fade";
import Box from "../../reusecore/src/elements/Box";
import Text from "../../reusecore/src/elements/Text";
import Heading from "../../reusecore/src/elements/Heading";
import Card from "../../reusecore/src/elements/Card";
import Image from "../../reusecore/src/elements/Image";
import FeatureBlock from "../../common-components/FeatureBlock";
import Container from "../../common-components/UI/Container";
import OfferSectionWrapper from "./offerSection.style";
import FeatureImage from "../../assets/image/room.jpg";

const OfferSection = ({
  row,
  col,
  title,
  featureCol,
  description,
  textArea,
  imageArea,
  imageAreaRow,
  imageWrapper,
  featureTitle,
  featureDescription,
  iconStyle
}) => {
  const Data = useStaticQuery(graphql`
    query {
      agencyJson {
        offer {
          description
          icon
          id
          title
        }
      }
    }
  `);

  return (
    <OfferSectionWrapper id="offerSection">
      <Container>
        <Box className="row" {...row}>
          <Box className="col" {...col} {...textArea}>
            <FeatureBlock
              title={
                <Heading
                  content="Kompleksowe Technologie Budynkowe"
                  {...title}
                />
              }
              description={<Text content="" {...description} />}
            />
          </Box>
        </Box>
        <Box className="row" {...row} {...textArea}>
          {Data.agencyJson.offer.map((feature, index) => (
            <Box className="col" {...featureCol} key={`offer-${index}`}>
              <FeatureBlock
                icon={<i className={feature.icon} />}
                iconPosition="left"
                iconStyle={iconStyle}
                title={<Heading content={feature.title} {...featureTitle} />}
                description={
                  <Text content={feature.description} {...featureDescription} />
                }
              />
            </Box>
          ))}
        </Box>
      </Container>
      <Container fluid noGutter className="info-sec-container">
        <Box className="row" {...row} {...imageAreaRow}>
          <Box className="col" {...col} {...imageArea}>
            <Card {...imageWrapper}>
              <Fade right delay={200}>
                <Image
                  src={FeatureImage}
                  alt="Feature Image"
                  style={{ maxHeight: 550 }}
                />
              </Fade>
            </Card>
          </Box>
        </Box>
      </Container>
    </OfferSectionWrapper>
  );
};

OfferSection.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  featureCol: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object,
  button: PropTypes.object
};

OfferSection.defaultProps = {
  // Quality section row default style
  row: {
    flexBox: true,
    flexWrap: "wrap",
    ml: "-15px",
    mr: "-15px"
  },
  // Quality section iamge row default style
  imageAreaRow: {
    flexDirection: "row-reverse"
  },
  // Quality section col default style
  col: {
    pr: "15px",
    pl: "15px"
  },
  // Quality feature col default style
  featureCol: {
    width: [1, 1, 1 / 2],
    pr: "15px",
    pl: "15px"
  },
  // Quality section text area default style
  textArea: {
    width: [1, "100%", "100%", "70%", "64%"]
  },
  // Quality section image area default style
  imageArea: {
    width: [1, "100%", "100%", "30%", "38%"],
    flexBox: true,
    flexDirection: "row-reverse"
  },
  // Quality section image wrapper default style
  imageWrapper: {
    boxShadow: "none",
    width: "100%"
  },
  // Quality section title default style
  title: {
    fontSize: ["26px", "26px", "32px", "40px"],
    lineHeight: "1.5",
    fontWeight: "300",
    color: "#0f2137",
    letterSpacing: "-0.025em",
    mb: "20px"
  },
  // Quality section description default style
  description: {
    fontSize: "16px",
    color: "#343d48cc",
    lineHeight: "2.1",
    mb: "33px"
  },
  // feature icon default style
  iconStyle: {
    width: "54px",
    height: "54px",
    borderRadius: "50%",
    bg: "#008dd2",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "24px",
    color: "#ffffff",
    overflow: "hidden",
    mt: "6px",
    mr: "22px",
    flexShrink: 0
  },
  // feature title default style
  featureTitle: {
    fontSize: ["18px", "20px"],
    fontWeight: "400",
    color: "#0f2137",
    lineHeight: "1.5",
    mb: "8px",
    letterSpacing: "-0.020em"
  },
  // feature description default style
  featureDescription: {
    fontSize: "15px",
    lineHeight: "1.84",
    color: "#343d48cc"
  }
};

export default OfferSection;
