import * as React from 'react'
import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'
import { rootUrl } from '../../../api/api'
import { Article as ArticleModel } from '../../../models/article'

export const Articles = styled.ul``

const StyledArticle = styled.li`
  &:not(:last-child) {
    margin-bottom: 6rem;
  }
`

const ArticleHeader = styled.div`
  margin-bottom: 2rem;
`

const ArticleHeaderTitle = styled.h2`
  font-size: 2rem;
  line-height: 3rem;
`

const ArticleHeaderSubtitle = styled.h3`
  font-weight: normal;
  font-style: italic;
`

const ArticleContent = styled.div`
  font-size: 1.4rem;
  line-height: 2.4rem;
`

type ArticleProps = ArticleModel

const getSourceText = (src: string) => {
  const urlRx = /^https?.*/
  const match = urlRx.test(src)

  if (!match) {
    return `${rootUrl}/${src.replace(/^\//, '')}`
  }

  return src
}

const Article: React.FunctionComponent<ArticleProps> = ({ Title, PostDate, Content }) => (
  <StyledArticle>
    <ArticleHeader>
      <ArticleHeaderTitle>{Title}</ArticleHeaderTitle>
      <ArticleHeaderSubtitle>
        {PostDate.toLocaleDateString('en-us', { year: 'numeric', month: 'long', day: 'numeric' })}
      </ArticleHeaderSubtitle>
    </ArticleHeader>
    <ArticleContent>
      <ReactMarkdown transformImageUri={getSourceText}>{Content}</ReactMarkdown>
    </ArticleContent>
  </StyledArticle>
)

export { Article }
