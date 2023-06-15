import { useBlogPost } from '@docusaurus/theme-common/internal'
import { translate } from '@docusaurus/Translate'
import BlogPostItemHeaderInfo from '@theme/BlogPostItem/Header/Info'
import BlogPostItemHeaderTitle from '@theme/BlogPostItem/Header/Title'
import React from 'react'
import { useBlogPluginData } from '../../../lib/useBlogPluginData'
import { BreadcrumbsBase } from '../../DocBreadcrumbs/index'

export default function BlogPostItemHeader(): JSX.Element {
  const {
    metadata: { title, permalink },
    isBlogPostPage,
    assets,
  } = useBlogPost()

  const plugin = useBlogPluginData()
  const routeBasePath = plugin.routeBasePath ?? '/blog'

  return (
    <header>
      {isBlogPostPage && (
        <BreadcrumbsBase
          homePage={translate({
            id: 'theme.blog.breadcrumbs.listPageLabel',
            message: 'All posts',
          })}
          homePageLink={routeBasePath}
          breadcrumbs={[
            {
              type: 'link',
              href: permalink,
              label: title,
            },
          ]}
        />
      )}
      <BlogPostItemHeaderTitle />
      <BlogPostItemHeaderInfo />
    </header>
  )
}
