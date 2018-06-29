import React from "react";
import Helmet from "react-helmet";

export default function Template({
  data
}) {
  const post = data.markdownRemark;

  return (
    <div className="event-container">
      <Helmet title={`Tromsø strikkefestival - ${post.frontmatter.title}`} />
      <div className="event">
        <h1>{post.frontmatter.title}</h1>
        <h4>{post.frontmatter.date}</h4>
        <div
          className="event-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </div>
  );
};

export const pageQuery = graphql`
  query EventByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        day
        time
        location
        path
      }
    }
  }
`
  ;