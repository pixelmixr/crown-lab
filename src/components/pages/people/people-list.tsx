import styled from 'styled-components'

export const PeopleList = styled.ul`
  display: flex;
  flex-direction: column;
`

export const PeopleListItem = styled.li`
  &:not(:first-child) {
    margin-top: 5rem;
  }
`
