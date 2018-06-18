import React, { Component } from 'react'
import Link from 'gatsby-link'
import Media from 'react-media'

import Menu from './menu';
import headerImage from './../images/header.jpg';
import '../styles/menu.css';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hamburgerMenuClassName: 'hamburger-icon',
      menuVisibility: 'menu-drop-down-closed'
    };
    this.clickMenu = this.clickMenu.bind(this);
  }

  clickMenu() {
    const closed = this.state.hamburgerMenuClassName === 'hamburger-icon';
    this.setState({
      hamburgerMenuClassName: closed ? 'hamburger-icon clicked' : 'hamburger-icon',
      menuVisibility: closed ? 'menu-drop-down-open' : 'menu-drop-down-closed'
    });
  }

  render() {
    return (
      <div id='outer-header-div'>
        <Media query={{ maxWidth: 848 }}>
          {matches =>
            matches ? (
              <div>
                <div id='menu-small-screen' className={'sticky'}>
                  <div id='menu-small-screen-header'>
                    <div id='menu-small-screen-header-title' className={'menu-link'}>
                      <Link to='/'>
                        <h2 id='menu-title'>Tromsø Strikkefestival</h2>
                      </Link>
                      <Link to='/'>
                        <h2 id='menu-date'>12. - 14. Oktober 2018</h2>
                      </Link>
                    </div>
                    <div className={this.state.hamburgerMenuClassName} onClick={this.clickMenu}>
                      <div className={'bar1'}></div>
                      <div className={'bar2'}></div>
                      <div className={'bar3'}></div>
                    </div>
                  </div>
                  <Menu
                    menuId={this.state.menuVisibility}
                    linkClassName={'menu-item-small menu-link'}
                  />
                </div>
                <div id='header-image-div'/> {/* liten hack for at padding med header skal bli riktig */}
              </div>
            ) : (
              <div>
                <div id='menu-big-screen' className={'sticky'}>
                  <div id='menu-big-screen-title' className={'menu-link'}>
                    <Link to='/'>
                      <h2 id='menu-title'>Tromsø Strikkefestival</h2>
                    </Link>
                    <Link to='/'>
                      <h2 id='menu-date'>12. - 14. Oktober 2018</h2>
                    </Link>
                  </div>
                  <Menu
                    menuId={'menu-big-screen-menu'}
                    linkClassName={'menu-item-large menu-link'}
                  />
                </div>
                <div id='header-image-div'>
                  <Link to='/'>
                    <img src={headerImage} alt={'Header image'} id='header-image' />
                  </Link>
                </div>
              </div>
              )
          }
        </Media>
      </div >
    );
  }
}

export default Header;