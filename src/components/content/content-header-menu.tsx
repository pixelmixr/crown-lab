import * as React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const HeaderNav = styled.nav`
  margin-left: auto;
  margin-right: 5rem;
  display: flex;
  align-items: center;
`

const HeaderNavList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
`

const HeaderNavItem = styled.ul`
  margin-left: 3rem;
  font-size: 1.3rem;
`

const HeaderNavAnchor = styled(Link)`
  color: #fff;
  text-decoration: none;

  &:hover {
    color: #cb90da;
  }
`

const ContentHeaderMenu: React.FunctionComponent = ({ children }) => (
  <HeaderNav>
    <HeaderNavList>{children}</HeaderNavList>
  </HeaderNav>
)

interface ContentHeaderMenuItemProps {
  route: string
  text: string
}

const ContentHeaderMenuItem: React.FunctionComponent<ContentHeaderMenuItemProps> = ({ route, text }) => (
  <HeaderNavItem>
    <HeaderNavAnchor to={route}>{text}</HeaderNavAnchor>
  </HeaderNavItem>
)

export { ContentHeaderMenu, ContentHeaderMenuItem }
