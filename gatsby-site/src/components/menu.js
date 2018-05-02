import React, { Component } from 'react'
import Link from 'gatsby-link'
import '../styles/menu.css';

class Menu extends Component {
  render() {
    return (
      <div id={this.props.menuId}>
        <div className={this.props.linkClassName}>
          <Link to='/om-festivalen'>
            <p>Om Festivalen</p>
          </Link>
        </div>
        <div className={this.props.linkClassName}>
          <Link to='/program'>
            <p>Program</p>
          </Link>
        </div>
        <div className={this.props.linkClassName}>
          <Link to='/hvem-kommer'>
            <p>Hvem Kommer?</p>
          </Link>
        </div>
        <div className={this.props.linkClassName}>
          <Link to='/barn-og-ungdom'>
            <p>Barn og Ungdom</p>
          </Link>
        </div>
      </div>
    );
  }
}

export default Menu;