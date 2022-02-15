import * as React from 'react'
import styled from 'styled-components'
import { ContentWrapper } from './content-wrapper'

const StyledContentFooter = styled.div`
  width: 100%;
  background-color: #484848;
  color: #fff;
  display: flex;
  align-items: center;
`

const Footer = styled.footer`
  display: flex;
  flex-direction: row;
`

const ContentFooterCopy = styled.div`
  margin-left: 1rem;
  display: grid;
  grid-template-rows: 1fr 1fr;
`

const ContentFooterCopyMain = styled.span`
  font-size: 1.2rem;
  font-weight: 600;
`

const ContentFooterCopySub = styled.span`
  margin-top: 0.3rem;
  font-size: 0.8rem;
`

const ContentFooterSocial = styled.div`
  margin-left: auto;
  margin-right: 1rem;
  display: flex;
  align-items: center;
`

const ContentFooterSocialIcon = styled.div`
  margin-left: 0.5rem;
  margin-top: 0.3rem;
`

const ContentFooterSocialIconImage = styled.img`
  display: inline;
  height: 26px;
`

const ContentFooter: React.FunctionComponent = () => (
  <StyledContentFooter>
    <ContentWrapper>
      <Footer>
        <ContentFooterCopy>
          <ContentFooterCopyMain>© 2018 Crown Laboratory</ContentFooterCopyMain>
          <ContentFooterCopySub>Case Western Reserve University</ContentFooterCopySub>
        </ContentFooterCopy>
        <ContentFooterSocial>
          <div>Follow us on</div>
          <ContentFooterSocialIcon>
            <a href='https://twitter.com/nicolecrown2'>
              <ContentFooterSocialIconImage src='/images/twitter.svg' alt='Logo for Twitter' />
            </a>
          </ContentFooterSocialIcon>
        </ContentFooterSocial>
      </Footer>
    </ContentWrapper>
  </StyledContentFooter>
)

export { ContentFooter }
