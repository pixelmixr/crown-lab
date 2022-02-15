import * as React from 'react'
import { ContentLayout } from '../content/content-layout'
import { ContentTitle } from '../content/content-title'

const Contact: React.FunctionComponent = () => (
  <ContentLayout>
    <ContentTitle>Contact Info</ContentTitle>
    <b>Email:</b>
    <div>
      <a href='mailto:nicole.crown@case.edu'>nicole.crown@case.edu</a>
    </div>
  </ContentLayout>
)

export { Contact }
