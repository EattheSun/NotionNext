import BLOG from '@/blog.config'
import { siteConfig } from '../config'
import { createSiteUrl, normalizeSiteUrl } from './index'
/**
 * 生成站点地图
 * @param {*} param0
 */
export function generateSitemapXml({ allPages, NOTION_CONFIG }) {
  let link = normalizeSiteUrl(siteConfig('LINK', BLOG.LINK, NOTION_CONFIG))
  const urls = [
    {
      loc: createSiteUrl(link),
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'daily',
      priority: 1.0
    },
    {
      loc: createSiteUrl(link, 'archive'),
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'daily',
      priority: 1.0
    },
    {
      loc: createSiteUrl(link, 'category'),
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'daily'
    },
    {
      loc: createSiteUrl(link, 'tag'),
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'daily'
    }
  ]
  // 循环页面生成
  allPages?.forEach(post => {
    const slugWithoutLeadingSlash = post?.slug?.startsWith('/')
      ? post?.slug?.slice(1)
      : post.slug
    const loc = createSiteUrl(link, slugWithoutLeadingSlash)
    if (loc) {
      urls.push({
        loc,
        lastmod: getSitemapDate(post),
        changefreq: 'daily'
      })
    }
  })
  return createSitemapXml(urls)
}

function getSitemapDate(post) {
  const date = post?.lastEditedDay || post?.publishDay
  if (!date) {
    return new Date().toISOString().split('T')[0]
  }

  const parsedDate = new Date(date)
  return Number.isNaN(parsedDate.getTime())
    ? new Date().toISOString().split('T')[0]
    : parsedDate.toISOString().split('T')[0]
}

/**
 * 生成站点地图
 * @param {*} urls
 * @returns
 */
function createSitemapXml(urls) {
  let urlsXml = ''
  urls.forEach(u => {
    urlsXml += `<url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    </url>
    `
  })

  return `
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
    xmlns:xhtml="http://www.w3.org/1999/xhtml"
    xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
    xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
    ${urlsXml}
    </urlset>
    `
}
