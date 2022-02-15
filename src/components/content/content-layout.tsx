import * as React from 'react'
import styled, { css } from 'styled-components'

interface ContentLayoutProps {
  twoColumn?: boolean
}

const StyledContentLayout = styled.div<ContentLayoutProps>`
  display: grid;

  ${({ twoColumn }) =>
    twoColumn &&
    css`
      grid-template-columns: 250px 1fr;
    `}
`

const ContentLayoutSpacer = styled.div`
  margin: 0 3rem;
`

const ContentLayout: React.FunctionComponent<ContentLayoutProps> = ({ children, twoColumn }) => (
  <StyledContentLayout twoColumn={twoColumn}>
    {twoColumn ? children : <ContentLayoutSpacer>{children}</ContentLayoutSpacer>}
  </StyledContentLayout>
)

export { ContentLayout }
