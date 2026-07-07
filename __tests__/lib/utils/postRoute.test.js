import { findPostByRoute } from '@/lib/utils/postRoute'

const article = {
  id: '347abf3c-5b2b-8030-9fe4-c189a1186945',
  short_id: '80309fe4c189a1186945',
  type: 'Post',
  slug: 'xuanhuangbenyuan/xuanhuang-benyuan'
}

describe('findPostByRoute', () => {
  it('matches current full slug routes', () => {
    expect(
      findPostByRoute(
        [article],
        'xuanhuangbenyuan/xuanhuang-benyuan',
        'xuanhuang-benyuan'
      )
    ).toBe(article)
  })

  it('matches legacy article uuid routes by last segment', () => {
    expect(
      findPostByRoute(
        [article],
        'article/347abf3c-5b2b-8030-9fe4-c189a1186945',
        '347abf3c-5b2b-8030-9fe4-c189a1186945'
      )
    ).toBe(article)
  })

  it('matches legacy article slug routes by final slug segment', () => {
    expect(
      findPostByRoute(
        [article],
        'article/xuanhuang-benyuan',
        'xuanhuang-benyuan'
      )
    ).toBe(article)
  })

  it('does not match menu pages', () => {
    const menu = { ...article, type: 'Menu' }
    expect(
      findPostByRoute(
        [menu],
        'article/347abf3c-5b2b-8030-9fe4-c189a1186945',
        '347abf3c-5b2b-8030-9fe4-c189a1186945'
      )
    ).toBeNull()
  })
})
