import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import '../styles/blog.css';

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark;
  console.log(posts);
  
  return (
    <div className="blog-posts">
      <h3>SISTE NYTT FRA FESTIVALEN:</h3>
      {posts
        .filter(post => post.node.frontmatter.title.length > 0)
        .map(({ node: post }) => {
          return (
            <div className="blog-post-preview" key={post.id}>
              <Link to={post.frontmatter.path}>
                <div className='blog-header'>
                  <h1>
                    {post.frontmatter.title}
                  </h1>
                  <h2>{post.frontmatter.date}</h2>
                </div>
                <div className='blog-body'>
                  <p>{post.excerpt}</p>
                </div>
              </Link>
            </div>
          );
        })}
    </div>
  );
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`;