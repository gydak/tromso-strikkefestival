import React from 'react';
import '../styles/sidebar.css';

const Sidebar = (props) => (
  <div id='sidebar-div'>
    <h3 id='sidebar-header'>{props.title}</h3>
    <p id='sidebar-text'>{props.description} </p>
  </div>
);

export default Sidebar;