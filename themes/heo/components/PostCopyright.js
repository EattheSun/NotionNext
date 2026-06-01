import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import SmartLink from '@/components/SmartLink'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import CONFIG from '../config'
import NotByAI from '@/components/NotByAI'

/**
 * 版权声明
 * @returns
 */
export default function PostCopyright() {
  const router = useRouter()
  const [path, setPath] = useState(siteConfig('LINK') + router.asPath)
  useEffect(() => {
    setPath(window.location.href)
  })

  const { locale } = useGlobal()

  if (!siteConfig('HEO_ARTICLE_COPYRIGHT', null, CONFIG)) {
    return <></>
  }

  return (
    <section className='yuezhao-post-copyright dark:text-gray-300 mt-8 mx-1'>
      <ul className='space-y-3 rounded-lg border p-5 md:p-6 text-sm leading-7'>
        <li className='grid gap-1 md:grid-cols-[4.5rem_1fr]'>
          <strong>{locale.COMMON.AUTHOR}:</strong>
          <SmartLink href={'/about'} className='hover:underline'>
            {siteConfig('AUTHOR')}
          </SmartLink>
        </li>
        <li className='grid gap-1 md:grid-cols-[4.5rem_1fr]'>
          <strong>{locale.COMMON.URL}:</strong>
          <a
            className='whitespace-normal break-words hover:underline'
            href={path}>
            {path}
          </a>
        </li>
        <li className='grid gap-1 md:grid-cols-[4.5rem_1fr]'>
          <strong>{locale.COMMON.COPYRIGHT}:</strong>
          <span>{locale.COMMON.COPYRIGHT_NOTICE}</span>
        </li>
        {siteConfig('HEO_ARTICLE_NOT_BY_AI', false, CONFIG) && (
          <li className='pt-2'>
            <NotByAI />
          </li>
        )}
      </ul>
    </section>
  )
}
