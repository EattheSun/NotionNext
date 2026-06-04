import { useGlobal } from '@/lib/global'
import SmartLink from '@/components/SmartLink'
import { useRouter } from 'next/router'

/**
 * 数字翻页插件
 * @param page 当前页码
 * @param showNext 是否有下一页
 * @returns {JSX.Element}
 * @constructor
 */
const PaginationNumber = ({ page, totalPage }) => {
  const router = useRouter()
  const { locale } = useGlobal()
  const currentPage = +page
  const showNext = page < totalPage
  const showPrev = currentPage !== 1
  const pagePrefix = router.asPath
    .split('?')[0]
    .replace(/\/page\/[1-9]\d*/, '')
    .replace(/\/$/, '')
    .replace('.html', '')
  const pages = generatePages(pagePrefix, page, currentPage, totalPage)

  return (
    <>
      {/* pc端分页按钮 */}
      <div className='hidden lg:grid grid-cols-[1fr_auto_1fr] items-center mt-10 font-medium text-black duration-500 dark:text-gray-300 pt-3 gap-2 overflow-x-auto'>
        {/* 上一页 */}
        <div className='justify-self-start'>
          {showPrev && (
            <SmartLink
              href={{
                pathname:
                  currentPage === 2
                    ? `${pagePrefix}/`
                    : `${pagePrefix}/page/${currentPage - 1}`,
                query: router.query.s ? { s: router.query.s } : {}
              }}
              rel='prev'>
              <div className='hover:border-[#31433f] dark:hover:border-[#d4af5e] relative w-24 h-10 flex items-center transition-all duration-200 justify-center py-2 px-2 bg-white dark:bg-[#1e1e1e] border dark:border-gray-600 rounded-lg cursor-pointer group'>
                <span
                  aria-hidden='true'
                  className='mr-2 text-xl leading-none transition-all duration-200 transform group-hover:-translate-x-4'>
                  ‹
                </span>
                <div className='absolute translate-x-4 ml-2 opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0'>
                  {locale.PAGINATION.PREV}
                </div>
              </div>
            </SmartLink>
          )}
        </div>

        {/* 分页 */}
        <div className='flex items-center justify-center space-x-2'>
          {pages}
        </div>

        {/* 下一页 */}
        <div className='justify-self-end'>
          {showNext && (
            <SmartLink
              href={{
                pathname: `${pagePrefix}/page/${currentPage + 1}`,
                query: router.query.s ? { s: router.query.s } : {}
              }}
              rel='next'>
              <div className='hover:border-[#31433f] dark:hover:border-[#d4af5e] relative w-24 h-10 flex items-center transition-all duration-200 justify-center py-2 px-2 bg-white dark:bg-[#1e1e1e] border dark:border-gray-600 rounded-lg cursor-pointer group'>
                <span
                  aria-hidden='true'
                  className='mr-2 text-xl leading-none transition-all duration-200 transform group-hover:translate-x-6'>
                  ›
                </span>
                <div className='absolute -translate-x-10 ml-2 opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:-translate-x-2'>
                  {locale.PAGINATION.NEXT}
                </div>
              </div>
            </SmartLink>
          )}
        </div>
      </div>

      {/* 移动端分页 */}

      <div className='lg:hidden w-full flex flex-row'>
        {/* 上一页 */}
        <SmartLink
          href={{
            pathname:
              currentPage === 2
                ? `${pagePrefix}/`
                : `${pagePrefix}/page/${currentPage - 1}`,
            query: router.query.s ? { s: router.query.s } : {}
          }}
          rel='prev'
          className={`${showPrev ? 'block' : 'hidden'} dark:text-white relative w-full flex-1 h-14 flex items-center transition-all duration-200 justify-center py-2 px-2 bg-white dark:bg-[#1e1e1e] border rounded-xl cursor-pointer`}>
          {locale.PAGINATION.PREV}
        </SmartLink>

        {showPrev && showNext && <div className='w-12'></div>}

        {/* 下一页 */}
        <SmartLink
          href={{
            pathname: `${pagePrefix}/page/${currentPage + 1}`,
            query: router.query.s ? { s: router.query.s } : {}
          }}
          rel='next'
          className={`${+showNext ? 'block' : 'hidden'} dark:text-white relative w-full flex-1 h-14 flex items-center transition-all duration-200 justify-center py-2 px-2 bg-white dark:bg-[#1e1e1e] border rounded-xl cursor-pointer`}>
          {locale.PAGINATION.NEXT}
        </SmartLink>
      </div>
    </>
  )
}

/**
 * 页码按钮
 * @param {*} page
 * @param {*} currentPage
 * @param {*} pagePrefix
 * @returns
 */
function getPageElement(page, currentPage, pagePrefix) {
  const selected = page + '' === currentPage + ''
  if (!page) {
    return <></>
  }
  return (
    <SmartLink
      href={page === 1 ? `${pagePrefix}/` : `${pagePrefix}/page/${page}`}
      key={page}
      passHref
      className={
        (selected
          ? 'bg-[#31433f] dark:bg-[#d4af5e] text-white '
          : 'dark:bg-[#1e1e1e] bg-white') +
        ' hover:border-[#31433f] dark:hover:bg-[#d4af5e] dark:border-gray-600 px-4 border py-2 rounded-lg drop-shadow-sm duration-200 transition-colors'
      }>
      {page}
    </SmartLink>
  )
}

/**
 * 获取所有页码
 * @param {*} pagePrefix
 * @param {*} page
 * @param {*} currentPage
 * @param {*} totalPage
 * @returns
 */
function generatePages(pagePrefix, page, currentPage, totalPage) {
  const pages = []
  const groupCount = 7 // 最多显示页签数
  if (totalPage <= groupCount) {
    for (let i = 1; i <= totalPage; i++) {
      pages.push(getPageElement(i, page, pagePrefix))
    }
  } else {
    pages.push(getPageElement(1, page, pagePrefix))
    const dynamicGroupCount = groupCount - 2
    let startPage = currentPage - 2
    if (startPage <= 1) {
      startPage = 2
    }
    if (startPage + dynamicGroupCount > totalPage) {
      startPage = totalPage - dynamicGroupCount
    }
    if (startPage > 2) {
      pages.push(
        <div key={-1} className='-mt-2 mx-1'>
          ...{' '}
        </div>
      )
    }

    for (let i = 0; i < dynamicGroupCount; i++) {
      if (startPage + i < totalPage) {
        pages.push(getPageElement(startPage + i, page, pagePrefix))
      }
    }

    if (startPage + dynamicGroupCount < totalPage) {
      pages.push(<div key={-2}>... </div>)
    }

    pages.push(getPageElement(totalPage, page, pagePrefix))
  }
  return pages
}
export default PaginationNumber
