import * as React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { ContentHeaderMenu, ContentHeaderMenuItem } from './content-header-menu'
import { ContentWrapper } from './content-wrapper'

const StyledContentHeader = styled.div`
  width: 100%;
  background-color: #484848;
  color: #fff;
  display: flex;
  align-items: center;
`

const Header = styled.header`
  display: flex;
`

const LogoLink = styled(Link)`
  color: inherit;
  text-decoration: none;

  &:hover {
    color: inherit;
    text-decoration: none;
  }
`

const HeaderLogo = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
`

const HeaderLogoImage = styled.span`
  margin-top: 5px;
  width: 40px;
`

const HeaderLogoText = styled.span`
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: 0.3rem;
  margin-left: 0.5rem;
`

const ContentHeader: React.FunctionComponent = () => (
  <StyledContentHeader>
    <ContentWrapper>
      <Header>
        <LogoLink to='/splash' />
        <HeaderLogo>
          <HeaderLogoImage>
            <img src='/images/logo.svg' alt='Logo for Crown Lab' />
          </HeaderLogoImage>
          <HeaderLogoText>CROWN LAB</HeaderLogoText>
        </HeaderLogo>
        <ContentHeaderMenu>
          <ContentHeaderMenuItem route='/content/news' text='News' />
          <ContentHeaderMenuItem route='/content/research' text='Research' />
          <ContentHeaderMenuItem route='/content/people' text='People' />
          <ContentHeaderMenuItem route='/content/join' text='Join Us' />
          <ContentHeaderMenuItem route='/content/contact' text='Contact' />
        </ContentHeaderMenu>
      </Header>
    </ContentWrapper>
  </StyledContentHeader>
)

export { ContentHeader }
