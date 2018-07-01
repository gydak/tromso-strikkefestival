import React from "react";
import Helmet from "react-helmet";
import '../styles/program.css';

export default function Template({
  data
}) {
  const post = data.markdownRemark;
  const image = post.frontmatter.image != null ? post.frontmatter.image.childImageSharp.resize.src : require('./../pages/program/placeholder.jpg');
  return (
    <div className="event-container">
      <Helmet title={`Tromsø strikkefestival - ${post.frontmatter.title}`} />
      <h1>{post.frontmatter.title}</h1>
      <div className="event-info">
        <div className="event-info-when">
          <p className="event-info-title">
            Når:
          </p>
          <p className="event-info-content">
            {post.frontmatter.day} - {post.frontmatter.time}
          </p>
        </div>
        <div className="event-info-where">
          <p className="event-info-title">
            Hvor:
          </p>
          <p className="event-info-content">
            {post.frontmatter.location}
          </p>
        </div>
      </div>
      <div
        className="event-content"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
      <img src={image} alt='event image' className="event-image" />
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
        image {
          childImageSharp {
            resize(width: 1500, height: 1500) {
              src
            }
          }
        }
      }
    }
  }
`
  ;