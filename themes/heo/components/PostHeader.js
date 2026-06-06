import { HashTag } from '@/components/HeroIcons'
import LazyImage from '@/components/LazyImage'
import NotionIcon from '@/components/NotionIcon'
import WordCount from '@/components/WordCount'
import { siteConfig } from '@/lib/config'
import { formatDateFmt } from '@/lib/utils/formatDate'
import SmartLink from '@/components/SmartLink'

/**
 * 文章页头
 * @param {*} param0
 * @returns
 */
export default function PostHeader({ post, siteInfo, isDarkMode }) {
  if (!post) {
    return <></>
  }
  // 文章头图
  const headerImage = post?.pageCover ? post.pageCover : siteInfo?.pageCover
  return (
    <div
      id='post-bg'
      className='yuezhao-post-header md:mb-0 -mb-5 w-full h-[30rem] relative md:flex-shrink-0 overflow-hidden bg-cover bg-center bg-no-repeat z-10'>
      <style jsx>{`
        .coverdiv:after {
          position: absolute;
          content: '';
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          box-shadow: 110px -130px 500px 100px
            ${isDarkMode ? 'rgba(212, 175, 94, 0.32)' : 'rgba(49, 67, 63, 0.16)'} inset;
        }
      `}</style>

      <div
        className='yuezhao-post-header-bg absolute top-0 w-full h-full py-10 flex justify-center items-center'>
        {/* 文章背景图 */}
        <div
          id='post-cover-wrapper'
          style={{
            filter: 'blur(15px)'
          }}
          className='coverdiv opacity-0 pointer-events-none lg:translate-x-96 lg:rotate-12'>
          <LazyImage
            id='post-cover'
            className='w-full h-full object-cover max-h-[50rem] min-w-[50vw] min-h-[20rem]'
            src={headerImage}
          />
        </div>

        {/* 文章文字描述 */}
        <div
          id='post-info'
          className='absolute top-48 z-10 flex flex-col space-y-4 lg:-mt-12 w-full max-w-[86rem] px-5'>
          {/* 分类+标签 */}
          <div className='flex justify-center md:justify-start items-center gap-4'>
            {post.category && (
              <>
                <SmartLink
                  href={`/category/${post.category}`}
                  className='mr-4'
                  passHref
                  legacyBehavior>
                  <div className='cursor-pointer font-sm font-bold px-3 py-1 rounded-lg hover:bg-[#eadfbd] text-white bg-[#31433f] dark:bg-[#d4af5e] hover:text-[#31433f] duration-200 '>
                    {post.category}
                  </div>
                </SmartLink>
              </>
            )}

            {post.tagItems && (
              <div className='hidden md:flex justify-center flex-nowrap overflow-x-auto'>
                {post.tagItems.map((tag, index) => (
                  <SmartLink
                    key={index}
                    href={`/tag/${encodeURIComponent(tag.name)}`}
                    passHref
                    className={
                      'group cursor-pointer inline-block text-[#707876] dark:text-[#8f9894] hover:text-[#31433f] dark:hover:text-[#eadfbd] duration-200 py-0.5 px-1 whitespace-nowrap '
                    }>
                    <div className='font-light flex items-center'>
                      <HashTag className='text-[#9aa39f] dark:text-[#8f9894] group-hover:text-[#31433f] dark:group-hover:text-[#eadfbd] stroke-2 mr-0.5 w-3 h-3 duration-200' />{' '}
                      {tag.name + (tag.count ? `(${tag.count})` : '')}{' '}
                    </div>
                  </SmartLink>
                ))}
              </div>
            )}
          </div>

          {/* 文章Title */}
          <div className='max-w-5xl font-bold text-3xl lg:text-5xl md:leading-snug flex justify-center md:justify-start text-[#171a18] dark:text-white'>
            {siteConfig('POST_TITLE_ICON') && (
              <NotionIcon icon={post.pageIcon} />
            )}
            {post.title}
          </div>

          {/* 标题底部补充信息 */}
          <section className='flex-wrap dark:text-gray-200 flex text-sm justify-center md:justify-start mt-4 text-[#707876] dark:text-gray-200 font-light leading-8'>
            <div className='flex justify-center '>
              <div className='mr-2'>
                <WordCount
                  wordCount={post.wordCount}
                  readTime={post.readTime}
                />
              </div>
              {post?.type !== 'Page' && (
                <>
                  <SmartLink
                    href={`/archive#${formatDateFmt(post?.publishDate, 'yyyy-MM')}`}
                    passHref
                    className='pl-1 mr-2 cursor-pointer hover:underline'>
                    <i className='fa-regular fa-calendar'></i>{' '}
                    {post?.publishDay}
                  </SmartLink>
                </>
              )}

              <div className='pl-1 mr-2'>
                <i className='fa-regular fa-calendar-check'></i>{' '}
                {post.lastEditedDay}
              </div>
            </div>

          </section>
        </div>
      </div>
    </div>
  )
}
