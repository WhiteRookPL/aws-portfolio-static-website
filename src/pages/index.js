import React from "react";

import { Paper } from "../components/content";
import { ContactForm } from "../components/forms";

export default ({ data }) => {
  const { page } = data;
  const { contactFormHandlerUrl, siteUrl } = data.site.siteMetadata;

  return (
    <Paper>
      <div dangerouslySetInnerHTML={{ __html: page.html }} />
      <h3 name={`contact`}>You can contact me here:</h3>
      <ContactForm siteUrl={siteUrl} contactFormHandlerUrl={contactFormHandlerUrl} />
    </Paper>
  );
};

export const query = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        siteUrl
        contactFormHandlerUrl
      }
    }

    page : markdownRemark(fields: { slug: { eq: "/" } }) {
      html
    }
  }
`;
