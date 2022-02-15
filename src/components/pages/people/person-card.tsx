import * as React from 'react'
import styled from 'styled-components'

const StyledPersonCard = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  min-height: 300px;
`

interface StyledPersonCardPhotoProps {
  src: string
}

const StyledPersonCardPhoto = styled.div<StyledPersonCardPhotoProps>`
  background-image: url(${props => props.src});
  background-size: cover;
  margin-right: 2rem;
  width: 300px;
  height: 300px;
`

type PersonCardPhotoProps = StyledPersonCardPhotoProps & { tooltip?: string }

const PersonCardPhoto: React.FunctionComponent<PersonCardPhotoProps> = ({ src, tooltip }) => (
  <StyledPersonCardPhoto src={src} title={tooltip} />
)

const PersonCardInfo = styled.div`
  margin-left: 2rem;
  padding-left: 2rem;
  border-left: 5px solid #cb90da;
`

const PersonCardInfoSection = styled.section`
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;

  &:not(:first-child) {
    margin-top: 2rem;
  }
`

const PersonCardName = styled.span`
  font-size: 2rem;
  letter-spacing: 0.2rem;
  font-weight: 600;
`

const PersonCardData = styled.span``

interface PersonCardProps {
  name: string
  title?: string
  imageSrc?: string
  about?: string
}

const unknownImageSrc = '/images/anonymous.png'

const PersonCard: React.FunctionComponent<PersonCardProps> = ({ about, name, title, imageSrc }) => (
  <StyledPersonCard>
    <PersonCardPhoto src={imageSrc || unknownImageSrc} tooltip={name} />
    <PersonCardInfo>
      <PersonCardInfoSection>
        <PersonCardName>{name}</PersonCardName>
        {title && <PersonCardData>{title}</PersonCardData>}
      </PersonCardInfoSection>
      {about && (
        <PersonCardInfoSection>
          <PersonCardData>{about}</PersonCardData>
        </PersonCardInfoSection>
      )}
    </PersonCardInfo>
  </StyledPersonCard>
)

export { PersonCard }
