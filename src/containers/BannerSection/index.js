import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Box from "../../reusecore/src/elements/Box";
import Text from "../../reusecore/src/elements/Text";
import Heading from "../../reusecore/src/elements/Heading";
import Button from "../../reusecore/src/elements/Button";
import FeatureBlock from "../../common-components/FeatureBlock";
import Container from "../../common-components/UI/Container";
import AnchorLink from "react-anchor-link-smooth-scroll";
import BannerWrapper from "./bannerSection.style";

const BannerSection = ({
  row,
  col,
  title,
  btnStyle,
  description,
  discountText,
  discountAmount,
  outlineBtnStyle
}) => {
  const ButtonGroup = () => (
    <Fragment>
      <a
        href="mailto:biuro@almatel.com?subject=Zapytanie"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button title="SKONTAKTUJ SIĘ TERAZ!" {...btnStyle} />
      </a>
      <AnchorLink href="#aboutUsSection" offset={0}>
        <Button
          title="O NAS"
          variant="textButton"
          icon={<i className="flaticon-next" />}
          {...outlineBtnStyle}
        />
      </AnchorLink>
    </Fragment>
  );
  return (
    <BannerWrapper>
      <Container>
        <Box className="row" {...row}>
          <Box className="col" {...col}>
            <FeatureBlock
              title={
                <Heading
                  content="Innowacyjne Technologie Budynkowe"
                  {...title}
                />
              }
              description={<Text content="" {...description} />}
              button={<ButtonGroup />}
            />
          </Box>
        </Box>
      </Container>
    </BannerWrapper>
  );
};

BannerSection.propTypes = {
  title: PropTypes.object,
  btnStyle: PropTypes.object,
  description: PropTypes.object,
  contentStyle: PropTypes.object,
  discountText: PropTypes.object,
  discountAmount: PropTypes.object,
  outlineBtnStyle: PropTypes.object
};

BannerSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: "wrap",
    ml: "-15px",
    mr: "-15px",
    alignItems: "center"
  },
  col: {
    pr: "15px",
    pl: "15px",
    width: ["100%", "70%", "60%", "50%"]
  },
  title: {
    fontSize: ["26px", "34px", "42px", "55px"],
    fontWeight: "300",
    color: "#0f2137",
    letterSpacing: "-0.025em",
    mb: ["20px", "25px"],
    lineHeight: "1.31"
  },
  description: {
    fontSize: "16px",
    color: "#343d48cc",
    lineHeight: "2.1",
    mb: "0"
  },
  btnStyle: {
    minWidth: ["120px", "156px"],
    fontSize: "14px",
    fontWeight: "500"
  },
  outlineBtnStyle: {
    minWidth: ["130px", "156px"],
    fontSize: "14px",
    fontWeight: "500",
    color: "#0f2137",
    p: "5px 10px"
  },
  discountAmount: {
    fontSize: "14px",
    color: "#008dd2",
    mb: 0,
    as: "span",
    mr: "0.4em"
  },
  discountText: {
    fontSize: "14px",
    color: "#0f2137",
    mb: 0,
    as: "span"
  }
};

export default BannerSection;
