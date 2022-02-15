import * as React from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

import { ContentFooter } from './content-footer'
import { ContentHeader } from './content-header'
import { ContentMain } from './content-main'

const ContentGrid = styled.div`
  display: grid;

  @media screen and (min-width: 800px) {
    grid-template-rows: 80px 1fr 100px;
    min-height: 100vh;
  }
`

const Content: React.FunctionComponent = ({ children }) => (
  <ContentGrid>
    <ContentHeader />
    <ContentMain>
      <Outlet />
    </ContentMain>
    <ContentFooter />
  </ContentGrid>
)

export { Content }
