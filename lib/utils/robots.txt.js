import fs from 'fs'
import BLOG from '@/blog.config'
import { siteConfig } from '../config'
import { normalizeSiteUrl } from './index'

export function generateRobotsTxt(props) {
  const { NOTION_CONFIG, siteInfo } = props
  const LINK = normalizeSiteUrl(
    siteConfig('LINK', siteInfo?.link || BLOG.LINK, NOTION_CONFIG)
  )
  const content = `
    # *
    User-agent: *
    Allow: /
  
    # Host
    Host: ${LINK}
  
    # Sitemaps
    Sitemap: ${LINK}/sitemap.xml
  
    `
  try {
    fs.mkdirSync('./public', { recursive: true })
    fs.writeFileSync('./public/robots.txt', content)
  } catch (error) {
    // 在vercel运行环境是只读的，这里会报错；
    // 但在vercel编译阶段、或VPS等其他平台这行代码会成功执行
  }
}
