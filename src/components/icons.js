import React from "react";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import styled from "styled-components";

import { faHome } from "@fortawesome/fontawesome-free-solid";
import { faEnvelope } from "@fortawesome/fontawesome-free-regular";

import theme from "../theme/main";
import { rhythm } from "../theme/typography";

export const HomeIcon = () => (
  <FontAwesomeIcon icon={faHome} />
);

const NiceIcon = styled.span`
  margin-left: ${rhythm(0.25)};
  bottom: -1px;
  position: relative;
`;

export const EnvelopeIcon = () => (
  <NiceIcon>
    <FontAwesomeIcon icon={faEnvelope} />
  </NiceIcon>
);

export const SocialMediaIcon = styled.span`
  a {
    color: ${theme.colors.foreground};
    background-image: none;
    text-shadow: none;
  }

  a:hover {
    color: ${theme.colors.link};
  }
`;
