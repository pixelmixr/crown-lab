import * as React from 'react'
import styled from 'styled-components'
import { SplashMenu, SplashMenuItem } from './splash-menu'

const StyledSplash = styled.div`
  height: 100vh;
  background: #333333;
  background: linear-gradient(45deg, rgba(51, 51, 51, 1) 0%, rgba(102, 102, 102, 1) 100%);

  @media screen and (min-width: 1240px) {
    display: grid;
    grid-template-columns: 1fr 400px 800px 1fr;
  }
`

const SplashGutter = styled.div`
  display: none;

  @media screen and (min-width: 1240px) {
    display: block;
  }
`

const SplashLeft = styled.div`
  text-align: center;

  & > img {
    height: 100vh;
    opacity: 0.5;
  }

  @media screen and (min-width: 1240px) {
    height: 100%;
    text-align: center;

    & > img {
      opacity: 1;
    }
  }
`

const SplashRight = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 100%;

  @media screen and (min-width: 1240px) {
    position: inherit;
    left: auto;
    top: auto;
    transform: none;
    text-align: right;
    padding-left: 2rem;
  }
`

const SplashText = styled.div`
  color: #fff;

  @media screen and (min-width: 1240px) {
    display: grid;
    align-items: center;
    color: #fff;
    height: 100%;
  }
`

const SplashMainHeader = styled.div`
  display: inline-block;
  border-bottom: 1px solid #cb90da;
`

const SplashHeaderText = styled.h1`
  color: #fff;
  font-size: 3.5rem;
  letter-spacing: 0.5rem;

  @media screen and (min-width: 1240px) {
    font-size: 6.5rem;
    letter-spacing: 1.5rem;
    margin-right: -1.5rem;
  }
`

const SplashSubHeader = styled.div`
  font-family: 'ff-tisa-web-pro';
  padding-top: 0.75rem;
  font-size: 6.5rem;
  letter-spacing: 1.5rem;

  @media screen and (min-width: 1240px) {
    padding-top: 1.25rem;
  }
`

const SplashSubHeaderText = styled.h2`
  color: #fff;
  font-size: 1rem;
  font-weight: 100;
  font-style: italic;
  letter-spacing: 0.25em;
  margin-right: -0.25em;

  @media screen and (min-width: 1240px) {
    font-size: 1.25rem;
    letter-spacing: 0.5em;
  }
`

const Splash: React.FunctionComponent = () => (
  <StyledSplash>
    <SplashGutter />
    <SplashLeft>
      <img src='/images/dna.svg' alt='DNA' />
    </SplashLeft>
    <SplashRight>
      <SplashText>
        <div>
          <SplashMainHeader>
            <SplashHeaderText>CROWN LAB</SplashHeaderText>
          </SplashMainHeader>
          <SplashSubHeader>
            <SplashSubHeaderText>Meiotic Recombination in Drosophila</SplashSubHeaderText>
          </SplashSubHeader>
          <SplashMenu>
            <SplashMenuItem route='/content/news' text='News' />
            <SplashMenuItem route='/content/research' text='Research' />
            <SplashMenuItem route='/content/people' text='People' />
            <SplashMenuItem route='/content/join' text='Join Us' />
            <SplashMenuItem route='/content/contact' text='Contact' />
          </SplashMenu>
        </div>
      </SplashText>
    </SplashRight>
  </StyledSplash>
)

export { Splash }
