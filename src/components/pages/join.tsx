import * as React from 'react'
import { ContentLayout } from '../content/content-layout'
import { ContentTitle } from '../content/content-title'

const Join: React.FunctionComponent = () => (
  <ContentLayout>
    <ContentTitle>Join Us</ContentTitle>
    <section>
      <p>
        We opened in July of 2018 and are currently hiring at all levels. Our lab is a good fit for people who are
        dedicated to maintaining a positive, fun, and laid-back lab environment while doing rigorous science. Our
        guiding principle is that scientific rigor and kindness are not mutually exclusive.
      </p>
      <p>
        Graduate Students: We have funding for two graduate positions starting in the Fall of 2019. Applications are due
        December 15, 2018. If you are interested in joining the lab,{' '}
        <a href='http://biology.case.edu/graduate/'>start here</a>.
      </p>
      <p>
        Postdocs: We have funding for a postdoctoral researcher. We are happy to host postdocs pursuing research or
        teaching careers.
      </p>
      <p>
        <a href='http://case.edu/about/cleveland.html'>Cleveland</a> is a vibrant community, with people that are
        passionate and dedicated to the city’s success. Check out{' '}
        <a href='https://www.universitycircle.org'>University Circle</a> (home to CWRU), the{' '}
        <a href='https://www.foodandwine.com/travel/restaurants/what-eat-in-48-hours-in-cleveland'>
          Cleveland food scene
        </a>
        , and <a href='https://www.nps.gov/cuva/index.html'>Cuyahoga Valley National Park</a>.
      </p>
      <p>
        Send initial inquiries to Nicole at <a href='mailto:nicole.crown@case.edu'>nicole.crown@case.edu</a>.
      </p>
    </section>
  </ContentLayout>
)

export { Join }
