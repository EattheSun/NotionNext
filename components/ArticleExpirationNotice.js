import { siteConfig } from '@/lib/config'

/**
 * 文章过期提醒组件
 * 当文章超过指定天数时显示提醒
 * @param {Object} props - 组件属性
 * @param {Object} props.post - 文章数据
 * @param {number} [props.daysThreshold=90] - 过期阈值（天）
 * @returns {JSX.Element|null}
 */
export default function ArticleExpirationNotice({
  post,
  daysThreshold = siteConfig('ARTICLE_EXPIRATION_DAYS', 90)
}) {
  const articleExpirationEnabled = siteConfig(
    'ARTICLE_EXPIRATION_ENABLED',
    false
  )
  if (!articleExpirationEnabled || !post?.lastEditedDay) {
    return null
  }

  const postDate = new Date(post.lastEditedDay)
  const today = new Date()
  const diffTime = Math.abs(today - postDate)
  const daysOld = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  const isVisible = daysOld >= daysThreshold

  if (!isVisible) {
    return null
  }

  // 使用 %%DAYS%% 作为占位符
  const articleExpirationMessage = siteConfig(
    'ARTICLE_EXPIRATION_MESSAGE',
    '这篇文章发布于 %%DAYS%% 天前，内容可能已过时，请谨慎参考。'
  )
  const articleExpirationMessageParts =
    articleExpirationMessage.split('%%DAYS%%')

  // 直接返回 JSX 内容
  return (
    <div
      className={
        'p-4 rounded-lg border border-[#eadfbd] bg-[#faf9f5] dark:bg-[#1e1e1e] text-gray-800 dark:text-gray-200 shadow-sm'
      }>
      <div className='flex items-start'>
        <i className='fas fa-exclamation-triangle text-[#d4af5e] dark:text-[#eadfbd] mt-0.5 mr-2 flex-shrink-0' />
        <div className='ml-1'>
          <div className='text-[#31433f] dark:text-[#eadfbd] font-medium'>
            {siteConfig('ARTICLE_EXPIRATION_TITLE', '温馨提醒')}
          </div>
          <div className='flex items-center mt-1 text-sm text-gray-700 dark:text-gray-300'>
            <i className='far fa-clock text-red-500 dark:text-red-400 mr-1' />
            <span>
              {(() => {
                return (
                  <>
                    {articleExpirationMessageParts[0]}
                    <span className='text-red-500 dark:text-red-400 font-bold'>
                      {daysOld}
                    </span>
                    {articleExpirationMessageParts[1]}
                  </>
                )
              })()}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
