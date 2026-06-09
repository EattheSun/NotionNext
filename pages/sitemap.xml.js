// pages/sitemap.xml.js
import BLOG from '@/blog.config'
import { siteConfig } from '@/lib/config'
import { fetchGlobalAllData } from '@/lib/db/SiteDataApi'
import { extractLangId, extractLangPrefix } from '@/lib/utils/pageId'
import { getServerSideSitemap } from 'next-sitemap'
import { createSiteUrl, normalizeSiteUrl } from '@/lib/utils'

export const getServerSideProps = async ctx => {
  let fields = []
  const siteIds = BLOG.NOTION_PAGE_ID.split(',')

  for (let index = 0; index < siteIds.length; index++) {
    const siteId = siteIds[index]
    const id = extractLangId(siteId)
    const locale = extractLangPrefix(siteId)
    // 第一个id站点默认语言
    const siteData = await fetchGlobalAllData({
      pageId: id,
      from: 'sitemap.xml'
    })
    const link = siteConfig(
      'LINK',
      siteData?.siteInfo?.link,
      siteData.NOTION_CONFIG
    )
    const localeFields = generateLocalesSitemap(link, siteData.allPages, locale)
    fields = fields.concat(localeFields)
  }

  fields = getUniqueFields(fields);

  // 缓存
  ctx.res.setHeader(
    'Cache-Control',
    'public, max-age=3600, stale-while-revalidate=59'
  )
  return getServerSideSitemap(ctx, fields)
}

function generateLocalesSitemap(link, allPages, locale) {
  link = normalizeSiteUrl(link)

  if (locale && locale.length > 0 && locale.indexOf('/') !== 0) {
    locale = '/' + locale
  }
  const dateNow = new Date().toISOString().split('T')[0]
  const defaultFields = [
    {
      loc: createSiteUrl(link, locale),
      lastmod: dateNow,
      changefreq: 'daily',
      priority: '0.7'
    },
    {
      loc: createSiteUrl(link, `${locale}/archive`),
      lastmod: dateNow,
      changefreq: 'daily',
      priority: '0.7'
    },
    {
      loc: createSiteUrl(link, `${locale}/category`),
      lastmod: dateNow,
      changefreq: 'daily',
      priority: '0.7'
    },
    {
      loc: createSiteUrl(link, `${locale}/rss/feed.xml`),
      lastmod: dateNow,
      changefreq: 'daily',
      priority: '0.7'
    },
    {
      loc: createSiteUrl(link, `${locale}/search`),
      lastmod: dateNow,
      changefreq: 'daily',
      priority: '0.7'
    },
    {
      loc: createSiteUrl(link, `${locale}/tag`),
      lastmod: dateNow,
      changefreq: 'daily',
      priority: '0.7'
    }
  ]
  const postFields =
    allPages
      ?.filter(
        p =>
          p.status === BLOG.NOTION_PROPERTY_NAME.status_publish &&
          ['Post', 'Page'].includes(p.type)
      )
      ?.map(post => {
        const slugWithoutLeadingSlash = post?.slug.startsWith('/')
          ? post?.slug?.slice(1)
          : post.slug
        const loc = createSiteUrl(link, `${locale}/${slugWithoutLeadingSlash}`)
        if (!loc) {
          return null
        }
        return {
          loc,
          lastmod: getSitemapDate(post, dateNow),
          changefreq: 'daily',
          priority: '0.7'
        }
      })
      ?.filter(Boolean) ?? []

  return defaultFields.filter(field => field.loc).concat(postFields)
}

function getSitemapDate(post, fallbackDate) {
  const date = post?.lastEditedDay || post?.publishDay || fallbackDate
  const parsedDate = new Date(date)
  return Number.isNaN(parsedDate.getTime())
    ? fallbackDate
    : parsedDate.toISOString().split('T')[0]
}

function getUniqueFields(fields) {
  const uniqueFieldsMap = new Map();

  fields.forEach(field => {
    const existingField = uniqueFieldsMap.get(field.loc);

    if (!existingField || new Date(field.lastmod) > new Date(existingField.lastmod)) {
      uniqueFieldsMap.set(field.loc, field);
    }
  });

  return Array.from(uniqueFieldsMap.values());
}

export default () => {}
