import React from 'react';
import '../styles/sidebar.css';

const Sidebar = (props) => (
  <div id='sidebar-div'>
    <h3 id='sidebar-header'>NORDNORSK STRIKKELYKKE</h3>
    <p id='sidebar-text'>
      Vi løfter temaet Nordnorsk stikkelykke med oss videre i år også, og håper at 
      årets festival, for 8ende år på rad, vil gi påfyll av enorm strikkeglede og 
      inspirasjon. Hjertelig velkommen til årets strikkefestival på Veita.
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