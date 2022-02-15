import * as React from 'react'
import { useEffect } from 'react'
import { ContentLayout } from '../../content/content-layout'
import { ContentTitle } from '../../content/content-title'
import { PeopleList, PeopleListItem } from './people-list'
import axios from 'axios'
import { apiKey, rootUrl } from '../../../api/api'
import { PersonCard } from './person-card'
import { LabMember } from '../../../models/lab-member'

const People: React.FunctionComponent = () => {
  const [people, setPeople] = React.useState<LabMember[]>([])
  const [loading, setLoading] = React.useState(true)

  useEffect(() => {
    axios.get(`${rootUrl}/api/lab-members?populate=*`, { headers: { Authorization: `Bearer ${apiKey}` } }).then(res => {
      const responses: any[] = res.data.data
      const labMembers = responses.map<LabMember>(response => ({
        id: response.id,
        ProfileImageUrl: response.attributes.ProfileImage.data
          ? response.attributes.ProfileImage.data[0].attributes.url
          : undefined,
        ...response.attributes,
      }))

      setPeople(labMembers)
      setLoading(false)
    })
  }, [])

  return (
    <ContentLayout>
      <ContentTitle>Our People</ContentTitle>
      <div>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <PeopleList>
            {people.map(person => (
              <PeopleListItem key={person.id}>
                <PersonCard
                  name={`${person.FirstName} ${person.LastName}`}
                  title={person.Title}
                  imageSrc={person.ProfileImageUrl ? `${rootUrl}${person.ProfileImageUrl}` : undefined}
                />
              </PeopleListItem>
            ))}
          </PeopleList>
        )}
      </div>
    </ContentLayout>
  )
}

export { People }
