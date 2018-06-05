import React from "react";

import { Paper } from "../components/content";

export default ({ data }) => {
  const post = data.page;

  return (
    <Paper>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Paper>
  );
};

export const query = graphql`
  query ContentPageQuery($slug: String!) {
    page : markdownRemark(fields: { slug: { eq: $slug } }) {
      html
    }
  }
`;
