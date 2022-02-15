import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledSplashMenu = styled.div`
  margin-top: 3rem;
  font-size: 1.25rem;
  font-weight: 600;
  letter-spacing: 0.25rem;

  @media screen and (min-width: 1240px) {
    font-size: 1.5rem;
  }
`

const StyledSplashMenuItem = styled.li`
  margin-bottom: 1rem;

  & > a {
    color: #fff;
    text-decoration: none;
  }

  & > a:hover {
    color: #cb90da;
    text-decoration: none;
  }
`

const SplashMenu: React.FunctionComponent = ({ children }) => (
  <StyledSplashMenu>
    <ul>{children}</ul>
  </StyledSplashMenu>
)

interface SplashMenuItemProps {
  route: string
  text: string
}

const SplashMenuItem: React.FunctionComponent<SplashMenuItemProps> = ({ route, text }) => (
  <StyledSplashMenuItem>
    <Link to={route}>{text}</Link>
  </StyledSplashMenuItem>
)

export { SplashMenu, SplashMenuItem }
