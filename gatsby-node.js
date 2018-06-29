/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */


const path = require('path');
exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;
  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`);
  const eventTemplate = path.resolve('src/templates/event.js');
  return graphql(`{
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
    ) {
      edges {
        node {
          excerpt(pruneLength: 250)
          html
          id
          frontmatter {
            date
            path
            title
            day
            time
            location
            path
          }
        }
      }
    }
  }`)
    .then(result => {
      if (result.errors) {
        return Promise.reject(result.errors);
      }

      result.data.allMarkdownRemark.edges
        .forEach(({ node }) => {
          if (node.id.indexOf('pages/program') > 0) {
            createPage({
              path: node.frontmatter.path,
              component: eventTemplate,
              context: {} // additional data can be passed via context
            });
          }
          else {
            createPage({
              path: node.frontmatter.path,
              component: blogPostTemplate,
              context: {} // additional data can be passed via context
            });
          }
        });
    });
}