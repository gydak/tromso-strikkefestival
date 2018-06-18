import React from 'react'
import Link from 'gatsby-link'
import '../styles/info.css';

const PraktiskInfo = () => (
  <div>
    <h1>På festivalen</h1>
    <p className={'info-intro'}>
      <i>Plan 3 på Veita gir oss fantasiske muligheter. Det vil være bokser fylt av strikkeinspirasjon, småkurs, festivalbutikk, barneaktiviterter, designkonkurranse mm.</i>
    </p>
    <h2>Handle på festivalen</h2>
    <ul>
      <li>
        <b>Norsk Flid Husfliden</b> stiller som vanlig med festivalshop (lørdag og søndag) slik de har gjort tidligere år. Så her vil det være muligheter til å handle det du trenger til workshopene pluss litt annet strikkegodteri. De tar kort!
        </li>
      <li>
        <b>Norges husflidslag</b> har også en liten stand med informasjon og mulighet til å melde seg inn, og kanskje handle noen av produktene deres. Mulig at det kan være greit å ha med litt kontanter om noe skulle friste!
        </li>
      <li>
        <b>Bokhuset Libris</b> utstiller høstens strikkelitteratur, slik at du kan se og kjøpe årets strikkebøker.
        </li>
    </ul>
    <h2>Bokbyttestasjon</h2>
    <p>
      Vi oppfordrer alle til å varme opp til festival med å pakke klar strikkebøker du ikke lengere trenger eller kanskje har flere av. Disse leveres inn på lørdagen på festivalen. Det blir egen bokbyttestasjon (lørdag og søndag). Kanskje du gjør et kupp og finner den perfekte boka!
    </p>
    <p>
      <b>Obs:</b> om du ikke vil bytte bort boka di, men bare donere bort boka til festivalen, så er det absolutt mulig. Søndag vil de bøkene som er til overs selges for en rimelig penge til de som ønsker å kjøpe.
    </p>
    <h2>Designkonkurranse</h2>
    <p>
      La den nordnorske strikkelykken inspirere deg! Vi utlyser konkurranse for de kreative designerspirer. Vi lager en flott utstilling av bidragene under festivalen, som vil bli juryert av både fagjury og folkejury.
      Les mer <Link to="/designkonkurranse">HER</Link>.
    </p>
  </div>
)

export default PraktiskInfo;
