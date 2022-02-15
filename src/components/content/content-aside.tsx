import * as React from 'react'
import styled from 'styled-components'

const ContentAside = styled.aside``

const ContentAsideHeader = styled.div`
  text-transform: uppercase;
  color: #66486d;
  font-weight: 600;
  letter-spacing: 0.2rem;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
`

const ContentAsideMenu: React.FunctionComponent = ({ children }) => (
  <div>
    <ul>{children}</ul>
  </div>
)

const StyledContentAsideMenuItem = styled.li`
  &:not(:first-child) {
    margin-top: 1rem;
  }
`

interface ContentAsideMenuItemProps {
  href: string
  text: string
}

const ContentAsideMenuItem: React.FunctionComponent<ContentAsideMenuItemProps> = ({ href, text }) => (
  <StyledContentAsideMenuItem>
    <a href={href}>{text}</a>
  </StyledContentAsideMenuItem>
)

export { ContentAside, ContentAsideHeader, ContentAsideMenu, ContentAsideMenuItem }
