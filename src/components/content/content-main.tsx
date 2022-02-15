import * as React from 'react'
import styled from 'styled-components'
import { ContentWrapper } from './content-wrapper'

const StyledContentMain = styled.div`
  margin: 4rem 0;
`

const ContentMain: React.FunctionComponent = ({ children }) => (
  <StyledContentMain>
    <ContentWrapper>{children}</ContentWrapper>
  </StyledContentMain>
)

export { ContentMain }
