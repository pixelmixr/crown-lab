import axios from 'axios'
import * as React from 'react'
import { useEffect } from 'react'
import { rootUrl, apiKey } from '../../../api/api'
import { Article as ArticleModel } from '../../../models/article'
import { ContentLayout } from '../../content/content-layout'
import { Article, Articles } from './article'

const News: React.FunctionComponent = () => {
  const [news, setNews] = React.useState<ArticleModel[]>([])
  const [loading, setLoading] = React.useState(true)

  useEffect(() => {
    axios.get(`${rootUrl}/api/posts?populate=*`, { headers: { Authorization: `Bearer ${apiKey}` } }).then(res => {
      const responses: any[] = res.data.data
      const articles = responses
        .map<ArticleModel>(response => ({
          ...response.attributes,
          id: response.id,
          PostDate: new Date(response.attributes.PostDate),
        }))
        .sort((a, b) => b.PostDate.getTime() - a.PostDate.getTime())

      setNews(articles)
      setLoading(false)
    })
  }, [])

  return (
    <ContentLayout>
      <Articles>
        {loading ? <div>Loading...</div> : news.map(article => <Article key={article.id} {...article} />)}
      </Articles>
    </ContentLayout>
  )
}

export { News }
