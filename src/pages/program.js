import React from 'react'
import Link from 'gatsby-link'
import '../styles/program.css';
import { log } from 'util';

export default function Program({ data }) {
  const { edges: posts } = data.allMarkdownRemark;
  const programPosts = posts.filter(post => post.node.id.indexOf('pages/program') > 0);

  return (
    <div className="blog-posts">
      <h1>Program</h1>
      <p>I år har vi et rikholdig program med alt fra foredrag innen Norsk ull, lokal produksjon og mønsterstrikk sett fra mange vinkler. Vi kjører også småkurs innenfor flere forskjellige felt og har aktiviterer for barn og ungdom begge dager. Vi fyller lokalet med små arbeidsstasjoner i diverse teknikker. Vær oppmerksom på at mye av påmeldinger til småkurs med mer skjer via hoopla.no! Påmeldingslenker kommer snart.</p>
      {programPosts
        .filter(post => post.node.frontmatter.title.length > 0)
        .map(({ node: post }) => {
          const image = post.frontmatter.image != null ? post.frontmatter.image.childImageSharp.resize.src : require('./program/placeholder.jpg');
          return (
            <div className="event-preview" key={post.id}>
              <Link to={post.frontmatter.path}>
                <div className="event-preview-main">
                  <div className="event-preview-left">
                    <img src={image} alt='event image' className="event-preview-image" />
                  </div>
                  <div className="event-preview-right">
                    <div className='event-preview-header'>
                      <h3>{post.frontmatter.title}</h3>
                      <div className="event-preview-info">
                        <h4>{post.frontmatter.day}</h4>
                        <h4>-</h4>
                        <h4>{post.frontmatter.time}</h4>
                        <h4>-</h4>
                        <h4>{post.frontmatter.location}</h4>
                      </div>
                    </div>
                    <div className='event-preview-body'>
                      <p>{post.excerpt}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
    </div>
  );
}

export const programQuery = graphql`
  query programQuery {
    allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            day
            time
            location
            path
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
    }
  }
`;
