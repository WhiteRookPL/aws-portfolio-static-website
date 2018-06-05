import React from "react";
import Img from "gatsby-image";
import Link from "gatsby-link";
import styled from "styled-components";
import { Col, Grid, Row } from "react-flexbox-grid";

import theme from "../theme/main";
import { rhythm } from "../theme/typography";

const Navigation = styled.nav`
  margin: ${rhythm(1)} 0;
`;

const Title = styled.h1`
  font-size: ${rhythm(1)};
`;

const NoLink = styled(Link)`
  color: ${theme.colors.foreground};
  background-image: none;
`;

export const NavigationBar = ({ title, logo }) => (
  <Navigation>
    <Grid fluid>
      <Row center={`xs`} middle={`xs`}>
        <Col md={6} sm={12}>
          <NoLink to={`/`}>
            <Row center={`xs`} middle={`xs`}>
              <Col md={3} sm={12}>
                <Img alt={`My personal page logo`} title={`My personal page logo`} resolutions={logo.resolutions} />
              </Col>
              <Col md={9} sm={12}>
                <Title>{title}</Title>
              </Col>
            </Row>
          </NoLink>
        </Col>
        <Col md={6} sm={12}>
          <Row center={`xs`} middle={`xs`}>
            <Col xs={12}>
              <Link to={`/#contact`}>Contact</Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </Grid>
  </Navigation>
);

export const LogoImageQuery = graphql`
  fragment LogoImageQuery on RootQueryType {
    logoImage : imageSharp(id: { regex: "/favicon/" }) {
      resolutions(width: 75, height: 75) {
        ...GatsbyImageSharpResolutions
      }
    }
  }
`;
