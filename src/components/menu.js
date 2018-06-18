import React, { Component } from 'react'
import Link from 'gatsby-link'
import '../styles/menu.css';

class Menu extends Component {
  render() {
    return (
      <div id={this.props.menuId}>
        <div className={this.props.linkClassName}>
          <Link to='/om-festivalen'>
            <p>OM FESTIVALEN</p>
          </Link>
        </div>
        <div className={this.props.linkClassName}>
          <Link to='/program'>
            <p>PROGRAM</p>
          </Link>
        </div>
        <div className={this.props.linkClassName}>
          <Link to='/praktisk-info'>
            <p>PRAKTISK INFO</p>
          </Link>
        </div>
        {/*
        <div className={this.props.linkClassName}>
          <Link to='/barn-og-ungdom'>
            <p>BARN OG UNGDOM</p>
          </Link>
        </div>
        */}
      </div>
    );
  }
}

export default Menu;