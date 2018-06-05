import React from "react";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import Link from "gatsby-link";
import styled from "styled-components";
import { Col, Grid, Row } from "react-flexbox-grid";
import { faFacebookF, faGithub, faInstagram, faLinkedinIn, faTwitter } from "@fortawesome/fontawesome-free-brands";

import { GoogleAnalyticsOptOutLink } from "./cookies"
import { SocialMediaIcon } from "./icons";
import { PlainList, PlainListItem } from "./lists"

import theme from "../theme/main";
import { rhythm } from "../theme/typography";

const FooterGrid = styled(Grid)`
  margin: ${rhythm(1)} 0;
  font-size: ${rhythm(0.6)};

  color: ${theme.colors.pastelGray};

  h3 {
    font-size: ${rhythm(0.8)};
  }
`;

const SmallEm = styled.em`
  font-size: ${rhythm(0.5)};
`;

export const SummarySection = ({ owner, social, contact }) => (
  <section>
    <FooterGrid fluid>
      <Row start={`md`} center={`xs`}>
        <Col sm={12} md={6}>
          <Row start={`md`} center={`sm`}>
            <Col xs={12}>
              <h3>{owner}</h3>
            </Col>
          </Row>
          <Row start={`md`} center={`sm`}>
            <Col xs={12}>
              <PlainList>
                <PlainListItem><Link to={`/#contact`}>Contact</Link></PlainListItem>
                <PlainListItem><Link to={`/terms-of-use`}>Terms of use</Link></PlainListItem>
              </PlainList>
            </Col>
          </Row>
        </Col>
        <Col sm={12} md={6}>
          <Row end={`md`} center={`sm`}>
            <Col xs={12}>
              <h3>Social Media</h3>
            </Col>
          </Row>
          <Row end={`md`} center={`xs`}>
            <Col xs={4}>
              <Row around={`xs`} >
                <Col>
                  <SocialMediaIcon>
                    <a href={social.twitterProfile} target={`_blank`}><FontAwesomeIcon icon={faTwitter} /></a>
                  </SocialMediaIcon>
                </Col>
                <Col>
                  <SocialMediaIcon>
                    <a href={social.githubProfile} target={`_blank`}><FontAwesomeIcon icon={faGithub} /></a>
                  </SocialMediaIcon>
                </Col>
                <Col>
                  <SocialMediaIcon>
                    <a href={social.facebookProfile} target={`_blank`}><FontAwesomeIcon icon={faFacebookF} /></a>
                  </SocialMediaIcon>
                </Col>
                <Col>
                  <SocialMediaIcon>
                    <a href={social.linkedinProfile} target={`_blank`}><FontAwesomeIcon icon={faLinkedinIn} /></a>
                  </SocialMediaIcon>
                </Col>
                <Col>
                  <SocialMediaIcon>
                    <a href={social.instagramProfile} target={`_blank`}><FontAwesomeIcon icon={faInstagram} /></a>
                  </SocialMediaIcon>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row end={`md`} center={`sm`}>
            <Col xs={12}>
              <Row>
                <Col xs={12}>
                  <a href={`mailto:${contact.email}`} target={`_blank`}>Email me!</a>
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <GoogleAnalyticsOptOutLink />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row center={`xs`}>
        <SmallEm>
          Proudly built with use of <a href={`https://gatsbyjs.org`} target={`_blank`}>Gatsby.js</a> with this <a href={`https://github.com/WhiteRookPL/gatsby-event-page-starter`} target={`_blank`}>starter</a>.
        </SmallEm>
      </Row>
      <Row center={`xs`}>
        <SmallEm>
          Copyright &copy; {owner} &minus; 2018
        </SmallEm>
      </Row>
    </FooterGrid>
  </section>
);
