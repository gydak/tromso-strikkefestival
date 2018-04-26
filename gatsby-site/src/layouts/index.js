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
    <div id='main-div'>
      <Media query={{ maxWidth: 848 }}>
        {matches =>
          matches ? (
            <div className={'layout-blog-div'}>
              <div id='layout-blog-div-small'>
              {children()}
              </div>
            </div>
          ) : 
          (
            <div className={'layout-blog-div'}>
              <div id='layout-blog-div-big'>
                {children()}
              </div>
              <div id='layout-sidebar-div'>
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
