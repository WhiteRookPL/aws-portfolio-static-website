import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import { Col, Grid, Row } from "react-flexbox-grid";

import theme from "../theme/main";
import { rhythm } from "../theme/typography";

const SmallAnchor = styled.a`
  font-size: small;
`;

export const GoogleAnalyticsOptOutLink = () => (
  // eslint-disable-next-line no-script-url
  <SmallAnchor href="javascript:gaOptout();">Disable Google Analytics</SmallAnchor>
);

const CookieBarStyle = styled.div`
  position: fixed;
  z-index: 9998;

  bottom: 0;
  width: 100%;

  padding: ${rhythm(0.5)};
  cursor: pointer;

  display: ${props => {
    if (props.hide) {
      return `none`;
    }

    return `block`;
  }};

  color: ${theme.colors.white};
  border: 1px solid ${theme.colors.brilliantAzure};
  background-color: ${theme.colors.mayaBlue};

  a {
    color: ${theme.colors.white};
    background-image:
      linear-gradient(
        to top,
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0) 1px,
        ${theme.colors.white} 1px,
        ${theme.colors.white} 2px,
        rgba(0, 0, 0, 0) 2px);
  }

  a:hover {
    color: ${theme.colors.white};
    background-image:
      linear-gradient(
        to top,
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0) 1px,
        ${theme.colors.mayaBlue} 1px,
        ${theme.colors.mayaBlue} 2px,
        rgba(0, 0, 0, 0) 2px);
  }
`;

export class CookieBar extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      cookiesAccepted: true,
    };

    this.acceptConsent = this.acceptConsent.bind(this);
  }

  acceptConsent () {
    localStorage.setItem(`CookiesAccepted`, true);
    this.setState({ cookiesAccepted: true });
  }

  componentDidMount () {
    const cookiesAccepted = localStorage.getItem(`CookiesAccepted`) === `true`;
    this.setState({ cookiesAccepted });
  }

  render () {
    return (
      <CookieBarStyle onClick={this.acceptConsent} hide={this.state.cookiesAccepted}>
        <Grid>
          <Row center={`xs`}>
            <Col xs={12}>
              We use cookies to make your exploring a better experience.
              Click this bar to accept the <Link to={`/terms-of-use`}>terms of use</Link>.
            </Col>
          </Row>
        </Grid>
      </CookieBarStyle>
    );
  }
}
