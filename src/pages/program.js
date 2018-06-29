import React from 'react'
import Link from 'gatsby-link'
import '../styles/program.css';

export default function Program({ data }) {
  const { edges: posts } = data.allMarkdownRemark;
  const programPosts = posts.filter(post => post.node.id.indexOf('pages/program') > 0);
  
  return (
    <div className="blog-posts">
      <h1>Program</h1>
      <p>I år har vi et rikholdig program med alt fra foredrag innen Norsk ull, lokal produksjon og mønsterstrikk sett fra mange vinkler. Vi kjører også småkurs innenfor flere forskjellige felt og har aktiviterer for barn og ungdom begge dager. Vi fyller lokalet med små arbeidsstasjoner i diverse teknikker. Vær oppmerksom på at mye av påmeldinger til småkurs med mer skjer via hoopla.no. Påmeldingslenker kommer snart.</p>
      {programPosts
        .filter(post => post.node.frontmatter.title.length > 0)
        .map(({ node: post }) => {
          return (
            <div className="event-preview" key={post.id}>
              <Link to={post.frontmatter.path}>
                <div className='event-header'>
                  <h3>{post.frontmatter.title}</h3>
                  <h4>{post.frontmatter.day}</h4>
                  <h4>{post.frontmatter.time}</h4>
                  <h4>{post.frontmatter.location}</h4>
                </div>
                <div className='event-body'>
                  <p>{post.excerpt}</p>
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
          }
        }
      }
    }
  }
`;
