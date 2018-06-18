import React from 'react';
import Link from 'gatsby-link';

const NotFoundPage = () => (
  <div>
    <h1>Vi kunne dessverre ikke finne siden du lette etter..</h1>
    <p>
      Prøv å gå tilbake til <Link to="/">forsiden</Link> å naviger derfra, eller send oss en <a href="mailto:tstrikkefestival@gmail.com?Subject=Hei, jeg har et spørmål!" target="_top">epost</a> hvis du har spørsmål!
    </p>
  </div>
)

export default NotFoundPage;
