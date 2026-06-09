import BLOG from '@/blog.config'
import NotionPage from '@/components/NotionPage'
import { getPostBlocks } from '@/lib/db/SiteDataApi'
import { Feed } from 'feed'
import fs from 'fs'
import ReactDOMServer from 'react-dom/server'
import { decryptEmail } from '@/lib/plugins/mailEncrypt'
import { createSiteUrl, normalizeSiteUrl } from '@/lib/utils'

/**
 * 生成RSS内容
 * @param {*} post
 * @returns
 */
const createFeedContent = async (post, siteUrl) => {
  // 加密的文章内容只返回摘要
  if (post.password && post.password !== '') {
    return post.summary
  }
  const blockMap = await getPostBlocks(post.id, 'rss-content')
  if (blockMap) {
    post.blockMap = blockMap
    const content = ReactDOMServer.renderToString(<NotionPage post={post} />)
    return content
      .replace(
        /<div class="notion-collection-page-properties">[\s\S]*?(<div class="notion-blank)/,
        '$1'
      )
      .replace(/<div class="notion-viewport"><\/div>/g, '')
      .replace(getInternalHttpLinkPattern(siteUrl), normalizeSiteUrl(siteUrl))
  }
}

/**
 * 生成RSS数据
 * @param {*} props
 */
export async function generateRss(props) {
  const { NOTION_CONFIG, siteInfo, latestPosts } = props
  const TITLE = siteInfo?.title
  const DESCRIPTION = siteInfo?.description
  const LINK = normalizeSiteUrl(siteInfo?.link)
  const AUTHOR = NOTION_CONFIG?.AUTHOR || BLOG.AUTHOR
  const LANG = BLOG.LANG || NOTION_CONFIG?.LANG || 'zh-CN'
  const SUB_PATH = NOTION_CONFIG?.SUB_PATH || BLOG.SUB_PATH
  const CONTACT_EMAIL = decryptEmail(
    NOTION_CONFIG?.CONTACT_EMAIL || BLOG.CONTACT_EMAIL
  )

  // 检查 feed 文件是否在10分钟内更新过
  if (isFeedRecentlyUpdated('./public/rss/feed.xml', 10)) {
    return
  }

  console.log('[RSS订阅] 生成/rss/feed.xml')
  const year = new Date().getFullYear()
  const feed = new Feed({
    title: TITLE,
    description: DESCRIPTION,
    link: createSiteUrl(LINK, SUB_PATH) || LINK,
    language: LANG,
    favicon: `${LINK}/favicon.png`,
    copyright: `All rights reserved ${year}, ${AUTHOR}`,
    author: {
      name: AUTHOR,
      email: CONTACT_EMAIL,
      link: LINK
    }
  })
  for (const post of latestPosts) {
    feed.addItem({
      title: post.title,
      link: createSiteUrl(LINK, post.slug) || LINK,
      description: post.summary,
      content: await createFeedContent(post, LINK),
      date: getFeedDate(post)
    })
  }

  try {
    fs.mkdirSync('./public/rss', { recursive: true })
    fs.writeFileSync('./public/rss/feed.xml', feed.rss2())
    fs.writeFileSync('./public/rss/atom.xml', feed.atom1())
    fs.writeFileSync('./public/rss/feed.json', feed.json1())
  } catch (error) {
    // 在vercel运行环境是只读的，这里会报错；
    // 但在vercel编译阶段、或VPS等其他平台这行代码会成功执行
    // RSS被高频词访问将大量消耗服务端资源，故作为静态文件
  }
}

function getFeedDate(post) {
  const date = post?.publishDay || post?.lastEditedDay
  if (!date) {
    return new Date()
  }

  const parsedDate = new Date(date)
  return Number.isNaN(parsedDate.getTime()) ? new Date() : parsedDate
}

function getInternalHttpLinkPattern(siteUrl) {
  const normalizedSiteUrl = normalizeSiteUrl(siteUrl)
  if (!normalizedSiteUrl) {
    return /^$/
  }

  try {
    const host = new URL(normalizedSiteUrl).host.replace(/\./g, '\\.')
    return new RegExp(`http://${host}`, 'gi')
  } catch (error) {
    return /^$/
  }
}

/**
 * 检查上次更新，如果60分钟内更新过就不操作。
 * @param {*} filePath
 * @param {*} intervalMinutes
 * @returns
 */
function isFeedRecentlyUpdated(filePath, intervalMinutes = 60) {
  try {
    const stats = fs.statSync(filePath)
    const now = new Date()
    const lastModified = new Date(stats.mtime)
    const timeDifference = (now - lastModified) / (1000 * 60) // 转换为分钟
    return timeDifference < intervalMinutes
  } catch (error) {
    // 如果文件不存在，我们需要创建它
    return false
  }
}
