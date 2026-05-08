import BLOG from '@/blog.config'
import { siteConfig } from '@/lib/config'
import { fetchGlobalAllData } from '@/lib/db/SiteDataApi'
import { extractLangId } from '@/lib/utils/pageId'
import { Feed } from 'feed'

export async function getServerSideProps(ctx) {
  const siteId = BLOG.NOTION_PAGE_ID.split(',')[0]
  const pageId = extractLangId(siteId)

  const siteData = await fetchGlobalAllData({
    pageId,
    from: 'rss/feed.xml'
  })

  const link = siteConfig(
    'LINK',
    siteData?.siteInfo?.link || BLOG.LINK,
    siteData.NOTION_CONFIG
  ).replace(/\/$/, '')

  const feed = new Feed({
    title: siteData?.siteInfo?.title || siteConfig('TITLE') || BLOG.TITLE,
    description:
      siteData?.siteInfo?.description ||
      siteConfig('DESCRIPTION') ||
      BLOG.DESCRIPTION,
    id: link,
    link,
    language: BLOG.LANG,
    favicon: `${link}/favicon.ico`,
    copyright: `${new Date().getFullYear()} ${siteConfig('AUTHOR') || BLOG.AUTHOR}`
  })

  const posts =
    siteData?.allPages?.filter(
      post =>
        post.status === BLOG.NOTION_PROPERTY_NAME.status_publish &&
        post.type === BLOG.NOTION_PROPERTY_NAME.type_post
    ) || []

  posts.forEach(post => {
    const slug = post.slug?.startsWith('/') ? post.slug : `/${post.slug}`

    feed.addItem({
      title: post.title,
      id: `${link}${slug}`,
      link: `${link}${slug}`,
      description: post.summary || '',
      date: new Date(post.publishDay || post.lastEditedDate || Date.now())
    })
  })

  ctx.res.setHeader('Content-Type', 'application/rss+xml; charset=utf-8')
  ctx.res.setHeader(
    'Cache-Control',
    'public, max-age=3600, stale-while-revalidate=600'
  )
  ctx.res.write(feed.rss2())
  ctx.res.end()

  return {
    props: {}
  }
}

export default function RSS() {
  return null
}
