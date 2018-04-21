import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Media from 'react-media'

import Header from '../components/header'
import Sidebar from '../components/sidebar'
import './index.css'
import '../styles/layout.css'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'Tromsø, strikkefestival, strikking' },
      ]}
    />
    <Header />
    <div
      style={{
        margin: "0 auto",
        maxWidth: 980,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        height: "100%"
      }}
    >
      <Media query={{ maxWidth: 848 }}>
        {matches =>
          matches ? (
            <div
              style={{
                margin: "0 auto",
                maxWidth: 980,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                height: "100%",
                padding: "25px"
              }}
            >
              <div style={{ flex: 1 }}>{children()}</div>
            </div>
          ) : (
              <div
                style={{
                  margin: "0 auto",
                  maxWidth: 980,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  height: "100%",
                  padding: "25px"
                }}
              >
                <div style={{ flex: 2.5, paddingRight: "30px" }}>
                  {children()}
                </div>
                <div style={{ flex: 1 }}>
                  <Sidebar
                    title="Tromsø strikkefestival"
                    description="Ad excepteur veniam id do et enim est magna anim officia cillum. Commodo eiusmod 
                    veniam Lorem et nostrud aliquip officia sit commodo laborum. Deserunt enim incididunt
                    esse eiusmod ad non Lorem aliquip nisi proident ut sint. Cupidatat est duis non adipisicing."
                  />
                  <Sidebar
                    title="Kontakt oss:"
                    description="Epost...."
                  />
                </div>
              </div>
            )
        }
      </Media>
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
