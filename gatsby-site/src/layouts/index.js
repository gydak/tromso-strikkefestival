import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Media from 'react-media'

import Header from '../components/header'
import Sidebar from '../components/sidebar'
import Social from '../components/social'
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
                <Sidebar/>
                <Social/>
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
