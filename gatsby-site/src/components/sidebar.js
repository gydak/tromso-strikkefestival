import React from 'react';
import '../styles/sidebar.css';

const Sidebar = (props) => (
  <div id='sidebar-div'>
    <h3 id='sidebar-header'>Velkommen til årets festival!</h3>
    <p id='sidebar-text'>
      Aute do sunt adipisicing dolor Lorem. Veniam nulla in magna quis ex Lorem do aute magna
      deserunt occaecat do aliqua. Ad est laborum nostrud officia est velit quis ad.
    </p>
    <p id='sidebar-email'>
      <b>Spørsmål?</b> Send oss en&nbsp;
      <a href="mailto:tstrikkefestival@gmail.com?Subject=Hei, jeg har et spørmål!" target="_top">
        epost
      </a>
      !
    </p>
    <p id='sidebar-facebook'>
      <b>Lik oss</b> på&nbsp;
      <a href="https://www.facebook.com/strikkefestivalenitromso/" target="_blank">
        facebook
      </a>
      !
    </p>
  </div>
);

export default Sidebar;